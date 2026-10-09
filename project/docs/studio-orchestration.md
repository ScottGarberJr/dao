# Studio orchestration

- Status: proposed direction — implementation details remain open
- Purpose: Define the intended human-facing organization and runtime behavior for delegated work without making DAO dependent on one harness or model.

## Organization

The organization is a small studio rather than a nautical hierarchy.

| Role | Relationship and responsibility |
| --- | --- |
| User | Boss and final authority for material scope, approval, commit, and deployment decisions. |
| Gugu (DAO role: Gu) | Personal assistant and communications interface. Gugu handles personal and administrative workflows and relays messages to and from studio leadership. |
| Head | The user's primary contact and portfolio lead for all projects under `/home/scottg/dev`; routes project work to Leads and maintains shared DAO alignment. |
| Lead | The user's secondary project contact and senior developer. The Lead defines requirements, conventions, design, architecture, and plans with the user; delegates staff work; and reviews results. |
| Scribe | A bounded staff role delegated by the Lead to update Markdown records, prepare status updates and timelines, and create user-facing Pi artifacts without making project decisions. |
| Planner | Creates and updates requirements, plans, acceptance criteria, checklists, session records, decision records, and other project documentation. |
| Designer | Owns implementation-facing UX/UI direction and design evidence. |
| Builder | Implements bounded work under the Lead's direction, normally as a junior developer. |
| Reviewer | Provides an independent technical or quality review when the Lead assigns one. |
| Tester | Independently verifies acceptance criteria and supplies evidence. |
| Researcher | Performs bounded investigation and returns sources, findings, and uncertainty. |
| Deployer | Prepares and performs an explicitly authorized release workflow. |

The user's normal conversations are with Gugu, Head, and a project's Lead. The user may also enter a focused Designer conversation for a project. Buzz may additionally expose a local Windows IT agent for approved workstation support. Other roles are normally delegated staff rather than standing user-facing contacts.

## Role separation and parallel documentation

Roles should stay within their declared scopes to reduce missed DAO requirements and accidental authority expansion. Head routes project work to the project's Lead. The Lead works with the user on requirements, design, architecture, coding conventions, plans, and acceptance criteria, then delegates bounded tasks to Designer, Planner, Builder, Tester, Reviewer, Scribe, Deployer, or Researcher staff. A Scribe may update approved Markdown records, prepare status/timeline reports, and create user-facing Pi artifacts, but cannot invent decisions or change approval boundaries. Head reconciles changes to shared DAO definitions.

## Persistent leadership and visible task agents

The intended Herdr organization is:

- One Head workspace rooted at `/home/scottg/dev`, containing the portfolio and registered projects.
- One project workspace per active project, mapped one-to-one to the project's GitHub repository and Buzz project channel.
- One persistent Head conversation and one persistent Lead conversation per project when the user creates them.
- Short-lived Designer, Planner, Builder, Tester, Reviewer, Scribe, Deployer, and Researcher agents in the matching project workspace, normally isolated in task worktrees when they modify code.
- A task's Herdr workspace, repository/worktree, and Buzz channel identify the same project; workspace placement is separate from the worker's filesystem working directory.
- Head starts from `/home/scottg/dev`; project staff normally start from the corresponding project repository or worktree while reading explicitly selected DAO and project documents.

Short specialist display names should be easy to scan, such as `dev-12`, `test-04`, or `design-03`. The internal identity remains a stable project ID, task ID, role, agent incarnation, repository, and worktree even when the display name is short. Agents belonging to a project should visually share the project's color when Herdr supports stable workspace- or project-derived agent styling. Color is a convenience, never the only carrier of identity or status.

Completed task agents should normally close after their evidence and handoff are durably recorded. Persistent Head, project Lead, and Gugu conversations remain available; Designer may also be persistent when the user chooses.

## Activity and details

Leadership and task agents must expose an unambiguous state. At minimum:

- `working` — an agent turn or tool execution is active;
- `thinking` — model generation or reasoning is active when the harness can distinguish it;
- `delegating` — leadership is preparing or dispatching a task;
- `waiting` — an agent is waiting on a declared dependency;
- `needs input` — a user or leadership decision is required;
- `reviewing` or `testing` — the applicable verification phase is active;
- `done` — the bounded handoff is ready;
- `idle` — no work is active.

