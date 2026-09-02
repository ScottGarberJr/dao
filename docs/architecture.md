# DAO V1 architecture

## Design principles

1. **Human authority, automated execution.** Automation may classify, route, remind, and draft; it cannot make governance decisions or send irreversible external actions without an assigned owner.
2. **One durable record per concern.** Policies live in `docs/`, work in `plans/`, sessions in `sessions/`, and interfaces in `contracts/`.
3. **Explicit accountability.** Each active team defines its scope, permissions, reporting, and escalation path in its team markdown.
4. **Privacy by default.** Git stores metadata and sanitized references—not message bodies, attachments, secrets, or personal data.

## Operating layers

| Layer | Responsibility | System of record |
| --- | --- | --- |
| Governance | Cross-team policies and decisions, when jointly defined | `docs/`, `sessions/` |
| Teams | Scope, permissions, reporting, and work ownership | `teams/` |
| Planning | Outcomes, milestones, risks, and status | `plans/` |
| Automation | Approved intake, routing, and observability | `contracts/`, `schedules/` |
| Evidence | Decisions and completed session records | `docs/decisions/`, `sessions/` |

## Automation boundary

Outlook supplies event metadata to n8n only after an approved integration is configured. n8n validates and normalizes the event and may route it only according to a team-defined scope and permission model. It retains minimum routing metadata, uses idempotency keys, and surfaces exceptions to the designated owning team. The canonical interface is [`contracts/outlook-n8n.contract.yaml`](../contracts/outlook-n8n.contract.yaml).
