# Buzz agent profiles

- Status: proposed runtime profiles — identities and channels are created separately.
- Purpose: Define the prompt/context contract for direct Buzz-facing agents without making Buzz the source of DAO role truth.

## Architecture

A Buzz-facing agent is a runtime role instance, not a replacement for the DAO role definition:

`DAO role -> Pi profile/persona -> Herdr/workspace binding -> Buzz identity/channel`

The Buzz responder is normally a Pi parent coordinator. It receives the user event, delegates substantive work to visible Herdr children, reconciles results, and publishes one final reply. A direct Buzz profile should expose only the tools appropriate to its role. Staff roles such as Builder, Tester, Reviewer, Scribe, and Deployer are normally delegated workers rather than permanent Buzz members. Scribe workers default to `openai-codex/gpt-5.6-luna` with `ollama/dao-general:9b` as the local Qwen3.5 fallback.

## Profiles

| Display name | DAO role | Primary purpose | Default placement |
| --- | --- | --- | --- |
| Head | `teams/dev/head.md` | Portfolio routing and cross-project coordination | `/home/scottg/dev`, Head Herdr workspace |
| Lead | `teams/dev/lead.md` | Project requirements, architecture, delegation, and review | Matching project repository/workspace/channel |
| Designer | `teams/dev/designer.md` | Direct UX/UI discussion and design evidence | Matching project repository/workspace/channel |
| Gugu | `teams/assistant/README.md` | Personal and administrative support | Separate personal context |
| Homie | `teams/ops/windows-it.md` | Local Windows workstation support | Separate IT context |
| Senior Dev | `teams/dev/senior-dev.md` | Explicit escalation for difficult implementation and infrastructure collaboration | Matching project workspace; invoked by Lead or user |

## Local prompt files

The current local prompt drafts are outside the Git source tree because they are runtime configuration:

- `runtime/buzz-local/personas/head.txt`
- `runtime/buzz-local/personas/lead.txt`
- `runtime/buzz-local/personas/designer.txt`
- `runtime/buzz-local/personas/gugu.txt`
- `runtime/buzz-local/personas/homie.txt`

Each prompt names the canonical DAO references, context boundary, delegation contract, reply behavior, and approval limits. A profile must not be enabled merely because its prompt exists.

## Pi WSL model profiles

The WSL ACP launchers under `runtime/buzz-local/bin/` use separate settings/session directories and the existing user-owned Pi Codex authentication. They pass through `pi-acp-wsl-bridge.mjs`, which translates Buzz Desktop's Windows workspace path (for example `C:\\Users\\scottg\\.buzz`) to `/home/scottg/dev` before Pi creates its session. They expose these selectable defaults without changing Buzz core:

| Launcher | Default model | Intended use |
| --- | --- | --- |
| `pi-head-mini-acp` | `openai-codex/gpt-5.4-mini` | General Head coordination |
| `pi-head-luna-acp` | `openai-codex/gpt-5.6-luna` | Architecture and difficult delegation |
| `pi-head-spark-acp` | `openai-codex/gpt-5.3-codex-spark` | Bounded implementation and coding |

Buzz's managed-agent form does not import Pi's provider/model catalog through a custom ACP harness. The Pi model IDs are therefore not expected to appear in Buzz's dropdown. Use separate pinned custom harness entries when selecting among Pi defaults: `pi-head-mini-acp`, `pi-head-luna-acp`, or `pi-head-spark-acp`, and choose **Use harness default** in Buzz. Buzz does not automatically fail over between model IDs. Herdr task preferences provide ordered fallbacks for delegated workers. A Buzz Head fallback is therefore an explicit harness switch, not an invisible retry. Never run the old system member and a managed Head simultaneously.

## Activation sequence

For each agent:

1. Confirm or update the DAO role definition.
2. Create a dedicated Pi runtime/profile with its prompt, model, session state, and tool allowlist.
3. Bind the process to the intended Herdr workspace and working directory.
4. Create or configure the Buzz identity, channel membership, sender allowlist, and reply policy.
5. Run direct reply, delegation, boundary, restart, and duplicate-reply smoke tests.
6. Record the identity, channel, workspace, model, tool surface, and evidence in the relevant session record.

Do not put the full DAO repository or all project history into every profile. Supply selected role/skill files and the relevant project's `project/docs/`, `project/plans/`, and `project/sessions/` paths.

## Current activation status

The legacy persistent local ACP member is now referred to as **Buzz**, bound to the Head workspace and limited to `buzz_reply` and `subagent`. Managed Buzz agent cards are separate identities, but the WSL custom-ACP path must publish through the Pi `buzz_reply` tool: ordinary ACP text appears in activity but is not delivered as a channel reply. The managed WSL process therefore needs the managed identity's `BUZZ_PRIVATE_KEY`, `BUZZ_RELAY_URL`, and `BUZZ_AUTH_TAG` forwarded through `WSLENV`; never copy a key into a prompt or repository. The managed Head card must be tested without running a second responder. The five named runtime prompt drafts exist, and Pi WSL model launchers are prepared for Mini, Luna, and Spark. Buzz core is not modified.
