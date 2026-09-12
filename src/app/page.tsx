'use client';

import React from 'react';
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
} from 'lucide-react';
import { useTeam } from '@/context/TeamContext';

export default function LandingPage() {
  const { metrics, state } = useTeam();

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
            <Link
              href="/setup/roster"
              className="px-5 py-2 text-xs font-semibold rounded-button bg-card text-foreground border border-border-rule hover:bg-muted transition-colors shadow-sm"
            >
              Assemble Team
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold rounded-button bg-primary text-primary-foreground hover:bg-primary-hover transition-all shadow-primary-glow"
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
          <Link
            href="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-button bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary-hover transition-all shadow-primary-glow"
          >
            <span>Launch Restoration Road Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/setup/roster"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-button bg-card text-foreground border border-border-rule font-semibold text-sm hover:bg-muted transition-colors shadow-sm"
          >
            <span>Assemble Your Leadership Roster</span>
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
              Fivefold Fullness ($Pleroma$)
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

      {/* Pre-Seeded Live Sample Preview */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <p className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-primary">
            Interactive Reference Case
          </p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
            Restoration Road Community Church (Denver, CO)
          </h2>
          <p className="text-xs text-muted-foreground max-w-xl mx-auto font-body">
            A staff team of five leaders (Marcus Webb, Priya Nair, James Okafor, Sofia Reyes, Daniel
            Park) evaluating why a 9-year church plant plateaued for 3 years.
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
                  Delta: {metrics.deltasVsNorms[func] > 0 ? `+${metrics.deltasVsNorms[func]}` : metrics.deltasVsNorms[func]}
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
                Coverage: Prophet & Shepherd (Present) • Apostle & Evangelist (Thin / Suppressed)
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
          APEST Teams is grounded in the theology of Alan Hirsch (*5Q*, *The Permanent Revolution*,
          *The Forgotten Ways*).
        </p>
      </footer>
    </div>
  );
}
