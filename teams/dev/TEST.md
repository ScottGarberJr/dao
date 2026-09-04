# TEST

- Team: DevTeam
- Status: draft — pending user review

## Objective

Verify approved work with evidence proportionate to its risk before the user reviews acceptance criteria and decides whether to commit.

## Inputs

- Approved acceptance criteria, implementation plan, and design reference.
- A testable environment and any explicitly approved test accounts or fixtures.

## Workflow

1. Start with fast checks: formatting, linting, type checking, and focused unit or component tests.
2. Test API contracts directly: happy path, validation and error paths, authorization boundaries, pagination or filtering, and important side effects. Use API calls to seed state for UI tests when appropriate.
3. Test critical user journeys end to end in the UI: first-use flow, primary conversion or task flow, authentication, and regression cases for resolved defects.
4. Add visual, responsive, accessibility, and interaction review against the Figma reference. Automated accessibility checks complement—rather than replace—keyboard, focus-order, screen-reader, and manual UX review.
5. Capture failure evidence, fix the defect, add a regression test where useful, and rerun the relevant layers before handoff.

## Tools, skills, and references

All entries below are candidates only. None is installed, connected, or approved for use.

- [Playwright MCP](https://playwright.dev/docs/getting-started-mcp) — browser automation through structured accessibility snapshots. Evaluate its browser-profile, file-access, and network settings before use.
- [Chrome DevTools MCP](https://developer.chrome.com/docs/devtools/agents/get-started) — inspect and debug a live Chrome browser. It can access authenticated browser content, so use only a deliberately scoped browser profile.
- [Playwright Test](https://playwright.dev/) — recommended web default for cross-browser end-to-end testing, API testing, traces, reports, and CI execution. Use MCP for exploratory investigation; commit repeatable tests as code.
- [Axe with Playwright](https://github.com/microsoft/axe-pipelines-samples/tree/main/typescript-playwright-sample) — candidate automated accessibility layer for browser tests.
- [Expo Jest and React Native Testing Library](https://docs.expo.dev/develop/unit-testing/) — candidate default for React Native unit and component tests.
- [Maestro in EAS Workflows](https://docs.expo.dev/eas/workflows/examples/e2e-tests/) — candidate for React Native end-to-end flows when the app uses Expo/EAS.

## Scope, permissions, and constraints

Never run destructive tests, production tests, or tests using personal data without explicit authorization and a defined rollback path.

## Outputs and evidence

## Reporting and escalation

## Open questions
