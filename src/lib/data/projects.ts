import type { Project } from "@/types";

/**
 * PLACEHOLDER case studies — replace with real client work once available.
 * Adding a project here automatically creates a /work/[slug] detail page.
 */
export const projects: Project[] = [
  {
    slug: "northwind-logistics-platform",
    title: "Northwind Logistics Platform",
    client: "Northwind Logistics",
    summary: "A dispatch and fleet-tracking web app replacing three spreadsheets.",
    description:
      "[PLACEHOLDER CASE STUDY] Northwind was coordinating dispatch across three spreadsheets and a shared inbox. We built a web app for live fleet tracking, driver assignment, and delivery status — cutting dispatch time significantly and giving ops a single source of truth.",
    services: ["software-development", "product-design"],
    year: "2025",
    featured: true,
  },
  {
    slug: "atlas-supply-marketing-site",
    title: "Atlas Supply Marketing Site",
    client: "Atlas Supply Co.",
    summary: "A rebuilt marketing site focused on speed and lead quality.",
    description:
      "[PLACEHOLDER CASE STUDY] Atlas Supply's old site was slow and generated few qualified leads. We rebuilt it with a sharper information architecture, faster load times, and clearer calls to action, aimed squarely at their ideal customer.",
    services: ["web-development"],
    year: "2025",
    featured: true,
  },
  {
    slug: "harbor-books-storefront",
    title: "Harbor Books Storefront",
    client: "Harbor Books",
    summary: "A lightweight storefront and inventory sync for an independent bookstore.",
    description:
      "[PLACEHOLDER CASE STUDY] Harbor Books needed an online storefront that stayed in sync with in-store inventory without extra manual work. We built a lightweight storefront with automated inventory sync and a simple content workflow for staff.",
    services: ["web-development", "software-development"],
    year: "2024",
    featured: false,
  },
];
