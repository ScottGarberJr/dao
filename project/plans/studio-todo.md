# Studio delivery TODO

Updated: 2026-10-15

## Priority 1 — Hermes transition

- [ ] Obtain and review the Hermes repository/source, license, runtime, and installation instructions.
- [ ] Install Hermes in `~/hermes`; keep source outside `/home/scottg/dev`.
- [ ] Define Hermes project registry: project ID, repository, Herdr workspace ID, Lead identity/session, and worktree policy.
- [ ] Define Hermes → Herdr task protocol: task ID, bounded brief, model/tools, approval boundary, lifecycle, cancellation, retry, and handoff schema.
- [ ] Define Hermes identity/state reporting without impersonating `herdr:pi`.
- [ ] Evaluate the existing Pi `/usage` DTO and native widget as the basis for a Hermes dashboard; decide transport, authentication, retention, and control authority.
- [ ] Reload Pi/Herdr after the retired-model preference cleanup.

## Priority 2 — agent capability setup

- [x] Integrate the DAO Scrapling research capability and update Research role guidance; documentation only, not installed.
- [x] Integrate the dedicated Web Actor role and browser-tool setup checklist.
- [ ] Start Chrome remote debugging and attach a dedicated logged-in browser session before operating Coolify UI.
- [x] Add dependency-free CDP helper at `dao/scripts/cdp.mjs`; it is validated syntactically but cannot connect until Chrome remote debugging is running.
- [ ] Prefer Playwright for repeatable Web Actor workflows; use CDP for immediate attached-session work.

## Priority 3 — current state

- [ ] Record the new Hermes repository and installation decision.
- [ ] Update DAO role/session documentation as Hermes implementation decisions are made.

## Current blockers / facts

- Hermes source/repository is not yet present or identified.
- Hermes is not installed; the sister pane at `~` is ready for setup.
- Herdr task preferences no longer reference retired `gpt-5.4-mini`; reload is required before new Pi sessions use the updated routing.
- Coolify MCP remains configured in the Deployer/Ops profiles and exposes lifecycle writes, but not domain/router/certificate configuration mutations.
