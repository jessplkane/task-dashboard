# Plan

The build is split into ten tasks. This file is the single source of truth for task status. The design lives in [`../design-summary.md`](../design-summary.md) and is not repeated in the task files.

## Session protocol

1. **Orient.** Read `AGENTS.md`, `CONTEXT.md` and `docs/design-summary.md`. Done when you can state the role rules and the Demo Session behaviour without looking.
2. **Claim.** Pick the lowest-numbered task with status `todo` whose dependencies are all `done`, set it to `in-progress` in the index below, and read its file. Done when the index shows your claim.
3. **Unblock.** If the task lists user-only prerequisites, ask the user to complete them (the `wizard` skill can generate a guided script), and do all reachable work meanwhile. Done when each prerequisite is complete, or the task is `blocked` with the missing item named.
4. **Build.** Stay inside the task's scope. Use the glossary terms exactly. Done when every Acceptance item has been run and observed, not assumed.
5. **Record.** Add new terms to `CONTEXT.md`. Add an ADR only when a decision is hard to reverse, surprising and a real trade-off. Fill in the task file's Handoff section with what exists, deviations from the task, and gotchas. Done when a fresh session could start the next task from the files alone.
6. **Close.** Set the task to `done` in the index. Done when the index and the Handoff agree.

Tasks without a dependency between them can run in parallel sessions. Claim in the index first, and keep changes inside your own task's files.

## Index

Status is `todo`, `in-progress`, `blocked` or `done`.

| #   | Task                                                               | Depends on | Status  |
| --- | ------------------------------------------------------------------ | ---------- | ------- |
| 01  | [Scaffold and Netlify deploy](./01-scaffold-and-deploy.md)         | none       | blocked |
| 02  | [Database schema, RLS and policy tests](./02-database-and-rls.md)  | 01         | todo    |
| 03  | [Google sign-in and sessions](./03-auth.md)                        | 01, 02     | todo    |
| 04  | [Design system](./04-design-system.md)                             | 01         | todo    |
| 05  | [App shell and Projects](./05-app-shell-and-projects.md)           | 02, 03, 04 | todo    |
| 06  | [Members and Invite](./06-members-and-invite.md)                   | 05         | todo    |
| 07  | [Board and Tasks](./07-board-and-tasks.md)                         | 05         | todo    |
| 08  | [Drag-and-drop and optimistic updates](./08-drag-and-drop.md)      | 07         | todo    |
| 09  | [Demo Session](./09-demo-session.md)                               | 03, 06, 07 | todo    |
| 10  | [End-to-end tests, a11y pass and release](./10-e2e-and-release.md) | 08, 09     | todo    |

Parallel waves: 01, then 02 with 04, then 03, then 05, then 06 with 07, then 08 with 09, then 10.
