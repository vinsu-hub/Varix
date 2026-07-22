/**
 * Single source of truth for site-wide identity used across metadata,
 * OG tags, sitemap, and layout. Update here once real domain/copy lands —
 * nothing else should hardcode these values.
 */
export const siteConfig = {
  name: "Varix",
  tagline: "Engineered to Adapt.",
  description:
    "Varix builds the adaptable infrastructure — web, AI automation, and mobile — that lets growing businesses run on logic, not guesswork.",
  // PLACEHOLDER — swap once DNS is pointed and the real domain is live.
  url: "https://www.varix.work",
  email: "hello@varix.work",
  links: {
    // PLACEHOLDER — fill in real social/profile links when they exist.
    github: "https://github.com/varix",
  },
} as const;

export type SiteConfig = typeof siteConfig;
