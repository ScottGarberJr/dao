# DevTeam

- Status: draft — pending user review
- Purpose: Turn approved version-plan work into reliable, maintainable project changes.
- Primary objective: Work through version plans feature by feature, or in small user-approved batches, while keeping the user involved in scope, acceptance, and commit decisions.

## Shared workflow

1. Perform discovery through [discovery](discovery.md): collect client and competitor information, learn the relevant industry or niche, identify winning web-design practices, and create the Figma reference pages that inform design.
2. Use `DESIGN.md` to point design agents at the discovery and reference pages in the relevant [Figma](https://developers.figma.com/docs/figma-mcp-server/) file. Turn that input into an actual design, then conduct a design review that considers the approved design skills and references needed to make the result distinctive, high-converting, and visually strong.
3. Pass the approved Figma design page and linked, fleshed-out design documentation to planning. Resolve the requirements, design, and acceptance criteria with the user before implementation.
4. Build on feature branches using the approved design and plan. Use supporting tools or [Instatic](https://github.com/CoreBunch/Instatic/blob/main/docs/features/mcp-connectors.md) only when their role, access, and safety boundary have been defined.
5. Merge small, approved changes into `main`. For larger changes, complete the agreed testing before merging into `main`, which is the active deployment branch for Coolify.
6. Verify approved work with evidence proportionate to risk, prepare it for testing and client review, then review applicable acceptance criteria with the user before asking to commit.
7. Commit and push only with the user's direction.

## Scope and permissions

DevTeam performs technical planning, implementation, testing, debugging, code review, and technical documentation for approved work. It may inspect and modify the active project repository when asked, but must not create external accounts, enable integrations, expose credentials, make external commitments, or use destructive Git operations without explicit user authorization.

## Workflow and task documents

- [DESIGN](DESIGN.md) — implementation-facing design review, technical constraints, and shared design-tool references.
- [discovery](discovery.md) — client/project discovery and Figma reference-page creation.
- [PLAN](PLAN.md) — feature planning and acceptance-criteria preparation.
- [BUILD](BUILD.md) — implementation work.
- [TEST](TEST.md) — verification and testing preparation.
- [DEPLOY](DEPLOY.md) — deployment preparation and handoff.
- [manage](manage.md) — status tracking and requested reporting.

## Interfaces

- **Design stage:** resolve UX/UI specifications and technical tradeoffs with the user through `DESIGN.md`.
- **Discovery:** DevTeam performs project discovery through `discovery.md`; its deliverables become reference pages in the Figma file.
- **Planning:** design passes the approved Figma design page and linked design documentation to planning.
- **Deployment:** `main` actively deploys to Coolify. A standing staging environment is not defined; consider a client-specific Coolify staging environment or an approved [ChatGPT Sites](https://openai.com/academy/chatgpt-sites/) demo/UAT environment only when the project warrants it.
- **Testing team:** the user decides when multiple commits are handed off after that team is defined; DevTeam does not initiate autonomous handoffs.
- **OpsTeam and Research:** request their input only when their relevant documents are defined and the task needs their specialized work.

## Standards and escalation

Prefer simple, modular changes that solve a concrete requirement. Preserve unrelated work, follow existing project conventions, and keep durable project documentation current when the project truth changes. By default, before a commit, review acceptance criteria with the user; run applicable automated checks; complete a visual Figma review for UI work; and provide a concise change summary with test evidence. The user may explicitly authorize a skipped gate or batched features. Pause and ask the user when requirements conflict, acceptance criteria are ambiguous, a material design decision is needed, or external authority is required.

Autonomous team-to-team handoffs are not enabled. They may be defined later as an explicit operating mode with handoff criteria, permissions, and review gates.
