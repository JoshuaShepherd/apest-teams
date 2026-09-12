'use client';

import React, { useState } from 'react';
import {
  X,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Activity,
  HeartHandshake,
  FileCheck,
} from 'lucide-react';
import { useTeam } from '@/context/TeamContext';

export function QuarterlyReviewWizard() {
  const { isQuarterlyReviewOpen, setIsQuarterlyReviewOpen, state, metrics } = useTeam();
  const [activeStep, setActiveStep] = useState(1);

  const [winsInput, setWinsInput] = useState(
    'Priya and Sofia piloted monthly neighborhood community dinners; Marcus instituted 30-min pastoral checks with James before casting church-wide visions.'
  );
  const [shiftObservation, setShiftObservation] = useState(
    'Hours spent on Sunday morning logistics decreased by 15%, while time invested in outsider hospitality increased.'
  );
  const [covenant90Day, setCovenant90Day] = useState(
    'For Q4, we covenant to launch 2 missional households in Aurora, protect Sofia’s weekly outreach time from administrative triage, and hold monthly Thinking Hats discernment sessions.'
  );

  if (!isQuarterlyReviewOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in no-print">
      <div
        className="w-full max-w-3xl bg-surface-card rounded-2xl shadow-2xl border border-surface-border overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-surface-border bg-surface-subtle flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-900 text-white flex items-center justify-center">
              <Calendar className="w-6 h-6 text-sky-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-ink-primary">
                  Quarterly Team Ecclesial Review
                </h3>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white border border-surface-border text-ink-secondary">
                  Movement 4 of 4
                </span>
              </div>
              <p className="text-xs text-ink-secondary">
                A 90-day rhythm to dismantle institutional equilibrium and renew missional vitality.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsQuarterlyReviewOpen(false)}
            className="p-1.5 rounded-lg text-ink-secondary hover:text-ink-primary hover:bg-surface-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicators */}
        <div className="px-6 py-3 border-b border-surface-border bg-white flex items-center justify-between text-xs font-semibold">
          {[
            { step: 1, label: '1. Celebrate', icon: Sparkles },
            { step: 2, label: '2. Diagnose', icon: Activity },
            { step: 3, label: '3. Recalibrate', icon: HeartHandshake },
            { step: 4, label: '4. Covenant', icon: FileCheck },
          ].map((item) => {
            const Icon = item.icon;
            const isDone = activeStep > item.step;
            const isCurrent = activeStep === item.step;

            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(item.step)}
                className={`flex items-center gap-2 transition-all ${
                  isCurrent
                    ? 'text-sky-700'
                    : isDone
                    ? 'text-emerald-700'
                    : 'text-ink-tertiary hover:text-ink-secondary'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                    isCurrent
                      ? 'bg-sky-100 text-sky-800 font-bold ring-2 ring-sky-600'
                      : isDone
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-surface-muted text-ink-tertiary'
                  }`}
                >
                  {isDone ? '✓' : item.step}
                </div>
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Wizard Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeStep === 1 && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-900 space-y-1">
                <div className="font-bold text-sm">Movement 1: Celebrate Missional Emergence</div>
                <p>
                  Before analyzing metrics, recount where the Holy Spirit moved outside your Sunday
                  building and where members took risks in their secondary/supplementary gifts.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-ink-tertiary">
                  What breakthroughs and relational maturity occurred this past quarter?
                </label>
                <textarea
                  value={winsInput}
                  onChange={(e) => setWinsInput(e.target.value)}
                  rows={4}
                  className="w-full p-3 text-xs rounded-lg border border-surface-border bg-white focus:outline-none focus:ring-1 focus:ring-ink-primary leading-relaxed"
                />
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                <div className="font-bold text-sm">Movement 2: Diagnose Equilibrium Traps</div>
                <p>
                  Review your current Pleroma Fullness ({metrics.jesusSpaceArea}%) and Activity
                  Inventory. Did the team slide back into the Shepherd-Teacher maintenance trap?
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
                {(['apostle', 'prophet', 'evangelist', 'shepherd', 'teacher'] as const).map((f) => (
                  <div key={f} className="p-3 rounded-lg bg-surface-subtle border border-surface-border">
                    <div className="text-[10px] uppercase font-mono text-ink-tertiary">{f}</div>
                    <div className="text-base font-bold text-ink-primary font-mono">
                      {metrics.means[f]}
                    </div>
                    <div className="text-[10px] text-ink-secondary">
                      {metrics.coverageTiers[f]}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-ink-tertiary">
                  Diagnostic Observations:
                </label>
                <textarea
                  value={shiftObservation}
                  onChange={(e) => setShiftObservation(e.target.value)}
                  rows={3}
                  className="w-full p-3 text-xs rounded-lg border border-surface-border bg-white focus:outline-none focus:ring-1 focus:ring-ink-primary leading-relaxed"
                />
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900 space-y-1">
                <div className="font-bold text-sm">Movement 3: Recalibrate Corrective Tensions</div>
                <p>
                  Health requires ongoing creative friction. Where have leaders smoothed over
                  prophetic confrontation or apostolic risk to preserve false peace?
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-subtle border border-surface-border space-y-2 text-xs">
                <div className="font-semibold text-ink-primary">Identified Core Tension:</div>
                <p className="text-ink-secondary">
                  <strong>{metrics.furthestPair.memberA}</strong> and{' '}
                  <strong>{metrics.furthestPair.memberB}</strong> carry the greatest distance (
                  {metrics.furthestPair.distance}). This pairing must schedule their monthly
                  pre-flight ritual before the next quarter begins.
                </p>
              </div>
            </div>
          )}

          {activeStep === 4 && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1">
                <div className="font-bold text-sm">Movement 4: 90-Day Ecclesial Covenant</div>
                <p>
                  Sign a mutual agreement defining your priorities, calendar boundaries, and shared
                  discipleship commitments for the coming quarter.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-ink-tertiary">
                  Drafted Team Covenant:
                </label>
                <textarea
                  value={covenant90Day}
                  onChange={(e) => setCovenant90Day(e.target.value)}
                  rows={4}
                  className="w-full p-3 text-xs rounded-lg border border-surface-border bg-white focus:outline-none focus:ring-1 focus:ring-ink-primary font-serif leading-relaxed"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-surface-border bg-surface-subtle flex items-center justify-between">
          <button
            onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
            disabled={activeStep === 1}
            className="px-3.5 py-1.5 text-xs font-medium rounded-lg border border-surface-border bg-white hover:bg-surface-muted disabled:opacity-30 text-ink-primary transition-colors"
          >
            Back
          </button>

          {activeStep < 4 ? (
            <button
              onClick={() => setActiveStep((prev) => prev + 1)}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-ink-primary text-white hover:bg-ink-secondary transition-colors"
            >
              <span>Next Movement</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={() => setIsQuarterlyReviewOpen(false)}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 transition-colors shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Seal 90-Day Covenant</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
