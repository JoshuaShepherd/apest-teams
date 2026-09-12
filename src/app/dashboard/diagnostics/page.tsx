'use client';

import React from 'react';
import { CultureRewardsCard } from '@/components/layer2/CultureRewardsCard';
import { SuppressionGridCard } from '@/components/layer2/SuppressionGridCard';
import { ActivityInventoryCard } from '@/components/layer2/ActivityInventoryCard';
import { MovementArcCard } from '@/components/layer2/MovementArcCard';

export default function DiagnosticsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <div className="text-xs uppercase font-mono text-ink-tertiary">Layer 2 Diagnostics</div>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-ink-primary">
          The Four Systemic Diagnostics
        </h1>
        <p className="text-xs sm:text-sm text-ink-secondary max-w-2xl leading-relaxed">
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
