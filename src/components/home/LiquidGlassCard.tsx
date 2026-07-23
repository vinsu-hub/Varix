export function LiquidGlassCard() {
  return (
    <div className="liquid-glass mb-6 inline-block w-[200px] rounded-xl p-5 animate-fade-up" style={{ animationDelay: "0ms" }}>
      <span className="font-mono text-[14px] text-white/60">[ EST. 2024 ]</span>
      <h3 className="mt-2 text-[18px] leading-snug text-white">
        Built to{" "}
        <span className="font-[family-name:var(--font-instrument-serif)] italic">
          Adapt
        </span>
      </h3>
      <p className="mt-2 text-[11px] leading-relaxed text-white/50">
        Web, AI automation, and mobile — engineered for growth.
      </p>
    </div>
  );
}
