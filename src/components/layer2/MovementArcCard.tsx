'use client';

import React from 'react';
import { Compass, ArrowRight, ShieldAlert } from 'lucide-react';
import { useTeam } from '@/context/TeamContext';

export function MovementArcCard() {
  const { state } = useTeam();

  const STAGES = [
    {
      num: 1,
      title: 'Pioneering Movement',
      subtitle: 'High Risk, Flat Hierarchy',
      desc: 'Driven by apostolic expansion, prophetic hunger, and rapid evangelistic conversion. Minimal institutional infrastructure.',
      active: false,
    },
    {
      num: 2,
      title: 'Structured Movement',
      subtitle: 'Scalable Systems',
      desc: 'Systems emerge to empower multiplying leaders without restricting grassroots movemental momentum.',
      active: false,
    },
    {
      num: 3,
      title: 'Established Institution',
      subtitle: 'Maintenance Equilibrium',
      desc: 'Preserving the building, staffing Sunday programming, and managing risk crowd out apostolic emergence.',
      active: true, // Restoration Road's location
    },
    {
      num: 4,
      title: 'Calcified Decay',
      subtitle: 'Bureaucratic Sclerosis',
      desc: 'Form replaces power; the church protects dead orthodoxy while completely insulated from the surrounding culture.',
      active: false,
    },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-card bg-card border border-border-soft shadow-card space-y-6" data-layer="INTERPRETED">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-heading font-bold text-xs">
          4
        </div>
        <div>
          <h3 className="font-heading font-bold text-lg text-ink-primary">
            Diagnostic 4: <span className="italic font-normal text-primary">Where Are You on the Movement-Institution Arc?</span>
          </h3>
          <p className="text-xs text-ink-secondary font-body">
            Tracking the ecclesial lifecycle curve from Alan Hirsch&rsquo;s <em>The Forgotten Ways</em>.
          </p>
        </div>
      </div>

      {/* 4 Stages Visual Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-body">
        {STAGES.map((s) => (
          <div
            key={s.num}
            className={`p-4 rounded-xl border space-y-2 relative transition-all ${
              s.active
                ? 'bg-clay/10 border-clay/30 ring-2 ring-clay/20 shadow-sm'
                : 'bg-surface-subtle border-border-rule'
            }`}
          >
            {s.active && (
              <span className="absolute -top-2.5 right-3 px-2.5 py-0.5 rounded-button text-[9px] font-mono font-bold uppercase tracking-wider bg-clay text-white shadow-sm">
                Current Location
              </span>
            )}

            <div className="flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center font-heading font-bold text-xs ${
                  s.active
                    ? 'bg-clay text-white'
                    : 'bg-surface-muted text-ink-secondary'
                }`}
              >
                {s.num}
              </span>
              <span className="font-heading font-bold text-ink-primary">{s.title}</span>
            </div>

            <div className="text-[11px] font-mono text-ink-tertiary">{s.subtitle}</div>

            <p className="text-ink-secondary text-[11px] leading-relaxed pt-1">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Restoration Road Analysis */}
      <div className="p-4 rounded-xl bg-surface-subtle border border-border-rule space-y-2 text-xs font-body">
        <div className="font-heading font-bold text-ink-primary">
          Strategic Assessment for {state.team.teamName}:
        </div>
        <p className="text-ink-secondary leading-relaxed">
          At 9 years since planting, {state.team.teamName} has transitioned into <strong>Stage 3: Established Institution</strong>.
          The instinctive Shepherd-Teacher priority creates an equilibrium that preserves current attendees but neutralizes
          the apostolic impulse needed to initiate the Aurora campus plant.
        </p>
      </div>
    </div>
  );
}
