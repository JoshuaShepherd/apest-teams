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
    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-surface-border shadow-sm space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center font-bold text-xs">
          4
        </div>
        <div>
          <h3 className="font-serif font-bold text-base text-ink-primary">
            Diagnostic 4: Where Are You on the Movement-Institution Arc?
          </h3>
          <p className="text-xs text-ink-secondary">
            Tracking the ecclesial lifecycle curve from Alan Hirsch&rsquo;s <em>The Forgotten Ways</em>.
          </p>
        </div>
      </div>

      {/* 4 Stages Visual Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
        {STAGES.map((s) => (
          <div
            key={s.num}
            className={`p-4 rounded-xl border space-y-2 relative transition-all ${
              s.active
                ? 'bg-amber-50/90 border-amber-300 ring-2 ring-amber-500/30 shadow-sm'
                : 'bg-surface-subtle/70 border-surface-border'
            }`}
          >
            {s.active && (
              <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-amber-600 text-white shadow-sm">
                Current Location
              </span>
            )}

            <div className="flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                  s.active
                    ? 'bg-amber-600 text-white'
                    : 'bg-surface-muted text-ink-secondary'
                }`}
              >
                {s.num}
              </span>
              <span className="font-bold text-ink-primary">{s.title}</span>
            </div>

            <div className="text-[11px] font-mono text-ink-tertiary">{s.subtitle}</div>

            <p className="text-ink-secondary text-[11px] leading-relaxed pt-1">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Restoration Road Analysis */}
      <div className="p-4 rounded-xl bg-surface-subtle border border-surface-border space-y-2 text-xs">
        <div className="font-bold text-ink-primary">
          Strategic Assessment for {state.team.teamName}:
        </div>
        <p className="text-ink-secondary leading-relaxed">
          At 9 years since planting, Restoration Road has transitioned into **Stage 3
          (Institution)**. The founding apostolic drive has settled into predictable Sunday worship
          services and pastoral care triage. To reverse the 3-year plateau, the team must not create
          more programs, but deliberately trigger **dis-equilibrium** by decentralizing power to
          neighborhood missional households.
        </p>
      </div>
    </div>
  );
}
