'use client';

import React from 'react';
import { ShieldAlert, Trash2, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { useTeam } from '@/context/TeamContext';
import { TeamMember } from '@/lib/types/apest';

export function RosterTable() {
  const { state, updateMember, removeMember, setActiveMember } = useTeam();

  return (
    <div className="overflow-x-auto rounded-card border border-border-soft bg-card shadow-card" data-layer="SOURCE">
      <table className="w-full text-left text-xs font-body">
        <thead className="bg-surface-subtle border-b border-border-rule uppercase font-mono text-[10px] text-ink-tertiary">
          <tr>
            <th className="py-3.5 px-4">Member Name</th>
            <th className="py-3.5 px-4">Role Title</th>
            <th className="py-3.5 px-4">Type</th>
            <th className="py-3.5 px-4">Formal Authority</th>
            <th className="py-3.5 px-4">5Q Profile Status</th>
            <th className="py-3.5 px-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border-rule">
          {state.members.map((member) => (
            <tr
              key={member.id}
              className="hover:bg-surface-subtle/60 transition-colors cursor-pointer"
              onClick={() => setActiveMember(member)}
            >
              <td className="py-3.5 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-xs shadow-sm">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-ink-primary">{member.name}</div>
                    <div className="text-[11px] text-ink-tertiary font-mono">{member.email}</div>
                  </div>
                </div>
              </td>

              <td className="py-3.5 px-4 text-ink-secondary">{member.role}</td>

              <td className="py-3.5 px-4">
                <span className="px-2.5 py-0.5 rounded-button text-[10px] uppercase font-mono bg-surface-subtle border border-border-rule text-ink-secondary">
                  {member.isStaff ? 'Staff' : 'Volunteer'}
                </span>
              </td>

              <td className="py-3.5 px-4" onClick={(e) => e.stopPropagation()}>
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={member.hasFormalAuthority}
                    onChange={(e) =>
                      updateMember(member.id, { hasFormalAuthority: e.target.checked })
                    }
                    className="rounded border-border-rule text-primary focus:ring-primary w-4 h-4"
                  />
                  <span
                    className={`text-[11px] ${
                      member.hasFormalAuthority ? 'text-rose-800 font-semibold' : 'text-ink-tertiary'
                    }`}
                  >
                    {member.hasFormalAuthority ? 'Veto Authority' : 'Advisor'}
                  </span>
                </label>
              </td>

              <td className="py-3.5 px-4">
                {member.status === 'complete' ? (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-button text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>
                      {member.profile.primary.toUpperCase()} /{' '}
                      {member.profile.secondary.toUpperCase()} Connected
                    </span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-button text-[11px] font-medium bg-amber-50 text-amber-800 border border-amber-200">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>Invite Sent (Pending)</span>
                  </div>
                )}
              </td>

              <td className="py-3.5 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => removeMember(member.id)}
                  className="p-1.5 text-ink-tertiary hover:text-rose-600 rounded-button transition-colors"
                  title="Remove from roster"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
