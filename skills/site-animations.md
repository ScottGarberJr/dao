---
name: site-animations
description: Use when creating web motion that must be purposeful and performant.
---

# Site Animations

## Purpose

Guide the creation of web animation before polish. Motion should communicate progression, state, continuity, feedback, or emphasis while preserving performance, accessibility, and a usable reduced-motion path.

## Use when

- creating or revising animated web UI;
- designing landing-page or scroll-driven storytelling;
- deciding whether GSAP or the project’s existing motion system is appropriate.

## Animation guiderails:

- avoid animation patterns that trigger layout recalculation every frame;
- favor efficient properties such as transforms and opacity;
- use motion to communicate progression or state, not as decoration.

## Procedure

1. Name the user-facing purpose of each motion and identify the route, state, viewport, and target devices.
2. Check the project’s existing motion system before adding GSAP or another dependency.
3. Prefer transform and opacity-based animation where appropriate; avoid unnecessary layout work.
4. Define `prefers-reduced-motion` behavior and a usable non-motion path.
5. Use [GSAP Guidance](gsap-guidance.md) when the project specifically needs GSAP or complex timelines.
6. Hand the motion plan to Design Review before visual polish.

## Boundaries

Do not add animation merely because it is available. Do not install GSAP, copy a showcase animation, or add a new motion dependency without project authorization.

## Verification

- [ ] Every meaningful animation has a stated purpose.
- [ ] Performance-sensitive properties and layout behavior were considered.
- [ ] Reduced-motion behavior is defined.
- [ ] The motion was reviewed before polish.

## References

- [GSAP documentation](https://gsap.com/docs/v3/)
- [Video source](https://youtu.be/Ot582-E61ac?is=PZjFN6uvmOg3xAhC)
