# 01: Scaffold and Netlify deploy

## Goal

Turn the Turbopack spike into the real project foundation, and prove the build deploys on Netlify.

## Depends on

Nothing. The spike already exists: Next.js 16, Vanilla Extract on Turbopack, Node 22 pinned in `.nvmrc`.

## User-only prerequisites

- A Git remote for the repo. The directory has no `.git` yet.
- A Netlify site connected to that remote.

## Scope

- Remove the spike's demo content (`app/counter.tsx`, `app/button.css.ts`, `app/page.css.ts`, the demo page body). Keep `next.config.ts` and the Vanilla Extract plugin setup. The design system task replaces `app/theme.css.ts`.
- Initialise Git with a first commit, then add the remote once the user supplies it.
- Add scripts: `typecheck`, `lint`, `test` (Vitest), `test:e2e` (Playwright). Install and configure ESLint (check the Next 16 docs for how linting is run), Prettier, Vitest and Playwright. No tests yet beyond a trivial passing smoke test per runner.
- Add the Supabase CLI as a dev dependency and run `supabase init`. Do not write migrations; that is task 02.
- Add `.env.example` listing the variables later tasks need, with no values.
- Add `netlify.toml` only if the Netlify build needs it.
- Write a "Conventions" section in `AGENTS.md` for the folder layout you choose (where routes, data access, components and styles live). Keep it to what a reader can't see from the tree.

## Out of scope

Any feature code, Supabase schema, auth, styling beyond what the spike has.

## Acceptance

- `npm run typecheck`, `npm run lint` and `npm run test` pass on Node 22.12 or later.
- `npm run build` reports Turbopack and succeeds, and the served page has Vanilla Extract styles.
- The Netlify build succeeds and the deployed page renders with styles. This is the Turbopack-on-Netlify risk in the design summary. If it fails, record the failure in a new ADR and fall back to `unstable_turbopack: { mode: 'off' }` with webpack, then re-verify.
- `AGENTS.md` has the Conventions section.

## Handoff

_Not started._
