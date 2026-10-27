# DevTeam design system

- Team: DevTeam
- Owner: Designer with Lead and Builder input
- Status: draft — pending user review

## Purpose

Translate the approved design direction into reusable visual and interaction rules that agents and developers can apply consistently.

## Workflow

1. Read the approved direction in `project/docs/design.md`, project architecture, existing tokens, and component conventions.
2. Define semantic color roles, typography, spacing, sizing, shapes, borders, elevation, imagery, and motion posture.
3. Define reusable components and their states: default, hover, focus, active, disabled, loading, empty, error, and success where relevant.
4. Map design components to production components. Record where a visual pattern should remain a prototype-only treatment.
5. Check contrast, responsive behavior, keyboard access, reduced motion, and platform differences.
6. Create or update the project-specific human-readable `project/docs/design/design-system.md` using the [design-system document template](design-system-document-template.md). Create a machine-readable `project/docs/design/DESIGN.md` when the project benefits from persistent token guidance. Use the [DESIGN.md skill](https://github.com/google-labs-code/design.md) and its documented CLI to lint, diff, and export tokens when available.
7. Create a small component or token preview when it will resolve uncertainty before screen work.
8. Hand the system to UI Creation with known gaps and an explicit list of approved reusable patterns.

## Tools, skills, and references

These are capability references, not automatic installations or approvals:

- [Google DESIGN.md specification](https://github.com/google-labs-code/design.md) — durable tokens, rationale, linting, WCAG checks, and exports.
- [Vercel Web Interface Guidelines](https://vercel.com/design/guidelines) — accessibility and implementation audit after a direction exists.
- [Figma Code Connect](https://developers.figma.com/docs/figma-mcp-server/code-connect-integration/) — candidate design-to-code mapping for projects that deliberately use Figma components.
- [shadcn MCP](https://ui.shadcn.com/docs/mcp) — candidate component registry only for shadcn-compatible projects.
- [Figma MCP](https://developers.figma.com/docs/figma-mcp-server/) — optional context source; do not use it as the default token authoring surface.

The Designer should prefer the project’s existing component system over introducing a new library merely to make a prototype convenient.

## Outputs

- Updated design-system summary and links in `project/docs/design.md`.
- `project/docs/design/design-system.md` based on the [design-system document template](design-system-document-template.md).
- Optional `project/docs/design/DESIGN.md` and token exports.
- Component/state notes and preview artifacts under `project/docs/design/components/`.
- A UI Creation handoff naming approved tokens, components, states, accessibility rules, and unresolved gaps.

## Handoff acceptance criteria

- [ ] Tokens have semantic roles and do not rely on unexplained one-off values.
- [ ] Important component states are defined.
- [ ] Contrast, focus, responsive, and reduced-motion requirements are recorded.
- [ ] The relationship between design components and production components is clear.
- [ ] Any candidate tool or external component has an owner, permission boundary, and approval status.
