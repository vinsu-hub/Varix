import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: `${siteConfig.name}'s terms of service.`,
});

export default function TermsPage() {
  return (
    <Section className="pt-28 sm:pt-36">
      <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
        Terms of Service
      </h1>
      <p className="text-accent mt-4 text-sm">
        [PLACEHOLDER — replace with real legal copy before launch]
      </p>

      <div className="text-muted mt-8 max-w-2xl space-y-6">
        <p>
          This is placeholder text. {siteConfig.name} has not yet published real terms of
          service. Replace this page with legal copy reviewed by counsel before this site
          goes live, covering at minimum: acceptable use of the site, intellectual
          property ownership for client engagements, limitation of liability, and
          governing law/jurisdiction.
        </p>
        <p>Last updated: [PLACEHOLDER DATE]</p>
      </div>
    </Section>
  );
}
