import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `${siteConfig.name}'s privacy policy.`,
});

export default function PrivacyPage() {
  return (
    <Section className="pt-28 sm:pt-36">
      <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="text-accent mt-4 text-sm">
        [PLACEHOLDER — replace with real legal copy before launch]
      </p>

      <div className="text-muted mt-8 max-w-2xl space-y-6">
        <p>
          This is placeholder text. {siteConfig.name} has not yet published a real privacy
          policy. Replace this page with legal copy reviewed by counsel before this site
          goes live, covering at minimum: what data is collected (including the contact
          form and any analytics), how it is stored and used, third parties it may be
          shared with (e.g. Supabase, Vercel), how long it is retained, and how users can
          request deletion.
        </p>
        <p>Last updated: [PLACEHOLDER DATE]</p>
      </div>
    </Section>
  );
}
