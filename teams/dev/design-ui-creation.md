# DevTeam UI creation

- Team: DevTeam
- Owner: Designer for prototypes and reference artifacts; Builder for production implementation
- Status: draft — pending user review

## Purpose

Create the base UI and functional reference experience section-by-section or screen-by-screen using the approved direction and design system. This phase is intentionally called UI Creation: it does not imply that a Designer owns final production implementation.

## Scope boundary

The Designer may create:

- HTML prototypes;
- clickable flow mockups;
- component labs and state previews;
- screen-level reference implementations;
- screenshots and visual evidence;
- bounded UI changes when the Lead explicitly assigns implementation work.

Production code belongs to the project’s normal implementation workflow and is owned by the Builder under Lead review. A prototype or generated HTML file is reference evidence unless the task explicitly says it is production code.

## Workflow

1. Select one bounded screen, section, or flow from the approved design plan.
2. Inspect the actual project stack, routes, components, tokens, and content before inventing UI.
3. Reuse the approved design system and existing components where possible.
4. At phase entry, list the relevant skills, tools, and references with a brief summary and recommendation. For UI Creation, the minimum capability scan is:
   - **UI UX Pro Max** — category-fit visual direction; **recommend** when the product needs a stronger point of view.
   - **One visual preset** — Minimalist UI, Industrial Brutalist UI, Front-end UI/UX, or Premium/Luxury UI; **recommend** exactly one when a visual posture is approved, otherwise ask.
   - **Mobile UI Principles** — touch-first hierarchy, reachability, and platform states; **recommend** for any mobile flow.
   - **SwiftUI** — native Apple conventions; **recommend** for SwiftUI projects.
   - **Expo** — cross-platform React Native conventions; **recommend** for Expo projects.
   - **Site Animations** — purpose, performance, and reduced-motion guiderails; **recommend** whenever motion is proposed.
   - **GSAP Guidance** — GSAP-specific timelines and scroll motion; **recommend** only when the project needs GSAP or complex web motion.
   - **Shadcn MCP** — reusable registry components; **recommend** only for Shadcn-compatible projects after checking dependencies.
   - **Playwright** — repeatable browser checks and screenshots; **recommend** when the route can be exercised in a browser.
5. Select the relevant guidance skill or ask the user whether to use it. Do not stack conflicting visual presets.
6. Create the smallest useful artifact: a static mockup, clickable prototype, component lab, or project-stack implementation.
7. Include important default, loading, empty, error, success, focus, disabled, and responsive states.
8. Verify the primary path and capture visual evidence at the affected viewport or state.
9. Record deviations, assumptions, missing assets, and implementation questions.
10. Hand the artifact to the Lead, Planner, or Builder with exact paths and evidence.

Create one screen or section at a time. Do not silently expand a prototype into unrelated pages or production features.

## Tools, skills, and references

- [Claude Design skill](https://github.com/BadTechBandit/claude-design) — process guidance for local HTML prototypes, variants, responsive behavior, and anti-slop review; use the local installed skill when available.
- [Popular Web Designs skill](https://github.com/VoltAgent/awesome-design-md) — visual vocabulary for known design systems; use principles and tokens, not exact branded clones.
- [Google DESIGN.md](https://github.com/google-labs-code/design.md) — consume the project’s token spec consistently.
- [Playwright](https://playwright.dev/) — approved candidate for repeatable browser checks and screenshots.
- [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/) — approved candidate for narrow browser inspection when connected.
- [Elaya AI Design Skills](https://github.com/elayadesign/ai-design-skills) — reference for landing-page intake, realistic content, complete states, and bounded design-to-motion work; adapt principles rather than installing blindly.

The repository’s project stack and the active profile determine what is actually installed and available. A reference link is not an installation or permission grant.

## Outputs

- Prototype or screen artifact under `project/docs/design/mockups/` or `project/docs/design/screens/` when it is documentation evidence.
- Production UI changes only in the project repository’s normal source paths and only under the Lead’s assigned task boundary.
- Screenshots or traces under `project/docs/design/screenshots/` when they are durable evidence.
- A concise handoff naming changed files, states checked, evidence paths, deviations, and open questions.

## Handoff acceptance criteria

- [ ] The artifact corresponds to an approved screen, section, or flow.
- [ ] Existing project components and tokens were inspected and reused where appropriate.
- [ ] Key states and responsive behavior are represented or explicitly deferred.
- [ ] The primary path was exercised.
- [ ] Evidence identifies route, revision, viewport, state, and test data.
- [ ] Prototype/reference code is clearly separated from production code.
