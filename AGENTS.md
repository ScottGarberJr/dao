# DAO V1 operating instructions

## Purpose

This repository is the source of truth for DAO V1 governance, plans, session records, team charters, schedules, and automation contracts.

## Working agreements

- Keep changes small, reviewable, and traceable to a plan or decision.
- Do not commit credentials, mailbox content, personal data, or production exports.
- Treat `contracts/` as versioned interfaces; document breaking changes in `docs/decisions/`.
- Record material decisions in `docs/decisions/`, meetings in `sessions/`, and execution status in `plans/`.
- Propose schedule and automation changes before enabling them in a live service.

## Directory conventions

| Path | Canonical content |
| --- | --- |
| `docs/` | Architecture, governance, security, and decisions |
| `plans/` | Delivery and operating plans |
| `sessions/` | Session agendas and outcomes |
| `teams/` | Team charters and accountabilities |
| `contracts/` | Machine-readable integration contracts |
| `schedules/` | Cadences and automation timing specifications |
| `skills/` | Reusable playbooks and future skills |

## Change checklist

1. Update the relevant source document.
2. Validate structured YAML or JSON after editing it.
3. Add a decision record for material policy or interface changes.
4. Keep generated execution state out of Git.
