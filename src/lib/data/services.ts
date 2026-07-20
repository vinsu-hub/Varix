import type { Service } from "@/types";

/**
 * Add a new service line here — nav, services page, and home overview all
 * render from this list, no other code changes needed.
 */
export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    summary: "Marketing sites and web apps that load fast and convert.",
    description:
      "We design and build responsive, high-performance websites — from marketing sites to content-driven platforms — using modern frameworks and a strong eye for craft. Every build is optimized for speed, SEO, and accessibility from day one.",
    deliverables: [
      "Marketing & brand websites",
      "Content-managed blogs & documentation sites",
      "Web app front-ends",
      "Performance & SEO audits",
    ],
  },
  {
    slug: "software-development",
    name: "Software Development",
    summary: "Custom software and internal tools built around how you work.",
    description:
      "We build custom software when off-the-shelf tools stop fitting — internal tools, dashboards, APIs, and integrations that connect the systems you already rely on. We favor boring, maintainable technology over trend-chasing.",
    deliverables: [
      "Internal tools & admin dashboards",
      "APIs & third-party integrations",
      "Automation & workflow tooling",
      "Technical architecture consulting",
    ],
  },
  {
    slug: "product-design",
    name: "Product Design",
    // PLACEHOLDER service line — replace or remove once real service scope is confirmed.
    summary: "Interface design that holds up once real data hits it.",
    description:
      "We design interfaces with implementation in mind — wireframes and high-fidelity design that a real engineering team can actually build, not just present. Useful as a standalone engagement or paired with a build.",
    deliverables: [
      "Product & UX design",
      "Design systems",
      "Prototyping",
      "Design QA during build",
    ],
  },
];
