# Follow-ups

Features deliberately left out of the first version. None is needed for the demo.

- **Custom Board columns.** Replace the fixed Status enum with a per-Project columns table. See [ADR 0001](./adr/0001-fixed-board-columns.md).
- **Members leaving a Project.** Today only the Owner can remove a Member, and a Member cannot leave on their own.
- **"My tasks" view.** A cross-Project list of Tasks assigned to the signed-in User, grouped by Deadline, as a second section on the home screen. The first version's home screen is the Project list only.
- **Board filters.** Filter a Board by Assignee and Priority.
- **Realtime updates.** Members currently see each other's changes on refresh or window focus, with last-write-wins on concurrent edits.
