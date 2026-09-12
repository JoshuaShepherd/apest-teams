'use client';

import React, { useState } from 'react';
import { Search, Wrench, AlertTriangle, ArrowRight, Sparkles, HeartHandshake, Shield } from 'lucide-react';

interface ProfileData {
  id: string;
  name: string;
  role: string;
  tenure: string;
  badge: string;
  badgeTitle: string;
  badgeColors: { primary: string; secondary: string };
  vocationalDescription: string;
  whatYouSee: string;
  whatYouBuild: string;
  whereYouShadow: string;
  youNeed: string;
  youOffer: string;
  quote: string;
}

const PROFILES: ProfileData[] = [
  {
    id: 'marcus',
    name: 'Marcus Webb',
    role: 'Lead Pastor',
    tenure: '9 Years (Planting Pastor)',
    badge: 'AT',
    badgeTitle: 'The Movement Theologian',
    badgeColors: { primary: '#9A5B2D', secondary: '#5C5F66' },
    vocationalDescription:
      'AT — The Movement Theologian: sees the system, names it, hands it to others in a form they can use.',
    whatYouSee:
      'You are perpetually scanning for new ground — new neighborhoods, new networks, new structures for multiplication. You see systems before others see problems.',
    whatYouBuild:
      'Frameworks. Language. Architecture for others to inhabit. The apostolic drive toward extension expressed through the teacher’s gift of naming and handing on.',
    whereYouShadow:
      'Vision without the shepherd’s humanizing influence can leave people behind. The apostolic drive toward new ground can produce organizational overreach and wounded people. You need James’s correction — and you probably know it.',
    youNeed:
      'S (to humanize the pioneer’s drive) · E (to pull your frameworks out of the study and into the street)',
    youOffer:
      'A (new ground, new horizon) · T (language and architecture for the whole team)',
    quote:
      '“I realized I was expecting our team to run like an apostolic startup when our entire structural incentive system was designed to protect the Sunday auditorium.”',
  },
  {
    id: 'priya',
    name: 'Priya Nair',
    role: 'Director of Community Formation',
    tenure: '3 Years',
    badge: 'PS',
    badgeTitle: 'The Contemplative Healer',
    badgeColors: { primary: '#3E5C76', secondary: '#2D6A4F' },
    vocationalDescription:
      'PS — The Contemplative Healer: anchors the community in covenant fidelity, contemplative stillness, and deep emotional and spiritual restoration.',
    whatYouSee:
      'You see covenant alignment and spiritual authenticity. You perceive when systems look polished on paper but are spiritually dry or leaving people hollow. You feel the distance between what the church claims and how people are actually living.',
    whatYouBuild:
      'Sacred space. Liturgy of truth. Communities of unhurried honesty and restorative care. You hold the mirror up to leadership decisions and ask whether God is truly honored in our pace.',
    whereYouShadow:
      'Prophetic truth without the evangelist’s good news can curdle into holy frustration, legalism, and quiet withdrawal. When unheeded, you wait in the last ten minutes of the meeting. You need the Evangelist’s grace-note so your challenge invites rather than condemns.',
    youNeed:
      'E (to soften demand with the joyful grace-note) · A (to translate prophetic critique into actionable pioneer momentum)',
    youOffer:
      'P (covenant compass, holy discernment) · S (contemplative presence and deep emotional repair)',
    quote:
      '“For three years I swallowed my concerns because I didn’t want to be labeled difficult. The 5Q lens gave our team language to receive prophetic truth as a grace.”',
  },
  {
    id: 'james',
    name: 'James Okafor',
    role: 'Executive Pastor',
    tenure: '4 Years',
    badge: 'ST',
    badgeTitle: 'The Pastoral Architect',
    badgeColors: { primary: '#2D6A4F', secondary: '#5C5F66' },
    vocationalDescription:
      'ST — The Pastoral Architect: the classic Shepherd-Teacher stabilizer, protecting community well-being, structural order, and relational safety.',
    whatYouSee:
      'You see people first — their wounds, their capacity limits, their emotional health. You see the operational machinery and team rhythms required to keep the family safe, supported, and nurtured.',
    whatYouBuild:
      'Safety, systems of care, steady pastoral rhythms, clear expectations. You build the protective container that prevents team exhaustion and holds the flock in belonging.',
    whereYouShadow:
      'Conflict-avoidance dressed as pastoral wisdom. The shepherd contextualizes tension until it loses its urgency: “I hear what you’re saying, and I think we need to hold that with care” — and the conversation moves on without resolution. You need Marcus’s apostolic push and Priya’s prophetic truth to avoid stagnation.',
    youNeed:
      'A (to break through equilibrium and risk new ground) · P (to call through comfortable harmony into covenant integrity)',
    youOffer:
      'S (humanizing boundaries, pastoral safety) · T (structural clarity and pedagogical order)',
    quote:
      '“I used to think my highest calling was keeping everyone calm and safe. Now I see that living systems need holy disequilibrium to bear fruit.”',
  },
];

