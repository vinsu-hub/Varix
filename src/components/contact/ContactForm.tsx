"use client";

import { useActionState } from "react";
import { CheckCircle, Mail } from "lucide-react";
import { submitInquiry } from "@/app/contact/actions";
import { PROJECT_TYPES, BUDGET_OPTIONS, BRAND_ASSET_OPTIONS } from "@/lib/data/project-types";
import type { ContactFormState } from "@/types";

const initialState: ContactFormState = { status: "idle" };

const inputClasses =
  "w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors duration-200 focus:border-brand focus:outline-none";

const labelClasses = "text-foreground block text-sm font-medium";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-foreground border-border mt-10 mb-4 border-b pb-3 text-lg font-semibold">
      {children}
    </h2>
  );
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitInquiry, initialState);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="border-border bg-surface text-foreground rounded-(--radius-card) border p-8 text-center"
      >
        <CheckCircle className="mx-auto text-brand" size={40} />
        <p className="mt-4 text-lg">Thanks — we&apos;ll review your project and follow up within 2-3 business days.</p>
        <p className="text-muted mt-2 text-sm">Need a faster response?</p>
        <a
          href="mailto:hello@varixph.com?subject=Project%20Inquiry"
          className="text-brand mt-3 inline-flex items-center gap-2 text-sm font-medium hover:opacity-80"
        >
          <Mail size={14} />
          Email us directly
        </a>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-1" noValidate>
      {/* Honeypot */}
      <div aria-hidden="true" className="absolute top-auto left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="company_hp">Company</label>
        <input type="text" id="company_hp" name="company_hp" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Contact Information */}
      <SectionHeading>Contact Information</SectionHeading>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full Name / Company Name <span className="text-red-400">*</span>
          </label>
          <input id="name" name="name" type="text" required className={`mt-2 ${inputClasses}`} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="role" className={labelClasses}>Role / Title</label>
          <input id="role" name="role" type="text" className={`mt-2 ${inputClasses}`} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email Address <span className="text-red-400">*</span>
          </label>
          <input id="email" name="email" type="email" required className={`mt-2 ${inputClasses}`} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>Phone / WhatsApp / Telegram</label>
          <input id="phone" name="phone" type="text" className={`mt-2 ${inputClasses}`} />
        </div>
      </div>

      <div>
        <label htmlFor="website" className={labelClasses}>Company Website</label>
        <input id="website" name="website" type="text" className={`mt-2 ${inputClasses}`} placeholder="https://" />
      </div>

      {/* Project Type */}
      <SectionHeading>Project Type</SectionHeading>

      <div className="grid gap-3 sm:grid-cols-2">
        {PROJECT_TYPES.map((type) => (
          <label key={type} className="text-muted flex items-center gap-3 text-sm">
            <input type="checkbox" name="project_types" value={type} className="border-border bg-surface text-brand focus:ring-brand h-4 w-4 rounded" />
            {type}
          </label>
        ))}
      </div>

      {/* Project Description */}
      <SectionHeading>Project Description</SectionHeading>

      <div>
        <label htmlFor="project_description" className={labelClasses}>
          Briefly describe what you&apos;re trying to build or solve <span className="text-red-400">*</span>
        </label>
        <textarea id="project_description" name="project_description" required rows={4} className={`mt-2 ${inputClasses}`} />
      </div>

      {/* Goals */}
      <SectionHeading>Goals</SectionHeading>

      <div>
        <label htmlFor="goals" className={labelClasses}>What does success look like for this project?</label>
        <textarea id="goals" name="goals" rows={3} className={`mt-2 ${inputClasses}`} />
      </div>

      <div>
        <label htmlFor="existing_system" className={labelClasses}>
          Is there an existing system, spreadsheet, or manual process this is replacing?
        </label>
        <textarea id="existing_system" name="existing_system" rows={3} className={`mt-2 ${inputClasses}`} />
      </div>

      {/* Scope Details */}
      <SectionHeading>Scope Details</SectionHeading>

      <div>
        <label className={labelClasses}>Do you have existing brand assets?</label>
        <div className="mt-2 flex gap-4">
          {BRAND_ASSET_OPTIONS.map((option) => (
            <label key={option} className="text-muted flex items-center gap-2 text-sm">
              <input type="radio" name="brand_assets" value={option} className="border-border bg-surface text-brand focus:ring-brand h-4 w-4" />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="existing_data" className={labelClasses}>
          Do you have existing data, documents, or systems we&apos;d need to work with or migrate?
        </label>
        <textarea id="existing_data" name="existing_data" rows={3} className={`mt-2 ${inputClasses}`} />
      </div>

      <div>
        <label htmlFor="tech_requirements" className={labelClasses}>
          Any specific tech stack, platform, or integration requirements?
        </label>
        <textarea id="tech_requirements" name="tech_requirements" rows={3} className={`mt-2 ${inputClasses}`} />
      </div>

      {/* Timeline & Budget */}
      <SectionHeading>Timeline &amp; Budget</SectionHeading>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="start_date" className={labelClasses}>When would you like this project to start?</label>
          <input id="start_date" name="start_date" type="text" className={`mt-2 ${inputClasses}`} placeholder="e.g. ASAP, Q3 2026" />
        </div>
        <div>
          <label htmlFor="launch_date" className={labelClasses}>Is there a target launch date or deadline?</label>
          <input id="launch_date" name="launch_date" type="text" className={`mt-2 ${inputClasses}`} placeholder="e.g. December 2026" />
        </div>
      </div>

      <div>
        <label className={labelClasses}>What is your estimated budget range?</label>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {BUDGET_OPTIONS.map((option) => (
            <label key={option} className="text-muted flex items-center gap-2 text-sm">
              <input type="radio" name="budget" value={option} className="border-border bg-surface text-brand focus:ring-brand h-4 w-4" />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Additional Context */}
      <SectionHeading>Additional Context</SectionHeading>

      <div>
        <label htmlFor="additional_context" className={labelClasses}>Anything else we should know?</label>
        <textarea id="additional_context" name="additional_context" rows={3} className={`mt-2 ${inputClasses}`} />
      </div>

      <div>
        <label htmlFor="referral_source" className={labelClasses}>How did you hear about Varix?</label>
        <input id="referral_source" name="referral_source" type="text" className={`mt-2 ${inputClasses}`} />
      </div>

      {/* Error state */}
      {state.status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          {state.message}
        </p>
      )}

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isPending}
          className="bg-brand text-brand-foreground inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-all duration-200 hover:opacity-90 hover:scale-[1.03] hover:shadow-lg hover:shadow-brand/20 active:scale-[0.97] disabled:opacity-60"
        >
          {isPending ? "Submitting…" : "Submit Inquiry"}
        </button>
      </div>
    </form>
  );
}
