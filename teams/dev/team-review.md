# DevTeam review

- Team: DevTeam
- Status: draft — pending user review

## Objective

Resolve conflicts, gaps, and material tradeoffs in the first drafts of a project’s requirements, design, and architecture before planning begins.

## Inputs

- First drafts of `project/docs/requirements.md`, `project/docs/design.md`, and `project/docs/architecture.md`, or one explicitly labeled combined document that contains all three.
- The Figma file and links to relevant frames, or screenshots in `design.md` when Figma access is unavailable.
- Discovery, project constraints, and the user's stated goals.
- Optional review input from a separately chosen model or agent, supplied through an approved connection or pasted by the user.

## Workflow

1. The user, Dev agent, and—when available—one chosen independent reviewer discuss the first drafts.
2. Compare requirements, design, and architecture for conflicts, missing states, feasibility, security/role implications, accessibility, UX, performance, and maintainability.
3. Run only user-approved review tools or skills. Capture findings as proposals and discuss material changes before updating the project documents.
4. Resolve, defer, or assign each material issue. Update the three documents and their open questions so the planning input is coherent.
5. Ask the user for the go-ahead to begin `PLAN.md`; do not start planning merely because review has occurred.

## Scope, permissions, and constraints

This is a discussion and review gate, not an autonomous decision-maker. Codex does not currently have a defined connection to Copilot or Gemini; external-model input must be provided by the user or later through an explicitly approved tool. A future n8n tool may support this exchange only after its interface, permissions, data handling, and review gate are jointly defined.

## Outputs and evidence

- A record of resolved decisions, deferred questions, and material tradeoffs in the project documents or session record.
- A coherent requirements, design, and architecture set ready for the user's planning go-ahead.

## Reporting and escalation

Escalate conflicting advice, a required external decision, missing project context, or an unapproved tool connection to the user.

## Open questions
