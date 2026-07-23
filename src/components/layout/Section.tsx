import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";

export function Section({
  children,
  className = "",
  containerClassName = "",
  id,
  noTopPadding = false,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  /**
   * Drops top padding to butt up against a preceding Section. A plain
   * `pt-0` in `className` looks like it should do this but doesn't: at
   * `sm:` and above, `sm:py-20`'s top offset wins the cascade over an
   * unprefixed `pt-0` regardless of source order, so the gap silently
   * stays at 80px. This prop swaps the padding classes outright instead
   * of trying to override one utility with another.
   */
  noTopPadding?: boolean;
}) {
  const padding = noTopPadding ? "pb-14 sm:pb-20" : "py-14 sm:py-20";
  return (
    <section id={id} className={`${padding} ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
