#!/usr/bin/env node
/** Minimal stdio MCP server exposing the bounded local Hermes -> Herdr adapter. */
import { execFile } from "node:child_process";
import { createInterface } from "node:readline";

const adapter = "/home/scottg/dev/dao/scripts/hermes-herdr.mjs";

function callAdapter(args, timeout = 150_000) {
  return new Promise((resolve, reject) => {
    execFile(process.execPath, [adapter, ...args], {
      encoding: "utf8",
      timeout,
      maxBuffer: 8 * 1024 * 1024,
      env: process.env,
    }, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(String(stderr || stdout || error.message).trim()));
        return;
      }
      try { resolve(JSON.parse(stdout)); }
      catch { reject(new Error(`Adapter returned invalid JSON: ${stdout}`)); }
    });
  });
}

const tools = [
  {
    name: "herdr_snapshot",
    description: "Read the live Herdr workspace, pane, and agent snapshot.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true },
  },
  {
    name: "herdr_discover_project",
    description: "Match a project Git repository under /home/scottg/dev to Herdr workspaces and agents. Read-only.",
    inputSchema: { type: "object", properties: { repository_path: { type: "string" } }, required: ["repository_path"], additionalProperties: false },
    annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true },
  },
  {
    name: "herdr_provision_workspace",
    description: "Create a Herdr workspace rooted at a verified repository. Requires explicit approval.",
    inputSchema: {
      type: "object",
      properties: {
        repository_path: { type: "string" },
        label: { type: "string", maxLength: 64 },
        approved: { type: "boolean", description: "Must be true; confirms authorization for workspace creation." },
      },
      required: ["repository_path", "approved"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: false },
  },
  {
    name: "herdr_prompt_lead",
    description: "Send an explicitly approved bounded brief to a known Lead agent and wait for completion.",
    inputSchema: {
      type: "object",
      properties: {
        target: { type: "string", description: "Stable Herdr agent target, such as dao-lead." },
        brief: { type: "string", maxLength: 12000 },
        approved: { type: "boolean", description: "Must be true; confirms authorization for this prompt." },
      },
      required: ["target", "brief", "approved"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: false },
  },
];

function reply(id, result) { process.stdout.write(`${JSON.stringify({ jsonrpc: "2.0", id, result })}\n`); }
function error(id, code, message) { process.stdout.write(`${JSON.stringify({ jsonrpc: "2.0", id, error: { code, message } })}\n`); }

async function handle(message) {
  if (message.method === "notifications/initialized" || message.method === "notifications/cancelled") return;
  if (message.method === "initialize") {
    reply(message.id, {
      protocolVersion: message.params?.protocolVersion || "2024-11-05",
      capabilities: { tools: {} },
      serverInfo: { name: "dao-herdr-bridge", version: "0.1.0" },
      instructions: "Local-only bounded Hermes Head to Herdr bridge. Use discovery before prompting; prompting requires approved=true.",
    });
    return;
  }
  if (message.method === "ping") { reply(message.id, {}); return; }
  if (message.method === "tools/list") { reply(message.id, { tools }); return; }
  if (message.method !== "tools/call") { error(message.id, -32601, `Unsupported method: ${message.method}`); return; }

  const name = message.params?.name;
  const args = message.params?.arguments || {};
  try {
    let result;
    if (name === "herdr_snapshot") result = await callAdapter(["snapshot"]);
    else if (name === "herdr_discover_project") result = await callAdapter(["discover", args.repository_path]);
    else if (name === "herdr_provision_workspace") {
      if (args.approved !== true) throw new Error("Workspace provisioning refused: approved must be true.");
      const commandArgs = ["provision", args.repository_path];
      if (args.label) commandArgs.push(args.label);
      commandArgs.push("--approve");
      result = await callAdapter(commandArgs, 75_000);
    } else if (name === "herdr_prompt_lead") {
      if (args.approved !== true) throw new Error("Prompt refused: approved must be true.");
      result = await callAdapter(["prompt", args.target, args.brief, "--approve"]);
    } else throw new Error(`Unknown tool: ${name}`);
    reply(message.id, { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] });
  } catch (e) {
    reply(message.id, { isError: true, content: [{ type: "text", text: String(e.message || e) }] });
  }
}

const input = createInterface({ input: process.stdin, crlfDelay: Infinity });
input.on("line", (line) => {
  if (!line.trim()) return;
  try { void handle(JSON.parse(line)); }
  catch (e) { error(null, -32700, String(e.message || e)); }
});
