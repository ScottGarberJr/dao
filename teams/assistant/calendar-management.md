# Assistant calendar management

- Status: V1 implementation target — SG Solutions Outlook calendar is connected in n8n; Gu access remains to be tested.

## Objective

Manage approved Outlook calendar workflows for the designated calendars.

## Inputs

## Workflow

1. Use the SG Solutions Outlook calendar as the sole designated calendar for V1 and begin with read-only availability and event-listing tools.
2. Treat all-day events as a supported task and reminder representation if that remains the preferred workflow.
3. Separate create, update, cancel, and attendee-notification actions into explicit write-capable tools with a confirmation policy. Calendar creation and updates require confirmation of the final details immediately before execution.
4. Keep calendar event content and attendee data out of Git.

## Tools, skills, and references

The following n8n tools are connected to the current `assistant-tools` actor and are the implementation references for Gu's direct MCP tool use:

- `sgsolutions-calendar-list-events` — read-only event listing for a bounded time window.
- `sgsolutions-calendar-create-event` — create an event only after explicit confirmation; no attendees or invitations in V1.
- `sgsolutions-calendar-update-event` — existing tool; expose to Gu after the direct MCP connection is tested.

- [Microsoft Graph Outlook calendar API](https://learn.microsoft.com/en-us/graph/outlook-calendar-concept-overview) — preferred Microsoft platform interface to Outlook calendars; define least-privilege access and read/write boundaries before adoption.
- [n8n MCP server](https://docs.n8n.io/advanced-ai/accessing-n8n-mcp-server/) — optional future implementation path for approved, repeatable calendar actors; it is not the DAO orchestrator.

## Scope, permissions, and constraints

Use delegated, least-privilege calendar access. V1 supports one calendar, read-only listing, and confirmed create/update operations. Do not cancel events, invite attendees, or notify attendees without a separately approved workflow.

## Outputs and evidence

## Reporting and escalation

## Open questions
