'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Compass,
  Layers,
  ArrowRight,
  ShieldAlert,
  Activity,
  GitMerge,
  Sparkles,
  AlertTriangle,
} from 'lucide-react';
import { useTeam } from '@/context/TeamContext';
import { MirrorDashboard } from '@/components/dashboard/MirrorDashboard';

export default function DashboardOverviewPage() {
  const { state, metrics, setActiveMember, setIsThinkingHatsOpen } = useTeam();
  const [viewMode, setViewMode] = useState<'mirror' | 'layers'>('mirror');

  return (
    <div className="space-y-6">
      {/* Top View Mode Switcher */}
      <div className="flex items-center justify-between border-b border-border-rule pb-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('mirror')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-button text-xs font-semibold transition-all ${
              viewMode === 'mirror'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-surface-subtle hover:bg-surface-warm text-muted-foreground hover:text-foreground'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>11-Panel Team Mirror (Design Spec)</span>
          </button>

          <button
            onClick={() => setViewMode('layers')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-button text-xs font-semibold transition-all ${
              viewMode === 'layers'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-surface-subtle hover:bg-surface-warm text-muted-foreground hover:text-foreground'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Layer 0–5 System Synthesis</span>
          </button>
        </div>

        <div className="text-xs font-mono text-muted-foreground hidden sm:block">
          Restoration Road Community Church
        </div>
      </div>

      {/* Main Render based on Mode */}
      {viewMode === 'mirror' ? (
        <MirrorDashboard />
      ) : (
        /* Layer 0-5 Executive Diagnostic View */
        <div className="space-y-8">
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
                  The team possesses high Prophetic and Shepherding capacity, but 100% of formal authority is held by the Lead Pastor (A-T) and Executive Pastor (S-T). Without institutional empowerment for the evangelistic and prophetic callings, outward mission is suppressed by operational calendar triage.
                </p>
              </div>
            </div>
          </div>

          {/* Member profiles teaser */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-heading font-bold text-foreground">
                  Connected Team Profiles
                </h2>
                <p className="text-xs text-muted-foreground font-body">
                  Click any member to inspect vocational scores and growth steps.
                </p>
              </div>
              <Link
                href="/dashboard/portrait"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                <span>View 5Q Radar Wheel</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {state.members.slice(0, 3).map((m) => (
                <div
                  key={m.id}
                  onClick={() => setActiveMember(m)}
                  className="p-5 rounded-card bg-card border border-border-soft hover:border-border shadow-card hover:shadow-tile transition-all cursor-pointer space-y-3 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-xs shadow-sm">
                      {m.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    {m.hasFormalAuthority && (
                      <span
                        className="p-1 rounded text-rose-900 bg-rose-50 border border-rose-200 text-[10px] font-mono"
                        title="Carries Formal Decision Authority"
                      >
                        Formal Authority
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
        </div>
      )}
    </div>
  );
}
