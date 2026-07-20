"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/contact/actions";
import { PROJECT_TYPES } from "@/lib/data/project-types";
import type { ContactFormState } from "@/types";

const initialState: ContactFormState = { status: "idle" };

const inputClasses =
  "w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-brand focus:outline-none";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <p
        role="status"
        className="border-border bg-surface text-foreground rounded-(--radius-card) border p-6"
      >
        {state.message ?? "Thanks — we'll be in touch soon."}
      </p>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {/* Honeypot field — hidden from sighted users, left blank by humans. */}
      <div
        aria-hidden="true"
        className="absolute top-auto left-[-9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="text-foreground block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className={`mt-2 ${inputClasses}`}
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-foreground block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={`mt-2 ${inputClasses}`}
          autoComplete="email"
        />
      </div>

      <div>
        <label
          htmlFor="project_type"
          className="text-foreground block text-sm font-medium"
        >
          Project type
        </label>
        <select
          id="project_type"
          name="project_type"
          className={`mt-2 ${inputClasses}`}
          defaultValue=""
        >
          <option value="" disabled>
            Select one
          </option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-foreground block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`mt-2 ${inputClasses}`}
        />
      </div>

      {state.status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="bg-brand text-brand-foreground inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {isPending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
