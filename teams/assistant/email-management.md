# Assistant email management

- Status: V1 implementation target — the three configured inbox credentials exist in n8n; Gu access remains to be tested.

## Objective

Manage approved Outlook email workflows for the designated inboxes.

## Inputs

## Workflow

1. Use the configured personal Gmail, professional Outlook, and SG Solutions Outlook inboxes with their existing n8n credentials.
2. Expose those operations through narrow n8n-backed MCP tools—for example, list recent messages, search a mailbox, or retrieve a specifically requested message—rather than exposing generic provider access.
3. Keep drafting, sending, moving, categorizing, deleting, or forwarding as separate write-capable tools with an explicit confirmation policy.
4. Record only sanitized operational summaries in Git; never commit mail bodies, attachments, addresses, access tokens, or exports.

## Tools, skills, and references

The following n8n tools are connected to the current `assistant-tools` actor and are the implementation references for Gu's direct MCP tool use:

- `personal-gmail-list-recent`, `personal-gmail-search`, `personal-gmail-get-message` — read-only personal Gmail access.
- `professional-outlook-list-recent`, `professional-outlook-get-message` — read-only professional Outlook access.
- `sgsolutions-outlook-list-recent`, `sgsolutions-outlook-get-message` — read-only SG Solutions Outlook access.
- Future V1 addition: mailbox-specific search tools for the Outlook accounts, matching the Gmail search boundary.

- [Microsoft Graph Outlook mail API](https://learn.microsoft.com/en-us/graph/api/resources/mail-api-overview) — preferred Microsoft platform interface to Outlook mail; define least-privilege permissions and read/write boundaries before adoption.
- [n8n MCP server](https://docs.n8n.io/advanced-ai/accessing-n8n-mcp-server/) — optional future implementation path for approved, repeatable email actors; it is not the DAO orchestrator.

## Scope, permissions, and constraints

Begin with delegated least-privilege access and read-only MCP tools. Drafting, sending, moving, categorizing, deleting, or forwarding remain outside the initial Gu runtime scope.

## Outputs and evidence

## Reporting and escalation

## Open questions
