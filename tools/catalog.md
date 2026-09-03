# Tools catalog

This is a reference registry for candidates discovered during DAO V1 planning. Entries are not installed, connected, approved for use, forked, or starred unless a later decision says so.

## Candidate capabilities

| Candidate | Kind | Intended use | Status | Source |
| --- | --- | --- | --- | --- |
| GitHub MCP Server | MCP | Repository context, issues, pull requests, Actions, and code review | candidate; begin read-only if evaluated | [GitHub](https://github.com/github/github-mcp-server) |
| Exa | Research MCP | Web, code, and research discovery | candidate | [Exa](https://exa.ai/mcp) |
| Firecrawl | Research MCP / API | Search, crawl, scrape, and structured web extraction | candidate | [Firecrawl](https://docs.firecrawl.dev/introduction) |
| Crawl4AI | Self-hosted crawler | Future LLM-friendly crawling and extraction | noted; evaluate only when self-hosted scraping is needed | [Crawl4AI](https://docs.crawl4ai.com/) |
| n8n | MCP-backed tool/actor platform | Future Outlook email/calendar tools and repeatable actors | deferred until use cases, access, and ownership are defined | [n8n](https://docs.n8n.io/) |
| DataForSEO MCP | MCP | Future SEO data and analysis | deferred until a concrete SEO use case exists | [DataForSEO](https://dataforseo.com/model-context-protocol) |
| Google Search Console API | API | Search performance data for owned sites | deferred until an owned site needs measurement | [Google](https://developers.google.com/webmaster-tools/v1/searchanalytics) |
| Apollo | API / future integration | Client discovery, enrichment, and outreach workflow data | deferred until Research/Ops defines permission and outreach rules | [Apollo](https://docs.apollo.io/reference/apollo-api) |
| SkillOpt | Skill optimization research project | Later evaluation of stable skills using scored trajectories | noted; not a current DAO tool | [Microsoft](https://github.com/microsoft/SkillOpt) |

## Evaluation rules

1. Define the use case and owning team first.
2. Prefer an official MCP, API, or upstream repository over an unofficial proxy.
3. Start with the minimum read-only capability where possible.
4. Record required permissions, data handling, cost/licensing, limitations, and rollback before adoption.
5. Keep upstream code out of this repository unless a deliberate fork or vendoring decision is made.
