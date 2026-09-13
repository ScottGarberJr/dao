# DAO Project Stack

> Living standard for planning, designing, building, launching, and operating ScottG application and content projects.
>
> Last updated: 2026-09-10

## Purpose

This document defines the preferred stack, reusable modules, architecture presets, and delivery process for future projects. It is a default—not a requirement to install every tool in every application.

The goals are to:

- Make important architecture decisions during planning.
- Reuse proven repositories, packages, prompts, and design assets.
- Keep small applications small.
- Support an early web release followed by iOS and possibly Android.
- Preserve the ability to swap vendors behind internal interfaces.
- Improve the process after every launch until a new app or major update per quarter is sustainable.

## Decision Language

- **Default:** Use unless project requirements provide a reason not to.
- **Preset:** A supported starting architecture selected during planning.
- **Optional:** Add only when the product needs it.
- **Pilot:** Promising default candidate that must be proven in a real project before becoming permanent.
- **Later:** Intentionally deferred until there is enough usage or business value.

## Architecture Presets

Select one preset in the planning phase. Start with the least complex preset that satisfies the product.

| Preset | Use when | Data and backend | Typical examples |
| --- | --- | --- | --- |
| **1. Expo Local** | The app can work offline and does not initially require accounts, synchronization, shared data, or server-side AI | Local Expo storage/database; no application API | Timers, calculators, personal utilities |
| **2. Expo + Supabase** | The app needs accounts, synchronization, relational data, realtime features, or simple cloud storage without a custom API | Supabase Auth/Postgres/Storage as needed | Collaborative or synced consumer apps |
| **3. Expo + Hono + VPS Ecosystem** | The app needs custom business logic, AI/tool orchestration, shared services, custom auth, or full control of its data | Hono API, Better Auth, PostgreSQL and supporting services deployed through Coolify | AI-assisted apps, feature voting, reusable platform services |

An app can migrate upward when validated demand requires it, but speculative infrastructure should not be added at the beginning.

## Core Application Stack

| Concern | Default | Notes |
| --- | --- | --- |
| Mobile and universal app | **Expo + React Native + TypeScript** | iOS first; Android based on product demand; Expo Web when it provides a useful early product |
| Routing | **Expo Router** | File-based routing across supported Expo targets |
| Styling | **NativeWind** | Pin a stable production version; use semantic tokens and reusable primitives |
| Interactive motion | **React Native Reanimated** | Use for gesture-, state-, navigation-, and layout-driven motion |
| Illustrative motion | **Lottie/dotLottie** (optional) | Use for onboarding, empty states, loading, and celebrations—not primary navigation or gestures |
| Lightweight API | **Hono + TypeScript** | Default for consumer APIs, auth services, webhooks, AI tool calls, and small backends |
| Database | **PostgreSQL** | Hosted on the VPS for custom-backend projects; Supabase Postgres for the Supabase preset |
| Deployment | **Coolify on the Hostinger VPS** | APIs, databases, CMSs, workers, and static sites as appropriate |
| Product analytics | **PostHog** | Web and mobile product analytics, funnels, flags, and experiments |
| Monetization | **Superwall pilot** | Standalone subscription infrastructure and paywall system; Apple, Google, and Stripe still process payments |

### When Hono Is Not the Best Choice

- Use **FastAPI** when the backend is substantially Python-centric, especially for Python-only AI, data science, or scientific libraries.
- Use **.NET Minimal API** when Microsoft enterprise integration, existing .NET assets, or organizational requirements outweigh stack uniformity.
- Do not move a suitable existing API merely for consistency.

## Frontend and Design System

### Runtime Frontend

NativeWind is the default Expo styling system because it provides a consistent vocabulary for developers and coding agents. It does not replace a design system.

Every application should define semantic tokens for:

- Color roles such as `primary`, `surface`, `muted`, `border`, `success`, and `danger`.
- Typography roles and accessible line heights.
- Spacing, radii, shadows, and responsive breakpoints.
- Light and dark themes when the product requires both.
- Motion duration and easing roles.

