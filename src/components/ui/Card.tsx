import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`border-border bg-surface rounded-(--radius-card) border p-6 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
