'use client';

import React from 'react';
import { CultureRewardsCard } from '@/components/layer2/CultureRewardsCard';
import { SuppressionGridCard } from '@/components/layer2/SuppressionGridCard';
import { ActivityInventoryCard } from '@/components/layer2/ActivityInventoryCard';
import { MovementArcCard } from '@/components/layer2/MovementArcCard';
import { ContextualBridge } from '@/components/dashboard/ContextualBridge';

export default function DiagnosticsPage() {
  return (
    <div className="space-y-8">
      {/* Contextual Bridge back to 11-Panel Mirror */}
      <ContextualBridge
        currentLayer="Layer 2 Diagnostics"
        correspondingPanelNumber={4}
        correspondingPanelTitle="The Cascade & Breakpoints (also Panel 6 Culture Audit)"
        phaseName="Phase 2: Systemic Diagnosis"
      />

      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-button bg-surface-subtle border border-border-rule text-xs font-mono tracking-wider text-ink-secondary">
          Layer 2 Diagnostics
        </div>
        <h1 className="text-2xl sm:text-4xl font-heading font-bold text-ink-primary tracking-tight">
          The Four <span className="italic font-normal text-primary">Systemic Diagnostics</span>
        </h1>
        <p className="text-xs sm:text-sm text-ink-secondary max-w-2xl leading-relaxed font-body">
          Exposing why teams get trapped in institutional equilibrium, which voices are structurally
          suppressed, and how weekly operational hours diverge from fivefold calling.
        </p>
      </div>

      {/* Diagnostic 1: Culture Rewards */}
      <CultureRewardsCard />

      {/* Diagnostic 2: Presence vs Suppression Grid */}
      <SuppressionGridCard />

      {/* Diagnostic 3: Functional Activity Inventory */}
      <ActivityInventoryCard />

      {/* Diagnostic 4: Movement-Institution Arc */}
      <MovementArcCard />
    </div>
  );
}
