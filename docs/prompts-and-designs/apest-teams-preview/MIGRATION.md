# APEST Teams preview — migration handoff

**Target repo:** `JoshuaShepherd/brad-brisco-multi` · branch `main`
**Recon ref:** tree `54a9c5709e82` (resolved from `main`), read 2026-09-08T23:43–23:45Z
**Lands at:** `design-source/apest-teams-preview/` (this folder, copied in whole)
**Scope:** two surfaces — a coming-soon band on Alan's home page, and a full preview page.

> **Read `## 2. Drift` before anything else.** APEST Teams is already built,
> routed, and priced in this repo. The design this handoff carries says
> "coming soon" and states no price. That contradiction is resolved below and
> the resolution is binding.

---

## 1. Recon — what was actually read

Every claim in this document traces to one of these files. Nothing here is
recalled or inferred from the design conversation.

| File read | What it establishes |
|---|---|
| `src/app/(public)/page.tsx` | `/` is a thin dispatcher: `resolveHomePage() ?? DefaultHomePage`. Home is not a page file you edit. |
| `src/lib/modules/resolve-home-page.ts` | `alan_home` wins first; returns `AlanHomePage` from `@/modules/alan-home/HomePage`. |
| `src/modules/alan-home/HomePage.tsx` | Two arrangements chosen by `pages.home.layout`: `alan-situations` (default) and `alan-classic`. **Both must be edited** or the band is invisible on one of them. |
| `src/modules/alan-home/HomePageSituations.tsx` | Section order + the `designBlockProps(id, {label})` + `show(id)` wrapper convention; below-fold sections are `next/dynamic` with `loading: () => null`. |
| `src/modules/alan-home/HomePageClassic.tsx` | Same conventions, different order; `apestGo` sits after `library`. |
| `src/modules/local-commission/components/ApestGoTeaser.tsx` | **The model** for a module-owned home teaser: `"use client"`, `motion/react` fade-in, `Button asChild`, copy from the module's own `copy.ts`. |
| `src/modules/alan-home/components/PracticeLoop.tsx` | Token usage for a light band + card grid: `bg-secondary/20`, `border-border`, `bg-card`, `text-micro … tracking-[0.24em] text-primary`, `font-heading`. |
| `src/modules/alan-home/components/AILabTeaser.tsx` | Token usage for the dark band: `bg-foreground text-background`. |
| `src/modules/alan-home/content/home-v2.ts` | Module-local copy-constant precedent. Also: `readerDoorCopy.assessment` **already** offers "Read it across my team" → `/assessments`. See §3. |
| `src/lib/design/page-config.ts` | `HomeSectionId` union, `PAGE_CONFIG_ALLOWED_PATHS`, and `coerceHome()` — a new hideable section must be added in all three places. |
| `src/app/(modules)/apest-teams/page.tsx` | `/apest-teams` **already renders** `ApestTeamsLanding` with viewer states `paid_setup` / `roster_wait` / `ready`. |
| `src/app/(modules)/apest-teams/layout.tsx` | Route group gated by `canRenderOk("fiveq")`; `notFound()` when off. Wraps `PublicLayoutClient`. |
| `src/modules/fiveq/lib/routes.ts` | `APEST_TEAMS_ROUTES` — 11 live routes including `specimen`, `need5q`, `checkout`, `setup/team`, `report`. `APEST_TEAMS_UNIT_CENTS = 1000`. |
| `src/modules/fiveq/copy.ts` | Live landing copy, including `landingMeta: "$10 per person · 3 to 12 people · $30–$120 once"`. |
| `src/lib/modules/registry.ts` | `APEST_TEAMS_CHECKOUT`: Stripe type `apest_teams`, `quantity: {min:3, max:12}`. `accountNav` label "APEST Teams" → `/apest-teams`. |
| `tailwind.config.ts` | Token families available: `background/foreground/card/secondary/muted/primary/clay/inverse/surface-*/border*`, `font-heading|body|accent|mono`, `text-micro|label|body|body-lg|h2`, `rounded-button|card|pill`. |
| `design-source/` tree | Precedent layout for a handoff folder: `apest-teams/INTEGRATION.md`, `home-v2/README.md` + `screenshots/`. |

Not read, therefore not asserted: `src/lib/config/page-config.schema.ts`,
`package.json` scripts, any newsletter/notify API route. Every instruction that
depends on those is written as check-then-branch in §4.

