'use client';

import React from 'react';
import { Award, TrendingDown, TrendingUp } from 'lucide-react';
import { useTeam } from '@/context/TeamContext';

export function CultureRewardsCard() {
  const { metrics } = useTeam();

  const CULTURE_REWARDS_DATA = [
    {
      func: 'Shepherd',
      callingScore: metrics.means.shepherd,
      cultureSubsidized: 45,
      verdict: 'Heavily Subsidized & Rewarded',
      notes: 'Western ecclesiology expects the pastor to be a professional chaplain and emotional anchor.',
    },
    {
      func: 'Teacher',
      callingScore: metrics.means.teacher,
      cultureSubsidized: 42,
      verdict: 'Heavily Subsidized & Rewarded',
      notes: 'Sunday morning sermons and intellectual curriculum are the primary metrics of pastoral competence.',
    },
    {
      func: 'Prophet',
      callingScore: metrics.means.prophet,
      cultureSubsidized: 18,
      verdict: 'Culturally Penalized as Cynical or Disruptive',
      notes: 'Prophetic challenge to institutional consumerism is perceived as disloyalty to the leadership brand.',
    },
    {
      func: 'Evangelist',
      callingScore: metrics.means.evangelist,
      cultureSubsidized: 20,
      verdict: 'Subcontracted to Guest Speakers / Programs',
      notes: 'Congregations outsource evangelism to events rather than cultivating contagious personal witness.',
    },
    {
      func: 'Apostle',
      callingScore: metrics.means.apostle,
      cultureSubsidized: 12,
      verdict: 'Structurally Feared & Marginalized',
      notes: 'Apostolic appetite for disequilibrium and risk threatens institutional budget predictability.',
    },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-surface-border shadow-sm space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center font-bold text-xs">
          1
        </div>
        <div>
          <h3 className="font-serif font-bold text-base text-ink-primary">
            Diagnostic 1: What Does the Culture Reward?
          </h3>
          <p className="text-xs text-ink-secondary">
            Contrasting natural fivefold calling against historical Constantinian subsidies.
          </p>
        </div>
      </div>

      <div className="space-y-4 text-xs">
        {CULTURE_REWARDS_DATA.map((item) => (
          <div key={item.func} className="p-4 rounded-xl bg-surface-subtle border border-surface-border space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-ink-primary">{item.func}</span>
              <span
                className={`font-semibold px-2 py-0.5 rounded text-[11px] ${
                  item.cultureSubsidized > 30
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-rose-100 text-rose-800'
                }`}
              >
                {item.verdict}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-1">
              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-ink-secondary">Team Calling:</span>
                  <span className="font-mono font-bold text-ink-primary">{item.callingScore}/50</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-surface-muted overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 rounded-full"
                    style={{ width: `${(item.callingScore / 50) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-ink-secondary">Cultural Reward Subsidies:</span>
                  <span className="font-mono font-bold text-ink-primary">{item.cultureSubsidized}/50</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-surface-muted overflow-hidden">
                  <div
                    className="h-full bg-amber-600 rounded-full"
                    style={{ width: `${(item.cultureSubsidized / 50) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <p className="text-ink-secondary text-[11px] leading-relaxed pt-1">
              {item.notes}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
