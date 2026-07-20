# Varix Website

Marketing site + blog for Varix, a website and software development studio.
Next.js (App Router, TypeScript, strict) + Tailwind CSS + Supabase, deployed
via Vercel.

## Stack

- **Framework:** Next.js 16 (App Router, TypeScript, strict mode)
- **Styling:** Tailwind CSS v4 (CSS-first config — see design tokens below)
- **Data:** Supabase Postgres (blog posts + contact form submissions)
- **Deployment:** Vercel, GitHub-connected

## Project structure

```
src/
  app/            routes (App Router) — one folder per page/segment
  components/
    layout/       Header, Footer, Container, Section
    ui/           small shared primitives (Button, Card)
    home/         home-page sections
    work/         portfolio components
    blog/         blog components
    contact/      contact form
  lib/
    data/         config-driven placeholder content (services, projects,
                   team, testimonials, process) + Supabase-backed posts
    supabase/     Supabase client factory
    site-config.ts  single source of truth for site name/url/description
    seo.ts        shared metadata/OG builder
  types/          shared TypeScript types
supabase/
  schema.sql      tables + RLS policies for a fresh Supabase project
```

Services, portfolio projects, team members, and testimonials are all
config-driven (`src/lib/data/*.ts`) — add an entry there and it shows up on
the relevant page(s) automatically, no page-level code changes needed.

## Design tokens (placeholder branding)

All colors, the font stack, and a couple of layout tokens (container width,
card radius) are centralized in `src/app/globals.css` under a `:root` block
marked **PLACEHOLDER BRANDING**. When a real brand kit exists, that block —
plus the `siteConfig` values in `src/lib/site-config.ts` — is the only place
that needs to change. No component hardcodes a color or font.

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the env template and fill in Supabase credentials (see below):
   ```bash
   cp .env.example .env.local
   ```
3. Run the dev server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000

Without Supabase env vars set, the site still runs — the blog renders an
empty state and the contact form returns a clear "not connected yet" error
instead of crashing.

## Connecting a real Supabase project

1. Create a project at [supabase.com](https://supabase.com) (free tier is
   enough to start).
2. In the Supabase SQL Editor, run `supabase/schema.sql`. This creates:
   - `posts` — blog content, with Row Level Security restricting public
     (anon) reads to rows where `published_at` is set and in the past.
   - `contact_submissions` — contact form leads, with RLS allowing public
     `insert` only (no public read/update/delete).
3. From **Settings → API** in the Supabase dashboard, copy the Project URL
   and anon public key into `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   ```
4. Add a row to `posts` with a past `published_at` to see the blog populate.

## Linting & formatting

```bash
npm run lint          # ESLint
npm run format        # Prettier — writes changes
npm run format:check  # Prettier — check only, no writes
```

## Deploying

1. **Push to GitHub** (see exact commands below).
2. **Import into Vercel:** [vercel.com/new](https://vercel.com/new) → import
   the GitHub repo → framework preset auto-detects Next.js.
3. **Set environment variables** in the Vercel project settings
   (Production + Preview): `NEXT_PUBLIC_SUPABASE_URL`,
   `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. **Point the domain:** in the Vercel project → Settings → Domains, add
   `www.varix.work` (and optionally `varix.work` with a redirect to `www`).
   Vercel will show the DNS records to add at your domain registrar — a
   `CNAME` for `www` pointing at `cname.vercel-dns.com`, and either an `A`
   record or Vercel's recommended apex setup for the bare domain. DNS
   propagation can take up to ~48 hours.

### Commands to create the GitHub repo and push

Run these from the project root once you've reviewed the local commit
history:

```bash
gh repo create varix/website --private --source=. --remote=origin
git push -u origin main
```

(Or without the `gh` CLI: create an empty repo on GitHub first, then
`git remote add origin <repo-url>` and `git push -u origin main`.)

## Known placeholders to replace before launch

- **Branding:** colors/fonts in `src/app/globals.css`, wordmark text in
  `siteConfig.name`.
- **Copy:** About page story, team bios (`src/lib/data/team.ts`),
  testimonials (`src/lib/data/testimonials.ts`), case studies
  (`src/lib/data/projects.ts`) are all placeholder content.
- **Legal:** `/privacy` and `/terms` are stub pages marked
  `[PLACEHOLDER — replace with real legal copy before launch]`.
- **Domain:** `siteConfig.url` in `src/lib/site-config.ts` assumes
  `https://www.varix.work` is live; update if that changes.