The ordinary display should stay concise, for example `working…`, `thinking…`, or `tasking dev-12…`. A `/details` command or equivalent view should reveal the task ID, assigned role and model, current step, last meaningful event, worktree, acceptance criteria, dependency or decision owner, and available evidence. Decorative animation is not required.

## Task and review lifecycle

The initial lifecycle to validate is:

`intake -> clarification -> requirements/design/architecture -> ready -> implementation -> Lead review -> testing -> final review -> user approval or commit-ready -> committed -> closed`

Head owns portfolio routing. The project Lead owns project progression, user-facing technical decisions, staff delegation, and reconciliation. A Scribe maintains assigned Markdown records and presentation artifacts; it does not own lifecycle decisions. Every local-model task should have a bounded repository scope, a bounded deliverable, and a clear stopping condition. Implementation, review, and testing should be independent assignments when risk warrants it.

A worker must not silently guess when its task lacks information. It should ask the user or the leading agent for clarification, or explicitly request authorization to dig deeper. If the task exceeds the current session's practical context, start a fresh session rather than continuing to accumulate history. The new session must receive a compact handoff containing: objective, relevant files, decisions already made, constraints, work completed, open questions, acceptance criteria, and the exact next action. The original worker or parent remains responsible for reconciling the new session's result.

Generated runtime state must remain outside Git. Durable project truth belongs in the project's `project/docs/`, `project/plans/`, and `project/sessions/`; shared operating truth belongs in this DAO repository.

## Models and fallback

Roles have preferred model profiles rather than one global model. Strong reasoning models are appropriate for Head, project Leads, consequential planning, architecture, and final review. Local models are appropriate for bounded implementation, testing, extraction, formatting, classification, visual inspection, and other work matched to their demonstrated capability.

Head and project Leads must not become unusable when a hosted usage limit is reached. Fallback should be explicit rather than silent:

1. preserve the current task and session state;
2. announce that the preferred model is unavailable and name the proposed fallback;
3. distinguish a temporary continuity mode from a fully equivalent review or approval authority;
4. allow the user to accept the fallback, wait for quota recovery, or route the work elsewhere;
5. require the preferred or otherwise qualified strong reviewer before a high-impact gate is considered satisfied.

The concrete model matrix and quota behavior remain to be defined after testing the user's available Codex subscription models and local models in Pi.

### Local-model qualification

The retired `ollama/qwen3:4b-instruct` configuration failed a broad DAO reconnaissance request because Ollama allocated only a 4,096-token runtime context:

```text
request (4096 tokens) exceeds the available context size (4096)
```

On October 7, 2026, the Qwen3.5-based `ollama/dao-general:9b` profile replaced both Qwen3 4B and Qwen3-VL 8B as Pi's default local general-purpose and vision model. Direct Ollama and Pi smoke tests verified text responses, image understanding, and structured tool calls. Its Ollama and Pi context limit is 16,384 tokens with an 8,192-token Pi output limit (trial configuration; validate after restarting Pi).

The local roster is intentionally limited to:

- `ollama/dao-general:9b` for general local work, tools, and image input;
- `ollama/dao-coder:14b`, a Qwen2.5 Coder 14B profile fixed at 8,192 context tokens with low-variance sampling, for bounded coding and fill-in-the-middle work.

Qualification remains task-specific. Broad repository reconnaissance should be partitioned when practical, and a failed local run must be reported as incomplete evidence rather than silently treated as successful.

## Pi, Herdr, Buzz, and delegated capabilities

The intended runtime mapping is:

- **Pi:** persistent Head and project Lead conversations, with bounded staff roles delegated through the approved Pi/Herdr capability.
- **Herdr:** one portfolio workspace rooted at `/home/scottg/dev`, plus one workspace per project. A delegated worker receives an explicit project workspace, repository/worktree, role, model, tool set, and task brief.
- **Buzz:** user-facing Head and project Lead channels, plus Gugu and the separate local Windows IT agent. A project's Buzz channel maps one-to-one to its Herdr workspace and GitHub repository.
- **DAO:** supplies the role definitions, skills, project-document conventions, and approval boundaries; it is not injected wholesale into every prompt.
- **Pi artifacts:** are a presentation capability. Scribe owns status reports, timelines, dashboards, and evidence summaries; Designer owns prototypes, Tester owns test reports, Lead/Reviewer owns technical walkthroughs, and Deployer owns release-readiness reports.

