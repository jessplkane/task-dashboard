# 08: Drag-and-drop and optimistic updates

## Goal

Tasks move between and within columns by pointer, touch or keyboard, and the Board updates optimistically. This is headline skills 1 and 2.

## Depends on

7.

## Scope

- Drag-and-drop for pointer and touch, and a keyboard mode (pick up, move, drop, cancel) with live-region announcements. Choose a library or build on native APIs, and record why.
- A "Move to…" menu on every Task card as the always-available alternative to dragging, which is what makes the Board usable on a phone. It changes Status and puts the Task at the bottom of the target column.
- Optimistic updates with `useOptimistic` wrapping the Server Action. On failure, roll back and show an error Toast. Concurrent moves are last-write-wins.
- The move logic is a pure reducer: move within a column, move across columns, rollback. It uses the ordering utility from task 07.
- Only the interactive Board is a client component. Keep the rest of the page on the server.

## Out of scope

Realtime. Custom columns (ADR 0001).

## Acceptance

- A move by pointer, by keyboard and by the "Move to…" menu each persist, and another Member sees the new order after a refresh.
- The UI updates before the server responds. A forced server failure rolls the Task back and shows an error.
- Keyboard-only users can move a Task between every pair of columns, and a screen reader announcement describes each step.
- On a 375px viewport, a Task can be moved with the menu alone.
- Reducer unit tests cover within-column moves, cross-column moves, moving to an empty column and rollback.
- Vitest, typecheck and lint pass.

## Handoff

_Not started._
