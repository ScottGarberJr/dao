# Browser preview

## Purpose

Render a local prototype or application, inspect it visually, and preserve review evidence when visual work matters.

## Portable workflow

1. Start the project's documented local preview or test environment.
2. Open it with browser automation when the active harness provides it; otherwise provide the local or forwarded URL for human review.
3. Inspect the target flows, responsive sizes, loading/error states, and accessibility behavior appropriate to the change.
4. Capture screenshots or other concise evidence when it materially supports review.
5. Record material findings in project documentation or the monthly session log.

## Boundaries

This skill describes the capability, not a required implementation. A harness may provide a browser, Playwright, an MCP, a local browser, or no automation. Do not expose a local preview publicly or access authenticated production data without explicit authorization.
