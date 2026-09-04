# Project architecture document template

Use this template as the default `project/docs/architecture.md` in every project. It records the technical structure needed to deliver the agreed requirements and design.

Complete only sections that apply. Mark a deliberately deferred item **TBD** and put unanswered decisions in **Open questions**. Do not treat template guidance as project facts.

## Architecture overview

Summarize the system boundary, major components, responsibilities, environments, external dependencies, and the rationale for the approach. Link diagrams where useful.

## Technical stack

Record approved frameworks, languages, packages, tools, hosting, build/runtime versions, and the reason for material choices.

## System diagrams

Link or embed diagrams for the application, services, data flows, integrations, and deployment topology at the level needed for implementation and operations.

## Site map or screen map

- **Site:** List pages, hierarchy, URLs or routes, navigation, and conversion paths.
- **App:** List screens, navigation structure, entry points, authenticated versus public areas, states, and platform-specific navigation.

## Data model

Describe entities, relationships, ownership, lifecycle, access rules, sources, retention, and sensitive-data constraints.

## APIs and integrations

List endpoints or contracts, request/response expectations, authentication, rate limits, failure behavior, webhooks, and third-party integration boundaries.

## Security and roles

Record authentication, authorization roles, permission boundaries, secrets handling, input and data protections, audit needs, and applicable compliance constraints.

## Operational considerations

Record environments, configuration, observability, backups where applicable, performance constraints, deployment approach, rollback concerns, and ownership.

## References

Link the requirements and design documents, source repositories, diagrams, provider documentation, and related plans.

## Open questions

List decisions still needed, their owner, impact, and the decision required before planning, building, or release.
