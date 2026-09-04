# Assistant calendar management

- Status: draft — pending user review

## Objective

Manage approved Outlook calendar workflows for the designated calendars.

## Inputs

## Workflow

1. Define the designated calendars and begin with read-only availability and event-listing tools.
2. Treat all-day events as a supported task and reminder representation if that remains the preferred workflow.
3. Separate draft, create, update, cancel, and attendee-notification actions into explicit write-capable tools with a confirmation policy.
4. Keep calendar event content and attendee data out of Git.

## Tools, skills, and references

All entries below are candidates only. None is connected or approved for use.

- [Microsoft Graph Outlook calendar API](https://learn.microsoft.com/en-us/graph/outlook-calendar-concept-overview) — preferred Microsoft platform interface to Outlook calendars; define least-privilege access and read/write boundaries before adoption.
- [n8n MCP server](https://docs.n8n.io/advanced-ai/accessing-n8n-mcp-server/) — optional future implementation path for approved, repeatable calendar actors; it is not the DAO orchestrator.

## Scope, permissions, and constraints

Start with delegated, least-privilege calendar access. The initial calendar set, event-editing policy, reminder behavior, and write confirmation requirements remain open decisions.

## Outputs and evidence

## Reporting and escalation

## Open questions
