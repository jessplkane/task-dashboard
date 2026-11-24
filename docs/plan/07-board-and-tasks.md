# 07: Board and Tasks

## Goal

Each Project has a Board with three fixed columns, and Members can create, edit and delete Tasks on it.

## Depends on

5.

## Scope

- The Board route: three columns (To do, In progress, Done) as Server Components, ordered by the Task's position key.
- A Task card: title, Priority badge, Deadline, Overdue style, Assignee avatar. Overdue is computed by the shared client-side function from task 05, so the server renders a plain date and the style appears after mount.
- Create Task (title required, optional plain-text description, Priority, Deadline, Assignee from the Project's Members). A new Task goes to the bottom of To do.
- Edit Task in a Dialog, and delete with a confirmation. Any Member can do all of it.
- The ordering utility: generate a key after the last Task, and between two keys. Use a maintained fractional-indexing library or implement one, and record the choice. Task 08 uses it for moves.
- Change Status from the edit Dialog for now. Drag-and-drop is task 08.
- A refresh on window focus so a Member sees other Members' changes (no realtime).

## Out of scope

Drag-and-drop, the "Move to…" menu, optimistic updates (task 08). Filters and a cross-Project view (follow-ups).

## Acceptance

- A Member can create, edit and delete a Task, and the change shows after a reload for another Member.
- A new Task appears at the bottom of To do. Tasks keep their order across reloads.
- A Task can only be assigned to a Member of that Project.
- Unit tests cover the ordering utility (append, between, many inserts in one gap) and the Overdue display on the card (due yesterday, today, tomorrow, Done).
- The Board is usable at 375px width, with the columns scrolling horizontally.
- Vitest, typecheck and lint pass.

## Handoff

_Not started._
