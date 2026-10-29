# OpsTeam

- Status: active runtime draft — pending user review
- Purpose: Define approved operational work related to client projects and the user's VPS environment.

## Shared workflow

## Coolify MCP access

Every Ops role may use the Pi WSL Ops profile's token-scoped Coolify MCP at `https://cool.scottg.cloud/mcp` for an explicitly approved task. See the [official Coolify MCP documentation](https://coolify.io/docs/integrations/mcp). The profile is write-capable: `control` (start/stop/restart), `deploy`, and `cancel_deployment` are exposed when the token has the required `deploy` ability. Begin with `coolify_help` and read-only inspection. Deployment, restart, environment, database, backup, and other state-changing actions require explicit user authorization for the exact target and action. The token is stored outside Git and is not included in role prompts.

## Scope and permissions

No VPS, site, database, backup, monitoring, email-notification, or client-project system is connected or authorized by this document without an explicit task approval. The MCP connection exists for the approved token-scoped Ops profile, not as blanket permission to act. For a harmless write smoke test, use `control` → `start` only on an already-running, explicitly approved service and require the `already running` result; never stop, restart, force-deploy, or deploy production to test access.

## Workflow and task documents

- [server-reporting](server-reporting.md) — V1 draft
- [site-reporting](site-reporting.md) — V1 draft
- [site-monitoring](site-monitoring.md) — V1 draft
- [db-monitoring](db-monitoring.md) — V1 draft
- [backup-restore](backup-restore.md) — V1 draft
- [Windows IT Agent](windows-it.md) — proposed local workstation support role

## Reporting and escalation

Each operational handoff records the target and UUID, pre-change status, exact MCP tool/action (without credentials), result, and post-action health. Escalate when the requested target is ambiguous, the token lacks `deploy`, or a restart/stop/deploy is requested without exact authorization.

## Open questions
