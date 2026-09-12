'use client';

import React from 'react';
import { CorrectiveActivators } from '@/components/layer3/CorrectiveActivators';
import { DiscernmentArchive } from '@/components/layer3/DiscernmentArchive';

export default function CorrectivesPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-button bg-surface-subtle border border-border-rule text-xs font-mono tracking-wider text-ink-secondary">
          Layer 3 Correctives Engine
        </div>
        <h1 className="text-2xl sm:text-4xl font-heading font-bold text-ink-primary tracking-tight">
          Corrective Relationships & <span className="italic font-normal text-primary">Thinking Hats</span>
        </h1>
        <p className="text-xs sm:text-sm text-ink-secondary max-w-2xl leading-relaxed font-body">
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
