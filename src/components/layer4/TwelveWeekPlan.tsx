'use client';

import React, { useState } from 'react';
import { Sparkles, BookOpen, CheckSquare, Square, ChevronDown, ChevronUp } from 'lucide-react';

interface WeekModule {
  week: number;
  phase: string;
  phaseNum: number;
  title: string;
  theme: string;
  reading: string;
  exercise: string;
  completed: boolean;
}

export function TwelveWeekPlan() {
  const [modules, setModules] = useState<WeekModule[]>([
    {
      week: 1,
      phaseNum: 1,
      phase: 'Awareness & Deconstruction',
      title: 'Dismantling the Pastor-Teacher Binary',
      theme: 'Deconstructing the historical Constantinian collapse into pastoral maintenance.',
      reading: '5Q Ch. 1: The Original Intelligence',
      exercise: 'Conduct a silent staff audit of weekly calendars. Calculate the ratio of Shepherd-Teacher time.',
      completed: true,
    },
    {
      week: 2,
      phaseNum: 1,
      phase: 'Awareness & Deconstruction',
      title: 'Naming the Silenced Voices',
      theme: 'Surfacing the structural suppression of the Apostle and Evangelist.',
      reading: 'The Permanent Revolution Ch. 3: The Forgotten Archetypes',
      exercise: 'Give Sofia Reyes 30 minutes of dedicated staff meeting time to cast outward vision without critique.',
      completed: true,
    },
    {
      week: 3,
      phaseNum: 1,
      phase: 'Awareness & Deconstruction',
      title: 'Understanding the Jesus Space ($Pleroma$)',
      theme: 'Viewing Christological deficit not as personal failure, but collective lack.',
      reading: '5Q Ch. 14: Expanding the Jesus Space',
      exercise: 'Examine the team radar chart. Identify the specific ministry capabilities missing in East Denver.',
      completed: true,
    },
    {
      week: 4,
      phaseNum: 1,
      phase: 'Awareness & Deconstruction',
      title: 'The Authority Crosstab Audit',
      theme: 'Separating spiritual calling from institutional veto authority.',
      reading: '5Q Ch. 15: Discipleship Architecture',
      exercise: 'Marcus and James covenant to abstain from vetoing outward initiatives in the first discussion round.',
      completed: false,
    },
    {
      week: 5,
      phaseNum: 2,
      phase: 'Tension Activation & Correctives',
      title: 'The Apostle ↔ Shepherd Humanization Dialogue',
      theme: 'Reconciling bold kingdom pioneering with tender soul care.',
      reading: 'The Permanent Revolution Ch. 7: Corrective Pairings',
      exercise: 'Marcus and James complete their first 60-minute structured dialogue before the Aurora budget vote.',
      completed: false,
    },
    {
      week: 6,
      phaseNum: 2,
      phase: 'Tension Activation & Correctives',
      title: 'The Prophet ↔ Evangelist Encounter',
      theme: 'Uniting divine holiness and covenant integrity with relentless outward hospitality.',
      reading: 'The Forgotten Ways Ch. 4: Communitas on Missional Frontiers',
      exercise: 'Priya and Sofia co-facilitate a neighborhood community meal for non-churched families.',
      completed: false,
    },
    {
      week: 7,
      phaseNum: 2,
      phase: 'Tension Activation & Correctives',
      title: 'Deploying the 5Q Thinking Hats Studio',
      theme: 'Sequential ecclesial discernment on live institutional decisions.',
      reading: '5Q Practical Companion Ch. 9',
      exercise: 'Run a 20-minute Thinking Hats discernment session on church auditorium lease renewal.',
      completed: false,
    },
    {
      week: 8,
      phaseNum: 2,
      phase: 'Tension Activation & Correctives',
      title: 'Midpoint Health Check & Review',
      theme: 'Measuring emerging relational empathy across the furthest Euclidean pairs.',
      reading: 'The Permanent Revolution Ch. 9',
      exercise: 'Audit staff tension. Has healthy conflict replaced passive-aggressive compliance?',
      completed: false,
    },
    {
      week: 9,
      phaseNum: 3,
      phase: 'Systemic Alignment & Reproduction',
      title: 'The Operational Activity Shift',
      theme: 'Re-allocating 20% of weekly staff payroll hours from maintenance to pioneering.',
      reading: 'The Forgotten Ways Ch. 6: Organic Systems',
      exercise: 'Cancel two recurring internal meetings and replace them with street hospitality blocks.',
      completed: false,
    },
    {
      week: 10,
      phaseNum: 3,
      phase: 'Systemic Alignment & Reproduction',
      title: 'Decentralizing Discipleship to Missional Households',
      theme: 'Releasing ordinary disciples to lead without staff micromanagement.',
      reading: '5Q Ch. 16: Movemental Reproduction',
      exercise: 'Commission 2 pilot missional households in Aurora with lay host leaders.',
      completed: false,
    },
    {
      week: 11,
      phaseNum: 3,
      phase: 'Systemic Alignment & Reproduction',
      title: 'Individual Ambidexterity Stretch',
      theme: 'Evaluating progress on each leader’s orbital growth phase.',
      reading: 'The Permanent Revolution Ch. 11',
      exercise: 'Daniel leads a theological prayer vigil; Sofia teaches conversational evangelism.',
      completed: false,
    },
    {
      week: 12,
      phaseNum: 3,
      phase: 'Systemic Alignment & Reproduction',
      title: 'The Annual Ecclesial Covenant',
      theme: 'Ratifying a 12-month team covenant and scheduling the quarterly review cycle.',
      reading: '5Q Conclusion: Attaining to the Fullness',
      exercise: 'Conduct the 4-movement Quarterly Review Wizard and sign the team covenant.',
      completed: false,
    },
  ]);

  const [expandedWeek, setExpandedWeek] = useState<number | null>(4);

  const toggleComplete = (weekNum: number) => {
    setModules((prev) =>
      prev.map((m) => (m.week === weekNum ? { ...m, completed: !m.completed } : m))
    );
  };

  const completedCount = modules.filter((m) => m.completed).length;
  const progressPercent = Math.round((completedCount / modules.length) * 100);

  return (
    <div className="p-6 sm:p-8 rounded-card bg-card border border-border-soft shadow-card space-y-6" data-layer="INTERPRETED">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-heading font-bold text-xl text-ink-primary">
            12-Week Team <span className="italic font-normal text-primary">Formation Roadmap</span>
          </h3>
          <p className="text-xs text-ink-secondary font-body">
            A step-by-step curriculum to move from static institutional equilibrium into self-correcting
            movemental discipleship.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold text-ink-primary">
            {completedCount} of 12 Weeks Complete ({progressPercent}%)
          </span>
          <div className="w-24 h-2 rounded-full bg-surface-muted overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-3 text-xs font-body">
        {modules.map((m) => {
          const isExpanded = expandedWeek === m.week;

          return (
            <div
              key={m.week}
              className={`rounded-xl border transition-all ${
                m.completed
                  ? 'bg-emerald-50/40 border-emerald-200/80'
                  : isExpanded
                  ? 'bg-surface-subtle border-primary/40 shadow-sm'
                  : 'bg-card border-border-rule hover:border-primary/20'
              }`}
            >
              <div
                className="p-4 flex items-center justify-between gap-3 cursor-pointer"
                onClick={() => setExpandedWeek(isExpanded ? null : m.week)}
              >
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleComplete(m.week);
                    }}
                    className="text-ink-tertiary hover:text-emerald-700 transition-colors"
                  >
                    {m.completed ? (
                      <CheckSquare className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Square className="w-4 h-4 text-ink-tertiary" />
                    )}
                  </button>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase text-ink-tertiary">
                        Week {m.week}
                      </span>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-button bg-surface-subtle border border-border-rule text-ink-secondary">
                        Phase {m.phaseNum}: {m.phase}
                      </span>
                    </div>
                    <div
                      className={`font-heading font-bold text-sm ${
                        m.completed ? 'text-emerald-950 line-through opacity-80' : 'text-ink-primary'
                      }`}
                    >
                      {m.title}
                    </div>
                  </div>
                </div>

                <div className="text-ink-tertiary">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>

              {isExpanded && (
                <div className="px-4 pb-4 pt-1 border-t border-border-rule space-y-3">
                  <p className="text-ink-secondary leading-relaxed">{m.theme}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-lg bg-card border border-border-rule space-y-1">
                      <div className="font-heading font-semibold text-primary flex items-center gap-1.5 text-xs">
                        <BookOpen className="w-3.5 h-3.5 text-primary" />
                        <span>Prescribed Theological Reading</span>
                      </div>
                      <p className="text-ink-secondary text-[11px]">{m.reading}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-card border border-border-rule space-y-1">
                      <div className="font-heading font-semibold text-clay flex items-center gap-1.5 text-xs">
                        <Sparkles className="w-3.5 h-3.5 text-clay" />
                        <span>Practical Staff Exercise</span>
                      </div>
                      <p className="text-ink-secondary text-[11px]">{m.exercise}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
