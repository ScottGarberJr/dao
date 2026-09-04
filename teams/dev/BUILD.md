# BUILD

- Team: DevTeam
- Status: draft — pending user review

## Objective

Implement an approved plan item in the active project repository.

## Inputs

- Approved Figma design context or an approved screenshot fallback.
- An agreed implementation plan, acceptance criteria, and project-specific requirements.

## Workflow

1. Read the implementation plan and Figma design context together; resolve a discrepancy with the user instead of silently choosing one.
2. Build reusable components and tokens first, then compose feature-level screens and flows on the approved feature branch.
3. Compare the running implementation against the approved Figma frames at the target responsive breakpoints or device sizes.
4. Keep generated Figma-to-code output as a starting point only; adapt it to the repository's framework, conventions, accessibility, state handling, and tests.

## Tools, skills, and references

All entries below are candidates only. None is installed, connected, or approved for use.

- [Figma MCP server guide](https://github.com/figma/mcp-server-guide) — retrieve design context and, with supported remote capabilities, work with the Figma canvas. Use Figma components and Code Connect rather than treating a screenshot as the entire specification.
- [Instatic MCP connectors](https://github.com/CoreBunch/Instatic/blob/main/docs/features/mcp-connectors.md) — self-hosted visual CMS that exposes an MCP endpoint to external clients. Its connector is token-scoped, write changes remain drafts, and publishing is explicitly gated; evaluate it as a site-building path, not as a universal React Native or Nuxt code generator.
- [Figma to React Native](https://docs.figma-to-react-native.com/) — third-party candidate for React Native export or syncing. Evaluate code quality, framework fit, licensing, and maintenance before use.

## Scope, permissions, and constraints

Do not use a Figma-to-code tool to replace plan review, repository conventions, or test coverage.

## Outputs and evidence

## Reporting and escalation

## Open questions
