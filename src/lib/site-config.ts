/**
 * Single source of truth for site-wide identity used across metadata,
 * OG tags, sitemap, and layout. Update here once real domain/copy lands —
 * nothing else should hardcode these values.
 */
export const siteConfig = {
  name: "Varix",
  tagline: "Websites and software, built with intent.",
  description:
    "Varix is a website and software development studio. We design and build marketing sites, web apps, and custom software for teams that need to ship something real.",
  // PLACEHOLDER — swap once DNS is pointed and the real domain is live.
  url: "https://www.varix.work",
  email: "hello@varix.work",
  links: {
    // PLACEHOLDER — fill in real social/profile links when they exist.
    github: "https://github.com/varix",
  },
} as const;

export type SiteConfig = typeof siteConfig;
