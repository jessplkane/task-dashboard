# 04: Design system

## Goal

A Vanilla Extract design system with typed tokens, light and dark themes, and the accessible primitives the app needs. This is headline skill 3.

## Depends on

1.

## Scope

- A typed theme contract (colour, space, radius, type scale, shadow, motion) in `.css.ts`. Light and dark values switch through `prefers-color-scheme` with no toggle and no flash.
- A global reset and base styles.
- Primitives as recipes with typed variants: Button, IconButton, TextInput, Textarea, Select, Dialog, Menu, Badge (for Priority and Overdue), Avatar, and Toast for action errors.
- Prefer native elements (`<dialog>`, `<select>`) before adding a dependency. If a headless library is used for Menu or Toast, record why in the Handoff.
- A dev-only showcase route that renders every primitive and variant in both themes, used for visual and automated checks.
- Visible `:focus-visible` states and a `prefers-reduced-motion` rule.

## Out of scope

Anything specific to Projects, Boards or Tasks. A theme toggle.

## Acceptance

- Every primitive has typed variants. Changing a token in the contract changes it everywhere.
- The showcase route renders in both themes (check both with the system setting or emulated media in Playwright).
- Axe reports no violations on the showcase route in either theme, including colour contrast.
- Each primitive is operable by keyboard alone. Dialog traps focus, closes on Escape, and returns focus to its trigger.
- Playwright and Vitest still pass.

## Handoff

_Not started._
