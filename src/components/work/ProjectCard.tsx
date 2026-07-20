import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="block">
      <Card className="hover:border-brand h-full transition-colors">
        <p className="text-muted font-mono text-xs">
          {project.client} · {project.year}
        </p>
        <h3 className="text-foreground mt-2 text-xl font-medium">{project.title}</h3>
        <p className="text-muted mt-3 text-sm">{project.summary}</p>
      </Card>
    </Link>
  );
}
