'use client';

import React, { useState } from 'react';
import { Info, Sparkles, User, HelpCircle } from 'lucide-react';
import { EmptyChairIcon, MutedMicIcon } from '../SuppressionBadge';

interface MemberCard {
  id: string;
  name: string;
  role: string;
  primary: 'A' | 'P' | 'E' | 'S' | 'T';
  secondary: 'A' | 'P' | 'E' | 'S' | 'T';
  tertiary?: 'A' | 'P' | 'E' | 'S' | 'T';
  fullProfile: string;
  avatarBg: string;
}

const MEMBERS: MemberCard[] = [
  {
    id: 'marcus',
    name: 'Marcus Webb',
    role: 'Lead Pastor',
    primary: 'A',
    secondary: 'T',
    fullProfile: 'A-T · Movement Theologian',
    avatarBg: '#9A5B2D',
  },
  {
    id: 'priya',
    name: 'Priya Nair',
    role: 'Director of Community Formation',
    primary: 'P',
    secondary: 'S',
    tertiary: 'E',
    fullProfile: 'P-S · Contemplative Healer',
    avatarBg: '#3E5C76',
  },
  {
    id: 'james',
    name: 'James Okafor',
    role: 'Executive Pastor',
    primary: 'S',
    secondary: 'T',
    fullProfile: 'S-T · Pastoral Architect',
    avatarBg: '#2D6A4F',
  },
];

const APEST_FUNCTIONS = [
  {
    key: 'A',
    name: 'Apostle',
    roleTitle: 'The Pioneer & Architect',
    color: '#9A5B2D', // Deep Ochre
    bgLight: 'rgba(154, 91, 45, 0.08)',
    hasPrimary: true,
    owners: ['Marcus Webb (Primary)'],
    description: 'Carries the pioneering intelligence of Jesus; scans horizons, establishes new ground.',
  },
  {
    key: 'P',
    name: 'Prophet',
    roleTitle: 'The Questioner & Compass',
    color: '#3E5C76', // Slate Blue
    bgLight: 'rgba(62, 92, 118, 0.08)',
    hasPrimary: true,
    owners: ['Priya Nair (Primary)'],
    description: 'Carries the discernment and justice-edge of Jesus; calls the community to covenant fidelity.',
  },
  {
    key: 'E',
    name: 'Evangelist',
    roleTitle: 'The Recruiter & Grace-Bearer',
    color: '#D97706', // Amber
    bgLight: 'rgba(217, 119, 6, 0.08)',
    hasPrimary: false,
    owners: ['(No Primary Voice) · Priya Nair holds 3rd in stack'],
    description: 'Carries the grace-note and recruitment impulse of Jesus; makes the gospel accessible to outsiders.',
  },
  {
    key: 'S',
    name: 'Shepherd',
    roleTitle: 'The Humanizer & Protector',
    color: '#2D6A4F', // Forest Green
    bgLight: 'rgba(45, 106, 79, 0.08)',
    hasPrimary: true,
    owners: ['James Okafor (Primary)', 'Priya Nair (Secondary)'],
    description: 'Carries the care and presence of Jesus; binds wounds and sustains relational depth.',
  },
  {
    key: 'T',
    name: 'Teacher',
    roleTitle: 'The Guide & Formator',
    color: '#5C5F66', // Warm Grey
    bgLight: 'rgba(92, 95, 102, 0.08)',
    hasPrimary: true,
    owners: ['Marcus Webb (Secondary)', 'James Okafor (Secondary)'],
    description: 'Carries the wisdom and formation intelligence of Jesus; anchors community in understanding.',
  },
];

