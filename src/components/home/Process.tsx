import { Section } from "@/components/layout/Section";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { processSteps } from "@/lib/data/process";

export function Process() {
  return (
    <Section>
      <AnimateInView>
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          How we work
        </h2>
      </AnimateInView>

      <ol className="mt-8 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((item, i) => (
          <AnimateInView key={item.step} delay={i * 100}>
            <li className="border-border border-l pl-5">
              <span className="text-accent font-mono text-sm">{item.step}</span>
              <h3 className="text-foreground mt-2 text-lg font-medium">{item.title}</h3>
              <p className="text-muted mt-2 text-sm">{item.description}</p>
            </li>
          </AnimateInView>
        ))}
      </ol>
    </Section>
  );
}
