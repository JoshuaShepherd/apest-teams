'use client';

import React from 'react';
import { BookOpen, Calendar, CheckCircle2 } from 'lucide-react';
import { useTeam } from '@/context/TeamContext';

export function DiscernmentArchive() {
  const { state } = useTeam();

  return (
    <div className="p-6 sm:p-8 rounded-card bg-card border border-border-soft shadow-card space-y-6" data-layer="SOURCE">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-heading font-bold text-xl text-ink-primary">
            Discernment Archive & <span className="italic font-normal text-primary">Covenants</span>
          </h3>
          <p className="text-xs text-ink-secondary font-body">
            A permanent ecclesial record of decisions discerned through the fivefold Thinking Hats studio.
          </p>
        </div>
        <div className="text-xs font-mono text-ink-tertiary px-3 py-1 rounded-button bg-surface-subtle border border-border-rule">
          {state.decisions.length} Covenants Logged
        </div>
      </div>

      <div className="space-y-4 text-xs font-body">
        {state.decisions.map((dec) => (
          <div
            key={dec.id}
            className="p-5 rounded-xl bg-surface-subtle border border-border-rule space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-rule pb-3">
              <div className="font-heading font-bold text-sm text-ink-primary">{dec.title}</div>
              <div className="flex items-center gap-2 text-ink-tertiary font-mono text-[11px]">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                <span>{dec.date}</span>
              </div>
            </div>

            <p className="text-ink-secondary leading-relaxed">{dec.context}</p>

            {/* Notes Across the 5 Hats */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 pt-1">
              {(['apostle', 'prophet', 'evangelist', 'shepherd', 'teacher'] as const).map((f) => (
                <div key={f} className="p-3 rounded-xl bg-card border border-border-rule space-y-1">
                  <div className="font-heading font-bold uppercase font-mono text-[10px] text-primary">
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
            <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-950 flex items-start gap-2.5 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-heading font-bold">Ratified Covenant Agreement: </span>
                <span className="font-heading italic font-normal text-ink-primary">{dec.covenantAgreement}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
