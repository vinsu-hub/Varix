import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <Section className="bg-surface/40">
      <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl animate-fade-up">
        What clients say
      </h2>

      <div className="mt-8 grid max-w-5xl gap-4 sm:grid-cols-2">
        {testimonials.map((testimonial, i) => (
          <Card key={testimonial.author} className="animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
            <p className="text-foreground text-lg">“{testimonial.quote}”</p>
            <p className="text-muted mt-4 text-sm">
              {testimonial.author} · {testimonial.role}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
