"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { X, CheckCircle } from "lucide-react";
import { submitQuickInquiry } from "@/app/contact/actions";
import { inputClasses, labelClasses } from "@/components/contact/ContactForm";
import type { ContactFormState } from "@/types";

const initialState: ContactFormState = { status: "idle" };

export function QuickInquiry() {
  const [open, setOpen] = useState(false);
  const [state, formAction, isPending] = useActionState(submitQuickInquiry, initialState);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  function close() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  useEffect(() => {
    if (!open) return;
    firstInputRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="bg-brand text-brand-foreground inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 hover:scale-[1.03] hover:opacity-90 hover:shadow-lg hover:shadow-brand/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:scale-[0.97]"
      >
        Make a quick inquiry
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="quick-inquiry-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="border-border bg-surface-raised w-full max-w-md rounded-(--radius-card) border p-6">
            {state.status === "success" ? (
              <div role="status" className="py-4 text-center">
                <CheckCircle className="text-brand mx-auto" size={36} />
                <p className="text-foreground mt-3">{state.message}</p>
                <button
                  type="button"
                  onClick={close}
                  className="text-brand mt-4 text-sm hover:opacity-80"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-start justify-between">
                  <h2 id="quick-inquiry-title" className="text-foreground text-lg font-semibold">
                    Quick Inquiry
                  </h2>
                  <button
                    type="button"
                    onClick={close}
                    aria-label="Close"
                    className="text-muted hover:text-foreground"
                  >
                    <X size={20} />
                  </button>
                </div>

                <form action={formAction} className="mt-4 space-y-4" noValidate>
                  {/* Honeypot */}
                  <div aria-hidden="true" className="absolute top-auto left-[-9999px] h-px w-px overflow-hidden">
                    <label htmlFor="qi_company_hp">Company</label>
                    <input type="text" id="qi_company_hp" name="company_hp" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div>
                    <label htmlFor="qi_name" className={labelClasses}>
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      ref={firstInputRef}
                      id="qi_name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className={`mt-2 ${inputClasses}`}
                    />
                  </div>

                  <div>
                    <label htmlFor="qi_phone" className={labelClasses}>
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="qi_phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className={`mt-2 ${inputClasses}`}
                    />
                  </div>

                  <div>
                    <label htmlFor="qi_email" className={labelClasses}>
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="qi_email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={`mt-2 ${inputClasses}`}
                    />
                  </div>

                  <div>
                    <label htmlFor="qi_message" className={labelClasses}>
                      Message <span className="text-muted">(optional)</span>
                    </label>
                    <textarea id="qi_message" name="message" rows={3} className={`mt-2 ${inputClasses}`} />
                  </div>

                  {state.status === "error" && (
                    <p role="alert" className="text-sm text-red-400">
                      {state.message}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isPending}
                    className="bg-brand text-brand-foreground inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 hover:scale-[1.03] hover:opacity-90 hover:shadow-lg hover:shadow-brand/20 active:scale-[0.97] disabled:opacity-60"
                  >
                    {isPending ? "Submitting…" : "Submit"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
