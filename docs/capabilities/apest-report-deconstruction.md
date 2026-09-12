# APEST Personal Vocational Report — Architecture & Deconstruction Specification

> **Purpose**: Deconstruction of the 44-page 5Q APEST Personal Vocational Report into a modular, parametric schema. This specification allows engineering, product, and AI agents to systematically generate synthetic, valid APEST profiles across all 20 dyad combinations and score distributions for testing the **APEST Teams** engine.

---

## 1. Document Architecture & Page Budget

The standard report follows a strict 44-page structural layout composed of 10 modular sections:

| Page Range | Section Name | Nature | Dynamic / Static |
|---|---|---|---|
| **pp. 01–02** | **Cover & Table of Contents** | Framing | Dynamic (Name, Date, Page anchors) |
| **pp. 03–05** | **Section 1: Introduction & Framework** | Theoretical Foundation | Static (Ephesians 4 theology, 3-tier capacity model) |
| **pp. 06–08** | **Section 2: Snapshot** | Profile Executive Summary | Dynamic (Primary, Secondary, Supplements, Scores, Bar chart) |
| **pp. 09–15** | **Section 3: Benchmarking** | Population Comparison | Dynamic (Percentiles, comparative scores vs 150k cohort, maturity actions) |
| **pp. 16–21** | **Section 4: Primary Capacity Deep Dive** | Gift Analysis (Rank 1) | Dynamic by Gift (Overview, Traits, Functions, Blind Spots, Impact) |
| **pp. 22–27** | **Section 5: Secondary Capacity Deep Dive** | Gift Analysis (Rank 2) | Dynamic by Gift (Overview, Traits, Functions, Blind Spots, Impact) |
| **pp. 28–29** | **Section 6: Combination Capacity** | Dyadic Archetype | Dynamic by Pair (Motto, Interweaving dynamic, Leadership style) |
| **pp. 30–36** | **Section 7: Supplementary Capacities** | Low Gifts (Ranks 3, 4, 5) | Dynamic by Gift (2 pages per gift: Overview, Signals, Intentional practices) |
| **pp. 37–40** | **Section 8: APEST Imbalance** | Systemic Ecology | Static / Reference (The 5 distortions when single gifts dominate) |
| **pp. 41–43** | **Section 9: Next Steps** | Development Pathways | Static / Commercial (Individual, Team, Bundle courses) |
| **p. 44** | **Section 10: Back Cover** | Conclusion | Static (Ephesians 4:11–12, 5Q Central URL) |

---

## 2. Canonical Profile Data Schema

Matches `FiveQApestProfileSchema` in `src/modules/fiveq/schemas/fiveq-apest-profile.ts`:

```typescript
export interface ApestReportData {
  participant: {
    name: string;
    reportDate: string; // YYYY-MM-DD
  };
  scores: {
    apostle: { score: number; rank: 1|2|3|4|5; role: "primary"|"secondary"|"supplementary" };
    prophet: { score: number; rank: 1|2|3|4|5; role: "primary"|"secondary"|"supplementary" };
    evangelist: { score: number; rank: 1|2|3|4|5; role: "primary"|"secondary"|"supplementary" };
    shepherd: { score: number; rank: 1|2|3|4|5; role: "primary"|"secondary"|"supplementary" };
    teacher: { score: number; rank: 1|2|3|4|5; role: "primary"|"secondary"|"supplementary" };
  };
  primary: "apostle" | "prophet" | "evangelist" | "shepherd" | "teacher";
  secondary: "apostle" | "prophet" | "evangelist" | "shepherd" | "teacher";
  combination: {
    keys: [string, string];
    label: string; // e.g. "Apostolic + Teaching" or "Apostle Teacher"
    motto: string; // e.g. "We are sent, therefore we must understand."
    populationPercent: number; // e.g. 5
    summary: string;
  };
  benchmarks: Record<string, {
    youScore: number;
    othersScore: number; // Cohort benchmark average
    populationPercent: number; // Percentage of population with this as primary/secondary
    strength: string;
    application: string;
  }>;
  supplementaryMaturity: Array<{
    gift: string;
    score: number;
    othersScore: number;
    definingFunction: string;
    underdevelopedRisk: string;
    actionStep: string;
  }>;
}
```

