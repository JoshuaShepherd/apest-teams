'use client';

import React, { useState, useEffect } from 'react';
import {
  Compass,
  Sparkles,
  Users,
  Activity,
  GitMerge,
  Calendar,
  Layers,
  Printer,
  FileText,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Eye,
  Lock,
  Unlock,
  Sliders,
} from 'lucide-react';
import { ChristologicalBanner } from './ChristologicalBanner';
import { Panel1Glance } from './panels/Panel1Glance';
import { Panel2Profiles } from './panels/Panel2Profiles';
import { Panel3TeamMap } from './panels/Panel3TeamMap';
import { Panel4Cascade } from './panels/Panel4Cascade';
import { Panel5ShadowReport } from './panels/Panel5ShadowReport';
import { Panel6CultureAudit } from './panels/Panel6CultureAudit';
import { Panel7MaturityArc } from './panels/Panel7MaturityArc';
import { Panel8LifecycleArc } from './panels/Panel8LifecycleArc';
import { Panel9CorrectivePathway } from './panels/Panel9CorrectivePathway';
import { Panel10ConversationStarters } from './panels/Panel10ConversationStarters';
import { Panel11FullnessVision } from './panels/Panel11FullnessVision';
import { MarcusPastoralNote } from './MarcusPastoralNote';
import { DigitalSummaryModal } from './DigitalSummaryModal';
import { RetreatPrintGuide } from './RetreatPrintGuide';

const PANELS_LIST = [
  { id: 1, title: 'Team at a Glance', phase: 1, anchor: 'panel-1' },
  { id: 2, title: 'Individual Profiles', phase: 1, anchor: 'panel-2' },
  { id: 3, title: 'The Team Map (5Q Shape)', phase: 2, anchor: 'panel-3' },
  { id: 4, title: 'The Cascade', phase: 2, anchor: 'panel-4' },
  { id: 5, title: 'The Shadow Report', phase: 2, anchor: 'panel-5' },
  { id: 6, title: 'The Culture Audit', phase: 2, anchor: 'panel-6' },
  { id: 7, title: 'Maturity Level Arc', phase: 3, anchor: 'panel-7' },
  { id: 8, title: 'Lifecycle Arc', phase: 3, anchor: 'panel-8' },
  { id: 9, title: 'Corrective Pathway', phase: 4, anchor: 'panel-9' },
  { id: 10, title: 'Conversation Starters', phase: 4, anchor: 'panel-10' },
  { id: 11, title: 'The Fullness Vision', phase: 4, anchor: 'panel-11' },
];

