import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";

export function CtaSection() {
  return (
    <Section>
      <div className="border-border bg-surface rounded-(--radius-card) border px-8 py-16 text-center sm:px-16">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          Have a project in mind?
        </h2>
        <p className="text-muted mx-auto mt-4 max-w-xl">
          Tell us what you&apos;re building. We&apos;ll get back to you within a couple of
          business days.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/contact">Start a project</Button>
        </div>
      </div>
    </Section>
  );
}
