# APEST Teams Dashboard — Master Integration Build Prompt
**Unified Theological Diagnostic Studio & Discernment Mirror**

*Synthesizing the multi-layer diagnostic workbench and the 11-panel sequential discernment mirror into a singular, cohesive, production-grade ecclesiological instrument.*

> **Target Repositories:** `apest-teams` / `movemental-studio`  
> **Build Slug:** `apest-teams-dashboard-integration`  
> **Primary Surface:** `/dashboard` (with unified sub-surfaces & retreat console)  
> **Governing Framework:** Alan Hirsch *5Q* / *The Forgotten Ways* ecclesiological intelligence  
> **Target Case Anchor:** Restoration Road Community Church (Marcus Webb, James Okafor, Priya Nair, Sofia Reyes, Daniel Kim)  
> **Execution Strategy:** Execute all implementation phases end-to-end without mid-flight testing, followed by comprehensive verification and testing at the end.

---

## ⌘ RUNNER — Master Orchestration & Operating Directives

You are the **Lead Software Architect & Product Designer** executing this master build. This prompt establishes the unified contract that connects the builds created today into a seamless, production-grade application.

### 1. Integration of Today's Parallel Builds
Today, three major UI systems were engineered:
1. **Build A — The 11-Panel Restoration Road Discernment Mirror:**
   - Sequential, 4-phase progressive disclosure journey (Panels 1–11).
   - Earthy theological palette (Deep Ochre `#9A5B2D`, Slate Blue `#3E5C76`, Radiant Amber `#D97706`, Forest Green `#2D6A4F`, Warm Taupe `#5C5F66`).
   - Diagnostic distinction between **Absence** (Empty Chair `🪑`) and **Suppression** (Muted Microphone `🎙️`).
   - Contemplative silence timer, Marcus private letter, Thinking Hats dialogue studio, Missional Copilot AI drawer, and 12-page printable retreat guide.
2. **Build B — The Layer 0–5 Deep Diagnostic Workbench:**
   - Layer 0: Setup & Context (`/setup/roster`, `/setup/context`).
   - Layer 1: Team Portrait & 5-Ring Radar (`/dashboard/portrait`).
   - Layer 2: Systemic Diagnostics (`/dashboard/diagnostics` — Culture Rewards, Activity Inventory, Suppression Grid, Movement Arc).
   - Layer 3: Correctives Engine & Thinking Hats Studio (`/dashboard/correctives`).
   - Layer 4: 12-Week Formation Protocol & Health Score (`/dashboard/formation`).
   - Layer 5: Missional Copilot Drawer & Executive Board Dossier (`/dashboard/export`).
3. **Build C — Case Study Homepage & Context Architecture:**
   - Public landing page (`/`) featuring the Restoration Road narrative, interactive team preview, and frictionless entry into the dashboard.

### 2. Core Architectural Requirements for Full End-to-End Integration
- **Bidirectional Navigation Bridges:**
  - In the 11-Panel Mirror:
    * Panel 3 (Team Map) embeds a direct bridge card to Layer 1 Portrait (`/dashboard/portrait`).
    * Panel 4 (Cascade) and Panel 6 (Culture Audit) embed direct bridge cards to Layer 2 Diagnostics (`/dashboard/diagnostics`).
    * Panel 9 (Corrective Pathway) embeds direct bridge cards to Layer 3 Correctives (`/dashboard/correctives`) and Layer 4 Formation (`/dashboard/formation`).
    * Panel 11 (Fullness Vision) embeds a direct bridge card to Layer 5 Board Export (`/dashboard/export`).
  - In the Layer 1–5 Sub-surfaces:
    * Every page (`/dashboard/portrait`, `/dashboard/diagnostics`, `/dashboard/correctives`, `/dashboard/formation`, `/dashboard/export`) features a prominent, elegant contextual bridge banner:
      `← Return to 11-Panel Discernment Mirror (Restoration Road Walkthrough)`
- **Responsive Discernment Compass:**
  - Desktop (`lg` and above): 280px sticky left navigation rail with panel progress indicators, phase badges, and active state.
  - Mobile and Tablet (`< lg`): Responsive mobile quick-jump bar and expandable discernment drawer allowing seamless jump between panels on small viewports.
