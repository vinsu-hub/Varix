"use client";

import { useRef, type ReactNode } from "react";

/**
 * Subtle pointer-tracked 3D tilt. Wraps a Card (or Link>Card) so the card's
 * own hover states (translateY, border, shadow) keep working independently —
 * this only rotates the outer box in 3D space, it doesn't touch `transform`
 * on the child.
 */
export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--tilt-x", `${(py * -6).toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${(px * 6).toFixed(2)}deg`);
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  );
}
