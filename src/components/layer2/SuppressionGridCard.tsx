'use client';

import React from 'react';
import { ShieldCheck, AlertOctagon, HelpCircle, UserX } from 'lucide-react';
import { useTeam } from '@/context/TeamContext';

export function SuppressionGridCard() {
  const { state } = useTeam();

  return (
    <div className="p-6 sm:p-8 rounded-card bg-card border border-border-soft shadow-card space-y-6" data-layer="INTERPRETED">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-rose-100/80 border border-rose-200 text-rose-800 flex items-center justify-center font-heading font-bold text-xs">
          2
        </div>
        <div>
          <h3 className="font-heading font-bold text-lg text-ink-primary">
            Diagnostic 2: <span className="italic font-normal text-primary">Presence vs. Suppression Grid</span>
          </h3>
          <p className="text-xs text-ink-secondary font-body">
            Surfacing the ecclesial antibodies and institutional dynamics that silence specific
            voices.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-body">
        {/* Quadrant 1: Dominant & Empowered */}
        <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-heading font-bold text-emerald-950 text-sm">Dominant & Empowered</span>
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
          </div>
          <div className="font-heading font-semibold text-ink-primary">
            Shepherd (James Okafor) & Teacher (Marcus / James)
          </div>
          <p className="text-ink-secondary leading-relaxed">
            Both primary holders hold 100% of voting formal authority. Pastoral care, sermon
            theology, and emotional stability define the staff meeting agenda and institutional
            budget allocations.
          </p>
        </div>

        {/* Quadrant 2: Isolated Risk-Bearer */}
        <div className="p-5 rounded-xl bg-rose-50/70 border border-rose-200/80 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-heading font-bold text-rose-950 text-sm">The Isolated Catalyst</span>
            <AlertOctagon className="w-4 h-4 text-rose-700" />
          </div>
          <div className="font-heading font-semibold text-ink-primary">Apostle (Marcus Webb)</div>
          <p className="text-ink-secondary leading-relaxed">
            Marcus carries the team&rsquo;s sole primary Apostolic score. When casting pioneering
            initiatives, the surrounding Shepherd-Teacher weight instinctively converts the vision
            into pastoral classes, damping momentum and leaving Marcus relationally isolated.
          </p>
        </div>

        {/* Quadrant 3: Structurally Suppressed */}
        <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-heading font-bold text-amber-950 text-sm">Structurally Suppressed</span>
            <UserX className="w-4 h-4 text-amber-700" />
          </div>
          <div className="font-heading font-semibold text-ink-primary">Evangelist (Sofia Reyes)</div>
          <p className="text-ink-secondary leading-relaxed">
            Sofia carries a high 45 Evangelist score, but no formal authority. Her voice is
            suppressed by dense academic discourse and inward care triage, leaving her feeling
            unqualified despite holding the church&rsquo;s primary bridge to unchurched neighbors.
          </p>
        </div>

        {/* Quadrant 4: Present but Misunderstood */}
        <div className="p-5 rounded-xl bg-primary/10 border border-primary/20 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-heading font-bold text-primary text-sm">Present but Pigeonholed</span>
            <HelpCircle className="w-4 h-4 text-primary" />
          </div>
          <div className="font-heading font-semibold text-ink-primary">
            Prophet (Priya Nair & Daniel Park)
          </div>
          <p className="text-ink-secondary leading-relaxed">
            The team carries immense prophetic depth (47 & 46). Daniel&rsquo;s gifting has been treated as
            &ldquo;musical worship aesthetics&rdquo; rather than reformational insight. Both hesitate to speak
            up lest they sound negative or cynical.
          </p>
        </div>
      </div>
    </div>
  );
}
