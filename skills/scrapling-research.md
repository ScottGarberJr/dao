---
name: scrapling-research
description: Use for bounded extraction and evidence gathering from permitted public web pages when ordinary web research is insufficient; never use it for private, authenticated, or high-volume collection.
---

# Scrapling research

## Purpose

Provide a cautious, repeatable way for the Research team to inspect a small set of public web pages with [Scrapling](https://github.com/D4Vinci/Scrapling). This is a documentation-level capability: it is not an installation, integration, crawler service, or authorization to collect data.

## Use when

- A research task names public pages whose content must be compared, extracted, or checked reproducibly.
- Ordinary browser reading or an approved search source cannot provide the needed structured evidence.
- The request has a finite URL/page scope, a clear question, and an owning Research lead.

Typical uses include extracting public article metadata, comparing public documentation pages, and collecting a small, cited sample for topic research. Prefer official APIs, feeds, or site-provided exports when they are available and sufficient.

## Inputs

- A written question, finite URL list or domain/page limit, fields to extract, and stopping condition.
- Research-team approval for the scope and a check of the target site's terms, robots guidance, and applicable law.
- An isolated runtime only if adoption is separately approved. Consult the [official Scrapling documentation](https://scrapling.readthedocs.io/) for supported installation and runtime details; do not install it as part of this skill.

## Procedure

1. Confirm the use case, owner, public URLs, permitted fields, maximum pages/requests, and stopping condition. Reject credentials, session cookies, paywalls, login walls, private endpoints, and requests to evade access controls.
2. Prefer a static HTTP fetch and a narrow selector. Do not enable browser automation, proxy rotation, stealth behavior, or JavaScript execution unless the Lead explicitly approves the additional scope and its risks.
3. Apply the site's published rate guidance. If none is available, use a conservative delay of at least 2 seconds between requests, one request at a time, no retries beyond two, and stop on `403`, `429`, repeated errors, or an explicit opt-out. Never parallelize by default.
4. Extract only the requested fields. Minimize personal data; redact incidental identifiers, credentials, tokens, and contact details from notes and outputs.
5. Preserve evidence for every material claim: canonical URL, page title, retrieval timestamp in UTC, extraction method/selector, and a short quoted excerpt or content fingerprint sufficient for review. Keep raw responses only in an approved, access-controlled location; do not commit crawled data or generated runtime state.
6. Stop at the approved limit or sooner when the question is answered. Report blocked pages, missing fields, dynamic-content limitations, robots/terms concerns, and any deviations rather than silently widening the scope.

## Outputs

Return a concise research note containing:

- question, owner, date, scope, and limits;
- a table of extracted facts with source URLs and UTC retrieval times;
- evidence excerpts or fingerprints and the selector/method used;
- failed or excluded URLs, rate-limit responses, and interpretation caveats;
- a statement that collection was limited to permitted public web content.

Link official sources directly. Do not represent scraped content as independently verified, current, or licensed for redistribution merely because it was publicly reachable.

## Boundaries

- Public web only by default; no authentication, private data, account areas, paywalls, CAPTCHA solving, access-control bypass, or proxy/stealth evasion.
- No unrestricted crawling, recursive site maps, bulk harvesting, lead enrichment, unsolicited outreach, or production ingestion.
- No secrets, cookies, API keys, or personal datasets in the repository, prompts, logs, or committed artifacts.
- Do not use Scrapling where the site's terms, robots directives, copyright/license terms, or applicable law prohibit the proposed collection or reuse. Public visibility is not a license to republish.
- Do not use this skill for security testing, reliability/load testing, or any action that changes a remote site.
- Do not install packages, run a crawler, change runtime configuration, or edit Studio while authoring or reviewing this documentation.

## Verification

The Research lead checks that the output has a finite scope, source and UTC timestamp for each claim, reproducible method details, explicit limits, and no secrets or unnecessary personal data. A reviewer should be able to distinguish fetched evidence from inference and identify every source.

## Escalation

Stop and ask the Research lead before handling authenticated or sensitive content, increasing rate/volume, enabling browser or proxy features, collecting personal data, retaining raw pages, or proceeding where terms, robots guidance, licensing, or jurisdiction is unclear. Escalate to the DAO Head for any proposed integration, recurring job, production use, or paid service.

## Adoption and licensing note

This document does not approve Scrapling or assert that it is installed. Before any runtime evaluation, pin and review the current [upstream license and repository notices](https://github.com/D4Vinci/Scrapling), dependency licenses, security posture, and data-retention plan in an isolated environment. Record approval and rollback separately from this skill.
