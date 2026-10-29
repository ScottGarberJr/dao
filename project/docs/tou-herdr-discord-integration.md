# Tou / Herdr / Hermes Discord integration

## Role

**Tou** is Head's user-facing identity for portfolio coordination. Tou routes bounded work to project Leads through Herdr, receives Lead terminal-state handoffs, reconciles evidence, and reports approved user-facing status. Gu remains the personal assistant and owns the existing Discord integration; this document does not change Gu or n8n.

## Workflow

1. Tou resolves the project repository and Herdr workspace by stable project identity.
2. Tou sends the Lead a bounded brief with task ID, project, repository/worktree, allowed paths/tools, acceptance criteria, approval boundary, evidence requirements, and the required return target: Tou.
3. The Lead supervises staff work and validates the result.
4. Before closing or blocking the task, the Lead emits one `TOU-HANDOFF` event with state `COMPLETED` or `WAITING_FOR_INPUT`.
5. A configured Hermes relay may deliver the sanitized event to Tou. Tou may then send a user-facing Discord update only through the verified Tou Discord target.
6. No relay means no silent fallback: the event remains in the local Herdr/DAO handoff record and the blocker is reported.

## Verifiable handoff format

Use one compact, machine-searchable block. Values are literal and must not contain secrets.

```text
TOU-HANDOFF v1
task_id: <stable-task-id>
project: <project-id>
lead: <lead-id>
state: COMPLETED | WAITING_FOR_INPUT
summary: <one-line outcome or precise question>
changed_paths: <comma-separated paths, or none>
checks: <commands and pass/fail results>
evidence: <logs, test output, links, or Herdr evidence IDs>
approval: none | user-required:<exact action>
unresolved: <none or explicit list>
next_action: <next owner and action>
```

The receiving side verifies `task_id`, `project`, `state`, and `approval` before any Discord delivery. Duplicate events are idempotent by `(task_id, state, evidence)`; malformed or unauthorized events are rejected and recorded as blocked.

## Discord boundary

The existing configured Discord adapter belongs to Gu and currently has a mention-free home channel `1496589351289880728` named `Doin Stuff / #gu`; other channels are mention-gated. Tou must not reuse Gu's token or adapter. A dedicated Tou profile/bot is the safe design: a separate Hermes profile, separate bot token in that profile's `.env`, explicit allowed user ID(s), explicit server/scope ID, and explicit `#Tou` channel ID. `require_mention: true` should remain the default, with a free-response channel only if the exact Tou channel is explicitly approved.

## Implementation status

- **Inspected:** Hermes profiles `default`, `gu`, and `head`; Head's profile metadata already presents as `Tou` and uses the project-coordination identity.
- **Inspected:** Herdr 0.9.1 is running; the DAO workspace exists as `dao` with an existing `dao-lead` Pi agent in a done state; the Herdr Hermes integration is not installed.
- **Implemented in DAO:** Lead briefs now require a `TOU-HANDOFF`; Lead and Head role documents define the relay, approval boundary, and failure behavior.
- **Not activated:** no Hermes-to-Herdr event bridge, webhook, cron, or Discord send was created; no external message was sent.
- **Not configured:** no dedicated Tou Discord bot/profile was created because the dedicated bot credential, Tou `#Tou` channel ID, and approved allowed user/server identifiers are not present in the Head profile. Gu's existing token was not copied or reused.

## Required next action

After explicit approval, provide the dedicated Tou bot credential through the secure vault/profile `.env` flow and the exact approved Discord server, `#Tou` channel, and allowed user IDs. Then install/configure the Hermes Herdr integration or an equivalent local event bridge, bind only `COMPLETED`/`WAITING_FOR_INPUT` handoffs, run a non-posting dry run, and perform a separately approved live Discord smoke test.