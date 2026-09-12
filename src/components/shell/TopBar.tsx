'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Users,
  Compass,
  Sparkles,
  Printer,
  RotateCcw,
  ShieldCheck,
  BrainCircuit,
  Calendar,
} from 'lucide-react';
import { useTeam } from '@/context/TeamContext';

export function TopBar() {
  const pathname = usePathname();
  const {
    state,
    metrics,
    setIsCopilotOpen,
    setIsQuarterlyReviewOpen,
    setIsThinkingHatsOpen,
    resetToRestorationRoad,
  } = useTeam();

  const isSetup = pathname.startsWith('/setup');

  return (
    <header className="sticky top-0 z-30 border-b border-surface-border bg-white/95 backdrop-blur px-4 lg:px-8 py-3 no-print">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Brand & Team Info */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-ink-primary text-white flex items-center justify-center font-serif font-bold text-sm tracking-tighter">
              5Q
            </div>
            <div>
              <div className="font-semibold text-sm tracking-tight text-ink-primary flex items-center gap-1.5">
                APEST Teams
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-surface-subtle text-ink-secondary border border-surface-border">
                  Diagnostic
                </span>
              </div>
              <div className="text-xs text-ink-secondary truncate max-w-[200px] sm:max-w-xs">
                {state.team.teamName}
              </div>
            </div>
          </Link>
        </div>

        {/* Center: Fullness Metric Indicator */}
        {!isSetup && (
          <div className="hidden md:flex items-center gap-6 px-4 py-1.5 rounded-full bg-surface-subtle border border-surface-border text-xs">
            <div className="flex items-center gap-2">
              <span className="text-ink-secondary">Pleroma Fullness:</span>
              <span className="font-mono font-semibold text-ink-primary">
                {metrics.jesusSpaceArea}%
              </span>
              <div className="w-16 h-2 rounded-full bg-surface-muted overflow-hidden">
                <div
                  className="h-full bg-emerald-600 rounded-full transition-all duration-500"
                  style={{ width: `${metrics.jesusSpaceArea}%` }}
                />
              </div>
            </div>

            <div className="h-3 w-px bg-surface-border" />

            <div className="flex items-center gap-2">
              <span className="text-ink-secondary">Health Index:</span>
              <span className="font-mono font-semibold text-emerald-700">
                {metrics.teamHealthScore}/100
              </span>
            </div>
          </div>
        )}

        {/* Right: Actions & Tools */}
        <div className="flex items-center gap-2">
          {!isSetup && (
            <>
              {/* Thinking Hats Facilitator Button */}
              <button
                onClick={() => setIsThinkingHatsOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-surface-subtle hover:bg-surface-muted text-ink-primary border border-surface-border transition-colors"
                title="5Q Thinking Hats Facilitation Studio"
              >
                <Compass className="w-3.5 h-3.5 text-indigo-600" />
                <span className="hidden sm:inline">Thinking Hats</span>
              </button>

              {/* Quarterly Review Wizard */}
              <button
                onClick={() => setIsQuarterlyReviewOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-surface-subtle hover:bg-surface-muted text-ink-primary border border-surface-border transition-colors"
                title="Quarterly Team Review Session"
              >
                <Calendar className="w-3.5 h-3.5 text-sky-600" />
                <span className="hidden sm:inline">Quarterly Review</span>
              </button>

              {/* Copilot Sheet Trigger */}
              <button
                onClick={() => setIsCopilotOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-ink-primary hover:bg-ink-secondary text-white shadow-sm transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Missional Copilot</span>
              </button>

              {/* PDF Print Export Link */}
              <Link
                href="/dashboard/export"
                className="p-1.5 text-ink-secondary hover:text-ink-primary rounded-lg hover:bg-surface-subtle transition-colors"
                title="Print Executive 12-Page PDF Report"
              >
                <Printer className="w-4 h-4" />
              </Link>

              {/* Reset to Restoration Road Seed */}
              <button
                onClick={resetToRestorationRoad}
                className="p-1.5 text-ink-tertiary hover:text-ink-secondary rounded-lg hover:bg-surface-subtle transition-colors"
                title="Reset to Restoration Road Baseline"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </>
          )}

          {isSetup && (
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-ink-primary hover:bg-ink-secondary text-white transition-colors"
            >
              <span>View Active Dashboard</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
