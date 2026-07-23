import type { Testimonial } from "@/types";

/**
 * Outcome summaries, not collected client quotes — no one at Farmsy or SSA has
 * signed off on being quoted. Written as Varix's own description of delivered
 * work (verifiable facts: live on Google Play, 8,000+ farms, etc.), not as
 * words put in a named person's mouth. Swap for real, consented quotes
 * (with a named person) as soon as they're collected.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Took Farmsy from an idea to a platform people use every week — 8,000+ farms mapped, live on Google Play, web and mobile shipped as one build.",
    author: "Farmsy",
    role: "Web + iOS/Android build",
  },
  {
    quote:
      "Built Summit Sports Academy a web presence that matches the level of what they're building on the ground for young athletes in Los Baños.",
    author: "Summit Sports Academy",
    role: "Nonprofit web platform",
  },
];
