# Project design document template

Use this template as the default `project/docs/design.md` in every project. It is the UI/UX and design-evidence document that design planning, UI creation, and production implementation follow.

For a larger engagement or when a client requests it, split individual sections into `project/docs/design/`. Keep `project/docs/design.md` as the concise index, decision summary, and link map to those files; it remains the entry point for agents.

The consistently useful supporting records are usually:

- `project/docs/design/references/` — discovery sources, screenshots, and source notes;
- `project/docs/design/mockups/` — prototypes, direction studies, and screen artifacts;
- `project/docs/design/design-system.md` — the project’s maintained visual and interaction system.

Use [design-system-document-template.md](design-system-document-template.md) for the design-system record. Keep only the summary and links in this main document.

Complete only sections that apply. Mark a deliberately deferred item **TBD** and put unanswered decisions in **Open questions**. Do not treat template guidance as project facts.

## Brief

Record the intended users, problem, desired outcome, primary tasks, scope, non-goals, and project constraints. Keep the brief here unless it is large enough to warrant a linked supporting file.

## Selected direction

Record the chosen visual and interaction direction, its rationale, alternatives considered, and the evidence supporting the decision. Use [design-planning-template.md](design-planning-template.md) when preparing this section.

## UI

### Branding

Record logo use, voice, imagery direction, iconography, component/system constraints, and client brand requirements.

### Colors

Record the approved palette, semantic color roles, states, contrast requirements, and relevant variable or style references.

### Typography

Record font choices, hierarchy, scale, responsive behavior, and relevant style references.

### Design system

Record the component library, tokens, reusable patterns, states, accessibility requirements, and the relationship between design components and production components.

### Visual direction

Record the chosen direction, key composition and layout decisions, imagery or illustration guidance, responsive behavior, and the rationale from discovery and review.

## UX

### User personas

Define relevant users, their goals, needs, contexts, accessibility considerations, and meaningful permissions.

### User flows

Map key tasks from entry through success, failure, empty, loading, and edge states. Link to flow diagrams, prototype frames, or other evidence.

### Interaction and responsive behavior

Record interaction patterns, feedback, motion, breakpoints, platform differences, and usability constraints.

## Design evidence and references

Link the Figma file when used; designated pages and frames; prototypes; screenshots; discovery/reference pages; sketches; brand assets; approved external references; and the related `requirements.md` and `architecture.md`.

## Open questions

List decisions still needed, their owner, impact, and the decision required before design-system work, UI creation, production implementation, or release.
