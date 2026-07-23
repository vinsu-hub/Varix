import type { CSSProperties, ReactNode } from "react";

export function Card({
  children,
  className = "",
  id,
  style,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      id={id}
      style={style}
      className={`border-border bg-surface rounded-(--radius-card) border p-5 sm:p-6 transition-all duration-200 hover:border-brand/50 hover:shadow-lg hover:shadow-brand/5 ${className}`}
    >
      {children}
    </div>
  );
}
