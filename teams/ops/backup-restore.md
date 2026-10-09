# OpsTeam backup and restore

- Status: draft — pending user review

## Objective

Define backup and restoration verification for approved systems before any backup job or restore action is enabled.

## Inputs

## Workflow

## Tools, skills, and references

[Restic](https://restic.net/) is a candidate open-source backup tool with encrypted, incremental, and verifiable backups. Evaluate repository location, encryption-key handling, retention, and restore testing before adoption.

## Coolify MCP access

Use the token-scoped Ops profile at `https://cool.scottg.cloud/mcp` for explicitly approved backup-service inspection. See the [official Coolify MCP documentation](https://coolify.io/docs/integrations/mcp). Backup, restore, environment, and deployment changes require explicit authorization.

## Scope, permissions, and constraints

## Outputs and evidence

## Reporting and escalation

## Open questions
