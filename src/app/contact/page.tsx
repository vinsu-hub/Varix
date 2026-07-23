import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Varix about a web, AI automation, mobile app, or RAG project.",
});

export default function ContactPage() {
  return (
    <Section className="pt-14 sm:pt-18">
      <div className="max-w-3xl">
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
      </div>

      <div className="mt-10 max-w-3xl">
        <ContactForm />
      </div>
    </Section>
  );
}
