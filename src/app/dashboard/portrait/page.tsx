'use client';

import React from 'react';
import { ProfilesSideBySide } from '@/components/layer1/ProfilesSideBySide';
import { TeamWheelPentagon } from '@/components/layer1/TeamWheelPentagon';
import { PairingNetworkMap } from '@/components/layer1/PairingNetworkMap';

export default function PortraitPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <div className="text-xs uppercase font-mono text-ink-tertiary">Layer 1 Diagnostic</div>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-ink-primary">
          The Fivefold Team Portrait
        </h1>
        <p className="text-xs sm:text-sm text-ink-secondary max-w-2xl leading-relaxed">
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
