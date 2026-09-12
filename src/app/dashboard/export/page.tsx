'use client';

import React from 'react';
import { Printer, ArrowLeft, ShieldCheck, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useTeam } from '@/context/TeamContext';

export default function ExportReportPage() {
  const { state, metrics } = useTeam();

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Action Bar (Hidden on print) */}
      <div className="p-4 rounded-xl bg-white border border-surface-border shadow-sm flex items-center justify-between no-print">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-secondary hover:text-ink-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Dashboard</span>
        </Link>

        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-ink-primary text-white text-xs font-semibold hover:bg-ink-secondary transition-all shadow-sm"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* Document Canvas (Optimized for 8.5x11 printing) */}
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl border border-surface-border shadow-md space-y-12 print:border-none print:shadow-none print:p-0">
        {/* Cover Section */}
        <div className="text-center py-16 border-b border-surface-border space-y-6 page-break-after">
          <div className="w-16 h-16 rounded-2xl bg-ink-primary text-white mx-auto flex items-center justify-center font-serif font-bold text-2xl">
            5Q
          </div>
          <div className="space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-ink-tertiary">
              Ecclesial Leadership Diagnostic Report
            </span>
            <h1 className="text-4xl font-serif font-bold text-ink-primary">
              {state.team.teamName}
            </h1>
            <p className="text-sm text-ink-secondary">
              {state.team.city} • Evaluated {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="max-w-md mx-auto p-4 rounded-xl bg-surface-subtle border border-surface-border text-xs space-y-2">
            <div className="font-semibold text-ink-primary">Fullness Index ($Pleroma$):</div>
            <div className="text-3xl font-mono font-bold text-ink-primary">
              {metrics.jesusSpaceArea}%
            </div>
            <p className="text-[11px] text-ink-secondary">
              Composite Ecclesial Health: {metrics.teamHealthScore} / 100
            </p>
          </div>
        </div>

        {/* Section 1: Theological Synthesis */}
        <div className="space-y-4 page-break-inside-avoid">
          <h2 className="text-xl font-serif font-bold text-ink-primary border-b border-surface-border pb-2">
            1. Theological Foundation & Core Thesis
          </h2>
          <p className="text-xs text-ink-secondary leading-relaxed">
            In Ephesians 4:1-16, the ascended Christ distributes five distinct vocational charisms
            (Apostle, Prophet, Evangelist, Shepherd, Teacher) across the whole body to attain to the
            fullness of Christ. No single leader carries all five. The leadership team is the primary
            unit of ministry. When any voice is suppressed, the church suffers a Christological
            deficit.
          </p>
        </div>

        {/* Section 2: Team Roster & Vocational Scores */}
        <div className="space-y-4 page-break-inside-avoid">
          <h2 className="text-xl font-serif font-bold text-ink-primary border-b border-surface-border pb-2">
            2. The Fivefold Leadership Roster
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-surface-border">
              <thead className="bg-surface-subtle border-b border-surface-border text-[10px] font-mono text-ink-tertiary">
                <tr>
                  <th className="p-2.5">Name</th>
                  <th className="p-2.5">Role</th>
                  <th className="p-2.5">Primary</th>
                  <th className="p-2.5">Secondary</th>
                  <th className="p-2.5 text-right">Scores (A-P-E-S-T)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border">
                {state.members.map((m) => (
                  <tr key={m.id}>
                    <td className="p-2.5 font-semibold text-ink-primary">{m.name}</td>
                    <td className="p-2.5 text-ink-secondary">{m.role}</td>
                    <td className="p-2.5 uppercase font-bold text-xs">{m.profile.primary}</td>
                    <td className="p-2.5 uppercase text-xs text-ink-secondary">
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
          <h2 className="text-xl font-serif font-bold text-ink-primary border-b border-surface-border pb-2">
            3. Core Diagnostic Finding: Constantinian Equilibrium
          </h2>
          <div className="p-4 rounded-xl bg-surface-subtle border border-surface-border space-y-2 text-xs">
            <div className="font-bold text-ink-primary">The Shepherd-Teacher Maintenance Trap</div>
            <p className="text-ink-secondary leading-relaxed">
              At Restoration Road, 85% of staff payroll hours are consumed by internal preaching prep,
              pastoral care triage, and administrative committee meetings. Meanwhile, the Apostle
              (Marcus Webb) is isolated without peer risk-bearers, and the Evangelist (Sofia Reyes)
              has no formal decision authority. The church&rsquo;s 3-year attendance plateau is the direct
              result of static institutional equilibrium.
            </p>
          </div>
        </div>

        {/* Section 4: Covenant Agreement & Ratification */}
        <div className="space-y-6 pt-6 border-t border-surface-border page-break-inside-avoid">
          <h2 className="text-xl font-serif font-bold text-ink-primary border-b border-surface-border pb-2">
            4. Ratified Ecclesial Covenant
          </h2>

          <div className="p-6 rounded-xl bg-surface-subtle border border-surface-border space-y-3 text-xs">
            <div className="font-bold text-ink-primary">Shared 12-Month Discipleship Covenant:</div>
            <p className="font-serif italic text-sm text-ink-secondary leading-relaxed">
              &ldquo;We, the leadership team of {state.team.teamName}, covenant together before God to
              cultivate the fivefold fullness of Christ. We commit to practicing the 10 corrective
              pairings, protecting Sofia&rsquo;s evangelistic voice from administrative triage, scheduling
              the monthly Humanization Dialogue between Marcus and James, and planting 2 pilot
              missional households in Aurora.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 text-xs">
            {state.members.map((m) => (
              <div key={m.id} className="space-y-2 border-t border-ink-secondary/30 pt-2">
                <div className="font-bold text-ink-primary">{m.name}</div>
                <div className="text-[11px] text-ink-tertiary">
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
