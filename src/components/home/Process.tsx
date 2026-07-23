import { Section } from "@/components/layout/Section";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { ProcessLine } from "@/components/ui/ProcessLine";
import { processSteps } from "@/lib/data/process";

export function Process() {
  return (
    <Section>
      <AnimateInView>
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          How we work
        </h2>
      </AnimateInView>

      <div className="relative mt-12 max-w-5xl">
        {/* Connecting line + step nodes — desktop only, mirrors the 4-col grid below */}
        <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-px lg:block">
          <ProcessLine className="bg-brand/40 absolute inset-y-0 left-[12.5%] right-[12.5%] h-px" />
          {processSteps.map((_, i) => (
            <span
              key={i}
              className="border-background bg-brand absolute top-1/2 h-2 w-2 rounded-full border-2"
              style={{ left: `${12.5 + i * 25}%`, transform: "translate(-50%, -50%)" }}
            />
          ))}
        </div>

        <ol className="grid gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-10">
          {processSteps.map((item, i) => (
            <AnimateInView key={item.step} delay={i * 100}>
              <li className="border-border border-l pl-5 lg:border-l-0 lg:pl-0 lg:text-center">
                <span className="text-accent font-mono text-sm">{item.step}</span>
                <h3 className="text-foreground mt-2 text-lg font-medium">{item.title}</h3>
                <p className="text-muted mt-2 text-sm">{item.description}</p>
              </li>
            </AnimateInView>
          ))}
        </ol>
      </div>
    </Section>
  );
}