Reusable primitives should include components such as:

- `Screen`
- `AppText`
- `AppButton`
- `AppInput`
- `AppCard`
- `AppDialog`
- `AppAnimation`

Avoid arbitrary colors, spacing, and one-off UI patterns scattered through generated screens.

### Motion Responsibilities

| Tool | Responsibility | Default treatment |
| --- | --- | --- |
| React Native Reanimated | Interactive, gesture-driven, state-driven, and layout motion | Configure in the Expo base when the app is interactive |
| Lottie/dotLottie | Pre-authored vector animation and branded illustration | Optional package and reusable wrapper |

All motion must respect reduced-motion preferences. Lottie assets should be optimized, limited, and lazy-loaded or downloaded when appropriate; do not bundle a large animation library into every app.

### Discovery and Design Tools

These tools improve discovery and implementation but are not production runtime dependencies:

- **UI UX Pro Max**
- **Anthropic Frontend Design skill**
- **Adapted GPT-6 site prompts**
- **Hyperframes**, introduced early in exploration rather than near implementation
- **Mintlify** and **Savee** as discovery and visual-reference sources
- **building-native-ui**
- **minimalist-ui**
- Figma and design agents for early UI/UX work

Design outputs should be reused for the early web application, landing page, App Store materials, and social posts. Shared platform-neutral design tokens should generate or feed both NativeWind configuration and Nuxt CSS variables. Share tokens and assets across Nuxt and Expo; do not force inappropriate sharing of framework-specific UI components.

## Web and Content Strategy

### App Landing Pages and Client Sites

**Instatic + Nuxt** is the default direction for:

- Client marketing sites.
- App landing pages.
- Simple homepages with animations.
- Small article collections.
- Early signup and purchase funnels.
- Public feature-roadmap displays.

Landing pages may call the shared Hono/Better Auth API and link into the Expo Web application. Authenticated functionality should remain a small application island or widget rather than forcing the whole marketing site to become a dynamic application.

Use a standardized starter repository for future Instatic landing pages. Each new project begins from the starter, then Codex adapts its tokens, content model, sections, components, animations, metadata, and integrations.

### Strapi

Use **Strapi** for personal, content-heavy, or multi-site publishing ecosystems that benefit from:

- Centralized content management.
- Structured content and relationships.
- Multiple authors, roles, or sites.
- API delivery to several frontends.
- Editorial workflows beyond a simple Git-backed site.

Do not introduce Strapi into a simple landing page solely because it might contain a few articles.

### SEO

SEO implementation and tooling will be revisited later. Current sites should still use sound fundamentals: semantic HTML, metadata, canonical URLs, sitemaps, structured content, accessible navigation, and good performance.

## Authentication

### Default Custom-Backend Approach

Build a reusable, modular, open-source authentication service around:

- **Better Auth**
- **Hono**
- **PostgreSQL**
- Google sign-in
- Sign in with Apple
- Email OTP/passwordless sign-in
- Persistent sessions with secure refresh/session handling

Email OTP is the login mechanism, not a requirement to authenticate on every visit. After successful verification, users remain signed in until the session expires, is revoked, or they sign out.

The auth service should live in its own repository and expose documented integration paths for:

- Expo iOS/Android
- Expo Web
- Nuxt/Instatic landing pages
- Hono APIs

### Supabase Preset

When an app selects the Expo + Supabase preset, Supabase Auth remains a valid simpler choice. Do not add the custom Better Auth service when Supabase already satisfies the requirements unless cross-project identity is an explicit requirement.

### Canonical Identity

One application user ID must be used consistently across:

- Better Auth or Supabase Auth
- Expo and web clients
- Hono API records
- Superwall
- Stripe customer metadata/mapping
- PostHog `distinct_id`

Anonymous analytics can begin before login, but the anonymous identity must be merged or aliased correctly after authentication.

## Data and Object Storage

