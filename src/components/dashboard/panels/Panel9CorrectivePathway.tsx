'use client';

import React from 'react';
import { CalendarClock, CheckCircle2, UserCheck, Flame, Heart, Compass, Sparkles } from 'lucide-react';
import { AmbiguityNote } from '../AmbiguityNote';

export function Panel9CorrectivePathway({ onNext }: { onNext?: () => void }) {
  return (
    <section
      id="panel-9"
      className="p-6 sm:p-8 rounded-panel bg-card border border-border-rule shadow-card space-y-8 transition-all"
    >
      {/* Panel Header */}
      <div className="space-y-3 border-b border-border-rule/60 pb-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-surface-subtle border border-border-soft text-[11px] font-mono text-muted-foreground">
          <span>Panel 9 of 11</span>
          <span>•</span>
          <span className="text-primary font-bold">The Corrective Pathway</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight">
          The Corrective Pathway · What Happens Now?
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground font-serif leading-relaxed max-w-4xl">
          Diagnosis without direction is just discouragement with better vocabulary. The corrective pathway is not a program — it is a set of deliberate, sequenced decisions that move the team from where it is to where it is designed to be. The APEST functions cannot be installed from the outside. They are already present, constitutionally given by Christ in his ascension. The work is not addition. It is activation.
        </p>
      </div>

      {/* 3 Horizontal Time Horizons */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Column 1: Immediate (Next 30 Days) */}
        <div className="p-6 rounded-2xl bg-surface-warm/70 border border-border-soft flex flex-col justify-between space-y-5 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-primary">
                Horizon 1
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-surface-subtle border border-border-rule text-foreground">
                First 30 Days
              </span>
            </div>

            <h3 className="text-xl font-heading font-bold text-foreground">
              Name the Gap Publicly
            </h3>

            <p className="text-xs sm:text-sm text-foreground/85 font-serif leading-relaxed">
              The most important first move is not structural — it is conversational. Marcus needs to bring this data into the room and say what he has suspected for three years:
            </p>

            <blockquote className="p-3.5 rounded-xl bg-card border border-border-rule text-xs italic font-serif text-foreground leading-relaxed">
              &ldquo;Our culture is ST-dominant. Our apostolic and prophetic voices are present but suppressed. This is not an accusation — it is a diagnosis. And it is one we can address.&rdquo;
            </blockquote>

            <div className="p-3.5 rounded-xl bg-card border border-border-rule space-y-1.5 text-xs">
              <span className="font-heading font-bold uppercase tracking-wider text-[10px] text-primary block">
                Specific Team Action:
              </span>
              <p className="text-muted-foreground font-body leading-relaxed">
                Schedule a half-day team retreat with the sole agenda of reading this dashboard together. <strong>No action items at the end.</strong> Just honest conversation about what the data reveals.
              </p>
            </div>

            {/* Individual leader imperatives */}
            <div className="space-y-2 pt-2 text-xs">
              <div className="p-2.5 rounded-lg bg-surface-subtle space-y-1">
                <span className="font-heading font-bold text-foreground block">
                  For Marcus specifically:
                </span>
                <p className="text-muted-foreground font-serif leading-relaxed">
                  The apostolic leader who names the gap is doing apostolic work. This is not a board presentation. It is a pioneer’s act of courage.
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-surface-subtle space-y-1">
                <span className="font-heading font-bold text-foreground block">
                  For James specifically:
                </span>
                <p className="text-muted-foreground font-serif leading-relaxed">
                  The shepherd’s role in this conversation is not to cushion the diagnosis before it lands. It is to hold the team in safety while the diagnosis lands. James knows the difference; he needs to choose it.
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-surface-subtle space-y-1">
                <span className="font-heading font-bold text-foreground block">
                  For Priya specifically:
                </span>
                <p className="text-muted-foreground font-serif leading-relaxed">
                  The prophet who has been waiting in the last ten minutes has been given permission to move to the center. This is the moment. The data is the invitation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Near-Term (Next 90 Days) */}
        <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-600/30 flex flex-col justify-between space-y-5 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-amber-800 dark:text-amber-300">
                Horizon 2
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-500/20 text-amber-900 dark:text-amber-200 border border-amber-600/40">
                Next 90 Days
              </span>
            </div>

            <h3 className="text-xl font-heading font-bold text-foreground">
              Address the Evangelist Gap Structurally
            </h3>

            <p className="text-xs sm:text-sm text-foreground/85 font-serif leading-relaxed">
              The absence of a primary Evangelist voice in the leadership room is the most urgent structural gap. Three options, in order of preference:
            </p>

            <div className="space-y-3 text-xs">
              {/* Option A */}
              <div className="p-3.5 rounded-xl bg-card border border-amber-600/30 space-y-1">
                <div className="font-heading font-bold text-amber-900 dark:text-amber-200 text-xs">
                  Option A — Hire or appoint an Evangelist (Recommended)
                </div>
                <p className="text-muted-foreground font-serif leading-relaxed">
                  Not an outreach coordinator. Not a programs director. A person whose primary APEST intelligence is E — the grace-note, the accessibility of the gospel, the recruitment impulse. This person changes the room. They pull Marcus’s frameworks out of the study. They soften Priya’s prophetic challenge with good news. They give James someone new to shepherd.
                </p>
              </div>

              {/* Option B */}
              <div className="p-3.5 rounded-xl bg-card border border-border-rule space-y-1">
                <div className="font-heading font-bold text-foreground text-xs">
                  Option B — Create structured Evangelist access
                </div>
                <p className="text-muted-foreground font-serif leading-relaxed">
                  If hiring is not immediately possible, create deliberate access: (a) an external Evangelist voice brought into quarterly retreats; (b) immersion experiences in evangelistically-weighted communities; (c) formal team study in evangelistic grace.
                </p>
              </div>

              {/* Option C */}
              <div className="p-3.5 rounded-xl bg-card border border-border-rule space-y-1">
                <div className="font-heading font-bold text-foreground text-xs">
                  Option C — Develop the latent E in existing team members
                </div>
                <p className="text-muted-foreground font-serif leading-relaxed">
                  Priya carries E as her third function (P-S-E-T-A). With intentional development — what the corpus calls <em>phase work</em> — her evangelistic intelligence can be drawn forward. Slowest path, but organically integrated.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Long-Term (Next 12 Months) */}
        <div className="p-6 rounded-2xl bg-surface-subtle border border-border-rule flex flex-col justify-between space-y-5 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-foreground">
                Horizon 3
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-surface-warm border border-border-rule text-foreground">
                Next 12 Months
              </span>
            </div>

            <h3 className="text-xl font-heading font-bold text-foreground">
              Redesign the Hero System
            </h3>

            <p className="text-xs sm:text-sm text-foreground/85 font-serif leading-relaxed">
              The culture is the real policy. The culture is revealed by what gets celebrated. For the next twelve months, Restoration Road needs to deliberately redesign which stories get told from the front, which leaders get publicly recognized, and which behaviors get resourced.
            </p>

            <div className="space-y-2.5 text-xs">
              <div className="text-[11px] font-heading font-bold uppercase tracking-wider text-muted-foreground">
                Concrete Markers of Success:
              </div>

              <div className="p-2.5 rounded-lg bg-card border border-border-rule flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/85 font-serif">
                  An <strong>apostolic story</strong> (new ground, new network, new structure for mission) is told from the front at least once per month.
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-card border border-border-rule flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-clay shrink-0 mt-0.5" />
                <span className="text-foreground/85 font-serif">
                  A <strong>prophetic voice</strong> (naming the gap between stated identity and actual practice) is welcomed in staff meetings without being immediately cushioned.
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-card border border-border-rule flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-foreground/85 font-serif">
                  An <strong>evangelistic conversion story</strong> — person-to-person gospel encounter — is celebrated as prominently as pastoral care.
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-card border border-border-rule flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-foreground/85 font-serif">
                  The <strong>food pantry</strong> is restructured from a service program into a relational mission outpost with ongoing discipleship.
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-warm/80 border border-border-soft text-xs font-serif text-foreground/90 font-medium">
              <strong>The Twelve-Month Question:</strong> Is the culture selecting for all five, or still defaulting to two?
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
            <span>Proceed to Panel 10: The Conversation Starters</span>
            <span>&rarr;</span>
          </button>
        </div>
      )}
    </section>
  );
}
