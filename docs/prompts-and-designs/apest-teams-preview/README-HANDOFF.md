# APEST Teams preview — handoff bundle

Drop this whole folder in at `design-source/apest-teams-preview/`, then give a
coding agent `MIGRATION.md`. It is written to be executed unattended.

## What is in here

| File | What it is |
|---|---|
| `MIGRATION.md` | **The handoff.** Recon, drift, locked decisions, check-then-branch conditionals, component reuse map by real path, fixture seam, five phases with runnable gates, return channel, readiness gate. Start here. |
| `COPY.md` | Every user-visible string, verbatim, keyed `H1–H8` / `P1–P17`. |
| `COPY-BRIEF.md` | The brief the copy was written against. Context only. |
| `screens/APEST Teams - Coming Soon.dc.html` | Design source for the preview page. Opens in a browser. |
| `screens/AlanHirsch-Home v2.dc.html` | Design source for the home band — it sits between the six-doorways section and the AI Lab band. |
| `screens/support.js` | Runtime both design files load. Keep it beside them. |
| `screenshots/01–05-preview-page.png` | The preview page, top to bottom. |
| `screenshots/home-band.png` | The home band in place. |

## The two surfaces

1. **Home band** — a coming-soon teaser on Alan's home page, headline "Your
   team has a fivefold pattern too.", with a static specimen bar chart. Lands as
   `src/modules/fiveq/components/ApestTeamsTeaser.tsx`, wired into **both**
   home arrangements.
2. **Preview page** — the full pre-launch page: what the report reads, the three
   steps, the six report movements with their derivation labels, what to have
   ready, three refusals, and a notify form. Lands at `/apest-teams/preview`.

## Three things to know before reading the migration

- **APEST Teams already ships in this repo**, at `/apest-teams`, with Stripe
  checkout at $10/person for 3–12 seats. The design says "coming soon" and
  states no price. `MIGRATION.md §2` is the drift table and it overrides the
  design.
- **The preview does not replace the live landing.** New nested route, no
  route change, nothing under `/apest-teams/**` is edited except an added
  constant in `lib/routes.ts`.
- **One thing is deliberately unresolved**: whether a coming-soon band belongs
  on a site that already sells the product. The agent is told to report it, not
  to pick. That decision is Joshua's.

## Provenance

Recon against `JoshuaShepherd/brad-brisco-multi@main`, tree `54a9c5709e82`,
read 2026-09-08. Sixteen files read; every claim in `MIGRATION.md` traces to
one of them (`§1`).
