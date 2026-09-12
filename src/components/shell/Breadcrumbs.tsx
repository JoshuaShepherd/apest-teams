'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Compass,
  ArrowLeft,
  ChevronDown,
  Layers,
  Users,
  Activity,
  GitMerge,
  Sparkles,
  FileSpreadsheet,
} from 'lucide-react';
import { useTeam } from '@/context/TeamContext';

const PHASES = [
  { id: 1, title: 'Phase 1: Identity', range: 'Panels 1–2', anchor: 'panel-1' },
  { id: 2, title: 'Phase 2: Diagnosis', range: 'Panels 3–6', anchor: 'panel-3' },
  { id: 3, title: 'Phase 3: Trajectory', range: 'Panels 7–8', anchor: 'panel-7' },
  { id: 4, title: 'Phase 4: Action & Fullness', range: 'Panels 9–11', anchor: 'panel-9' },
];

const LAYER_DRAWERS = [
  { id: 'portrait' as const, title: 'Layer 1: Portrait & Radar', icon: Users, panel: 'Panel 3' },
  { id: 'diagnostics' as const, title: 'Layer 2: Four Diagnostics', icon: Activity, panel: 'Panel 4 & 6' },
  { id: 'correctives' as const, title: 'Layer 3: Correctives & 10 Pairings', icon: GitMerge, panel: 'Panel 9' },
  { id: 'formation' as const, title: 'Layer 4: 12-Week Formation', icon: Sparkles, panel: 'Panel 9' },
  { id: 'export' as const, title: 'Layer 5: Executive Board Dossier', icon: FileSpreadsheet, panel: 'Panel 11' },
];

export function Breadcrumbs() {
  const pathname = usePathname();
  const { setActiveLayerDrawer } = useTeam();
  const [isLayersMenuOpen, setIsLayersMenuOpen] = useState(false);

  const isMirrorRoot = pathname === '/dashboard';

  const scrollToAnchor = (anchor: string) => {
    const elem = document.getElementById(anchor);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // If on a sub-route, show the breadcrumb back to the 11-panel mirror
  if (!isMirrorRoot) {
    const subLayerTitle =
      pathname === '/dashboard/portrait'
        ? 'Layer 1: Portrait & 5Q Radar'
        : pathname === '/dashboard/diagnostics'
        ? 'Layer 2: Four Systemic Diagnostics'
        : pathname === '/dashboard/correctives'
        ? 'Layer 3: Correctives Engine'
        : pathname === '/dashboard/formation'
        ? 'Layer 4: 12-Week Formation Roadmap'
        : pathname === '/dashboard/export'
        ? 'Layer 5: Board Export Dossier'
        : 'Sub-surface';

    return (
      <nav aria-label="Breadcrumb" className="border-b border-border-rule bg-card/80 backdrop-blur px-4 lg:px-8 py-2.5 no-print">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-body">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-button bg-surface-subtle hover:bg-surface-warm border border-border-rule font-semibold text-foreground transition-colors shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-primary" />
              <span>← Return to 11-Panel Discernment Mirror</span>
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-semibold text-primary font-mono">{subLayerTitle}</span>
          </div>

          <div className="text-xs text-muted-foreground hidden sm:inline font-serif italic">
            Dedicated Full-Page Deep Dive
          </div>
        </div>
      </nav>
    );
  }

  // If on /dashboard, render the Narrative Phase Ribbon with Deep Dive Drawers dropdown
  return (
    <div className="border-b border-border-rule bg-card/90 backdrop-blur px-4 lg:px-8 py-2 no-print">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Narrative Phase Steps */}
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-0.5">
          <div className="hidden md:inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground uppercase tracking-wider pr-2">
            <Compass className="w-3.5 h-3.5 text-primary" />
            <span>Narrative:</span>
          </div>
          {PHASES.map((phase) => (
            <button
              key={phase.id}
              onClick={() => scrollToAnchor(phase.anchor)}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-button text-xs font-body text-muted-foreground hover:text-foreground hover:bg-surface-warm border border-transparent hover:border-border-rule transition-colors whitespace-nowrap"
            >
              <span className="font-heading font-semibold text-foreground">
                {phase.title.split(':')[0]}
              </span>
              <span className="hidden sm:inline text-[11px] text-muted-foreground font-serif">
                ({phase.range})
              </span>
            </button>
          ))}
        </div>

        {/* Right: Deep Dive Workbenches Flyout Menu */}
        <div className="relative shrink-0">
          <button
            onClick={() => setIsLayersMenuOpen((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-button bg-surface-subtle hover:bg-surface-warm border border-border-rule text-xs font-semibold text-foreground transition-colors shadow-xs"
            title="Open Deep Diagnostic Workbenches without leaving the Mirror"
          >
            <Layers className="w-3.5 h-3.5 text-primary" />
            <span>Deep Dive Drawers</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isLayersMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Flyout Dropdown Menu */}
          {isLayersMenuOpen && (
            <>
              <div
                className="fixed inset-0 z-30"
                onClick={() => setIsLayersMenuOpen(false)}
                aria-hidden="true"
              />
              <div className="absolute right-0 mt-2 w-72 rounded-xl bg-card border border-border-soft shadow-xl p-2 z-40 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-1.5 text-[11px] font-mono text-muted-foreground uppercase tracking-wider border-b border-border-rule/60">
                  Diagnostic Workbenches (Slide-In)
                </div>
                {LAYER_DRAWERS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveLayerDrawer(item.id);
                        setIsLayersMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-surface-warm flex items-center justify-between text-xs transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded bg-surface-subtle text-primary group-hover:bg-primary/10">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-heading font-semibold text-foreground">
                            {item.title}
                          </div>
                          <div className="text-[10px] text-muted-foreground font-serif">
                            {item.panel}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] text-primary font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                        Open &rarr;
                      </span>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
