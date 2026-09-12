# APEST Teams: Screen-by-Screen Functional Specifications

> **Status:** Authoritative Functional & Technical Specification  
> **Tenant:** `alan-hirsch` (`tenant_modules.fiveq`)  
> **Reference Data:** Restoration Road Community Church (Marcus Webb, Priya Nair, James Okafor, Sofia Reyes, Daniel Park)  
> **Focus:** Content Architecture, Component Hierarchy, Data Contracts, User Flows, and Agentic Prompts. *(Pure structure and behavior; no CSS or aesthetic rules).*

---

# System Architecture & Route State Machine

```
[Public Marketing]           [Setup & Ingest]                [The Live Dashboard]
/apest-teams (Landing)  ──►  /apest-teams/setup/roster  ──►  /apest-teams/[teamId]
        │                            │                             │
        ▼                            ▼                             ├── #portrait
/apest-teams/checkout        /apest-teams/setup/context            ├── #diagnostics
  (Seat Selection)                   │                             ├── #correctives
                                     ▼                             ├── #formation
                              [5/5 Completion Gate]                └── [Overlays & Drawers]
                                                                        ├── Member Drawer
                                                                        ├── Agent Copilot
                                                                        ├── Thinking Hats
                                                                        └── Discernment Archive
```

---

# LAYER 0: Onboarding & Team Assembly

## Screen 0.1 — Team Assembly & Profile Completion Gate
* **Route Path:** `/apest-teams/setup/roster`
* **Access Control:** Team Buyer / Administrator (Marcus Webb)
* **Primary Job:** Provision team seats, invite members, and enforce the 100% profile completion gate before synthesis.

### Component Tree
```
<TeamAssemblyView>
  <AssemblyHeader />
  <SeatCounter capacity={5} filled={5} />
  <RosterTable>
    <RosterRow status="imported" member="Marcus Webb" role="Lead Pastor" />
    <RosterRow status="imported" member="Priya Nair" role="Director of Community Formation" />
    <RosterRow status="imported" member="James Okafor" role="Executive Pastor" />
    <RosterRow status="pending_assessment" member="Sofia Reyes" role="Outreach Director" />
    <RosterRow status="pending_assessment" member="Daniel Park" role="Worship Pastor" />
  </RosterTable>
  <CompletionGateBanner isLocked={true} />
  <AgentGateNotice />
</TeamAssemblyView>
```

### Content & Data Bindings
* **Header Title:** "Assemble the Restoration Road Leadership Team"
* **Header Subtitle:** "APEST Teams evaluates the living ecology between members. A partial team picture produces a false diagnosis. All five profiles must be in the system before the dashboard activates."
* **Roster Status Entries:**
  1. *Marcus Webb:* 5Q PDF Imported (A–T–P–S–E) · Status: Complete
  2. *Priya Nair:* 5Q PDF Imported (P–S–E–T–A) · Status: Complete
  3. *James Okafor:* 5Q PDF Imported (S–T–P–E–A) · Status: Complete
  4. *Sofia Reyes:* Invite sent to `sofia@restorationroad.org` · Status: Assessment Pending (Takes 20 min)
  5. *Daniel Park:* Invite sent to `daniel@restorationroad.org` · Status: Assessment Pending (Takes 20 min)
* **Gate Banner Copy:** "Dashboard Inactive (3 of 5 Profiles Connected). Waiting on Sofia Reyes and Daniel Park."

### Flows & Interactions
* **Invite Action:** Admin inputs email, selects staff/volunteer, and toggles `formalAuthority: true/false`.
* **Member Join Flow (`/apest-teams/join/[token]`):**
  * If the invitee already has a 5Q assessment in their account locker $\rightarrow$ one-click "Attach to Restoration Road".
  * If the invitee has no 5Q profile $\rightarrow$ routes immediately to the 5Q Assessment upload/intake flow.
* **Unlock Trigger:** Once Sofia and Daniel complete/attach their 5Q results, the completion banner unlocks and transitions the admin to Screen 0.2.

