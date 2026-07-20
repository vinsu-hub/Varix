import { createClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client for Server Components / Server Actions.
 * Uses the anon key — RLS policies (see supabase/schema.sql) are what
 * actually restrict access, this client is never given a service-role key.
 *
 * Returns null when env vars aren't configured yet, so pages can render a
 * graceful empty state instead of crashing before Supabase is wired up.
 */
export function getSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return null;
  }

  return createClient(url, anonKey, {
    auth: { persistSession: false },
  });
}
