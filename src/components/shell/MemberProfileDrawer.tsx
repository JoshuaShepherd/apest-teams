'use client';

import React from 'react';
import { X, ShieldAlert, Award, ArrowUpRight, CheckCircle2, User } from 'lucide-react';
import { useTeam } from '@/context/TeamContext';
import { ApestFunction } from '@/lib/types/apest';
import { APEST_ORDER } from '@/lib/engine/calculator';

const FUNCTION_COLORS: Record<ApestFunction, { bg: string; text: string; bar: string }> = {
  apostle: { bg: 'bg-rose-50', text: 'text-rose-800', bar: 'bg-rose-700' },
  prophet: { bg: 'bg-primary/10', text: 'text-primary', bar: 'bg-primary' },
  evangelist: { bg: 'bg-clay/10', text: 'text-clay', bar: 'bg-clay' },
  shepherd: { bg: 'bg-emerald-50', text: 'text-emerald-800', bar: 'bg-emerald-700' },
  teacher: { bg: 'bg-sky-50', text: 'text-sky-800', bar: 'bg-sky-700' },
};

export function MemberProfileDrawer() {
  const { activeMember, setActiveMember } = useTeam();

  if (!activeMember) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-fade-in no-print" data-layer="SOURCE">
      <div
        className="w-full max-w-lg bg-card h-full shadow-card flex flex-col border-l border-border-soft overflow-hidden animate-slide-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-border-rule flex items-start justify-between gap-4 bg-surface-subtle">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg font-heading shadow-sm">
              {activeMember.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-heading font-bold text-ink-primary">{activeMember.name}</h3>
                {activeMember.hasFormalAuthority && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-button text-[10px] font-mono font-semibold uppercase tracking-wider bg-rose-100 text-rose-800 border border-rose-200">
                    <ShieldAlert className="w-3 h-3" />
                    Formal Authority
                  </span>
                )}
              </div>
              <p className="text-xs text-ink-secondary font-body">
                {activeMember.role} • {activeMember.tenureYears} Years in Role • {activeMember.isStaff ? 'Staff' : 'Volunteer'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setActiveMember(null)}
            className="p-1.5 rounded-button text-ink-secondary hover:text-ink-primary hover:bg-surface-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 font-body">
          {/* Primary & Secondary Callout */}
          <div className="p-5 rounded-card bg-surface-subtle border border-border-rule space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-mono tracking-wider text-ink-tertiary">Vocational Combination</span>
              <span className="text-xs font-mono text-ink-secondary">Top {activeMember.profile.combination.populationPercent}% of leaders</span>
            </div>
            <div className="text-base font-heading font-bold text-primary">
              {activeMember.profile.combination.label}
            </div>
            <p className="text-xs text-ink-secondary leading-relaxed">
              {activeMember.profile.combination.descriptor}
            </p>
          </div>

          {/* Individual 5Q Score Breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono text-ink-tertiary tracking-wider">
              5Q Vocational Scores (0 - 50 Scale)
            </h4>

            <div className="space-y-2.5">
              {(['apostle', 'prophet', 'evangelist', 'shepherd', 'teacher'] as const).map((func) => {
                const scoreData = activeMember.profile.scores[func];
                const benchmark = activeMember.profile.benchmarks?.[func];
                const colors = FUNCTION_COLORS[func];
                const isPrimary = activeMember.profile.primary === func;
                const isSecondary = activeMember.profile.secondary === func;

                return (
                  <div key={func} className="p-3 rounded-xl border border-border-rule bg-card space-y-1.5 shadow-sm">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-semibold capitalize text-ink-primary">{func}</span>
                        {isPrimary && (
                          <span className="px-2 py-0.5 rounded-button text-[10px] font-bold uppercase bg-rose-50 text-rose-800 border border-rose-200">
                            Primary
                          </span>
                        )}
                        {isSecondary && (
                          <span className="px-2 py-0.5 rounded-button text-[10px] font-bold uppercase bg-primary/10 text-primary border border-primary/20">
                            Secondary
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 font-mono">
                        <span className="font-bold text-primary">{scoreData.score}/50</span>
                        {benchmark && (
                          <span className="text-ink-tertiary text-[11px]">
                            (pop: {benchmark.others})
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Score Bar */}
                    <div className="w-full h-2 rounded-full bg-surface-muted overflow-hidden relative">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${colors.bar}`}
                        style={{ width: `${(scoreData.score / 50) * 100}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Supplementary Maturity & Stretch Steps */}
          {activeMember.profile.supplementaryMaturity && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-mono text-ink-tertiary tracking-wider">
                Active Formation & Ambidexterity Stretch
              </h4>

              <div className="space-y-2">
                {activeMember.profile.supplementaryMaturity.map((step) => (
                  <div key={step.key} className="p-3.5 rounded-xl bg-surface-subtle border border-border-rule text-xs space-y-1">
                    <div className="flex items-center gap-1.5 font-heading font-semibold capitalize text-ink-primary">
                      <ArrowUpRight className="w-3.5 h-3.5 text-clay" />
                      Strengthening {step.key} (One Step to Maturity)
                    </div>
                    <p className="text-ink-secondary leading-relaxed pl-5 font-body">
                      {step.oneStepTowardMaturity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
