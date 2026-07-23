import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { services } from "@/lib/data/services";

export function ServicesOverview() {
  return (
    <Section>
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl animate-fade-up">
          What we do
        </h2>
        <Link href="/services" className="text-muted hover:text-foreground text-sm">
          All services →
        </Link>
      </div>

      <div className="mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <div key={service.slug} className="animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
            <Card className="flex flex-col h-full">
              <h3 className="text-foreground text-lg font-medium">{service.name}</h3>
              <p className="text-muted mt-2 flex-1 text-sm">{service.summary}</p>
              <Link
                href={`/services#${service.slug}`}
                className="text-brand mt-4 text-sm hover:opacity-80"
              >
                Learn more →
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
