# Decision: adopt the universal `project/` structure

- Date: 2026-09-02
- Owner: DAO architecture
- Decision category: repository architecture
- Status: accepted

## Context

The initial scaffold placed DAO docs, plans, and sessions at the repository root. The DAO architecture establishes `project/` as the universal location for those project-specific records in every repository.

## Decision

The DAO repository uses `project/docs/`, `project/plans/`, and `project/sessions/` for DAO project knowledge. Reusable DAO-wide operating definitions remain at the repository root in directories such as `teams/`, `skills/`, `tools/`, and `schedules/`.

## Consequences and follow-up

Agents can reliably discover project context from `project/` in every DAO repository. The DAO root `AGENTS.md` remains the exception-specific operating entry point. Existing and future files must follow this distinction.
