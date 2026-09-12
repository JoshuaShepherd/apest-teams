'use client';

import React from 'react';
import { Compass, Sparkles, ArrowUpRight } from 'lucide-react';
import { useTeam } from '@/context/TeamContext';

export function MemberFormationCards() {
  const { state, setActiveMember } = useTeam();

  return (
    <div className="p-6 sm:p-8 rounded-card bg-card border border-border-soft shadow-card space-y-6" data-layer="INTERPRETED">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-heading font-bold text-xl text-ink-primary">
            Individual Formation & <span className="italic font-normal text-primary">Orbital Growth</span>
          </h3>
          <p className="text-xs text-ink-secondary font-body">
            Discipleship aims at ambidexterity: anchoring in one&rsquo;s core base gift while intentionally
            stretching into non-dominant voices.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs font-body">
        {state.members.map((m) => {
          const stretchStep = m.profile.supplementaryMaturity?.[0];

          return (
            <div
              key={m.id}
              onClick={() => setActiveMember(m)}
              className="p-5 rounded-card bg-surface-subtle border border-border-rule hover:border-primary/40 hover:shadow-tile transition-all cursor-pointer space-y-4 flex flex-col justify-between group"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border-rule pb-3">
                <div>
                  <h4 className="font-heading font-bold text-sm text-ink-primary group-hover:text-primary transition-colors">{m.name}</h4>
                  <p className="text-[11px] text-ink-secondary">{m.role}</p>
                </div>
                <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-xs shadow-sm">
                  {m.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
              </div>

              {/* Orbital Graphic / Flow */}
              <div className="p-4 rounded-xl bg-card border border-border-rule space-y-3">
                <div className="text-[10px] uppercase font-mono tracking-wider text-ink-tertiary">
                  Orbital Formation Phases
                </div>

                <div className="flex items-center justify-between gap-2 text-center">
                  {/* Base Ministry */}
                  <div className="flex-1 p-2 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="text-[10px] font-mono text-primary font-bold">Base Gift</div>
                    <div className="font-heading font-bold capitalize text-xs text-primary">
                      {m.profile.primary}
                    </div>
                  </div>

                  <span className="text-clay font-bold">&rarr;</span>

                  {/* Secondary Voice */}
                  <div className="flex-1 p-2 rounded-lg bg-surface-subtle border border-border-rule">
                    <div className="text-[10px] font-mono text-ink-tertiary">Secondary</div>
                    <div className="font-heading font-semibold capitalize text-xs text-ink-primary">
                      {m.profile.secondary}
                    </div>
                  </div>

                  <span className="text-clay font-bold">&rarr;</span>

                  {/* Active Stretch */}
                  <div className="flex-1 p-2 rounded-lg bg-clay/10 border border-clay/20">
                    <div className="text-[10px] font-mono text-clay font-bold">Active Stretch</div>
                    <div className="font-heading font-bold capitalize text-xs text-clay">
                      {stretchStep?.key || 'Gospel Walk'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stretch Habit */}
              {stretchStep && (
                <div className="p-3 rounded-lg bg-card border border-border-rule space-y-1">
                  <div className="font-heading font-semibold text-primary flex items-center gap-1.5 text-[11px]">
                    <ArrowUpRight className="w-3.5 h-3.5 text-clay" />
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
