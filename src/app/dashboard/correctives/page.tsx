'use client';

import React from 'react';
import { CorrectiveActivators } from '@/components/layer3/CorrectiveActivators';
import { DiscernmentArchive } from '@/components/layer3/DiscernmentArchive';

export default function CorrectivesPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <div className="text-xs uppercase font-mono text-ink-tertiary">
          Layer 3 Correctives Engine
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-ink-primary">
          Corrective Relationships & Thinking Hats
        </h1>
        <p className="text-xs sm:text-sm text-ink-secondary max-w-2xl leading-relaxed">
          Discipling cross-functional friction through the 10 canonical pairings and structured 5Q
          Thinking Hats discernment studio.
        </p>
      </div>

      {/* Corrective Activators */}
      <CorrectiveActivators />

      {/* Discernment Archive */}
      <DiscernmentArchive />
    </div>
  );
}
