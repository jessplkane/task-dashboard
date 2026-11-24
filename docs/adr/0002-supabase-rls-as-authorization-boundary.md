# Supabase, with row-level security as the single authorization boundary

The backend is Supabase (Postgres and Auth). "A User sees only the Projects they are a Member of" and the Owner/Member permissions are enforced by row-level security policies in the database, not by checks in Server Actions or UI code, so no code path can bypass them. We chose this over Firebase, whose document model needs membership duplicated onto each document and rules, and over a self-built API with SQLite and Auth.js, which means owning sessions and authorization.

## Consequences

Database policies are the security surface, so they need their own tests. Leaving Supabase later means rewriting every policy as application code.