---

## Screen 0.2 — Team Context Form
* **Route Path:** `/apest-teams/setup/context`
* **Access Control:** Team Administrator (Marcus Webb)
* **Primary Job:** Collect qualitative institutional context to calibrate the AI agent’s diagnostic baseline.

### Component Tree
```
<TeamContextFormView>
  <ContextIntroBanner />
  <FormStepContainer>
    <TeamTypeSelectField />
    <TenureSelectField />
    <StatedMissionTextarea />
    <PersistentFrustrationTextarea />
    <ThrivingVisionTextarea />
  </FormStepContainer>
  <FormSubmitButton label="Generate Team Dashboard" />
</TeamContextFormView>
```

### Content & Data Bindings
* **Team Type:** "Church Staff Team (Executive & Pastoral)"
* **Tenure of Team:** "Together 2–3 years (Core church planted 9 years ago)"
* **Stated Mission Input:** "To be an incarnational, sent community in East Denver that makes disciples, embodies Jesus’ kingdom, and plants neighborhood expressions across the city."
* **Persistent Frustration Input:** "Attendance has plateaued for 3 years at ~340 adults. Staff meetings are consumed by Sunday programming, pastoral care emergencies, and budget logistics. We talk about being missional, but our actual output is inward-facing pastoral maintenance."
* **Thriving Vision in 12 Months Input:** "Activating new missional communities outside the church building, breaking our pastoral care bottleneck, and empowering our team to lead with spiritual boldness rather than operational management."
* **Agent Calibration Copy:** *"Your context is diagnostic data. A team with strong apostolic scores in a church plant reads as natural expansion; that same composition in a 9-year-old plateaued church indicates structural blockage."*

### Flows & Interactions
* **Submit Action:** Validates all fields $\rightarrow$ triggers `POST /api/custom/apest-teams/generate` $\rightarrow$ runs arithmetic computation layer $\rightarrow$ streams agentic interpreted synthesis $\rightarrow$ redirects to `/apest-teams/[teamId]`.

---

# LAYER 1: The Team Portrait

## Screen 1.1 — The Five Profiles Side by Side
* **Anchor ID:** `#portrait-profiles`
* **Primary Job:** Display the individual fivefold vocational profiles of all five members without encouraging toxic numerical rank-comparisons.

### Component Tree
```
<ProfilesSideBySideSection>
  <SectionHeading title="The Team As A Body" />
  <ProfilesGrid columns={5}>
    <MemberProfileCard member="Marcus Webb" primary="apostle" secondary="teacher" />
    <MemberProfileCard member="Priya Nair" primary="prophet" secondary="shepherd" />
    <MemberProfileCard member="James Okafor" primary="shepherd" secondary="teacher" />
    <MemberProfileCard member="Sofia Reyes" primary="evangelist" secondary="shepherd" />
    <MemberProfileCard member="Daniel Park" primary="prophet" secondary="teacher" />
  </ProfilesGrid>
</ProfilesSideBySideSection>
```

### Content & Data Bindings
* **Marcus Webb (Lead Pastor):**
  * Badges: Primary `Apostle` · Secondary `Teacher` · Authority Holder
  * Full Stack: `A (46) > T (35) > P (27) > S (13) > E (9)`
  * Intelligence Descriptor: *"Pioneer & Architect — Sees systems, pushes into uncharted territory, articulates theological frameworks for movement."*
* **Priya Nair (Formation Director):**
  * Badges: Primary `Prophet` · Secondary `Shepherd`
  * Full Stack: `P (47) > S (36) > E (24) > T (16) > A (8)`
  * Intelligence Descriptor: *"Covenant Guardian & Healer — Discerning moral compromise and naming truth with deep personal affection."*
* **James Okafor (Executive Pastor):**
  * Badges: Primary `Shepherd` · Secondary `Teacher` · Authority Holder
  * Full Stack: `S (48) > T (37) > P (21) > E (12) > A (7)`
  * Intelligence Descriptor: *"Relational Infrastructure & Mentor — Grounding community in stability, peace, safety, and formative wisdom."*
