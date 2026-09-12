'use client';

import React from 'react';
import { GitMerge, ArrowRight, ShieldCheck } from 'lucide-react';
import { useTeam } from '@/context/TeamContext';

export function PairingNetworkMap() {
  const { metrics, setIsThinkingHatsOpen } = useTeam();

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-surface-border shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif font-bold text-lg text-ink-primary">
            Corrective Relationship Network
          </h3>
          <p className="text-xs text-ink-secondary">
            Ecclesial health depends on active cross-functional tension. High Euclidean distance
            indicates maximum complementary leverage when discipled well.
          </p>
        </div>

        <button
          onClick={() => setIsThinkingHatsOpen(true)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface-subtle hover:bg-surface-muted text-ink-primary border border-surface-border text-xs font-semibold transition-colors"
        >
          <GitMerge className="w-3.5 h-3.5 text-indigo-600" />
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
                  ? 'bg-rose-50/50 border-rose-200 shadow-sm'
                  : isClosest
                  ? 'bg-emerald-50/50 border-emerald-200'
                  : 'bg-surface-subtle/60 border-surface-border'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="font-bold text-sm text-ink-primary flex items-center gap-2">
                  <span>{pair.memberA}</span>
                  <span className="text-ink-tertiary font-normal">&harr;</span>
                  <span>{pair.memberB}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  {isFurthest && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase bg-rose-100 text-rose-800">
                      Greatest Tension
                    </span>
                  )}
                  {isClosest && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800">
                      Highest Empathy
                    </span>
                  )}
                  <span className="font-mono font-bold text-ink-secondary text-[11px] px-1.5 py-0.5 rounded bg-white border border-surface-border">
                    d = {pair.euclideanDistance}
                  </span>
                </div>
              </div>

              <div className="font-semibold text-indigo-900 text-xs">{pair.tensionLabel}</div>

              <p className="text-ink-secondary leading-relaxed">{pair.correctiveDynamic}</p>

              <div className="pt-1 text-[11px] text-rose-900/90 font-medium">
                <strong>Systemic Risk if Ignored:</strong> {pair.riskIfIgnored}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