---

## 3. Modular Section Breakdown & Markdown Templates

### Section 0: Cover & Index (pp. 01–02)
- **Cover (p. 1)**:
  - Document Title: `APEST Personal Vocational Report`
  - Participant Name: `{{participant.name}}`
  - Date: `{{participant.reportDate}}`
  - Organization Badge: `5Q`
- **Index (p. 2)**:
  - Table of Contents with canonical page offsets.

---

### Section 1: Introduction & Framework (pp. 03–05)
*Universal / Static theological and structural foundation.*

- **p. 3**: Splash quote:
  > *"You were created with purpose, and gifted accordingly. This report will guide you in exploring your APEST design, and help you live more fruitfully in your calling."*
- **p. 4**: Biblical anchor:
  - Ephesians 4:7, 11–12 framing.
  - The 5 gifts: **Apostolic**, **Prophetic**, **Evangelistic**, **Shepherding**, **Teaching**.
  - Collective balance outcome: *Foster mature discipleship*, *Cultivate healthy communities*, *Catalyze movemental growth*.
  - Foundational doctrine: *These gifts are not reserved for leaders alone; every follower of Jesus has been given grace in one or more of these areas.*
- **p. 5**: The Three Capacity Tiers:
  - **Primary Capacity**: Dominant lens; instinctual way of seeing the world and engaging mission; internal motivations and convictions.
  - **Secondary Capacity**: How others experience you; the voice through which you communicate and build relationships.
  - **Supplementary Capacities**: Less instinctive but vital; ambidexterity metaphor (low development limits primary/secondary effectiveness).

---

### Section 2: Snapshot (pp. 06–08)
*The immediate executive summary of the individual profile.*

- **p. 7: Capacity Ranking Overview**:
  - **Primary Capacity**: `{{primary.label}}` (e.g. Apostolic)
    - *Card copy*: `{{primary.snapshotSummary}}`
    - Anchor: `Detailed report on page 16`
  - **Secondary Capacity**: `{{secondary.label}}` (e.g. Teaching)
    - *Card copy*: `{{secondary.snapshotSummary}}`
    - Anchor: `Detailed report on page 22`
  - **Supplementary Capacities**:
    - Rank 3: `{{supplementary[0].label}}`
    - Rank 4: `{{supplementary[1].label}}`
    - Rank 5: `{{supplementary[2].label}}`
    - Anchor: `Detailed report on page 30`
- **p. 8: Combination & Numerical Overview**:
  - **Combination Header**: `{{primary.label}} + {{secondary.label}}`
    - Short descriptor snippet.
  - **Your APEST Overview (Bar Chart)**:
    - 5 Bars rated 0–50:
      ```
      {{primary.label}}:     {{scores.primary.score}} / 50
      {{secondary.label}}:   {{scores.secondary.score}} / 50
      {{supplementary[0]}}:  {{scores.supplementary[0].score}} / 50
      {{supplementary[1]}}:  {{scores.supplementary[1].score}} / 50
      {{supplementary[2]}}:  {{scores.supplementary[2].score}} / 50
      ```

---

### Section 3: Benchmarking (pp. 09–15)
*Comparative placement against the 150,000+ participant database.*

- **p. 10: Primary Capacity Benchmark**:
  - Title: `PRIMARY CAPACITY — {{primary.label}}` (Score: `{{scores.primary.score}}`)
  - Bars: You (`{{scores.primary.score}}/50`) vs. Others (`{{benchmarks.primary.othersScore}}/50`)
  - Matrix:
    - **Score**: *"You're among the {{benchmarks.primary.populationPercent}}% whose strongest gift is {{primary.label}}."*
    - **Strength**: `{{benchmarks.primary.strength}}`
    - **Application**: `{{benchmarks.primary.application}}`
