import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { Project } from "@/types";

const serviceTagLabels: Record<string, string> = {
  "web-development": "Web",
  "mobile-app-development": "Mobile",
  "ai-automation": "AI",
  "rag-document-intelligence": "RAG",
  "custom-embedded-systems": "Embedded",
  "architecture-consulting": "Consulting",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <Card className="h-full overflow-hidden">
        {project.image && (
          <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.imageAlt || project.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <p className="text-muted font-mono text-xs">
          {project.client} · {project.year}
        </p>
        <h3 className="text-foreground mt-2 text-xl font-medium">{project.title}</h3>
        <p className="text-muted mt-3 text-sm">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.services.map((slug) => (
            <span
              key={slug}
              className="bg-brand/10 text-brand border-brand/20 rounded-full border px-2.5 py-0.5 font-mono text-xs"
            >
              {serviceTagLabels[slug] || slug}
            </span>
          ))}
        </div>
      </Card>
    </Link>
  );
}
