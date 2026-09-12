# PROMPT: Full-Stack React / Next.js Implementation Specification for APEST Teams

> **Master Autonomous Agent Prompt & System Vision**  
> **Repository:** `apest-teams`  
> **Target Framework:** Next.js 15 (App Router), React 19 / 18, TypeScript (Strict), Tailwind CSS, Framer Motion, Lucide Icons  
> **Theological & Ecclesial Foundation:** *5Q: Reactivating the Original Intelligence of the Body of Christ* (Alan Hirsch), *The Permanent Revolution* (Alan Hirsch & Tim Catchim), *The Forgotten Ways* (Alan Hirsch)  
> **Reference Case:** Restoration Road Community Church (Denver, CO — 5 Members)

---

## 1. Executive Vision & Agent Directive

You are tasked with building the complete, production-grade **APEST Teams** web application inside this repository.

### What APEST Teams Is
APEST Teams is not an HR personality test or corporate team-building app. It is a **living ecclesial diagnostic and discipleship engine** that reads the collective fivefold ministry (Apostle, Prophet, Evangelist, Shepherd, Teacher - Ephesians 4:1-16) of church leadership teams, elder boards, and church plant core teams.

The application exists to answer three foundational questions:
1. **Is the fivefold fullness of Christ present and active in this team?**
2. **Which functions are being structurally suppressed, and what cultural antibodies are causing it?**
3. **How does this team move from static institutional equilibrium into self-correcting movemental discipleship?**

### Quality Bar & Invariants
* **Zero Placeholders:** Every screen, chart, card, and modal must be fully interactive, styled, and wired to the data engine. No `TODO`, `lorem ipsum`, or mock stubs.
* **Tonal Elegance & Movemental Ink Aesthetic:** The application uses a rich, editorial design system — deep ink typography, warm stone backgrounds, bespoke pentagonal SVG visualizations, subtle glassmorphic sheets, and zero generic colors.
* **Deterministic Provenance (The 3-Layer Rule):**
  1. *SOURCE Layer:* Immutable raw data (0–50 vocational scores from 5Q Central PDFs, roster metadata, formal authority flags, qualitative context).
  2. *COMPUTED Layer:* Deterministic mathematical analysis (team means, national benchmarks, Euclidean pairwise distances, coverage tiers, Jesus Space polygon area).
  3. *INTERPRETED Layer:* Narrative synthesis and agentic copilot grounded in Alan Hirsch's theological corpus.
* **Self-Contained & Production-Ready:** Ships with pre-loaded Restoration Road Community Church reference data, allows dynamic roster manipulation, and supports full interactive onboarding, diagnostic inspection, discernment studios, and PDF printing.

---

## 2. Design System, Aesthetic Language & Tokens

### 2.1 Color Palette
The interface uses an editorial "ink & parchment" foundation accented by the 5 canonical APEST semantic colors:

```typescript
// tailwind.config.ts or CSS variables
export const apestTheme = {
  // Base Surface & Typography
  surface: {
    base: '#fbfbf9',       // warm stone canvas
    card: '#ffffff',       // pure white elevated card
    subtle: '#f4f4f0',     // muted stone container
    muted: '#e7e7e2',      // dividing borders / track
    border: '#dcdcd6',     // structured lines
  },
  ink: {
    primary: '#111827',    // high-contrast dark ink
    secondary: '#4b5563',  // readable body slate
    tertiary: '#9ca3af',   // subtle metadata
  },
  // The Five APEST Semantic Colors (Curated HSL)
  apest: {
    apostle: {
      base: '#9f1239',     // rose-800: deep architectural crimson
      light: '#ffe4e6',    // rose-100
      glow: 'rgba(159, 18, 57, 0.15)',
      badge: 'bg-rose-50 text-rose-800 border-rose-200'
    },
    prophet: {
      base: '#4338ca',     // indigo-700: transcendent covenant violet
      light: '#e0e7ff',    // indigo-100
      glow: 'rgba(67, 56, 202, 0.15)',
      badge: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    evangelist: {
      base: '#d97706',     // amber-600: hospitable herald gold
      light: '#fef3c7',    // amber-100
      glow: 'rgba(217, 119, 6, 0.15)',
      badge: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    shepherd: {
      base: '#047857',     // emerald-700: communal flourishing green
      light: '#d1fae5',    // emerald-100
      glow: 'rgba(4, 120, 87, 0.15)',
      badge: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
    teacher: {
      base: '#0369a1',     // sky-700: systematic doctrinal cobalt
      light: '#e0f2fe',    // sky-100
      glow: 'rgba(3, 105, 161, 0.15)',
      badge: 'bg-sky-50 text-sky-800 border-sky-200'
    }
  }
};
```

