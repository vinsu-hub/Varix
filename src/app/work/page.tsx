import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/work/ProjectCard";
import { Card } from "@/components/ui/Card";
import { projects } from "@/lib/data/projects";
import { buildMetadata } from "@/lib/seo";
import { Plus } from "lucide-react";

export const metadata = buildMetadata({
  title: "Work",
  description: "Case studies from recent Varix client projects.",
});

export default function WorkPage() {
  return (
    <>
      <Section className="pt-14 sm:pt-18">
        <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
          Work
        </h1>
        <p className="text-muted mt-4 max-w-2xl text-lg">
          Products we&apos;ve engineered. Outcomes we&apos;ve delivered.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          <Card className="flex flex-col items-center justify-center border-dashed text-center">
            <Plus className="text-muted mb-3 h-8 w-8" />
            <p className="text-muted text-sm font-medium">More projects coming soon</p>
          </Card>
        </div>
      </Section>
    </>
  );
}
