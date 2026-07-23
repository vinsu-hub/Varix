import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Web development, software development, and product design — Varix's service lines.",
});

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-28 sm:pt-36">
        <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
          Services
        </h1>
        <p className="text-muted mt-4 max-w-2xl text-lg">
          A short list of what we do well, not a long list of everything we could do.
        </p>
      </Section>

      <Section noTopPadding>
        <div className="space-y-6">
          {services.map((service) => (
            <Card key={service.slug} id={service.slug} className="scroll-mt-24">
              <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
                <div>
                  <h2 className="text-foreground text-2xl font-medium">{service.name}</h2>
                  <p className="text-muted mt-3">{service.description}</p>
                </div>
                <div>
                  <h3 className="text-foreground text-sm font-medium">Includes</h3>
                  <ul className="mt-3 space-y-2">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="text-muted flex items-start gap-2 text-sm"
                      >
                        <span aria-hidden="true" className="text-accent mt-1">
                          —
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/contact">Discuss your project</Button>
        </div>
      </Section>
    </>
  );
}