### 2.2 Typography & Layout Rules
* **Headings:** Modern serif or editorial sans (`font-serif` or `font-sans font-medium tracking-tight`).
* **Body Text:** Inter or system sans with optimal reading line-height (`leading-relaxed`).
* **Metrics & Scores:** Tabular figures (`font-mono tabular-nums tracking-tight`).
* **Tonal Elevation:** Rely on subtle background contrast (`bg-white shadow-sm ring-1 ring-black/5`) rather than heavy drop shadows.
* **Print Optimization:** Clean `@media print` rules removing headers/floating drawers and formatting each layer for 8.5x11 PDF export.

---

## 3. System Architecture & Route Blueprint

The application lives under the Next.js App Router structure:

```
src/
├── app/
│   ├── layout.tsx                     # Root layout with typography, theme & modal providers
│   ├── page.tsx                       # Landing page (/apest-teams marketing pitch)
│   ├── setup/
│   │   ├── roster/page.tsx            # Layer 0: Team Roster Ingest & 5/5 Completion Gate
│   │   └── context/page.tsx           # Layer 0: Qualitative Church Context Intake Form
│   ├── dashboard/
│   │   ├── layout.tsx                 # Dashboard Shell (Navbar, Breadcrumbs, Drawer host)
│   │   ├── page.tsx                   # Master Overview (Full 5-Layer Composite Report)
│   │   ├── portrait/page.tsx          # Layer 1: Team Portrait & Pentagonal Radar
│   │   ├── diagnostics/page.tsx       # Layer 2: Four Core Systemic Diagnostics
│   │   ├── correctives/page.tsx       # Layer 3: Corrective Pairings & Thinking Hats
│   │   ├── formation/page.tsx         # Layer 4: 12-Week Team Plan & Member Cards
│   │   └── export/page.tsx            # Print-ready 12-page executive board report
│   └── api/
│       ├── team/route.ts              # Team state CRUD & re-calculation engine
│       ├── parse-pdf/route.ts         # 5Q PDF text parser & score extractor
│       └── copilot/route.ts           # LLM agent stream (Interpretation & Challenge modes)
├── components/
│   ├── shell/                         # Nav, Breadcrumbs, Action Bar, Drawers
│   ├── layer0-assembly/               # Roster table, seat counter, invite modal
│   ├── layer1-portrait/               # Side-by-side cards, 5Q Radar, Pairing graph
│   ├── layer2-diagnostics/            # Culture Rewards, Suppression Grid, Inventory
│   ├── layer3-correctives/            # Activator cards, Thinking Hats Studio, Archive
│   ├── layer4-formation/              # 12-Week Roadmap, Member Formation, Health Score
│   ├── layer5-copilot/                # Missional Copilot Drawer, Quarterly Review
│   └── ui/                            # Buttons, badges, tabs, progress, dialogs
├── lib/
│   ├── engine/                        # Deterministic arithmetic & 5Q calculations
│   ├── fixtures/                      # Canonical Restoration Road dataset (5 members)
│   ├── types/                         # TypeScript interfaces (Source, Computed, Interpreted)
│   └── theology/                      # Alan Hirsch quote index, pairings & definitions
```

---

## 4. The 3-Tier Data Engine & Mathematical Algorithms

