'use client';

import React from 'react';
import { BookOpen, Calendar, CheckCircle2 } from 'lucide-react';
import { useTeam } from '@/context/TeamContext';

export function DiscernmentArchive() {
  const { state } = useTeam();

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-surface-border shadow-sm space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-serif font-bold text-lg text-ink-primary">
            Discernment Archive & Covenants
          </h3>
          <p className="text-xs text-ink-secondary">
            A permanent ecclesial record of decisions discerned through the fivefold Thinking Hats
            studio.
          </p>
        </div>
        <div className="text-xs font-mono text-ink-tertiary">
          {state.decisions.length} Covenants Logged
        </div>
      </div>

      <div className="space-y-4 text-xs">
        {state.decisions.map((dec) => (
          <div
            key={dec.id}
            className="p-5 rounded-xl bg-surface-subtle border border-surface-border space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-surface-border pb-3">
              <div className="font-bold text-sm text-ink-primary">{dec.title}</div>
              <div className="flex items-center gap-2 text-ink-tertiary font-mono text-[11px]">
                <Calendar className="w-3.5 h-3.5" />
                <span>{dec.date}</span>
              </div>
            </div>

            <p className="text-ink-secondary leading-relaxed">{dec.context}</p>

            {/* Notes Across the 5 Hats */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 pt-1">
              {(['apostle', 'prophet', 'evangelist', 'shepherd', 'teacher'] as const).map((f) => (
                <div key={f} className="p-3 rounded-lg bg-white border border-surface-border space-y-1">
                  <div className="font-bold uppercase font-mono text-[10px] text-ink-tertiary">
                    {f} Hat
                  </div>
                  <div className="text-[11px] text-ink-secondary leading-tight space-y-1">
                    {dec.notes[f]?.map((note, i) => (
                      <div key={i}>• {note}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Covenant Agreement */}
            <div className="p-3.5 rounded-lg bg-emerald-50/80 border border-emerald-200 text-emerald-950 flex items-start gap-2 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Ratified Covenant Agreement: </span>
                <span className="font-serif italic">{dec.covenantAgreement}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
