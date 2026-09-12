'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, AlertCircle, ArrowRight, Lock } from 'lucide-react';
import { useTeam } from '@/context/TeamContext';

export function CompletionGateBanner() {
  const { state } = useTeam();

  const completedCount = state.members.filter((m) => m.status === 'complete').length;
  const isFullyAssembled = completedCount >= 3 && completedCount === state.members.length;

  return (
    <div
      className={`p-6 rounded-2xl border transition-all ${
        isFullyAssembled
          ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
          : 'bg-amber-50/80 border-amber-200 text-amber-950'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          {isFullyAssembled ? (
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
          ) : (
            <Lock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          )}

          <div className="space-y-1">
            <h4 className="font-bold text-sm">
              {isFullyAssembled
                ? `100% Profile Assembly Complete (${completedCount} of ${state.members.length} Connected)`
                : `Ecclesial Completion Gate Active (${completedCount} of ${state.members.length} Ready)`}
            </h4>
            <p className="text-xs leading-relaxed max-w-2xl opacity-90">
              {isFullyAssembled
                ? 'Every leader on the team has attached their verified 5Q vocational scores. You are ready to calibrate qualitative institutional context.'
                : 'APEST Teams evaluates the living ecology between members. A partial team picture produces a false diagnosis. All seats must be filled before synthesis activates.'}
            </p>
          </div>
        </div>

        <div>
          {isFullyAssembled ? (
            <Link
              href="/setup/context"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-800 text-white font-semibold text-xs hover:bg-emerald-900 transition-colors shadow-sm whitespace-nowrap"
            >
              <span>Calibrate Context</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <button
              disabled
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-amber-200/80 text-amber-800 font-semibold text-xs cursor-not-allowed opacity-70 whitespace-nowrap"
            >
              <span>Gate Locked</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
