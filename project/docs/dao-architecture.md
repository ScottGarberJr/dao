# DAO architecture

## Design principles

1. **Codex is the primary driver.** Codex is the central assistant, planner, coordinator, and implementation environment; tools and automation support it rather than replace its reasoning.
2. **GitHub is durable.** Important knowledge is written to the appropriate repository documentation rather than retained only in conversation.
3. **Every repository has `project/`.** Current project truth lives in `project/docs/`, planned work in `project/plans/`, and historical context in `project/sessions/`. Every project starts with `project/docs/design.md` as its design entry point; supporting files may live in `project/docs/design/` when needed.
4. **Teams are declarative.** Each active team defines its scope, permissions, reporting, approaches, tools, standards, and escalation path in its directory. Its `README.md` provides shared workflow guidance; uppercase documents define major lifecycle stages, while lowercase subdocuments support specific tasks.
5. **Automation is not intelligence.** n8n and other automation execute approved, repeatable work; Codex remains responsible for planning, coordination, and decisions.
6. **Privacy by default.** Git stores metadata and sanitized references—not message bodies, attachments, secrets, or personal data.

## Operating layers

| Layer | Responsibility | System of record |
| --- | --- | --- |
| Project knowledge | Current DAO definition, plans, and history | `project/` |
| Teams | Scope, permissions, reporting, workflow stages, and work ownership | `teams/<team>/` |
| Planning | Outcomes, milestones, risks, and status | `project/plans/` |
| Tools and actors | Future external capabilities and repeatable workflows | `tools/` |
| Automation | Approved recurring execution | `schedules/`, `tools/` |
| Evidence | Historical context, decisions, and completed session records | `project/sessions/` |

## Runtime, teams, and external capabilities

Codex is the runtime/environment for discussion, planning, delegation, implementation, review, and durable documentation. A model supplies intelligence; a team definition supplies reusable role behavior. These remain separate so models can be replaced without restructuring the DAO.

Teams, tools, and actors are declarative DAO capabilities. A tool exposes a useful concrete operation. An actor encapsulates a repeatable multi-step process. `tools/` also maintains references to candidate upstream repositories, MCPs, and APIs before adoption. MCP provides standardized access to external capabilities, including optional n8n, Figma, GitHub, and future providers. Team entry documents catalog their shared workflow guidance and relevant lower-level documents; define each team and its task-specific behavior jointly before use.

Codex-native skills are separate from DAO Markdown. Use a native skill only for a stable, repeatable workflow that needs executable instructions or supporting resources; do not create a repository `skills/` catalog merely to store DAO documentation.

## Interfaces and automation

The user may work with Codex through desktop, mobile, or VS Code. GitHub-backed documentation preserves the same project context across those interfaces. Automation performs repeatable approved execution only; it does not replace Codex's planning, coordination, or decision-making.

## Automation boundary

Codex accesses external capabilities through the most appropriate MCP. n8n is one optional MCP provider for future external tools and higher-level actors; it is not the DAO orchestrator. Define an approved Outlook or calendar capability in `tools/` only after its use case, interface, permissions, safety considerations, and implementation approach are understood.
