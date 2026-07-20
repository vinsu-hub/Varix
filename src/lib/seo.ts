import type { Metadata } from "next";

/**
 * Builds page-level metadata with matching Open Graph/Twitter tags, so
 * every page shares the same title/description across all three instead of
 * only the root layout's defaults showing up in social previews.
 */
export function buildMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata {
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}
