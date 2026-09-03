# DAO V1 operating instructions

## Purpose

This repository is the source of truth for DAO V1 operating definitions.

`project/` is the DAO project's source of durable project context. Agents must read the relevant current documents in `project/docs/`, plans in `project/plans/`, and historical context in `project/sessions/` before working on DAO changes. The `teams/` directory contains reusable DAO-wide team definitions; those definitions support work across project repositories.

Each team lives in `teams/<team>/`. Read its `README.md` (for example, `teams/dev/README.md`) and the applicable lifecycle-stage or task document before acting as that team. The README catalogs the team structure and shared operating guidance; uppercase documents define major lifecycle stages, while lowercase subdocuments support specific tasks.

Normal project repositories do not require an `AGENTS.md`; agents should discover and use their `project/` folder. This DAO repository is the exception because its root `AGENTS.md` is the entry point for the DAO operating environment.

## Working agreements

- Keep changes small, reviewable, and traceable to current project documentation, a plan, or a session record.
- Do not commit credentials, mailbox content, personal data, or production exports.
- Record important discussions, decisions, and handoff context in the relevant monthly file in `project/sessions/`.
- Propose schedule and automation changes before enabling them in a live service.

## Directory conventions

| Path | Canonical content |
| --- | --- |
| `project/docs/` | Current DAO architecture and other durable DAO knowledge |
| `project/plans/` | DAO implementation plans |
| `project/sessions/` | Historical DAO discussion and handoff context |
| `teams/<team>/` | Team entry document and workflow/task definitions |
| `schedules/` | Cadences and automation timing specifications |
| `tools/` | Tool, actor, MCP, API, and upstream-reference registry |

## Change checklist

1. Update the relevant source document.
2. Validate structured YAML or JSON after editing it.
3. Update the relevant monthly session record when context or a decision needs preserving.
4. Keep generated execution state out of Git.
