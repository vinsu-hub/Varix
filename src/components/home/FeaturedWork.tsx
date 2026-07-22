import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { projects } from "@/lib/data/projects";

export function FeaturedWork() {
  const featured = projects.filter((project) => project.featured);

  return (
    <Section className="bg-surface/40">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          Featured work
        </h2>
        <Link href="/work" className="text-muted hover:text-foreground text-sm">
          View all work →
        </Link>
      </div>

      <div className="mt-8 grid max-w-5xl gap-4 sm:grid-cols-2">
        {featured.map((project) => (
          <Link key={project.slug} href={`/work/${project.slug}`}>
            <Card className="hover:border-brand h-full transition-colors">
              <p className="text-muted font-mono text-xs">
                {project.client} · {project.year}
              </p>
              <h3 className="text-foreground mt-2 text-xl font-medium">
                {project.title}
              </h3>
              <p className="text-muted mt-3 text-sm">{project.summary}</p>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
