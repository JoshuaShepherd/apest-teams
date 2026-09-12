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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in no-print" data-layer="INTERPRETED">
      <div
        className="w-full max-w-3xl bg-card rounded-card shadow-card border border-border-soft overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-border-rule bg-surface-subtle flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-sm">
              <Calendar className="w-5 h-5 text-clay" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-bold text-base text-ink-primary">
                  Quarterly Team <span className="italic font-normal text-primary">Ecclesial Review</span>
                </h3>
                <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-button bg-surface-subtle border border-border-rule text-ink-secondary">
                  Movement 4 of 4
                </span>
              </div>
              <p className="text-xs text-ink-secondary font-body">
                A 90-day rhythm to dismantle institutional equilibrium and renew missional vitality.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsQuarterlyReviewOpen(false)}
            className="p-1.5 rounded-button text-ink-secondary hover:text-ink-primary hover:bg-surface-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicators */}
        <div className="px-6 py-3 border-b border-border-rule bg-card flex items-center justify-between text-xs font-heading font-semibold">
          {[
            { step: 1, label: '1. Celebrate', icon: Sparkles },
            { step: 2, label: '2. Diagnose', icon: Activity },
            { step: 3, label: '3. Recalibrate', icon: HeartHandshake },
            { step: 4, label: '4. Covenant', icon: FileCheck },
          ].map((item) => {
            const isDone = activeStep > item.step;
            const isCurrent = activeStep === item.step;

            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(item.step)}
                className={`flex items-center gap-2 transition-all ${
                  isCurrent
                    ? 'text-primary'
                    : isDone
                    ? 'text-emerald-700'
                    : 'text-ink-tertiary hover:text-ink-secondary'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono ${
                    isCurrent
                      ? 'bg-primary/10 text-primary font-bold ring-2 ring-primary/40'
                      : isDone
                      ? 'bg-emerald-100 text-emerald-800 font-bold'
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
        <div className="flex-1 overflow-y-auto p-6 space-y-6 font-body">
          {activeStep === 1 && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-xs text-primary space-y-1">
                <div className="font-heading font-bold text-sm">Movement 1: Celebrate Missional Emergence</div>
                <p className="text-ink-secondary font-body">
                  Before analyzing metrics, recount where the Holy Spirit moved outside your Sunday
                  building and where members took risks in their secondary/supplementary gifts.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-ink-tertiary">
                  What breakthroughs and relational maturity occurred this past quarter?
                </label>
                <textarea
                  value={winsInput}
                  onChange={(e) => setWinsInput(e.target.value)}
                  rows={4}
                  className="w-full p-3 text-xs rounded-xl border border-border-rule bg-surface-subtle focus:bg-card focus:outline-none focus:ring-1 focus:ring-primary leading-relaxed font-body"
                />
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-clay/10 border border-clay/20 text-xs text-clay space-y-1">
                <div className="font-heading font-bold text-sm">Movement 2: Diagnose Equilibrium Traps</div>
                <p className="text-ink-secondary font-body">
                  Review your current Pleroma Fullness ({metrics.jesusSpaceArea}%) and Activity
                  Inventory. Did the team slide back into the Shepherd-Teacher maintenance trap?
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
                {(['apostle', 'prophet', 'evangelist', 'shepherd', 'teacher'] as const).map((f) => (
                  <div key={f} className="p-3 rounded-xl bg-surface-subtle border border-border-rule">
                    <div className="text-[10px] uppercase font-mono text-ink-tertiary">{f}</div>
                    <div className="text-base font-bold text-primary font-mono">
                      {metrics.means[f]}
                    </div>
                    <div className="text-[10px] text-ink-secondary">
                      {metrics.coverageTiers[f]}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-ink-tertiary">
                  Diagnostic Observations:
                </label>
                <textarea
                  value={shiftObservation}
                  onChange={(e) => setShiftObservation(e.target.value)}
                  rows={3}
                  className="w-full p-3 text-xs rounded-xl border border-border-rule bg-surface-subtle focus:bg-card focus:outline-none focus:ring-1 focus:ring-primary leading-relaxed font-body"
                />
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-xs text-primary space-y-1">
                <div className="font-heading font-bold text-sm">Movement 3: Recalibrate Corrective Tensions</div>
                <p className="text-ink-secondary font-body">
                  Health requires ongoing creative friction. Where have leaders smoothed over
                  prophetic confrontation or apostolic risk to preserve false peace?
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-subtle border border-border-rule space-y-2 text-xs">
                <div className="font-heading font-semibold text-ink-primary">Identified Core Tension:</div>
                <p className="text-ink-secondary font-body leading-relaxed">
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
              <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 space-y-1">
                <div className="font-heading font-bold text-sm">Movement 4: 90-Day Ecclesial Covenant</div>
                <p className="text-ink-secondary font-body">
                  Sign a mutual agreement defining your priorities, calendar boundaries, and shared
                  discipleship commitments for the coming quarter.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-ink-tertiary">
                  Drafted Team Covenant:
                </label>
                <textarea
                  value={covenant90Day}
                  onChange={(e) => setCovenant90Day(e.target.value)}
                  rows={4}
                  className="w-full p-3 text-xs rounded-xl border border-border-rule bg-card focus:outline-none focus:ring-1 focus:ring-primary font-heading leading-relaxed text-ink-primary"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border-rule bg-surface-subtle flex items-center justify-between font-body">
          <button
            onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
            disabled={activeStep === 1}
            className="px-4 py-2 text-xs font-medium rounded-button border border-border-rule bg-card hover:bg-surface-muted disabled:opacity-30 text-ink-primary transition-colors"
          >
            Back
          </button>

          {activeStep < 4 ? (
            <button
              onClick={() => setActiveStep((prev) => prev + 1)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-button bg-primary text-primary-foreground hover:bg-primary-hover transition-colors shadow-sm"
            >
              <span>Next Movement</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={() => setIsQuarterlyReviewOpen(false)}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold rounded-button bg-primary text-primary-foreground hover:bg-primary-hover transition-colors shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-clay" />
              <span>Seal 90-Day Covenant</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
