/**
 * Single source of truth for site-wide identity used across metadata,
 * OG tags, sitemap, and layout. Update here once real domain/copy lands —
 * nothing else should hardcode these values.
 */
export const siteConfig = {
  name: "Varix",
  tagline: "Engineered to Adapt.",
  description:
    "Web development and AI automation agency building adaptive digital infrastructure — full-stack web platforms, AI/automation systems, and native mobile apps — delivered as one coherent system.",
  url: "https://www.varix.work",
  email: "hello@varixph.com",
  links: {
    github: "https://github.com/vinsu-hub/Varix",
  },
} as const;

export type SiteConfig = typeof siteConfig;
