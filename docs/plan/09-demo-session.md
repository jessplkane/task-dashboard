# 09: Demo Session

## Goal

"Try the demo" gives any visitor a private, freshly seeded sandbox where they choose to be Owner or Member.

## Depends on

03, 06, 07.

## User-only prerequisites

- Enable anonymous sign-ins in the Supabase dashboard.
- Enable the `pg_cron` extension on the hosted project, if the scheduled cleanup uses it.

## Scope

- The "Try the demo" flow on the sign-in page, with a choice of Owner or Member, using Supabase anonymous sign-in.
- Four seeded persona Users as fixed auth rows from a migration. Three are Members of every sandbox Project, one is not.
- A database function that seeds a sandbox Project for the caller in the chosen role. If the visitor chose Member, a persona is the Owner. The Project includes Tasks across every Status and Priority, one Overdue Task, and one Task assigned to the visitor.
- In a Demo Session, Invite matches only the personas. Enforce this in the database, not just the UI, so a visitor can never probe real Users' emails. The UI hints at the outside persona's email so the Invite flow is discoverable.
- A scheduled cleanup that deletes anonymous Users and their sandbox Projects after a set age. Pick the age and record it.
- Forward the visitor's IP to Supabase (`Sb-Forwarded-For`, which needs the setting enabled in the dashboard), so every visitor isn't rate-limited under Netlify's server IP.
- Anonymous sign-ins default to 30 per hour per IP. Check whether that is enough, and note it.

## Out of scope

Choosing the shape of the seed data. It is always the same populated Project.

## Acceptance

- "Try the demo" as Member shows the seeded Project, no Delete Project or Remove Member controls, and a hand-crafted delete is rejected by the database.
- "Try the demo" as Owner can Invite the hinted persona, who then appears as a Member.
- Invite of a real User's email from a Demo Session returns the same "no such user" error as an unknown email.
- Two simultaneous sessions never see each other's data.
- A pgTAP test covers persona-only lookup and the cleanup function.

## Handoff

_Not started._
