import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { Section } from "@/components/layout/Section";
import { services } from "@/lib/data/services";
import { projects } from "@/lib/data/projects";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {};
  }

  return buildMetadata({ title: project.title, description: project.summary });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const serviceNames = project.services
    .map((serviceSlug) => services.find((s) => s.slug === serviceSlug)?.name)
    .filter((name): name is string => Boolean(name));

  return (
    <Section className="pt-28 sm:pt-36">
      <Link href="/work" className="text-muted hover:text-foreground text-sm">
        ← All work
      </Link>

      <p className="text-muted mt-6 font-mono text-xs">
        {project.client} · {project.year}
      </p>
      <h1 className="text-foreground mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
        {project.title}
      </h1>

      <div className="mt-4 flex flex-wrap gap-2">
        {serviceNames.map((name) => (
          <span
            key={name}
            className="border-border text-muted rounded-full border px-3 py-1 text-xs"
          >
            {name}
          </span>
        ))}
      </div>

      {project.image && (
        <ViewTransition name={`project-${project.slug}`} share="morph">
          <div className="border-border relative mt-8 h-64 w-full max-w-3xl overflow-hidden rounded-lg border sm:h-96">
            <img
              src={project.image}
              alt={project.imageAlt || project.title}
              className="h-full w-full object-cover"
            />
          </div>
        </ViewTransition>
      )}

      <p className="text-muted mt-8 max-w-2xl text-lg">{project.description}</p>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand mt-6 inline-block text-sm hover:opacity-80"
        >
          View live site →
        </a>
      )}
    </Section>
  );
}
