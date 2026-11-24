# Task Dashboard

A multi-project task management app: Users create Projects, invite other Users to them, and organise work as Tasks on each Project's Board.

## Language

### People and access

**User**:
A person with an account. Can see only the Projects they are a Member of.
_Avoid_: Account, team member, person

**Project**:
A unit of collaborative work with a fixed set of Members and exactly one Board. The permission boundary: visibility and access are decided per Project.
_Avoid_: Workspace, team, organisation

**Member**:
A User's relationship to one Project. A User is a Member of every Project they created or were invited to. A Member cannot leave a Project; only the Owner can remove them.
_Avoid_: Team member, collaborator, participant

**Owner**:
The Member who created the Project. Exactly one per Project; cannot be changed and cannot leave without deleting the Project. Only the Owner may delete the Project or remove Members.
_Avoid_: Admin, creator, manager

**Invite**:
Adding an existing User to a Project as a Member, found by exact email address. Takes effect immediately; there is no pending state and no accept or decline. Any Member may invite.
_Avoid_: Invitation (as a stored thing), request, join

**Demo Session**:
A visitor's throwaway sandbox, started from "Try the demo", in which they choose to be Owner or Member of a freshly seeded Project that no other visitor shares.
_Avoid_: Guest mode, trial, demo account

### Work

**Board**:
The single set of columns and Tasks belonging to a Project. Never exists without a Project.
_Avoid_: Task board, kanban, sub-board

**Task**:
A unit of work on a Board, with a title, optional description, Status, Priority, optional Deadline and optional Assignee.
_Avoid_: Card, ticket, issue, item

**Status**:
Which column a Task is in. The columns are fixed: To do, In progress, Done. A Task's column and its Status are the same thing.
_Avoid_: State, stage, list

**Assignee**:
The Member a Task is assigned to. A Task has zero or one.
_Avoid_: Owner (of a task), responsible person

**Priority**:
How urgent a Task is: None, Low, Medium or High.
_Avoid_: Severity, importance, urgency

**Deadline**:
The calendar date a Task is due. A date only, with no time of day and no timezone.
_Avoid_: Due date, due time, SLA

**Overdue**:
A Task whose Deadline is before today's date in the viewer's local calendar and whose Status is not Done.
_Avoid_: Late, expired