- **p. 11: Secondary Capacity Benchmark**:
  - Title: `SECONDARY CAPACITY — {{secondary.label}}` (Score: `{{scores.secondary.score}}`)
  - Bars: You (`{{scores.secondary.score}}/50`) vs. Others (`{{benchmarks.secondary.othersScore}}/50`)
  - Matrix:
    - **Score**: *"You're among the {{benchmarks.secondary.populationPercent}}% who reflect the {{secondary.label}} capacity."*
    - **Strength**: `{{benchmarks.secondary.strength}}`
    - **Application**: `{{benchmarks.secondary.application}}`
- **p. 12: Combination Capacity Benchmark**:
  - Title: `COMBINATION CAPACITY — {{primary.label}} + {{secondary.label}}`
  - Matrix:
    - **Score**: *"{{combination.populationPercent}}% of people share your {{primary.label}}–{{secondary.label}} combination."*
    - **Strength**: `{{combination.strength}}`
    - **Application**: `{{combination.application}}`
- **pp. 13–15: Supplementary Capacities Benchmarks (Ranks 3, 4, 5)**:
  - Header: `SUPPLEMENTARY CAPACITY {{rank}} — {{gift.label}}` (Score: `{{score}}/50` vs Others: `{{othersScore}}/50`)
  - Gift function: *"{{gift.definingFunction}}"*
  - **Maturity Steps block**:
    - Underdeveloped tendency: *"{{gift.underdevelopedRisk}}"*
    - **One Step Toward Maturity**: *"{{gift.actionStep}}"*

---

### Sections 4 & 5: Primary & Secondary Capacity Deep Dives (pp. 16–21 & pp. 22–27)
*Each capacity receives a rigorous 6-page deep dive template.*

| Page Offset | Sub-section | Structural Requirement |
|---|---|---|
| **Page +0** | **Cover Splash** | Large Gift Name + Iconic Glyphic Symbol |
| **Page +1** | **Overview** | 3–4 paragraphs detailing theological rationale, how it sees the world, system role, and mature expression. |
| **Page +2** | **Core Characteristics** | 7–8 bulleted behavioral and temperamental distinctives. |
| **Page +3** | **Key Functions** | 5 functional cards, each with a bold action title and a 2-sentence practical operationalization. |
| **Page +4** | **Blind Spots** | Warning callout: *"Unrefined {{gift}} leadership can cause friction. Watch for:"* + 6–7 shadow-side tendencies. |
| **Page +5** | **Impact** | Thematic subtitle (e.g. *"Extension – Living as One Who Is Sent"* or *"Helping Others Understand and Grow"*), 2–4 strategic practice callouts, closing synthesis. |

---

### Section 6: Combination Capacities / Archetype (pp. 28–29)
*Unpacks the dyadic interplay of Primary + Secondary.*

- **p. 28**: Splash page: `{{primary.label}} + {{secondary.label}}`
- **p. 29**: Narrative Archetype Deconstruction:
  - **Axiomatic Motto**: *"{{combination.motto}}"* (e.g. *"We are sent, therefore we must understand."*)
  - **Paragraph 1 (Dynamic Interplay)**: How the primary drive and secondary voice cooperate (e.g. pioneering + clarifying).
  - **Paragraph 2 (Method & Communication)**: Pedagogy, training style, word creation, and learning environments.
  - **Paragraph 3 (Identity & Maturity)**: Inward integration vs. outward boundary-crossing; role as leader, theologian, or practitioner; title designation (e.g. *"The Apostle Teacher"*).

---

### Section 7: Supplementary Capacities Deep Dive (pp. 30–36)
*Covers the 3 lower-ranking capacities (2 pages per capacity).*

