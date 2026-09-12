'use client';

import React from 'react';
import { Milestone, ArrowUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { AmbiguityNote } from '../AmbiguityNote';

const MATURITY_LEVELS = [
  {
    level: 5,
    name: 'Multiplying',
    question: 'Are all five recreating themselves?',
    description:
      'Conscious competence. Leaders are self-aware about how they have grown in their fivefold calling and are intentionally training others to pass on wisdom and experience. Each APEST function is apprenticing the next generation of its own type. This is movement.',
    isTarget: true,
  },
  {
    level: 4,
    name: 'Fruitful',
    question: 'Are all five accessing synergy and multiplying strengths?',
    description:
      'The fivefold is not just functional — it is generative. The whole is producing more than the sum of its parts. Leaders are investing in functions beyond their own. The culture is training the next generation of all five types.',
    isTarget: true,
  },
  {
    level: 3,
    name: 'Balanced',
    question: 'Are all five working together?',
    description:
      'The self-correcting system is operational. The apostle is receiving the shepherd’s humanizing influence. The prophet is receiving the evangelist’s grace-note. The teacher is being pulled out of the study by the apostolic drive toward new ground. The system is working as designed — not perfectly, but genuinely.',
    isTarget: true,
  },
  {
    level: 2,
    name: 'Holistic',
    question: 'Are all five present?',
    description:
      'The team has moved from understanding to intentional inclusion. The apostolic and prophetic are not just tolerated — they are actively sought and celebrated alongside the shepherding and teaching that the culture naturally produces. Gaps are named. Absences are addressed.',
    isThreshold: true,
  },
  {
    level: 1,
    name: 'Grounded',
    question: 'Are all five understood?',
    description:
      'The foundation. Every team member can name the five functions, distinguish them from each other, and identify them in Scripture and in your community’s history. You are not yet practicing what you understand — but you can name it. Most teams begin here. It is necessary. It is not sufficient.',
    isCurrentBase: true,
  },
];

export function Panel7MaturityArc({ onNext }: { onNext?: () => void }) {
  return (
    <section
      id="panel-7"
      className="p-6 sm:p-8 rounded-panel bg-card border border-border-rule shadow-card space-y-8 transition-all"
    >
      {/* Panel Header */}
      <div className="space-y-3 border-b border-border-rule/60 pb-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-surface-subtle border border-border-soft text-[11px] font-mono text-muted-foreground">
          <span>Panel 7 of 11</span>
          <span>•</span>
          <span className="text-primary font-bold">The Maturity Arc</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight">
          The Maturity Arc · Where Is Your Team on the Road?
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground font-serif leading-relaxed max-w-4xl">
          Organizational health is not a destination — it is a direction. These five levels are not a program to complete; they are diagnostic markers of depth of integration. Most teams, without intentional development, stall at Level 2. The question is not whether you are at Level 5. The question is whether you are moving.
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative pl-6 sm:pl-10 space-y-8 border-l-2 border-border-rule">
        {MATURITY_LEVELS.map((item) => {
          const isBetween1and2 = item.level === 1;

          return (
            <div key={item.level} className="relative space-y-3">
              {/* Threshold indicator marker between Level 1 and 2 */}
              {item.level === 2 && (
                <div className="absolute -left-[37px] sm:-left-[53px] -bottom-4 z-20 flex items-center">
                  <div className="relative flex items-center justify-center">
                    <span className="w-5 h-5 rounded-full bg-primary ring-4 ring-primary/20 shadow-md animate-pulse" />
                  </div>
                </div>
              )}

              {/* Marker dot on the timeline line */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-colors ${
                  item.level <= 2
                    ? 'bg-card border-primary'
                    : 'bg-surface-subtle border-border-rule'
                }`}
              />

              {/* Level Card */}
              <div
                className={`p-5 rounded-xl border transition-all ${
                  item.level <= 2
                    ? 'bg-surface-warm/80 border-border-soft shadow-sm'
                    : 'bg-surface-subtle/40 border-border-rule opacity-75'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-surface-subtle border border-border-rule text-foreground">
                      Level {item.level}
                    </span>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-foreground">
                      {item.name}
                    </h3>
                  </div>
                  <span className="text-xs font-serif italic text-muted-foreground">
                    &ldquo;{item.question}&rdquo;
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-foreground/80 font-body leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>

              {/* Placement Callout between Level 1 and Level 2 */}
              {item.level === 2 && (
                <div className="my-4 p-5 rounded-xl bg-primary/10 border border-primary/30 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-heading font-bold text-sm text-primary">
                    <Sparkles className="w-4 h-4" />
                    <span>Restoration Road Assessed Placement: Threshold (Level 1.5)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/90 font-serif leading-relaxed">
                    <strong>Where you are:</strong> Your team understands the framework — Marcus has read the books, and the language is present. But the gap between understanding and intentional inclusion is still live. The apostolic and prophetic functions are present in the room but are not yet structurally celebrated or activated. You are at the threshold between <strong>Grounded</strong> and <strong>Holistic</strong>. The good news: this is the most common place for a team of your profile to be. And it is the most actionable gap to close.
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Upward Growth Vector Indicator */}
      <div className="flex items-center gap-3 p-4 rounded-xl bg-surface-subtle border border-border-rule text-xs font-mono text-muted-foreground">
        <ArrowUp className="w-4 h-4 text-primary shrink-0" />
        <span>Growth Vector: Moving from Grounded (Understanding) &rarr; Holistic (Activation) &rarr; Balanced (Self-Correcting System)</span>
      </div>

      {/* Ambiguity Note (Appendix requirement) */}
      <AmbiguityNote customNote="The data here is genuinely ambiguous. We have named the range (Threshold Level 1–2) rather than forcing a single integer reading. Your team’s conversation is the instrument that resolves this — not the algorithm." />

      {/* Sequential advance prompt */}
      {onNext && (
        <div className="pt-2 flex justify-end">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-button bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary-hover transition-all shadow-sm"
          >
            <span>Proceed to Panel 8: The Movement-to-Institution Lifecycle</span>
            <span>&rarr;</span>
          </button>
        </div>
      )}
    </section>
  );
}