* **Sofia Reyes (Outreach Director):**
  * Badges: Primary `Evangelist` · Secondary `Shepherd`
  * Full Stack: `E (45) > S (38) > P (20) > T (14) > A (8)`
  * Intelligence Descriptor: *"Threshold Gatherer — Infectious gospel warmth, building relational bridges where outsiders belong before they believe."*
* **Daniel Park (Worship Pastor):**
  * Badges: Primary `Prophet` · Secondary `Teacher`
  * Full Stack: `P (46) > T (38) > S (22) > E (11) > A (6)`
  * Intelligence Descriptor: *"Reformer & Interrogator — Quiet contemplative depth, testing church culture against the living presence of God."*

### Flows & Interactions
* Clicking any `MemberProfileCard` opens **Screen 08 (Member Profile Drawer)** displaying their full 44-page breakdown in the context of the team.

---

## Screen 1.2 — The Team Wheel (Composition vs. Activation)
* **Anchor ID:** `#portrait-wheel`
* **Canonical Visual Reference:** *5Q* Ch. 14, Figures 8.1–8.5 (The "Jesus Space" Pentagon & Organizational 5Q MRI)
* **Primary Job:** Visualize the team's collective fivefold capacity using a dual-layer pentagonal radar chart structured around concentric maturity rungs and the central Christological fullness area.

### Component Tree
```
<TeamWheelSection>
  <WheelVisualizationContainer>
    <PentagonRadarChart rings={5} maxLevel="Level 5: Cultural Reproduction">
      <MaturityRingsLabels levels={["L1: Intuitive", "L2: Personal", "L3: Communal", "L4: Institutional", "L5: Movemental"]} />
      <CompositionLayerPolygon data={compositionData} />
      <ActivationLayerPolygon data={activationData} />
      <JesusSpaceCenterArea surfaceAreaPct={54} label="Jesus Space / Christological Fullness" />
      <SuppressionZoneMarkers data={suppressionGaps} />
    </PentagonRadarChart>
    <WheelLegend>
      <LegendItem label="Compositional Weight (What You Carry)" />
      <LegendItem label="Activation Weight (What You Actually Use)" />
      <LegendItem label="Jesus Space (Shaded Area of Operative Fullness)" />
      <LegendItem label="Suppression Gap (Unrealized Intelligence)" />
    </WheelLegend>
  </WheelVisualizationContainer>
  <WheelInterpretationPanel />
</TeamWheelSection>
```

### Content & Data Bindings
* **The "Jesus Space" Fullness Metric:**
  * Symmetrical Fullness ($Pleroma$): 54% of maximum ideal perimeter.
  * Pinched Vertices: Apostolic (15.0) and Evangelistic (20.2) create visible indentations in the polygon, visually demonstrating that the team operates with a diminished manifestation of Jesus the Pioneer and Jesus the Herald.
* **Pentagon Axes (Scale 0–50 Team Mean across 5 Maturity Rings):**
  * Apostolic Axis: Team Mean = 15.0 / 50 (Benchmark: 21.0) · Observed Maturity: Level 2 (Personal intuition in Marcus, unexpressed in team).
  * Prophetic Axis: Team Mean = 32.2 / 50 (Benchmark: 23.0) · Observed Maturity: Level 4 (Institutional conscience via Priya & Daniel).
  * Evangelistic Axis: Team Mean = 20.2 / 50 (Benchmark: 25.0) · Observed Maturity: Level 2 (Relational threshold practice in Sofia; 0 organizational alignment).
  * Shepherding Axis: Team Mean = 31.4 / 50 (Benchmark: 27.0) · Observed Maturity: Level 4 (Deeply embedded pastoral care & groups).
  * Teaching Axis: Team Mean = 28.0 / 50 (Benchmark: 28.0) · Observed Maturity: Level 4 (Systematic preaching & discipleship tools).
