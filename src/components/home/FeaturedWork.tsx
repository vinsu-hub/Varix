import Link from "next/link";
import { ViewTransition } from "react";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { TiltCard } from "@/components/ui/TiltCard";
import { projects } from "@/lib/data/projects";


const serviceTagLabels: Record<string, string> = {
  "web-development": "Web",
  "mobile-app-development": "Mobile",
  "ai-automation": "AI",
  "rag-document-intelligence": "RAG",
  "custom-embedded-systems": "Embedded",
  "architecture-consulting": "Consulting",
};

export function FeaturedWork() {
  const featured = projects.filter((project) => project.featured);

  return (
    <Section className="bg-surface/40">
      <AnimateInView>
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
            Featured work
          </h2>
          <Link href="/work" className="text-muted hover:text-foreground text-sm">
            View all work →
          </Link>
        </div>
      </AnimateInView>

      <div className="mt-8 grid max-w-5xl gap-4 sm:grid-cols-2">
        {featured.map((project, i) => (
          <AnimateInView key={project.slug} delay={i * 100}>
            <TiltCard>
              <Link href={`/work/${project.slug}`} className="group block">
                <Card className="h-full overflow-hidden">
                  {project.image && (
                    <ViewTransition name={`project-${project.slug}`} share="morph" default="none">
                      <div className="image-reveal relative mb-4 h-40 w-full overflow-hidden rounded-lg">
                        <img
                          src={project.image}
                          alt={project.imageAlt || project.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </ViewTransition>
                  )}
                  <p className="text-muted font-mono text-xs">
                    {project.client} · {project.year}
                  </p>
                  <h3 className="text-foreground mt-2 text-xl font-medium">
                    {project.title}
                  </h3>
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
            </TiltCard>
          </AnimateInView>
        ))}
      </div>
    </Section>
  );
}
