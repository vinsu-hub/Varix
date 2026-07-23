"use client";

import { useState, useCallback } from "react";
import { Calendar } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";

type BookingButtonProps = {
  variant?: "primary" | "secondary";
  className?: string;
  children?: React.ReactNode;
};

const calLink = process.env.NEXT_PUBLIC_CALCOM_LINK;

export function BookingButton({
  variant = "secondary",
  className = "",
  children,
}: BookingButtonProps) {
  const [loading, setLoading] = useState(false);

  const openBooking = useCallback(async () => {
    if (!calLink) {
      window.location.href = "mailto:hello@varixph.com?subject=Discovery%20Call%20Request";
      return;
    }
    setLoading(true);
    try {
      const cal = await getCalApi();
      await cal("modal", { calLink });
    } catch {
      window.open(`https://cal.com/${calLink}`, "_blank", "noopener,noreferrer");
    } finally {
      setLoading(false);
    }
  }, []);

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand hover:scale-[1.03] hover:shadow-lg hover:shadow-brand/20";

  const variants = {
    primary: "bg-brand text-brand-foreground hover:opacity-90",
    secondary: "border border-border text-foreground hover:border-brand hover:text-brand",
  };

  return (
    <button
      type="button"
      onClick={openBooking}
      disabled={loading}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <Calendar size={16} strokeWidth={2.5} />
      {children ?? (calLink ? "Book a Discovery Call" : "Schedule a Call")}
    </button>
  );
}
