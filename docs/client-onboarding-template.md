# Client Onboarding — [CLIENT NAME]

> Duplicate this file per client (e.g. `client-onboarding-acme.md`) and check
> items off as you go. Delete this note once onboarding is complete.

**Client:** ___________  **Start date:** ___________  **Lead (Vince/Neil):** ___________
**Project type:** ☐ Web dev  ☐ AI automation  ☐ iOS  ☐ Multiple

---

## 1. Channel naming convention

- **Primary channel:** `#client-[clientname]` (lowercase, hyphenated, no spaces)
  - e.g. `#client-acme`, `#client-bluewave`
- **Sub-channels** (only create if the client genuinely needs separate tracks —
  don't split by default for a single small workstream):
  - `#client-[clientname]-dev` — engineering discussion, PRs, technical back-and-forth
  - `#client-[clientname]-reporting` — status updates, deliverables, client-facing summaries
  - Prefix stays consistent so channels sort together in the sidebar.
- **Archival convention:**
  - Paused project → rename to `#paused-client-[clientname]` before archiving,
    so it's identifiable in an archive search later.
  - Completed project → rename to `#done-client-[clientname]`, then archive
    (see [Offboarding](#5-offboarding-checklist)).

- [ ] Primary channel created: `#client-______`
- [ ] Sub-channels created (if needed): `#client-______-dev`, `#client-______-reporting`

---

## 2. Channel setup checklist

### Pinned items (pin all at creation, in this order)
- [ ] **Project brief** — one paragraph: scope, goals, what "done" looks like
- [ ] **Timeline** — key milestones/dates, even if rough
- [ ] **Key contacts** — client stakeholder(s) + internal lead, with roles
- [ ] **Repo link** — GitHub repo (or note "not yet created")
- [ ] **Deploy link** — staging/prod URL once it exists (add later if not ready yet)

### Invite list
- [ ] Vince
- [ ] Neil
- [ ] Client stakeholder(s): ___________
- [ ] Any contractor/freelancer on this project: ___________

### Claude Code / repo connection
- [ ] Repo created under the agency GitHub org: `github.com/vinsu-hub/[repo-name]`
- [ ] Claude Code Slack integration connected to this channel and pointed at
      the correct repo (confirm with a test `@Claude` mention before inviting
      the client)
- [ ] Repo access confirmed for anyone who needs to review PRs
- [ ] `.env` / secrets handled outside Slack (never pasted in-channel)

### Welcome message (post after setup, before inviting client)
```
👋 Welcome to the Varix workspace, [CLIENT NAME] team!

This channel is home base for your project. A few quick notes:
• Pinned above: project brief, timeline, key contacts, and repo link
• @Claude is our AI dev assistant — you'll see it used for bug fixes and
  feature work; tagging format is explained in the pinned brief
• For anything urgent, tag @Vince or @Neil directly
• We'll post progress updates here as work lands

Looking forward to building this with you!
```

- [ ] Welcome message posted
- [ ] Client invited (only after brief/timeline/contacts are pinned)

---

## 3. Claude Code routing rules

### When to use @Claude vs. general chat
- **Use @Claude** for anything that should produce a code change, PR, or repo
  action — bug fixes, feature builds, refactors, running tests, checking
  build/deploy status.
- **Use general chat** for scope discussion, timeline questions, pricing, or
  anything that needs a human decision before code gets written. Don't tag
  @Claude to "ask if this is a good idea" — loop in Vince/Neil first, then
  tag @Claude once there's a clear task.

### Tagging format
- `@Claude fix: [description]` — bug reports. Always include repro steps.
- `@Claude feature: [description]` — new functionality or enhancements.
- `@Claude question:` — read-only asks (explain this code, check a log,
  summarize a diff) that shouldn't result in a commit.

### Info to gather before tagging Claude on a client-facing bug/feature
- [ ] **Repro steps** (for bugs) — exact steps, or "can't reproduce, but
      client reported X"
- [ ] **Screenshots/recording** if it's visual or UI-related
- [ ] **Priority** — 🔴 blocking / 🟡 this week / 🟢 whenever
- [ ] **Environment** — prod, staging, or client's local machine
- [ ] **Client's own words** — paste or paraphrase what they actually said;
      don't just summarize, Claude works better with the original context

---

## 4. Notification routing

- **Stays in `#client-[clientname]`:**
  - Anything the client should see: progress updates, questions for them,
    finished deliverables, screenshots of work in progress.
- **Routes to internal `#dev-alerts` instead:**
  - Failed builds/deploys, CI errors, dependency/security alerts, and any
    internal debugging chatter that isn't ready for client eyes.
  - Rule of thumb: if it would make the client worry before we've actually
    fixed it, it goes to `#dev-alerts` first.

### Deploy/PR notification format (client channel)
```
🚀 Deployed: [short description of what changed]
Link: [staging/prod URL]
PR: [link] (if relevant to share)
```

### Deploy/PR notification format (#dev-alerts)
```
[✅ / ❌] [client] — [branch/PR] — [build or deploy status] — [link]
```

- [ ] Confirm client channel members know not to post internal debugging in
      the client channel (mention it in the welcome message if needed)

---

## 5. Offboarding checklist

Run this when a project wraps up (delivered) or pauses indefinitely.

- [ ] Post a final summary message in the client channel: what was delivered,
      final repo/deploy links, and who to contact for future work
- [ ] Export/save before archiving:
  - [ ] Final deliverables (design files, docs, exports) → save to shared drive
  - [ ] Key decisions from the channel (scope changes, pricing agreements,
        anything that isn't in the repo) → copy into a short handoff note
  - [ ] Repo handoff notes — access transferred or revoked, deploy
        credentials rotated if client isn't keeping the same infra
- [ ] Remove client stakeholders from the channel (keep internal team)
- [ ] Rename channel per [archival convention](#1-channel-naming-convention):
      `#done-client-[clientname]` or `#paused-client-[clientname]`
- [ ] Archive the channel in Slack
- [ ] Update internal project tracker (or vault note) marking project closed

---

*Template version: 1.0 — update this file as the process evolves; don't let
copies drift out of sync without updating the source template too.*
