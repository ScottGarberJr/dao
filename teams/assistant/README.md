# Assistant

- Status: draft — pending user review
- Purpose: Provide personal and administrative support through explicitly approved Assistant workflows.

## Shared workflow

1. Begin with the specific Assistant task and the minimum information needed to perform it.
2. Prefer read-only inspection and draft output first; perform a state-changing action only after its workflow, permission boundary, and user approval are defined.
3. Preserve durable DAO decisions in repository documentation, never mailbox or personal-content exports.

## V1 integration priority

V1's major Assistant requirement is a narrowly scoped connection from Codex to two Outlook mailboxes and Outlook calendar through the user's VPS-hosted [n8n MCP server](https://docs.n8n.io/advanced-ai/accessing-n8n-mcp-server/). [OneNote access through Microsoft Graph](https://learn.microsoft.com/en-us/graph/integrate-with-onenote) is a candidate supporting capability. Each exposed MCP tool must represent a clear user-facing operation with explicit read/write behavior; n8n remains the implementation layer, not the DAO orchestrator.

## Scope and permissions

No inbox, calendar, receipt, task, note, or fitness integration is connected or authorized by this document.

## Workflow and task documents

- [starting-sessions](starting-sessions.md) — V1 draft
- [status-reports](status-reports.md) — V1 draft
- [capture-to-inbox](capture-to-inbox.md) — V1 draft
- [email-management](email-management.md) — V1 draft
- [receipt-management](receipt-management.md) — V1 draft
- [monthly-summary](monthly-summary.md) — V1 draft
- [todo-reminders](todo-reminders.md) — V1 draft
- [calendar-management](calendar-management.md) — V1 draft
- [fitness-tracking](fitness-tracking.md) — later; pending set up

## Reporting and escalation

## Open questions
