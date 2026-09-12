'use client';

import React, { useState } from 'react';
import { Calendar, Plus, Trash2, Key, HelpCircle, Activity, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { EmptyChairIcon, MutedMicIcon, AbsenceFlag, SuppressionFlag } from '../SuppressionBadge';

interface ActivityItem {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  notes: string;
}

const INITIAL_ACTIVITIES: ActivityItem[] = [
  { id: '1', name: 'Sunday Gathering', primary: 'T', secondary: 'S', notes: '45-min exposition, musical liturgy' },
  { id: '2', name: 'Small Groups Rhythms', primary: 'S', secondary: 'T', notes: 'Bi-weekly meal, relational care, study' },
  { id: '3', name: 'Food Pantry (East Denver)', primary: 'S', secondary: 'P', notes: 'Weekly food distribution, high care volume' },
  { id: '4', name: 'Weekly Staff Meetings', primary: 'T', secondary: 'S', notes: 'Sunday review, pastoral triage, budget' },
  { id: '5', name: 'Elder Board Retreats', primary: 'T', secondary: 'S', notes: 'Governance, policy review, doctrine' },
  { id: '6', name: 'Neighborhood Outreach (Minimal)', primary: 'E', secondary: 'A', notes: 'Ad-hoc seasonal block party, 5% budget' },
  { id: '7', name: 'Church Planting / New Ground', primary: '—', secondary: '—', notes: 'None active (paused for 3 years)' },
];

export function Panel6CultureAudit({ onNext }: { onNext?: () => void }) {
  const [activities, setActivities] = useState<ActivityItem[]>(INITIAL_ACTIVITIES);
  const [newActivityName, setNewActivityName] = useState('');
  const [newPrimary, setNewPrimary] = useState('S');
  const [newSecondary, setNewSecondary] = useState('T');

  const addActivity = () => {
    if (!newActivityName.trim()) return;
    setActivities([
      ...activities,
      {
        id: Date.now().toString(),
        name: newActivityName.trim(),
        primary: newPrimary,
        secondary: newSecondary,
        notes: 'Custom team activity',
      },
    ]);
    setNewActivityName('');
  };

  const removeActivity = (id: string) => {
    setActivities(activities.filter((a) => a.id !== id));
  };

  // Compute breakdown percentages
  const tally: Record<string, number> = { A: 0, P: 0, E: 0, S: 0, T: 0 };
  let totalCount = 0;
  activities.forEach((act) => {
    if (tally[act.primary] !== undefined) {
      tally[act.primary] += 1.0;
      totalCount += 1.0;
    }
    if (tally[act.secondary] !== undefined) {
      tally[act.secondary] += 0.5;
      totalCount += 0.5;
    }
  });

  const percent = (key: string) => (totalCount > 0 ? Math.round((tally[key] / totalCount) * 100) : 0);

  return (
    <section
      id="panel-6"
      className="p-6 sm:p-8 rounded-panel bg-card border border-border-rule shadow-card space-y-8 transition-all"
    >
      {/* Panel Header */}
      <div className="space-y-3 border-b border-border-rule/60 pb-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-surface-subtle border border-border-soft text-[11px] font-mono text-muted-foreground">
          <span>Panel 6 of 11</span>
          <span>•</span>
          <span className="text-primary font-bold">The Culture Audit</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight">
          The Culture Audit · What Does Your Organization Actually Reward?
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground font-serif leading-relaxed max-w-4xl">
          Vision statements are aspirational. Culture is operational. The gap between them is where most churches live — and where most leadership teams feel the quiet frustration they cannot quite name. This audit doesn’t measure what you say you value. It measures what your calendar, your budget, and your hero stories reveal about what you actually prize.
        </p>
      </div>

      {/* Interactive Inventory Table & Visual Output */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Inventory List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-xs font-heading font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Calendar className="w-4 h-4 text-clay" />
              <span>Core Program Calendar & Operational Initiatives</span>
            </div>
            <span className="text-[11px] font-mono text-muted-foreground">
              {activities.length} Tracked
            </span>
          </div>

          <div className="border border-border-rule rounded-xl overflow-hidden bg-card shadow-sm">
            <table className="w-full text-xs text-left">
              <thead className="bg-surface-subtle border-b border-border-rule text-muted-foreground font-mono uppercase text-[10px]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Activity / Program</th>
                  <th className="px-3 py-3 font-semibold text-center">Primary</th>
                  <th className="px-3 py-3 font-semibold text-center">Secondary</th>
                  <th className="px-4 py-3 font-semibold">Contextual Output</th>
                  <th className="px-2 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-rule/60 font-body">
                {activities.map((act) => (
                  <tr key={act.id} className="hover:bg-surface-warm/40 transition-colors">
                    <td className="px-4 py-3 font-semibold text-foreground">
                      {act.name}
                    </td>
                    <td className="px-3 py-3 text-center">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-surface-subtle border border-border-rule text-foreground">
                        {act.primary}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-center">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface-subtle/60 border border-border-rule/60 text-muted-foreground">
                        {act.secondary}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[11px] text-muted-foreground font-serif">
                      {act.notes}
                    </td>
                    <td className="px-2 py-3 text-right">
                      {act.id.length > 3 && (
                        <button
                          onClick={() => removeActivity(act.id)}
                          className="p-1 rounded text-muted-foreground hover:text-rose-600 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick add custom activity */}
          <div className="p-4 rounded-xl bg-surface-subtle border border-border-rule flex flex-col sm:flex-row items-center gap-3">
            <input
              type="text"
              placeholder="Tag additional team activity..."
              value={newActivityName}
              onChange={(e) => setNewActivityName(e.target.value)}
              className="flex-1 w-full text-xs px-3 py-2 rounded-lg bg-card border border-border-rule text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
              <div className="flex items-center gap-1 text-xs">
                <span className="text-[10px] font-mono text-muted-foreground">1st:</span>
                <select
                  value={newPrimary}
                  onChange={(e) => setNewPrimary(e.target.value)}
                  className="text-xs px-2 py-1 rounded bg-card border border-border-rule"
                >
                  <option value="A">A</option>
                  <option value="P">P</option>
                  <option value="E">E</option>
                  <option value="S">S</option>
                  <option value="T">T</option>
                </select>
              </div>

              <div className="flex items-center gap-1 text-xs">
                <span className="text-[10px] font-mono text-muted-foreground">2nd:</span>
                <select
                  value={newSecondary}
                  onChange={(e) => setNewSecondary(e.target.value)}
                  className="text-xs px-2 py-1 rounded bg-card border border-border-rule"
                >
                  <option value="A">A</option>
                  <option value="P">P</option>
                  <option value="E">E</option>
                  <option value="S">S</option>
                  <option value="T">T</option>
                  <option value="—">—</option>
                </select>
              </div>

              <button
                onClick={addActivity}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Real-time Culture Weight Chart */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-heading font-bold uppercase tracking-wider text-muted-foreground">
            Organizational Reward Distribution
          </div>

          <div className="p-6 rounded-2xl bg-surface-warm/60 border border-border-rule space-y-4">
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-heading font-bold text-foreground">Shepherd (S) — Care & Maintenance</span>
                  <span className="font-mono font-bold text-emerald-800 dark:text-emerald-400">{percent('S')}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-border-rule overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${percent('S')}%`, backgroundColor: '#2D6A4F' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-heading font-bold text-foreground">Teacher (T) — Exposition & Clarity</span>
                  <span className="font-mono font-bold text-sky-800 dark:text-sky-400">{percent('T')}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-border-rule overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${percent('T')}%`, backgroundColor: '#5C5F66' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-heading font-bold text-foreground">Prophet (P) — Covenant Integrity</span>
                  <span className="font-mono font-bold text-slate-800 dark:text-slate-400">{percent('P')}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-border-rule overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${percent('P')}%`, backgroundColor: '#3E5C76' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-heading font-bold text-foreground">Evangelist (E) — Outsider Recruitment</span>
                  <span className="font-mono font-bold text-amber-800 dark:text-amber-400">{percent('E')}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-border-rule overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${percent('E')}%`, backgroundColor: '#D97706' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-heading font-bold text-foreground">Apostle (A) — Pioneering New Ground</span>
                  <span className="font-mono font-bold text-rose-800 dark:text-rose-400">{percent('A')}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-border-rule overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${percent('A')}%`, backgroundColor: '#9A5B2D' }} />
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border-rule/80 text-xs font-serif leading-relaxed text-foreground/85">
              <strong>The Resulting Diagnostic:</strong> T and S dominate (~80% of calendar mass). E and A are marginal or absent from the program calendar. The apostolic and prophetic voices are present in the room — but the organizational structures are not creating space for them to operate.
            </div>
          </div>
        </div>
      </div>

      {/* Summary Statement */}
      <div className="p-5 rounded-xl bg-surface-subtle border border-border-rule/80 text-xs sm:text-sm text-foreground/85 font-serif leading-relaxed space-y-2">
        <p>
          <strong>Your program calendar is ST-dominant.</strong> Your staff meetings are dominated by programming, pastoral care logistics, and budget. Your Sunday gathering is excellent. Your small-group culture is warm. Your food pantry is growing. None of this is wrong — but it is a system that selects for shepherds and teachers and quietly discourages apostles and prophets, regardless of what your vision statement says about being a sent community.
        </p>
      </div>

      {/* Key Callout 1: The Culture Is the Real Policy */}
      <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-600/30 space-y-3 shadow-sm">
        <div className="flex items-center gap-2 font-heading font-bold text-base text-amber-900 dark:text-amber-200">
          <Key className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0" />
          <span>🔑 The Culture Is the Real Policy</span>
        </div>
        <blockquote className="border-l-2 border-amber-600/60 pl-4 text-xs sm:text-sm italic font-serif text-amber-950/90 dark:text-amber-100/90 leading-relaxed">
          &ldquo;A church that promotes pastoral care and biblical exposition but has no structural place for apostolic pioneering or prophetic challenge will, over time, produce shepherds and teachers and quietly discourage apostles and prophets — regardless of what its website says about being a &lsquo;missional community.&rsquo; The culture is the real policy.&rdquo;
          <footer className="mt-1 font-mono text-[11px] not-italic text-amber-900/70 dark:text-amber-300/70">
            — Alan Hirsch, 5Q / RetroFuture
          </footer>
        </blockquote>
        <p className="text-xs text-amber-900/80 dark:text-amber-200/80 font-body">
          This is the sentence that lands in the room like a stone in a still pond. Marcus has suspected it for three years. Now there is data behind it.
        </p>
      </div>

      {/* Key Callout 2: Suppression vs. Absence — The Critical Distinction */}
      <div className="p-6 rounded-2xl bg-card border border-border-rule space-y-4 shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 font-heading font-bold text-base text-foreground">
            <Key className="w-5 h-5 text-clay shrink-0" />
            <span>🔑 Suppression vs. Absence — The Critical Distinction</span>
          </div>
          <div className="flex items-center gap-2">
            <AbsenceFlag />
            <SuppressionFlag />
          </div>
        </div>

        <p className="text-xs sm:text-sm text-foreground/85 font-serif leading-relaxed">
          Your team has an apostle (Marcus) and a prophet (Priya). They are not absent. But the diagnostic question is harder than presence: <em>are they activated</em>?
        </p>

        <p className="text-xs sm:text-sm text-foreground/85 font-serif leading-relaxed">
          The apostolic drive toward new ground — is it structurally empowered, or is it expressed only in Marcus’s sermon architecture and his private reading list? The prophetic challenge — does it reach the center of team decisions, or does it arrive in the last ten minutes and get absorbed before it lands?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-surface-warm border border-border-rule/80 space-y-2">
            <div className="flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-wider text-amber-900 dark:text-amber-300">
              <EmptyChairIcon className="w-4 h-4" />
              <span>Absence</span>
            </div>
            <p className="text-xs text-muted-foreground font-body leading-relaxed">
              Means the function is <strong>not in the room</strong>. The prescription is recruitment, external voices, or latent phase cultivation.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-subtle border border-border-rule/80 space-y-2">
            <div className="flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-slate-300">
              <MutedMicIcon className="w-4 h-4" />
              <span>Suppression</span>
            </div>
            <p className="text-xs text-muted-foreground font-body leading-relaxed">
              Means the function is <strong>in the room but not in the culture</strong>. Restoration Road does not have an absence problem with Apostle and Prophet — it has a suppression problem. That is a different diagnosis, and a far more hopeful one.
            </p>
          </div>
        </div>
      </div>

            {/* Deep-Dive Bridge to Layer 2 Culture & Suppression Grid */}
      <div className="p-4 rounded-xl bg-surface-subtle border border-border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <span className="font-heading font-semibold text-foreground block">
              Explore Analytical Layer 2: Culture Rewards & Suppression Grid
            </span>
            <span className="text-muted-foreground font-body">
              Compare overt theology against covert reward structures and review the 4-quadrant suppression matrix.
            </span>
          </div>
        </div>
        <Link
          href="/dashboard/diagnostics"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-button bg-card hover:bg-surface-warm border border-border-rule font-semibold text-foreground transition-colors shrink-0 shadow-xs"
        >
          <span>Open Suppression Grid</span>
          <ArrowRight className="w-3.5 h-3.5 text-primary" />
        </Link>
      </div>

      {/* Sequential advance prompt */}
      {onNext && (
        <div className="pt-2 flex justify-end">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-button bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary-hover transition-all shadow-sm"
          >
            <span>Proceed to Panel 7: Maturity Level Assessment</span>
            <span>&rarr;</span>
          </button>
        </div>
      )}
    </section>
  );
}