---

## 2. Drift — authoritative over the design and over any earlier brief

The design was made as if APEST Teams were unbuilt. It is built.

| The design assumes | The repo actually has | What to do |
|---|---|---|
| APEST Teams is not open; no price exists | Live product: `/apest-teams` landing, Stripe `apest_teams`, `$10/person`, `3–12` seats, ten-section report copy | **Do not** put the preview at `/apest-teams`. Do not delete, rewrite, or "correct" the live landing. Do not remove `landingMeta`. |
| `/apest-teams` is free to occupy | Occupied by `ApestTeamsLanding` + 10 sibling routes | Preview lands at the new nested route `/apest-teams/preview` (§3, D1) |
| The home page is a component you edit | `/` dispatches to a gated module with two arrangements | Add a teaser component; wire it into **both** `HomePageSituations` and `HomePageClassic` |
| Nothing on Alan's home speaks to team assessment | `readerDoorCopy.assessment` already says "Read it across my team" → `/assessments` | Leave it. Flag the overlap in the receipt; do not reword or delete it (§3, S1) |
| The preview page carries its own nav + footer | `(modules)/apest-teams/layout.tsx` already wraps `PublicLayoutClient` | Drop the design's nav row and footer. Keep the design's network band only if `NetworkBand` is not already in `PublicLayoutClient` — check (§4, C3) |
| Mono eyebrows in JetBrains Mono | Repo eyebrow convention is `text-micro font-semibold uppercase tracking-[0.24em]` in the body font | Follow the repo. Do not add a font. This is a deliberate deviation from the design source. |

---

## 3. Contradictions, classified

**D1 — Route for the preview. LOCKED.**
Build at `src/app/(modules)/apest-teams/preview/page.tsx` → `/apest-teams/preview`.
Add `preview: "/apest-teams/preview"` to `APEST_TEAMS_ROUTES`.
Rationale you may not relitigate: `(public)/apest-teams/**` would collide with
`(modules)/apest-teams/**` and fail the build with a duplicate-route error;
changing `layout.tsx`'s `notFound()` branch would leak the preview onto all ten
nested product routes. Inside the module group it inherits the existing `fiveq`
gate, which is correct — see C1.

**D2 — Preview copy location. LOCKED.**
New file `src/modules/fiveq/preview-copy.ts`. Do **not** add keys to
`copy.ts`; the live landing reads it and a merge there is the one place a
mistake reaches a paying surface.

**D3 — Pricing. LOCKED.**
No price, price range, seat price, or "starting at" appears in
`preview-copy.ts` or in either new component. The live landing keeps its
existing price copy untouched. Gate: §8 G4.

**S1 — STOP AND REPORT (product decision, not a code decision).**
On a tenant with `fiveq` **on**, the site will simultaneously show a
coming-soon band and a live, purchasable `/apest-teams`. Nobody in the repo can
resolve that. Build both surfaces as specified, then write to
`STATE.md` under `Open decisions`:

> The APEST Teams teaser says "coming soon" while `/apest-teams` sells the
> product at $10/person. Needs a human decision: (a) hide the teaser via
> `pages.home.sections.apestTeams.hidden` on tenants where fiveq is on and use
> the preview only for pre-launch tenants, (b) point the teaser at the live
> landing and rewrite its copy, or (c) accept both. No code change was made to
> resolve this.

Halt nothing else. Phases 1–5 proceed.

**S2 — STOP AND REPORT.** `readerDoorCopy.assessment` already routes team
assessment interest to `/assessments`. Record the overlap; change nothing.

---

## 4. Check-then-branch (unverified capabilities)

**C1 — `fiveq` on this tenant.** The gate is a `tenant_modules` row, not repo
state, and this repo does not seed rows. Check nothing at build time; the
inherited layout gate is correct behaviour. If `/apest-teams/preview` 404s in
local dev, that is `fiveq` being off for the dev org — record it in `STATE.md`
and do not add a bypass.

**C2 — Notify form submission.** Search for an existing subscribe/notify
endpoint (`src/app/api/**` for `newsletter`, `subscribe`, `notify`) and read
`src/components/home/FieldNotesNewsletter.tsx` for the pattern it uses.
- **If present:** POST to it, tagging the source as `apest_teams_preview` if the
  payload shape allows a source/tag field. Success state renders the verbatim
  confirmation string from `COPY.md` (P15).
