'use client';

import React from 'react';
import Link from 'next/link';
import {
  Users,
  Compass,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Activity,
  GitMerge,
  Calendar,
  AlertTriangle,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import { useTeam } from '@/context/TeamContext';

export default function DashboardOverviewPage() {
  const { state, metrics, setActiveMember, setIsThinkingHatsOpen, setIsCopilotOpen } = useTeam();

  return (
    <div className="space-y-8">
      {/* Top Banner / Executive Diagnosis */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-surface-border shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-800">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Layer 0-5 Executive Diagnostic Synthesis</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-ink-primary">
              {state.team.teamName}
            </h1>
            <p className="text-xs sm:text-sm text-ink-secondary max-w-2xl leading-relaxed">
              {state.team.city} • {state.team.tenure} • {state.members.length} Connected Profiles
            </p>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-subtle border border-surface-border">
            <div className="text-center">
              <span className="text-[10px] uppercase font-mono text-ink-tertiary">
                Fullness Score
              </span>
              <div className="text-3xl font-bold font-mono text-ink-primary">
                {metrics.jesusSpaceArea}%
              </div>
              <span className="text-[10px] text-emerald-700 font-medium">Pleroma Area</span>
            </div>
            <div className="h-10 w-px bg-surface-border" />
            <div className="text-center">
              <span className="text-[10px] uppercase font-mono text-ink-tertiary">
                Ecclesial Health
              </span>
              <div className="text-3xl font-bold font-mono text-indigo-700">
                {metrics.teamHealthScore}
              </div>
              <span className="text-[10px] text-indigo-600 font-medium">Out of 100</span>
            </div>
          </div>
        </div>

        {/* Diagnostic Callout */}
        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-950">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="font-bold">Primary Diagnostic Finding: The Constantinian Trap</div>
            <p className="text-amber-900 leading-relaxed">
              The team possesses high Prophetic (32.2) and Shepherding (31.4) capacity, but 100% of
              formal authority is held by the Lead Pastor (A-T) and Executive Pastor (S-T). Sofia
              Reyes carries the team&rsquo;s sole primary Evangelist voice, but without institutional
              authority, her voice is suppressed by theological curriculum and pastoral triage.
            </p>
          </div>
        </div>
      </div>

      {/* Layer 1 Teaser: The Team Portrait (Side by Side) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-serif font-bold text-ink-primary">
              Layer 1: The Fivefold Roster
            </h2>
            <p className="text-xs text-ink-secondary">
              Click any member to inspect deep vocational scores, benchmark percentiles, and growth
              steps.
            </p>
          </div>
          <Link
            href="/dashboard/portrait"
            className="inline-flex items-center gap-1 text-xs font-semibold text-ink-primary hover:text-indigo-600 transition-colors"
          >
            <span>View 5Q Radar Wheel</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {state.members.map((m) => (
            <div
              key={m.id}
              onClick={() => setActiveMember(m)}
              className="p-4 rounded-xl bg-white border border-surface-border hover:border-ink-secondary hover:shadow-md transition-all cursor-pointer space-y-3"
            >
              <div className="flex items-start justify-between">
                <div className="w-9 h-9 rounded-full bg-ink-primary text-white flex items-center justify-center font-serif font-bold text-xs">
                  {m.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                {m.hasFormalAuthority && (
                  <span
                    className="p-1 rounded text-rose-800 bg-rose-50 border border-rose-200"
                    title="Carries Formal Decision Authority"
                  >
                    <ShieldAlert className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-bold text-sm text-ink-primary truncate">{m.name}</h3>
                <p className="text-[11px] text-ink-secondary truncate">{m.role}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold capitalize text-ink-primary">
                    {m.profile.primary}
                  </span>
                  <span className="font-mono text-ink-tertiary">
                    {m.profile.scores[m.profile.primary].score}/50
                  </span>
                </div>
                <div className="text-[10px] text-ink-tertiary truncate">
                  {m.profile.combination.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Layer 2 Teaser: 4 Core Diagnostics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-surface-border shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-serif font-bold text-base text-ink-primary">
              <Activity className="w-4 h-4 text-indigo-600" />
              <span>Diagnostic 3: Functional Activity Inventory</span>
            </div>
            <Link
              href="/dashboard/diagnostics"
              className="text-xs font-semibold text-ink-secondary hover:text-ink-primary"
            >
              Details &rarr;
            </Link>
          </div>
          <p className="text-xs text-ink-secondary leading-relaxed">
            Comparing where weekly staff hours actually go (Output) versus the team's fivefold
            calling (Composition).
          </p>

          <div className="space-y-2 text-xs">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-emerald-800 font-medium">Shepherd (Pastoral Care): 55%</span>
                <span className="font-mono text-ink-tertiary">99 hrs/wk</span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-muted overflow-hidden">
                <div className="h-full bg-emerald-600 rounded-full" style={{ width: '55%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sky-800 font-medium">Teacher (Sermons & Prep): 30%</span>
                <span className="font-mono text-ink-tertiary">54 hrs/wk</span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-muted overflow-hidden">
                <div className="h-full bg-sky-600 rounded-full" style={{ width: '30%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-amber-800 font-medium">Evangelist (Outsider Reach): 5%</span>
                <span className="font-mono text-ink-tertiary">9 hrs/wk</span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-muted overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '5%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-rose-800 font-medium">Apostle (New Ground Planted): 0%</span>
                <span className="font-mono text-ink-tertiary">0 hrs/wk</span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-muted overflow-hidden">
                <div className="h-full bg-rose-600 rounded-full" style={{ width: '1%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-surface-border shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-serif font-bold text-base text-ink-primary">
              <GitMerge className="w-4 h-4 text-rose-600" />
              <span>Layer 3: Core Tension Spotlight</span>
            </div>
            <Link
              href="/dashboard/correctives"
              className="text-xs font-semibold text-ink-secondary hover:text-ink-primary"
            >
              All 10 Pairings &rarr;
            </Link>
          </div>
          <p className="text-xs text-ink-secondary leading-relaxed">
            The furthest Euclidean distance represents your team&rsquo;s most critical corrective
            engine.
          </p>

          <div className="p-4 rounded-xl bg-surface-subtle border border-surface-border space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-ink-primary">
                {metrics.furthestPair.memberA} (Apostle) & {metrics.furthestPair.memberB} (Shepherd)
              </span>
              <span className="font-mono font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded border border-rose-200 text-[11px]">
                Distance: {metrics.furthestPair.distance}
              </span>
            </div>
            <p className="text-ink-secondary leading-relaxed">
              <strong>The Extension vs. Preservation Tension:</strong> Marcus naturally pulls toward
              uncontrolled pioneering; James instinctively pulls toward emotional safety and
              protection.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsThinkingHatsOpen(true)}
                className="w-full py-2 rounded-lg bg-white border border-surface-border hover:bg-surface-muted text-ink-primary font-semibold transition-colors"
              >
                Launch Thinking Hats Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
