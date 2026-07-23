"use client";

import { useEffect, useRef } from "react";

/**
 * Connecting line for the Process timeline. Falls back to a one-shot
 * IntersectionObserver draw-in; upgrades to a scroll-linked draw via
 * `animation-timeline: view()` on supporting browsers (see globals.css).
 */
export function ProcessLine({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`line-draw ${className}`} />;
}
