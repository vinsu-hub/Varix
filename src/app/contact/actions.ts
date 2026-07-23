"use server";

import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { ContactFormState } from "@/types";

export async function submitInquiry(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot: real users never fill this hidden field in. Bots that
  // autofill every field will, so we silently drop the submission but
  // still report success to avoid tipping them off.
  const honeypot = formData.get("company_hp");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { status: "success" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const projectDescription = String(formData.get("project_description") ?? "").trim();

  if (!name || !email || !projectDescription) {
    return {
      status: "error",
      message: "Name, email, and project description are required.",
    };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { status: "error", message: "Enter a valid email address." };
  }

  // Collect all form fields
  const projectTypes = formData.getAll("project_types").map(String).filter(Boolean);
  const data = {
    name,
    email,
    role: String(formData.get("role") ?? "").trim() || null,
    phone: String(formData.get("phone") ?? "").trim() || null,
    website: String(formData.get("website") ?? "").trim() || null,
    project_types: projectTypes.length > 0 ? projectTypes : null,
    project_description: projectDescription,
    goals: String(formData.get("goals") ?? "").trim() || null,
    existing_system: String(formData.get("existing_system") ?? "").trim() || null,
    brand_assets: String(formData.get("brand_assets") ?? "").trim() || null,
    existing_data: String(formData.get("existing_data") ?? "").trim() || null,
    tech_requirements: String(formData.get("tech_requirements") ?? "").trim() || null,
    start_date: String(formData.get("start_date") ?? "").trim() || null,
    launch_date: String(formData.get("launch_date") ?? "").trim() || null,
    budget: String(formData.get("budget") ?? "").trim() || null,
    additional_context: String(formData.get("additional_context") ?? "").trim() || null,
    referral_source: String(formData.get("referral_source") ?? "").trim() || null,
  };

  // 1. Insert into Supabase
  const supabase = getSupabaseServerClient();
  if (supabase) {
    const { error } = await supabase.from("inquiries").insert(data);
    if (error) {
      console.error("Supabase insert error:", error);
    }
  }

  // 2. POST to webhook (if configured)
  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.error("Webhook POST error:", err);
    }
  }

  return {
    status: "success",
    message: "Thanks — we'll review your project and follow up within 2-3 business days.",
  };
}
