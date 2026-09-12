'use client';

import React from 'react';
import { ArrowRight, RefreshCw, AlertTriangle, GitMerge, CheckCircle } from 'lucide-react';
import { EmptyChairIcon } from '../SuppressionBadge';

const CASCADE_STEPS = [
  {
    from: 'A',
    to: 'P',
    fromName: 'Apostle',
    toName: 'Prophet',
    fromColor: '#9A5B2D',
    toColor: '#3E5C76',
    label: 'The apostolic establishes the covenant community in which the prophetic can speak.',
    isStrained: false,
  },
  {
    from: 'P',
    to: 'E',
    fromName: 'Prophet',
    toName: 'Evangelist',
    fromColor: '#3E5C76',
    toColor: '#D97706',
    label: 'The prophetic creates the context of faithfulness in which the gospel invitation makes sense.',
    isStrained: true, // Under strain for Restoration Road!
  },
  {
    from: 'E',
    to: 'S',
    fromName: 'Evangelist',
    toName: 'Shepherd',
    fromColor: '#D97706',
    toColor: '#2D6A4F',
    label: 'The evangelist brings people to Jesus, creating the community the shepherd tends.',
    isStrained: false,
  },
  {
    from: 'S',
    to: 'T',
    fromName: 'Shepherd',
    toName: 'Teacher',
    fromColor: '#2D6A4F',
    toColor: '#5C5F66',
    label: 'The shepherd’s community becomes the teacher’s formation environment.',
    isStrained: false,
  },
  {
    from: 'T',
    to: 'A',
    fromName: 'Teacher',
    toName: 'Apostle',
    fromColor: '#5C5F66',
    toColor: '#9A5B2D',
    label: 'The teacher’s depth renews and grounds the apostolic vision.',
    isStrained: false,
  },
];

