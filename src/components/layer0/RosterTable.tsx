'use client';

import React from 'react';
import { ShieldAlert, Trash2, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { useTeam } from '@/context/TeamContext';
import { TeamMember } from '@/lib/types/apest';

export function RosterTable() {
  const { state, updateMember, removeMember, setActiveMember } = useTeam();

  return (
    <div className="overflow-x-auto rounded-xl border border-surface-border bg-white shadow-sm">
      <table className="w-full text-left text-xs">
        <thead className="bg-surface-subtle border-b border-surface-border uppercase font-mono text-[10px] text-ink-tertiary">
          <tr>
            <th className="py-3 px-4">Member Name</th>
            <th className="py-3 px-4">Role Title</th>
            <th className="py-3 px-4">Type</th>
            <th className="py-3 px-4">Formal Authority</th>
            <th className="py-3 px-4">5Q Profile Status</th>
            <th className="py-3 px-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-surface-border">
          {state.members.map((member) => (
            <tr
              key={member.id}
              className="hover:bg-surface-subtle/50 transition-colors cursor-pointer"
              onClick={() => setActiveMember(member)}
            >
              <td className="py-3 px-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-ink-primary text-white flex items-center justify-center font-bold text-[11px] font-serif">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-ink-primary">{member.name}</div>
                    <div className="text-[11px] text-ink-tertiary">{member.email}</div>
                  </div>
                </div>
              </td>

              <td className="py-3 px-4 text-ink-secondary">{member.role}</td>

              <td className="py-3 px-4">
                <span className="px-2 py-0.5 rounded text-[10px] uppercase font-mono bg-surface-subtle border border-surface-border text-ink-secondary">
                  {member.isStaff ? 'Staff' : 'Volunteer'}
                </span>
              </td>

              <td className="py-3 px-4" onClick={(e) => e.stopPropagation()}>
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={member.hasFormalAuthority}
                    onChange={(e) =>
                      updateMember(member.id, { hasFormalAuthority: e.target.checked })
                    }
                    className="rounded border-surface-border text-rose-600 focus:ring-rose-500 w-3.5 h-3.5"
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

              <td className="py-3 px-4">
                {member.status === 'complete' ? (
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>
                      {member.profile.primary.toUpperCase()} /{' '}
                      {member.profile.secondary.toUpperCase()} Connected
                    </span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 text-amber-800 border border-amber-200">
                    <Clock className="w-3 h-3 text-amber-600" />
                    <span>Invite Sent (Pending)</span>
                  </div>
                )}
              </td>

              <td className="py-3 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => removeMember(member.id)}
                  className="p-1 text-ink-tertiary hover:text-rose-600 rounded transition-colors"
                  title="Remove from roster"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
