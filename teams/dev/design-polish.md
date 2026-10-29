# DevTeam design polish

- Team: DevTeam
- Owner: Designer with Tester and Lead review
- Status: draft — pending user review

## Purpose

Improve the approved UI after the base experience works. Polish covers hierarchy, spacing, visual consistency, accessibility, responsive behavior, interaction feedback, and purposeful motion.

## Workflow

1. Confirm the screen, section, or flow is functionally usable before polishing it.
2. Capture a before state at the affected route, viewport, and data when practical.
3. Audit hierarchy, typography, spacing, contrast, density, alignment, component consistency, and content realism.
4. Check hover, active, focus, loading, empty, error, success, disabled, and reduced-motion states.
5. Add motion only when it clarifies state change, continuity, feedback, or progression. Avoid decorative motion that delays or distracts.
6. Apply the Animation guiderails:
   - avoid animation patterns that trigger layout recalculation every frame;
   - favor efficient properties such as transforms and opacity;
   - use motion to communicate progression or state, not as decoration.
7. Respect `prefers-reduced-motion`, and use `IntersectionObserver` for viewport-triggered web reveals rather than an unthrottled scroll listener.
8. Recheck the same route, viewport, state, and data after the change.
9. Record before/after evidence, remaining caveats, and any deviation from the design system.

## Explicit-Anti-Slop Review includes:

- generic hero layouts;
- arbitrary gradients;
- excessive cards;
- repetitive rounded controls;
- default font choices;
- decorative motion without purpose;
- stock imagery that does not match the product.

Design Polish must not repair around a failed Design Review. Return to UI Creation or Design Planning when the base direction does not stand on its own.

Motion for a product should remain in the product’s implementation. A showcase animation or MP4/GIF is optional evidence and should be treated as a separate artifact, not as a substitute for usable product behavior.

## Tools, skills, and references

- [Design Review](design-review.md) — pre-polish judgment gate and anti-slop review.
- [Site Animations](../../skills/site-animations.md) — creation-time animation purpose, performance, and reduced-motion guiderails.
- [GSAP Guidance](../../skills/gsap-guidance.md) — GSAP-specific motion when the project needs it.
- [DAO visual evidence skill](../../skills/visual-evidence.md) — before/after evidence, privacy, and PR formatting.
- [Elaya AI Design Skills](https://github.com/elayadesign/ai-design-skills) — reference for still-first motion, visual stories, reduced motion, and deterministic export ideas.
- [Emil Kowalski skills](https://github.com/emilkowalski/skills) — candidate motion principles for product interfaces.
- [Remotion](https://www.remotion.dev/) — candidate programmatic video composition when a project genuinely needs rendered motion artifacts.
- [ffmpeg](https://ffmpeg.org/documentation.html) — candidate local encoding tool for approved exports.
- [Playwright](https://playwright.dev/) — repeatable browser verification and screenshots.
- [Vercel Web Interface Guidelines](https://vercel.com/design/guidelines) — accessibility and implementation audit.

Paid image or video-generation services are not required for interface polish or product motion. Use them only after a separate project need, cost decision, and approval.

## Outputs

- Updated UI or prototype evidence.
- Before/after screenshots or a repeatable trace under `project/docs/design/screenshots/` when durable evidence is needed.
- Optional motion plan or prototype under `project/docs/design/motion/`.
- Optional approved MP4/GIF exports kept with project artifacts rather than generated execution state.
- A final handoff naming what changed, what was verified, what remains, and whether the design is ready for Lead review.

## Handoff acceptance criteria

- [ ] The same route, state, viewport, and data are used for comparison.
- [ ] Functional behavior remains intact.
- [ ] Accessibility and reduced-motion behavior were considered.
- [ ] Motion has a stated purpose or is explicitly omitted.
- [ ] Sensitive data is absent or approved for sharing.
- [ ] Evidence paths and verification commands are recorded.
