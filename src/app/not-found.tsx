import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";

export default function NotFound() {
  return (
    <Section className="pt-28 text-center sm:pt-36">
      <p className="text-accent font-mono text-sm">404</p>
      <h1 className="text-foreground mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        Page not found
      </h1>
      <p className="text-muted mx-auto mt-4 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8 flex justify-center">
        <Button href="/">Back to home</Button>
      </div>
    </Section>
  );
}