- Store relational application data in PostgreSQL.
- Do not store normal image/video blobs directly in PostgreSQL.
- Use S3-compatible object storage for images, videos, documents, and other large files.
- Coolify displaying “S3” means an S3-compatible storage service can be deployed or connected; it does not turn PostgreSQL into blob storage.
- A self-hosted S3-compatible service adds backup, replication, security, availability, and bandwidth responsibilities.
- Supabase Storage remains appropriate for projects already using Supabase.
- Cloudflare R2 is a strong managed candidate when a project needs durable object storage and CDN delivery without operating storage on the VPS.

Choose storage during planning based on privacy, transformations, expected traffic, backup strategy, and operational tolerance. Image transformation is an optional media-pipeline requirement, not something every mobile app needs.

## Monetization and Entitlements

### Default Direction

Pilot **Superwall as the standalone subscription platform** for the first monetized Expo application. Do not install RevenueCat and Superwall together by default.

Superwall is responsible for:

- Paywall presentation and remote configuration.
- Offers, targeting, localization, and paywall experiments.
- Receipt validation and subscription lifecycle normalization.
- Entitlements and current subscription status.
- Restore, renewal, cancellation, expiration, refund, and billing-state handling.
- Subscription webhooks and monetization analytics.

Superwall does **not** replace the payment processors:

| Purchase surface | Payment processor |
| --- | --- |
| iOS application | Apple App Store / StoreKit |
| Android application | Google Play Billing |
| Web and landing-page checkout | Stripe |

Superwall sits around these processors and provides one monetization and entitlement layer. Platform and payment-processing fees still apply. Superwall pricing is separate and should be rechecked before each launch.

### Cross-Platform Purchase Flow

A user should be able to:

1. Discover the product on the Instatic/Nuxt landing page.
2. Create an account through the shared auth service.
3. Purchase on the web through Stripe where permitted and appropriate.
4. Install the iOS or Android application.
5. Sign in with the same account.
6. Receive the corresponding Superwall entitlement.

Native digital purchases should use the applicable app-store purchase system unless current policies and the user's storefront permit an external route. Recheck Apple and Google policies at launch rather than encoding policy assumptions into the boilerplate.

### Local Subscription Projection

Superwall remains the subscription source of truth. The Hono API receives idempotent Superwall webhooks and maintains a local PostgreSQL projection for application queries, authorization support, reporting, and recovery.

The webhook implementation should:

- Verify authenticity.
- Deduplicate using the provider event ID.
- Return promptly and process durable work asynchronously when needed.
- Store enough raw event information for troubleshooting and reconciliation.
- Handle renewals, cancellations, expirations, refunds, billing issues, product changes, and restores.

### RevenueCat

RevenueCat remains a supported alternative when its maturity, existing integration, or broader platform coverage is materially valuable. It should be selected instead of Superwall for that application—not automatically installed underneath it.

## Product Analytics and Experimentation

Use **PostHog across the landing page, Expo Web, native Expo application, and Hono API** for a single product view.

### Core PostHog Capabilities

- Product events and funnels
- Activation and retention analysis
- Web analytics
- Feature flags and mobile kill switches
- Product experiments
- User cohorts
- Surveys when useful
- Server-side events
- AI observability for applications with meaningful AI/tool workflows

### Optional Capabilities

- Session replay is off by default and enabled only after privacy, masking, performance, network, and consent requirements are reviewed.
- Native crash/error capture can begin in PostHog, but dedicated error tooling can be added if the app's reliability needs outgrow it.
- Autocapture should not substitute for a deliberate, typed event taxonomy.

### Experiment Ownership

- **Superwall owns:** paywall, offer, pricing, trial, and monetization-flow experiments.
- **PostHog owns:** onboarding, activation, product feature, UX, and retention experiments.

Do not run competing experiments over the same decision in both systems.

### Initial Event Vocabulary

Define typed shared events in a reusable analytics package. A starting vocabulary includes:

- `landing_viewed`
- `signup_started`
- `signup_completed`
- `onboarding_started`
- `onboarding_completed`
- `core_action_completed`
- `feature_used`
- `feature_requested`
- `feature_voted`
- `paywall_viewed`
- `checkout_started`
- `trial_started`
- `subscription_started`
- `subscription_renewed`
- `subscription_cancelled`

Authoritative revenue lifecycle events should come from Superwall/server integrations rather than being duplicated by client events.

## Reusable Feature Voting Module

Build feature voting as a reusable Hono module and embeddable frontend package.

Initial behavior:

- Features and vote totals are publicly readable.
- Authentication is required to vote or discuss.
- Vote allowance is configurable; initial candidate is three votes per user per month.
- The API enforces allowances transactionally; the client never decides eligibility.
- Votes are auditable and resistant to duplicate submission.
- Administrators can create, merge, reorder, update, close, and release features.
- Released features retain their discussion and vote history.
- PostHog records voting and subsequent feature adoption without storing sensitive discussion content unnecessarily.

This module should be usable from Instatic/Nuxt landing pages and Expo applications.

## Application Size and Dependency Policy

Do not create one oversized starter containing every discussed SDK. Maintain composable presets and optional modules.

### Base Expo

- Expo
- Expo Router
- TypeScript
- NativeWind
- Shared tokens and UI primitives
- Reanimated when the product uses interactive motion

### Add by Requirement

| Requirement | Add |
| --- | --- |
| Cloud data with minimal backend | Supabase client and selected Supabase services |
| Custom backend/auth/AI | Hono client integration and Better Auth |
| Meaningful product analytics | PostHog core SDK |
| Monetization | Superwall SDK |
| Illustrative animation | Lottie/dotLottie runtime and selected assets |
| Session replay | PostHog native replay plugin after review |

Measure production release size, cold start, memory, frame rate, and network usage. Development-build size is not representative. Remove unused native modules and avoid bundling large animation or media collections.

## Reusable Repository and Package Strategy

Target reusable modules include:

| Repository or package | Purpose |
| --- | --- |
| Auth service | Hono + Better Auth + PostgreSQL; Google, Apple, and email OTP |
| Feature voting | Hono API module, database migrations, admin functions, and frontend widget |
| Expo starter | Expo Router, tokens, primitives, NativeWind, Reanimated, testing, and build profiles |
| Analytics package | Typed PostHog events, identity linking, consent controls, and provider adapters |
| Billing package | Provider-neutral entitlement interface with a Superwall implementation and RevenueCat alternative |
| Instatic/Nuxt starter | Landing-page sections, articles, metadata, auth bridge, analytics, and feature-board integration |
| Hono API starter | Health checks, config, logging, errors, auth integration, database, webhooks, and AI tool patterns |

Vendor-specific calls should be concentrated behind these modules rather than scattered throughout application screens.

## Standard Product Lifecycle

### 1. Planning

- Validate the problem and intended customer.
- Choose an architecture preset.
- Decide whether accounts, synchronization, an API, AI, object storage, and monetization are required.
- Define the first activation event and measurable success criteria.
- Record explicit non-goals.

### 2. Discovery and Design

- Research comparable products and reference sites.
- Use Mintlify, Savee, and other curated references intentionally.
- Introduce Hyperframes early.
- Use UI UX Pro Max, design skills, adapted prompts, Figma, and agents.
- Define tokens, component patterns, primary journeys, empty/error/loading states, and motion intent.
- Reuse the design across product UI, landing page, store assets, and social content.

### 3. Early Landing Page

- Launch the Instatic/Nuxt landing page early.
- Publish the problem, product direction, articles, updates, and calls to action.
- Offer email signup and, when appropriate, discounted early purchase.
- Let authenticated supporters view, vote on, and discuss potential features.
- Instrument acquisition and conversion with PostHog.

### 4. Web Product and API

- Release an early web version when the product genuinely works on web.
- Use rapid web releases for validation and public progress updates.
- Build the API only when required by the selected architecture.
- Keep entitlement, identity, and analytics IDs consistent across surfaces.

