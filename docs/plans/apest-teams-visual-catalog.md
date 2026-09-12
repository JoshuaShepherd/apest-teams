# 5Q Visual Artifacts & UI Architectural Catalog

> **Source:** Direct extraction from *5Q: Reactivating the Original Intelligence and Capacity of the Body of Christ* (Alan Hirsch, 2017) and Alan Hirsch archives.  
> **Package Location:** [`docs/build/plans/assets/5q-visuals/`](file:///c:/Users/Josh/Desktop/movemental-repos/brad-brisco-multi/docs/build/plans/assets/5q-visuals/)  
> **Purpose:** Authoritative design reference for translating Alan Hirsch's canonical diagrams into the digital UI of the APEST Teams dashboard.

---

## 1. Visual Index & Core Architectural Mappings

| Figure File | Book Reference | Core Concept | Target Dashboard Component |
|---|---|---|---|
| [`fig-8.1-jesus-space-expansion.jpg`](file:///c:/Users/Josh/Desktop/movemental-repos/brad-brisco-multi/docs/build/plans/assets/5q-visuals/fig-8.1-jesus-space-expansion.jpg) | *5Q* Ch. 14, p. 182 | **Expanding "Jesus Space"** | Screen 1.2: The Team Wheel Center |
| [`fig-8.2-5q-pentagon-archetype.jpg`](file:///c:/Users/Josh/Desktop/movemental-repos/brad-brisco-multi/docs/build/plans/assets/5q-visuals/fig-8.2-5q-pentagon-archetype.jpg) | *5Q* Ch. 14, p. 185 | **The 5Q Pentagonal Geometry** | Master Visual Grammar & Icons |
| [`fig-8.3-symmetric-fullness-pleroma.jpg`](file:///c:/Users/Josh/Desktop/movemental-repos/brad-brisco-multi/docs/build/plans/assets/5q-visuals/fig-8.3-symmetric-fullness-pleroma.jpg) | *5Q* Ch. 14, p. 188 | **Symmetric Fullness ($Pleroma$)** | Benchmark of Team Maturity ($Teleios$) |
| [`fig-8.4-asymmetric-distorted-church.jpg`](file:///c:/Users/Josh/Desktop/movemental-repos/brad-brisco-multi/docs/build/plans/assets/5q-visuals/fig-8.4-asymmetric-distorted-church.jpg) | *5Q* Ch. 14, p. 190 | **Asymmetric Truncation / Pathology** | Screen 1.2 & 2.1: Suppression Diagnostics |
| [`fig-8.5-5q-organizational-mri-radar.jpg`](file:///c:/Users/Josh/Desktop/movemental-repos/brad-brisco-multi/docs/build/plans/assets/5q-visuals/fig-8.5-5q-organizational-mri-radar.jpg) | *5Q* Ch. 14, p. 194 | **The Organizational MRI (5 Levels)** | Screen 1.2: Radar Chart with Maturity Rings |
| [`fig-9.1-base-ministry-and-phases.jpg`](file:///c:/Users/Josh/Desktop/movemental-repos/brad-brisco-multi/docs/build/plans/assets/5q-visuals/fig-9.1-base-ministry-and-phases.jpg) | *5Q* Ch. 15, p. 201 | **Base Ministry & Equipping Phases** | Screen 4.2: Individual Member Formation Card |
| [`fig-9.2-personal-equipping-phases.jpg`](file:///c:/Users/Josh/Desktop/movemental-repos/brad-brisco-multi/docs/build/plans/assets/5q-visuals/fig-9.2-personal-equipping-phases.jpg) | *5Q* Ch. 15, p. 203 | **Personal Equipping Matrix** | Screen 4.2: Member Growth Journey |
| [`fig-9.3-apest-activity-inventory.jpg`](file:///c:/Users/Josh/Desktop/movemental-repos/brad-brisco-multi/docs/build/plans/assets/5q-visuals/fig-9.3-apest-activity-inventory.jpg) | *5Q* Ch. 15, p. 206 | **APEST Functional Activity Inventory** | Screen 2.1: Diagnostic 3 (Output vs. Gifting) |
| [`fig-9.4-apest-perspectives-round-table.jpg`](file:///c:/Users/Josh/Desktop/movemental-repos/brad-brisco-multi/docs/build/plans/assets/5q-visuals/fig-9.4-apest-perspectives-round-table.jpg) | *5Q* Ch. 15, p. 210 | **APEST Perspectives Round Table** | Screen 3.2: Thinking Hats Facilitation Studio |
| [`fig-9.5-apest-leadership-pipeline.jpg`](file:///c:/Users/Josh/Desktop/movemental-repos/brad-brisco-multi/docs/build/plans/assets/5q-visuals/fig-9.5-apest-leadership-pipeline.jpg) | *5Q* Ch. 15, p. 214 | **The APEST Discipleship Pipeline** | Screen 4.1: 12-Week Team Formation Plan |
| [`state-of-the-system-leverage-points.png`](file:///c:/Users/Josh/Desktop/movemental-repos/brad-brisco-multi/docs/build/plans/assets/5q-visuals/state-of-the-system-leverage-points.png) | Hirsch Archives | **Systems Theory Leverage Points** | Screen 5.1: Agentic Diagnostic Engine |

---

## 2. Deep-Dive: Translating Book Visuals into Product Features

### 1. The "Jesus Space" Fullness Metric (Figures 8.1, 8.3 & 8.4)
* **Hirsch's Theological Design:** In *5Q*, the center of the pentagonal radar chart is not empty space; it represents the **"Jesus Space"**—the zone of Christ's active, operational presence (*pleroma*). When all five functions are balanced and maturing (Figure 8.3), the shaded area expands to its maximum perimeter. When a function is suppressed or missing (Figure 8.4), the shape pinches and distorts, visually demonstrating that missing an APEST voice diminishes the team's manifestation of Jesus.
* **Product Recommendation for Screen 1.2 (The Team Wheel):**
  * The center of the pentagon radar chart must be labeled **"Jesus Space / Fivefold Fullness"**.
  * The surface area of the filled polygon directly drives the **Fullness Percentage metric**.
  * When hovering over pinched vertices, tooltip text states: *"Christological deficit: Lack of [Apostolic/Evangelistic] expression restricts the community's capacity to reflect Jesus as [Pioneer/Herald]."*

---

### 2. The 5-Ring Organizational MRI (Figure 8.5)
* **Hirsch's Diagnostic Model:** The 5Q MRI does not merely measure whether someone has a gift; it measures **five concentric levels of organizational maturity**:
  * *Level 1:* Latent / Unconscious intuition.
  * *Level 2:* Emerging personal practice.
  * *Level 3:* Local communal expression.
  * *Level 4:* Institutional alignment and equipping of others.
  * *Level 5:* Cultural and systemic movemental reproduction.
* **Product Recommendation for Screen 1.2:**
  * The radar chart axes feature 5 discrete concentric rings corresponding to Levels 1–5.
  * Each function's plot displays two data points: raw capacity (from the 5Q scores) and **observed maturity level** (derived from the activity inventory).

---

### 3. The Functional Activity Inventory Matrix (Figure 9.3)
* **Hirsch's Operational Tool:** A matrix where leaders list every church program, staff meeting, and budget item, tagging them with primary and secondary APEST codes (e.g., `St` for pastoral teaching; `Ap` for church planting; `E` for neighborhood outreach).
* **Product Recommendation for Screen 2.1 (Diagnostic 3):**
  * Provide an interactive table where the team imports calendar events or inputs weekly hours.
  * The system calculates the ratio of operational time spent in each function.
  * Side-by-side bar graphs contrast **What the Team Carries (Composition)** vs. **Where the Hours Go (Output)**, exposing the Shepherd-Teacher equilibrium trap in black and white.

---

### 4. The Perspectives Round Table (Figure 9.4)
* **Hirsch's Discernment Tool:** An object, value, or decision is placed in the literal center of a table, with five leaders positioned at the vertices. None can see the entire object alone; only by combining all five viewpoints is the object seen truthfully.
* **Product Recommendation for Screen 3.2 (Thinking Hats Studio):**
  * The central UI element is a circular **"Discernment Table"** containing the team's focal decision (e.g., *"Should Restoration Road launch a worshipping household in Aurora?"*).
  * The five APEST icons sit in a circle around the decision.
  * During the facilitated exercise, the active lens illuminates while the others dim, guiding the team to examine the problem sequentially through each function's unique cognitive orientation.

---

### 5. Orbital Base Ministry & Equipping Phases (Figures 9.1 & 9.2)
* **Hirsch's Personal Growth Model:** An individual’s primary gift sits in a large central sphere ("Base Ministry"). Surrounding it are smaller orbital spheres representing temporary "Phases" where the person is intentionally stretched into their non-dominant gifts to achieve ambidexterity.
* **Product Recommendation for Screen 4.2 (Individual Formation Cards):**
  * Each member's card renders an orbital map:
    * Center: Primary Base Gift (e.g., Marcus Webb = `Apostle`).
    * Inner Ring: Secondary Voice (e.g., `Teacher`).
    * Active Orbit: Current 12-Week Growth Phase (e.g., Marcus entering a `Shepherding` phase via the 30-minute humanizing dialogue with James).