- **Strict 6-Layer Type Safety Chain:**
  - Strictly maintain the unidirectional pipeline:
    `SourceTeamState` → `ComputedMetrics` → `InterpretedDiagnostic`
  - Zero `any` casts across all panels, widgets, drawers, and hooks.
- **Alan Hirsch Design System & Tailwind Best Practices:**
  - Fluid typography with serif headings, legible humanist body prose, and tracking-widest monospace accents.
  - Generous spatial rhythm (`space-y-12 sm:space-y-16`) to preserve contemplative gravitas.
  - Zero generic red/amber/green traffic lights.

### 3. Execution Rule: No Mid-Flight Testing Until the End
- Execute Phase 1 through Phase 6 completely in a continuous, unbroken build sequence.
- Do NOT pause mid-flight for isolated tests.
- Upon completion of all integration phases, execute the comprehensive test and verification gate (TypeScript type-check, Vitest unit test suite, Next.js static production build).

---

## 1. Architectural Blueprint & Unification Map

```
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│ TOPBAR CHROME: Ecclesial Identity • Christological Anchor Banner • Global Discernment Utilities │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│ PERSISTENT BREADCRUMB STRIP: Dual-Mode Navigation (11-Panel Mirror ↔ Layer 0-5 Diagnostic Workbench) │
├──────────────────────────┬──────────────────────────────────────────────────────────────────┤
│ RESPONSIVE DISCERNMENT   │ PRIMARY STAGE (Max-W 6xl Centered Viewport)                      │
│ COMPASS (Sticky Rail /   │                                                                  │
│ Mobile Drawer)           │ ┌──────────────────────────────────────────────────────────────┐ │
│                          │ │ PHASE 1: IDENTITY & CALLING                                  │ │
│ • Mode Selector          │ │ • Panel 1: The Team at a Glance (5 Organic Orbs & Roster)   │ │
│ • 11 Panel Items with    │ │ • Panel 2: Individual Profiles (Zone A/B/C Person-First)     │ │
│   Progress Markers       │ └──────────────────────────────────────────────────────────────┘ │
│ • Ambient Health:        │ ┌──────────────────────────────────────────────────────────────┐ │
│   - Empty Chair (E-Gap)  │ │ PHASE 2: SYSTEMIC DIAGNOSIS & GAP ANALYSIS                   │ │
│   - Muted Mic (P-Suppr)  │ │ • Panel 3: The Team Map (5Q Pentagon + Bridge to Layer 1)    │ │
│                          │ │ • Panel 4: The Cascade (Metabolic Flow + Bridge to Layer 2)  │ │
│                          │ │ • Panel 5: The Shadow Report (Divine Gift vs Distortion)     │ │
│                          │ │ • Panel 6: The Culture Audit (Monopoly Grid + Bridge to L2)  │ │
│                          │ └──────────────────────────────────────────────────────────────┘ │
│                          │ ┌──────────────────────────────────────────────────────────────┐ │
│                          │ │ PHASE 3: TRAJECTORY & ECCLESIAL ARCS                         │ │
│                          │ │ • Panel 7: The Maturity Arc (Levels 1–5 Vertical Timeline)   │ │
│                          │ │ • Panel 8: Movement-to-Institution Lifecycle Sigmoid Arc     │ │
│                          │ └──────────────────────────────────────────────────────────────┘ │
│                          │ ┌──────────────────────────────────────────────────────────────┐ │
│                          │ │ PHASE 4: CONSTRUCTIVE ACTION & FULLNESS                      │ │
│                          │ │ • Panel 9: Corrective Pathway (Horizons + Bridge to L3/L4)   │ │
│                          │ │ • Panel 10: The Conversation Starters (6 Cards + 90s Silence)│ │
│                          │ │ • Panel 11: The Fullness Vision (Ephesians 4:13 Doxology)    │ │
│                          │ └──────────────────────────────────────────────────────────────┘ │
└──────────────────────────┴──────────────────────────────────────────────────────────────────┘
```

---

## 2. Granular Implementation Steps (Sequential Execution)

