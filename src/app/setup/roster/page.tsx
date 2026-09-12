'use client';

import React from 'react';
import Link from 'next/link';
import { Users, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { RosterTable } from '@/components/layer0/RosterTable';
import { FiveQDropzone } from '@/components/layer0/FiveQDropzone';
import { CompletionGateBanner } from '@/components/layer0/CompletionGateBanner';
import { TopBar } from '@/components/shell/TopBar';
import { useTeam } from '@/context/TeamContext';

export default function SetupRosterPage() {
  const { state } = useTeam();

  return (
    <div className="min-h-screen bg-surface-base flex flex-col">
      <TopBar />

      <main className="flex-1 max-w-5xl w-full mx-auto p-6 sm:p-8 space-y-8">
        {/* Step Indicator Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-subtle border border-surface-border text-xs font-mono text-ink-secondary">
            <span>Layer 0 • Step 1 of 2</span>
          </div>
          <h1 className="text-3xl font-serif font-bold text-ink-primary">
            Assemble the Leadership Team Roster
          </h1>
          <p className="text-xs sm:text-sm text-ink-secondary max-w-2xl leading-relaxed">
            Provision seats, configure voting authority, and connect 5Q assessment profiles. A
            minimum of 3 members and up to 12 can be diagnosed in a single team ecology.
          </p>
        </div>

        {/* Capacity Bar */}
        <div className="p-4 rounded-xl bg-white border border-surface-border flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-ink-primary">Active Roster Size:</span>
            <span className="font-mono text-indigo-700 font-bold">
              {state.members.length} leaders
            </span>
          </div>
          <div className="text-ink-secondary">
            Purchased Tier: <span className="font-medium text-ink-primary">Standard Staff Team</span>
          </div>
        </div>

        {/* Roster Table */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-ink-primary">Current Members</h3>
            <span className="text-xs text-ink-tertiary">Toggle &ldquo;Formal Authority&rdquo; for pastors with institutional veto power</span>
          </div>
          <RosterTable />
        </div>

        {/* Dropzone for Ingest */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-ink-primary">Connect 5Q Vocational Profiles</h3>
          <FiveQDropzone />
        </div>

        {/* Completion Gate Banner */}
        <CompletionGateBanner />
      </main>
    </div>
  );
}
