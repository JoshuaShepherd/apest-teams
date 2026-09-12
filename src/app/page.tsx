'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
  Users,
  Activity,
  Layers,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Quote,
  Flame,
  Scale,
  HeartHandshake,
  BookOpen,
  Check,
  ExternalLink,
} from 'lucide-react';
import { useTeam } from '@/context/TeamContext';

type CaseStudyTab = 'leaders' | 'suppression' | 'breakthrough';

interface LeaderCaseProfile {
  id: string;
  name: string;
  role: string;
  tenure: string;
  authority: boolean;
  archetype: string;
  code: string;
  primaryFunc: string;
  primaryScore: number;
  secondaryFunc: string;
  secondaryScore: number;
  scores: { apostle: number; prophet: number; evangelist: number; shepherd: number; teacher: number };
  dilemma: string;
  breakthrough: string;
  quote: string;
}

const CASE_STUDY_LEADERS: LeaderCaseProfile[] = [
  {
    id: 'marcus-webb',
    name: 'Marcus Webb',
    role: 'Lead Pastor (Founder)',
    tenure: '9 Years',
    authority: true,
    archetype: 'The Architect Educator (A-T)',
    code: 'A-T',
    primaryFunc: 'Apostle',
    primaryScore: 46,
    secondaryFunc: 'Teacher',
    secondaryScore: 35,
    scores: { apostle: 46, prophet: 27, evangelist: 9, shepherd: 13, teacher: 35 },
    dilemma:
      'Felt alone carrying the pioneering risk and future expansion of the church. Cast bold missional vision, but watched staff meetings instantly devolve into calendar maintenance and pastoral triage. Frustrated that his team nodded in agreement but failed to execute apostolic initiatives.',
    breakthrough:
      'The diagnostic validated that his apostolic voice was structurally isolated (the only primary Apostle on staff). He learned to stop carrying the burden alone and established the bi-weekly Apostle-Shepherd Humanization Dialogue with James to pace initiatives without burning out staff.',
    quote:
      '“I realized I was expecting our team to run like an apostolic startup when our entire structural incentive system was designed to protect the Sunday auditorium.”',
  },
  {
    id: 'james-okafor',
    name: 'James Okafor',
    role: 'Executive Pastor',
    tenure: '4 Years',
    authority: true,
    archetype: 'The Pastoral Architect (S-T)',
    code: 'S-T',
    primaryFunc: 'Shepherd',
    primaryScore: 48,
    secondaryFunc: 'Teacher',
    secondaryScore: 37,
    scores: { apostle: 7, prophet: 21, evangelist: 12, shepherd: 48, teacher: 37 },
    dilemma:
      'Operated as the gravitational center and emotional shock absorber for staff. Instinctively protected the team from Marcus’s weekly brainstorms and strategic pivots. When apostolic tension arose, James neutralized it in the name of staff mental health, inadvertently locking the church in equilibrium.',
    breakthrough:
      'Recognized that high Shepherding paired with formal veto authority acted as an institutional dampener on mission. He adopted the 5Q Thinking Hats framework at The Table, allowing constructive apostolic tension without interpreting it as pastoral failure.',
    quote:
      '“I used to think my highest calling was keeping everyone calm and safe. Now I see that living systems need holy disequilibrium to bear fruit.”',
  },
  {
    id: 'priya-nair',
    name: 'Priya Nair',
    role: 'Director of Community Formation',
    tenure: '3 Years',
    authority: false,
    archetype: 'The Contemplative Healer (P-S)',
    code: 'P-S',
    primaryFunc: 'Prophet',
    primaryScore: 47,
    secondaryFunc: 'Shepherd',
    secondaryScore: 36,
    scores: { apostle: 8, prophet: 47, evangelist: 24, shepherd: 36, teacher: 16 },
    dilemma:
      'Deeply attuned to covenant integrity, justice, and spiritual hypocrisy. Sensed when church programs were spiritually hollow despite healthy attendance numbers. Often hesitated to speak in staff meetings because her critique sounded negative or disruptive to the Shepherd-Teacher consensus.',
    breakthrough:
      'Granted formal structural permission and airtime through the 5-Layer diagnostic. Her prophetic discernment shifted from being viewed as “cynical critique” into the team’s vital covenant compass before major budget allocations.',
    quote:
      '“For three years I swallowed my concerns because I didn’t want to be labeled difficult. This platform gave our team language to receive prophetic truth as a grace.”',
  },
  {
    id: 'sofia-reyes',
    name: 'Sofia Reyes',
    role: 'Outreach & Neighboring Director',
    tenure: '2 Years',
    authority: false,
    archetype: 'The Hospitable Herald (E-S)',
    code: 'E-S',
    primaryFunc: 'Evangelist',
    primaryScore: 45,
    secondaryFunc: 'Shepherd',
    secondaryScore: 38,
    scores: { apostle: 8, prophet: 20, evangelist: 45, shepherd: 38, teacher: 14 },
    dilemma:
      'Carried deep passion for unchurched neighbors in East Denver, but felt intellectually intimidated by Marcus and James’s dense theological frameworks. Outward outreach was treated as a minor line item, and her energy was constantly redirected into internal event logistics.',
    breakthrough:
      'The team discovered Sofia held the only primary Evangelistic score on the entire team. Her voice was recognized as the church’s missional lifeline, leading to the funding of 2 missional households in the Aurora Corridor and 17 new community connections.',
    quote:
      '“I stopped trying to speak in systematic theology and started leading our team into the neighborhood. They finally realized outreach isn’t a department—it’s our heartbeat.”',
  },
  {
    id: 'daniel-park',
    name: 'Daniel Park',
    role: 'Worship & Arts Pastor',
    tenure: '2 Years',
    authority: false,
    archetype: 'The Prophetic Artist (P-T)',
    code: 'P-T',
    primaryFunc: 'Prophet',
    primaryScore: 46,
    secondaryFunc: 'Teacher',
    secondaryScore: 38,
    scores: { apostle: 6, prophet: 46, evangelist: 11, shepherd: 22, teacher: 38 },
    dilemma:
      'Carried tremendous prophetic and doctrinal depth (Prophet 46, Teacher 38), but was pigeonholed as a “sound equipment technician and song leader.” Restless preparing weekly musical setlists while burning to awaken the church to the transcendence and holiness of God.',
    breakthrough:
      'Liberated from the narrow music-leader box. Marcus and James recognized Daniel as a primary theological asset, commissioning him to shape the Sunday liturgy and prophetic prayer rhythms of the gathered church.',
    quote:
      '“I was hired to manage chords and audio faders. The 5Q diagnostic revealed that God called me to help form the spiritual conscience of our community.”',
  },
];

