# 02: Database schema, RLS and policy tests

## Goal

The whole data model and every access rule live in Postgres migrations, with tests proving the rules. This is the authorization boundary in [ADR 0002](../adr/0002-supabase-rls-as-authorization-boundary.md).

## Depends on

01 (Supabase CLI initialised).

## User-only prerequisites

Docker running locally, because the Supabase CLI's local stack needs it.

## Scope

Migrations under `supabase/migrations/`, covering:

- **Profiles**: one per auth User, created by a trigger on sign-up. Display name falls back to the email's local part. Email stored trimmed and lowercased.
- **Projects**, **Members** (with Owner and Member roles) and **Tasks**, as defined in `CONTEXT.md`. Status is a database enum of the three fixed values ([ADR 0001](../adr/0001-fixed-board-columns.md)). Priority is an enum of None, Low, Medium, High. Deadline is a `date`.
- **Project creation** makes the creator the Owner and a Member in the same transaction. There is exactly one Owner per Project, and the Owner cannot be changed.
- **An Assignee must be a Member of the Task's Project.** Enforce it in the database.
- **Task order** is a text key per Task, ordered with `COLLATE "C"`. Fractional-indexing keys sort incorrectly under locale collations.
- **Removing a Member** unassigns their Tasks in that Project. Tasks they created stay.
- **Invite** is a function that finds an existing User by exact, trimmed, lowercased email and adds them as a Member. It errors distinctly for no such user and already a Member. Direct reads of other Users' profiles are not allowed: a User can read only profiles of people who share a Project with them.
- **RLS** on every table. Non-Members see and change nothing. Members can read the Project, edit its name and description, and create, edit and delete any Task. Members can invite. Only the Owner can delete the Project or remove Members.
- Generate TypeScript types from the schema and commit them.

## Out of scope

Anonymous or demo behaviour (task 09), Supabase Auth configuration (task 03), any application code.

## Acceptance

- `supabase db reset` applies every migration cleanly.
- `supabase test db` passes pgTAP tests proving each of these: a non-Member can read and change nothing in any table; a Member cannot delete a Project or remove a Member; a Member can invite and create, edit and delete Tasks; the Owner can delete and remove; assigning a non-Member is rejected; removing a Member unassigns their Tasks and keeps the Tasks they created; profiles of strangers are unreadable; Invite matches only an exact email; the Owner row cannot be changed.
- Generated types are committed and the project type-checks.

## Handoff

_Not started._
