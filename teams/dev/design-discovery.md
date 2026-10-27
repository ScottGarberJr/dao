# DevTeam design discovery

- Team: DevTeam
- Owner: Designer, with Lead oversight
- Status: draft — pending user review

## Purpose

Turn a project question into grounded design evidence before choosing a design direction. Discovery is research and discussion, not permission to copy a reference or begin implementation.

## Workflow

1. Read the project brief, requirements, architecture constraints, available product screenshots, and relevant session history.
2. Define the discovery question and bounded scope: target product area, users, flows, and decisions the evidence must inform.
3. Gather references through approved read-only research, existing UI inspection, screenshots, sketches, and an optional Figma discovery canvas.
4. Record each useful reference with its URL, source, date, what it demonstrates, and what should not be copied.
5. Discuss the collected references with the user. Separate evidence from taste, preference, assumptions, and unresolved questions.
6. Summarize the findings in the project design document and hand the evidence to Design Planning.

Figma is an optional discovery canvas. The Designer should not depend on repeated Figma MCP calls when screenshots, exports, links, or written notes are sufficient.

## Discovery reference sources

Use sources to study principles, patterns, composition, typography, interaction, and content—not to clone proprietary screens or branded identity.

- [Refero Styles](https://styles.refero.design/) — real-product UI references and style exploration.
- [Prompt Motion Site](https://promptmotionsite.com/) — motion and interaction references.
- [Minimal Gallery](https://minimal.gallery/) — minimal web design references.
- [Land-book](https://land-book.com/) — landing-page and marketing-site references.
- [SiteInspire](https://www.siteinspire.com/) — website and interaction references.
- [Httpster](https://httpster.net/) — web design references.
- [One Page Love](https://onepagelove.com/) — one-page and landing-page references.
- [SaaS Landing Page](https://saaslandingpage.co/) — SaaS landing-page references.
- [Design Bookmark](https://designbookmark.com/) — design reference collection.
- [Vercel Web Interface Guidelines](https://vercel.com/design/guidelines) — implementation and accessibility review guidance after a direction exists.
- [Figma](https://www.figma.com/) and the [Figma MCP documentation](https://developers.figma.com/docs/figma-mcp-server/) — optional source and discovery-canvas tooling; not a standing approval to connect or edit.

The source list is a reference registry, not an instruction to browse every site. Use the smallest set that answers the discovery question.

## Evidence record

For every retained reference, record:

- source URL or project path;
- screenshot, frame, sketch, or artifact path when available;
- date collected;
- relevant screen, section, or interaction;
- the design principle being studied;
- adaptation notes and copyright or access limitations;
- whether the reference is approved for continued use.

Do not upload client data, credentials, personal data, or protected application screens to public services. Keep generated execution state out of Git.

## Outputs

- A concise discovery summary in `project/docs/design.md`.
- Supporting references under `project/docs/design/references/` or `project/docs/design/discovery/` when needed.
- A link to the approved Figma discovery page when one exists.
- Open questions and decisions needed during Design Planning.
- A bounded handoff naming the target screens or flows, evidence, constraints, and next decision.

## Handoff acceptance criteria

- [ ] The discovery question and scope are explicit.
- [ ] References are recorded with direct links and purpose.
- [ ] Evidence is separated from taste and assumptions.
- [ ] The user has discussed or approved the relevant direction inputs.
- [ ] No proprietary design was copied as a production target.
- [ ] The handoff names the next design decision.
