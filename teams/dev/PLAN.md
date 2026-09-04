# PLAN

- Team: DevTeam
- Status: draft — pending user review

## Objective

Turn reviewed project documentation into a small, reviewable version or patch plan with clear tasks and acceptance criteria. Planning starts only after the user's explicit go-ahead.

## Inputs

- The user's explicit approval to begin planning.
- Reviewed `project/docs/requirements.md`, `project/docs/design.md`, and `project/docs/architecture.md`; or one document that explicitly states it contains requirements, design, and architecture details.
- A Figma link or screenshots in `design.md` when the work has a UI.
- Resolved and deferred items from [team review](team-review.md).

## Workflow

1. Confirm the planning go-ahead and that the required documentation is sufficient. Do not begin a build branch during planning.
2. Create a version or patch document in `project/plans/` using the [plan-document template](plan-document-template.md): versions use `v<major>.0.md`, and patches use `v<major>.<patch>.md`.
3. Use `major.patch.item` numbered headers for every planned feature or fix—for example, `1.0.1` in Version 1.0 and `1.1.1` in Patch 1.1. Each section has a name, one-line summary, task checklist, and acceptance-criteria checklist.
4. For a Version 1.0 plan, make **1.0.1 — Project scaffolding and boilerplate** the first section. Include only the foundation actually required by the project.
5. Keep scope deliberate: separate current work from later features, identify dependencies and open questions, and return material conflicts to the user or [team review](team-review.md).
6. Review the completed plan and acceptance criteria with the user. Build starts only when the user separately gives the go-ahead.

## Tools, skills, and references

[GitHub MCP Server](https://github.com/github/github-mcp-server) is a candidate for repository context, issues, pull requests, Actions, and code review. Begin with the minimum read-only scope if it is evaluated.

## Scope, permissions, and constraints

Do not invent requirements, treat a plan as authorization to build, or silently expand scope. A single combined requirements/design/architecture document is acceptable only when it says so at the top; otherwise the three documents are the default minimum.

## Outputs and evidence

- A version or patch Markdown document in `project/plans/` with numbered feature or fix sections.
- Every section has a one-line summary, task checklist, and acceptance-criteria checklist.
- A concise statement of unresolved questions, dependencies, and work intentionally deferred.

## Reporting and escalation

Ask the user to resolve unclear requirements, design conflicts, missing architecture decisions, scope changes, or any request to begin building without a planning go-ahead.

## Open questions