### 4.1 TypeScript Data Contracts (`src/lib/types/apest.ts`)
```typescript
export type ApestFunction = 'apostle' | 'prophet' | 'evangelist' | 'shepherd' | 'teacher';

export interface VocationalScore {
  score: number; // 0 - 50
  rank: 1 | 2 | 3 | 4 | 5;
  role: 'primary' | 'secondary' | 'supplementary';
}

export interface FiveQProfile {
  scores: Record<ApestFunction, VocationalScore>;
  primary: ApestFunction;
  secondary: ApestFunction;
  combination: {
    label: string;
    descriptor: string;
    populationPercent: number;
  };
  benchmarks: Record<ApestFunction, { you: number; others: number; populationPercent: number }>;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tenureYears: number;
  isStaff: boolean;
  hasFormalAuthority: boolean; // Institutional veto / decision power
  email: string;
  status: 'complete' | 'pending';
  profile: FiveQProfile;
}

export interface TeamContext {
  teamName: string;
  city: string;
  ecclesialType: 'church_staff' | 'church_plant' | 'elder_board' | 'network_cabinet';
  tenure: string;
  statedMission: string;
  persistentFrustration: string;
  thrivingVision: string;
}

export interface PairwiseTension {
  memberA: string;
  memberB: string;
  functionA: ApestFunction;
  functionB: ApestFunction;
  euclideanDistance: number;
  tensionLabel: string;
  correctiveDynamic: string;
  riskIfIgnored: string;
}

export interface ComputedTeamMetrics {
  means: Record<ApestFunction, number>;
  deltasVsNorms: Record<ApestFunction, number>; // Norms: A:21, P:23, E:25, S:27, T:28
  coverageTiers: Record<ApestFunction, 'STRONG' | 'PRESENT' | 'THIN' | 'ABSENT'>;
  primaryCounts: Record<ApestFunction, number>;
  secondaryCounts: Record<ApestFunction, number>;
  authorityWeights: Record<ApestFunction, number>;
  jesusSpaceArea: number; // Surface area of the pentagon (0 - 100% of theoretical maximum)
  pairwiseTensions: PairwiseTension[];
  teamHealthScore: number; // 0 - 100
}
```

### 4.2 Deterministic Arithmetic (`src/lib/engine/calculator.ts`)
1. **National Benchmark Deltas:**
   * Population baseline: `A: 21.0, P: 23.0, E: 25.0, S: 27.0, T: 28.0`.
   * Delta = `TeamMean[F] - PopulationNorm[F]`.
2. **Coverage Tiers:**
   * `STRONG`: Team Mean $\ge 35$ AND at least one member with primary role.
   * `PRESENT`: Team Mean between 25 and 34.
   * `THIN`: Team Mean between 15 and 24 (or only supplementary coverage).
   * `ABSENT`: Team Mean $< 15$ (Christological void).
3. **Jesus Space Pentagonal Area:**
   * For the 5 normalized scores $(r_0, r_1, r_2, r_3, r_4)$ on the pentagon vertices (at angles $72^\circ \cdot i$):
   $$\text{Area} = \frac{1}{2} \sin(72^\circ) \sum_{i=0}^{4} r_i \cdot r_{(i+1) \bmod 5}$$
   * Ratio against the perfect symmetric circle/pentagon $(50, 50, 50, 50, 50)$ yields the **Fullness Percentage ($Pleroma$)**.
4. **Euclidean Pairwise Distances:**
   * For any two members $X$ and $Y$:
   $$D(X, Y) = \sqrt{\sum_{f \in \text{APEST}} (S_X(f) - S_Y(f))^2}$$
   * Identifies `closestPair` (greatest natural empathy) and `furthestPair` (greatest corrective tension).
5. **Authority Weighted Influence:**
   * Calculates the charism balance among voting leaders (`hasFormalAuthority == true`) vs. the whole body, exposing institutional veto traps.

---

## 5. Detailed Component & Screen Implementation Blueprint

