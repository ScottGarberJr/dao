# Visual evidence

- Status: draft — pending user review
- Owner: DevTeam Tester

Use this skill when a change affects layout, styling, responsive behavior, interaction states, loading states, empty states, or error states.

## Default requirement

A visual PR should show the same state before and after the change. Capture the before state before applying a bug fix when practical. Use the smallest artifact that makes the change clear.

| Change risk | Evidence |
| --- | --- |
| Small styling or layout change | Before/after screenshots at the affected viewport |
| Responsive or interaction change | Before/after screenshots at each affected viewport or state |
| Complex multi-step flow | Screenshots plus a repeatable browser trace or short recording |
| Non-visual change | Test output, measured values, logs, or an API response pair instead |

## Procedure

1. Identify the exact route, component, state, viewport, and test data.
2. Confirm the preview is running the intended revision. Do not capture authenticated or personal data without approval.
3. Capture the before state, if one exists, before changing the implementation.
4. Apply the change and run the relevant checks.
5. Capture the matching after state with the same route, state, viewport, and data.
6. Inspect both images for clipping, missing states, loading problems, accessibility issues, and accidental unrelated changes.
7. Attach the pair to the PR and name the environment, revision, viewport, and any caveat.

## PR format

```markdown
| Before | After |
| --- | --- |
| ![Before](...) | ![After](...) |
```

## Upload and privacy boundary

Prefer repository-approved or private artifact storage. Do not upload client data, secrets, tokens, personal data, or protected application screens to a public image host. The [Vercel before-and-after CLI](https://github.com/vercel-labs/before-and-after) is an optional capture and formatting tool, not a DAO requirement. Review its upload destination and license before using it in a project.

For local or headless work, use the project's browser tooling or [Playwright](https://playwright.dev/). Do not expose a local preview publicly just to produce screenshots.

## Output checklist

- [ ] Same route, state, viewport, and data are used for comparison.
- [ ] The tested revision and environment are recorded.
- [ ] Before and after images are readable and represent the claimed change.
- [ ] Sensitive data is absent or approved for sharing.
- [ ] The PR includes a short note about what the images prove.
