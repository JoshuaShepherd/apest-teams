'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, ArrowRight, ShieldAlert, ArrowLeft } from 'lucide-react';
import { TopBar } from '@/components/shell/TopBar';
import { useTeam } from '@/context/TeamContext';

export default function SetupContextPage() {
  const router = useRouter();
  const { state, updateTeamContext } = useTeam();

  const [teamName, setTeamName] = useState(state.team.teamName);
  const [city, setCity] = useState(state.team.city);
  const [ecclesialType, setEcclesialType] = useState(state.team.ecclesialType);
  const [tenure, setTenure] = useState(state.team.tenure);
  const [statedMission, setStatedMission] = useState(state.team.statedMission);
  const [persistentFrustration, setPersistentFrustration] = useState(
    state.team.persistentFrustration
  );
  const [thrivingVision, setThrivingVision] = useState(state.team.thrivingVision);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateTeamContext({
      teamName,
      city,
      ecclesialType,
      tenure,
      statedMission,
      persistentFrustration,
      thrivingVision,
    });
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-body" data-layer="SOURCE">
      <TopBar />

      <main className="flex-1 max-w-3xl w-full mx-auto p-6 sm:p-8 space-y-8">
        {/* Step Indicator Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-button bg-surface-subtle border border-border-rule text-xs font-mono tracking-wider text-ink-secondary">
            <span>Layer 0 • Step 2 of 2</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-ink-primary tracking-tight">
            Calibrate Qualitative <span className="italic font-normal text-primary">Team Context</span>
          </h1>
          <p className="text-xs sm:text-sm text-ink-secondary max-w-2xl leading-relaxed font-body">
            Your context acts as qualitative calibration. A team with strong apostolic scores in a
            church plant reads as natural expansion; that same score in a 9-year-old plateaued church
            indicates structural blockage.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 font-body">
          <div className="p-6 sm:p-8 rounded-card bg-card border border-border-soft shadow-card space-y-5">
            {/* Team Name & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-heading font-semibold text-ink-primary">Organization / Team Name</label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-border-rule bg-surface-subtle focus:bg-card focus:outline-none focus:ring-1 focus:ring-primary font-body"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-heading font-semibold text-ink-primary">City & Geographic Region</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-border-rule bg-surface-subtle focus:bg-card focus:outline-none focus:ring-1 focus:ring-primary font-body"
                />
              </div>
            </div>

            {/* Ecclesial Type & Tenure */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-heading font-semibold text-ink-primary">Ecclesial Body Type</label>
                <select
                  value={ecclesialType}
                  onChange={(e) => setEcclesialType(e.target.value as any)}
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-border-rule bg-surface-subtle focus:bg-card focus:outline-none focus:ring-1 focus:ring-primary font-body"
                >
                  <option value="church_staff">Church Staff Team (Executive & Pastoral)</option>
                  <option value="church_plant">Church Plant Core Team (Founding)</option>
                  <option value="elder_board">Elder Board / Non-Staff Governance</option>
                  <option value="network_cabinet">Denominational or Regional Cabinet</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-heading font-semibold text-ink-primary">Team Tenure Together</label>
                <input
                  type="text"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                  placeholder="e.g. 2-3 years together (9-year-old plant)"
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-border-rule bg-surface-subtle focus:bg-card focus:outline-none focus:ring-1 focus:ring-primary font-body"
                />
              </div>
            </div>

            {/* Stated Mission */}
            <div className="space-y-1.5">
              <label className="text-xs font-heading font-semibold text-ink-primary">Stated Mission & Purpose</label>
              <textarea
                value={statedMission}
                onChange={(e) => setStatedMission(e.target.value)}
                rows={2}
                required
                className="w-full p-3 text-xs rounded-xl border border-border-rule bg-surface-subtle focus:bg-card focus:outline-none focus:ring-1 focus:ring-primary leading-relaxed font-body"
              />
            </div>

            {/* Persistent Frustration */}
            <div className="space-y-1.5">
              <label className="text-xs font-heading font-semibold text-ink-primary">
                Primary Persistent Frustration or Bottleneck
              </label>
              <textarea
                value={persistentFrustration}
                onChange={(e) => setPersistentFrustration(e.target.value)}
                rows={3}
                required
                className="w-full p-3 text-xs rounded-xl border border-border-rule bg-surface-subtle focus:bg-card focus:outline-none focus:ring-1 focus:ring-primary leading-relaxed font-body"
              />
              <p className="text-[11px] text-ink-tertiary font-body">
                Be candid: attendance plateaus, staff burnout, conflict avoidance, Sunday program
                consumption.
              </p>
            </div>

            {/* Thriving Vision */}
            <div className="space-y-1.5">
              <label className="text-xs font-heading font-semibold text-ink-primary">
                What Does Thriving Look Like in 12 Months?
              </label>
              <textarea
                value={thrivingVision}
                onChange={(e) => setThrivingVision(e.target.value)}
                rows={3}
                required
                className="w-full p-3 text-xs rounded-xl border border-border-rule bg-surface-subtle focus:bg-card focus:outline-none focus:ring-1 focus:ring-primary leading-relaxed font-body"
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => router.push('/setup/roster')}
              className="px-4 py-2 text-xs font-medium rounded-button text-ink-secondary hover:text-primary transition-colors font-body"
            >
              &larr; Back to Roster
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-button bg-primary text-primary-foreground text-xs font-heading font-semibold hover:bg-primary-hover transition-all shadow-md"
            >
              <Sparkles className="w-4 h-4 text-clay" />
              <span>Generate Team Diagnostic Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