export function Panel1Glance({ onNext }: { onNext?: () => void }) {
  const [hoveredCircle, setHoveredCircle] = useState<string | null>(null);
  const [selectedCircle, setSelectedCircle] = useState<string | null>('E');

  return (
    <section
      id="panel-1"
      className="p-6 sm:p-8 rounded-panel bg-card border border-border-rule shadow-card space-y-8 transition-all relative overflow-hidden"
    >
      {/* Subtle top indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-rule/60 pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-surface-subtle border border-border-soft text-[11px] font-mono text-muted-foreground">
            <span>Panel 1 of 11</span>
            <span>•</span>
            <span className="text-primary font-bold">Identity First</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight">
            Your Team · Five Profiles · One Body
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground font-serif italic max-w-3xl leading-relaxed">
            Each person carries a distinct expression of Christ’s ministry. Together, these profiles form your team’s unique intelligence — and reveal what you may be missing.
          </p>
        </div>

        <div className="shrink-0">
          <span className="px-3 py-1.5 rounded-button bg-surface-subtle border border-border-rule text-xs font-mono font-medium text-foreground">
            Restoration Road Community Church
          </span>
        </div>
      </div>

      {/* Five APEST Circles */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-mono uppercase tracking-wider text-[11px]">
            The Fivefold Calling Functions
          </span>
          <span className="italic font-serif">
            Hover or tap any function circle to trace connections
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 lg:gap-6 pt-2">
          {APEST_FUNCTIONS.map((func) => {
            const isHovered = hoveredCircle === func.key;
            const isSelected = selectedCircle === func.key;
            const isE = func.key === 'E';

            return (
              <div
                key={func.key}
                onMouseEnter={() => setHoveredCircle(func.key)}
                onMouseLeave={() => setHoveredCircle(null)}
                onClick={() => setSelectedCircle(func.key)}
                className={`relative p-5 rounded-2xl border transition-all cursor-pointer flex flex-col items-center text-center space-y-3 ${
                  isSelected || isHovered
                    ? 'border-foreground/40 bg-surface-warm shadow-tile -translate-y-1'
                    : 'border-border-rule bg-surface-subtle/50 hover:border-border-soft'
                } ${isE ? 'ring-2 ring-amber-500/30' : ''}`}
              >
                {/* Visual Circle */}
                <div className="relative">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center font-heading font-bold text-2xl sm:text-3xl text-white shadow-md transition-transform"
                    style={{ backgroundColor: func.color }}
                  >
                    {func.key}
                  </div>

                  {/* Indicator flag for absence/empty chair on E */}
                  {isE && (
                    <span
                      className="absolute -bottom-1 -right-1 p-1 rounded-full bg-card border border-amber-600/50 shadow-sm text-amber-700 dark:text-amber-400"
                      title="No Primary Voice Present (Absence)"
                    >
                      <EmptyChairIcon className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>

                <div>
                  <div className="font-heading font-bold text-base text-foreground">
                    {func.name}
                  </div>
                  <div className="text-[11px] text-muted-foreground font-body">
                    {func.roleTitle}
                  </div>
                </div>

                {/* Presence state badge */}
                <div className="pt-1">
                  {func.hasPrimary ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-foreground/5 text-foreground/80 border border-border-rule">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: func.color }} />
                      Primary Present
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-600/30">
                      <EmptyChairIcon className="w-2.5 h-2.5" />
                      Unowned Gap
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SVG Network Connector Line Visualization */}
      <div className="relative p-6 rounded-2xl bg-surface-warm/60 border border-border-rule space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-rule/60 pb-3">
          <div className="text-xs font-heading font-bold uppercase tracking-wider text-muted-foreground">
            Team Roster & Calling Links
          </div>
          <div className="flex items-center gap-4 text-[11px] text-muted-foreground font-mono">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-4 h-0.5 bg-foreground inline-block" /> Solid = Primary Calling
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-4 h-0.5 border-b border-dashed border-foreground/60 inline-block" /> Dashed = Secondary
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-4 h-0.5 border-b border-dotted border-amber-600 inline-block" /> Dotted = Tertiary (Latent)
            </span>
          </div>
        </div>

        {/* The Team Roster Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {MEMBERS.map((member) => (
            <div
              key={member.id}
              className="p-4 rounded-xl bg-card border border-border-rule shadow-sm space-y-3 hover:border-border-soft transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm text-white shadow-sm"
                    style={{ backgroundColor: member.avatarBg }}
                  >
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-[11px] text-muted-foreground font-body">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-base font-mono font-bold text-foreground">
                    {member.primary}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground block">
                    /{member.secondary}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-border-rule/50 flex items-center justify-between text-xs">
                <span className="text-[11px] font-serif italic text-muted-foreground truncate">
                  {member.fullProfile}
                </span>
              </div>

              {/* Connections summary for card */}
              <div className="text-[11px] space-y-1 font-mono pt-1 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: member.avatarBg }} />
                  <span>Primary &rarr; {member.primary}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full border border-foreground/50" />
                  <span>Secondary &rarr; {member.secondary}</span>
                </div>
                {member.tertiary && (
                  <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                    <span className="w-2 h-2 rounded-full border border-dotted border-amber-600" />
                    <span>Tertiary &rarr; {member.tertiary} (Latent)</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Key Visual Insight Callout */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-700/30 flex items-start gap-3">
          <div className="p-1.5 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300 shrink-0 mt-0.5">
            <EmptyChairIcon className="w-4 h-4" />
          </div>
          <div className="space-y-1 text-xs">
            <div className="font-heading font-bold text-sm text-amber-900 dark:text-amber-200">
              The First Moment of Quiet Recognition: The Unclaimed Circle
            </div>
            <p className="text-amber-950/80 dark:text-amber-200/90 leading-relaxed font-serif">
              Look at the five circles above: solid lines run directly to <strong>Apostle (Marcus)</strong>, <strong>Prophet (Priya)</strong>, and <strong>Shepherd (James)</strong>, while <strong>Teacher</strong> is reinforced by two secondary voices.
              <br />
              Notice that the <strong>E circle (Evangelist) has no solid lines running to it from any team member’s primary calling</strong>. It carries only a faint dotted trace from Priya’s tertiary stack. No one owns the evangelistic intelligence in the leadership room.
            </p>
          </div>
        </div>

        {/* Tooltip on E circle expanded card */}
        <div className="p-4 rounded-xl bg-card border border-border-rule shadow-sm space-y-2">
          <div className="flex items-center gap-2 font-heading font-bold text-xs text-foreground uppercase tracking-wide">
            <Info className="w-4 h-4 text-clay" />
            <span>Evangelist Function Intelligence Note</span>
          </div>
          <p className="text-xs text-muted-foreground font-body leading-relaxed">
            No one on this team holds Evangelist as their primary calling. This doesn&rsquo;t mean evangelism isn&rsquo;t happening — it means the evangelistic intelligence (grace-note, recruitment, accessibility of the gospel) has no primary advocate in your leadership room. Read more in Panel 3.
          </p>
        </div>
      </div>

      {/* Sequential advance prompt */}
      {onNext && (
        <div className="pt-2 flex justify-end">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-button bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary-hover transition-all shadow-sm"
          >
            <span>Proceed to Panel 2: Individual Profiles</span>
            <span>&rarr;</span>
          </button>
        </div>
      )}
    </section>
  );
}
