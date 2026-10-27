# DevTeam design discovery

- Team: DevTeam
- Owner: Designer, with Lead oversight
- Status: draft — pending user review

## Purpose

Turn a project question into grounded design evidence before choosing a design direction. Discovery is research and discussion, not permission to copy a reference or begin implementation.

## Workflow

1. Read the project brief, requirements, architecture constraints, available product screenshots, and relevant session history.
2. Define the discovery question and bounded scope: target product area, users, flows, and decisions the evidence must inform.
3. Gather references through the project’s approved sources: the personal Obsidian inspiration library, bounded read-only research, existing UI inspection, screenshots, sketches, and an optional Figma discovery canvas.
4. Search the Obsidian inspiration notes by keywords before starting a new reference hunt. Review `Knowledge/Dev/Site Inspiration.md` for web references and `Knowledge/Dev/App Inspiration.md` for product and app references.
5. Record each useful reference with its screenshot, direct URL, curated source URL when applicable, date, keywords, what it demonstrates, and what should not be copied.
6. Discuss the collected references with the user. Separate evidence from taste, preference, assumptions, and unresolved questions.
7. Summarize the findings in the project design document and hand the evidence to Design Planning.

Figma is an optional discovery canvas. The Designer should not depend on repeated Figma MCP calls when screenshots, exports, links, or written notes are sufficient. Obsidian is the long-lived personal reference library; Figma is the project-specific discussion canvas; `project/docs/design/references.md` is the project-specific selected-reference index.

## Obsidian inspiration library

The approved personal library lives in the Obsidian vault under `Knowledge/Dev/`:

- `[[Site Inspiration]]` — websites, landing pages, portfolios, studios, and visual references.
- `[[App Inspiration]]` — app, product, dashboard, and interaction references.

Each entry should preserve four pieces of information:

- screenshot or embedded image;
- direct URL of the referenced site or screen;
- `source:` URL for the gallery, curated site, or person who surfaced it;
- searchable keywords describing what is valuable about it, such as `typography`, `navigation`, `pricing`, `motion`, `dark-ui`, `editorial`, `empty-state`, or `mobile`.

Optional notes should explain what to study, what to adapt, and what not to copy. Keep the original source URL separate from the direct URL so an agent can trace provenance and so the same reference can be found again through its curated collection.

When a project starts, the Designer or discovery agent should search these notes by keyword, select a small relevant set, and create `project/docs/design/references.md` with links to the chosen Obsidian notes, direct URLs, screenshots, and the reason each reference was selected. Do not copy the entire personal library into a project repository.

## Discovery reference sources

Use sources to study principles, patterns, composition, typography, interaction, and content—not to clone proprietary screens or branded identity.

- [Refero Styles](https://styles.refero.design/) — real-product UI references and style exploration.
- [Prompt Motion Site](https://promptmotionsite.com/) — motion and interaction references.
- [Minimal Gallery](https://minimal.gallery/) — minimal web design references.
- [Land-book](https://land-book.com/) — landing-page and marketing-site references.
- [SiteInspire](https://www.siteinspire.com/) — website and interaction references.
- [Httpster](https://httpster.net/) — web design references.
- [One Page Love](https://onepagelove.com/) — one-page and landing-page references.
- [SaaS Landing Page](https://saaslandingpage.com/) — SaaS landing-page references.
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
- A project-specific `project/docs/design/references.md` linking the selected Obsidian notes, direct URLs, screenshots, and selection rationale.
- Supporting reference assets under `project/docs/design/references/` or `project/docs/design/discovery/` when needed.
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
