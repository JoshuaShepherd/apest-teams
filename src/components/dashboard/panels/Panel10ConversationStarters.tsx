'use client';

import React, { useState } from 'react';
import { MessageSquare, Lock, Unlock, Sparkles, Volume2 } from 'lucide-react';

interface PromptCard {
  id: number;
  roleKey: 'A' | 'P' | 'E' | 'S' | 'T';
  functionName: string;
  color: string;
  targetAudience: string;
  question: string;
  subtext: string;
  isPastorExclusive?: boolean;
}

const CARDS: PromptCard[] = [
  {
    id: 1,
    roleKey: 'A',
    functionName: 'Apostle',
    color: '#9A5B2D',
    targetAudience: 'For the whole team',
    question:
      '“If we were planting this church today, from scratch, in this neighborhood — what would we do differently? And what does that tell us about what we’re afraid to change?”',
    subtext: 'Surfaces the pioneer horizon vs. institutional fear of disruption.',
  },
  {
    id: 2,
    roleKey: 'P',
    functionName: 'Prophet',
    color: '#3E5C76',
    targetAudience: 'For the whole team',
    question:
      '“What is the gap between what we say we are and what we actually are? Name it plainly. No caveats.”',
    subtext: 'Cuts through polite corporate consensus into covenant honesty.',
  },
  {
    id: 3,
    roleKey: 'E',
    functionName: 'Evangelist',
    color: '#D97706',
    targetAudience: 'For the whole team',
    question:
      '“When did someone on this team last lead a person to Jesus in a direct, personal conversation? What does our answer tell us about the accessibility of the gospel in our culture?”',
    subtext: 'Tests whether evangelism is an active reality or merely an ideological concept.',
  },
  {
    id: 4,
    roleKey: 'S',
    functionName: 'Shepherd',
    color: '#2D6A4F',
    targetAudience: 'For the whole team',
    question:
      '“Who in this room is being left behind by our current pace and direction? Who are we not caring for well? And is our answer to that question making us more cautious than we should be?”',
    subtext: 'Humanizes the cost while discerning if safety has become an excuse for paralysis.',
  },
  {
    id: 5,
    roleKey: 'T',
    functionName: 'Teacher',
    color: '#5C5F66',
    targetAudience: 'For the whole team',
    question:
      '“What does our theology actually say about the people in the Stapleton neighborhood who have never heard the gospel? Do our structures reflect that theology — or contradict it?”',
    subtext: 'Bridges deep doctrinal belief with practical ecclesial reality.',
  },
  {
    id: 6,
    roleKey: 'A',
    functionName: 'Apostle',
    color: '#9A5B2D',
    targetAudience: 'For Marcus specifically (Lead Pastor)',
    question:
      '“The apostolic leader who cannot name the gap is not leading apostolically — he is managing apostolically. What is the thing you have known for three years that you have not yet said out loud to this team? Say it now.”',
    subtext: 'The apostolic catalytic breakthrough question for Marcus Webb.',
    isPastorExclusive: true,
  },
];

export function Panel10ConversationStarters({
  onNext,
  onOpenMarcusNote,
}: {
  onNext?: () => void;
  onOpenMarcusNote?: () => void;
}) {
  const [isPastorUnlocked, setIsPastorUnlocked] = useState(true);

  return (
    <section
      id="panel-10"
      className="p-6 sm:p-8 rounded-panel bg-card border border-border-rule shadow-card space-y-8 transition-all"
    >
      {/* Panel Header */}
      <div className="space-y-3 border-b border-border-rule/60 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-surface-subtle border border-border-soft text-[11px] font-mono text-muted-foreground">
              <span>Panel 10 of 11</span>
              <span>•</span>
              <span className="text-primary font-bold">The Conversation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight mt-1">
              The Conversation · Six Questions That Open the Room
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPastorUnlocked((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-button text-xs font-mono font-medium border border-border-rule bg-surface-subtle hover:bg-surface-warm transition-colors"
            >
              {isPastorUnlocked ? (
                <>
                  <Unlock className="w-3.5 h-3.5 text-primary" />
                  <span>Lead Pastor View (Unlocked)</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                  <span>Unlock Card 6</span>
                </>
              )}
            </button>

            {onOpenMarcusNote && (
              <button
                onClick={onOpenMarcusNote}
                className="px-3 py-1.5 rounded-button text-xs font-heading font-bold bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                Letter to Marcus
              </button>
            )}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground font-serif leading-relaxed max-w-4xl">
          The dashboard is a mirror. But a mirror only works if you look into it together. These questions are not designed to produce consensus — they are designed to produce honesty. Use them in order. Don’t rush the silence after each one. The silence is where the real data lives.
        </p>
      </div>

      {/* Six Prompt Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CARDS.map((card) => {
          const isLocked = card.isPastorExclusive && !isPastorUnlocked;

          return (
            <div
              key={card.id}
              className={`p-6 rounded-2xl border transition-all flex flex-col justify-between space-y-4 shadow-sm ${
                card.isPastorExclusive
                  ? 'bg-primary/5 border-primary/40 ring-1 ring-primary/20'
                  : 'bg-surface-subtle/50 border-border-rule hover:border-border-soft'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center font-heading font-bold text-xs text-white shadow-xs"
                      style={{ backgroundColor: card.color }}
                    >
                      {card.roleKey}
                    </span>
                    <span className="font-heading font-bold text-xs uppercase tracking-wider text-muted-foreground">
                      Card {card.id} · {card.functionName}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-surface-subtle border border-border-rule text-muted-foreground">
                    {card.targetAudience}
                  </span>
                </div>

                {isLocked ? (
                  <div className="p-6 rounded-xl bg-card border border-dashed border-border-rule flex flex-col items-center justify-center text-center space-y-2 py-8">
                    <Lock className="w-6 h-6 text-muted-foreground" />
                    <div className="font-heading font-bold text-sm text-foreground">
                      Lead Pastor Reflection
                    </div>
                    <p className="text-xs text-muted-foreground font-body max-w-xs">
                      Reserved for Marcus Webb’s pastoral reflection or unlocked by the facilitator.
                    </p>
                    <button
                      onClick={() => setIsPastorUnlocked(true)}
                      className="mt-2 text-xs text-primary font-semibold underline"
                    >
                      Unlock Prompt
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-sm sm:text-base font-serif italic text-foreground font-medium leading-relaxed">
                      {card.question}
                    </p>
                    <p className="text-[11px] text-muted-foreground font-body">
                      {card.subtext}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-border-rule/50 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                <span>Rule: Allow 90 seconds of silence</span>
                <span className="italic">No immediate replies</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sequential advance prompt */}
      {onNext && (
        <div className="pt-2 flex justify-end">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-button bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary-hover transition-all shadow-sm"
          >
            <span>Proceed to Final Panel: The Fullness Vision</span>
            <span>&rarr;</span>
          </button>
        </div>
      )}
    </section>
  );
}
