"use server";

import { getSupabaseServerClient } from "@/lib/supabase/server";
import { PROJECT_TYPES } from "@/lib/data/project-types";
import type { ContactFormState } from "@/types";

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot: real users never fill this hidden field in. Bots that
  // autofill every field will, so we silently drop the submission but
  // still report success to avoid tipping them off.
  const honeypot = formData.get("company");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { status: "success" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const projectType = String(formData.get("project_type") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Name, email, and message are required." };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { status: "error", message: "Enter a valid email address." };
  }

  if (projectType && !PROJECT_TYPES.includes(projectType)) {
    return { status: "error", message: "Select a valid project type." };
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return {
      status: "error",
      message: "Contact form isn't connected to Supabase yet. See README for setup.",
    };
  }

  const { error } = await supabase.from("contact_submissions").insert({
    name,
    email,
    message,
    project_type: projectType || null,
  });

  if (error) {
    return { status: "error", message: "Something went wrong. Please try again." };
  }

  return { status: "success", message: "Thanks — we'll be in touch soon." };
}

export { PROJECT_TYPES };
