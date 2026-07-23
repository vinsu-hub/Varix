"use client";

import { Calendar } from "lucide-react";

type MeetingButtonProps = {
  variant?: "primary" | "secondary";
  className?: string;
  children?: React.ReactNode;
};

export function MeetingButton({
  variant = "secondary",
  className = "",
  children,
}: MeetingButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand hover:scale-[1.03] hover:shadow-lg hover:shadow-brand/20";

  const variants = {
    primary: "bg-brand text-brand-foreground hover:opacity-90",
    secondary: "border border-border text-foreground hover:border-brand hover:text-brand",
  };

  return (
    <a
      href="mailto:hello@varixph.com?subject=Meeting%20Request%20%E2%80%94%20Varix"
      className={`${base} ${variants[variant]} ${className}`}
    >
      <Calendar size={16} strokeWidth={2.5} />
      {children ?? "Set a Meeting"}
    </a>
  );
}
