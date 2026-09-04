# Project design document template

Use this template as the default `project/docs/design.md` in every project. It records the design direction that planning and building must follow, alongside links to the relevant Figma file and frames.

For a larger engagement or when a client requests it, split individual sections into `project/docs/design/`. Keep `project/docs/design.md` as the concise index, decision summary, and link map to those files; it remains the entry point for agents.

Complete only sections that apply. Mark a deliberately deferred item **TBD** and put unanswered decisions in **Open questions**. Do not treat template guidance as project facts.

## Core idea, objective, and themes

Describe the product or site’s core idea, the user and business objective, and the intended visual, editorial, and interaction themes. State the primary outcome the design must support.

## Features

### Version 1

List the features and boundaries required for the current version. Link each material feature to its plan or acceptance criteria when available.

### Immediates

List the next agreed work after Version 1 that may affect current design decisions, but is not part of the current build.

### Additionals

List longer-term, optional, or exploratory ideas separately so they do not silently expand Version 1.

## UI

### Branding

Record logo use, voice, imagery direction, iconography, component/system constraints, and any client brand requirements.

### Colors

Record approved palette, semantic color roles, states, contrast requirements, and Figma variable or style references.

### Typography

Record font choices, hierarchy, scale, responsive behavior, and Figma style references.

### Site map or screen map

- **Site:** List pages, hierarchy, URLs or routes, primary navigation, and key conversion paths.
- **App:** List screens, navigation structure, entry points, authenticated versus public areas, states, and platform-specific navigation.

## UX

### User personas

Define the relevant users, their goals, needs, contexts, accessibility considerations, and any meaningful permissions.

### User flows

Map the key tasks from entry through success, failure, empty, loading, and edge states. Link to Figma flow diagrams or prototype frames.

## Technical details

Record the approved platform, frameworks, packages, tools, integrations, architecture overview, responsive or platform constraints, performance considerations, and security roles/permissions.

- **Site:** Include rendering/hosting assumptions, CMS or content model, analytics, forms, SEO/structured-data needs, and browser support where applicable.
- **App:** Include supported platforms and versions, navigation approach, device permissions, offline/push/deep-link needs, app-store constraints, and backend/API dependencies where applicable.

## Data model

Describe the data entities, relationships, ownership, lifecycle, access rules, sources, and sensitive-data constraints that shape the experience. Link to a fuller technical model if one exists.

## Strategy

### Competitors

List competitor or comparable-product findings that influenced the design. Capture the lesson and reference; do not copy their implementation or brand.

### Content

Define content types, ownership, required copy, media needs, editorial workflow, and empty or error-state content.

### SEO

For sites, define search intent, target topics, information architecture, metadata, structured data, technical SEO, and measurement. Mark this section not applicable for a native app unless there is web-discoverable content.

### Marketing

Record audiences, acquisition paths, campaign or landing-page needs, analytics events, and conversion measurement.

### Monetization

Record pricing, subscriptions, commerce, entitlements, upgrade paths, and related trust or policy requirements.

### Policy

Record privacy, terms, consent, accessibility, platform, client, or industry requirements affecting the experience. Obtain legal review when one is required; this document is not legal advice.

## References

Link the Figma file, selected frames, discovery/reference pages, sketches, brand assets, technical documents, approved external references, and related plans.

## Open questions

List decisions still needed, their owner, impact, and the decision required before planning, building, or release.
