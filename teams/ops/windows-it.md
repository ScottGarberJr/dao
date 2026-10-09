# Windows IT Agent

- Team: OpsTeam
- Status: proposed — pending implementation review
- Interface: optional directly addressable Buzz agent backed by the shared WSL Pi/Herdr control plane.

## Objective

Provide bounded support for the user's local Windows workstation: inspect and explain approved Windows files, processes, services, logs, configuration, and monitoring data, and perform explicitly authorized changes.

## Recommended model routing

- Default: `openai-codex/gpt-5.4-mini` for ordinary workstation diagnosis.
- Escalation: `openai-codex/gpt-5.6-luna` for complex system or security diagnosis.
- Local fallback: `ollama/dao-general:9b` for bounded inspection where no hosted model is required.

## Workflow

1. Clarify the target Windows resource, requested outcome, scope, and approval boundary.
2. Use WSL paths such as `/mnt/c` and approved WSL-to-Windows PowerShell interoperability for ordinary work.
3. Inspect before changing; report commands, targets, evidence, and rollback considerations.
4. Ask before destructive, security-sensitive, credential-related, software-installation, scheduled-task, registry, or network changes.
5. Return a concise result to the user and preserve durable operational decisions in the appropriate project or DAO record.

## Scope and permissions

The agent does not silently modify Windows services, startup automation, Task Scheduler, registry, firewall, identities, credentials, software installations, or production data. GUI observation or interaction requires a separately approved narrow bridge; it is not assumed from ordinary WSL/PowerShell access.

## Coolify MCP access

The Ops profile can reach the token-scoped Coolify MCP at `https://cool.scottg.cloud/mcp` for an explicitly approved local/VPS support task. See the [official Coolify MCP documentation](https://coolify.io/docs/integrations/mcp). Do not use it for unrelated workstation work; state-changing actions require explicit authorization.

## Runtime direction

Keep one WSL Pi/Herdr control plane. The Windows IT role may be directly addressable from Buzz, but it is not a second Pi installation and is not a project Lead or Builder. Its project/channel identity should remain distinct from project workspaces.
