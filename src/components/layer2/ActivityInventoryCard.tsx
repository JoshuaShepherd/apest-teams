'use client';

import React, { useState } from 'react';
import { Clock, BarChart3, AlertTriangle } from 'lucide-react';
import { useTeam } from '@/context/TeamContext';

export function ActivityInventoryCard() {
  const { metrics } = useTeam();

  const [hours, setHours] = useState({
    shepherd: 99, // 55%
    teacher: 54, // 30%
    prophet: 18, // 10%
    evangelist: 9, // 5%
    apostle: 0, // 0%
  });

  const totalHours = Object.values(hours).reduce((a, b) => a + b, 0);

  const ACTIVITIES = [
    { name: 'Sunday Service Prep & Preaching', func: 'Teacher', hrs: 35, category: 'Internal' },
    { name: 'One-on-One Pastoral Counseling & Crisis Care', func: 'Shepherd', hrs: 45, category: 'Internal' },
    { name: 'Staff Meetings & Administrative Operations', func: 'Shepherd/Teacher', hrs: 30, category: 'Internal' },
    { name: 'Midweek Bible Studies & Small Group Curriculum', func: 'Teacher', hrs: 25, category: 'Internal' },
    { name: 'Hospital Visitation & Member Funerals', func: 'Shepherd', hrs: 24, category: 'Internal' },
    { name: 'Worship Service Music Rehearsal', func: 'Prophet/Shepherd', hrs: 18, category: 'Internal' },
    { name: 'Outreach Events & Non-Churched Hospitality', func: 'Evangelist', hrs: 9, category: 'External' },
    { name: 'Pioneering New Neighborhood Church Plants', func: 'Apostle', hrs: 0, category: 'External' },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-surface-border shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center font-bold text-xs">
            3
          </div>
          <div>
            <h3 className="font-serif font-bold text-base text-ink-primary">
              Diagnostic 3: Functional Activity Inventory (5Q Fig 9.3)
            </h3>
            <p className="text-xs text-ink-secondary">
              Contrasting where the weekly staff hours go (Output) against team calling
              (Composition).
            </p>
          </div>
        </div>

        <div className="text-xs font-mono font-bold text-ink-secondary">
          Total Weekly Staff Hours: <span className="text-ink-primary">{totalHours} hrs</span>
        </div>
      </div>

      {/* Side-by-Side Comparison: Calling vs Hours */}
      <div className="p-5 rounded-xl bg-surface-subtle border border-surface-border space-y-4">
        <h4 className="text-xs uppercase font-mono text-ink-tertiary">
          The Shepherd-Teacher Equilibrium Trap
        </h4>

        <div className="space-y-3 text-xs">
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-emerald-900">
                Shepherd (Soul Care & Maintenance): 55% of Hours
              </span>
              <span className="font-mono text-ink-tertiary">
                Team Mean: {metrics.means.shepherd}/50
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-surface-muted overflow-hidden">
              <div className="h-full bg-emerald-600 rounded-full" style={{ width: '55%' }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-sky-900">
                Teacher (Sermon & Curriculum): 30% of Hours
              </span>
              <span className="font-mono text-ink-tertiary">
                Team Mean: {metrics.means.teacher}/50
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-surface-muted overflow-hidden">
              <div className="h-full bg-sky-600 rounded-full" style={{ width: '30%' }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-indigo-900">
                Prophet (Spiritual Discernment & Prayer): 10% of Hours
              </span>
              <span className="font-mono text-ink-tertiary">
                Team Mean: {metrics.means.prophet}/50
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-surface-muted overflow-hidden">
              <div className="h-full bg-indigo-600 rounded-full" style={{ width: '10%' }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-amber-900">
                Evangelist (Outsider Welcoming): 5% of Hours
              </span>
              <span className="font-mono text-ink-tertiary">
                Team Mean: {metrics.means.evangelist}/50
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-surface-muted overflow-hidden">
              <div className="h-full bg-amber-500 rounded-full" style={{ width: '5%' }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-rose-900">
                Apostle (New Movement Frontiers): 0% of Hours
              </span>
              <span className="font-mono text-ink-tertiary">
                Team Mean: {metrics.means.apostle}/50
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-surface-muted overflow-hidden">
              <div className="h-full bg-rose-600 rounded-full" style={{ width: '0.5%' }} />
            </div>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-amber-100/70 border border-amber-200 text-[11px] text-amber-950 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            <strong>Equilibrium Trap Confirmed:</strong> 85% of weekly payroll hours are consumed by
            inward Shepherd-Teacher activities. The church cannot break its 3-year plateau until
            operational hours are re-allocated to outward pioneering.
          </span>
        </div>
      </div>

      {/* Activity Table */}
      <div className="overflow-x-auto rounded-xl border border-surface-border">
        <table className="w-full text-left text-xs">
          <thead className="bg-surface-subtle border-b border-surface-border uppercase font-mono text-[10px] text-ink-tertiary">
            <tr>
              <th className="py-2.5 px-3">Weekly Ministry Activity</th>
              <th className="py-2.5 px-3">5Q Primary Lens</th>
              <th className="py-2.5 px-3">Focus</th>
              <th className="py-2.5 px-3 text-right">Weekly Hours</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-border">
            {ACTIVITIES.map((act, i) => (
              <tr key={i} className="hover:bg-surface-subtle/50">
                <td className="py-2.5 px-3 font-medium text-ink-primary">{act.name}</td>
                <td className="py-2.5 px-3 text-ink-secondary">{act.func}</td>
                <td className="py-2.5 px-3">
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] uppercase font-mono ${
                      act.category === 'External'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-surface-subtle text-ink-secondary'
                    }`}
                  >
                    {act.category}
                  </span>
                </td>
                <td className="py-2.5 px-3 text-right font-mono font-bold text-ink-primary">
                  {act.hrs} hrs
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