### 5. Mobile Release

- Build and release iOS first unless the market indicates otherwise.
- Add Android based on demand and maintenance capacity.
- Use App Store optimization alongside landing-page, community, and personal-social momentum.
- Validate purchases, restores, cross-platform access, refunds, deep links, and analytics in production-like builds.

### 6. Growth

- Continue frequent web, content, and paywall updates.
- Use PostHog evidence to prioritize product work.
- Use Superwall experiments only after traffic is sufficient to produce useful results.
- Consider a paid advertising campaign approximately three to six months after launch.

### 7. Portfolio Cadence

After the first one or two products establish reliable boilerplates and operating knowledge, target one new application or substantial update per quarter. The cadence is an outcome of process maturity, not a reason to reduce product quality.

## Developer and Tooling Watch List

Track these developers for patterns and tools, not as unquestioned authorities:

- **Edmund Young** — app development, free tools, workflows, and native UI resources.
- **Adam Lyttle** — solo app development, launches, monetization, and growth.
- **Arthur Solanzani** — consumer apps, growth, monetization, and product execution.
- **Nathan Covey** — Expo/React Native tooling, NativeWind, Reanimated, LottieFiles, Superwall, RevenueCat, PostHog, and nontechnical-to-technical shipping workflows.

Useful recommendations should be evaluated against current documentation, pricing, platform rules, maintenance health, and the needs of the specific product before entering a boilerplate.

## Current Decisions Summary

| Area | Decision |
| --- | --- |
| Mobile | Expo/React Native/TypeScript |
| Mobile styling | NativeWind with semantic tokens and primitives |
| Interactive animation | Reanimated |
| Illustrative animation | Optional Lottie/dotLottie |
| API | Hono default; FastAPI or .NET Minimal API when justified |
| Custom auth | Better Auth service with Google, Apple, and email OTP |
| Structured data | PostgreSQL |
| Blob/media data | S3-compatible object storage selected per project |
| Client/app landing pages | Instatic + Nuxt |
| Personal content ecosystem | Strapi where centralized structured publishing is valuable |
| Web payments | Stripe |
| Native payments | Apple App Store and Google Play |
| Subscription/paywalls | Pilot Superwall standalone; RevenueCat remains an alternative |
| Product analytics | PostHog across web and mobile |
| Hosting | Coolify on the VPS, with managed external services where they materially reduce operational risk |
| SEO | Fundamentals now; deeper strategy and tooling later |

## Pre-Launch Verification

Before shipping a monetized application, verify:

- Production auth callbacks for web, Apple, and Google.
- Account deletion and data export paths.
- Anonymous-to-authenticated identity linking.
- Stripe, App Store, and Google Play product mapping.
- Purchase, restore, renewal, cancellation, expiration, refund, grace-period, and billing-error behavior.
- Superwall webhook authentication, idempotency, retries, and reconciliation.
- PostHog identity consistency and absence of duplicate revenue events.
- Privacy disclosures, consent behavior, data minimization, and session-replay masking.
- Reduced-motion behavior and accessibility.
- Production application size, startup, memory, animation performance, and network usage.
- Database and object-storage backups plus tested restoration procedures.
- Current Apple, Google, Stripe, Superwall, and PostHog requirements and pricing.

## Vendor References

- [Expo documentation](https://docs.expo.dev/)
- [NativeWind documentation](https://www.nativewind.dev/)
- [React Native Reanimated documentation](https://docs.swmansion.com/react-native-reanimated/)
- [LottieFiles documentation](https://docs.lottiefiles.com/)
- [Hono documentation](https://hono.dev/)
- [Better Auth documentation](https://www.better-auth.com/)
- [PostHog React Native documentation](https://posthog.com/docs/libraries/react-native)
- [PostHog pricing](https://posthog.com/pricing)
- [Superwall Expo documentation](https://superwall.com/docs/expo)
- [Superwall platform and pricing](https://superwall.com/pricing)
- [RevenueCat documentation](https://www.revenuecat.com/docs/)

