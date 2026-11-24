# 03: Google sign-in and sessions

## Goal

A User can sign in with Google, stay signed in across requests, and sign out. Unauthenticated visitors can't reach app routes.

## Depends on

01, 02 (the profile trigger and RLS are in place).

## User-only prerequisites

Use the `wizard` skill to walk the user through these:

- A hosted Supabase project, with its URL and publishable key put in `.env.local` and the Netlify environment.
- A Google Cloud OAuth client, with the Supabase callback URL as an authorised redirect and the Google provider enabled in the Supabase dashboard.
- Redirect URLs for `http://localhost:3000` and the Netlify URL added in Supabase's Auth settings.

## Scope

- Supabase clients for server and browser using `@supabase/ssr` with cookie sessions. Check the Next 16 docs for the current request-interception convention (it has changed from `middleware.ts`) and use it to refresh sessions.
- Authorise on the server with `getUser()`, never on an unverified session read.
- A sign-in page with a Google button and a "Try the demo" placeholder that task 09 completes. An OAuth callback route. Sign-out.
- Redirect unauthenticated visitors from app routes to sign-in, and signed-in visitors away from sign-in.
- Typed data-layer entry point that later tasks build on: the Supabase client typed with the generated database types.

## Out of scope

Magic link and email-and-password (dropped in the design). Anonymous sign-in (task 09).

## Acceptance

- Signing in with Google locally lands on the app and creates a profile row with the right display name.
- A signed-out request to an app route redirects to sign-in. The session survives a refresh and sign-out ends it.
- An RLS-protected query returns data for a signed-in User and nothing for a signed-out one.
- Sign-in works on the Netlify deploy.

## Handoff

_Not started._
