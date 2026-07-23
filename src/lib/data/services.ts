import type { Service } from "@/types";

/**
 * Add a new service line here — nav, services page, and home overview all
 * render from this list, no other code changes needed.
 */
export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    summary: "Custom-built websites and platforms designed to scale.",
    description:
      "Custom-built websites and web platforms designed to scale — from marketing sites to full product infrastructure. Built on modern frameworks, optimized for performance, and designed to grow with the business rather than lock it into a rigid template.",
    deliverables: [
      "Marketing & brand websites",
      "Web app front-ends & product infrastructure",
      "Content-managed blogs & documentation sites",
      "Performance & SEO optimization",
    ],
  },
  {
    slug: "ai-automation",
    name: "AI Automation (n8n)",
    summary: "Workflow systems that eliminate manual busywork.",
    description:
      "Workflow systems that connect tools, eliminate manual busywork, and let teams focus on decisions instead of data entry — from lead routing to multi-step LLM pipelines. Automations are built to adapt as a business grows, not brittle scripts that break the moment something changes.",
    deliverables: [
      "n8n workflow design & implementation",
      "Lead routing & CRM automation",
      "Multi-step LLM pipelines",
      "Tool & API integrations",
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development (iOS & Android)",
    summary: "Native and cross-platform mobile apps built for performance.",
    description:
      "Native and cross-platform mobile apps built with performance and usability at the core — from customer-facing consumer products to internal operational tools.",
    deliverables: [
      "Native iOS & Android product builds",
      "Cross-platform mobile apps",
      "App Store & Google Play launch support",
      "UI/UX for mobile",
    ],
  },
  {
    slug: "rag-document-intelligence",
    name: "RAG & Document Intelligence Systems",
    summary: "Retrieval-augmented systems grounded in your actual business data.",
    description:
      "Retrieval-augmented systems that let AI tools actually understand a business's own documents and data, rather than guessing. Three tiers of capability — from hybrid search to fully agentic retrieval.",
    deliverables: [
      "Hybrid-Search RAG with Citation Verification",
      "Multi-Modal Document RAG (OCR, scanned PDFs, tables)",
      "Agentic RAG with query reformulation & retry",
      "Document validation & confidence-gated review",
    ],
  },
  {
    slug: "custom-embedded-systems",
    name: "Custom & Embedded Systems",
    summary: "From Arduino firmware to Discord bots — if it can be modeled, it can be automated.",
    description:
      "Full-stack beyond web and mobile — from low-level embedded systems (Arduino firmware, sensor integration, hardware state machines) to fully automated software bots for platforms like Discord and Slack. If a business process can be modeled, it can likely be automated.",
    deliverables: [
      "Arduino firmware & sensor integration",
      "Hardware state machines",
      "Discord & Slack automation bots",
      "Custom system integrations",
    ],
  },
  {
    slug: "architecture-consulting",
    name: "System Architecture & Consulting",
    summary: "A technical roadmap before you write a single line of code.",
    description:
      "Technical roadmap before writing code. Maps existing processes, identifies where AI and automation deliver real ROI, and designs the architecture to get there.",
    deliverables: [
      "Process mapping & technical audits",
      "AI/automation ROI assessment",
      "Technical roadmap design",
      "Architecture consulting for existing teams",
    ],
  },
];
