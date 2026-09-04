# DEPLOY

- Team: DevTeam
- Status: draft — pending user review

## Objective

Prepare approved work for deployment or handoff without enabling a deployment until the user authorizes it.

## Inputs

- Approved pull request or branch, passing required checks, and user-approved deployment target.
- The target environment's documented health check, rollback path, and client-review destination.

## Workflow

1. Use GitHub branches and pull requests as the durable change and review path. When cloud execution is preferable, use a configured Codex Cloud environment to prepare a reviewed pull request rather than editing a production server directly.
2. Confirm required checks and acceptance criteria before the deployment decision.
3. Inspect the approved Coolify application, environment, deployment history, and health information before changing anything.
4. Trigger a deployment only with user authorization, then verify the agreed health checks and preserve the result for client review.
5. If verification fails, stop promotion, collect evidence, and use the documented rollback path.

## Tools, skills, and references

All entries below are candidates only. None is installed, connected, or approved for use.

- [ChatGPT Sites](https://openai.com/academy/chatgpt-sites/) — deploy approved site demos only; it is not a design capability.
- [Docker MCP Toolkit](https://docs.docker.com/ai/mcp-catalog-and-toolkit/) — Docker Desktop beta capability for managed MCP profiles and servers. Evaluate only if Docker is part of an approved deployment workflow.
- [Coolify built-in MCP server](https://coolify.io/docs/integrations/mcp) — priority candidate for a direct, token-scoped view of the Coolify instance. The documentation describes it as read-only while also listing a deployment tool; verify the behavior and version before enabling any write capability.
- [Codex Cloud](https://learn.chatgpt.com/docs/cloud) — candidate for working in a cloud environment attached to a GitHub repository, reviewing changes, and creating pull requests.

## Scope, permissions, and constraints

Do not grant a deployment MCP broad tokens, expose environment secrets, or let an agent deploy automatically. Start with read-only infrastructure inspection.

## Outputs and evidence

## Reporting and escalation

## Open questions