### Phase 1: Responsive Discernment Compass & Mobile Navigation
- Enhance `MirrorDashboard.tsx` with a responsive mobile panel-switcher bar (`lg:hidden`) allowing phone and tablet users to track progress and jump between Panels 1–11.
- Ensure the sticky left navigation rail (`hidden lg:block`) tracks scroll position smoothly without layout shift.
- Standardize the Christological Anchor Banner to ensure smooth infinite rotation across all screen sizes.

### Phase 2: Bidirectional Navigation Bridges (Mirror ↔ Layer 1–5)
- **Panel 3 (Team Map):** Insert an interactive diagnostic bridge component linking to `/dashboard/portrait` with callouts for Euclidean Pairings and individual radar geometries.
- **Panel 4 (Cascade) & Panel 6 (Culture Audit):** Insert diagnostic bridge cards linking to `/dashboard/diagnostics` for deep inspection of the Activity Inventory and Suppression Matrix.
- **Panel 9 (Corrective Pathway):** Insert strategic action bridge cards linking to `/dashboard/correctives` (Thinking Hats session) and `/dashboard/formation` (12-week formation calendar).
- **Panel 11 (Fullness Vision):** Insert executive closing bridge card linking to `/dashboard/export` (board-ready printable dossier).
- **Layer 1–5 Pages:** Update `/dashboard/portrait/page.tsx`, `/dashboard/diagnostics/page.tsx`, `/dashboard/correctives/page.tsx`, `/dashboard/formation/page.tsx`, and `/dashboard/export/page.tsx` with a top contextual bridge returning to `/dashboard`.

### Phase 3: Theological Design System & Typography Unification
- Validate all color tokens: Deep Ochre (`#9A5B2D`), Slate Blue (`#3E5C76`), Radiant Amber (`#D97706`), Forest Green (`#2D6A4F`), Warm Taupe (`#5C5F66`).
- Verify that every appearance of the Empty Chair (Absence) and Muted Microphone (Suppression) contains theological tooltips explaining the pastoral reality.
- Maintain person-first presentation: ensure individual names and narrative callings take visual precedence over diagnostic metrics.

### Phase 4: Modal & Slide-Over Drawer Verification
- Confirm `ThinkingHatsStudio.tsx` operates seamlessly when launched from TopBar, Panel 4, or Panel 9.
- Confirm `MissionalCopilotDrawer.tsx` operates seamlessly with both Hermeneutical Interpretation and Prophetic Challenge modes.
- Confirm `RetreatPrintGuide.tsx` renders clean, high-fidelity `@media print` styling without clipping or horizontal overflow.
- Confirm `MarcusPastoralNote.tsx` and `DigitalSummaryModal.tsx` open and close with proper focus trapping and keyboard escape handling.

### Phase 5: Type Safety Chain & Schema Integrity
- Audit `src/lib/types/apest.ts` to ensure strict typings for all new bridge components and navigation props.
- Ensure zero `any` or untyped parameters.

### Phase 6: End-to-End Verification & Quality Gates (The Testing Gate)
Once all integration code is in place, execute full testing:
1. **Unit Test Suite:** Run `npm test` (Vitest) and assert all mathematical formulas, coverage tier classifications, and Euclidean distances pass 100%.
2. **Production Build Gate:** Run `npm run build` (Next.js) and verify:
   - Zero TypeScript errors (`tsc --noEmit`).
   - Zero ESLint errors.
   - All 12 static routes generated cleanly.
3. **100% Verification Ledger:** Update `STATE.md` with every phase marked complete and detailed sign-off.

---

## 3. Verification Rubric & Acceptance Criteria

| Requirement | Target Standard | Verification Method |
|---|---|---|
| **Build & Compilation** | Exit code 0, zero warnings | `npm run build` |
| **Test Suite** | 100% pass rate | `npm test` |
| **Sequential Flow** | Panels 1–11 unlocked progressively | Interactive test in `MirrorDashboard` |
| **Bidirectional Bridges** | All 5 sub-routes bridge to/from Mirror | Route links verified |
| **Responsive Compass** | Desktop sticky rail + mobile drawer | Viewport responsiveness |
| **Theological Palette** | Earthy tokens, zero traffic-light colors | CSS inspect |
| **Diagnostic Rigor** | Absence vs. Suppression distinct | Tooltips and glyph verification |