### 5.1 Layer 0: Onboarding, Roster Assembly & Ingest
* **Screen 0.1 (`/setup/roster`):**
  * Top bar showing seat allocation (e.g. 5 of 5 seats used).
  * Interactive Table listing members, role, authority toggle, and 5Q profile upload status.
  * Upload dropzone accepting 5Q Central PDF reports (or pre-populating Restoration Road test data).
  * **The 5/5 Completion Gate:** The "Proceed to Context" button is disabled with an explanatory banner: *"APEST Teams measures collective ecclesial ecology. Partial team data yields false diagnoses. All seats must be filled before synthesis."*
* **Screen 0.2 (`/setup/context`):**
  * Qualitative questionnaire capturing church context, stated mission, persistent frustrations, and 12-month vision.
  * Form submission triggers computation and routes into `/dashboard`.

### 5.2 Layer 1: The Team Portrait
* **Component 1.1: Side-by-Side Profiles (`<ProfilesSideBySide />`):**
  * 5 distinct cards showing each leader's primary and secondary badges, full 5-bar score graph (0–50), and formal authority indicator.
  * Clicking a card opens the **Member Profile Sheet** with Alan Hirsch's personalized commentary, supplementary growth phase, and blind spots.
* **Component 1.2: Dual-Layer Pentagonal Radar Wheel (`<TeamWheelPentagon />`):**
  * Custom SVG radar chart with 5 vertices (Apostle at top, Prophet, Evangelist, Shepherd, Teacher).
  * **5 Concentric Rings** representing the Organizational MRI levels:
    * Level 1: Latent / Unconscious intuition
    * Level 2: Emerging personal practice
    * Level 3: Local communal expression
    * Level 4: Institutional equipping
    * Level 5: Systemic movemental reproduction
  * Dynamic polygon showing the team's collective profile, filled with subtle glowing mesh gradient.
  * Center labeled **"Jesus Space / Fivefold Fullness"** displaying the Pleroma percentage.
  * Toggles allowing the user to overlay individual member vectors on top of the team average.
* **Component 1.3: Pairing Network Map (`<PairingNetworkMap />`):**
  * Node-and-link network visualizing the 10 pairwise relationships.
  * Line thickness and color reflect tension level and Euclidean distance.
  * Highlights critical pairings: `A-S` (Pioneering vs. Care), `P-E` (Holiness vs. Welcome), `P-T` (Spirit vs. Structure).

### 5.3 Layer 2: The Four Systemic Diagnostics (`<FourDiagnosticsGrid />`)
* **Diagnostic 1: What Does the Culture Reward?**
  * Compares natural team capacity against rewarded behaviors. Exposes that Western church culture heavily subsidizes Shepherd-Teacher while penalizing Apostle-Prophet.
* **Diagnostic 2: Presence vs. Suppression Matrix:**
  * Quadrant chart categorizing each of the five voices:
    * *Dominant & Empowered:* Shepherd (James) & Teacher (Marcus/James).
    * *Present but Misunderstood:* Prophet (Priya & Daniel).
    * *Structurally Suppressed:* Evangelist (Sofia — muted by academic theological rigor).
    * *Isolated Risk-Bearer:* Apostle (Marcus — unsupported by peer pioneers).
* **Diagnostic 3: Functional Activity Inventory (Output vs. Composition):**
  * Interactive breakdown of weekly staff hours (e.g. 180 total staff hours/week):
    * 55% Shepherd (pastoral counseling, emergency care, conflict resolution)
    * 30% Teacher (sermon prep, small group curriculum)
    * 10% Prophet (worship aesthetic, prayers)
    * 5% Evangelist (sporadic outreach)
    * 0% Apostle (expansion, planting, pioneering new spaces)
  * Exposes the "Shepherd-Teacher Trap": the team carries Apostolic & Prophetic calling, but spends 85% of time maintaining institutional equilibrium.
* **Diagnostic 4: The Movement-Institution Arc:**
  * Visual arc gauge placing the team on Alan Hirsch's 4-stage lifecycle:
    `Pioneering Movement -> Structured Movement -> Institution -> Calcified Decay`.
  * Pinpoints Restoration Road at **Stage 3 (Institution sliding into maintenance)** despite their missional desires.

