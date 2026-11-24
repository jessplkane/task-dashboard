# 10: End-to-end tests, a11y pass and release

## Goal

The app is proven end to end, reviewed for accessibility, documented for a reader of the repo, and deployed.

## Depends on

08, 09.

## Scope

- Playwright tests: Demo Session as Member (forbidden actions are rejected, not just hidden); Demo Session as Owner (Invite the hinted persona, assign a Task, drag a Task to Done).
- An axe pass over the sign-in page, Project list and Board, in both themes.
- A manual keyboard-only and 375px walkthrough of the Board.
- A README for a reviewer: what the app is, a link to the live demo, what the repo demonstrates (the three headline skills), how to run it, and how the tests work. State the exact-email Invite trade-off (it lets a signed-in User confirm that an email has an account) and link `docs/follow-ups.md`.
- Final deploy with production environment variables. Delete dev-only scaffolding that shouldn't ship, and make sure `docs/design-summary.md` matches what was built.

## Out of scope

New features. Everything found that isn't a defect goes in `docs/follow-ups.md`.

## Acceptance

- The Playwright suite passes locally and against the deployed URL.
- Axe reports no serious or critical violations on the audited pages in either theme.
- The README exists and a reader can run the app from it on a clean machine.
- The deployed app signs in with Google and starts a Demo Session.

## Handoff

_Not started._