* **Composition vs. Activation Gap Callouts:**
  * *Prophetic Axis:* High Composition (Priya 47, Daniel 46) vs. Low Historical Activation. (Agent Note: *"The team carries massive prophetic fire that has been structurally unhoused."*)
  * *Evangelistic Axis:* Moderate Composition (Sofia 45) vs. Severely Suppressed Activation. (Agent Note: *"Evangelism is active in Sofia's heart but suppressed by the church's programmatic machine."*)

---

## Screen 1.3 — The Pairing Map (Corrective Relationship Network)
* **Anchor ID:** `#portrait-pairings`
* **Primary Job:** Display the web of functional tensions between team members, indicating whether the corrective dynamics are active, dormant, or blocked.

### Component Tree
```
<PairingNetworkSection>
  <NetworkGraphView>
    <MemberNodes entries={members} />
    <PairingTensionEdge source="Marcus" target="James" pair="A-S" status="active" />
    <PairingTensionEdge source="Priya" target="Sofia" pair="P-E" status="blocked" />
    <PairingTensionEdge source="Marcus" target="Daniel" pair="A-P" status="dormant" />
    <PairingTensionEdge source="Daniel" target="James" pair="P-S" status="friction" />
    <PairingTensionEdge source="Sofia" target="James" pair="E-S" status="active" />
  </NetworkGraphView>
  <PairingDetailDrawerTrigger />
</PairingNetworkSection>
```

### Content & Data Bindings
* **A–S Edge (Marcus ↔ James):** Status: *Active (The Humanizing Dialogue)*. Description: "Apostolic vision testing against pastoral cost."
* **P–E Edge (Daniel/Priya ↔ Sofia):** Status: *Blocked by Intellectual Culture*. Description: "Prophetic truth is missing evangelistic grace-notes, causing Sofia to feel excluded from theological debate."
* **P–T Edge (Daniel ↔ James/Marcus):** Status: *Dormant*. Description: "Daniel’s reforming theology has not been invited into weekly curriculum planning."

---

# LAYER 2: The Diagnostic

## Screen 2.1 — The Four Diagnostics Panel
* **Anchor ID:** `#diagnostics`
* **Primary Job:** Execute the four foundational diagnostic assessments from the Hirsch corpus.

### Component Tree
```
<DiagnosticsPanelSection>
  <DiagnosticGrid>
    <!-- Card 1 -->
    <CultureRewardCard status="amber">
      <StatedVsRevealedBarChart />
      <DiagnosticCopy />
    </CultureRewardCard>
    <!-- Card 2 -->
    <PresenceSuppressionMatrix status="red">
      <FivefoldStatusGrid />
      <StructuralHomeAudit />
    </PresenceSuppressionMatrix>
    <!-- Card 3 -->
    <OutputInventoryComparison status="amber">
      <ActivityTaggingChart />
      <DiscrepancyNarrative />
    </OutputInventoryComparison>
    <!-- Card 4 -->
    <MovementArcTimeline status="amber">
      <ArcSlider currentZone="Zone 4: Equilibrium" targetZone="Zone 2: Growth" />
      <ArcAnalysisCopy />
    </MovementArcTimeline>
  </DiagnosticGrid>
</DiagnosticsPanelSection>
```

### Content & Data Bindings

#### Card 1: What Does the Culture Reward?
* Stated Values: Apostolic Extension (80%), Discipleship Depth (75%), Missional Sending (85%).
* Revealed Values (Resourced & Celebrated): Sunday Gathering Production (90%), Pastoral Counseling & Care (85%), Small Group Curriculum (75%), Outward Neighborhood Planting (15%).
* Synthesis Copy: *"Restoration Road preaches movemental mission from the pulpit, but budgets and calendars reward pastoral maintenance and operational comfort."*

