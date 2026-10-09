# OpsTeam database monitoring

- Status: draft — pending user review

## Objective

Report approved database health and performance signals without granting broader database access than necessary.

## Inputs

## Workflow

## Tools, skills, and references

[Microsoft Postgres MCP](https://github.com/microsoft/postgres-mcp) is a candidate only if an approved database uses PostgreSQL. Use an explicit read-only profile and database role for any evaluation; this MCP executes with the connected role's permissions.

## Coolify MCP access

Use the token-scoped Ops profile at `https://cool.scottg.cloud/mcp` for explicitly approved application/database-service inspection. See the [official Coolify MCP documentation](https://coolify.io/docs/integrations/mcp). Database, environment, and deployment changes require explicit authorization.

## Scope, permissions, and constraints

## Outputs and evidence

## Reporting and escalation

## Open questions
