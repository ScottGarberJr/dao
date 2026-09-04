# Assistant email management

- Status: draft — pending user review

## Objective

Manage approved Outlook email workflows for the designated inboxes.

## Inputs

## Workflow

1. Define the two designated mailboxes, allowed folders, and the initial read-only operations.
2. Expose those operations through narrow n8n-backed MCP tools—for example, list recent messages, search a mailbox, or retrieve a specifically requested message—rather than exposing generic provider access.
3. Keep drafting, sending, moving, categorizing, deleting, or forwarding as separate write-capable tools with an explicit confirmation policy.
4. Record only sanitized operational summaries in Git; never commit mail bodies, attachments, addresses, access tokens, or exports.

## Tools, skills, and references

All entries below are candidates only. None is connected or approved for use.

- [Microsoft Graph Outlook mail API](https://learn.microsoft.com/en-us/graph/api/resources/mail-api-overview) — preferred Microsoft platform interface to Outlook mail; define least-privilege permissions and read/write boundaries before adoption.
- [n8n MCP server](https://docs.n8n.io/advanced-ai/accessing-n8n-mcp-server/) — optional future implementation path for approved, repeatable email actors; it is not the DAO orchestrator.

## Scope, permissions, and constraints

Begin with delegated least-privilege Microsoft Graph access and read-only MCP tools. Mailbox-specific boundaries, sender restrictions, retention rules, and any send policy remain open decisions.

## Outputs and evidence

## Reporting and escalation

## Open questions