### 5.4 Layer 3: Corrective Relationships Engine
* **Component 3.1: Corrective Relationship Activators (`<CorrectiveActivators />`):**
  * Practical protocol cards for paired members (e.g., Marcus [A] & James [S]):
    * *The Humanization Dialogue:* 30-minute structured monthly check-in where the Shepherd asks the Apostle: *"What is the relational human cost of your new initiative?"* and the Apostle asks: *"Where are we protecting comfort over mission?"*
* **Component 3.2: APEST Thinking Hats Facilitation Studio (`<ThinkingHatsStudio />`):**
  * Interactive modal simulating Edward de Bono's cognitive hats through the 5Q lens.
  * Team types a live strategic decision (e.g., *"Should we launch a house church network in Aurora?"*).
  * The studio leads the team through 5 timed rounds (3 min each):
    1. *The Apostolic Round:* Focus exclusively on pioneering, expansion, risk, and reproduction.
    2. *The Prophetic Round:* Focus exclusively on covenant alignment, God's voice, justice, and heart purity.
    3. *The Evangelistic Round:* Focus exclusively on outsiders, accessibility, storytelling, and hospitality.
    4. *The Shepherding Round:* Focus exclusively on community health, vulnerability, protection, and care.
    5. *The Teaching Round:* Focus exclusively on doctrinal truth, clarity, systems, and durable wisdom.
  * Real-time note capture under each hat with an "Export to Discernment Archive" button.
* **Component 3.3: The Discernment Archive (`<DiscernmentArchive />`):**
  * Searchable history of strategic decisions discerned via 5Q Thinking Hats, documenting votes, dissenting voices, and covenant agreements.

### 5.5 Layer 4: The Formation Engine
* **Component 4.1: 12-Week Team Formation Plan (`<TwelveWeekPlan />`):**
  * Step-by-step curriculum divided into three 4-week phases:
    * *Phase 1 (Weeks 1-4): Awareness & Deconstruction.* Dismantling the Pastor-Teacher binary and naming suppression.
    * *Phase 2 (Weeks 5-8): Tension Activation.* Practicing the 10 corrective pairings and thinking hats in staff meetings.
    * *Phase 3 (Weeks 9-12): Structural Alignment.* Re-allocating the budget and weekly calendar away from equilibrium toward missional emergence.
  * Interactive week toggles with readings from *5Q* / *The Permanent Revolution*, reflection prompts, and team homework.
* **Component 4.2: Individual Member Formation Cards (`<MemberFormationCards />`):**
  * Orbital growth diagram for each leader:
    * *Base Ministry (Core Gift):* Deepening master competence.
    * *Current Stretch Phase:* Intentional 12-week exercise in a non-dominant voice.
  * Concrete micro-habits tailored to the leader's specific 5Q profile.
* **Component 4.3: Unified Team Health Score (`<TeamHealthScore />`):**
  * Composite metric (0–100) calculated from:
    * 5Q Fullness ($Pleroma$)
    * Tension Resolution Index
    * Functional Output Alignment
    * Formation Plan Completion

### 5.6 Layer 5: The Agentic Environment & Missional Copilot
* **Component 5.1: Missional Copilot Drawer (`<MissionalCopilotDrawer />`):**
  * Slide-over AI chat sheet accessible from any dashboard screen.
  * Pre-loaded with Alan Hirsch's complete theological corpus, voice, and diagnostic heuristics.
  * **Two Operational Modes:**
    * *Interpretation Mode:* Explain scores, theological meaning of pairings, and why certain dynamics emerge.
    * *Challenge Mode:* Proactively provoke the team, confront peace-faking, interrogate the Shepherding bias, and call leaders into prophetic courage.
  * Strict ethical guardrails: Refuses to give hire/fire advice; always points back to communal discernment and discipleship.
