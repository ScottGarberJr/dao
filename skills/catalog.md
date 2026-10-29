# Skills catalog

This is a reference registry for capability candidates discovered during DAO V1 planning. Entries are not installed, connected, approved for use, forked, or starred unless a later decision says so; the Coolify MCP row records the explicitly connected local Deployer/Ops profiles.

## Candidate capabilities

| Candidate | Kind | Intended use | Status | Source |
| --- | --- | --- | --- | --- |
| GitHub MCP Server | MCP | Repository context, issues, pull requests, Actions, and code review | candidate; begin read-only if evaluated | [GitHub](https://github.com/github/github-mcp-server) |
| Exa | Research MCP | Web, code, and research discovery | candidate | [Exa](https://exa.ai/mcp) |
| Firecrawl | Research MCP / API | Search, crawl, scrape, and structured web extraction | candidate | [Firecrawl](https://docs.firecrawl.dev/introduction) |
| Scrapling | Research scraping framework / skill | Bounded extraction and evidence gathering from permitted public pages | documented candidate; not installed or approved | [Scrapling upstream](https://github.com/D4Vinci/Scrapling) · [docs](https://scrapling.readthedocs.io/) |
| Web Actor browser capability | Browser automation / role | Authorized interaction with allowlisted web UIs, using Playwright or attached Chrome CDP | role and SOP prepared; browser tool not connected | [Playwright](https://playwright.dev/) · [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/) |
| Crawl4AI | Self-hosted crawler | Future LLM-friendly crawling and extraction | noted; evaluate only when self-hosted scraping is needed | [Crawl4AI](https://docs.crawl4ai.com/) |
| n8n | MCP-backed tool/actor platform | Future Outlook email/calendar tools and repeatable actors | deferred until use cases, access, and ownership are defined | [n8n](https://docs.n8n.io/) |
| UI UX Pro Max | Design guidance skill | Category-fit visual direction and anti-default design decisions | adopted as DAO guidance; external engine not installed | [DAO skill](ui-ux-pro-max.md) · [video source](https://youtu.be/Ot582-E61ac?is=PZjFN6uvmOg3xAhC) |
| Shadcn MCP / component guidance | MCP and skill | Reusable functional UI components for compatible projects | candidate; use only when the project stack supports it | [Shadcn MCP](https://ui.shadcn.com/docs/mcp) |
| SwiftUI | Platform skill | Native Apple UI and platform conventions | adopted as conditional DAO guidance | [Apple SwiftUI](https://developer.apple.com/xcode/swiftui/) |
| Expo | Platform skill | Cross-platform React Native mobile UI | adopted as conditional DAO guidance | [Expo docs](https://docs.expo.dev/) |
| GSAP Guidance | Motion skill | Purposeful, performant web motion | adopted as DAO guidance; library remains project-dependent | [GSAP docs](https://gsap.com/docs/v3/) |
| Site Animations | Motion skill | Creation-time animation purpose, performance, and reduced-motion guiderails | adopted as DAO guidance; points to GSAP only when appropriate | [DAO skill](site-animations.md) |
| Mobile UI Principles | Design skill | Touch-first mobile hierarchy, reachability, states, and platform behavior | adopted as DAO guidance | [Material 3](https://m3.material.io/) · [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/) |
| Minimalist UI | Visual direction skill | Spacious, restrained, content-first UI | adopted as selectable DAO guidance | [video source](https://youtu.be/Ot582-E61ac?is=PZjFN6uvmOg3xAhC) |
| Industrial Brutalist UI | Visual direction skill | Raw, structural, high-contrast UI | adopted as selectable DAO guidance | [video source](https://youtu.be/Ot582-E61ac?is=PZjFN6uvmOg3xAhC) |
| Front-end UI/UX | Visual direction skill | Clean, practical web UI baseline | adopted as selectable DAO guidance | [video source](https://youtu.be/Ot582-E61ac?is=PZjFN6uvmOg3xAhC) |
| Premium/Luxury UI | Visual direction skill | Restrained premium visual direction | adopted as selectable DAO guidance | [video source](https://youtu.be/Ot582-E61ac?is=PZjFN6uvmOg3xAhC) |
| DataForSEO MCP | MCP | Future SEO data and analysis | deferred until a concrete SEO use case exists | [DataForSEO](https://dataforseo.com/model-context-protocol) |
| Google Search Console API | API | Search performance data for owned sites | deferred until an owned site needs measurement | [Google](https://developers.google.com/webmaster-tools/v1/searchanalytics) |
| Apollo | API / future integration | Client discovery, enrichment, and outreach workflow data | deferred until Research/Ops defines permission and outreach rules | [Apollo](https://docs.apollo.io/reference/apollo-api) |
| SkillOpt | Skill optimization research project | Later evaluation of stable skills using scored trajectories | noted; not a current DAO tool | [Microsoft](https://github.com/microsoft/SkillOpt) |
| Coolify built-in MCP server | MCP | Token-scoped Coolify infrastructure inspection and explicitly approved operations | connected to Pi WSL Deployer/Ops profiles; not available to Head by default | [Coolify MCP](https://coolify.io/docs/integrations/mcp) |

## Evaluation rules

1. Define the use case and owning team first.
2. Prefer an official MCP, API, or upstream repository over an unofficial proxy.
3. Start with the minimum read-only capability where possible.
4. Record required permissions, data handling, cost/licensing, limitations, and rollback before adoption.
5. Keep upstream code out of this repository unless a deliberate fork or vendoring decision is made.
