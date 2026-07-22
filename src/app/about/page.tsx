import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { team } from "@/lib/data/team";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description: "Varix's story, mission, and the people behind the work.",
});

export default function AboutPage() {
  return (
    <>
      <Section className="pt-28 sm:pt-36">
        <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
          About Varix
        </h1>
        <div className="text-muted mt-6 max-w-2xl space-y-4 text-lg">
          {/* PLACEHOLDER — replace once a longer-form story is written; this reflects
              Mission & Vision / Voice & Positioning as currently documented. */}
          <p>
            Varix designs intelligent, adaptive systems — web platforms, AI automation,
            and mobile apps — that evolve as fast as the businesses they serve. Most
            software gets built once and then fights the business it was meant to serve;
            we build infrastructure that&apos;s meant to change.
          </p>
          <p>
            We want to be the technical partner organizations turn to when they stop
            treating AI automation as a bolt-on tool and start treating it as the
            operating core of how the business runs — starting from Los Baños, built for
            Southeast Asia and global scale.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          Team
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <Card key={member.name}>
              <h3 className="text-foreground text-lg font-medium">{member.name}</h3>
              <p className="text-accent mt-1 text-sm">{member.role}</p>
              <p className="text-muted mt-3 text-sm">{member.bio}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
