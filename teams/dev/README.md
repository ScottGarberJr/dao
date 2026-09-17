# DevTeam

- Status: draft — pending user review
- Purpose: Turn approved version-plan work into reliable, maintainable project changes.
- Primary objective: Work through version plans feature by feature, or in small user-approved batches, while keeping the user involved in scope, acceptance, and commit decisions.

The Dev Lead owns the session and chooses the smallest effective execution path. It may work directly, ask a specialist to investigate or implement, or coordinate a sequence such as Designer → Planner → Builder → Tester. Role definitions are reusable; do not create agents merely because a role exists.

## Shared workflow

1. Perform discovery through [discovery](discovery.md): collect client and competitor information, learn the relevant industry or niche, and collect usable references.
2. Create the project's first-draft `requirements.md`, `design.md`, and `architecture.md`. Use [designer](designer.md) to turn references into an implementation-facing direction, then conduct a design review that considers approved skills and references.
3. Use [team review](team-review.md) to discuss and reconcile requirements, design, and architecture with the user and, when provided, an independent reviewer. Planning starts only after the user's explicit go-ahead.
4. Create a version or patch plan, then build on feature branches using the approved documents and plan. Use supporting tools or [Instatic](https://github.com/CoreBunch/Instatic/blob/main/docs/features/mcp-connectors.md) only when their role, access, and safety boundary have been defined.
5. Merge small, approved changes into `main`. For larger changes, complete the agreed testing before merging into `main`, which is the active deployment branch for Coolify.
6. Verify approved work with evidence proportionate to risk, prepare it for testing and client review, then review applicable acceptance criteria with the user before asking to commit.
7. Commit and push only with the user's direction.

## Scope and permissions

DevTeam performs technical planning, implementation, testing, debugging, code review, and technical documentation for approved work. It may inspect and modify the active project repository when asked, but must not create external accounts, enable integrations, expose credentials, make external commitments, or use destructive Git operations without explicit user authorization.

## Workflow and task documents

- [lead](lead.md) — session coordination, delegation, status, and handoffs.
- [designer](designer.md) — implementation-facing UX/UI direction and design evidence.
- [discovery](discovery.md) — client/project discovery and Figma reference-page creation.
- [team review](team-review.md) — requirements, design, and architecture review gate before planning.
- [planner](planner.md) — feature planning and acceptance-criteria preparation.
- [builder](builder.md) — implementation work.
- [tester](tester.md) — verification and testing preparation.
- [deployer](deployer.md) — deployment preparation and handoff.

## Interfaces

- **Design:** resolve UX/UI specifications and technical tradeoffs with the user through `designer.md`.
- **Discovery:** DevTeam performs project discovery through `discovery.md`; its deliverables can be screenshots, sketches, reference links, Figma pages, or prototypes.
- **Planning:** after the user’s go-ahead, plan from the reviewed requirements, design, and architecture documents. A single combined document is permitted only when it explicitly states that it contains all three.
- **Deployment:** `main` actively deploys to Coolify. A standing staging environment is not defined; consider a client-specific Coolify staging environment or an approved [ChatGPT Sites](https://openai.com/academy/chatgpt-sites/) demo/UAT environment only when the project warrants it.
- **Testing:** the Lead may hand an implementation to the Tester when its plan, acceptance criteria, and evidence are available. The user retains the commit and release gates.
- **OpsTeam and Research:** request their input only when their relevant documents are defined and the task needs their specialized work.

## Standards and escalation

Prefer simple, modular changes that solve a concrete requirement. Preserve unrelated work, follow existing project conventions, and keep durable project documentation current when the project truth changes. By default, before a commit, review acceptance criteria with the user; run applicable automated checks; complete visual review appropriate to the project; and provide a concise change summary with test evidence. The user may explicitly authorize a skipped gate or batched features. Pause and ask the user when requirements conflict, acceptance criteria are ambiguous, a material design decision is needed, or external authority is required.

The Lead may make internal role handoffs when the project documents and session record contain enough context. External commitments, deployment, and commits remain subject to their stated approval gates.