#### Card 2: Presence vs. Suppression Grid
* Matrix Data:
  * **Apostle:** Present? Yes (1) · Activated? Partial · Structurally Housed? Yes (Lead Pastor role).
  * **Prophet:** Present? Yes (2) · Activated? No · Structurally Housed? **NO (Zero formal home).**
  * **Evangelist:** Present? Yes (1) · Activated? No · Structurally Housed? **NO (Trapped in program admin).**
  * **Shepherd:** Present? Yes (4) · Activated? Yes · Structurally Housed? Yes (Pastoral care & groups).
  * **Teacher:** Present? Yes (4) · Activated? Yes · Structurally Housed? Yes (Pulpit & curriculum).
* Synthesis Copy: *"Daniel Park’s prophetic voice has had zero structural permission in staff meetings. Sofia’s evangelistic voice is choked by event logistics."*

#### Card 3: Functional Output vs. Composition (The 5Q APEST Inventory)
* **Canonical Visual Reference:** *5Q* Ch. 15, Figure 9.4 (The APEST Activity Inventory Matrix)
* **Tagging Taxonomy:** Every staff role, budget item, and weekly program is tagged with a primary and secondary APEST code (e.g., `St` for pastoral teaching; `Ap` for church planting; `Es` for community meals).
* 12-Month Staff Time Inventory:
  * Shepherding Output (`S` / `St`): 42% of calendar hours.
  * Teaching Output (`T` / `Ts`): 31% of calendar hours.
  * Operational Administration (`Admin`): 18% of calendar hours.
  * Prophetic Discernment (`P` / `Pt`): 4% of calendar hours.
  * Apostolic Pioneering / Neighborhood Evangelism (`A` / `E`): 5% of calendar hours.
* Synthesis Copy: *"A team with 68 combined points in Prophet and Evangelist devotes less than 9% of its weekly work to those functions."*

#### Card 4: Where Are You on the Movement-Institution Arc?
* Current Position: **Zone 4 — Institutional Equilibrium**.
* Characteristics: "Predictable Sunday service, excellent care systems, flatlined attendance plateau, high pastoral burden, risk-averse decision making."
* Target Trajectory: **Zone 2 — Missional Growth & Expansion**.
* Synthesis Copy: *"Equilibrium is not peace; it is stagnation. To return to Zone 2, the team must allow the prophetic voice to disrupt comfort and the apostolic voice to pioneer new ground."*

---

# LAYER 3: The Corrective Relationships Engine

## Screen 3.1 — The Corrective Relationship Activator
* **Anchor ID:** `#corrective-activator`
* **Primary Job:** Provide customized, repeatable relational rituals for active pairs to prevent shadow behaviors from damaging the team.

### Component Tree
```
<CorrectiveActivatorSection>
  <ActivatorDeck>
    <CorrectiveCard pair="Marcus (A) ↔ James (S)" ritualName="The Humanizing Conversation" />
    <CorrectiveCard pair="Priya / Daniel (P) ↔ Sofia (E)" ritualName="The Grace-Note Filter" />
    <CorrectiveCard pair="Daniel (P) ↔ Marcus (A)" ritualName="The Table Discernment" />
  </ActivatorDeck>
</CorrectiveActivatorSection>
```

### Content & Data Bindings
* **Ritual 1: The Humanizing Conversation (Marcus Webb ↔ James Okafor):**
  * Frequency: 30 minutes prior to every major vision-casting announcement.
  * Script / Prompt: *"Marcus, present your proposed initiative to James. James, your mandate is not to veto, but to ask: 'Who in our community will this be hardest for? What care systems must exist before we announce this?'"*
* **Ritual 2: The Grace-Note Filter (Daniel Park ↔ Sofia Reyes):**
  * Frequency: Monthly prior to church-wide discernment.
  * Script / Prompt: *"Daniel, share your prophetic critique of the community with Sofia. Sofia, your mandate is to translate it: 'How do we frame this truth so seekers hear Jesus' love before they feel judged?'"*
* **Ritual 3: The Table Discernment (Daniel Park ↔ Marcus Webb):**
  * Frequency: First Tuesday of every month.
  * Script / Prompt: *"Marcus hands the agenda to Daniel. Daniel opens with: 'What does God require of us in this particular moment, and what are we avoiding?' Marcus must sit in silence and say only: 'Say more.'"*

