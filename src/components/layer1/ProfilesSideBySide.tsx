'use client';

import React from 'react';
import { ShieldAlert, ArrowRight, UserCheck } from 'lucide-react';
import { useTeam } from '@/context/TeamContext';
import { ApestFunction } from '@/lib/types/apest';

const FUNCTION_BAR_COLORS: Record<ApestFunction, string> = {
  apostle: 'bg-rose-700',
  prophet: 'bg-primary',
  evangelist: 'bg-clay',
  shepherd: 'bg-emerald-700',
  teacher: 'bg-sky-700',
};

export function ProfilesSideBySide() {
  const { state, setActiveMember } = useTeam();

  return (
    <div className="space-y-4" data-layer="SOURCE">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-heading font-bold text-xl text-ink-primary">
            Individual <span className="italic font-normal text-primary">Vocational Callings</span>
          </h3>
          <p className="text-xs text-ink-secondary font-body">
            Every leader possesses a unique distribution of Christ&rsquo;s fivefold charisms.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {state.members.map((member) => (
          <div
            key={member.id}
            onClick={() => setActiveMember(member)}
            className="p-5 rounded-card bg-card border border-border-soft hover:border-primary/40 hover:shadow-tile transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
          >
            {/* Member Identity */}
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm shadow-sm">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                {member.hasFormalAuthority && (
                  <span
                    className="p-1.5 rounded-button bg-rose-50 border border-rose-200 text-rose-800"
                    title="Carries Formal Decision Authority"
                  >
                    <ShieldAlert className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>

              <div>
                <h4 className="font-heading font-bold text-sm text-ink-primary group-hover:text-primary transition-colors truncate">
                  {member.name}
                </h4>
                <p className="text-xs text-ink-secondary truncate font-body">{member.role}</p>
              </div>

              {/* Combination Label */}
              <div className="p-2.5 rounded-xl bg-surface-subtle border border-border-rule space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-ink-tertiary">Combination</span>
                <div className="text-xs font-heading font-bold text-primary truncate">
                  {member.profile.combination.label}
                </div>
              </div>
            </div>

            {/* 5-Bar Mini Score Graph */}
            <div className="space-y-2 pt-2 border-t border-border-rule">
              {(['apostle', 'prophet', 'evangelist', 'shepherd', 'teacher'] as const).map((f) => {
                const s = member.profile.scores[f]?.score ?? 0;
                const isPrimary = member.profile.primary === f;
                const isSecondary = member.profile.secondary === f;

                return (
                  <div key={f} className="space-y-0.5">
                    <div className="flex items-center justify-between text-[10px]">
                      <span
                        className={`capitalize ${
                          isPrimary
                            ? 'font-bold text-primary font-heading'
                            : isSecondary
                            ? 'font-semibold text-clay font-heading'
                            : 'text-ink-tertiary font-body'
                        }`}
                      >
                        {f.slice(0, 3)}
                      </span>
                      <span className="font-mono text-ink-tertiary">{s}</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-surface-muted overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          FUNCTION_BAR_COLORS[f]
                        }`}
                        style={{ width: `${(s / 50) * 100}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
