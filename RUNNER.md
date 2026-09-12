# Autonomous Execution Runner & Closed-Loop Protocol (RUNNER.md)

**Package:** `apest-teams`  
**Purpose:** Defines the deterministic, closed-loop state machine, automated verification gates, and self-healing diagnostic algorithm that guarantees 100% completion of the APEST Teams Next.js implementation down to visual fidelity, mathematical correctness, and complete functionality.

---

## 1. The Autonomous Runner Architecture

The runner executes as a strict, non-terminating state machine until all phases are marked `COMPLETE` in `STATE.md` and the final exit gate (`G-FINAL`) returns exit code `0`.

```mermaid
graph TD
    Start[1. Orient & Inspect STATE.md] --> SelectPhase[2. Select Lowest Incomplete Phase]
    SelectPhase --> ReadSpec[3. Read PROMPT.md & Docs Specifications]
    ReadSpec --> Execute[4. Implement Code, Components & Logic]
    Execute --> RunGate{5. Phase Gate Command Passed? exit 0}
    RunGate -->|Fail (Non-zero)| SelfHeal[6. Self-Healing Diagnostic Cycle] --> Execute
    RunGate -->|Pass (exit 0)| LogState[7. Record Verification in STATE.md]
    LogState --> CheckMore{8. More Phases Remaining?}
    CheckMore -->|Yes| SelectPhase
    CheckMore -->|No| ExitGate{9. Master Exit Gate G-FINAL Passed?}
    ExitGate -->|Fail| Remediate[Fix Final Regression Gaps] --> Execute
    ExitGate -->|Pass| Certified[100% Verified, Sealed & Production Ready]
```

---

## 2. The 6-Step Pass Protocol

Every phase must be executed strictly following these six steps in sequence:

```
FOR EACH PHASE (Phase 1 through Phase 8):

1. ORIENT:
   - Read STATE.md to confirm the active phase.
   - Inspect the phase checklist and target file paths.
   - Verify working directory cleanliness and package status.

2. READ SPECIFICATIONS:
   - Read relevant sections in:
     * PROMPT.md (Architecture, Design System, Component Hierarchy)
     * docs/plans/apest-teams-product-overview.md
     * docs/plans/apest-teams-screen-specifications.md
     * docs/plans/apest-teams-visual-catalog.md
     * docs/audience-and-personas/AUDIENCE-AND-PERSONAS.md
   - Ensure all theological and mathematical invariants are strictly respected.

3. CONSTRUCT & WIRE:
   - Implement surgical code across components, utilities, schemas, and routes.
   - Strictly apply semantic Tailwind tokens (zero hardcoded random hex).
   - Ensure tonal elevations (warm stone background, elevated white cards, crisp typography).
   - Author or update dedicated unit test files to validate math and state logic.

4. GATE CHECK (Automated Verification):
   - Execute the exact PowerShell / bash gate command defined in Section 4.
   - Gate MUST return exit code 0.
   - If gate fails, IMMEDIATELY invoke the Self-Healing Diagnostic Cycle (Section 3). Do NOT advance!

5. RECORD EVIDENCE:
   - Update phase status from [ ] to [x] in STATE.md.
   - Record gate verification output timestamp.

6. PROCEED TO NEXT PHASE:
   - Loop back to Step 1 for the subsequent phase.
```

---

## 3. Self-Healing Diagnostic Cycle

If any gate command returns a non-zero exit code, execute this diagnosis loop:

```
                  +-----------------------------------+
                  | GATE FAILURE DETECTED (Exit != 0) |
                  +-----------------------------------+
                                    |
                                    v
                  +-----------------------------------+
                  | STEP 1: ISOLATE THE ROOT ERROR    |
                  | Inspect exact line and file trace |
                  +-----------------------------------+
                                    |
         +--------------------------+--------------------------+
         |                                                     |
         v                                                     v
+-----------------------------+               +-----------------------------+
| TypeScript / Syntax Error:  |               | Arithmetic / Test Failure:  |
| - Inspect types/apest.ts    |               | - Inspect calculator.ts     |
| - Check property nullability|               | - Verify 5Q benchmark math  |
| - Fix missing exports       |               | - Check Euclidean formula   |
+-----------------------------+               +-----------------------------+
         |                                                     |
         +--------------------------+--------------------------+
                                    |
                                    v
                  +-----------------------------------+
                  | STEP 2: APPLY SURGICAL FIX        |
                  | Modify ONLY the offending file    |
                  +-----------------------------------+
                                    |
                                    v
                  +-----------------------------------+
                  | STEP 3: RE-RUN PHASE GATE COMMAND |
                  +-----------------------------------+
```

---

## 4. Automated Phase Verification Gates

| Phase | Description | Automated Gate Command | Pass Criteria |
|---|---|---|---|
| **Gate G1** | Scaffolding & Setup | `npm run build --dry-run` or verify `package.json`, `tsconfig.json`, `tailwind.config.ts` | All config files present and syntactically valid. |
| **Gate G2** | Math & Arithmetic Engine | `npm test -- src/lib/engine/calculator.test.ts` | 100% tests pass: Pleroma area, Euclidean distances, deltas. |
| **Gate G3** | Shell & Layout | `npm run build` | `/dashboard` shell builds without error. |
| **Gate G4** | Layer 0 (Onboarding & Ingest) | `npm test -- tests/layer0-assembly.test.ts` | 5/5 gate block works; context form binds to store. |
| **Gate G5** | Layer 1 (Team Portrait) | `npm test -- tests/layer1-portrait.test.ts` | Radar SVG renders 5 rings; cards mount. |
| **Gate G6** | Layer 2 (Diagnostics) | `npm test -- tests/layer2-diagnostics.test.ts` | 4 diagnostic cards calculate correct values. |
| **Gate G7** | Layer 3 & 4 (Correctives & Formation) | `npm test -- tests/layers3-4-formation.test.ts` | Thinking hats state machine & 12-week roadmap cycle. |
| **Gate G8** | Layer 5 (Copilot & PDF Export) | `npm test -- tests/layer5-copilot.test.ts` | Copilot response stream; print media stylesheet. |
| **G-FINAL** | Master Exit Certification | `npm run test && npm run build` | Zero TypeScript errors, zero lint warnings, production bundle built. |

---

## 5. Execution Invocation for Agents

Any autonomous agent entering this repository should execute using the following instructions:

1. Check `STATE.md` to identify the first unchecked item `[ ]`.
2. Open `PROMPT.md` and read the relevant component and engine specs.
3. Write/update the source code.
4. Execute the phase gate command in PowerShell.
5. Upon receiving exit code `0`, mark the unit `[x]` in `STATE.md`.
6. Continue until all items are `[x]` and `G-FINAL` passes with `0` errors.
