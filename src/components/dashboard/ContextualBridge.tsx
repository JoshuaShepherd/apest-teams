'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, ArrowLeft, Layers } from 'lucide-react';

interface ContextualBridgeProps {
  currentLayer: string;
  correspondingPanelNumber: number;
  correspondingPanelTitle: string;
  phaseName: string;
}

export function ContextualBridge({
  currentLayer,
  correspondingPanelNumber,
  correspondingPanelTitle,
  phaseName,
}: ContextualBridgeProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl bg-surface-warm/80 border border-border-soft text-xs transition-colors shadow-xs">
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
          <Compass className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-heading font-semibold text-foreground">
              Mirror Companion Bridge
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded-full bg-accent text-accent-foreground border border-border-soft">
              {phaseName}
            </span>
          </div>
          <p className="text-muted-foreground font-body">
            This {currentLayer} deep-dive informs <span className="font-medium text-foreground">Panel {correspondingPanelNumber}: {correspondingPanelTitle}</span> in the sequential mirror.
          </p>
        </div>
      </div>

      <Link
        href={`/dashboard#panel-${correspondingPanelNumber}`}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-button bg-card hover:bg-surface-subtle border border-border-rule text-foreground font-semibold transition-colors shrink-0 shadow-xs"
      >
        <ArrowLeft className="w-3.5 h-3.5 text-primary" />
        <span>Return to 11-Panel Mirror</span>
      </Link>
    </div>
  );
}