---

## Screen 3.2 — The APEST Thinking Hats Facilitation Studio
* **Route Path:** `/apest-teams/[teamId]/thinking-hats`
* **Access Control:** All Team Members
* **Canonical Visual Reference:** *5Q* Ch. 15, Figure 9.5 (The APEST Perspectives Round Table)
* **Primary Job:** Digital implementation of the 5-lens discernment tool from *The Permanent Revolution*, structured visually as a virtual round table where the challenge sits at the center and all five APEST voices rotate around it.

### Component Tree
```
<ThinkingHatsStudioView>
  <PerspectivesRoundTableLayout>
    <CentralDecisionSphere challenge="Should Restoration Road plant an apartment community in the Aurora Corridor?" />
    <SurroundingLensesRing activeLens="P">
      <LensOrbitNode gift="A" status="completed" label="Apostolic Lens" />
      <LensOrbitNode gift="P" status="active" label="Prophetic Lens" />
      <LensOrbitNode gift="E" status="upcoming" label="Evangelistic Lens" />
      <LensOrbitNode gift="S" status="upcoming" label="Shepherding Lens" />
      <LensOrbitNode gift="T" status="upcoming" label="Teaching Lens" />
    </SurroundingLensesRing>
  </PerspectivesRoundTableLayout>
  <ActiveLensWorkspace lens="P">
    <LensGuidingQuestion question="What is God requiring of us here, and where are we rationalizing comfort?" />
    <TeamMemberResponseStream>
      <ResponseBubble member="Daniel Park" response="Aurora is underserved, but if we go there with our current consumer model, we will fail them." />
      <ResponseBubble member="Priya Nair" response="We cannot plant in Aurora while our current food pantry treats neighbors as numbers." />
    </TeamMemberResponseStream>
    <TimedLensCountdown minutesRemaining={4} />
  </ActiveLensWorkspace>
  <AgentSynthesisDrawer />
</ThinkingHatsStudioView>
```

### Flows & Interactions
* Sequential 6-minute rounds through all 5 lenses:
  1. `Apostolic Lens`: Focuses on frontier pioneering and boundary crossing.
  2. `Prophetic Lens`: Focuses on covenant alignment and divine righteousness.
  3. `Evangelistic Lens`: Focuses on outsiders, accessibility, and the good news.
  4. `Shepherding Lens`: Focuses on human dignity, stability, and emotional cost.
  5. `Teaching Lens`: Focuses on scriptural precedent, doctrine, and frameworks.
* **Agent Closure Prompt:** At the conclusion, the agent asks: *"Having viewed Aurora through all five lenses: What does the team know now that it did not know 30 minutes ago?"* $\rightarrow$ Saves consensus to the Discernment Archive.

---

## Screen 3.3 — The Discernment Archive
* **Route Path:** `/apest-teams/[teamId]/archive`
* **Primary Job:** Maintain longitudinal organizational memory of decisions, tensions, and shifts in functional activation.

### Component Tree
```
<DiscernmentArchiveView>
  <ArchiveTimelineFilter />
  <ArchiveEntriesList>
    <ArchiveEntryCard date="2026-06-12" title="Aurora Corridor Missional Household" dominantLenses={["A", "P"]} outcome="Approved prototype; Daniel to draft rule of life." />
    <ArchiveEntryCard date="2026-04-05" title="Food Pantry Relational Restructuring" dominantLenses={["P", "E", "S"]} outcome="Transitioned pantry from drive-thru to sit-down community meal." />
  </ArchiveEntriesList>
  <LongitudinalTrendChart metric="activationOverTime" />
</DiscernmentArchiveView>
```

---

# LAYER 4: The Formation Engine

## Screen 4.1 — The 12-Week Team Formation Plan
* **Anchor ID:** `#formation-plan`
* **Primary Job:** Structured curriculum moving the team from passive diagnostic reading into active behavioral discipleship.

