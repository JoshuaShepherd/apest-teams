'use client';

import React from 'react';
import { Compass, Sparkles, ArrowUpRight } from 'lucide-react';
import { useTeam } from '@/context/TeamContext';

export function MemberFormationCards() {
  const { state, setActiveMember } = useTeam();

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-surface-border shadow-sm space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-serif font-bold text-lg text-ink-primary">
            Individual Formation & Orbital Growth (5Q Fig 9.1 & 9.2)
          </h3>
          <p className="text-xs text-ink-secondary">
            Discipleship aims at ambidexterity: anchoring in one&rsquo;s core base gift while intentionally
            stretching into non-dominant voices.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
        {state.members.map((m) => {
          const stretchStep = m.profile.supplementaryMaturity?.[0];

          return (
            <div
              key={m.id}
              onClick={() => setActiveMember(m)}
              className="p-5 rounded-xl bg-surface-subtle border border-surface-border hover:border-ink-secondary hover:shadow-md transition-all cursor-pointer space-y-4 flex flex-col justify-between"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-surface-border pb-3">
                <div>
                  <h4 className="font-bold text-sm text-ink-primary">{m.name}</h4>
                  <p className="text-[11px] text-ink-secondary">{m.role}</p>
                </div>
                <span className="w-8 h-8 rounded-full bg-ink-primary text-white flex items-center justify-center font-serif font-bold text-xs">
                  {m.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
              </div>

              {/* Orbital Graphic / Flow */}
              <div className="p-4 rounded-xl bg-white border border-surface-border space-y-3">
                <div className="text-[10px] uppercase font-mono text-ink-tertiary">
                  Orbital Formation Phases
                </div>

                <div className="flex items-center justify-between gap-2 text-center">
                  {/* Base Ministry */}
                  <div className="flex-1 p-2 rounded-lg bg-indigo-50 border border-indigo-200">
                    <div className="text-[10px] font-mono text-indigo-700">Base Gift</div>
                    <div className="font-bold capitalize text-xs text-indigo-950">
                      {m.profile.primary}
                    </div>
                  </div>

                  <span className="text-ink-tertiary">&rarr;</span>

                  {/* Secondary Voice */}
                  <div className="flex-1 p-2 rounded-lg bg-surface-subtle border border-surface-border">
                    <div className="text-[10px] font-mono text-ink-tertiary">Secondary</div>
                    <div className="font-semibold capitalize text-xs text-ink-primary">
                      {m.profile.secondary}
                    </div>
                  </div>

                  <span className="text-ink-tertiary">&rarr;</span>

                  {/* Active Stretch */}
                  <div className="flex-1 p-2 rounded-lg bg-amber-50 border border-amber-200">
                    <div className="text-[10px] font-mono text-amber-700">Active Stretch</div>
                    <div className="font-bold capitalize text-xs text-amber-950">
                      {stretchStep?.key || 'Gospel Walk'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stretch Habit */}
              {stretchStep && (
                <div className="p-3 rounded-lg bg-white border border-surface-border space-y-1">
                  <div className="font-semibold text-ink-primary flex items-center gap-1.5 text-[11px]">
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-600" />
                    <span>Current 12-Week Discipleship Practice:</span>
                  </div>
                  <p className="text-ink-secondary leading-relaxed pl-5 text-[11px]">
                    {stretchStep.oneStepTowardMaturity}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