The current local Buzz installation remains a single local-first member. No full Head/Lead/staff Buzz roster has been created, no Luna or other subscription-backed model has been exposed to Buzz, and no Buzz-core change is authorized by this document.

Using Codex-account models inside Pi and launching Codex CLI as a task agent are different integrations:

- Pi using a Codex-account model means Pi remains the harness. Pi supplies the session, tools, extensions, permissions, and user interface; the selected Codex model supplies inference.
- A Codex CLI task agent uses the Codex harness. It has Codex CLI's own configuration, skills, MCP servers, approvals, and tool surface, and Herdr can host and observe that process as another agent.

A Head or project Lead running in Pi can delegate to a Herdr task agent only when it has an orchestration capability that can create or choose the matching project pane or worktree, start and observe the worker, submit a bounded brief, and collect its handoff. Merely selecting a model inside Pi does not provide Herdr tools. The studio controller or a narrowly scoped Pi extension should enforce the project workspace, repository, worktree, role, model, tool, and approval policy.

Capabilities such as image generation or Coolify access should be routed to a worker whose harness actually exposes the approved tool, or exposed through a separately approved MCP available to the relevant harness. Credentials and tool authority must not be copied casually between harnesses.

## Gugu and message relay

The personal assistant's user-facing name is **Gugu**; its portable DAO role remains **Gu**, after 顾, to distinguish the assistant from **DAO**, the operating model or "way things are done." The existing `teams/assistant/` directory remains the implementation-neutral filesystem location.

The Discord or Buzz bot and its user-facing identity should use Gugu when that work is undertaken. A Gu-specific n8n subdomain is also a coherent naming choice if the endpoint is dedicated to Gu workflows; infrastructure naming must not imply that n8n is the DAO orchestrator. DNS, credentials, callback URLs, webhook endpoints, and migration or compatibility needs require a separately approved implementation task.

Gugu should eventually be able to send a message to Head or a named project Lead and have it appear in the persistent Pi conversation. Head or a Lead should be able to send Gugu a notification or priority-marked task for delivery to the user. This bidirectional priority channel is a retained future requirement, not an immediate implementation authorization.

The Discord/Gu implementation may live in a separate repository. This DAO repository continues to own the portable role, permission, workflow, and interface definitions that implementation follows.

## Current runtime baseline

As inspected on October 7, 2026:

- Herdr 0.9.1 is installed.
- The Herdr Pi integration is installed and current.
- Pi defaults to the Qwen3.5-based `dao-general:9b` profile and exposes `dao-coder:14b` as the only other installed Ollama model. DAO General uses a 16,384-token context, 8,192-token Pi output limit (trial), temperature 0.2, top-p 0.8, and repetition penalty 1.0. The coder profile reuses Qwen2.5 Coder 14B Q4_K_M weights with an 8,192-token context, 4,096-token Pi output limit, temperature 0.15, top-p 0.85, and repetition penalty 1.05. DAO Coder is qualified for bounded, tool-free coding and fill-in-the-middle work, not autonomous tool loops.
- The user reports that the Codex account is linked to Pi and Codex models are usable there.
- The Herdr Codex CLI integration is not installed.
- The supplied screenshot shows the intended two-column project layout: an ordinary terminal on the left and Pi on the right. Herdr's left sidebar already groups Spaces and agents, with `head`, `scottg`, `WriteStuff`, and `BabelCards` visible as example Spaces and Pi agents grouped below.
- The September 22 screenshot is historical evidence of Pi 0.85.1, the Herdr state extension, and the former `ollama/qwen3:4b-instruct` default. The model default has since changed; the screenshot should not be read as the current model roster.

## Open implementation questions

- Which exact Codex and local model profiles should each role prefer, and which are qualified fallbacks?
- Should fallback require confirmation each time, be pre-authorized per role, or use both approaches by risk class?
- What local state schema and service should own tasks, messages, agent incarnations, and recovery?
- Which Herdr extension or plugin boundary should implement project colors, concise status text, and `/details`?
- What is the safe command and approval contract for Pi Head/Lead to launch a Herdr worker in the matching project workspace and worktree?
- Which completion classes may a Lead close without user review?
- What constitutes a `priority` message from Head or a Lead to Gu, and how should Gu notify the user?
- Which Pi/Herdr profile should represent Head, project Lead, Designer, and the bounded staff roles?
- How should the directly addressable local Windows IT agent be scoped and kept separate from project work?
