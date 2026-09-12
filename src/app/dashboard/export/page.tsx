'use client';

import React from 'react';
import { Printer, ArrowLeft, ShieldCheck, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useTeam } from '@/context/TeamContext';
import { ContextualBridge } from '@/components/dashboard/ContextualBridge';

export default function ExportReportPage() {
  const { state, metrics } = useTeam();

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="space-y-8 pb-16 font-body" data-layer="INTERPRETED">
            {/* Contextual Bridge back to 11-Panel Mirror */}
      <div className="no-print">
        <ContextualBridge
          currentLayer="Board Export & Print Dossier"
          correspondingPanelNumber={11}
          correspondingPanelTitle="The Fullness Vision (and Retreat Print Guide)"
          phaseName="Phase 4: Action & Vision"
        />
      </div>

      {/* Action Bar (Hidden on print) */}
      <div className="p-4 rounded-card bg-card border border-border-soft shadow-card flex items-center justify-between no-print">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-secondary hover:text-primary transition-colors font-body"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Dashboard</span>
        </Link>

        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-button bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary-hover transition-all shadow-sm font-body"
        >
          <Printer className="w-4 h-4 text-clay" />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* Document Canvas (Optimized for 8.5x11 printing) */}
      <div className="max-w-4xl mx-auto bg-card p-8 sm:p-12 rounded-card border border-border-soft shadow-card space-y-12 print:border-none print:shadow-none print:p-0">
        {/* Cover Section */}
        <div className="text-center py-16 border-b border-border-rule space-y-6 page-break-after">
          <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground mx-auto flex items-center justify-center font-heading font-bold text-2xl shadow-md">
            5Q
          </div>
          <div className="space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-ink-tertiary">
              Ecclesial Leadership Diagnostic Report
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-ink-primary tracking-tight">
              {state.team.teamName}
            </h1>
            <p className="text-sm text-ink-secondary font-body">
              {state.team.city} • Evaluated {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="max-w-md mx-auto p-5 rounded-card bg-surface-subtle border border-border-rule text-xs space-y-2 shadow-sm">
            <div className="font-heading font-semibold text-ink-primary">Fullness Index (<span className="italic font-normal text-primary">Pleroma</span>):</div>
            <div className="text-4xl font-mono font-bold text-primary">
              {metrics.jesusSpaceArea}%
            </div>
            <p className="text-[11px] text-ink-secondary font-body">
              Composite Ecclesial Health: {metrics.teamHealthScore} / 100
            </p>
          </div>
        </div>

        {/* Section 1: Theological Synthesis */}
        <div className="space-y-4 page-break-inside-avoid">
          <h2 className="text-xl font-heading font-bold text-ink-primary border-b border-border-rule pb-2">
            1. Theological Foundation & <span className="italic font-normal text-primary">Core Thesis</span>
          </h2>
          <p className="text-xs text-ink-secondary leading-relaxed font-body">
            In Ephesians 4:1-16, the ascended Christ distributes five distinct vocational charisms
            (Apostle, Prophet, Evangelist, Shepherd, Teacher) across the whole body to attain to the
            fullness of Christ. No single leader carries all five. The leadership team is the primary
            unit of ministry. When any voice is suppressed, the church suffers a Christological
            deficit.
          </p>
        </div>

        {/* Section 2: Team Roster & Vocational Scores */}
        <div className="space-y-4 page-break-inside-avoid">
          <h2 className="text-xl font-heading font-bold text-ink-primary border-b border-border-rule pb-2">
            2. The Fivefold <span className="italic font-normal text-primary">Leadership Roster</span>
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border-rule">
            <table className="w-full text-left text-xs font-body">
              <thead className="bg-surface-subtle border-b border-border-rule text-[10px] font-mono text-ink-tertiary uppercase">
                <tr>
                  <th className="p-2.5">Name</th>
                  <th className="p-2.5">Role</th>
                  <th className="p-2.5">Primary</th>
                  <th className="p-2.5">Secondary</th>
                  <th className="p-2.5 text-right">Scores (A-P-E-S-T)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-rule">
                {state.members.map((m) => (
                  <tr key={m.id}>
                    <td className="p-2.5 font-heading font-bold text-ink-primary">{m.name}</td>
                    <td className="p-2.5 text-ink-secondary">{m.role}</td>
                    <td className="p-2.5 uppercase font-heading font-bold text-primary text-xs">{m.profile.primary}</td>
                    <td className="p-2.5 uppercase text-xs font-heading text-clay font-semibold">
                      {m.profile.secondary}
                    </td>
                    <td className="p-2.5 text-right font-mono text-ink-secondary">
                      {m.profile.scores.apostle.score}-{m.profile.scores.prophet.score}-
                      {m.profile.scores.evangelist.score}-{m.profile.scores.shepherd.score}-
                      {m.profile.scores.teacher.score}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Diagnostic Summary */}
        <div className="space-y-4 page-break-inside-avoid">
          <h2 className="text-xl font-heading font-bold text-ink-primary border-b border-border-rule pb-2">
            3. Core Diagnostic Finding: <span className="italic font-normal text-primary">Constantinian Equilibrium</span>
          </h2>
          <div className="p-5 rounded-card bg-surface-subtle border border-border-rule space-y-2 text-xs font-body">
            <div className="font-heading font-bold text-sm text-ink-primary">The Shepherd-Teacher Maintenance Trap</div>
            <p className="text-ink-secondary leading-relaxed">
              At {state.team.teamName}, 85% of staff payroll hours are consumed by internal preaching prep,
              pastoral care triage, and administrative committee meetings. Meanwhile, the Apostle
              (Marcus Webb) is isolated without peer risk-bearers, and the Evangelist (Sofia Reyes)
              has no formal decision authority. The church&rsquo;s 3-year attendance plateau is the direct
              result of static institutional equilibrium.
            </p>
          </div>
        </div>

        {/* Section 4: Covenant Agreement & Ratification */}
        <div className="space-y-6 pt-6 border-t border-border-rule page-break-inside-avoid">
          <h2 className="text-xl font-heading font-bold text-ink-primary border-b border-border-rule pb-2">
            4. Ratified <span className="italic font-normal text-primary">Ecclesial Covenant</span>
          </h2>

          <div className="p-6 rounded-card bg-surface-subtle border border-border-rule space-y-3 text-xs">
            <div className="font-heading font-bold text-sm text-ink-primary">Shared 12-Month Discipleship Covenant:</div>
            <p className="font-heading italic text-sm text-ink-primary leading-relaxed">
              &ldquo;We, the leadership team of {state.team.teamName}, covenant together before God to
              cultivate the fivefold fullness of Christ. We commit to practicing the 10 corrective
              pairings, protecting Sofia&rsquo;s evangelistic voice from administrative triage, scheduling
              the monthly Humanization Dialogue between Marcus and James, and planting 2 pilot
              missional households in Aurora.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 text-xs font-body">
            {state.members.map((m) => (
              <div key={m.id} className="space-y-1.5 border-t border-border-rule pt-2">
                <div className="font-heading font-bold text-ink-primary">{m.name}</div>
                <div className="text-[11px] text-ink-tertiary font-mono">
                  {m.role} • {m.profile.primary.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

