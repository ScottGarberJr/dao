# DAO V1 operating instructions

## Purpose

This repository is the source of truth for DAO V1 operating definitions.

`project/` is the DAO project's source of durable project context. Agents must read the relevant current documents in `project/docs/`, plans in `project/plans/`, and historical context in `project/sessions/` before working on DAO changes. The `teams/` directory contains reusable DAO-wide team definitions; those definitions support work across project repositories.

Normal project repositories do not require an `AGENTS.md`; agents should discover and use their `project/` folder. This DAO repository is the exception because its root `AGENTS.md` is the entry point for the DAO operating environment.

## Working agreements

- Keep changes small, reviewable, and traceable to a plan or decision.
- Do not commit credentials, mailbox content, personal data, or production exports.
- Treat `contracts/` as versioned interfaces; document breaking changes in `project/docs/decisions/`.
- Record material decisions in `project/docs/decisions/`, meetings in `project/sessions/`, and execution status in `project/plans/`.
- Propose schedule and automation changes before enabling them in a live service.

## Directory conventions

| Path | Canonical content |
| --- | --- |
| `project/docs/` | Current DAO architecture, governance, security, and decisions |
| `project/plans/` | DAO implementation plans |
| `project/sessions/` | Historical DAO discussion and handoff context |
| `teams/` | Team charters and accountabilities |
| `contracts/` | Machine-readable integration contracts |
| `schedules/` | Cadences and automation timing specifications |
| `skills/` | Reusable playbooks and future skills |
| `tools/` | Tool and actor definitions |

## Change checklist

1. Update the relevant source document.
2. Validate structured YAML or JSON after editing it.
3. Add a decision record for material policy or interface changes.
4. Keep generated execution state out of Git.
