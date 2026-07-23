-- Inquiries table — stores detailed project inquiry form submissions.
-- RLS: anon can INSERT only (no read/update/delete).

create table if not exists inquiries (
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

-- RLS: allow anonymous inserts (form submissions), no reads
alter table inquiries enable row level security;

create policy "anon_can_insert_inquiries"
  on inquiries
  for insert
  to anon
  with check (true);

-- Index for admin queries by date
create index if not exists inquiries_created_at_idx on inquiries (created_at desc);