- **If absent:** render the email input and button, `disabled`, with the
  privacy line still visible, and a `{/* TODO(apest-teams-preview): no notify
  endpoint found — wire submit */}` marker. **Do not** invent an API route, a
  table, or a fake success state.
Record which branch you took in `STATE.md`.

**C3 — Network band.** Check whether `PublicLayoutClient` already renders
`@/components/network-band/NetworkBand`. If it does, omit the design's
top network band from the preview page. If it does not, render `NetworkBand`
(import it; do not hand-roll the strip).

**C4 — Hideable section plumbing.** `HomeSectionId` lives in
`src/lib/design/page-config.ts`, but the zod shape lives in
`src/lib/config/page-config.schema.ts`, which was **not** read.
Read it first, then add `apestTeams` consistently to: the `HomeSectionId`
union, `PAGE_CONFIG_ALLOWED_PATHS` (`pages.home.sections.apestTeams.hidden`),
`coerceHome()`'s `sections` object, and whatever the schema file requires. If
the schema shape makes any of those additions impossible without a broader
change, do the plain version instead — render the teaser **ungated by
`show()`**, still gated by `canRenderOk("fiveq")` — and record the skip.

**C5 — Fast check script.** Read `package.json` scripts and use the repo's own
lint + typecheck + fast test entry points. Record the exact commands you ran in
`STATE.md`. Do not invent `ci:fast` if it is not there.

---

## 5. Component reuse map — by real path

### Home band

| Purpose | Real path | Mode |
|---|---|---|
| Whole-component model | `src/modules/local-commission/components/ApestGoTeaser.tsx` | **model** — copy structure, do not import |
| Button | `src/components/ui/button.tsx` (`Button asChild size="lg"`) | **import** |
| Section wrapper + editor label | `designBlockProps` from `src/lib/design/design-block.ts` | **import** |
| Gate | `canRenderOk` from `src/lib/modules/can-render.ts` | **import** |
| Light band + card tokens | `src/modules/alan-home/components/PracticeLoop.tsx` | **model** |

New file: `src/modules/fiveq/components/ApestTeamsTeaser.tsx`.
Insert in `HomePageSituations.tsx` **after** the `apestGo` block and before
`membership`; in `HomePageClassic.tsx` **after** the `apestGo` block and before
`formation`. Same `next/dynamic` treatment as its neighbours.

### Preview page

| Purpose | Real path | Mode |
|---|---|---|
| Page shell / chrome | `src/app/(modules)/apest-teams/layout.tsx` (already wraps `PublicLayoutClient`) | **inherit** — write no nav, no footer |
| Route constants | `src/modules/fiveq/lib/routes.ts` | **import** (add `preview`) |
| Dark band tokens | `src/modules/alan-home/components/AILabTeaser.tsx` | **model** |
| Card grid / steps | `src/modules/alan-home/components/PracticeLoop.tsx` | **model** |
| Metadata | `src/app/(modules)/apest-teams/page.tsx` `export const metadata` | **model** |

New files: `src/app/(modules)/apest-teams/preview/page.tsx` and, if the page
exceeds ~250 lines, section components under
`src/modules/fiveq/components/preview/`. Do not create a second copy of any
component that already exists.

### Token swap table (design hex → repo token)

| Design | Token |
|---|---|
| `#fbf9f4` page paper | `bg-background` |
| `#fefcf8` card | `bg-card` |
| `#f0eee9` / `#f5f3ee` / `#ebe8e3` bands | `bg-secondary/20` (as `PracticeLoop`) |
| `#37203b` plum | `text-primary` / `bg-primary` + `text-primary-foreground` |
| `#1c1620` dark band | `bg-foreground text-background` (as `AILabTeaser`) |
| `#c9bdca` on dark | `text-background/80` |
| `#6f6370` / `#3a3a36` body | `text-muted-foreground` |
| `#e4e2dd` / `#dcd6d2` rules | `border-border` |
| Newsreader | `font-heading` |
| Manrope | default body |
| JetBrains Mono eyebrow | `text-micro font-semibold uppercase tracking-[0.24em]` |
| Pill radius | `rounded-button` / `rounded-pill` |
| Bar-chart fill | `bg-primary`; empty track `bg-border`; partial via `w-[62%]` on an inner div — not a gradient |

