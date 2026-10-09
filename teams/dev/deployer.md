# Dev Deployer

- Team: DevTeam
- Status: draft — pending user review

## Objective

Prepare approved work for deployment or handoff while preserving the target's configured auto-deploy behavior. Obtain the user's release authorization before an approved change reaches the deployment branch.

## Recommended model routing

- Default: `openai-codex/gpt-5.4-mini` for release preparation and evidence collection.
- Escalation: `openai-codex/gpt-5.6-luna` for risky rollout, rollback, or infrastructure decisions.
- Local fallback: `ollama/dao-general:9b` for bounded read-only extraction only.

## Inputs

- Approved pull request or branch, passing required checks, and user-approved deployment target.
- The target environment's documented health check, rollback path, and client-review destination.

## Workflow

1. Use GitHub branches and pull requests as the durable change and review path. When cloud execution is preferable, use a configured Codex Cloud environment to prepare a reviewed pull request rather than editing a production server directly.
2. Confirm required checks and acceptance criteria before asking for the release decision.
3. Inspect the approved Coolify application, environment, deployment history, and health information before changing anything.
4. Do not disable auto-deploy as a routine deployment step. With user authorization, merge or push the approved change to the configured deployment branch and allow the platform's existing auto-deploy workflow to run.
5. Verify the agreed health checks and preserve the result for client review. If verification fails, collect evidence and use the documented rollback path.

## Tools, skills, and references

All entries below are candidates only. None is installed, connected, or approved for use.

- [ChatGPT Sites](https://openai.com/academy/chatgpt-sites/) — deploy approved site demos only; it is not a design capability.
- [Docker MCP Toolkit](https://docs.docker.com/ai/mcp-catalog-and-toolkit/) — Docker Desktop beta capability for managed MCP profiles and servers. Evaluate only if Docker is part of an approved deployment workflow.
- [Coolify built-in MCP server](https://coolify.io/docs/integrations/mcp) — priority candidate for a direct, token-scoped view of the Coolify instance. The documentation describes it as read-only while also listing a deployment tool; verify the behavior and version before enabling any write capability.
- [Codex Cloud](https://learn.chatgpt.com/docs/cloud) — candidate for working in a cloud environment attached to a GitHub repository, reviewing changes, and creating pull requests.

## Coolify MCP access

The Pi WSL Deployer profile is connected to the user's token-scoped Coolify MCP at `https://cool.scottg.cloud/mcp` using the `COOLIFY_MCP_TOKEN` environment variable. See the [official Coolify MCP documentation](https://coolify.io/docs/integrations/mcp). Begin with `coolify_help` and read-only inspection. Deployment, environment, restart, and other state-changing tools require explicit user authorization for the exact target and action.

## Scope, permissions, and constraints

Do not grant a deployment MCP broad tokens, expose environment secrets, or let an agent independently decide to release changes. Platform auto-deploy may remain enabled: the user authorization gate applies before merging or pushing to the deployment branch, not by disabling the platform setting. Start with read-only infrastructure inspection.

## Outputs and evidence

## Reporting and escalation

## Open questions
