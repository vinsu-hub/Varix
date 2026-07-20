import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/work/ProjectCard";
import { projects } from "@/lib/data/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Work",
  description: "Case studies from recent Varix client projects.",
});

export default function WorkPage() {
  return (
    <>
      <Section className="pt-28 sm:pt-36">
        <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
          Work
        </h1>
        <p className="text-muted mt-4 max-w-2xl text-lg">
          A sample of projects we&apos;ve built. Case studies below are placeholders.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </>
  );
}
