# Project design-system document template

Use this template for the project-specific design-system record at `project/docs/design/design-system.md`. Keep `project/docs/design.md` as the concise summary and link to this document. Add a machine-readable `DESIGN.md` or token export only when the project needs agent- or tool-consumable tokens.

## Status and ownership

- Status: proposed / approved / superseded
- Owner:
- Last reviewed:
- Related direction: link to `project/docs/design.md` and the approved mockup or Figma frames.

## Design-system principles

Record the few principles that should guide visual and interaction decisions.

## Foundations

### Colors

Record semantic roles, values, contrast requirements, states, themes, and source tokens.

### Typography

Record families, weights, scale, line heights, tracking, responsive behavior, and usage rules.

### Spacing and sizing

Record the spacing scale, layout widths, breakpoints, minimum target sizes, and sizing rules.

### Shapes, borders, and elevation

Record radii, border treatment, shadows, surfaces, layering, and any platform-specific differences.

### Imagery and iconography

Record image direction, cropping, alt-text expectations, icon set, sizing, and usage rules.

### Motion posture

Record what should move, why it moves, timing/curve guidance, reduced-motion behavior, and what should remain still.

## Components and states

| Component | Purpose | Variants | States | Production mapping | Evidence |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |

Important states should include default, hover, focus, active, disabled, loading, empty, error, and success where applicable.

## Accessibility and responsive rules

Record contrast targets, keyboard behavior, focus visibility, semantic structure, screen-reader considerations, reduced motion, responsive breakpoints, and platform differences.

## Token and implementation references

Link optional machine-readable token files, CSS variables, Tailwind exports, component previews, Figma libraries, and production component paths. Record which artifacts are authoritative.

## Known gaps and open questions

| Gap or question | Owner | Impact | Decision needed by |
| --- | --- | --- | --- |
|  |  |  |  |
