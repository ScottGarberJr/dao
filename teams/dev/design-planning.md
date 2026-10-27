# DevTeam design planning

- Team: DevTeam
- Owner: Designer with Lead and user review
- Status: draft — pending user review

## Purpose

Turn discovery evidence into an approved design direction and an implementation-facing design record. Planning decides what should be made and why; it does not authorize production implementation or release.

## Workflow

1. Read the discovery handoff, requirements, architecture constraints, and current `project/docs/design.md`.
2. State the target users, primary tasks, scope, non-goals, constraints, and success criteria.
3. Choose the screens or flows to design and identify their important states.
4. Propose a small set of materially different directions when taste or risk is unresolved: conservative, strong-fit, and divergent are useful defaults.
5. Compare directions against user goals, content, accessibility, responsive behavior, technical constraints, and evidence—not personal preference alone.
6. Discuss the options with the user and Lead. Record the selected direction, rejected alternatives, assumptions, and unresolved questions.
7. Update `project/docs/design.md` using the [design planning template](design-planning-template.md).
8. Hand the approved direction to Design System work.

Do not create a large set of variants that leaves the project without a decision. Once a direction is selected, consolidate the evidence and archive or clearly label exploratory alternatives.

## Outputs

- An updated `project/docs/design.md` containing the brief, selected direction, screen/flow scope, rationale, evidence links, and open questions.
- Optional direction boards or prototypes under `project/docs/design/mockups/`.
- A bounded handoff to Design System work naming the required tokens, components, states, and technical questions.

## Handoff acceptance criteria

- [ ] Audience, primary task, scope, and non-goals are clear.
- [ ] The selected direction is distinguishable from rejected alternatives.
- [ ] Major screens and flows are named.
- [ ] Responsive, accessibility, and technical constraints are recorded.
- [ ] Evidence links resolve to the relevant references or mockups.
- [ ] Remaining decisions have an owner and decision point.
- [ ] The Lead and user approval boundary is explicit.