### Component Tree
```
<TeamFormationPlanSection>
  <PlanOverviewHeader duration="12 Weeks" target="Break Shepherd-Teacher Equilibrium" />
  <PlanPillarsGrid>
    <!-- Pillar 1 -->
    <PillarCard title="1. Structural Realignments">
      <TaskItem completed={true} text="Institute monthly 'The Table' discernment meeting led by Daniel Park." />
      <TaskItem completed={true} text="Reallocate 40% of Sofia's hours from admin to neighborhood threshold relationships." />
      <TaskItem completed={false} text="Establish bi-weekly pre-flight humanizing check between Marcus and James." />
    </PillarCard>
    <!-- Pillar 2 -->
    <PillarCard title="2. Relational Correctives">
      <TaskItem completed={true} text="Run Thinking Hats session on Aurora Corridor expansion." />
      <TaskItem completed={false} text="Priya to audit small groups for truth-telling vs comfort." />
    </PillarCard>
    <!-- Pillar 3 -->
    <PillarCard title="3. Targeted Corpus Reading">
      <ReadingAssignment member="Marcus Webb" book="The Permanent Revolution" chapter="Ch. 7: The Apostle-Shepherd Dynamic" />
      <ReadingAssignment member="James Okafor" book="5Q" chapter="Ch. 5: Dismantling the Pastoral Monopoly" />
      <ReadingAssignment member="Daniel Park" book="The Forgotten Ways" chapter="Ch. 4: Apostolic Genius & Prophetic Edge" />
    </PillarCard>
  </PlanPillarsGrid>
</TeamFormationPlanSection>
```

---

## Screen 4.2 — Individual Formation Cards
* **Route Path:** `/apest-teams/[teamId]/my-formation`
* **Access Control:** Authenticated Member (Private to Member & Admin)
* **Canonical Visual Reference:** *5Q* Ch. 15, Figures 9.2 & 9.3 (Base Ministry & Orbital Equipping Phases)
* **Primary Job:** Give each leader their personalized, private discipleship edge within the team, structured visually as an orbital diagram with their Base Ministry in the center and current Equipping Phases in orbit.

### Component Tree
```
<IndividualFormationCardView member="Daniel Park">
  <MemberFormationHeader name="Daniel Park" role="Worship Pastor" primary="Prophet" secondary="Teacher" />
  <OrbitalEquippingDiagram>
    <BaseMinistryCentralSphere gift="Prophet" score={46} label="Base Ministry (Native Intuition)" />
    <SecondaryVoiceOrbit gift="Teacher" score={38} label="Secondary Voice (Formative Tool)" />
    <ActiveGrowthPhaseOrbit gift="Shepherd" status="in_progress" label="Current 12-Week Phase: Pastoral Affection" />
    <DormantPhasesOrbit gifts={["Apostle", "Evangelist"]} status="future" />
  </OrbitalEquippingDiagram>
  <FormationGuidanceDeck>
    <GuidanceCard title="My Role on this Team" text="..." />
    <GuidanceCard title="My Corrective Mandate" text="..." />
    <GuidanceCard title="My Formation Edge" text="..." />
  </FormationGuidanceDeck>
</IndividualFormationCardView>
```

### Content & Data Bindings (Example: Daniel Park)
* **My Role on this Team:** *"You are carrying the primary prophetic function on a team that has historically drifted into comfortable pastoral equilibrium. Your voice will feel disruptive, but it is essential for the church's spiritual survival."*
* **My Corrective Mandate:** *"When Marcus presents an ambitious vision, resist the urge to retreat into quiet cynicism. Challenge the foundation with theological precision, then help him build the alternative."*
* **My Formation Edge:** *"Practice gentleness. When exposing compromise, hold the hearts of your brothers and sisters with pastoral affection. Truth without grace hardens people."*

---

## Screen 4.3 — The Team Health Score
* **Anchor ID:** `#health-score`
* **Primary Job:** Composite 0–100 benchmark evaluating the living health of the leadership system.

