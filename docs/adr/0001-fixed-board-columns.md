# Board columns are a fixed set, and a column is a Task's Status

Every Board has the same three columns: To do, In progress, Done. A Task's column is its Status, stored as a database enum, with no separate status field. We rejected per-Project custom columns because deleting a column that still holds Tasks, reordering columns, and per-Project column permissions all add edge cases that don't help the demo.

## Follow-up

Customisable columns (add, rename, reorder, delete per Project) are a deliberate non-goal for now. Adding them means replacing the enum with a `columns` table owned by the Project, and deciding where Tasks go when their column is deleted.