export function Panel2Profiles({ onNext }: { onNext?: () => void }) {
  const [activeId, setActiveId] = useState<string>('marcus');

  const activeProfile = PROFILES.find((p) => p.id === activeId) || PROFILES[0];

  return (
    <section
      id="panel-2"
      className="p-6 sm:p-8 rounded-panel bg-card border border-border-rule shadow-card space-y-8 transition-all"
    >
      {/* Panel Header */}
      <div className="space-y-3 border-b border-border-rule/60 pb-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-surface-subtle border border-border-soft text-[11px] font-mono text-muted-foreground">
          <span>Panel 2 of 11</span>
          <span>•</span>
          <span className="text-primary font-bold">Individual Profiles</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight">
          Five Profiles · Each a Facet of Christ
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground font-serif leading-relaxed max-w-4xl">
          These are not personality types. They are vocational callings — expressions of the ministry of Jesus distributed across his body. The apostle carries the pioneering intelligence of Jesus. The prophet carries the discernment and justice-edge of Jesus. The evangelist carries the grace-note and recruitment impulse of Jesus. The shepherd carries the care and presence of Jesus. The teacher carries the wisdom and formation intelligence of Jesus. None of these is the whole. All five are necessary.
        </p>
      </div>

      {/* Team Member Tabs (Person-First: Name & Role lead!) */}
      <div className="flex flex-wrap gap-2 border-b border-border-rule pb-2">
        {PROFILES.map((p) => {
          const isActive = p.id === activeId;
          return (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className={`px-4 sm:px-6 py-3 rounded-t-xl text-left border transition-all flex items-center gap-3 ${
                isActive
                  ? 'bg-surface-warm border-border-soft border-b-transparent text-foreground shadow-sm font-semibold -mb-2 z-10'
                  : 'bg-surface-subtle/60 border-transparent hover:bg-surface-subtle text-muted-foreground hover:text-foreground'
              }`}
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center font-heading font-bold text-xs text-white shadow-xs"
                style={{ backgroundColor: p.badgeColors.primary }}
              >
                {p.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <div className="text-sm font-heading font-bold tracking-tight">
                  {p.name}
                </div>
                <div className="text-[10px] text-muted-foreground font-body">
                  {p.role} · <span className="font-mono font-bold">{p.badge}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Profile Card (3 Vertical Zones) */}
      <div className="rounded-2xl border border-border-rule bg-card p-6 sm:p-8 space-y-8 shadow-sm">
        {/* Zone A — Identity Strip (Person-First) */}
        <div className="p-6 rounded-xl bg-surface-subtle border border-border-rule/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="text-xs uppercase tracking-wider font-mono text-muted-foreground">
              {activeProfile.tenure}
            </div>
            {/* Person's name and role in large type BEFORE the APEST badge appears */}
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              {activeProfile.name}
            </h3>
            <p className="text-sm text-muted-foreground font-body">
              {activeProfile.role}
            </p>
            <div className="pt-2 text-sm sm:text-base font-serif italic text-foreground/90 font-medium">
              {activeProfile.vocationalDescription}
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3 self-start md:self-center">
            {/* Two-letter badge */}
            <div
              className="px-4 py-2 rounded-xl text-white font-heading font-bold text-xl sm:text-2xl shadow-sm border border-white/20 flex items-center gap-1.5"
              style={{ backgroundColor: activeProfile.badgeColors.primary }}
            >
              <span>{activeProfile.badge[0]}</span>
              <span className="text-white/60 text-lg">·</span>
              <span className="text-white/90 text-lg">{activeProfile.badge[1]}</span>
            </div>
          </div>
        </div>

        {/* Zone B — Profile Narrative (What you see, What you build, Where you shadow) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* What you see */}
          <div className="p-5 rounded-xl bg-surface-warm/60 border border-border-rule space-y-3">
            <div className="flex items-center gap-2 font-heading font-bold text-sm text-foreground">
              <Search className="w-4 h-4 text-primary" />
              <span>🔍 What you see</span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-body">
              {activeProfile.whatYouSee}
            </p>
          </div>

          {/* What you build */}
          <div className="p-5 rounded-xl bg-surface-warm/60 border border-border-rule space-y-3">
            <div className="flex items-center gap-2 font-heading font-bold text-sm text-foreground">
              <Wrench className="w-4 h-4 text-clay" />
              <span>🛠 What you build</span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-body">
              {activeProfile.whatYouBuild}
            </p>
          </div>

          {/* Where you shadow */}
          <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-600/30 space-y-3">
            <div className="flex items-center gap-2 font-heading font-bold text-sm text-amber-900 dark:text-amber-200">
              <AlertTriangle className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>⚠️ Where you shadow</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-950/80 dark:text-amber-200/90 leading-relaxed font-body">
              {activeProfile.whereYouShadow}
            </p>
          </div>
        </div>

        {/* Quote banner */}
        <div className="p-4 rounded-xl bg-surface-subtle/70 border-l-4 border-primary italic font-serif text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {activeProfile.quote}
        </div>

        {/* Zone C — Corrective Relationships */}
        <div className="p-5 rounded-xl bg-surface-subtle border border-border-rule space-y-4">
          <div className="flex items-center justify-between border-b border-border-rule/60 pb-3">
            <div className="flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-wider text-foreground">
              <HeartHandshake className="w-4 h-4 text-clay" />
              <span>Zone C: Corrective Relational Exchange</span>
            </div>
            <span className="text-[11px] font-mono text-muted-foreground">
              Mutual accountability pairs
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-3.5 rounded-lg bg-card border border-border-rule space-y-1">
              <div className="font-heading font-bold text-xs uppercase tracking-wider text-amber-800 dark:text-amber-400">
                You Need (Corrective Input)
              </div>
              <p className="text-foreground/85 font-serif leading-relaxed">
                {activeProfile.youNeed}
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-card border border-border-rule space-y-1">
              <div className="font-heading font-bold text-xs uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                You Offer (Systemic Gift)
              </div>
              <p className="text-foreground/85 font-serif leading-relaxed">
                {activeProfile.youOffer}
              </p>
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
            <span>Proceed to Panel 3: The Team Map (5Q Shape)</span>
            <span>&rarr;</span>
          </button>
        </div>
      )}
    </section>
  );
}
