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
          {/* PLACEHOLDER — replace with the real company story once written. */}
          <p>
            Varix started with a simple frustration: too many client projects turn into
            slow builds, vague scopes, and handoffs nobody wants to own. We build the
            studio we wished existed — small, direct, and technical enough to make good
            calls without a committee.
          </p>
          <p>
            Our mission is to ship software and websites that hold up in production, not
            just in a demo — and to be straightforward about scope, timeline, and
            tradeoffs the whole way through.
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
