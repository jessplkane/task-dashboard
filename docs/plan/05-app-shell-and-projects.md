# 05: App shell and Projects

## Goal

A signed-in User sees their Projects and can create, edit and delete them.

## Depends on

02, 03, 04.

## Scope

- The app shell: header with the signed-in User's name, avatar and sign-out.
- The home screen: the Project list, each showing a count of open Tasks and a count of Overdue Tasks. Empty state included.
- **Overdue is viewer-local** (design summary). The server can't know the viewer's date, so it returns open Tasks' Deadlines per Project and a small client component computes the Overdue count after mount. Put the Overdue calculation in one shared pure function with unit tests, because task 07 uses it too.
- Create a Project (name required, description optional). The creator becomes Owner and Member.
- Edit name and description (any Member). Delete (Owner only, type-the-name confirmation, hard delete).
- Server Actions for each mutation, with input validation and typed results. Controls the role can't use are hidden, and the database rejects them regardless.
- Loading and error states for each route.

## Out of scope

Members and Invite (06), the Board (07).

## Acceptance

- As two Users: the Owner can create, edit and delete a Project. The other User, once a Member, can edit it but sees no delete control, and a hand-crafted delete request is rejected.
- A User never sees a Project they aren't a Member of, including by guessing its URL.
- The Overdue count is correct for a Task due yesterday, today and tomorrow, and excludes Done Tasks. Unit tests cover this.
- Vitest, typecheck and lint pass.

## Handoff

_Not started._
