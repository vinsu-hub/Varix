import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { HeroBackground } from "@/components/home/HeroBackground";
import { LiquidGlassCard } from "@/components/home/LiquidGlassCard";

export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <HeroBackground />

      <Container className="relative z-10 flex h-full flex-col items-start justify-center">
        <LiquidGlassCard />

        <p className="font-[family-name:var(--font-plus-jakarta)] text-xs font-bold uppercase tracking-wider text-brand animate-fade-up" style={{ animationDelay: "100ms" }}>
          Web · AI Automation · Mobile
        </p>

        <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-inter)] text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up" style={{ animationDelay: "200ms" }}>
          ENGINEERED TO<span className="text-brand"> ADAPT.</span>
        </h1>

        <p className="mt-6 max-w-[512px] font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/70 animate-fade-up" style={{ animationDelay: "300ms" }}>
          We build the adaptable infrastructure — web platforms, AI automation,
          and mobile apps — that lets growing businesses run on logic, not
          guesswork.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-[family-name:var(--font-inter)] text-sm font-bold uppercase text-brand-foreground transition-opacity hover:opacity-90 animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          Start a project
          <ArrowRight size={16} strokeWidth={2.5} />
        </Link>
      </Container>
    </section>
  );
}
