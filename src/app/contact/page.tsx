import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { HeroBackground } from "@/components/home/HeroBackground";
import { ContactForm } from "@/components/contact/ContactForm";
import { QuickInquiry } from "@/components/contact/QuickInquiry";
import { siteConfig } from "@/lib/site-config";
import { team } from "@/lib/data/team";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Varix about a web, AI automation, mobile app, or RAG project.",
});

export default function ContactPage() {
  return (
    <>
      <section className="relative min-h-[28rem] overflow-hidden sm:min-h-[32rem]">
        {/* Only shown at lg:+ — below that the text column fills the full
            width and there's no empty space for the video to fill. */}
        <div className="absolute inset-0 hidden lg:block">
          <HeroBackground />
        </div>
        <Container className="relative z-10 flex min-h-[28rem] flex-col justify-center sm:min-h-[32rem]">
          <div className="max-w-xl">
            <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s talk
            </h1>
            <p className="text-muted mt-4 max-w-md text-lg">
              Tell us about your project and we&apos;ll get back to you within 2-3 business days.
            </p>

            <a
              href={`mailto:${siteConfig.email}?subject=Project%20Inquiry`}
              className="text-brand mt-6 inline-block text-sm font-medium hover:opacity-80"
            >
              {siteConfig.email}
            </a>

            <p className="text-muted mt-8 text-sm">
              Based in Los Baños, Laguna, Philippines
            </p>

            <div className="mt-4 space-y-3">
              {team.map((member) => (
                <div key={member.name} className="text-sm">
                  <p className="text-foreground">
                    {member.name}
                    <span className="text-muted">, {member.role}</span>
                  </p>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-brand hover:opacity-80"
                    >
                      {member.email}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Section noTopPadding>
        <div className="max-w-3xl">
          <div className="mb-8">
            <QuickInquiry />
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
