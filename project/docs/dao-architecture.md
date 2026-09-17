# DAO architecture

## Design principles

1. **DAO is the operating model.** DAO defines durable project context, teams, roles, capabilities, permissions, and records. A harness supplies the runtime; a model supplies intelligence.
2. **GitHub is durable.** Important knowledge is written to the appropriate repository documentation rather than retained only in conversation.
3. **Every repository has `project/`.** Current project truth lives in `project/docs/`, planned work in `project/plans/`, and historical context in `project/sessions/`. The default project set is `project/docs/requirements.md`, `project/docs/design.md`, and `project/docs/architecture.md`; larger deliverables may expand into matching folders. A single document may combine the three only when it explicitly says so.
4. **Teams and roles are declarative.** Each active team defines its scope, permissions, reporting, standards, roles, and escalation path in its directory. A role definition is durable; role instances are created only when useful and return a bounded handoff.
5. **Automation is not intelligence.** Automation executes approved, repeatable work; the active Lead and model remain responsible for planning, coordination, and decisions.
6. **Privacy by default.** Git stores metadata and sanitized references—not message bodies, attachments, secrets, or personal data.

## Operating layers

| Layer | Responsibility | System of record |
| --- | --- | --- |
| Project knowledge | Current DAO definition, plans, and history | `project/` |
| Teams and roles | Scope, permissions, reporting, role behavior, and work ownership | `teams/<team>/` |
| Planning | Outcomes, milestones, risks, and status | `project/plans/` |
| Skills and capabilities | SOPs, external-capability guidance, and repeatable workflows | `skills/` |
| Automation | Approved recurring execution | `schedules/`, `skills/` |
| Evidence | Historical context, decisions, and completed session records | `project/sessions/` |

## DAO, harness, model, roles, and capabilities

DAO is portable across harnesses. A harness is the environment that provides a session, filesystem access, terminal, browser, delegation, or other runtime behavior. Codex, Pi, OpenCode, and future runtimes are possible harnesses, not DAO dependencies. A model supplies intelligence. A team and role definition supplies reusable operating behavior. These layers remain separate so a harness or model can be replaced without restructuring the DAO.

Teams, roles, and skills are declarative DAO capabilities. A skill is a portable SOP and context document; an external tool or MCP may implement a capability but is not itself the DAO definition. `skills/` also maintains references to candidate upstream repositories, MCPs, and APIs before adoption. MCP provides standardized access to external capabilities, including optional n8n, Figma, GitHub, and future providers. Team entry documents catalog shared guidance, roles, and supporting workflows; define each team and its task-specific behavior jointly before use.

Harness-native skills and extensions are separate from DAO Markdown. DAO `skills/` documents remain useful even when a harness has no matching installed extension.

## Interfaces and automation

The user may work through any available interface. GitHub-backed documentation preserves the same project context across those interfaces. Automation performs repeatable approved execution only; it does not replace Lead coordination or model reasoning.

## Automation boundary

The active harness accesses external capabilities through the most appropriate interface. n8n is one optional MCP provider for future capabilities and higher-level actors; it is not the DAO orchestrator. Define an approved Outlook or calendar capability in `skills/` only after its use case, interface, permissions, safety considerations, and implementation approach are understood.
