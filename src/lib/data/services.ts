import type { Service } from "@/types";

/**
 * Add a new service line here — nav, services page, and home overview all
 * render from this list, no other code changes needed.
 */
export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    summary: "Marketing sites and web platforms that load fast and scale with you.",
    description:
      "Custom-built websites and web platforms designed to scale — from marketing sites to full product infrastructure. Fast, responsive, and built on modern frameworks that won't lock you into rigid templates.",
    deliverables: [
      "Marketing & brand websites",
      "Web app front-ends & product infrastructure",
      "Content-managed blogs & documentation sites",
      "Performance & SEO audits",
    ],
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    summary: "Workflow systems (n8n) that eliminate manual busywork.",
    description:
      "We design workflow systems that connect your tools, eliminate manual busywork, and let your team focus on decisions instead of data entry. From lead routing to multi-step LLM pipelines, we build automation that adapts as your business grows — not brittle scripts that break the moment something changes.",
    deliverables: [
      "n8n workflow design & implementation",
      "Lead routing & CRM automation",
      "Multi-step LLM pipelines",
      "Tool & API integrations",
    ],
  },
  {
    slug: "ios-development",
    name: "iOS App Development",
    summary: "Native iOS apps built with performance and usability at the core.",
    description:
      "Native iOS apps built with performance and usability at the core. Whether it's a customer-facing product or an internal tool, we design mobile experiences that feel intuitive from the first tap.",
    deliverables: [
      "Native iOS product builds",
      "Customer-facing & internal apps",
      "App Store launch support",
      "UI/UX for mobile",
    ],
  },
  {
    slug: "ai-integration-rag",
    name: "AI Integration & RAG Systems",
    summary: "Retrieval-augmented systems grounded in your actual business data.",
    description:
      "Beyond simple chatbots — we build retrieval-augmented systems that let your AI tools actually understand your business data, documents, and processes, so responses are accurate and grounded, not guessed.",
    deliverables: [
      "Retrieval-augmented generation (RAG) systems",
      "Document & knowledge-base search",
      "LLM integration into existing products",
      "Grounded, permission-aware AI tools",
    ],
  },
  {
    slug: "architecture-consulting",
    name: "System Architecture & Consulting",
    summary: "A technical roadmap before you write a single line of code.",
    description:
      "Not sure where automation fits in your stack? We map your existing processes, identify where AI and automation deliver real ROI, and design the technical roadmap before writing a single line of code.",
    deliverables: [
      "Process mapping & technical audits",
      "AI/automation ROI assessment",
      "Technical roadmap design",
      "Architecture consulting for existing teams",
    ],
  },
];
