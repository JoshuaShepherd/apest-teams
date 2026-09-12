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
    <div className="p-6 sm:p-8 rounded-card bg-card border border-border-soft shadow-card space-y-6" data-layer="COMPUTED">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-clay/10 border border-clay/20 text-clay flex items-center justify-center font-heading font-bold text-xs">
            3
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-ink-primary">
              Diagnostic 3: <span className="italic font-normal text-primary">Functional Activity Inventory</span>
            </h3>
            <p className="text-xs text-ink-secondary font-body">
              Contrasting where weekly staff hours go (Output) against team calling (Composition).
            </p>
          </div>
        </div>

        <div className="text-xs font-mono font-bold text-ink-secondary px-3 py-1 rounded-button bg-surface-subtle border border-border-rule">
          Total Staff Hours: <span className="text-primary font-mono">{totalHours} hrs/wk</span>
        </div>
      </div>

      {/* Side-by-Side Comparison: Calling vs Hours */}
      <div className="p-5 rounded-xl bg-surface-subtle border border-border-rule space-y-4 font-body">
        <h4 className="text-xs uppercase font-mono tracking-wider text-ink-tertiary">
          The Shepherd-Teacher Equilibrium Trap
        </h4>

        <div className="space-y-3 text-xs">
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-emerald-950">
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
              <span className="font-semibold text-sky-950">
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
              <span className="font-semibold text-primary">
                Prophet (Spiritual Discernment & Prayer): 10% of Hours
              </span>
              <span className="font-mono text-ink-tertiary">
                Team Mean: {metrics.means.prophet}/50
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-surface-muted overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '10%' }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-clay">
                Evangelist (Outsider Engagement & Hospitality): 5% of Hours
              </span>
              <span className="font-mono text-ink-tertiary">
                Team Mean: {metrics.means.evangelist}/50
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-surface-muted overflow-hidden">
              <div className="h-full bg-clay rounded-full" style={{ width: '5%' }} />
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

        <div className="p-3.5 rounded-xl bg-clay/10 border border-clay/20 text-xs text-clay flex items-center gap-2.5">
          <AlertTriangle className="w-4 h-4 text-clay shrink-0" />
          <span className="font-body">
            <strong className="font-heading">Equilibrium Trap Confirmed:</strong> 85% of weekly payroll hours are consumed by
            inward Shepherd-Teacher activities. The church cannot break its 3-year plateau until
            operational hours are re-allocated to outward pioneering.
          </span>
        </div>
      </div>

      {/* Activity Breakdown Table */}
      <div className="overflow-x-auto rounded-xl border border-border-rule">
        <table className="w-full text-left text-xs font-body">
          <thead className="bg-surface-subtle border-b border-border-rule uppercase font-mono text-[10px] text-ink-tertiary">
            <tr>
              <th className="py-2.5 px-3">Weekly Operational Activity</th>
              <th className="py-2.5 px-3">Fivefold Role</th>
              <th className="py-2.5 px-3">Category</th>
              <th className="py-2.5 px-3 text-right">Weekly Hours</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-rule">
            {ACTIVITIES.map((act, i) => (
              <tr key={i} className="hover:bg-surface-subtle/50 transition-colors">
                <td className="py-2 px-3 font-medium text-ink-primary">{act.name}</td>
                <td className="py-2 px-3 text-ink-secondary">{act.func}</td>
                <td className="py-2 px-3">
                  <span
                    className={`px-2 py-0.5 rounded-button text-[10px] font-mono ${
                      act.category === 'External'
                        ? 'bg-clay/10 text-clay font-bold border border-clay/20'
                        : 'bg-surface-subtle text-ink-secondary border border-border-rule'
                    }`}
                  >
                    {act.category}
                  </span>
                </td>
                <td className="py-2 px-3 text-right font-mono font-bold text-ink-primary">
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