### Component Tree
```
<TeamHealthScoreSection>
  <ScoreDisplay value={68} tier="Functional — Growth Active" />
  <SubmetricsBreakdown>
    <SubmetricBar label="Compositional Completeness" value={100} weight="20%" description="All 5 functions present." />
    <SubmetricBar label="Activation Rate" value={60} weight="25%" description="Daniel and Sofia activated; apostolic remains thin." />
    <SubmetricBar label="Corrective Pairings Health" value={65} weight="25%" description="A-S and P-E active; P-T developing." />
    <SubmetricBar label="Structural Housing" value={70} weight="15%" description="The Table created; outreach restructured." />
    <SubmetricBar label="Arc Alignment" value={45} weight="15%" description="Still carrying significant Zone 4 gravitational drag." />
  </SubmetricsBreakdown>
</TeamHealthScoreSection>
```

---

# LAYER 5: The Agentic Environment

## Screen 5.1 — The Team Agent Interface (Missional Copilot)
* **Mounting Component:** Slide-out Sheet Drawer (`<Sheet>` overlay accessible from any screen)
* **Context Injected:** Team metadata, 5 individual 5Q scores, coverage tiers, current arc position, recent archive entries.
* **Corpus RAG Index:** *5Q*, *The Permanent Revolution*, *The Forgotten Ways*, *Untamed*.

### Agent Mode Controller
```
<AgentModeSelector>
  <ModeTab id="research" label="Research (Corpus Retrieval)" />
  <ModeTab id="interpretation" label="Interpretation (Diagnostic Analysis)" />
  <ModeTab id="challenge" label="Challenge (Prophetic Provocation)" />
</AgentModeSelector>
```

### Concrete Interactions & Output Prompts

#### Scenario A: Interpretation Mode
* **User (Marcus):** *"Our staff meeting yesterday felt tense. Priya challenged the food pantry budget, and James immediately tried to smooth it over. How should we interpret this?"*
* **Agent Response:** 
  > *"Marcus, you are witnessing the classic clash between the Prophetic (`PS`) and the Shepherd-Teacher (`ST`) equilibrium cushion. Priya is asking whether your pantry produces disciples or dependents. James is feeling responsible for the volunteers who run it. Do not mediate this as an interpersonal conflict. At your next meeting, validate Priya’s question publicly, and ask James to help design a relational format where volunteers eat meals alongside neighbors. The goal is to let the prophet's challenge upgrade the shepherd's care."*

#### Scenario B: Challenge Mode
* **User (Marcus clicks "Challenge Us"):**
* **Agent Response:**
  > *"Marcus, Restoration Road has celebrated being a 'sent community' for nine years, yet 87% of your team's budget and staff hours are dedicated to Sunday morning execution. You carry an apostolic score of 46, but you have permitted the shepherd-teacher weight of your team to turn you into an executive manager. If you were planted in Denver today with no building and no budget, what would your team do tomorrow morning? Start there."*

---

## Screen 5.2 — The Quarterly Review Session
* **Route Path:** `/apest-teams/[teamId]/quarterly-review`
* **Primary Job:** Structured 60-minute quarterly alignment ritual for the leadership body.

### Four-Movement Flow
1. **Movement 1: What Has Shifted?** Agent compares current metrics against previous quarter:
   * *Restoration Road finding:* "Prophetic activation increased +35% following 3 consecutive sessions of The Table. Evangelistic threshold relationships grew from 0 to 17 active connections."
2. **Movement 2: What Has the Archive Revealed?** Identifies recurring patterns in decisions:
   * *Finding:* "In 4 of 5 major decisions, James initially moved to cushion conflict before the team reached breakthrough."
3. **Movement 3: The Next Formation Edge:** Single priority for the upcoming quarter:
   * *Target:* "Transition the Aurora Corridor missional apartment prototype from concept into living reality."
4. **Movement 4: The Team Covenant:** The team signs a single shared commitment logged into the permanent record.
