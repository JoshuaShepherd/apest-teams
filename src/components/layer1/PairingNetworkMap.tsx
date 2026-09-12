'use client';

import React from 'react';
import { GitMerge, ArrowRight, ShieldCheck } from 'lucide-react';
import { useTeam } from '@/context/TeamContext';

export function PairingNetworkMap() {
  const { metrics, setIsThinkingHatsOpen } = useTeam();

  return (
    <div className="p-6 sm:p-8 rounded-card bg-card border border-border-soft shadow-card space-y-6" data-layer="COMPUTED">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-heading font-bold text-xl text-ink-primary">
            Corrective <span className="italic font-normal text-primary">Relationship Network</span>
          </h3>
          <p className="text-xs text-ink-secondary font-body">
            Ecclesial health depends on active cross-functional tension. High Euclidean distance
            indicates maximum complementary leverage when discipled well.
          </p>
        </div>

        <button
          onClick={() => setIsThinkingHatsOpen(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-button bg-surface-subtle hover:bg-surface-muted text-ink-primary border border-border-rule text-xs font-semibold transition-all hover:border-primary/40 shadow-sm"
        >
          <GitMerge className="w-3.5 h-3.5 text-primary" />
          <span>Practice Pairings in Studio</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metrics.pairwiseTensions.map((pair, idx) => {
          const isFurthest =
            pair.memberA === metrics.furthestPair.memberA &&
            pair.memberB === metrics.furthestPair.memberB;
          const isClosest =
            pair.memberA === metrics.closestPair.memberA &&
            pair.memberB === metrics.closestPair.memberB;

          return (
            <div
              key={idx}
              className={`p-4 rounded-xl border text-xs space-y-2.5 transition-all ${
                isFurthest
                  ? 'bg-rose-50/60 border-rose-200/80 shadow-sm'
                  : isClosest
                  ? 'bg-emerald-50/60 border-emerald-200/80'
                  : 'bg-surface-subtle border-border-rule'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="font-heading font-bold text-sm text-ink-primary flex items-center gap-2">
                  <span>{pair.memberA}</span>
                  <span className="text-clay font-normal">&harr;</span>
                  <span>{pair.memberB}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  {isFurthest && (
                    <span className="px-2 py-0.5 rounded-button text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-800">
                      Greatest Tension
                    </span>
                  )}
                  {isClosest && (
                    <span className="px-2 py-0.5 rounded-button text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                      Highest Empathy
                    </span>
                  )}
                  <span className="font-mono font-bold text-ink-secondary text-[11px] px-2 py-0.5 rounded-button bg-white border border-border-rule">
                    d = {pair.euclideanDistance}
                  </span>
                </div>
              </div>

              <div className="font-heading font-semibold text-primary text-xs">{pair.tensionLabel}</div>

              <p className="text-ink-secondary leading-relaxed font-body">{pair.correctiveDynamic}</p>

              <div className="pt-1 text-[11px] text-rose-950 font-medium">
                <strong className="text-rose-900">Systemic Risk if Ignored:</strong> {pair.riskIfIgnored}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
