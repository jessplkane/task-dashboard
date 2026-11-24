# 06: Members and Invite

## Goal

Members can see who is in a Project and Invite existing Users. The Owner can remove Members.

## Depends on

5.

## Scope

- A Members panel on the Project, listing each Member with their role.
- An Invite form taking an exact email. Trim and lowercase before sending. Calls the Invite function from task 02. Inline errors for no such user and already a Member.
- Remove Member (Owner only; not the Owner themselves). The removed User loses access immediately and their assigned Tasks become unassigned.
- Server Actions with typed results and error mapping from the database errors.

## Out of scope

Autocomplete (deliberately not built: it would expose other Users' details), accept or decline, Members leaving (see `docs/follow-ups.md`), and the Demo Session's persona-only lookup (task 09).

## Acceptance

- Inviting an existing User makes them a Member immediately, and the Project appears in their list on refresh.
- An unknown email and a duplicate each show a distinct inline error.
- A Member sees no Remove control, and a hand-crafted remove request from a Member is rejected.
- Removing a Member unassigns their Tasks, and the removed User can no longer open the Project.
- Vitest, typecheck and lint pass.

## Handoff

_Not started._
