# Task Dashboard: design summary

A multi-project task manager, a simplified Trello/Linear, built as a portfolio piece for both a hiring manager (live demo) and a senior developer (reading the repo).

## Product

| Area      | Decision                                                                                                                                                                                                                                                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Structure | User → Member of Projects. One Board per Project. No workspace level.                                                                                                                                                                                                                                                                 |
| Roles     | **Owner** (the creator, exactly one, fixed) and **Member**. Members can invite, and create, edit and delete any Task. They can rename the Project but can't leave. Only the Owner deletes the Project (hard delete, type-the-name confirm) or removes Members.                                                                        |
| Invite    | Existing Users only, found by exact email (trimmed, case-insensitive). Immediate, with no accept step.                                                                                                                                                                                                                                |
| Removal   | Assigned Tasks become unassigned. Created Tasks stay. Access ends immediately.                                                                                                                                                                                                                                                        |
| Task      | Title, optional plain-text description, Status, Priority (None/Low/Medium/High), optional date-only Deadline, zero or one Assignee.                                                                                                                                                                                                   |
| Status    | The fixed columns To do, In progress, Done. The column is the Status. New Tasks go to the bottom of To do.                                                                                                                                                                                                                            |
| Ordering  | Manual, persisted, with last-write-wins on concurrent edits. No realtime.                                                                                                                                                                                                                                                             |
| Overdue   | Deadline before today in the viewer's local date and not Done. The server renders the date and a small client component adds the Overdue style.                                                                                                                                                                                       |
| Home      | Project list with open and Overdue counts.                                                                                                                                                                                                                                                                                            |
| Sign-in   | Google, plus a **Demo Session**: a per-visitor sandbox where you choose Owner or Member of a freshly seeded Project. Lookups in a Demo Session match only the four seeded personas, and the UI hints at the one who isn't yet a Member. No magic link, because Supabase's built-in email sender allows 2 emails per hour per project. |

## Technical

| Area            | Decision                                                                                                                                                                                                                                       |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stack           | Next.js 16 (App Router, Server Components and Server Actions), Supabase, Vanilla Extract, hosted on Netlify.                                                                                                                                   |
| Authorization   | Row-level security in Postgres is the single boundary. The UI hides controls, but the database enforces them.                                                                                                                                  |
| Bundler         | Turbopack, via `unstable_turbopack: { mode: 'on' }`. Needs Node 22.12 or later. Builds and serves locally; not yet verified on Netlify.                                                                                                        |
| Headline skills | (1) Optimistic updates over a typed data layer. (2) Accessible drag-and-drop with a keyboard mode and a "Move to…" menu, fully usable on a phone. (3) A Vanilla Extract design system with light and dark themes following the system setting. |
| Tests           | Database policy tests (pgTAP), unit tests (Overdue, ordering, optimistic reducer), and Playwright for the Demo Session as Member and as Owner.                                                                                                 |

## Related docs

- [CONTEXT.md](../CONTEXT.md): glossary
- [ADR 0001: fixed Board columns](./adr/0001-fixed-board-columns.md)
- [ADR 0002: Supabase RLS as the authorization boundary](./adr/0002-supabase-rls-as-authorization-boundary.md)
- [Follow-ups](./follow-ups.md)

## Risks

- **Unverified**: the Turbopack and Vanilla Extract build on Netlify. It works locally. The fallback is the stable webpack build.
- **Accepted**: exact-email Invite lets a signed-in Google User confirm whether an email has an account.
- **Accepted**: anonymous sign-ins can be started by anyone. They're limited to 30 per hour per IP by default, and stale sandboxes get deleted on a schedule.

## Why, so these aren't reopened by accident

- **No magic link**: Supabase's built-in email sender allows 2 emails per hour per project. The Demo Session already covers visitors without a Google account.
- **Exact-email Invite, no autocomplete**: autocomplete over all Users would show signed-in strangers each other's names and emails. A personas-only autocomplete in the Demo Session would be safe but isn't planned.
- **Demo Session is a per-visitor sandbox**, not shared demo accounts, so visitors can't trash each other's data and no reset job is needed. Cleanup deletes stale sandboxes.
- **Overdue is computed on the client**: the server can't know the viewer's local date, and computing it there would risk a hydration mismatch or a wrong badge.
- **Fixed columns**: see ADR 0001.
- **Vanilla Extract over Panda CSS**: both are typed and zero-runtime. Vanilla Extract keeps the design-system authorship visible in the repo. Panda was considered for its better Turbopack story and not chosen.
- **No realtime**: last-write-wins plus a refresh on window focus keeps the data layer simple, and optimistic updates stay the headline.

## Build plan

The work is split into ten tasks in [plan/README.md](./plan/README.md).