### Anti-invention constraints

- Zero hex or `rgb()` in any new component source. All colour through the tokens above.
- No new primitives, no new UI-kit components, no restyling anything in `src/components/ui/`.
- No new fonts, no `@font-face`, no Google Fonts link.
- No DDL from this repo. Anything needing a table goes in `SCHEMA-REQUEST.md` (§9) — the notify form does not need one (§4 C2).
- One package manager: `pnpm`. No new dependencies; `motion/react`, `next/link`, `lucide-react` are already present.
- No second copy of an existing component. No `tokens.ts`, no design-token file.
- Do not touch `src/modules/fiveq/copy.ts`, `landing.tsx`, `ApestTeamsOrder.tsx`, or anything under `/apest-teams/checkout/**`.
- Do not add a `nav` entry to `FIVEQ_MODULE`; the module deliberately has `accountNav` only.

---

## 6. Fixture seam

| Surface | State |
|---|---|
| Specimen bar chart (4/5, 3/5, 1/5, 0/5, 0/5) | **Static, hard-coded, illustrative.** Never computed. The caption "Illustrative team of five · not a live report" is load-bearing and must ship. |
| Sample finding sentence | Static copy. Not generated, not from a real report. |
| Six report movements | Static copy describing the shipped report's structure. Do not read `FIVEQ_COPY.generatingSections` to build it. |
| Notify email capture | No endpoint verified — §4 C2. Nothing is persisted by this slice. |
| Team-size chips | Local `useState` only. Not submitted anywhere unless C2's endpoint accepts an extra field; if it does not, they are UI-only and that is correct for this slice. |
| 5Q Assessment link | External `https://5qcentral.com/tests/`, `target="_blank" rel="noopener"`. Not an integration. |
| Live `/apest-teams` product | Untouched by this slice. |

---

## 7. Copy and design source

- **`COPY.md` in this folder is verbatim.** Every user-visible string, keyed
  `H1–H8` (home band) and `P1–P17` (preview page). Paste; do not paraphrase,
  re-punctuate, or Americanise. The em dashes, the `·` separators, and the
  italic emphasis on *tending* / *going* are all intentional.
- Two strings must survive review unsoftened: the sample finding, and
  "Using it to justify a personnel decision is a misuse of what it is designed
  to do." If either reads oddly to you, record the question in `STATE.md`
  rather than editing.
- **`screens/`** holds the design source, which is the source of truth for
  layout and spacing: `APEST Teams - Coming Soon.dc.html` (the page) and
  `AlanHirsch-Home v2.dc.html` (the band, between the six-doorways and AI Lab
  sections). Open them in a browser — they are self-contained with `support.js`.
- **`screenshots/`** — `01`–`05-preview-page.png` top-to-bottom, and
  `home-band.png`. Pixels, not prose.
- `COPY-BRIEF.md` is the brief the copy was written against. Context only; the
  character targets in it are not requirements.

---

## 8. Phases and gates

Runner protocol: work one phase at a time; after each, run its gate, append the
result to `STATE.md`, and stop on a red gate rather than continuing. Type
safety, error handling, and tests are deferred to Phase 5 (deferral rule: if a
phase needs a type you do not have, use the loosest thing that compiles and
leave a `TODO(apest-teams-preview)` marker).

**Phase 0 — Confirm recon.**
Read the eleven files in §1 that you will touch or model. Create `STATE.md`
with the current commit sha, the branch, and a line per §4 check with its
branch not yet taken.
*Gate:* `STATE.md` exists and names a real sha from `git rev-parse HEAD`.

**Phase 1 — Copy constants.**
Create `src/modules/fiveq/preview-copy.ts` exporting
`APEST_TEAMS_PREVIEW_COPY` with every string from `COPY.md`, and add
`preview: "/apest-teams/preview"` to `APEST_TEAMS_ROUTES`.
*Gate:* `grep -rniE '\$[0-9]|per person|3 to 12|price|pricing' src/modules/fiveq/preview-copy.ts` returns nothing. `grep -c preview src/modules/fiveq/lib/routes.ts` ≥ 1.

