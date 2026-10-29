#!/usr/bin/env node
/**
 * Small, dependency-free Hermes Head -> Herdr adapter.
 *
 * This is intentionally a CLI bridge, not a network service. It only invokes
 * structured Herdr CLI commands and emits JSON for Hermes/tool callers.
 * Mutating operations require explicit --approve and remain bounded.
 */
import { execFileSync } from "node:child_process";
import { existsSync, realpathSync } from "node:fs";
import { resolve } from "node:path";

const HERDR = process.env.HERDR_BIN_PATH || "herdr";
const PROJECT_ROOT = resolve(process.env.HERMES_PROJECT_ROOT || "/home/scottg/dev");

function fail(message, code = 2) {
  console.error(JSON.stringify({ ok: false, error: message }));
  process.exit(code);
}

function run(args, { timeout = 30_000 } = {}) {
  try {
    const stdout = execFileSync(HERDR, args, {
      encoding: "utf8",
      timeout,
      maxBuffer: 8 * 1024 * 1024,
      stdio: ["ignore", "pipe", "pipe"],
    });
    return JSON.parse(stdout);
  } catch (error) {
    const detail = String(error.stderr || error.stdout || error.message || error).trim();
    fail(`Herdr command failed: ${args.join(" ")}\n${detail}`);
  }
}

function repoRoot(input) {
  const candidate = realpathSync(resolve(input));
  const root = realpathSync(PROJECT_ROOT);
  if (candidate !== root && !candidate.startsWith(`${root}/`)) {
    fail(`Repository must be inside ${root}: ${candidate}`);
  }
  try {
    const gitRoot = execFileSync("git", ["-C", candidate, "rev-parse", "--show-toplevel"], {
      encoding: "utf8",
      timeout: 10_000,
    }).trim();
    return realpathSync(gitRoot);
  } catch {
    fail(`Not a Git repository: ${candidate}`);
  }
}

function snapshot() {
  return run(["api", "snapshot"]);
}

function workspaceFor(root) {
  const listed = run(["workspace", "list"]);
  const workspaces = listed?.result?.workspaces || [];
  return workspaces.filter((workspace) => workspace?.worktree?.repo_root === root);
}

function agentsFor(workspaceId) {
  const live = snapshot()?.result?.snapshot || {};
  return (live.agents || []).filter((agent) => agent.workspace_id === workspaceId);
}

function discover(projectPath) {
  const root = repoRoot(projectPath);
  const workspaces = workspaceFor(root);
  const agents = workspaces.flatMap((workspace) =>
    agentsFor(workspace.workspace_id).map((agent) => ({ ...agent, workspace_label: workspace.label })),
  );
  return {
    ok: true,
    operation: "discover",
    repository: root,
    project_dir: root,
    workspace_exists: workspaces.length > 0,
    workspaces,
    agents,
    next: workspaces.length
      ? "Resolve or provision a stable Lead identity before sending project work."
      : "Read project-owned docs from the portfolio workspace, then request approval before provisioning a project workspace.",
  };
}

function prompt(target, text, approve) {
  if (!approve) fail("Prompting a Lead is mutating control; repeat with --approve.");
  if (!target || !text) fail("Usage: prompt <agent-name-or-target> <brief> --approve");
  if (text.length > 12_000) fail("Brief exceeds 12,000 characters; keep delegation bounded.");
  const result = run(["agent", "prompt", target, text, "--wait", "--timeout", "120000"], { timeout: 150_000 });
  return { ok: true, operation: "prompt", target, result };
}

function provision(projectPath, label, approve) {
  if (!approve) fail("Workspace provisioning is mutating control; repeat with --approve.");
  const root = repoRoot(projectPath);
  const workspaceLabel = label || root.split("/").pop();
  if (!/^[A-Za-z0-9._ -]{1,64}$/.test(workspaceLabel)) fail("Workspace label contains unsupported characters.");
  const result = run(["workspace", "create", "--cwd", root, "--label", workspaceLabel, "--no-focus"], { timeout: 60_000 });
  return { ok: true, operation: "provision", repository: root, label: workspaceLabel, result };
}

const [operation, ...rest] = process.argv.slice(2);
if (!operation || operation === "--help" || operation === "-h") {
  console.log(`Usage:
  hermes-herdr.mjs snapshot
  hermes-herdr.mjs discover <repository-path>
  hermes-herdr.mjs provision <repository-path> [label] --approve
  hermes-herdr.mjs prompt <agent-target> <bounded-brief> --approve`);
  process.exit(0);
}

if (operation === "snapshot") {
  console.log(JSON.stringify({ ok: true, operation, result: snapshot() }, null, 2));
} else if (operation === "discover") {
  const path = rest[0];
  if (!path || !existsSync(resolve(path))) fail("Usage: discover <existing repository path>");
  console.log(JSON.stringify(discover(path), null, 2));
} else if (operation === "provision") {
  const approveIndex = rest.indexOf("--approve");
  const approve = approveIndex !== -1;
  const args = approve ? rest.filter((arg) => arg !== "--approve") : rest;
  if (!args[0]) fail("Usage: provision <repository-path> [label] --approve");
  console.log(JSON.stringify(provision(args[0], args[1], approve), null, 2));
} else if (operation === "prompt") {
  const approveIndex = rest.indexOf("--approve");
  const approve = approveIndex !== -1;
  const args = approve ? rest.filter((arg) => arg !== "--approve") : rest;
  console.log(JSON.stringify(prompt(args[0], args.slice(1).join(" "), approve), null, 2));
} else {
  fail(`Unknown operation: ${operation}`);
}
