-- Varix website — Supabase schema.
-- Run this once against a fresh Supabase project (SQL Editor, or via the
-- Supabase CLI: `supabase db execute -f supabase/schema.sql`).

-- ============================================================================
-- posts — blog content
-- ============================================================================
create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text not null,
  content text not null,
  cover_image text,
  author text not null default 'Varix Team',
  tags text[] not null default '{}',
  published_at timestamptz, -- null = draft, not publicly visible
  created_at timestamptz not null default now()
);

alter table public.posts enable row level security;

-- Public (anon) can only read posts that are published and back-dated/current.
create policy "Public can read published posts"
  on public.posts
  for select
  to anon
  using (published_at is not null and published_at <= now());

-- No public insert/update/delete policy is defined, so anon has none by
-- default under RLS. Manage posts via the Supabase dashboard/service role,
-- or add an authenticated-author policy later if a CMS UI is built.

-- ============================================================================
-- contact_submissions — contact form leads
-- ============================================================================
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  project_type text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

-- Public (anon) can insert a submission, but never read/update/delete any —
-- this is the contact form's only access path to this table.
create policy "Public can submit contact form"
  on public.contact_submissions
  for insert
  to anon
  with check (true);

-- ============================================================================
-- Indexes
-- ============================================================================
create index if not exists posts_published_at_idx on public.posts (published_at desc);
create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

-- ============================================================================
-- inquiries — detailed project inquiry form submissions
-- ============================================================================
create table if not exists public.inquiries (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  email         text not null,
  role          text,
  phone         text,
  website       text,
  project_types text[],
  project_description text not null,
  goals         text,
  existing_system text,
  brand_assets  text,
  existing_data text,
  tech_requirements text,
  start_date    text,
  launch_date   text,
  budget        text,
  additional_context text,
  referral_source text,
  created_at    timestamptz default now()
);

alter table public.inquiries enable row level security;

create policy "anon_can_insert_inquiries"
  on public.inquiries
  for insert
  to anon
  with check (true);

create index if not exists inquiries_created_at_idx on public.inquiries (created_at desc);
