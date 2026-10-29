---
name: swiftui
description: Use when designing or implementing native Apple UI with SwiftUI.
---

# SwiftUI

## Purpose

Apply Apple platform conventions, SwiftUI composition, accessibility, and native interaction patterns when the project targets iPhone, iPad, or other Apple platforms.

## Use when

- the project uses SwiftUI;
- a native Apple experience is required;
- platform behavior should feel native rather than like a shrunken web page.

## Procedure

1. Confirm the Apple platform, deployment target, existing architecture, and approved design direction.
2. Read the relevant Apple Human Interface Guidelines and SwiftUI documentation.
3. Prefer native navigation, controls, typography, materials, Dynamic Type, accessibility, and platform conventions.
4. Verify light/dark appearance, size categories, keyboard/focus behavior, and reduced motion where relevant.
5. Hand off platform deviations and unresolved API choices to the Lead.

## Boundaries

Do not introduce SwiftUI into a non-Apple project or treat Apple guidance as permission to change architecture.

## Verification

The UI is tested on the named platform targets and documents accessibility, adaptation, and any intentional departures from Apple conventions.

## References

- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Apple SwiftUI documentation](https://developer.apple.com/xcode/swiftui/)