export default function LandingPage() {
  const { metrics } = useTeam();
  const [activeTab, setActiveTab] = useState<CaseStudyTab>('leaders');
  const [selectedLeaderId, setSelectedLeaderId] = useState<string>('marcus-webb');

  const selectedLeader =
    CASE_STUDY_LEADERS.find((l) => l.id === selectedLeaderId) || CASE_STUDY_LEADERS[0];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20 selection:text-primary">
      {/* Platform Navigation Header */}
      <header className="border-b border-border-rule bg-card/90 backdrop-blur-md px-6 py-4 sticky top-0 z-30 shadow-nav">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm tracking-tight shadow-sm">
              5Q
            </div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-base tracking-tight text-foreground">
                APEST Teams
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded-full bg-accent text-accent-foreground border border-border-soft">
                Alan Hirsch
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#case-study"
              className="hidden sm:inline-flex px-4 py-2 text-xs font-semibold rounded-button bg-accent text-accent-foreground border border-border-soft hover:bg-muted transition-colors"
            >
              Case Study
            </a>
            <Link
              href="/setup/roster"
              className="px-4 sm:px-5 py-2 text-xs font-semibold rounded-button bg-card text-foreground border border-border-rule hover:bg-muted transition-colors shadow-sm"
            >
              Assemble Team
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs font-semibold rounded-button bg-primary text-primary-foreground hover:bg-primary-hover transition-all shadow-primary-glow"
            >
              <span>Explore Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-28 px-6 max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-button bg-accent text-accent-foreground border border-border-soft text-xs font-semibold tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-clay" />
          <span className="font-body">Ecclesial Diagnostic & Discipleship Engine</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold text-foreground tracking-tight leading-[1.08]">
            Is the fivefold fullness of Christ present and active{' '}
            <span className="italic text-primary font-normal">in your team?</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed font-body">
            APEST Teams is not an HR personality test. It is a living ecclesial diagnostic platform
            grounded in Alan Hirsch&rsquo;s <em>5Q</em> that evaluates collective fivefold DNA, exposes
            structural suppression, and activates self-correcting movemental discipleship.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#case-study"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-button bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary-hover transition-all shadow-primary-glow"
          >
            <span>Read Restoration Road Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-button bg-card text-foreground border border-border-rule font-semibold text-sm hover:bg-muted transition-colors shadow-sm"
          >
            <span>Open Live Diagnostic</span>
          </Link>
        </div>
      </section>

      {/* The Three Foundational Inquiries */}
      <section className="py-16 bg-card border-y border-border-rule px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-card bg-background border border-border-soft space-y-3 shadow-card hover:shadow-tile transition-all">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-lg">
              1
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground">
              Fivefold Fullness (<em>Pleroma</em>)
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed font-body">
              Christ distributed the fivefold archetypes across the whole body. We measure the
              expanding &ldquo;Jesus Space&rdquo; polygon to diagnose your collective capacity to
              reflect Jesus.
            </p>
          </div>

          <div className="p-8 rounded-card bg-background border border-border-soft space-y-3 shadow-card hover:shadow-tile transition-all">
            <div className="w-10 h-10 rounded-xl bg-clay/10 text-clay flex items-center justify-center font-heading font-bold text-lg">
              2
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground">
              Structural Suppression
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed font-body">
              Exposing the historical &ldquo;Shepherd-Teacher Trap&rdquo; where inward-facing pastoral
              care and curriculum crowd out apostolic pioneering and evangelistic outreach.
            </p>
          </div>

          <div className="p-8 rounded-card bg-background border border-border-soft space-y-3 shadow-card hover:shadow-tile transition-all">
            <div className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center font-heading font-bold text-lg">
              3
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground">
              Corrective Discipleship
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed font-body">
              Transforming tension into spiritual momentum through the 10 canonical pairings, 5Q
              Thinking Hats facilitation studio, and custom 12-week formation plans.
            </p>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE CASE STUDY SECTION */}
      <section id="case-study" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-semibold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Grounded Ecclesial Reference Case</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight">
              The 3-Year Plateau at <br className="hidden sm:inline" />
              <span className="italic text-primary">Restoration Road Community Church</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed">
              Denver, CO • 9-Year Church Plant • 340 Adult Congregants • 5 Full-Time Staff Leaders
            </p>
          </div>

          {/* Context Narrative Card */}
          <div className="p-8 rounded-card bg-card border border-border-soft shadow-card relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <div className="space-y-2">
                <span className="text-[11px] uppercase font-mono font-semibold text-primary tracking-widest">
                  The Stated Calling
                </span>
                <p className="text-xs text-foreground font-body leading-relaxed italic">
                  &ldquo;To be an incarnational, sent community in East Denver that makes disciples,
                  embodies Jesus&rsquo; kingdom, and plants neighborhood expressions across the
                  city.&rdquo;
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] uppercase font-mono font-semibold text-clay tracking-widest">
                  The Persistent Frustration
                </span>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  Attendance plateaued for 3 consecutive years. 87% of staff hours and budget were
                  consumed by Sunday morning production and crisis triage. Actual output was
                  inward-facing pastoral maintenance.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] uppercase font-mono font-semibold text-foreground tracking-widest">
                  The Revealed Paradox
                </span>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  Restoration Road preached apostolic movement from the pulpit, but its governance
                  and meetings were structured around the classic Shepherd-Teacher equilibrium
                  cushion.
                </p>
              </div>
            </div>

            {/* Central Callout Banner */}
            <div className="p-4 rounded-xl bg-surface-subtle border border-border-soft flex items-start sm:items-center gap-3 text-xs text-foreground font-body">
              <Quote className="w-5 h-5 text-primary shrink-0 mt-0.5 sm:mt-0" />
              <span>
                <strong>The Core Tension:</strong> The problem wasn&rsquo;t lack of vision or prayer.
                It was <em>structural suppression</em>: two leaders held 100% of veto power, while the
                team&rsquo;s 93 points of prophetic intelligence and lone evangelistic herald had no
                formal seat at the decision-making table.
              </span>
            </div>
          </div>

          {/* Interactive Case Study Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-surface-subtle border border-border-soft max-w-xl mx-auto">
            <button
              onClick={() => setActiveTab('leaders')}
              className={`px-5 py-2 text-xs font-semibold rounded-xl transition-all ${
                activeTab === 'leaders'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              1. The 5 Leaders & Tensions
            </button>
            <button
              onClick={() => setActiveTab('suppression')}
              className={`px-5 py-2 text-xs font-semibold rounded-xl transition-all ${
                activeTab === 'suppression'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              2. Structural Suppression
            </button>
            <button
              onClick={() => setActiveTab('breakthrough')}
              className={`px-5 py-2 text-xs font-semibold rounded-xl transition-all ${
                activeTab === 'breakthrough'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              3. The Breakthrough
            </button>
          </div>

          {/* TAB 1: THE 5 LEADERS & TENSIONS */}
          {activeTab === 'leaders' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {/* Leader Selector Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {CASE_STUDY_LEADERS.map((leader) => {
                  const isSelected = leader.id === selectedLeaderId;
                  return (
                    <button
                      key={leader.id}
                      onClick={() => setSelectedLeaderId(leader.id)}
                      className={`p-4 rounded-xl text-left border transition-all ${
                        isSelected
                          ? 'bg-card border-primary ring-2 ring-primary/20 shadow-sm'
                          : 'bg-card/60 border-border-soft hover:bg-card hover:border-border-rule'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-primary">
                          {leader.code}
                        </span>
                        {leader.authority ? (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-primary/10 text-primary">
                            Veto
                          </span>
                        ) : (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                            Voice
                          </span>
                        )}
                      </div>
                      <div className="font-heading font-bold text-sm text-foreground truncate">
                        {leader.name}
                      </div>
                      <div className="text-[11px] text-muted-foreground truncate">
                        {leader.role}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Leader Deep-Dive Inspector Card */}
              <div className="p-8 sm:p-10 rounded-card bg-card border border-border-soft shadow-card space-y-8">
                {/* Leader Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border-soft">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">
                        {selectedLeader.name}
                      </h3>
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-accent text-accent-foreground border border-border-soft">
                        {selectedLeader.archetype}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground font-body">
                      {selectedLeader.role} • {selectedLeader.tenure} tenure •{' '}
                      {selectedLeader.authority ? (
                        <span className="font-semibold text-primary">
                          Carries Formal Authority & Veto Rights
                        </span>
                      ) : (
                        <span className="text-muted-foreground">
                          No Formal Authority (Advisory Seat)
                        </span>
                      )}
                    </p>
                  </div>

                  {/* 5Q Function Score Badges */}
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-2 rounded-xl bg-surface-subtle border border-border-soft text-center">
                      <div className="text-[10px] uppercase font-mono text-muted-foreground">
                        Primary ({selectedLeader.primaryFunc})
                      </div>
                      <div className="text-xl font-bold font-mono text-primary">
                        {selectedLeader.primaryScore}
                      </div>
                    </div>
                    <div className="px-3 py-2 rounded-xl bg-surface-subtle border border-border-soft text-center">
                      <div className="text-[10px] uppercase font-mono text-muted-foreground">
                        Secondary ({selectedLeader.secondaryFunc})
                      </div>
                      <div className="text-xl font-bold font-mono text-clay">
                        {selectedLeader.secondaryScore}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Narrative Grid: Tension vs Platform Breakthrough */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 rounded-2xl bg-surface-subtle border border-border-soft space-y-3">
                    <div className="flex items-center gap-2 text-clay">
                      <AlertTriangle className="w-4 h-4" />
                      <h4 className="font-heading font-bold text-base text-foreground">
                        The Psychographic Reality & Tension
                      </h4>
                    </div>
                    <p className="text-xs text-muted-foreground font-body leading-relaxed">
                      {selectedLeader.dilemma}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-surface-subtle border border-border-soft space-y-3">
                    <div className="flex items-center gap-2 text-primary">
                      <TrendingUp className="w-4 h-4" />
                      <h4 className="font-heading font-bold text-base text-foreground">
                        What the 5Q Platform Unlocked
                      </h4>
                    </div>
                    <p className="text-xs text-muted-foreground font-body leading-relaxed">
                      {selectedLeader.breakthrough}
                    </p>
                  </div>
                </div>

                {/* Personal Leader Quote */}
                <div className="p-5 rounded-xl bg-background border border-border-soft flex items-start gap-4">
                  <Quote className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm font-heading italic text-foreground leading-relaxed">
                      {selectedLeader.quote}
                    </p>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                      — {selectedLeader.name}, {selectedLeader.role}
                    </span>
                  </div>
                </div>

                {/* Leader Scores Radar Bar */}
                <div className="space-y-3 pt-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground font-semibold">
                    Complete Fivefold Score Distribution
                  </span>
                  <div className="grid grid-cols-5 gap-2">
                    {(
                      [
                        { key: 'apostle', label: 'Apostle' },
                        { key: 'prophet', label: 'Prophet' },
                        { key: 'evangelist', label: 'Evangelist' },
                        { key: 'shepherd', label: 'Shepherd' },
                        { key: 'teacher', label: 'Teacher' },
                      ] as const
                    ).map(({ key, label }) => {
                      const score = selectedLeader.scores[key];
                      const isPrimary = selectedLeader.primaryFunc.toLowerCase() === key;
                      const isSecondary = selectedLeader.secondaryFunc.toLowerCase() === key;
                      return (
                        <div
                          key={key}
                          className={`p-3 rounded-xl border text-center ${
                            isPrimary
                              ? 'bg-primary/10 border-primary text-primary'
                              : isSecondary
                              ? 'bg-clay/10 border-clay text-clay'
                              : 'bg-background border-border-soft text-muted-foreground'
                          }`}
                        >
                          <div className="text-[10px] font-mono uppercase truncate">{label}</div>
                          <div className="text-lg font-bold font-mono text-foreground mt-0.5">
                            {score}
                          </div>
                          <div className="text-[9px] font-semibold uppercase">
                            {isPrimary ? 'Primary' : isSecondary ? 'Secondary' : 'Support'}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: STRUCTURAL SUPPRESSION DIAGNOSIS */}
          {activeTab === 'suppression' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {/* Stated vs Revealed Comparison */}
              <div className="p-8 rounded-card bg-card border border-border-soft shadow-card space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] uppercase font-mono font-semibold text-primary tracking-widest">
                    Diagnostic Layer 3: Cultural Rewarding Matrix
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-foreground">
                    What Restoration Road Preached vs. What the System Rewarded
                  </h3>
                  <p className="text-xs text-muted-foreground font-body max-w-2xl">
                    Every organization claims high missional values. The 5Q diagnostic exposes the
                    gap between stated aspiration and actual resourced behavior.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="border-b border-border-rule text-muted-foreground font-mono uppercase text-[10px]">
                        <th className="pb-3 font-semibold">Ecclesial Function</th>
                        <th className="pb-3 font-semibold">Stated Value (Pulpit)</th>
                        <th className="pb-3 font-semibold">Revealed Value (Budget & Hours)</th>
                        <th className="pb-3 font-semibold">Ecclesial Reality</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-soft font-body">
                      <tr>
                        <td className="py-3.5 font-bold font-heading text-sm text-foreground">
                          Apostle (Pioneering & Extension)
                        </td>
                        <td className="py-3.5 text-primary font-semibold">85% (High Stated Priority)</td>
                        <td className="py-3.5 text-clay font-semibold">15% (Funded & Resourced)</td>
                        <td className="py-3.5 text-muted-foreground">
                          Marcus carried the apostolic burden alone; team converted initiatives into
                          curriculum.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 font-bold font-heading text-sm text-foreground">
                          Prophet (Covenant Discernment)
                        </td>
                        <td className="py-3.5 text-primary font-semibold">75% (Stated Priority)</td>
                        <td className="py-3.5 text-clay font-semibold">10% (Funded & Resourced)</td>
                        <td className="py-3.5 text-muted-foreground">
                          Priya & Daniel held 93 points of prophetic intelligence with 0 structural
                          permission.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3.5 font-bold font-heading text-sm text-foreground">
                          Evangelist (Outward Bridges)
                        </td>
                        <td className="py-3.5 text-primary font-semibold">80% (Stated Priority)</td>
                        <td className="py-3.5 text-clay font-semibold">12% (Funded & Resourced)</td>
                        <td className="py-3.5 text-muted-foreground">
                          Sofia was intimidated by academic theology and trapped in Sunday volunteer
                          logistics.
                        </td>
                      </tr>
                      <tr className="bg-primary/5">
                        <td className="py-3.5 font-bold font-heading text-sm text-primary">
                          Shepherd (Community & Pastoral Care)
                        </td>
                        <td className="py-3.5 text-muted-foreground font-semibold">40% (Stated Priority)</td>
                        <td className="py-3.5 text-primary font-bold">85% (Funded & Resourced)</td>
                        <td className="py-3.5 text-foreground font-medium">
                          4 of 5 leaders carried Shepherd. James operated as an emotional shock
                          absorber.
                        </td>
                      </tr>
                      <tr className="bg-primary/5">
                        <td className="py-3.5 font-bold font-heading text-sm text-primary">
                          Teacher (Classroom & Doctrinal Form)
                        </td>
                        <td className="py-3.5 text-muted-foreground font-semibold">30% (Stated Priority)</td>
                        <td className="py-3.5 text-primary font-bold">75% (Funded & Resourced)</td>
                        <td className="py-3.5 text-foreground font-medium">
                          Excessive sermon preparation and small-group curriculum dominated payroll.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* The 4 Core Suppression Findings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-card bg-card border border-border-soft space-y-3 shadow-card">
                  <div className="w-8 h-8 rounded-lg bg-clay/10 text-clay flex items-center justify-center font-heading font-bold text-sm">
                    1
                  </div>
                  <h4 className="font-heading font-bold text-lg text-foreground">
                    The Pastor-Teacher Veto Monopoly
                  </h4>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    Marcus (`A-T`) and James (`S-T`) held 100% of final veto rights. Every decision
                    was filtered through pastoral comfort and operational stability, muting holy
                    disequilibrium before it could spark kingdom renewal.
                  </p>
                </div>

                <div className="p-6 rounded-card bg-card border border-border-soft space-y-3 shadow-card">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-sm">
                    2
                  </div>
                  <h4 className="font-heading font-bold text-lg text-foreground">
                    The Latent 93-Point Prophetic Reservoir
                  </h4>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    Priya (47) and Daniel (46) held extraordinary discernment capacity. Yet Daniel
                    was treated as a “music technician” and Priya hesitated to speak to avoid
                    appearing cynical. The church was operating blind to its spiritual drift.
                  </p>
                </div>

                <div className="p-6 rounded-card bg-card border border-border-soft space-y-3 shadow-card">
                  <div className="w-8 h-8 rounded-lg bg-accent text-accent-foreground flex items-center justify-center font-heading font-bold text-sm">
                    3
                  </div>
                  <h4 className="font-heading font-bold text-lg text-foreground">
                    The Shepherd Cushion Trap
                  </h4>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    With 4 of 5 staff holding Shepherd as primary or secondary, the team developed a
                    deep conflict-avoidance reflex. Any missional risk that generated volunteer
                    anxiety was immediately smoothed over by James.
                  </p>
                </div>

                <div className="p-6 rounded-card bg-card border border-border-soft space-y-3 shadow-card">
                  <div className="w-8 h-8 rounded-lg bg-clay/10 text-clay flex items-center justify-center font-heading font-bold text-sm">
                    4
                  </div>
                  <h4 className="font-heading font-bold text-lg text-foreground">
                    The Marginalized Evangelist
                  </h4>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    Sofia was the church’s sole outward bridge to East Denver. Yet she spent 70% of
                    her week organizing coffee teams and Sunday greeters rather than discipling
                    non-churched families in homes.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: THE CATALYTIC BREAKTHROUGH */}
          {activeTab === 'breakthrough' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {/* Breakthrough Metrics Grid */}
              <div className="p-8 sm:p-10 rounded-card bg-card border border-border-soft shadow-card space-y-8">
                <div className="space-y-2 text-center max-w-2xl mx-auto">
                  <span className="text-[11px] uppercase font-mono font-semibold text-primary tracking-widest">
                    Post-Diagnostic Formation Arc
                  </span>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">
                    The Movemental Shift at Restoration Road
                  </h3>
                  <p className="text-xs text-muted-foreground font-body">
                    After completing the 5-layer audit, the team engaged in 3 consecutive sessions of
                    &ldquo;The Table&rdquo; and established a 12-week Discipleship Covenant.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-5 rounded-2xl bg-surface-subtle border border-border-soft text-center space-y-2">
                    <div className="text-3xl font-bold font-mono text-primary">+35%</div>
                    <div className="text-xs font-heading font-bold text-foreground">
                      Prophetic Activation
                    </div>
                    <p className="text-[11px] text-muted-foreground font-body">
                      Discernment airtime at The Table broke the 3-year Shepherd-Teacher consensus
                      deadlock.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface-subtle border border-border-soft text-center space-y-2">
                    <div className="text-3xl font-bold font-mono text-clay">0 &rarr; 17</div>
                    <div className="text-xs font-heading font-bold text-foreground">
                      Neighborhood Bridges
                    </div>
                    <p className="text-[11px] text-muted-foreground font-body">
                      Sofia was liberated from Sunday event admin to activate table hospitality with
                      East Denver neighbors.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface-subtle border border-border-soft text-center space-y-2">
                    <div className="text-3xl font-bold font-mono text-foreground">2 Households</div>
                    <div className="text-xs font-heading font-bold text-foreground">
                      Aurora Corridor Plant
                    </div>
                    <p className="text-[11px] text-muted-foreground font-body">
                      Voted to fund 2 decentralized missional households rather than expanding the
                      Sunday sanctuary audio rig.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface-subtle border border-border-soft text-center space-y-2">
                    <div className="text-3xl font-bold font-mono text-primary">Bi-Weekly</div>
                    <div className="text-xs font-heading font-bold text-foreground">
                      Apostle-Shepherd Rhythm
                    </div>
                    <p className="text-[11px] text-muted-foreground font-body">
                      Marcus & James instituted structured humanization dialogues to protect staff
                      while pioneering.
                    </p>
                  </div>
                </div>

                {/* The 4 Implemented Interventions */}
                <div className="pt-6 border-t border-border-soft space-y-4">
                  <h4 className="font-heading font-bold text-lg text-foreground text-center">
                    The Four Key Practices That Broke the Plateau
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-body">
                    <div className="p-4 rounded-xl bg-background border border-border-soft flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground">Instituted &ldquo;The Table&rdquo; Protocol:</strong>{' '}
                        Staff meetings switched from logistics calendar triage to rotating 5Q Thinking
                        Hats, guaranteeing Priya and Daniel speak first on major initiatives.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-background border border-border-soft flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground">Reassigned Sofia&rsquo;s 20 Weekly Hours:</strong>{' '}
                        Removed Sunday coffee and parking duties from Sofia, dedicating 50% of her
                        payroll to equipping lay church members in incarnational neighboring.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-background border border-border-soft flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground">Reframed Daniel as Liturgical Theologian:</strong>{' '}
                        Released Daniel from pure tech operations to curate musical and liturgical
                        prayers confronting spiritual apathy and idolatry.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-background border border-border-soft flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground">Signed the 12-Week Team Covenant:</strong>{' '}
                        Marcus and James committed to honoring the prophetic pre-flight check before
                        bringing new initiatives to the elder board.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Case Exploration Callout */}
          <div className="p-8 rounded-card bg-surface-subtle border border-border-soft flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-heading font-bold text-lg text-foreground">
                Experience the Full Restoration Road Diagnostic in Action
              </h4>
              <p className="text-xs text-muted-foreground font-body">
                The entire Restoration Road roster is pre-loaded into the live diagnostic dashboard,
                The Table discernment studio, and the 12-week formation covenant.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-button bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary-hover transition-all shadow-primary-glow"
              >
                <span>Launch Interactive Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/the-table"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-button bg-card text-foreground border border-border-rule text-xs font-semibold hover:bg-muted transition-colors shadow-sm"
              >
                <span>Try &ldquo;The Table&rdquo; Facilitation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Seeded Live Sample Preview */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <p className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-primary">
            Calculated Collective DNA
          </p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
            Restoration Road Baseline Metrics
          </h2>
          <p className="text-xs text-muted-foreground max-w-xl mx-auto font-body">
            Aggregate fivefold means and population deltas derived from all 5 team member scores.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-card bg-card border border-border-soft shadow-card space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {(['apostle', 'prophet', 'evangelist', 'shepherd', 'teacher'] as const).map((func) => (
              <div
                key={func}
                className="p-5 rounded-xl bg-surface-subtle border border-border-soft text-center space-y-1"
              >
                <span className="text-[10px] uppercase font-mono text-muted-foreground font-semibold">
                  {func}
                </span>
                <div className="text-2xl font-bold font-mono text-foreground">
                  {metrics.means[func]}
                </div>
                <div className="text-[11px] font-semibold text-primary">
                  Delta:{' '}
                  {metrics.deltasVsNorms[func] > 0
                    ? `+${metrics.deltasVsNorms[func]}`
                    : metrics.deltasVsNorms[func]}
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-surface-subtle border border-border-soft flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xs font-bold text-foreground font-body">
                Calculated Fullness Score: {metrics.jesusSpaceArea}% (Pleroma Area)
              </div>
              <div className="text-xs text-muted-foreground font-body">
                Coverage: Prophet &amp; Shepherd (Robust) • Apostle &amp; Evangelist (Suppressed)
              </div>
            </div>

            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-button bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary-hover transition-colors shadow-sm"
            >
              <span>Explore Complete 5-Layer Report</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-border-rule bg-card px-6 py-8 text-center text-xs text-muted-foreground">
        <p className="font-body">
          APEST Teams is grounded in the theology of Alan Hirsch (<em>5Q</em>,{' '}
          <em>The Permanent Revolution</em>, <em>The Forgotten Ways</em>).
        </p>
      </footer>
    </div>
  );
}