* **Component 5.2: The Quarterly Review Session (`<QuarterlyReviewWizard />`):**
  * 4-movement guided team ritual:
    1. *Celebrate:* Review progress on the 12-week formation plan.
    2. *Diagnose:* Re-evaluate the Activity Inventory to see if hours shifted away from the Shepherd-Teacher trap.
    3. *Recalibrate:* Identify emerging tension points or new staff additions.
    4. *Covenant:* Draft and sign the team's next 90-day ecclesial covenant.

---

## 6. Pre-Loaded Reference Dataset: Restoration Road Community Church

The application must initialize with the complete, verified Restoration Road dataset so it is immediately fully explorable:

```json
{
  "team": {
    "name": "Restoration Road Community Church",
    "city": "Denver, CO",
    "ecclesialType": "church_staff",
    "tenure": "2-3 years together (9-year-old plant)",
    "statedMission": "To be an incarnational, sent community in East Denver that makes disciples and plants neighborhood expressions.",
    "persistentFrustration": "3-year attendance plateau (~340 adults). Staff meetings consumed by Sunday logistics and pastoral emergencies. Inward-facing maintenance.",
    "thrivingVision": "Activating new missional communities, releasing the pastoral care bottleneck, and leading with spiritual boldness."
  },
  "members": [
    {
      "id": "marcus-webb",
      "name": "Marcus Webb",
      "role": "Lead Pastor",
      "tenureYears": 9,
      "isStaff": true,
      "hasFormalAuthority": true,
      "email": "marcus@restorationroad.org",
      "status": "complete",
      "profile": {
        "primary": "apostle",
        "secondary": "teacher",
        "scores": {
          "apostle": { "score": 46, "rank": 1, "role": "primary" },
          "teacher": { "score": 35, "rank": 2, "role": "secondary" },
          "prophet": { "score": 27, "rank": 3, "role": "supplementary" },
          "shepherd": { "score": 13, "rank": 4, "role": "supplementary" },
          "evangelist": { "score": 9, "rank": 5, "role": "supplementary" }
        },
        "combination": { "label": "Architect Educator (A-T)", "populationPercent": 5, "descriptor": "Pioneers through systematic frameworks and deep theological architecture." }
      }
    },
    {
      "id": "priya-nair",
      "name": "Priya Nair",
      "role": "Director of Community Formation",
      "tenureYears": 3,
      "isStaff": true,
      "hasFormalAuthority": false,
      "email": "priya@restorationroad.org",
      "status": "complete",
      "profile": {
        "primary": "prophet",
        "secondary": "shepherd",
        "scores": {
          "prophet": { "score": 47, "rank": 1, "role": "primary" },
          "shepherd": { "score": 36, "rank": 2, "role": "secondary" },
          "evangelist": { "score": 24, "rank": 3, "role": "supplementary" },
          "teacher": { "score": 16, "rank": 4, "role": "supplementary" },
          "apostle": { "score": 8, "rank": 5, "role": "supplementary" }
        },
        "combination": { "label": "Contemplative Healer (P-S)", "populationPercent": 6, "descriptor": "Anchors the community in covenant fidelity and deep emotional healing." }
      }
    },
    {
      "id": "james-okafor",
      "name": "James Okafor",
      "role": "Executive Pastor",
      "tenureYears": 4,
      "isStaff": true,
      "hasFormalAuthority": true,
      "email": "james@restorationroad.org",
      "status": "complete",
      "profile": {
        "primary": "shepherd",
        "secondary": "teacher",
        "scores": {
          "shepherd": { "score": 48, "rank": 1, "role": "primary" },
          "teacher": { "score": 37, "rank": 2, "role": "secondary" },
          "prophet": { "score": 21, "rank": 3, "role": "supplementary" },
          "evangelist": { "score": 12, "rank": 4, "role": "supplementary" },
          "apostle": { "score": 7, "rank": 5, "role": "supplementary" }
        },
        "combination": { "label": "Pastoral Architect (S-T)", "populationPercent": 18, "descriptor": "The classic Shepherd-Teacher stabilizer, protecting staff health and institutional order." }
      }
    },
    {
      "id": "sofia-reyes",
      "name": "Sofia Reyes",
      "role": "Outreach & Neighboring Director",
      "tenureYears": 2,
      "isStaff": true,
      "hasFormalAuthority": false,
      "email": "sofia@restorationroad.org",
      "status": "complete",
      "profile": {
        "primary": "evangelist",
        "secondary": "shepherd",
        "scores": {
          "evangelist": { "score": 45, "rank": 1, "role": "primary" },
          "shepherd": { "score": 38, "rank": 2, "role": "secondary" },
          "prophet": { "score": 20, "rank": 3, "role": "supplementary" },
          "teacher": { "score": 14, "rank": 4, "role": "supplementary" },
          "apostle": { "score": 8, "rank": 5, "role": "supplementary" }
        },
        "combination": { "label": "Hospitable Herald (E-S)", "populationPercent": 9, "descriptor": "Builds relational bridges to outsiders and welcomes strangers into loving communion." }
      }
    },
    {
      "id": "daniel-park",
      "name": "Daniel Park",
      "role": "Worship & Arts Pastor",
      "tenureYears": 2,
      "isStaff": true,
      "hasFormalAuthority": false,
      "email": "daniel@restorationroad.org",
      "status": "complete",
      "profile": {
        "primary": "prophet",
        "secondary": "teacher",
        "scores": {
          "prophet": { "score": 46, "rank": 1, "role": "primary" },
          "teacher": { "score": 38, "rank": 2, "role": "secondary" },
          "shepherd": { "score": 22, "rank": 3, "role": "supplementary" },
          "evangelist": { "score": 11, "rank": 4, "role": "supplementary" },
          "apostle": { "score": 6, "rank": 5, "role": "supplementary" }
        },
        "combination": { "label": "Prophetic Reformer (P-T)", "populationPercent": 7, "descriptor": "Communicates transcendent truth through creative liturgy, song, and doctrinal depth." }
      }
    }
  ]
}
```

