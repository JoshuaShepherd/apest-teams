'use client';

import React from 'react';
import { ShieldCheck, Activity, Compass, AlertCircle } from 'lucide-react';
import { useTeam } from '@/context/TeamContext';

export function TeamHealthScore() {
  const { metrics } = useTeam();

  const BREAKDOWNS = [
    {
      label: '5Q Pleroma Fullness',
      weight: '40% Weight',
      score: metrics.jesusSpaceArea,
      max: 100,
      notes: 'Surface area of the pentagonal Jesus Space polygon.',
    },
    {
      label: 'Fivefold Diversity & Coverage',
      weight: '30% Weight',
      score: 85,
      max: 100,
      notes: 'All 5 functions present; thin on Apostle and Evangelist.',
    },
    {
      label: 'Outward Missional Orientation',
      weight: '15% Weight',
      score: 55,
      max: 100,
      notes: 'High inward care triage; outward pioneering currently suppressed.',
    },
    {
      label: 'Authority Balance & Non-Veto',
      weight: '15% Weight',
      score: 65,
      max: 100,
      notes: '100% of veto power held by Pastor-Teacher binary.',
    },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-card bg-card border border-border-soft shadow-card space-y-6" data-layer="COMPUTED">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h3 className="font-heading font-bold text-xl text-ink-primary">
            Unified Team <span className="italic font-normal text-primary">Ecclesial Health Score</span>
          </h3>
          <p className="text-xs text-ink-secondary font-body">
            A composite 0–100 index tracking movemental maturity and fivefold health over time.
          </p>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20">
          <div className="text-center">
            <span className="text-[10px] uppercase font-mono text-primary font-semibold tracking-wider">
              Composite Index
            </span>
            <div className="text-4xl font-bold font-mono text-primary">
              {metrics.teamHealthScore}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-body">
        {BREAKDOWNS.map((b, i) => (
          <div key={i} className="p-4 rounded-xl bg-surface-subtle border border-border-rule space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-heading font-bold text-ink-primary">{b.label}</span>
              <span className="font-mono text-[10px] text-ink-tertiary">{b.weight}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xl font-bold font-mono text-primary">{b.score}%</span>
              <div className="w-20 h-2 rounded-full bg-surface-muted overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${b.score}%` }}
                />
              </div>
            </div>

            <p className="text-[11px] text-ink-secondary leading-relaxed pt-1">{b.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
