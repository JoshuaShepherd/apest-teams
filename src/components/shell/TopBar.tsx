'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Compass,
  Sparkles,
  Printer,
  RotateCcw,
  ShieldCheck,
  Calendar,
  Layers,
} from 'lucide-react';
import { useTeam } from '@/context/TeamContext';

export function TopBar() {
  const pathname = usePathname();
  const {
    state,
    metrics,
    provenance,
    setProvenance,
    setIsCopilotOpen,
    setIsQuarterlyReviewOpen,
    setIsThinkingHatsOpen,
    resetToRestorationRoad,
  } = useTeam();

  const isSetup = pathname.startsWith('/setup');

  return (
    <header className="sticky top-0 z-30 border-b border-border-rule bg-card/95 backdrop-blur-md px-4 lg:px-8 py-3 no-print shadow-nav">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Author Brand & Team Info */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm tracking-tight shadow-sm transition-transform group-hover:scale-105">
              5Q
            </div>
            <div>
              <div className="font-heading font-bold text-sm text-foreground flex items-center gap-2">
                <span>APEST Teams</span>
                <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded-full bg-accent text-accent-foreground border border-border-soft">
                  Alan Hirsch
                </span>
              </div>
              <div className="text-xs text-muted-foreground truncate max-w-[200px] sm:max-w-xs font-body">
                {state.team.teamName}
              </div>
            </div>
          </Link>
        </div>

        {/* Center: Fullness Metric Indicator */}
        {!isSetup && (
          <div className="hidden md:flex items-center gap-6 px-4 py-1.5 rounded-button bg-surface-subtle border border-border-rule text-xs shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground font-body">Pleroma Fullness:</span>
              <span className="font-mono font-bold text-foreground">
                {metrics.jesusSpaceArea}%
              </span>
              <div className="w-16 h-2 rounded-full bg-border-rule overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${metrics.jesusSpaceArea}%` }}
                />
              </div>
            </div>

            <div className="h-3 w-px bg-border-rule" />

            <div className="flex items-center gap-2">
              <span className="text-muted-foreground font-body">Ecclesial Health:</span>
              <span className="font-mono font-bold text-clay">
                {metrics.teamHealthScore}/100
              </span>
            </div>
          </div>
        )}

        {/* Right: Actions & Tools */}
        <div className="flex items-center gap-2">
          {!isSetup && (
            <>
              {/* Provenance Toggle */}
              <button
                onClick={() => setProvenance((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-button border transition-all ${
                  provenance
                    ? 'bg-clay text-white border-clay shadow-sm'
                    : 'bg-card hover:bg-muted text-muted-foreground hover:text-foreground border-border-rule'
                }`}
                title="Toggle 3-Layer Provenance Highlighting (Source, Computed, Interpreted)"
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">
                  {provenance ? 'Provenance On' : 'Provenance'}
                </span>
              </button>

              {/* Thinking Hats Facilitator Button */}
              <button
                onClick={() => setIsThinkingHatsOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-button bg-card hover:bg-muted text-foreground border border-border-rule transition-colors"
                title="5Q Thinking Hats Facilitation Studio"
              >
                <Compass className="w-3.5 h-3.5 text-primary" />
                <span className="hidden sm:inline">Thinking Hats</span>
              </button>

              {/* Quarterly Review Wizard */}
              <button
                onClick={() => setIsQuarterlyReviewOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-button bg-card hover:bg-muted text-foreground border border-border-rule transition-colors"
                title="Quarterly Team Review Session"
              >
                <Calendar className="w-3.5 h-3.5 text-clay" />
                <span className="hidden sm:inline">Quarterly Review</span>
              </button>

              {/* Missional Copilot Sheet Trigger */}
              <button
                onClick={() => setIsCopilotOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-button bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary-glow transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Missional Copilot</span>
              </button>

              {/* PDF Print Export Link */}
              <Link
                href="/dashboard/export"
                className="p-2 text-muted-foreground hover:text-foreground rounded-button hover:bg-muted transition-colors"
                title="Print Executive 12-Page PDF Report"
              >
                <Printer className="w-4 h-4" />
              </Link>

              {/* Reset to Restoration Road Seed */}
              <button
                onClick={resetToRestorationRoad}
                className="p-2 text-muted-foreground/60 hover:text-muted-foreground rounded-button hover:bg-muted transition-colors"
                title="Reset to Restoration Road Baseline"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </>
          )}

          {isSetup && (
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-button bg-primary hover:bg-primary-hover text-primary-foreground transition-colors shadow-sm"
            >
              <span>View Active Dashboard</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