---

## 7. Execution Phasing & Agent Task Ledger

An agent executing this build should progress strictly through these 8 discrete phases:

* **Phase 1: Project Scaffolding & Foundation**  
  Initialize Next.js App Router, Tailwind CSS with Movemental ink/stone tokens and APEST semantic colors, Lucide icons, Framer Motion, and core TypeScript contracts.
* **Phase 2: Deterministic Arithmetic Engine & Fixtures**  
  Implement the 3-layer data model (`calculator.ts`), benchmark deltas, coverage tier classification, Jesus Space pentagon area formula, Euclidean distance pairwise calculations, and Restoration Road seed data. Author automated unit tests.
* **Phase 3: Application Shell & Global Navigation**  
  Build the dashboard chrome (`Navbar`, `Breadcrumbs`, view switcher, responsive drawer triggers, print layout controls).
* **Phase 4: Layer 0 — Onboarding, Roster Ingest & Completion Gate**  
  Build `/setup/roster`, dynamic seat counter, 5/5 completion gate barrier, PDF dropzone, and `/setup/context` intake form.
* **Phase 5: Layer 1 — The Team Portrait & Visualizations**  
  Build `<ProfilesSideBySide />`, interactive SVG `<TeamWheelPentagon />` with 5 concentric rings and "Jesus Space" calculation, and `<PairingNetworkMap />`.
* **Phase 6: Layer 2 — The Four Core Diagnostics**  
  Implement `<FourDiagnosticsGrid />`: Culture Rewards bar chart, Presence vs. Suppression matrix, Functional Activity Inventory table, and Movement-Institution Arc dial.
* **Phase 7: Layer 3 & Layer 4 — Correctives & Formation Engine**  
  Build `<CorrectiveActivators />`, interactive `<ThinkingHatsStudio />` with live timer and decision recorder, `<DiscernmentArchive />`, `<TwelveWeekPlan />`, orbital `<MemberFormationCards />`, and `<TeamHealthScore />`.
* **Phase 8: Layer 5, Copilot, Export & 100% Verification**  
  Implement the `<MissionalCopilotDrawer />` with Interpretation & Challenge modes, `<QuarterlyReviewWizard />`, `@media print` 12-page executive board report export, and full test suite validation.
