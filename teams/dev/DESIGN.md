# DESIGN

- Team: DevTeam
- Status: draft — pending user review

## Objective

Define implementation-facing UX/UI direction, visual constraints, interaction behavior, and design-tool use for approved DevTeam work.

## Inputs

- Completed [DevTeam discovery](discovery.md).
- A Figma file with discovery/reference pages and a designated design page.
- The project-specific requirements and constraints from `project/docs/requirements.md` and `project/docs/architecture.md`, or an explicitly labeled combined document.

## Workflow

1. Review the discovery, reference, sketch, and project constraints before proposing a design direction.
2. By default, discuss findings, design directions, tradeoffs, and proposed changes with the user before doing design work. Directly create or refine native Figma frames, components, variables, or auto layout only when the user has explicitly authorized free design work for that task.
3. Use Figma MCP to read the relevant Figma pages and, when authorized and supported by the chosen Figma capability, make the agreed native Figma changes.
4. Use the [project design-document template](design-document-template.md) to create or update the project's default `project/docs/design.md`. Link the selected Figma file and frames. When a client requests it or the design warrants it, split sections into `project/docs/design/` while retaining `project/docs/design.md` as the entry-point index and summary.
5. Preserve the approved design on the designated Figma design page as the implementation reference.
6. Conduct a design review with the user, checking hierarchy, usability, responsive behavior, accessibility, visual distinction, and conversion intent before sending the design to planning.
7. Treat generated code as a reference implementation, not final production code; align it with the target project's component system and technical constraints during planning and building.

## Tools, skills, and references

All entries below are candidates only. None is installed, connected, or approved for use.

- [Figma MCP](https://developers.figma.com/docs/figma-mcp-server/) — bring approved Figma context into development work.
- [Refero Styles](https://styles.refero.design/) — research real-product styles and reusable `DESIGN.md` references.
- [Impeccable](https://github.com/sugatoray/skill-impeccable) — candidate native design skill for critique, audit, and iteration; review its hooks before installation.
- [GPT Taste](https://github.com/leonxlnx/taste-skill) — candidate native design skill for GPT/Codex-oriented frontend guidance; review the individual skill before installation.
- [Remotion](https://github.com/remotion-dev/remotion) — candidate programmatic video framework for product demos, explainers, and video variants.
- [Figma Code Connect](https://developers.figma.com/docs/figma-mcp-server/code-connect-integration/) — candidate way to connect real code components to Figma components, improving design-to-code consistency.
- [Vercel Web Interface Guidelines](https://vercel.com/design/guidelines) — candidate review skill for web UI accessibility, UX, and implementation quality; use it as an audit after a design direction exists, not as a substitute for the direction.
- [shadcn MCP server](https://ui.shadcn.com/docs/mcp) — candidate component-registry interface for projects that deliberately use shadcn-compatible components. Review selected components and dependencies before installation; it is not a general design source.

[ChatGPT Sites](https://openai.com/academy/chatgpt-sites/) is not a design tool. It belongs only in `DEPLOY.md` when evaluating deployment of an approved site demo.

## Scope, permissions, and constraints

Discussion comes first by default. Do not make Figma changes, overwrite an approved Figma design, publish a Figma prototype, or use a third-party design-to-code service unless the user has explicitly authorized the work. Do not install candidate tools or components without the user's approval.

## Outputs and evidence

- An approved Figma design page that carries the selected design direction into implementation.
- A project-specific `project/docs/design.md` based on the template, linking to the approved Figma file and relevant frames. For expanded projects, it remains the index to any supporting files in `project/docs/design/`.
- A clear handoff of the Figma design page and design documentation to [DevTeam review](team-review.md), alongside the requirements and architecture documents.

## Reporting and escalation

## Open questions
