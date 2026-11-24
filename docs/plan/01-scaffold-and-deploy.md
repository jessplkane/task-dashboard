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

Status: **blocked** on the Netlify acceptance item. Everything else is done and verified locally.

Missing: a Git remote and a Netlify site connected to it (both user-only). Once they exist: push `main`, confirm the Netlify build succeeds and the deployed page has styles (light and dark backgrounds from `app/theme.css.ts`). If Turbopack fails there, write the ADR and fall back as the Acceptance section says. Then set the task to `done`.

### What exists

- Spike demo removed (`counter.tsx`, `button.css.ts`, `page.css.ts`). `app/page.tsx` is a bare heading. `app/theme.css.ts`, `app/layout.tsx` and `next.config.ts` are unchanged.
- Scripts: `typecheck`, `lint`, `test`, `test:e2e`, `format`, `format:check`, plus the originals.
- ESLint 9 flat config (`eslint.config.mjs`: `core-web-vitals`, `typescript`, Prettier). Prettier: single quotes, width 100.
- Vitest (`vitest.config.mts`, node environment, `**/*.test.{ts,tsx}`, ignores `e2e/`). Smoke test: `lib/smoke.test.ts`.
- Playwright (`playwright.config.ts`, Chromium only, serves the production build). Smoke spec `e2e/smoke.spec.ts` asserts the body's computed colours come from the Vanilla Extract theme.
- `supabase init` run; `supabase/config.toml` is the default. No migrations. Supabase CLI 3.3.0 is a dev dependency.
- `.env.example` lists the Supabase URL and publishable key, and the Google OAuth client id and secret.
- `AGENTS.md` has the Conventions section.
- No `netlify.toml`. Add one only if the Netlify build needs it.
- A Git repository already existed with no commits; the first commit is `e551980`. No remote is configured.

### Verified locally

`npm run typecheck`, `lint`, `test`, `format:check` pass. `npm run build` prints `Next.js 16.4.5 (Turbopack)` and succeeds. `npm run test:e2e` passes against the built app. Node here is v26.13.1; Node 22.12 was not run.

### Deviations and gotchas

- `typescript` is aliased to `@typescript/typescript6` and `tsc` comes from `@typescript/native` (TypeScript 7). Without this, `eslint` crashes: typescript-eslint rejects TypeScript 7.0. Recorded in `AGENTS.md`.
- `.env` was added to `.gitignore` alongside the existing `.env*.local`.
- No `@/` path alias. Imports are relative.
