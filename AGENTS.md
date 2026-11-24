# Task Dashboard

A portfolio demo: a multi-project task manager on Next.js 16, Supabase, Vanilla Extract and Netlify.

## Resume

**Resume** from `docs/plan/README.md`: it holds the session protocol, the task index and each task's status. Work one task per session.

## Reference

- **Glossary**: `CONTEXT.md`. Use its terms in code, SQL, UI copy and commits.
- **Settled design**: `docs/design-summary.md`. The reasoning behind it is in `docs/adr/`, and deferred scope is in `docs/follow-ups.md`. Reopen a decision only when the user does.
- **Next.js 16** differs from training data. Read `node_modules/next/dist/docs/` before writing Next code.
- **Node 22.12 or later** (`.nvmrc`). The Vanilla Extract Turbopack plugin fails on Node 20.10.

## Conventions

Folder layout. The tree shows what exists; this is where new code goes.

- **`app/`**: routes, layouts and Server Actions (`actions.ts` beside the route that uses them). Route-private UI goes in `app/<route>/_components/`. No Supabase calls here except through `lib/data/`.
- **`lib/data/`**: the typed data layer and the only code that calls Supabase tables or RPCs. Server Components, Server Actions and the optimistic reducer's callers import from here. `lib/supabase/` holds the client factories (browser and server).
- **`lib/`**: pure logic (Overdue, ordering, optimistic reducer) with its unit test beside it as `*.test.ts`. Keep it free of React and Supabase imports so it stays testable under Vitest's node environment.
- **`components/`**: shared UI used by more than one route, including design-system primitives.
- **Styles**: Vanilla Extract. A component's `*.css.ts` sits beside it. The global theme contract is `app/theme.css.ts` until the design system task moves it.
- **`supabase/`**: CLI config, `migrations/`, and pgTAP policy tests in `supabase/tests/`.
- **`e2e/`**: Playwright specs (`*.spec.ts`). Vitest ignores this folder.

Tooling gotchas.

- `typescript` is aliased to `@typescript/typescript6` because typescript-eslint cannot load TypeScript 7. `npm run typecheck` still runs the TypeScript 7 `tsc`, from the `@typescript/native` alias. Drop both aliases once typescript-eslint supports 7.1 or later.
- Linting is `eslint .` (flat config). `next lint` no longer exists in Next 16.
- `npm run test:e2e` builds and serves the production build, so it needs `npx playwright install chromium` once.
- Formatting is Prettier (`npm run format`). `eslint-config-prettier` turns off conflicting lint rules.
