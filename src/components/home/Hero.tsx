import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <Section className="pt-28 sm:pt-36">
      <div className="animate-fade-up max-w-3xl">
        <p className="text-accent font-mono text-sm">Website & software development</p>
        <h1 className="text-foreground mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          {siteConfig.tagline}
        </h1>
        <p className="text-muted mt-6 max-w-xl text-lg">{siteConfig.description}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact">Start a project</Button>
          <Button href="/work" variant="secondary">
            See our work
          </Button>
        </div>
      </div>
    </Section>
  );
}
