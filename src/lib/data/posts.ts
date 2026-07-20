import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { Post } from "@/types";

/**
 * Returns [] when Supabase isn't configured yet (no env vars) or the query
 * fails, so the blog index can render an empty state instead of crashing
 * before a real Supabase project is wired up.
 */
export async function getPublishedPosts(): Promise<Post[]> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("posts")
    .select("id, slug, title, excerpt, content, cover_image, published_at, author, tags")
    .not("published_at", "is", null)
    .lte("published_at", new Date().toISOString())
    .order("published_at", { ascending: false });

  if (error || !data) return [];
  return data as Post[];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("posts")
    .select("id, slug, title, excerpt, content, cover_image, published_at, author, tags")
    .eq("slug", slug)
    .not("published_at", "is", null)
    .lte("published_at", new Date().toISOString())
    .maybeSingle();

  if (error || !data) return null;
  return data as Post;
}
