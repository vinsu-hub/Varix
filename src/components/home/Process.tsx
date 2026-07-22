import { Section } from "@/components/layout/Section";
import { processSteps } from "@/lib/data/process";

export function Process() {
  return (
    <Section>
      <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
        How we work
      </h2>

      <ol className="mt-8 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((item) => (
          <li key={item.step} className="border-border border-l pl-5">
            <span className="text-accent font-mono text-sm">{item.step}</span>
            <h3 className="text-foreground mt-2 text-lg font-medium">{item.title}</h3>
            <p className="text-muted mt-2 text-sm">{item.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
