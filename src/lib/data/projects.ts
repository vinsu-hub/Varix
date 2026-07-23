import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "farmsy",
    title: "Farmsy",
    client: "Farmsy",
    summary:
      "Cross-platform iOS & Android app plus web platform connecting users with 8,000+ verified farms across the Netherlands and Belgium.",
    description:
      "Full end-to-end product build: web platform plus native iOS and Android apps built with cross-platform mobile development. Farmsy connects users with 8,000+ verified farms across the Netherlands and Belgium — farm shops, organic producers, and pick-your-own locations — with map-based discovery, verified/SKAL-certified organic listings, and direct farm contact details. Includes a subscription model (yearly and lifetime tiers) and is live on Google Play, with iOS in progress.",
    services: ["web-development", "mobile-app-development"],
    year: "2026",
    featured: true,
    link: "https://www.farmsy.app/",
    image: "/projects/farmsy.jpg",
    imageAlt: "Farmsy homepage showing the interactive farm map and native iOS app screen",
  },
  {
    slug: "summit-sports-academy",
    title: "Summit Sports Academy",
    client: "Summit Sports Academy",
    summary:
      "Youth athlete development platform for a nonprofit in Los Baños, Laguna.",
    description:
      "Web platform built for a youth athlete development nonprofit based in Los Baños, Laguna, supporting program information, athlete engagement, and organizational visibility for a growing sports academy.",
    services: ["web-development"],
    year: "2026",
    featured: true,
    link: "https://summit-sports-academy.vercel.app/",
    image: "/projects/summit-sports-academy.jpg",
    imageAlt: "Summit Sports Academy website homepage hero section",
  },
  {
    slug: "tessora",
    title: "Tessora",
    client: "Varix (Internal Product)",
    summary:
      "Desktop-first document intelligence and knowledge management platform.",
    description:
      "Flagship internal product. Desktop-first document intelligence and knowledge management platform built on a Tauri + ChromaDB + SQLite + Groq API stack. Designed around the principle that a business's documents should be searchable, verifiable, and instantly understandable as one coherent picture, not a pile of disconnected files. \"Every document. One picture.\"",
    services: ["rag-document-intelligence", "web-development"],
    year: "2026",
    featured: false,
    image: "/projects/tessora.jpg",
    imageAlt: "Tessora logo and tagline, \"From fragments to foresight.\"",
  },
  {
    slug: "rag-poverty-intervention",
    title: "RAG for Multidimensional Poverty Intervention",
    client: "Los Baños, Laguna",
    summary:
      "Retrieval-augmented generative AI system for poverty intervention across health, education, and living standards.",
    description:
      "A retrieval-augmented generative AI system for multidimensional poverty intervention across health, education, and living standards for the barangays of Los Baños, Laguna, Philippines. The system integrates cross-domain data sources to provide grounded, verifiable insights for community-level decision-making — from health indicators and educational access to housing and living standard metrics.",
    services: ["rag-document-intelligence", "architecture-consulting"],
    year: "2026",
    featured: true,
    image: "/projects/rag-poverty-intervention.jpg",
    imageAlt: "MPI RAG System interface showing the Los Baños barangay map and poverty-intervention recommendation panel",
  },
];
