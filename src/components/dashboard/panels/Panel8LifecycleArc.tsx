'use client';

import React from 'react';
import { TrendingUp, AlertCircle, Compass, RotateCcw } from 'lucide-react';

export function Panel8LifecycleArc({ onNext }: { onNext?: () => void }) {
  return (
    <section
      id="panel-8"
      className="p-6 sm:p-8 rounded-panel bg-card border border-border-rule shadow-card space-y-8 transition-all"
    >
      {/* Panel Header */}
      <div className="space-y-3 border-b border-border-rule/60 pb-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-surface-subtle border border-border-soft text-[11px] font-mono text-muted-foreground">
          <span>Panel 8 of 11</span>
          <span>•</span>
          <span className="text-primary font-bold">The Lifecycle Arc</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight">
          The Lifecycle Arc · Where Is Your Church in the Historical Pattern?
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground font-serif leading-relaxed max-w-4xl">
          The history of almost every Christian movement follows a predictable arc: from apostolic and prophetic birth, through evangelistic growth, through shepherding consolidation, into teaching-dominated institution. This is not inevitable — but it is the default. The APEST Teams dashboard exists precisely to make the arc visible before the descent becomes irreversible.
        </p>
      </div>

      {/* Horizontal Curved Arc SVG Diagram */}
      <div className="p-6 sm:p-8 rounded-2xl bg-surface-warm/60 border border-border-rule space-y-6">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-heading font-bold uppercase tracking-wider text-[11px]">
            The Movement-to-Institution Trajectory
          </span>
          <span className="font-mono text-[11px]">
            Restoration Road: Year 9 Post-Planting
          </span>
        </div>

        <div className="w-full overflow-x-auto py-2">
          <div className="min-w-[650px] relative">
            <svg viewBox="0 0 700 240" className="w-full h-auto overflow-visible">
              {/* Defs for gradients and markers */}
              <defs>
                <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9A5B2D" />
                  <stop offset="35%" stopColor="#D97706" />
                  <stop offset="70%" stopColor="#2D6A4F" />
                  <stop offset="100%" stopColor="#5C5F66" />
                </linearGradient>
              </defs>

              {/* Baseline axis */}
              <line x1="40" y1="200" x2="660" y2="200" stroke="currentColor" strokeOpacity="0.12" strokeDasharray="3 3" />

              {/* Lifecycle Bell Arc Curve */}
              {/* Path: Starts at (60, 180) -> rises to (240, 50) -> plateaus to (460, 75) -> descends to (640, 185) */}
              <path
                d="M 60 180 C 140 180, 170 50, 260 50 C 350 50, 420 70, 480 90 C 550 115, 590 180, 640 185"
                fill="none"
                stroke="url(#arcGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Re-Activation Renewal Arrow (Looping back from Institution to Movement) */}
              <path
                d="M 520 105 C 440 220, 240 210, 160 120"
                fill="none"
                stroke="#9A5B2D"
                strokeWidth="2"
                strokeDasharray="4 4"
                strokeOpacity="0.5"
              />
              <text x="340" y="190" textAnchor="middle" className="text-[10px] font-mono fill-primary italic">
                &larr; Apostolic-Prophetic Reactivation Loop &larr;
              </text>

              {/* Stage 1: Birth */}
              <circle cx="80" cy="165" r="5" fill="#9A5B2D" />
              <text x="80" y="140" textAnchor="middle" className="text-xs font-heading font-bold fill-foreground">
                1. Birth
              </text>
              <text x="80" y="152" textAnchor="middle" className="text-[10px] font-mono fill-muted-foreground">
                A + P Pioneer
              </text>

              {/* Stage 2: Growth */}
              <circle cx="260" cy="50" r="5" fill="#D97706" />
              <text x="260" y="28" textAnchor="middle" className="text-xs font-heading font-bold fill-foreground">
                2. Growth
              </text>
              <text x="260" y="40" textAnchor="middle" className="text-[10px] font-mono fill-muted-foreground">
                E + S Multiplies
              </text>

              {/* Stage 3: Consolidation */}
              <circle cx="450" cy="80" r="5" fill="#2D6A4F" />
              <text x="450" y="58" textAnchor="middle" className="text-xs font-heading font-bold fill-foreground">
                3. Consolidation
              </text>
              <text x="450" y="70" textAnchor="middle" className="text-[10px] font-mono fill-muted-foreground">
                T Formational
              </text>

              {/* Stage 4: Institution */}
              <circle cx="630" cy="180" r="5" fill="#5C5F66" />
              <text x="630" y="158" textAnchor="middle" className="text-xs font-heading font-bold fill-foreground">
                4. Institution
              </text>
              <text x="630" y="170" textAnchor="middle" className="text-[10px] font-mono fill-muted-foreground">
                ST Selects, AP Drops
              </text>

              {/* Current Church Marker: between Consolidation and Institution */}
              <g transform="translate(505, 95)">
                {/* Ping circle */}
                <circle cx="0" cy="0" r="8" fill="#9A5B2D" fillOpacity="0.25" className="animate-ping" />
                <circle cx="0" cy="0" r="6" fill="#9A5B2D" stroke="#fff" strokeWidth="2" />
                {/* Pointer Card */}
                <rect x="-80" y="18" width="160" height="42" rx="8" fill="hsl(var(--card))" stroke="#9A5B2D" strokeWidth="1.5" className="shadow-md" />
                <text x="0" y="34" textAnchor="middle" className="text-[11px] font-heading font-bold fill-foreground">
                  Restoration Road (Year 9)
                </text>
                <text x="0" y="48" textAnchor="middle" className="text-[9px] font-mono fill-muted-foreground">
                  Consolidation &rarr; Institution (Plateau)
                </text>
              </g>
            </svg>
          </div>
        </div>

        {/* Four Stages Legend Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-border-rule/60">
          <div className="p-3.5 rounded-xl bg-card border border-border-rule text-xs space-y-1">
            <div className="font-heading font-bold text-foreground flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#9A5B2D' }} />
              <span>Birth (Pioneer Phase)</span>
            </div>
            <p className="text-muted-foreground font-serif leading-relaxed">
              Strong A and P energy. High risk, high movement. Vision is raw, existential, and sent.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-card border border-border-rule text-xs space-y-1">
            <div className="font-heading font-bold text-foreground flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D97706' }} />
              <span>Growth (Expansion)</span>
            </div>
            <p className="text-muted-foreground font-serif leading-relaxed">
              E and S come forward. Evangelistic recruitment. Shepherding consolidation. The movement gains mass.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-card border border-border-rule text-xs space-y-1">
            <div className="font-heading font-bold text-foreground flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2D6A4F' }} />
              <span>Consolidation (Order)</span>
            </div>
            <p className="text-muted-foreground font-serif leading-relaxed">
              T becomes dominant. Teaching and formation are primary. Handing on tradition, but expansion stalls.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-card border border-border-rule text-xs space-y-1">
            <div className="font-heading font-bold text-foreground flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5C5F66' }} />
              <span>Institution (Maintenance)</span>
            </div>
            <p className="text-muted-foreground font-serif leading-relaxed">
              A and P are marginalized. Culture selects for ST. Original vision remembered, not practiced.
            </p>
          </div>
        </div>
      </div>

      {/* Historical Renewal Perspective */}
      <div className="p-5 rounded-xl bg-surface-subtle border border-border-rule/80 text-xs sm:text-sm text-foreground/85 font-serif leading-relaxed space-y-2">
        <p>
          Every Christian movement follows this arc. The question is not whether the arc exists — it does, and Restoration Road is on it. The question is whether your team has the self-awareness and the courage to resist it.
        </p>
        <p>
          The history of renewal in the church — the Celtic peregrini, the early Franciscans, the Moravians, the Methodist class meetings — is the history of communities that recognized where they were on this arc and chose, at cost, to reactivate the apostolic and prophetic energy that had been quietly marginalized. That reactivation is always possible. The APEST functions cannot be removed — only suppressed. And suppression can be reversed.
        </p>
      </div>

      {/* Key Callout: The Plateau Is a Diagnostic, Not a Verdict */}
      <div className="p-6 rounded-2xl bg-surface-warm border border-border-soft space-y-2.5 shadow-sm">
        <div className="flex items-center gap-2 font-heading font-bold text-base text-foreground">
          <Compass className="w-5 h-5 text-clay shrink-0" />
          <span>📍 The Plateau Is a Diagnostic, Not a Verdict</span>
        </div>
        <p className="text-xs sm:text-sm text-foreground/85 font-serif leading-relaxed">
          Three years of attendance plateau (~340 adults). New people coming; old people leaving at the same rate. Staff meetings dominated by programming, pastoral care, and budget. These are not random. They are the signature of a church that has drifted from Growth into Consolidation — and is beginning the slide toward Institution.
        </p>
        <p className="text-xs sm:text-sm text-foreground/90 font-serif leading-relaxed font-semibold">
          The plateau is not a failure. It is information. And information is the beginning of recovery.
        </p>
      </div>

      {/* Sequential advance prompt */}
      {onNext && (
        <div className="pt-2 flex justify-end">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-button bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary-hover transition-all shadow-sm"
          >
            <span>Proceed to Panel 9: The Corrective Pathway</span>
            <span>&rarr;</span>
          </button>
        </div>
      )}
    </section>
  );
}
