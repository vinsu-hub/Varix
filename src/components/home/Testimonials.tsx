import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <Section className="bg-surface/40">
      <AnimateInView>
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          What clients say
        </h2>
      </AnimateInView>

      <div className="mt-8 grid max-w-5xl gap-4 sm:grid-cols-2">
        {testimonials.map((testimonial, i) => (
          <AnimateInView key={testimonial.author} delay={i * 100}>
            <Card>
              <p className="text-foreground text-lg">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 font-mono text-xs font-semibold text-brand">
                  {testimonial.author[0]}
                </span>
                <p className="text-muted text-sm">
                  {testimonial.author} · {testimonial.role}
                </p>
              </div>
            </Card>
          </AnimateInView>
        ))}
      </div>
    </Section>
  );
}
