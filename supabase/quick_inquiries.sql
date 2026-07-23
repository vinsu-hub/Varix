-- Adds phone number support and makes `message` optional on the existing
-- contact_submissions table, so it can back the "Quick Inquiry" popup
-- (name, phone, email, optional message). This table was defined in
-- schema.sql but unused by any current form — the full inquiry form writes
-- to `inquiries` instead — so it's being repurposed here rather than
-- introducing a third leads table.
--
-- Run this once against the existing Supabase project (SQL Editor, or
-- `supabase db execute -f supabase/quick_inquiries.sql`). Safe to run even
-- if contact_submissions doesn't exist yet — falls back to schema.sql's
-- definition, then applies these changes.

alter table public.contact_submissions
  add column if not exists phone text;

alter table public.contact_submissions
  alter column message drop not null;
