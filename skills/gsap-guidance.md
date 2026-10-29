---
name: gsap-guidance
description: Use when web motion needs deliberate, performant GSAP guidance.
---

# GSAP Guidance

## Purpose

Guide purposeful web motion and scroll-driven storytelling with performance, accessibility, and reduced-motion constraints.

## Procedure

1. State what the motion communicates: progression, state change, continuity, feedback, or emphasis.
2. Prefer transforms and opacity; avoid animation patterns that trigger layout recalculation every frame.
3. Respect `prefers-reduced-motion` and provide a usable non-motion path.
4. Keep timelines bounded, cancelable, and appropriate to the route and device.
5. Verify the interaction at the target viewport and record performance or accessibility caveats.

## Boundaries

Do not add motion merely because a library is available. Do not add GSAP to a project without checking its existing motion system and dependency policy.

## References

- [GSAP documentation](https://gsap.com/docs/v3/)
- [Video source](https://youtu.be/Ot582-E61ac?is=PZjFN6uvmOg3xAhC)
