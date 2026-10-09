# Pi updates: transcript distinction and native usage

Status: Phase 1 implemented (2026-10-08)

This document records the bounded design for two Pi improvements: making user prompts easier to identify while scrolling and adding a native `/usage` extension that can later supply a clickable Buzz dashboard. Phase 1 now also exposes the live subscription quota when Pi has a supported native OpenAI Codex account.

## Current supported behavior

### User messages

The installed [Zentui](https://github.com/lmilojevicc/pi-zentui) `0.28.0` package already owns user-message rendering. It supports `framed`, `framed-copy-friendly`, `compact`, and `labeled` styles, selected through `/zentui user-messages` or `/zentui messages`. `/home/scottg/.pi/agent/zentui.json` now uses `labeled`, which adds an explicit `User` label while preserving the other Zentui settings.

Zentui's user-message owner exposes only `accent` and `border` color overrides. Its renderer styles the rail, rule, and (for `labeled`) the `User` label; it does not expose a configurable background for the message body. `bg:` is accepted by the generic style parser, but it is not a user-message background capability and must not be assumed to fill the transcript block. The approved smallest safe alternative was the existing `labeled` style; no custom background implementation was added.

### Usage already available

Pi currently has a built-in `/session` command that prints session metadata, message/tool counts, token totals, cache details, total cost, and a model-attributed cost breakdown. It is not a `/usage` command and is not a dashboard-oriented data interface.

Pi's public extension API supports:

- `pi.registerCommand()` for `/usage`;
- `ctx.sessionManager.getBranch()` / `getEntries()` for session entries;
- `ctx.ui.custom()` for an interactive TUI view in TUI mode;
- `ctx.ui.notify()` and `ctx.ui.setStatus()` for lightweight output;
- `pi.on()` lifecycle events such as `session_start`, `session_tree`, `message_end`, `model_select`, and `session_shutdown`;
- `pi.appendEntry()` for extension state, though usage totals should remain derived from canonical session entries rather than duplicated state.

Session entries include assistant `usage`, compaction/branch-summary usage, and a public `usage` entry type for arbitrary usage categories. The public `usage-totals` helper used by Pi core is not part of the extension API surface, so the extension should use a small local reducer over the public entries and document its inclusion rules.

## Proposed implementation

### Phase 1: native `/usage`

Implemented a global Pi extension at `/home/scottg/.pi/agent/extensions/usage.ts` with these responsibilities:

1. Register `/usage` with optional views such as `summary`, `models`, and `json`.
2. Derive a normalized snapshot from the active branch, including session ID/path, timestamps, message/tool counts, input/output/cache tokens, cost, and per-provider/model totals.
3. Include assistant usage, tool-result nested usage, and usage-bearing compaction/branch-summary entries. This mirrors Pi's `getSessionStats()` implementation. Arbitrary `usage` entries are excluded because Pi's `/session` totals exclude them; this keeps reconciliation deterministic.
4. Render a compact native TUI summary first. A later interactive view can use `ctx.ui.custom()` with keyboard navigation; do not replace Zentui's Footer or modify Pi core.
5. Add a machine-readable `json` representation with a versioned schema. JSON is the future Buzz integration boundary, not terminal scraping.
6. Refresh displayed data after session/model/tree/message lifecycle events, with no background network calls and no credential access.

The implementation is read-only and active-branch/session-scoped. `/usage` renders a persistent native widget above the editor; `/usage summary` selects the human-readable view, `/usage json` selects the versioned DTO, and `/usage clear` removes it. It does not write exports, start an HTTP server, or send Buzz messages.

When the widget is active, the extension adds a subscription-quota section before the session totals. It shows 5-hour and weekly remaining percentages with visual bars, and displays a reset countdown only when the response supplies a supported `reset_at`/`resetAt` timestamp or `reset_after_seconds`/`resetAfterSeconds` duration. Missing reset fields are shown as `reset unavailable`; no reset time is inferred from the window length. Loading, unavailable, and stale states are explicit. The DTO keeps the same `dao.pi.usage.v1` schema and adds an optional `quota` object, so consumers that ignore the field remain compatible.

### Phase 2: Buzz dashboard feed

Keep the usage snapshot independent from presentation. A future local adapter can consume the versioned JSON DTO and publish it through an approved local relay or dashboard service. Dashboard rows should carry stable session/entry identifiers and explicit action metadata so a click can request `/resume`, open a session, or show a usage detail without parsing display text. The transport, authentication boundary, retention, and whether the dashboard may control Pi remain decisions for the later Buzz design; none is enabled by this document.

Suggested initial DTO shape (subject to implementation tests):

```ts
type UsageSnapshotV1 = {
  schema: "dao.pi.usage.v1";
  session: { id: string; file?: string; cwd: string; name?: string };
  generatedAt: string;
  totals: {
    input: number;
    output: number;
    cacheRead: number;
    cacheWrite: number;
    totalTokens: number;
    cost: number;
  };
  counts: { userMessages: number; assistantMessages: number; toolCalls: number; toolResults: number };
  models: Array<{ provider: string; model: string; input: number; output: number; totalTokens: number; cost: number }>;
  quota?: {
    state: "loading" | "available" | "unavailable" | "stale";
    fetchedAt?: string;
    fiveHour?: { remaining: number; resetAt?: string };
    week?: { remaining: number; resetAt?: string };
  };
};
```

## Subscription quota design and limits

The data source is the undocumented `https://chatgpt.com/backend-api/wham/usage` endpoint used by the installed Zentui Codex-quota implementation. The extension safely reuses its public Pi patterns: require the active model to be `openai-codex` with the native `openai-codex-responses` API and a `https://chatgpt.com` model/provider route; resolve authentication only through Pi's public `modelRegistry.getProviderAuth("openai-codex")`; send the bearer token only to the exact HTTPS endpoint; reject redirects; and optionally send the account ID when it is available from the JWT routing claim. Unsupported provider routes, auth shapes, HTTP errors, malformed responses, and unknown window sizes fail closed.

Quota collection begins when `/usage` is opened and stops on `/usage clear`, session shutdown, or loss of the supported route. It refreshes approximately every 60 seconds while active. A separate in-memory one-second repaint updates reset countdowns; it does not make network requests. No quota request is made while `/usage` is inactive, and credentials, quota values, and account identifiers are not persisted. The current local default is Ollama, so validation correctly produced `unavailable` without making a quota request.

The endpoint's reset fields are not guaranteed by Pi or Zentui. The installed Zentui parser currently reads only `used_percent` and the two known durations (18,000 and 604,800 seconds); it does not claim reset support. This extension accepts reset values only when the response explicitly contains the supported fields above. Fixture validation confirmed both the no-reset case and an explicit `reset_at` case. No live account request was made, so live reset availability remains unverified and the UI reports `reset unavailable` when absent.

## Implementation evidence

- Changed only `components.userMessages.style` in `/home/scottg/.pi/agent/zentui.json`; JSON validation passed.
- Installed versions verified: Pi `0.85.1`, Zentui `0.28.0`.
- Loaded the extension with `pi --no-session --no-tools --no-context-files -e /home/scottg/.pi/agent/extensions/usage.ts`; Pi accepted the module without an extension-load error.
- Ran a deterministic fixture through the exported reducer: one user message, one assistant tool call, and one tool result produced the expected counts and token/cost totals.
- The reducer was checked against Pi core's `AgentSession.getSessionStats()` source map. It follows active-branch entries rather than core `/session`'s all-entry scope, as explicitly required here.

## Transcript provenance labels (2026-10-09)

Human-authored prompts now render as **`scottg`** through the installed Zentui `labeled` style. The previous hardcoded `User` label was changed in `/home/scottg/.pi/agent/npm/node_modules/pi-zentui/extensions/zentui/user-message-styles.ts`; the style cache key was versioned to invalidate existing rendered components.

Parent-authored instructions use a different, durable message type: `pi-herdr-parent-instruction`. The installed `pi-herdr-agents` package now sends its parent-to-agent task-model, `/iterate`, `/subagent`, `/plan`, and persistent inbox follow-up messages through `pi.sendMessage()` as custom messages rather than `pi.sendUserMessage()`. Its renderer displays the exact label **`Parent`**. Autonomous child kickoff input is marked by `PI_PARENT_INSTRUCTION=1`; the child `subagent-done.ts` intercepts the first non-empty external input and delivers it through the same custom message type. This preserves provenance before rendering without guessing from ordinary user-message text. Human prompts remain normal Pi user messages and are not relabeled.

Direct package edits:

- `/home/scottg/.pi/agent/npm/node_modules/pi-zentui/extensions/zentui/user-message-styles.ts`
- `/home/scottg/.pi/agent/npm/node_modules/pi-herdr-agents/pi-extension/subagents/parent-message.ts` (new)
- `/home/scottg/.pi/agent/npm/node_modules/pi-herdr-agents/pi-extension/subagents/index.ts`
- `/home/scottg/.pi/agent/npm/node_modules/pi-herdr-agents/pi-extension/subagents/subagent-done.ts`
- `/home/scottg/.pi/agent/npm/node_modules/pi-herdr-agents/pi-extension/subagents/launch.ts`

These are installed package files, not repository-managed source. A `pi update`, package reinstall, or upgrade may overwrite them; retain the diff or upstream the changes before upgrading. Reloading Pi is required after package edits. Existing child panes are not retroactively relabeled; newly rendered/restarted sessions use the new labels.

## Decisions still needed

1. **Accounting follow-up:** the current reducer mirrors Pi's accounting, but `/session` uses all entries while `/usage` intentionally uses the active branch. This difference should remain visible in any future dashboard label.
2. **Interaction follow-up:** Phase 1 uses a native widget rather than a keyboard-navigable custom table. A richer table can be added without changing the DTO.
3. **Buzz authority:** dashboard links may initially be read-only. Any click that resumes, switches, or sends to a Pi session needs an explicit transport and authorization decision.

## Next action

Restart Pi or run `/reload` before relying on the changed message style or newly discovered global command. Then run `/usage`, `/usage json`, and `/usage clear` in a normal TUI session. Compare a fixture's totals with `/session`, accounting for the deliberate active-branch versus all-entry scope difference. Buzz/dashboard integration remains out of scope.

## Inspected references

- [Pi extensions documentation](https://github.com/earendil-works/pi-mono/blob/main/packages/coding-agent/docs/extensions.md)
- [Pi session format](https://github.com/earendil-works/pi-mono/blob/main/packages/coding-agent/docs/session-format.md)
- [Pi usage documentation](https://github.com/earendil-works/pi-mono/blob/main/packages/coding-agent/docs/usage.md)
- [Zentui README](https://github.com/lmilojevicc/pi-zentui)
- [Zentui configuration reference](https://github.com/lmilojevicc/pi-zentui/blob/main/docs/configuration.md)
- `/home/scottg/.pi/agent/zentui.json`
- `project/docs/dao-architecture.md`
- `project/sessions/2026-10.md`

## Herdr delegated-task labels (2026-10-09)

The installed `pi-herdr-agents` extension now names extension-owned grouped tabs `Tasks` (and `Tasks 2`, etc.) and reports each delegated pane's existing task name to Herdr's display-only metadata API, so the UI can show that name instead of the generic `pi` detector label. Grouping, pane ownership, lifecycle cleanup, and task names are unchanged. This was applied directly to `/home/scottg/.pi/agent/npm/node_modules/pi-herdr-agents`; it is not a package-managed override and may need reapplication after a package upgrade. Reload Pi after the package source changes; existing tabs are intentionally not renamed.

References: [pi-herdr-agents](https://github.com/giuseppecrj/pi-herdr-agents), [Herdr](https://herdr.dev/).
