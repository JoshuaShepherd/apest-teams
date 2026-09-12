'use client';

import React, { useState } from 'react';
import { Sparkles, AlertTriangle, ShieldAlert, RotateCw, Eye } from 'lucide-react';

interface ShadowCardData {
  key: string;
  name: string;
  personName?: string;
  color: string;
  isActiveConcern: boolean;
  activeReason?: string;
  gift: string;
  shadow: string;
  forYourTeam: string;
}

const SHADOW_CARDS: ShadowCardData[] = [
  {
    key: 'S',
    name: 'Shepherd',
    personName: 'James Okafor (Primary) & Priya Nair (Secondary)',
    color: '#2D6A4F',
    isActiveConcern: true,
    activeReason: 'High Structural Weight & Absorption Risk',
    gift: 'The shepherd creates safety, holds the community together, knows names and stories, humanizes the system.',
    shadow:
      'Conflict-avoidance dressed as pastoral wisdom. The shepherd contextualizes tension until it loses its urgency. “I hear what you’re saying, and I think we need to hold that with care” — and the conversation moves on without resolution. The shepherd’s shadow is not a virtue. It is the function most in need of the prophetic corrective.',
    forYourTeam:
      'James is the anchor. The team would fall apart without him. He is also the gravitational center that keeps the team in equilibrium — which is not always the same as health. The apostolic and prophetic voices need to land before James absorbs them.',
  },
  {
    key: 'A',
    name: 'Apostle',
    personName: 'Marcus Webb (Primary)',
    color: '#9A5B2D',
    isActiveConcern: true,
    activeReason: 'Pioneering Momentum Overreach',
    gift: 'The apostle sees new ground, builds frameworks, creates the environment for every other function to operate.',
    shadow:
      'Vision without humanization. Organizational overreach. Wounded people left behind in the wake of the pioneer’s momentum. The apostle who does not receive the shepherd’s corrective will eventually pioneer alone.',
    forYourTeam:
      'Marcus’s AT profile generates extraordinary vision and leaves people behind in the process. The apostolic drive toward extension needs James’s humanizing influence — and Marcus probably knows it. The question is whether the team structure creates space for that corrective to actually operate.',
  },
  {
    key: 'P',
    name: 'Prophet',
    personName: 'Priya Nair (Primary)',
    color: '#3E5C76',
    isActiveConcern: true,
    activeReason: 'Silent Waiting & Holy Frustration',
    gift: 'The prophet names what no one else will say, holds the community to faithfulness, discerns the gap between stated identity and actual practice.',
    shadow:
      'Holy frustration that closes rather than opens conversations. The prophetic demand for justice and holiness can curdle into legalism and judgment, especially when the prophetic voice is unheard. Without the evangelist’s grace-note, the prophet’s challenge becomes a demand with no good news attached.',
    forYourTeam:
      'Priya is waiting. She has learned to wait. The question the dashboard raises is: Is waiting working? The team needs her prophetic voice at the center, not in the last ten minutes.',
  },
  {
    key: 'E',
    name: 'Evangelist',
    personName: '(Unowned Primary Gap · Latent in Priya)',
    color: '#D97706',
    isActiveConcern: false,
    gift: 'Carries the grace-note, joyful gospel invitation, recruitment impulse, and outside accessibility.',
    shadow:
      'Superficial recruitment, utilitarian pragmatism, and reducing discipleship to initial decisions without long-term formation.',
    forYourTeam:
      'Because primary Evangelist is absent, your team does not suffer this shadow — but suffers the opposite loss: gospel conversations stay locked in internal church buildings and study rooms.',
  },
  {
    key: 'T',
    name: 'Teacher',
    personName: 'Marcus Webb (Secondary) & James Okafor (Secondary)',
    color: '#5C5F66',
    isActiveConcern: false,
    gift: 'The teacher brings systematic clarity, doctrinal depth, hermeneutical care, and long-term wisdom.',
    shadow:
      'Intellectualism, dogmatic rigidity, reduction of the gospel to cognitive assent, and fear of experimental action until all concepts are perfected.',
    forYourTeam:
      'With both Marcus and James carrying secondary Teacher, leadership conversations naturally tilt toward conceptual discussion and curriculum rather than outward experimentation.',
  },
];

