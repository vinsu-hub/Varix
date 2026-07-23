import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { HeroBackground } from "@/components/home/HeroBackground";
import { Card } from "@/components/ui/Card";
import { team } from "@/lib/data/team";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Varix's story, mission, and the people behind the work — web development, AI automation, and mobile apps from Los Baños, Laguna.",
});

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[28rem] overflow-hidden sm:min-h-[32rem]">
        {/* Only shown at lg:+ — below that the text column fills the full
            width and there's no empty space for the video to fill, so it
            would just clash with the text instead of sitting behind it. */}
        <div className="absolute inset-0 hidden lg:block">
          <HeroBackground />
        </div>
        <Container className="relative z-10 flex min-h-[28rem] flex-col justify-center sm:min-h-[32rem]">
          <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
            About Varix
          </h1>
          <div className="text-muted mt-6 max-w-xl space-y-4 text-lg">
            <p>
              Varix is a web development and AI automation agency building adaptive
              digital infrastructure for businesses that are ready to move past
              manual, brittle processes. We specialize in full-stack web platforms,
              AI/automation systems (with deep expertise in n8n and
              retrieval-augmented generation), and native iOS/Android app
              development — delivered as one coherent system rather than
              disconnected freelance parts.
            </p>
            <p>
              Every system has a variable. We build the constant that makes it
              work.
            </p>
          </div>
        </Container>
      </section>

      <Section noTopPadding>
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          Why Varix
        </h2>
        <div className="text-muted mt-6 max-w-2xl space-y-4 text-lg">
          <p>
            <strong className="text-foreground">Full-stack delivery, one team.</strong>{" "}
            Web, mobile, backend, automation, and AI — handled as one integrated
            build instead of stitched-together vendors.
          </p>
          <p>
            <strong className="text-foreground">Real production experience,</strong> not
            just prototypes — Farmsy is live with real users, real payments, and
            real app store presence.
          </p>
          <p>
            <strong className="text-foreground">RAG expertise at every maturity level</strong>{" "}
            — from foundational hybrid search to fully agentic retrieval systems,
            matched to what a client&apos;s data and use case actually need.
          </p>
          <p>
            <strong className="text-foreground">Comfortable across the full technical stack</strong>{" "}
            — from Arduino-level embedded firmware to cloud-hosted automation
            bots, meaning we&apos;re rarely the wrong team for a technical
            problem, regardless of layer.
          </p>
          <p>
            <strong className="text-foreground">Automation-first internally, not just as a pitch.</strong>{" "}
            We run our own operations — client communication, project tracking,
            and progress reporting — through the same n8n and AI-automation
            principles we sell, because we believe in eating our own cooking.
          </p>
        </div>
      </Section>

      <Section noTopPadding>
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          Team
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {team.map((member) => (
            <Card key={member.name}>
              <h3 className="text-foreground text-lg font-medium">
                {member.name}
              </h3>
              <p className="text-accent mt-1 text-sm">{member.role}</p>
              <p className="text-muted mt-3 text-sm">{member.bio}</p>
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="text-brand mt-3 inline-block text-sm hover:opacity-80"
                >
                  {member.email}
                </a>
              )}
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