- **p. 30**: Section Splash with all 3 supplementary glyphs.
- **For each Supplementary Gift (pp. 31–32, 33–34, 35–36)**:
  - **Page A (Overview & Signals)**:
    - Capacity definition and role within discipleship.
    - Subheading: *"Growing in {{gift}} Strength"*
    - 4 bullet points of dormant/intuitive signals that prove this gift is present:
      - *"A desire for..."*
      - *"A longing for..."*
      - *"An inner alertness when..."*
      - *"A need to speak up when..."*
  - **Page B (Impact & Practice)**:
    - Posture subtitle (e.g. *"Your Voice Matters"*, *"Creating Space for Growth"*, *"Expansion – Helping Others Find Belonging"*).
    - 3–4 concrete micro-habits / disciplines.
    - Concluding commissioning statement.

---

### Section 8: APEST Imbalance (pp. 37–40)
*Systemic health and ecological dangers — critical for APEST Teams testing.*

- **p. 37**: Splash page: Decline/distortion visual.
- **p. 38**: The 5 Systemic Distortions:
  1. **Apostolic Overemphasis**: *Overemphasis on vision without care*
  2. **Prophetic Overemphasis**: *Truth without grace*
  3. **Evangelistic Overemphasis**: *Growth without depth*
  4. **Shepherding Overemphasis**: *Unity without movement*
  5. **Teaching Overemphasis**: *Knowledge without action*
- **pp. 39–40**: The 5 Isolated Overreaches:
  - **A (without PEST) — Apostolic Overreach**: Fast-moving, high-pressure, visionary but lacking care and discernment; causes burnout and relational debris.
  - **P (without AEST) — Prophetic Imbalance**: Reactive, super-spiritual, constant activism or detached mysticism; lacks practical follow-through.
  - **E (without APST) — Evangelistic Imbalance**: Fixated on numbers and celebrity culture; values immediate decisions over deep theological roots.
  - **S (without APET) — Shepherding Overemphasis**: Risk-averse, protective, emotionally dependent; resists change and sacrificial mission.
  - **T (without APES) — Teaching in Isolation**: Intellectualized, rigid, ideological; elevates right doctrine above obedience and living love.

---

### Section 9 & 10: Next Steps & Back Matter (pp. 41–44)
- **p. 41**: Next Steps Splash.
- **p. 42**: Individual Test Result Course ($25.00).
- **p. 43**: Team Dynamics Course ($40.00) & Whole Course Bundle ($210.00).
- **p. 44**: Back Cover — Ephesians 4:11–12 and 5Q Central reference.

---

## 4. The 20 APEST Dyad Archetypes Reference Table

Use this matrix to generate combination pages (pp. 28–29) and benchmark stats (p. 12) for any valid profile:

| Primary | Secondary | Dyad Code | Archetype Title | Core Motto / Identity Hook | Pop % |
|---|---|---|---|---|---|
| **Apostle** | **Prophet** | `AP` | The Pioneer Reformer | *"We pioneer to align with divine truth."* | ~4% |
| **Apostle** | **Evangelist** | `AE` | The Entrepreneurial Recruiter | *"We mobilize new movements for the lost."* | ~3% |
| **Apostle** | **Shepherd** | `AS` | The Movement Pastor | *"We plant healthy, sustainable communities."* | ~2% |
| **Apostle** | **Teacher** | `AT` | The Architect Educator | *"We are sent, therefore we must understand."* | ~5% |
| **Prophet** | **Apostle** | `PA` | The Visionary Provocateur | *"We disrupt the old to establish the holy."* | ~3% |
| **Prophet** | **Evangelist** | `PE` | The Convicting Herald | *"We call the lost to repentance and righteousness."* | ~2% |
| **Prophet** | **Shepherd** | `PS` | The Covenant Caregiver | *"We heal wounds while upholding divine truth."* | ~4% |
| **Prophet** | **Teacher** | `PT` | The Theological Interrogator | *"We test doctrine against the living presence."* | ~5% |
| **Evangelist**| **Apostle** | `EA` | The Expansionist Catalyst | *"We ignite contagious gospel expansion."* | ~3% |
| **Evangelist**| **Prophet** | `EP` | The Urgent Messenger | *"We proclaim radical alignment with God's Kingdom."*| ~2% |
| **Evangelist**| **Shepherd** | `ES` | The Relational Gatherer | *"We welcome the outsider into loving community."* | ~6% |
| **Evangelist**| **Teacher** | `ET` | The Apologetic Herald | *"We explain the good news with irresistible clarity."*| ~4% |
| **Shepherd**  | **Apostle** | `SA` | The Community Builder | *"We shepherd people into purposeful outward mission."*| ~4% |
| **Shepherd**  | **Prophet** | `SP` | The Spiritual Director | *"We guard hearts and attune ears to God's voice."* | ~5% |
| **Shepherd**  | **Evangelist**| `SE` | The Hospitable Welcomer | *"We build safe spaces where the seeking belong."* | ~8% |
| **Shepherd**  | **Teacher** | `ST` | The Discipleship Mentor | *"We nourish souls with sound wisdom and care."* | ~12%|
| **Teacher**   | **Apostle** | `TA` | The Paradigm Innovator | *"We build frameworks to propel the movement."* | ~6% |
| **Teacher**   | **Prophet** | `TP` | The Wisdom Sage | *"We unpack divine truth to expose cultural compromise."*| ~5% |
| **Teacher**   | **Evangelist**| `TE` | The Catechetical Mobilizer | *"We articulate faith so anyone can share it."* | ~4% |
| **Teacher**   | **Shepherd** | `TS` | The Pastoral Instructor | *"We patiently guide people toward maturity in truth."* | ~11%|

---

## 5. Team Test Scenario Profiles Matrix

For testing `src/modules/fiveq/schemas/apest-team.ts` and `computed-layer.ts`, use these 5 synthetic archetype profiles:

```json
[
  {
    "name": "Alan (The Apostolic Architect)",
    "primary": "apostle",
    "secondary": "teacher",
    "scores": { "apostle": 46, "teacher": 34, "prophet": 28, "shepherd": 9, "evangelist": 9 },
    "role": "Lead Architect"
  },
  {
    "name": "Sarah (The Communal Shepherd)",
    "primary": "shepherd",
    "secondary": "teacher",
    "scores": { "shepherd": 45, "teacher": 38, "prophet": 24, "apostle": 12, "evangelist": 8 },
    "role": "Community Director"
  },
  {
    "name": "Marcus (The Prophetic Provocateur)",
    "primary": "prophet",
    "secondary": "apostle",
    "scores": { "prophet": 48, "apostle": 36, "teacher": 22, "evangelist": 14, "shepherd": 10 },
    "role": "Vision & Integrity"
  },
  {
    "name": "Chloe (The Outward Herald)",
    "primary": "evangelist",
    "secondary": "shepherd",
    "scores": { "evangelist": 44, "shepherd": 32, "teacher": 20, "apostle": 16, "prophet": 12 },
    "role": "Outreach Lead"
  },
  {
    "name": "David (The Systemic Educator)",
    "primary": "teacher",
    "secondary": "apostle",
    "scores": { "teacher": 47, "apostle": 33, "prophet": 26, "shepherd": 15, "evangelist": 11 },
    "role": "Content & Training"
  }
]
```

### Team Computation Test Checks
When synthesized in `ComputedLayerSchema`:
- **Team Size ($n$)**: 5
- **Tier Distribution**: Check for `STRONG` (Shepherd, Teacher, Apostle), `PRESENT` (Prophet), `THIN/ABSENT` (Evangelistic coverage gap).
- **Distance Pairs**: Marcus (Prophet-Apostle) and Sarah (Shepherd-Teacher) will produce maximum distance in `ComputedPairSchema` (`furthestPair`), flagging natural creative tension.
