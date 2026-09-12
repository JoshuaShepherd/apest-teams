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
    <div className="min-h-screen bg-surface-base flex flex-col">
      {/* Navigation Header */}
      <header className="border-b border-surface-border bg-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-ink-primary text-white flex items-center justify-center font-serif font-bold text-sm">
              5Q
            </div>
            <span className="font-semibold text-base tracking-tight text-ink-primary">
              APEST Teams
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/setup/roster"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-surface-subtle text-ink-primary border border-surface-border hover:bg-surface-muted transition-colors"
            >
              Assemble Team
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-ink-primary text-white hover:bg-ink-secondary transition-all shadow-sm"
            >
              <span>Explore Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 max-w-5xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-medium text-rose-800">
          <Sparkles className="w-3.5 h-3.5 text-rose-600" />
          <span>Ecclesial Diagnostic & Discipleship Engine</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-ink-primary tracking-tight leading-[1.15]">
          Is the fivefold fullness of Christ present and active in your team?
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-ink-secondary leading-relaxed font-sans">
          APEST Teams is not an HR personality test. It is a living diagnostic platform based on
          Alan Hirsch's <em>5Q</em> that evaluates collective ecclesial DNA, exposes structural
          suppression, and activates self-correcting movemental discipleship.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ink-primary text-white font-medium text-sm hover:bg-ink-secondary transition-all shadow-md"
          >
            <span>Launch Restoration Road Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/setup/roster"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-ink-primary border border-surface-border font-medium text-sm hover:bg-surface-subtle transition-colors shadow-sm"
          >
            <span>Assemble Your Leadership Roster</span>
          </Link>
        </div>
      </section>

      {/* The Three Foundational Questions */}
      <section className="py-12 bg-white border-y border-surface-border px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-surface-base border border-surface-border space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-serif font-bold text-lg text-ink-primary">
              Fivefold Fullness (Pleroma)
            </h3>
            <p className="text-xs text-ink-secondary leading-relaxed">
              Christ distributed the fivefold archetypes across the whole body. We measure the
              expanding &ldquo;Jesus Space&rdquo; polygon to diagnose your collective capacity to
              reflect Jesus.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-base border border-surface-border space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-serif font-bold text-lg text-ink-primary">
              Structural Suppression
            </h3>
            <p className="text-xs text-ink-secondary leading-relaxed">
              Exposing the Western church&rsquo;s &ldquo;Shepherd-Teacher Trap&rdquo; where inward-facing
              pastoral care and curriculum crowd out apostolic pioneering and evangelistic outreach.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-base border border-surface-border space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-serif font-bold text-lg text-ink-primary">
              Corrective Discipleship
            </h3>
            <p className="text-xs text-ink-secondary leading-relaxed">
              Transforming tension into spiritual momentum through the 10 canonical pairings, 5Q
              Thinking Hats facilitation studio, and custom 12-week formation plans.
            </p>
          </div>
        </div>
      </section>

      {/* Pre-Seeded Live Sample Preview */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-mono text-ink-tertiary">
            Interactive Reference Case
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink-primary">
            Restoration Road Community Church (Denver, CO)
          </h2>
          <p className="text-xs text-ink-secondary max-w-xl mx-auto">
            A staff team of five leaders (Marcus Webb, Priya Nair, James Okafor, Sofia Reyes, Daniel
            Park) evaluating why a 9-year church plant plateaued for 3 years.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-surface-border shadow-sm space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {(['apostle', 'prophet', 'evangelist', 'shepherd', 'teacher'] as const).map((func) => (
              <div
                key={func}
                className="p-4 rounded-xl bg-surface-subtle border border-surface-border text-center space-y-1"
              >
                <span className="text-[10px] uppercase font-mono text-ink-tertiary">{func}</span>
                <div className="text-2xl font-bold font-mono text-ink-primary">
                  {metrics.means[func]}
                </div>
                <div className="text-[10px] font-semibold text-ink-secondary">
                  Delta: {metrics.deltasVsNorms[func] > 0 ? `+${metrics.deltasVsNorms[func]}` : metrics.deltasVsNorms[func]}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-surface-subtle border border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xs font-bold text-ink-primary">
                Calculated Fullness Score: {metrics.jesusSpaceArea}% (Pleroma Area)
              </div>
              <div className="text-xs text-ink-secondary">
                Coverage: Prophet & Shepherd (Present) • Apostle & Evangelist (Thin / Suppressed)
              </div>
            </div>

            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-ink-primary text-white text-xs font-semibold hover:bg-ink-secondary transition-colors"
            >
              <span>Explore Complete 5-Layer Report</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-surface-border bg-white px-6 py-6 text-center text-xs text-ink-tertiary">
        <p>
          APEST Teams is grounded in the theology of Alan Hirsch (*5Q*, *The Permanent Revolution*,
          *The Forgotten Ways*).
        </p>
      </footer>
    </div>
  );
}
