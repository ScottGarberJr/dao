---
name: web-actor
description: Use for bounded browser inspection or interaction on explicitly allowlisted web hosts when functional workflow evidence is needed beyond visual QA.
---

# Web Actor

## Purpose

Provide a safe, repeatable procedure for browser-based web-app inspection and approved interaction. This is a portable DAO skill, not an installed browser tool or access grant.

## Inputs

Before starting, obtain:

- objective, route/workflow, acceptance criteria, and stopping condition;
- exact allowlisted hostnames (including whether subdomains are allowed);
- environment and revision;
- read-only or explicitly approved mutating actions;
- test data classification, credential/session owner, and cleanup plan;
- approved evidence types and destination.

## Procedure

1. Write the scope tuple: `environment / hosts / route / actions / data / evidence`.
2. Use Playwright first, with a fresh isolated context, explicit timeouts, accessibility-oriented locators, and the smallest browser permissions. See [Playwright](https://playwright.dev/) and [Playwright MCP](https://playwright.dev/docs/getting-started-mcp). These are references; no tool is assumed to be installed or connected.
3. Confirm every navigation remains allowlisted. Stop on an unexpected redirect, new origin, download, permission request, login challenge, or sensitive-data exposure.
4. Before any state change, announce the exact control, target, input, and expected side effect. Require explicit approval unless the task brief already authorizes that exact mutation. Do not infer approval from a general request to “test the flow.”
5. Verify expected and observed state. Use only approved read-only API/network observations for server-side confirmation; UI appearance alone is not persistence proof.
6. Capture minimal sanitized evidence: route/state screenshots, accessibility snapshots, Playwright trace, console output, or a request/response pair as appropriate. Record browser/profile, viewport, environment, revision, and timestamp.
7. If Playwright cannot access the needed live browser state, request approval for a scoped CDP fallback such as [Chrome DevTools MCP](https://developer.chrome.com/docs/devtools/agents/get-started). Treat CDP profiles as capable of exposing authenticated content and do not use a personal or shared profile.
8. Stop at the objective or any stop condition. Clean temporary state and return the handoff below.

## Credentials and sessions

Use only task-provided test credentials via the approved secret/session mechanism. Never put passwords, cookies, tokens, headers, local storage, or session exports in source, prompts, screenshots, traces, or reports. Do not bypass MFA, CAPTCHA, access controls, or security warnings. Ask the owner to handle interactive challenges. End the session and report cleanup limitations.

## Boundaries

- No browser access is implied by this skill; do not claim a browser tool is available.
- Do not install packages or add integrations. Do not access Coolify or modify Studio unless the task explicitly allowlists the exact host, environment, target, and action; infrastructure mutations require exact user authorization, rollback, and evidence.
- Do not create accounts, publish, send, purchase, change billing/permissions, deploy, or delete data without exact user authorization and rollback/cleanup.
- Do not navigate outside the allowlist, even if a link appears part of the workflow.
- Do not upload or publicly host sensitive evidence.

## Handoff

Return:

```text
Objective:
Allowlisted hosts:
Environment/revision:
Route and workflow:
Tool/profile/viewport:
Data and session class:
Actions (read-only / approved mutations):
Expected vs observed:
Evidence (sanitized paths/links and what each proves):
Cleanup:
Caveats or escalation:
```

## Verification

A run is complete only when the reported result is tied to the declared environment, every host stayed allowlisted, evidence is sanitized and reproducible, mutations match approval, and cleanup status is known.

## Escalation

Stop and ask the task owner for a decision when scope, host, environment, session, mutation approval, rollback, evidence handling, or tool capability is unclear. Escalate immediately for a secret exposure, unexpected mutation, unallowlisted navigation, browser-control loss, or request involving Coolify or Studio.

## Future browser-tool setup checklist

This checklist prepares a later owner; it does not enable browser access:

- [ ] Select an approved Playwright-first implementation and pin its version outside this DAO change.
- [ ] For immediate CDP use, provide the DAO helper at `scripts/cdp.mjs` and start Chrome with remote debugging; the helper is dependency-free but cannot connect until Chrome is running.
- [ ] Create a dedicated, disposable browser profile/context; prohibit personal/shared profiles.
- [ ] Configure hostname allowlisting, navigation/download policy, network and file permissions, and artifact redaction.
- [ ] Define the secret/session injection method, MFA owner, expiry, and teardown procedure.
- [ ] Define mutation approval UX/logging and an auditable stop action.
- [ ] Provide sanitized artifact storage with retention and access rules.
- [ ] Test read-only navigation and an intentionally blocked unallowlisted redirect before any mutation.
- [ ] Evaluate CDP fallback separately with an isolated profile and authenticated-content warning.
- [ ] Record owner, runtime, model/tool permissions, rollback, and support contact in the adopting project's documents.
