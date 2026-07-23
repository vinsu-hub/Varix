import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { HeroBackground } from "@/components/home/HeroBackground";
import { ProjectCard } from "@/components/work/ProjectCard";
import { Card } from "@/components/ui/Card";
import { AnimateInView } from "@/components/ui/AnimateInView";
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
      <section className="relative min-h-[28rem] overflow-hidden sm:min-h-[32rem]">
        {/* Only shown at lg:+ — below that the text column fills the full
            width and there's no empty space for the video to fill. */}
        <div className="absolute inset-0 hidden lg:block">
          <HeroBackground />
        </div>
        <Container className="relative z-10 flex min-h-[28rem] flex-col justify-center sm:min-h-[32rem]">
          <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
            Work
          </h1>
          <p className="text-muted mt-4 max-w-xl text-lg">
            Products we&apos;ve engineered. Outcomes we&apos;ve delivered.
          </p>
        </Container>
      </section>

      <Section noTopPadding>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <AnimateInView key={project.slug} delay={i * 100}>
              <ProjectCard project={project} />
            </AnimateInView>
          ))}
          <AnimateInView delay={projects.length * 100}>
            <Card className="flex h-full flex-col items-center justify-center border-dashed text-center">
              <Plus className="text-muted mb-3 h-8 w-8" />
              <p className="text-muted text-sm font-medium">More projects coming soon</p>
            </Card>
          </AnimateInView>
        </div>
      </Section>
    </>
  );
}
