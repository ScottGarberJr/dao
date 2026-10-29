# DevTeam design review

- Team: DevTeam
- Owner: Designer with Lead and user review
- Status: draft — pending user review

## Purpose

Evaluate whether the UI works and stands on its own after UI Creation and before visual polish. This is a judgment gate, not a code-style pass: the reviewer checks coherence, product fit, hierarchy, usability, distinction, and whether the design has escaped generic AI defaults.

## Workflow

1. Read the approved design direction, design system, requirements, architecture constraints, and the UI Creation handoff.
2. Review the primary screen or flow in its intended route, viewport, content, and key states before adding polish.
3. Ask: **Is this good standing on its own?** Record the answer, evidence, strengths, weaknesses, and the smallest changes needed.
4. Run the Explicit-Anti-Slop Review below.
5. Check product fit, audience fit, hierarchy, content realism, responsive behavior, accessibility, state completeness, implementation feasibility, and whether the selected guidance skills were used appropriately or explicitly declined.
6. Decide one of: ready for polish, revise UI Creation, return to Design Planning, or escalate a material product/design decision to the user.
7. Hand the decision and evidence to Design Polish only when the base design is independently coherent.

## Explicit-Anti-Slop Review includes:

- generic hero layouts;
- arbitrary gradients;
- excessive cards;
- repetitive rounded controls;
- default font choices;
- decorative motion without purpose;
- stock imagery that does not match the product.

## Animation guiderails:

- avoid animation patterns that trigger layout recalculation every frame;
- favor efficient properties such as transforms and opacity;
- use motion to communicate progression or state, not as decoration.

Use [GSAP Guidance](../../skills/gsap-guidance.md) when the approved web direction requires GSAP or complex scroll-driven motion.

## Outputs

- A design-review record or handoff naming the route, viewport, state, revision, evidence, decision, and unresolved questions.
- A completed Explicit-Anti-Slop Review.
- A clear handoff to polish, rework, planning, or the user.

## Boundaries

This phase does not authorize production implementation, external design-tool edits, publication, or deployment. Do not polish around a material design problem or silently choose between unresolved product directions.

## Verification

- [ ] The primary UI was reviewed before polish.
- [ ] “Is this good standing on its own?” has an evidence-backed answer.
- [ ] The Explicit-Anti-Slop Review is complete.
- [ ] Animation guiderails were considered.
- [ ] The next phase and decision owner are explicit.