export function Panel5ShadowReport({ onNext }: { onNext?: () => void }) {
  // Flip state for cards
  const [flipped, setFlipped] = useState<Record<string, boolean>>({
    S: true, // Default to shadow side on concerns for immediate self-knowledge!
    A: true,
    P: true,
  });

  const toggleFlip = (key: string) => {
    setFlipped((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section
      id="panel-5"
      className="p-6 sm:p-8 rounded-panel bg-card border border-border-rule shadow-card space-y-8 transition-all"
    >
      {/* Panel Header */}
      <div className="space-y-3 border-b border-border-rule/60 pb-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-surface-subtle border border-border-soft text-[11px] font-mono text-muted-foreground">
          <span>Panel 5 of 11</span>
          <span>•</span>
          <span className="text-primary font-bold">The Shadow Report</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight">
          The Shadow Report · What Happens When Strength Becomes Distortion
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground font-serif leading-relaxed max-w-4xl">
          Every APEST function carries a shadow — the characteristic distortion of its strength. This is not a character flaw. It is structural. The apostle’s shadow is the apostle’s gift pushed past its corrective. The shepherd’s shadow is the shepherd’s gift operating without the prophet’s challenge. The shadow report is not an accusation. It is a map of where your team needs deliberate corrective attention.
        </p>
      </div>

      {/* Five Flip Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-heading font-bold uppercase tracking-wider text-[11px]">
            Fivefold Shadow Inventory (Click any card to flip between Gift & Shadow)
          </span>
          <span className="font-mono text-[11px]">
            3 Active Concerns Identified for Restoration Road
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SHADOW_CARDS.map((card) => {
            const isFlippedToShadow = flipped[card.key] ?? false;

            return (
              <div
                key={card.key}
                onClick={() => toggleFlip(card.key)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 shadow-sm hover:shadow-tile ${
                  card.isActiveConcern
                    ? 'border-border-soft bg-surface-warm/80'
                    : 'border-border-rule bg-surface-subtle/50'
                }`}
              >
                {/* Card Top */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-sm text-white shadow-xs"
                      style={{ backgroundColor: card.color }}
                    >
                      {card.key}
                    </span>
                    <div>
                      <h3 className="font-heading font-bold text-base text-foreground">
                        {card.name}
                      </h3>
                      <p className="text-[10px] text-muted-foreground font-mono">
                        {card.personName}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFlip(card.key);
                    }}
                    className="p-1 rounded-full bg-card border border-border-rule text-muted-foreground hover:text-foreground transition-colors"
                    title="Flip card"
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Active Concern Flag */}
                {card.isActiveConcern && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-600/30 text-[11px] font-mono font-bold text-amber-800 dark:text-amber-300 w-fit">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Active Concern: {card.activeReason}</span>
                  </div>
                )}

                {/* Card Body (Toggle between Gift and Shadow) */}
                <div className="flex-1 space-y-3">
                  {!isFlippedToShadow ? (
                    /* Front: The Gift */
                    <div className="space-y-2">
                      <div className="text-[11px] uppercase tracking-wider font-mono font-bold text-emerald-800 dark:text-emerald-400 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3" />
                        <span>Front: The Gift (Healthy Expression)</span>
                      </div>
                      <p className="text-xs sm:text-sm text-foreground/85 font-serif leading-relaxed">
                        {card.gift}
                      </p>
                    </div>
                  ) : (
                    /* Back: The Shadow */
                    <div className="space-y-2">
                      <div className="text-[11px] uppercase tracking-wider font-mono font-bold text-amber-800 dark:text-amber-400 flex items-center gap-1.5">
                        <AlertTriangle className="w-3 h-3" />
                        <span>Back: The Shadow (Distortion Under Pressure)</span>
                      </div>
                      <p className="text-xs sm:text-sm text-foreground/90 font-serif leading-relaxed">
                        {card.shadow}
                      </p>
                    </div>
                  )}
                </div>

                {/* For Your Team specific note */}
                <div className="pt-3 border-t border-border-rule/60 text-xs font-body text-muted-foreground leading-relaxed bg-surface-subtle/70 p-3 rounded-lg">
                  <strong className="font-heading font-bold text-foreground block mb-0.5">
                    For Your Team:
                  </strong>
                  {card.forYourTeam}
                </div>

                {/* Bottom flip prompt */}
                <div className="text-[10px] font-mono text-right text-muted-foreground/70">
                  {isFlippedToShadow ? 'Click to see Gift view' : 'Click to see Shadow view'} &rarr;
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sequential advance prompt */}
      {onNext && (
        <div className="pt-2 flex justify-end">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-button bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary-hover transition-all shadow-sm"
          >
            <span>Proceed to Panel 6: The Culture Audit</span>
            <span>&rarr;</span>
          </button>
        </div>
      )}
    </section>
  );
}