**Phase 2 — Preview page.**
`src/app/(modules)/apest-teams/preview/page.tsx` with `export const metadata`,
rendering: hero (eyebrow, headline, two paragraphs, primary anchor to
`#notify`, secondary link to `/themes/apest`) · specimen card with the static
bar chart · three steps · six report movements with their derivation labels ·
dark band pairing "Before it opens" + the 5Q CTA + the independence line with
the three refusals · two open-today cards · notify section (§4 C2).
*Gate:* dev server returns 200 at `/apest-teams/preview` **and** 200 at
`/apest-teams` (or 404 on both if `fiveq` is off for the dev org — record which).
`grep -rniE '#[0-9a-f]{3,6}\b|rgb\(' src/app/\(modules\)/apest-teams/preview src/modules/fiveq/components/preview` returns nothing.

**Phase 3 — Home band.**
`src/modules/fiveq/components/ApestTeamsTeaser.tsx` per §5, plus the
`apestTeams` section-id plumbing per §4 C4, plus the two insertions in
`HomePageSituations.tsx` and `HomePageClassic.tsx`.
*Gate:* `grep -rn 'ApestTeamsTeaser' src/modules/alan-home` returns exactly two
files. `/` renders the band above membership on the default arrangement, and
the design editor lists a section labelled "APEST Teams" (or the C4 skip is
recorded).

**Phase 4 — Build integrity.**
*Gate:* `pnpm build` completes with no duplicate-route warning and no new
route conflicts; the built route list contains both `/apest-teams` and
`/apest-teams/preview`.

**Phase 5 — Types, lint, tests, receipt.**
Resolve every `TODO(apest-teams-preview)` that is not an intentional deferral,
run the repo's own lint/typecheck/test commands (§4 C5), and write the receipt
(§9).
*Gate:* lint and typecheck clean on changed files; `STATE.md` has a line per
phase; `github.md` updated.

---

## 9. Return channel

- **`STATE.md`** at the repo root of this handoff folder
  (`design-source/apest-teams-preview/STATE.md`), created in Phase 0, appended
  every phase. Must record: the sha it started from, each §4 branch taken, each
  skip with one line of reason, both §3 stop-and-report items, and any copy
  question.
- **`SCHEMA-REQUEST.md`** — create only if something genuinely needs a table.
  Nothing in this slice should. If you write one, no DDL is executed from this
  repo.
- **TODO markers** — `TODO(apest-teams-preview): …` at every deferral, so one
  grep finds the whole slice's debt.
- **Receipt** — update `github.md` with a `## Last sync` entry: date, sha, and
  1–4 bullets naming what landed and what was skipped, plus `## Screen map`
  rows for `APEST Teams - Coming Soon.dc.html` → the new route, and
  `AlanHirsch-Home v2.dc.html` (APEST Teams band) → the teaser component.

---

## 10. Readiness gate

- [x] Every repo claim traces to a file actually read (§1)
- [x] Drift table present and marked authoritative (§2)
- [x] Every contradiction classified — D1–D3 locked, S1–S2 stop-and-report (§3)
- [x] Every unverified capability written as check-then-branch — C1–C5 (§4)
- [x] Components named by real path, each marked import / model / inherit (§5)
- [x] Anti-invention constraints stated (§5)
- [x] Fixture seam declared per dynamic surface (§6)
- [x] All user-visible copy verbatim in `COPY.md`; design source in `screens/`; screenshots committed (§7)
- [x] Every phase has a runnable or greppable gate (§8)
- [x] State file, schema-request file, TODO tag, receipt defined (§9)

**Adversarial read — what a competent stranger would otherwise have guessed,
and where it is now answered:**

| Guess they would have made | Answered in |
|---|---|
| "Put the preview at `/apest-teams`" | §2, §3 D1 |
| "Delete the price copy, it contradicts coming-soon" | §2, §3 D3 |
| "Edit `src/app/(public)/page.tsx` to add the band" | §1, §5 |
| "One home arrangement is enough" | §1, §5 |
| "Build the nav and footer from the design" | §2, §5 |
| "Add JetBrains Mono for the eyebrows" | §2, §5 |
| "Wire the notify form to a new API route + table" | §4 C2, §5 |
| "The bar chart should read the real report data" | §6 |
| "Add a `tokens.ts` for the plum and paper hexes" | §5 |
| "Add APEST Teams to the site nav" | §5 |
| "Soften the personnel-decision line" | §7 |

**Not resolved here, by design:** S1 — whether a coming-soon band should stand
on a site that already sells the product. That is Joshua's call, and the agent
is instructed to report it rather than pick.
