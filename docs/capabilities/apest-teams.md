# APEST Teams

**Status: BUILD TARGET.** Has a Stripe price and a registry entry; has no code. Blocked on the 5Q agreement.

---

## What it is

Reads a **team's collective APEST ecology** from members' existing 5Q results, against population benchmarks.

Note the dependency: it does not administer an assessment. It reads results the members already have.

## Who it is for

A leader with a team; an organisational buyer. Smallest audience by count, largest by contract value.

## Tenants

**Will be scoped to `alan-hirsch`, not shared across tenants.** The registry entry today declares no tenant scope.

## Price

**$499/year up to 5 seats, $79/year per additional seat.**

**The registry disagrees** — it carries $10/person for 3–12 seats, which is the older plan. See [PRICING.md](../PRICING.md). Reconcile before building checkout.

**The landing page does not take a side — 2026-09-11 (Alan products v3).** The designed landing
prints the annual-workspace amounts. It ships with the **price block omitted** and the seat range
read from the registry through the new `src/modules/fiveq/lib/seats.ts`, which derives min/max/default
from `FIVEQ_MODULE.checkout.quantity` rather than retyping them. A page advertising a seat range
Stripe will refuse is the expensive kind of wrong, and a migration is not entitled to settle a
pricing question by picking whichever number the design happened to show. The seam carries
`TODO(alan-products-v3)`. **This is still the reconciliation this section has been asking for.**

## Gating

Registry entry exists: checkout type `apest_teams`, success `/apest-teams/checkout/success`, cancel `/apest-teams/checkout`, nav label "APEST Teams", no SiteBar nav, no route guards. **No module directory, no routes.**

## Blocked on

**The 5Q revenue-sharing agreement.** This blocks both APEST Teams at plan price and 5Q assessment checkout. Until it is signed, the price cannot be finalised and the product cannot ship. See [OPEN-QUESTIONS.md](../OPEN-QUESTIONS.md) item 1.

## Third-party data — enforce at build time

**A team report is built from other members' assessment results, and those members are third parties to whoever bought the product.**

This is not a policy footnote; it is a build constraint. The buyer must not receive individual results they have no right to, and the aggregate must not be reversible to individuals in a small team. **A 3-seat team makes an "aggregate" trivially identifying.**

See [CONSTRAINTS.md](../CONSTRAINTS.md). The enforcement mechanism does not exist yet.

## Seats

`seats` is an **entitlement flag, not a module.** It is how a multi-seat purchase grants access to more than one account. **It will never have a directory**, and it should be moved out of the module registry — a registry mixing modules, entitlements, and spine entities teaches every future reader the wrong mental model.

## The landing was rewritten — 2026-09-11 (Alan products v3)

`ApestTeamsLanding` (`src/modules/fiveq/components/flow/landing.tsx`) was rewritten to its design.
**Only that component.** `/apest-teams/page.tsx` and its three other viewer branches —
`paid_setup`, `roster_wait`, `ready` — are byte-identical, as are `wait-and-home.tsx` and
`lib/viewer.ts`. New copy lives under `FIVEQ_COPY.v3`; the existing keys the other branches read
were not touched.

Two things about it are load-bearing rather than cosmetic:

- **The specimen is never computed.** Five fixed rows, a `bg-primary` fill over a `bg-border`
  track, and the caption `Illustrative team of five · not a live report` shipping with it. Same for
  the roster table: layout only, no names, no scores, and the "Resend invite"/"Add member" toolbar
  buttons deliberately dropped rather than rendered dead.
- **The separation band is not a cross-sell.** "APEST Teams is separate from Alan Hirsch
  Membership" is the point of the band. It links to membership because a reader who wanted the
  other product should be able to leave, not because the two are a bundle.

The landing no longer renders `FlowHeader`. The route group already wraps it in
`PublicLayoutClient`, which renders `SiteBar` and `PublicFooter`, so the flow header was a second
header on the page — and it printed a currency literal into the chrome. The other three viewer
branches still use it.

## Pre-launch surfaces — 2026-09-08 (landing pages migration)

> **This page's "Gating" and "Code paths" sections below are stale.** They say "No module
> directory, no routes"; in fact `src/modules/fiveq/` ships with eleven `/apest-teams/**` routes,
> a live landing, and Stripe checkout. That drift predates this migration and is not repaired
> here — but do not trust those two sections until someone does.

Two coming-soon surfaces landed, neither of which touches the live product:

| Surface | Where |
|---|---|
| Home teaser band | `ApestTeamsTeaser`, section id `apestTeams`, in both Alan home arrangements |
| Preview page | `/apest-teams/preview` — a **new nested route** under the existing `fiveq` gate |

Both carry a **static, hard-coded specimen chart** (4/5 shepherding, 3/5 teaching, 1/5 prophetic,
0/5 evangelistic, 0/5 apostolic) and the sample finding it illustrates. It is never computed from a
report, and the caption "Illustrative team of five · not a live report" is load-bearing, not
decoration.

The preview states **no price**, while `/apest-teams` sells the product. `src/modules/fiveq/copy.ts`
was not touched; preview copy lives in a separate `preview-copy.ts` so that a mistake in pre-launch
copy cannot reach a paying surface.

> **Open product question (O8), not resolved in code.** On a tenant with `fiveq` enabled, the site
> now shows a "coming soon" band and a purchasable `/apest-teams` at the same time. Three ways out,
> all of them a human's call: hide the band per tenant via `pages.home.sections.apestTeams.hidden`
> and use the preview only for pre-launch tenants; repoint the band at the live landing and rewrite
> its copy; or accept both. Both surfaces were built as specified and no code picks.

**The notify form is deliberately inert.** The repo's only subscribe endpoint returns 404
`NOT_AVAILABLE` for any tenant on a Substack hand-off, which is Alan's — the only tenant that
renders this page. Wiring it would ship a button that fails on every press, and Substack is not a
substitute because the page promises "no newsletters, no announcements" on the same screen. Input
and button render disabled, the privacy line stays, no success state is faked,
`TODO(landing-pages)` marks it.

New files: `src/app/(modules)/apest-teams/preview/page.tsx`,
`src/modules/fiveq/preview-copy.ts`, `src/modules/fiveq/components/ApestTeamsTeaser.tsx`,
`src/modules/fiveq/components/SpecimenChart.tsx`,
`src/modules/fiveq/components/preview/NotifyForm.tsx`. `preview` added to `APEST_TEAMS_ROUTES`.

## Code paths

| What | Where |
|---|---|
| Registry | `APEST_TEAMS_CHECKOUT` in `src/lib/modules/registry.ts` |
| Tables | `apest_teams`, `apest_team_members`, `apest_team_invites` — exist, unused |
| Module tree | **None** |
| Routes | **None** |

## Open questions

- Price reconciliation ($499/yr vs $10/person).
- The 5Q relationship — revenue share, and whether 5Q results can be read across tenant boundaries at all.
- How aggregation protects individuals in small teams.
- `fiveq` is marked `?` for paid status in the registry.
