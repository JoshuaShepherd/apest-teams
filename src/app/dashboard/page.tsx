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
      <div
        data-layer="INTERPRETED"
        className="p-6 sm:p-8 rounded-card bg-card border border-border-soft shadow-card space-y-6 transition-all"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground border border-border-soft text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Layer 0–5 Executive Diagnostic Synthesis</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              {state.team.teamName}
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed font-body">
              {state.team.city} • {state.team.tenure} • {state.members.length} Connected Profiles
            </p>
          </div>

          <div
            data-layer="COMPUTED"
            className="flex items-center gap-4 p-4 rounded-xl bg-surface-subtle border border-border-rule"
          >
            <div className="text-center">
              <span className="text-[10px] uppercase font-mono text-muted-foreground font-semibold">
                Fullness Score
              </span>
              <div className="text-3xl font-bold font-mono text-primary">
                {metrics.jesusSpaceArea}%
              </div>
              <span className="text-[10px] text-emerald-800 font-medium">Pleroma Area</span>
            </div>
            <div className="h-10 w-px bg-border-rule" />
            <div className="text-center">
              <span className="text-[10px] uppercase font-mono text-muted-foreground font-semibold">
                Ecclesial Health
              </span>
              <div className="text-3xl font-bold font-mono text-clay">
                {metrics.teamHealthScore}
              </div>
              <span className="text-[10px] text-clay font-medium">Out of 100</span>
            </div>
          </div>
        </div>

        {/* Diagnostic Callout */}
        <div className="p-4 rounded-xl bg-accent/60 border border-border-soft flex items-start gap-3 text-xs text-foreground">
          <AlertTriangle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="font-bold font-heading text-sm text-primary">
              Primary Diagnostic Finding: The Constantinian Trap
            </div>
            <p className="text-muted-foreground leading-relaxed font-body">
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
            <h2 className="text-lg font-heading font-bold text-foreground">
              Layer 1: The Fivefold Roster
            </h2>
            <p className="text-xs text-muted-foreground font-body">
              Click any member to inspect deep vocational scores, benchmark percentiles, and growth
              steps.
            </p>
          </div>
          <Link
            href="/dashboard/portrait"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline transition-all"
          >
            <span>View 5Q Radar Wheel</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {state.members.map((m) => (
            <div
              key={m.id}
              data-layer="SOURCE"
              onClick={() => setActiveMember(m)}
              className="p-5 rounded-card bg-card border border-border-soft hover:border-border shadow-card hover:shadow-tile transition-all cursor-pointer space-y-3 group"
            >
              <div className="flex items-start justify-between">
                <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-xs shadow-sm">
                  {m.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                {m.hasFormalAuthority && (
                  <span
                    className="p-1 rounded text-rose-900 bg-rose-50 border border-rose-200"
                    title="Carries Formal Decision Authority"
                  >
                    <ShieldAlert className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors truncate">
                  {m.name}
                </h3>
                <p className="text-[11px] text-muted-foreground truncate font-body">{m.role}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold capitalize text-foreground font-body">
                    {m.profile.primary}
                  </span>
                  <span className="font-mono text-muted-foreground">
                    {m.profile.scores[m.profile.primary].score}/50
                  </span>
                </div>
                <div className="text-[10px] text-muted-foreground truncate font-body">
                  {m.profile.combination.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Layer 2 Teaser: 4 Core Diagnostics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          data-layer="COMPUTED"
          className="p-6 sm:p-8 rounded-card bg-card border border-border-soft shadow-card space-y-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-heading font-bold text-base text-foreground">
              <Activity className="w-4 h-4 text-primary" />
              <span>Diagnostic 3: Functional Activity Inventory</span>
            </div>
            <Link
              href="/dashboard/diagnostics"
              className="text-xs font-semibold text-primary hover:underline"
            >
              Details &rarr;
            </Link>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed font-body">
            Comparing where weekly staff hours actually go (Output) versus the team's fivefold
            calling (Composition).
          </p>

          <div className="space-y-2 text-xs font-body">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-emerald-900 font-medium">Shepherd (Pastoral Care): 55%</span>
                <span className="font-mono text-muted-foreground">99 hrs/wk</span>
              </div>
              <div className="w-full h-2 rounded-full bg-border-rule overflow-hidden">
                <div className="h-full bg-shepherd rounded-full" style={{ width: '55%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sky-900 font-medium">Teacher (Sermons & Prep): 30%</span>
                <span className="font-mono text-muted-foreground">54 hrs/wk</span>
              </div>
              <div className="w-full h-2 rounded-full bg-border-rule overflow-hidden">
                <div className="h-full bg-teacher rounded-full" style={{ width: '30%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-amber-900 font-medium">Evangelist (Outsider Reach): 5%</span>
                <span className="font-mono text-muted-foreground">9 hrs/wk</span>
              </div>
              <div className="w-full h-2 rounded-full bg-border-rule overflow-hidden">
                <div className="h-full bg-clay rounded-full" style={{ width: '5%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-rose-900 font-medium">Apostle (New Ground Planted): 0%</span>
                <span className="font-mono text-muted-foreground">0 hrs/wk</span>
              </div>
              <div className="w-full h-2 rounded-full bg-border-rule overflow-hidden">
                <div className="h-full bg-apostle rounded-full" style={{ width: '1%' }} />
              </div>
            </div>
          </div>
        </div>

        <div
          data-layer="INTERPRETED"
          className="p-6 sm:p-8 rounded-card bg-card border border-border-soft shadow-card space-y-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-heading font-bold text-base text-foreground">
              <GitMerge className="w-4 h-4 text-clay" />
              <span>Layer 3: Core Tension Spotlight</span>
            </div>
            <Link
              href="/dashboard/correctives"
              className="text-xs font-semibold text-primary hover:underline"
            >
              All 10 Pairings &rarr;
            </Link>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed font-body">
            The furthest Euclidean distance represents your team&rsquo;s most critical corrective
            engine.
          </p>

          <div className="p-4 rounded-xl bg-surface-subtle border border-border-rule space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-foreground font-body">
                {metrics.furthestPair.memberA} (Apostle) & {metrics.furthestPair.memberB} (Shepherd)
              </span>
              <span className="font-mono font-bold text-primary bg-accent px-2 py-0.5 rounded-full border border-border-soft text-[11px]">
                Distance: {metrics.furthestPair.distance}
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed font-body">
              <strong>The Extension vs. Preservation Tension:</strong> Marcus naturally pulls toward
              uncontrolled pioneering; James instinctively pulls toward emotional safety and
              protection.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsThinkingHatsOpen(true)}
                className="w-full py-2.5 rounded-button bg-card border border-border-rule hover:bg-muted text-foreground font-semibold transition-colors shadow-sm"
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