export function Panel4Cascade({ onNext }: { onNext?: () => void }) {
  return (
    <section
      id="panel-4"
      className="p-6 sm:p-8 rounded-panel bg-card border border-border-rule shadow-card space-y-8 transition-all"
    >
      {/* Panel Header */}
      <div className="space-y-3 border-b border-border-rule/60 pb-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-surface-subtle border border-border-soft text-[11px] font-mono text-muted-foreground">
          <span>Panel 4 of 11</span>
          <span>•</span>
          <span className="text-primary font-bold">The Cascade</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight">
          The Cascade · How Your Functions Build on Each Other
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground font-serif leading-relaxed max-w-4xl">
          The five functions are not five independent channels. They are a cascade — each creating the environment for the next. Remove any link and the chain weakens. The cascade is also a loop: the teacher’s depth renews the apostolic vision that started the whole sequence. Your team’s shape tells you not just what’s missing, but where the chain is under strain.
        </p>
      </div>

      {/* Horizontal Cascade Flow Sequence */}
      <div className="space-y-6">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-heading font-bold uppercase tracking-wider text-[11px]">
            The Fivefold Sequential Flow (A &rarr; P &rarr; E &rarr; S &rarr; T &rarr; A)
          </span>
          <span className="inline-flex items-center gap-1 font-mono text-[11px]">
            <RefreshCw className="w-3 h-3 text-primary animate-spin-slow" /> Generative Loop
          </span>
        </div>

        {/* Cascade Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 lg:gap-4">
          {CASCADE_STEPS.map((step, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border transition-all flex flex-col justify-between space-y-3 ${
                step.isStrained
                  ? 'bg-amber-500/10 border-amber-600/50 shadow-sm ring-1 ring-amber-500/30'
                  : 'bg-surface-subtle border-border-rule hover:border-border-soft'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-heading font-bold text-white shadow-xs"
                    style={{ backgroundColor: step.fromColor }}
                  >
                    {step.from}
                  </span>
                  <span className="text-xs text-muted-foreground">&rarr;</span>
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-heading font-bold text-white shadow-xs"
                    style={{ backgroundColor: step.toColor }}
                  >
                    {step.to}
                  </span>
                </div>

                {step.isStrained ? (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-600/40">
                    Chain Strained
                  </span>
                ) : (
                  <span className="text-[10px] font-mono text-muted-foreground">
                    Step {idx + 1}
                  </span>
                )}
              </div>

              <p className="text-xs font-serif leading-relaxed text-foreground/80">
                &ldquo;{step.label}&rdquo;
              </p>

              <div className="pt-2 border-t border-border-rule/50 text-[10px] font-mono text-muted-foreground">
                {step.fromName} &rarr; {step.toName}
              </div>
            </div>
          ))}
        </div>

        {/* P -> E Highlight Callout */}
        <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-600/40 flex items-start gap-3.5 shadow-sm">
          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-800 dark:text-amber-300 shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="space-y-1.5 text-xs sm:text-sm">
            <div className="font-heading font-bold text-base text-amber-900 dark:text-amber-200">
              This is where your chain is under strain (P &rarr; E)
            </div>
            <p className="text-amber-950/85 dark:text-amber-200/95 font-serif leading-relaxed">
              Priya’s prophetic voice is strong — and without an evangelist to receive and soften it with grace, the prophetic challenge can land as demand rather than invitation. The good news is permanently good before it is permanently demanding.
            </p>
          </div>
        </div>
      </div>

      {/* Corrective Relationships Cross-Links */}
      <div className="p-6 rounded-2xl bg-surface-warm/60 border border-border-rule space-y-6">
        <div className="border-b border-border-rule/60 pb-3">
          <div className="flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-wider text-foreground">
            <GitMerge className="w-4 h-4 text-clay" />
            <span>Corrective Cross-Links: Non-Adjacent Self-Correction</span>
          </div>
          <p className="text-xs text-muted-foreground font-body mt-1">
            The cross-links between non-adjacent types that keep the system self-correcting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pair 1: Marcus & James */}
          <div className="p-5 rounded-xl bg-card border border-border-rule shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-sm text-foreground">
                  A &harr; S (Marcus &harr; James)
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-primary/10 text-primary border border-primary/20 font-bold">
                Most Critical Active Pair
              </span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/80 font-serif leading-relaxed">
              The apostle’s pioneer drive needs the shepherd’s humanizing influence. James is the person who makes Marcus’s vision livable for actual human beings. This relationship is your team’s most important corrective pair — and it needs to be deliberately cultivated, not assumed.
            </p>
            <div className="p-3 rounded-lg bg-surface-subtle text-[11px] font-mono text-muted-foreground">
              Anchor: Bi-weekly humanization dialogues before initiatives are cast to staff.
            </div>
          </div>

          {/* Pair 2: Priya & Gap */}
          <div className="p-5 rounded-xl bg-card border border-border-rule shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-sm text-amber-900 dark:text-amber-200">
                  P &harr; E (Priya &harr; [Gap])
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-600/30 font-bold">
                Structural Vulnerability
              </span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/80 font-serif leading-relaxed">
              The prophet’s demand for faithfulness needs the evangelist’s grace-note. Without that corrective, Priya’s prophetic voice — already functioning well — risks tipping toward the shadow of legalism and judgment. This is not a criticism of Priya; it is a structural observation about what the system needs.
            </p>
            <div className="p-3 rounded-lg bg-surface-subtle text-[11px] font-mono text-muted-foreground flex items-center gap-2">
              <EmptyChairIcon className="w-3.5 h-3.5 text-amber-600" />
              <span>Prescription: Structurally appoint or recruit primary Evangelist voice.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sequential advance prompt */}
      {onNext && (
        <div className="pt-2 flex justify-end">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-button bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary-hover transition-all shadow-sm"
          >
            <span>Proceed to Panel 5: The Shadow Report</span>
            <span>&rarr;</span>
          </button>
        </div>
      )}
    </section>
  );
}
