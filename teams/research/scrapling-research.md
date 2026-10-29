# Scrapling research workflow

**Owner:** Research team
**Capability:** [`skills/scrapling-research.md`](../../skills/scrapling-research.md)
**Upstream:** [Scrapling](https://github.com/D4Vinci/Scrapling) · [official documentation](https://scrapling.readthedocs.io/)

## Before research

The Research lead records the question, finite URL/domain scope, requested fields, stopping condition, and maximum requests. Prefer an official API, feed, or export when it answers the question. Confirm that the target is public and that collection and intended reuse are compatible with its terms, robots guidance, copyright/license terms, and applicable law.

Scrapling remains a candidate capability. No team member should install it, add credentials, connect it to Studio, or run a recurring/production crawler under this document. Any runtime evaluation requires separate approval, an isolated environment, a pinned version, dependency/license review, and a documented rollback.

## During research

Use one request at a time and a conservative delay of at least two seconds when the site gives no rate guidance. Do not use authentication, cookies, CAPTCHA solving, access-control bypass, proxy rotation, stealth behavior, or browser automation by default. Stop on `403`, `429`, repeated failures, an opt-out, or the approved page/request limit. Collect only the requested fields and redact incidental personal data and identifiers.

## Handoff contract

The research note must include:

- question, owner, UTC date, scope, request/page limits, and stopping condition;
- each material fact with canonical URL, page title, UTC retrieval time, extraction method/selector, and a short excerpt or content fingerprint;
- excluded or failed URLs and any rate-limit, robots, terms, licensing, or dynamic-content limitations;
- a clear separation between fetched evidence and researcher inference;
- confirmation that the work was limited to permitted public web content.

Raw responses belong only in an approved access-controlled location and are not committed to this repository. Generated crawler state and secrets stay outside Git.

## Stop and escalate

Escalate to the Research lead for sensitive or authenticated content, personal-data collection, increased volume or concurrency, browser/proxy features, raw-page retention, or unclear terms/licensing. Escalate to the DAO Head for any integration, recurring job, production ingestion, or paid service. When the question is answered within scope, stop; do not expand collection for completeness.