export function MirrorDashboard() {
  // Sequential disclosure state
  // Panels 1-3 unlocked initially
  const [engagedPanels, setEngagedPanels] = useState<number[]>([1]);
  const [isSequentialEnforced, setIsSequentialEnforced] = useState(true);

  // Modals state
  const [isMarcusNoteOpen, setIsMarcusNoteOpen] = useState(false);
  const [isDigitalSummaryOpen, setIsDigitalSummaryOpen] = useState(false);
  const [isPrintGuideOpen, setIsPrintGuideOpen] = useState(false);

  // Scroll to panel helper
  const scrollToPanel = (panelId: number) => {
    if (!engagedPanels.includes(panelId)) {
      setEngagedPanels((prev) => [...prev, panelId]);
    }
    const elem = document.getElementById(`panel-${panelId}`);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAdvance = (currentPanelId: number) => {
    const nextPanelId = currentPanelId + 1;
    if (nextPanelId <= 11) {
      if (!engagedPanels.includes(nextPanelId)) {
        setEngagedPanels((prev) => [...prev, nextPanelId]);
      }
      setTimeout(() => {
        scrollToPanel(nextPanelId);
      }, 100);
    }
  };

  // Determine if a panel is dimmed under sequential enforcement
  // Panels 1-3 belong to Phase 1/Identity & Map
  // Panels 4-6 require Panel 3 engaged
  // Panels 7-8 require Panel 6 engaged
  // Panels 9-11 require Panel 8 engaged
  const isPanelDimmed = (panelId: number) => {
    if (!isSequentialEnforced) return false;
    if (panelId <= 3) return false;
    if (panelId <= 6 && !engagedPanels.includes(3)) return true;
    if (panelId <= 8 && !engagedPanels.includes(6)) return true;
    if (panelId <= 11 && !engagedPanels.includes(8)) return true;
    return false;
  };

  return (
    <div className="space-y-8 pb-16 relative">
      {/* Persistent Rotating Christological Anchor Banner */}
      <div className="sticky top-0 z-20 shadow-xs -mx-4 sm:-mx-6 lg:-mx-8">
        <ChristologicalBanner />
      </div>

      {/* Dashboard Top Header & Mode Toolbar */}
      <div className="p-6 sm:p-8 rounded-card bg-card border border-border-rule shadow-card space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-subtle border border-border-rule text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>APEST Teams Mirror Dashboard · 11 Sequential Panels</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground tracking-tight">
              Restoration Road Community Church
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-3xl leading-relaxed font-serif italic">
              &ldquo;The dashboard is not a report. It is a mirror — and mirrors only work if you can see yourself clearly in them. The sequence below is deliberate: identity before diagnosis, diagnosis before correction, correction before strategy.&rdquo;
            </p>
          </div>

          {/* Right Toolbar Actions */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Sequential Mode Toggle */}
            <button
              onClick={() => setIsSequentialEnforced((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-button text-xs font-mono font-medium border transition-colors ${
                isSequentialEnforced
                  ? 'bg-surface-warm border-primary/40 text-foreground'
                  : 'bg-card border-border-rule text-muted-foreground hover:text-foreground'
              }`}
              title="Toggle Sequential Progressive Disclosure Enforcement"
            >
              {isSequentialEnforced ? <Lock className="w-3.5 h-3.5 text-primary" /> : <Unlock className="w-3.5 h-3.5" />}
              <span>{isSequentialEnforced ? 'Sequential Mode' : 'Free Mode'}</span>
            </button>

            {/* Letter to Marcus Modal */}
            <button
              onClick={() => setIsMarcusNoteOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-button bg-card hover:bg-surface-warm border border-border-rule text-xs font-semibold text-foreground transition-colors shadow-xs"
            >
              <BookOpen className="w-3.5 h-3.5 text-clay" />
              <span>To Marcus</span>
            </button>

            {/* Digital Summary */}
            <button
              onClick={() => setIsDigitalSummaryOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-button bg-card hover:bg-surface-warm border border-border-rule text-xs font-semibold text-foreground transition-colors shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-muted-foreground" />
              <span>Async Summary</span>
            </button>

            {/* Printable Conversation Guide */}
            <button
              onClick={() => setIsPrintGuideOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-button bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary-hover transition-all shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Retreat Guide</span>
            </button>
          </div>
        </div>

        {/* Sequential Disclosure Philosophy Banner */}
        <div className="p-3.5 rounded-xl bg-surface-warm/60 border border-border-soft flex items-center justify-between flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-foreground">Theological Disclosure Sequence:</span>
            <span className="text-muted-foreground font-serif">
              Identity (1–2) &rarr; Diagnosis (3–6) &rarr; Trajectory (7–8) &rarr; Strategy & Vision (9–11)
            </span>
          </div>
          <div className="text-[11px] font-mono text-muted-foreground">
            Progress: {engagedPanels.length}/11 Panels Engaged
          </div>
        </div>
      </div>

      {/* Main Grid: Left Navigation Rail (Sticky) & Main Panel Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sticky Progress Indicator Rail */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-14 space-y-4">
          <div className="p-5 rounded-2xl bg-card border border-border-rule shadow-sm space-y-4">
            <div className="text-xs font-heading font-bold uppercase tracking-wider text-muted-foreground">
              Progressive Navigation
            </div>

            <nav className="space-y-1.5 text-xs font-body">
              {PANELS_LIST.map((panel) => {
                const isEngaged = engagedPanels.includes(panel.id);
                const isDimmed = isPanelDimmed(panel.id);

                return (
                  <button
                    key={panel.id}
                    onClick={() => scrollToPanel(panel.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between transition-all ${
                      isDimmed
                        ? 'opacity-40 hover:opacity-75 text-muted-foreground'
                        : isEngaged
                        ? 'bg-surface-warm font-semibold text-foreground'
                        : 'hover:bg-surface-subtle text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      {/* Filled circle for engaged, outline for unengaged */}
                      <span
                        className={`w-2.5 h-2.5 rounded-full shrink-0 transition-colors ${
                          isEngaged ? 'bg-primary ring-2 ring-primary/20' : 'border border-border-rule'
                        }`}
                      />
                      <span className="truncate">
                        {panel.id}. {panel.title}
                      </span>
                    </div>

                    {isEngaged && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 ml-1" />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-border-rule/60 text-[11px] font-serif italic text-muted-foreground leading-relaxed">
              Later panels are visually dimmed until earlier ones have been engaged.
            </div>
          </div>
        </aside>

        {/* Main Content Area: 11 Panels in Deliberate Sequence */}
        <div className="lg:col-span-9 space-y-10">
          {/* PANEL 1: The Team at a Glance */}
          <div className="transition-all">
            <Panel1Glance onNext={() => handleAdvance(1)} />
          </div>

          {/* PANEL 2: Individual Profiles */}
          <div className="transition-all">
            <Panel2Profiles onNext={() => handleAdvance(2)} />
          </div>

          {/* PANEL 3: The Team Map (5Q Shape) */}
          <div className="transition-all">
            <Panel3TeamMap onNext={() => handleAdvance(3)} />
          </div>

          {/* PHASE 2 GATEWAY BANNER */}
          {isPanelDimmed(4) && (
            <div className="p-4 rounded-xl bg-surface-subtle border border-border-rule text-center text-xs text-muted-foreground space-y-1">
              <span className="font-heading font-bold text-foreground block">
                Phase 2: Systemic Dynamics (Panels 4–6)
              </span>
              <p className="font-serif italic">
                Engage Panel 3 to unlock the Cascade, Shadow Report, and Culture Audit.
              </p>
              <button
                onClick={() => setEngagedPanels((prev) => [...prev, 3, 4])}
                className="mt-2 text-xs text-primary font-semibold underline"
              >
                Unlock Phase 2 Now
              </button>
            </div>
          )}

          {/* PANEL 4: The Cascade */}
          <div className={`transition-all ${isPanelDimmed(4) ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
            <Panel4Cascade onNext={() => handleAdvance(4)} />
          </div>

          {/* PANEL 5: The Shadow Report */}
          <div className={`transition-all ${isPanelDimmed(5) ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
            <Panel5ShadowReport onNext={() => handleAdvance(5)} />
          </div>

          {/* PANEL 6: The Culture Audit */}
          <div className={`transition-all ${isPanelDimmed(6) ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
            <Panel6CultureAudit onNext={() => handleAdvance(6)} />
          </div>

          {/* PHASE 3 GATEWAY BANNER */}
          {isPanelDimmed(7) && (
            <div className="p-4 rounded-xl bg-surface-subtle border border-border-rule text-center text-xs text-muted-foreground space-y-1">
              <span className="font-heading font-bold text-foreground block">
                Phase 3: Trajectory & Lifecycle (Panels 7–8)
              </span>
              <p className="font-serif italic">
                Engage earlier diagnostics before assessing the historical maturity arc.
              </p>
              <button
                onClick={() => setEngagedPanels((prev) => [...prev, 6, 7])}
                className="mt-2 text-xs text-primary font-semibold underline"
              >
                Unlock Phase 3 Now
              </button>
            </div>
          )}

          {/* PANEL 7: The Maturity Level Assessment */}
          <div className={`transition-all ${isPanelDimmed(7) ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
            <Panel7MaturityArc onNext={() => handleAdvance(7)} />
          </div>

          {/* PANEL 8: The Movement-to-Institution Lifecycle */}
          <div className={`transition-all ${isPanelDimmed(8) ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
            <Panel8LifecycleArc onNext={() => handleAdvance(8)} />
          </div>

          {/* PHASE 4 GATEWAY BANNER */}
          {isPanelDimmed(9) && (
            <div className="p-4 rounded-xl bg-surface-subtle border border-border-rule text-center text-xs text-muted-foreground space-y-1">
              <span className="font-heading font-bold text-foreground block">
                Phase 4: Constructive Action & Fullness Vision (Panels 9–11)
              </span>
              <p className="font-serif italic">
                Sit with the diagnostic arc before moving to strategy and conversation starters.
              </p>
              <button
                onClick={() => setEngagedPanels((prev) => [...prev, 8, 9])}
                className="mt-2 text-xs text-primary font-semibold underline"
              >
                Unlock Phase 4 Now
              </button>
            </div>
          )}

          {/* PANEL 9: The Corrective Pathway */}
          <div className={`transition-all ${isPanelDimmed(9) ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
            <Panel9CorrectivePathway onNext={() => handleAdvance(9)} />
          </div>

          {/* PANEL 10: The Conversation Starters */}
          <div className={`transition-all ${isPanelDimmed(10) ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
            <Panel10ConversationStarters
              onNext={() => handleAdvance(10)}
              onOpenMarcusNote={() => setIsMarcusNoteOpen(true)}
            />
          </div>

          {/* PANEL 11: The Fullness Vision */}
          <div className={`transition-all ${isPanelDimmed(11) ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
            <Panel11FullnessVision
              onRestart={() => scrollToPanel(1)}
              onPrintExport={() => setIsPrintGuideOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* Modals and Artifact Overlays */}
      <MarcusPastoralNote
        isOpen={isMarcusNoteOpen}
        onClose={() => setIsMarcusNoteOpen(false)}
      />

      <DigitalSummaryModal
        isOpen={isDigitalSummaryOpen}
        onClose={() => setIsDigitalSummaryOpen(false)}
      />

      <RetreatPrintGuide
        isOpen={isPrintGuideOpen}
        onClose={() => setIsPrintGuideOpen(false)}
      />
    </div>
  );
}
