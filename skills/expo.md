---
name: expo
description: Use when building cross-platform mobile UI with Expo and React Native.
---

# Expo

## Purpose

Guide cross-platform mobile design and implementation for Expo/React Native projects while preserving platform-specific behavior on iOS and Android.

## Use when

- the project uses Expo or React Native;
- one app must target iOS and Android;
- navigation, styling, or device features need platform-aware guidance.

## Procedure

1. Confirm the Expo SDK, React Native version, platforms, navigation, and existing component system.
2. Read the applicable Expo documentation and project conventions before changing code.
3. Design for touch, safe areas, keyboard behavior, loading/error states, and platform differences.
4. Use platform-specific behavior intentionally rather than hiding meaningful differences behind one generic layout.
5. Verify on the named iOS and Android targets or report the unavailable target explicitly.

## Boundaries

Do not install Expo packages, change the SDK, or submit builds without explicit project authorization.

## Verification

The primary flow works on each named platform, with documented differences, permissions, device states, and evidence.

## Reference

- [Expo documentation](https://docs.expo.dev/)
