'use client';

import React from 'react';
import { ProfilesSideBySide } from '@/components/layer1/ProfilesSideBySide';
import { TeamWheelPentagon } from '@/components/layer1/TeamWheelPentagon';
import { PairingNetworkMap } from '@/components/layer1/PairingNetworkMap';
import { ContextualBridge } from '@/components/dashboard/ContextualBridge';

export default function PortraitPage() {
  return (
    <div className="space-y-8">
      {/* Contextual Bridge back to 11-Panel Mirror */}
      <ContextualBridge
        currentLayer="Layer 1 Portrait"
        correspondingPanelNumber={3}
        correspondingPanelTitle="The Team Map (5Q Shape)"
        phaseName="Phase 2: Diagnosis"
      />

      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-button bg-surface-subtle border border-border-rule text-xs font-mono tracking-wider text-ink-secondary">
          Layer 1 Diagnostic
        </div>
        <h1 className="text-2xl sm:text-4xl font-heading font-bold text-ink-primary tracking-tight">
          The Fivefold <span className="italic font-normal text-primary">Team Portrait</span>
        </h1>
        <p className="text-xs sm:text-sm text-ink-secondary max-w-2xl leading-relaxed font-body">
          Measuring the individual and collective ecology of the body across 5Q pentagonal radar
          geometry, Organizational MRI maturity rings, and corrective pairwise relationships.
        </p>
      </div>

      {/* Side-by-Side Profiles */}
      <ProfilesSideBySide />

      {/* Dual-Layer SVG Pentagonal Wheel */}
      <TeamWheelPentagon />

      {/* Pairing Network Map */}
      <PairingNetworkMap />
    </div>
  );
}
