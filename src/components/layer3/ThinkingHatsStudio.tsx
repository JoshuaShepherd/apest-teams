'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Compass,
  Clock,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  Send,
} from 'lucide-react';
import { useTeam } from '@/context/TeamContext';
import { ApestFunction } from '@/lib/types/apest';

const HATS: Array<{
  func: ApestFunction;
  name: string;
  color: string;
  bgLight: string;
  badge: string;
  lens: string;
  coreQuestion: string;
  prompts: string[];
}> = [
  {
    func: 'apostle',
    name: 'The Apostolic Hat',
    color: 'text-rose-800',
    bgLight: 'bg-rose-50 border-rose-200',
    badge: 'bg-rose-100 text-rose-800',
    lens: 'Pioneering, Risk, Scalability, and Kingdom Horizons',
    coreQuestion: 'How does this decision expand the frontier of God’s kingdom into new territory?',
    prompts: [
      'What new ground are we breaking that we cannot control?',
      'Is this decision scalable and reproducible by ordinary disciples?',
      'Where is fear of risk holding us in maintenance?',
    ],
  },
  {
    func: 'prophet',
    name: 'The Prophetic Hat',
    color: 'text-indigo-800',
    bgLight: 'bg-indigo-50 border-indigo-200',
    badge: 'bg-indigo-100 text-indigo-800',
    lens: 'Covenant Fidelity, Divine Presence, Justice, and Heart Purity',
    coreQuestion: 'What is the Holy Spirit saying to us, and where are our compromises?',
    prompts: [
      'Are we protecting church numbers rather than obeying God’s truth?',
      'What idols of comfort, power, or reputation are exposed here?',
      'Does this decision honor the poor, marginalized, and silent?',
    ],
  },
  {
    func: 'evangelist',
    name: 'The Evangelistic Hat',
    color: 'text-amber-800',
    bgLight: 'bg-amber-50 border-amber-200',
    badge: 'bg-amber-100 text-amber-800',
    lens: 'Hospitality, Cultural Accessibility, and Relational Thresholds',
    coreQuestion: 'How does this sound to someone outside the church who does not believe?',
    prompts: [
      'Are we using insider Christian jargon that excludes the stranger?',
      'How does this create hospitable tables for genuine friendship?',
      'What makes this good news rather than moralistic burden?',
    ],
  },
  {
    func: 'shepherd',
    name: 'The Shepherding Hat',
    color: 'text-emerald-800',
    bgLight: 'bg-emerald-50 border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-800',
    lens: 'Communal Care, Soul Protection, Safety, and Vulnerability',
    coreQuestion: 'What is the human and relational cost of this decision on real souls?',
    prompts: [
      'Who is vulnerable to getting burned out or discarded in this process?',
      'How will we care for and shepherd the people executing this?',
      'Does this nurture deep, long-term community or shallow activity?',
    ],
  },
  {
    func: 'teacher',
    name: 'The Teaching Hat',
    color: 'text-sky-800',
    bgLight: 'bg-sky-50 border-sky-200',
    badge: 'bg-sky-100 text-sky-800',
    lens: 'Doctrinal Integrity, Systemic Clarity, and Durable Wisdom',
    coreQuestion: 'Is this grounded in Scripture and built to last across generations?',
    prompts: [
      'What are the theological and philosophical foundations of this plan?',
      'How will disciples be grounded in sound doctrine through this?',
      'Are the definitions and organizational processes crystal clear?',
    ],
  },
];

export function ThinkingHatsStudio() {
  const { isThinkingHatsOpen, setIsThinkingHatsOpen, addDecision } = useTeam();

  const [decisionTitle, setDecisionTitle] = useState(
    'Discerning the Launch of 3 Neighborhood Missional Households in Aurora'
  );
  const [activeHatIndex, setActiveHatIndex] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(180); // 3 min per hat
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [hatNotes, setHatNotes] = useState<Record<ApestFunction, string[]>>({
    apostle: ['Foothold into East Colfax immigrant corridor; high reproduction potential.'],
    prophet: ['Demands deep prayer retreat before commissioning host leaders.'],
    evangelist: ['Host homes must prioritize open dining tables for non-Christian neighbors.'],
    shepherd: ['Establish bi-weekly pastor care triad to prevent house leader burnout.'],
    teacher: ['Draft a 4-week micro-church foundation syllabus with clear biblical roots.'],
  });
  const [currentNoteInput, setCurrentNoteInput] = useState('');
  const [covenantSummary, setCovenantSummary] = useState(
    'We covenant together to pilot 2 missional households in Aurora for 6 months. James stewards bi-weekly pastor care; Marcus commissions outreach; Sofia trains hosts.'
  );

  const activeHat = HATS[activeHatIndex];

  // Timer countdown
  useEffect(() => {
    let interval: any;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => setTimerSeconds((prev) => prev - 1), 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  if (!isThinkingHatsOpen) return null;

  const handleAddNote = () => {
    if (!currentNoteInput.trim()) return;
    setHatNotes((prev) => ({
      ...prev,
      [activeHat.func]: [...prev[activeHat.func], currentNoteInput.trim()],
    }));
    setCurrentNoteInput('');
  };

  const handleSaveToArchive = () => {
    addDecision({
      id: `dec_${Date.now()}`,
      title: decisionTitle,
      date: new Date().toISOString().split('T')[0],
      context: 'Discerned through 5Q APEST Thinking Hats Studio.',
      notes: hatNotes,
      covenantAgreement: covenantSummary,
    });
    setIsThinkingHatsOpen(false);
  };

  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in no-print">
      <div
        className="w-full max-w-4xl bg-surface-card rounded-2xl shadow-2xl border border-surface-border overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-surface-border bg-surface-subtle flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-900 text-white flex items-center justify-center">
              <Compass className="w-6 h-6 text-indigo-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-ink-primary">
                  5Q Thinking Hats Facilitation Studio
                </h3>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white border border-surface-border text-ink-secondary">
                  Based on Edward de Bono & Alan Hirsch
                </span>
              </div>
              <p className="text-xs text-ink-secondary">
                Sequential ecclesial discernment examining a decision through each of the five voices.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsThinkingHatsOpen(false)}
            className="p-1.5 rounded-lg text-ink-secondary hover:text-ink-primary hover:bg-surface-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Central Decision Bar */}
        <div className="px-6 py-3 border-b border-surface-border bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex-1 flex items-center gap-2">
            <span className="font-semibold text-ink-secondary whitespace-nowrap">Focal Decision:</span>
            <input
              type="text"
              value={decisionTitle}
              onChange={(e) => setDecisionTitle(e.target.value)}
              className="flex-1 px-3 py-1.5 rounded-md border border-surface-border bg-surface-subtle font-medium text-ink-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-ink-primary"
            />
          </div>

          {/* Timer Widget */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-surface-subtle border border-surface-border">
            <Clock className="w-3.5 h-3.5 text-ink-secondary" />
            <span className="font-mono font-bold text-ink-primary">{formatTime(timerSeconds)}</span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="p-1 text-ink-secondary hover:text-ink-primary"
            >
              {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => {
                setIsTimerRunning(false);
                setTimerSeconds(180);
              }}
              className="p-1 text-ink-tertiary hover:text-ink-secondary"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* 5 Hat Nav Tabs */}
        <div className="px-6 pt-3 border-b border-surface-border bg-surface-subtle flex items-center gap-2 overflow-x-auto">
          {HATS.map((hat, index) => {
            const isActive = activeHatIndex === index;
            const noteCount = hatNotes[hat.func].length;

            return (
              <button
                key={hat.func}
                onClick={() => {
                  setActiveHatIndex(index);
                  setTimerSeconds(180);
                  setIsTimerRunning(false);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg text-xs font-semibold whitespace-nowrap border-b-2 transition-all ${
                  isActive
                    ? 'bg-white border-ink-primary text-ink-primary shadow-sm'
                    : 'border-transparent text-ink-secondary hover:text-ink-primary'
                }`}
              >
                <span>{hat.name}</span>
                {noteCount > 0 && (
                  <span className="w-4 h-4 rounded-full bg-surface-muted text-[10px] flex items-center justify-center font-mono">
                    {noteCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Hat Workspace */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Active Hat Core Question & Lens Banner */}
          <div className={`p-5 rounded-xl border ${activeHat.bgLight} space-y-2`}>
            <div className="flex items-center justify-between">
              <span className={`text-xs font-bold uppercase tracking-wider ${activeHat.color}`}>
                Active Lens: {activeHat.lens}
              </span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${activeHat.badge}`}>
                Step {activeHatIndex + 1} of 5
              </span>
            </div>
            <h4 className="text-base font-bold text-ink-primary font-serif">
              "{activeHat.coreQuestion}"
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-2">
              {activeHat.prompts.map((p, i) => (
                <div key={i} className="text-xs text-ink-secondary bg-white/70 p-2.5 rounded-lg border border-surface-border">
                  • {p}
                </div>
              ))}
            </div>
          </div>

          {/* Captured Notes for Current Hat */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h5 className="text-xs font-mono uppercase text-ink-tertiary">
                Team Discernment Notes ({activeHat.name})
              </h5>
            </div>

            <div className="space-y-2">
              {hatNotes[activeHat.func].map((note, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-surface-subtle border border-surface-border text-xs text-ink-primary flex items-start justify-between gap-3"
                >
                  <span className="flex-1">{note}</span>
                  <button
                    onClick={() =>
                      setHatNotes((prev) => ({
                        ...prev,
                        [activeHat.func]: prev[activeHat.func].filter((_, i) => i !== idx),
                      }))
                    }
                    className="text-ink-tertiary hover:text-ink-secondary"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}

              {/* Note Input */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="text"
                  value={currentNoteInput}
                  onChange={(e) => setCurrentNoteInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddNote()}
                  placeholder={`Add a team insight from the ${activeHat.name} perspective...`}
                  className="flex-1 px-3 py-2 text-xs rounded-lg border border-surface-border bg-white focus:outline-none focus:ring-1 focus:ring-ink-primary"
                />
                <button
                  onClick={handleAddNote}
                  className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-ink-primary text-white hover:bg-ink-secondary transition-colors"
                >
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Final Covenant Agreement (Visible on step 5 or always accessible) */}
          <div className="p-4 rounded-xl bg-surface-subtle border border-surface-border space-y-2">
            <h5 className="text-xs font-mono uppercase text-ink-tertiary">
              Unified Team Covenant & Strategic Alignment
            </h5>
            <textarea
              value={covenantSummary}
              onChange={(e) => setCovenantSummary(e.target.value)}
              rows={2}
              className="w-full p-2.5 text-xs rounded-lg border border-surface-border bg-white focus:outline-none focus:ring-1 focus:ring-ink-primary font-serif leading-relaxed"
              placeholder="Synthesize the collective discernment into a covenant agreement..."
            />
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="p-4 border-t border-surface-border bg-surface-subtle flex items-center justify-between">
          <button
            onClick={() => setActiveHatIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeHatIndex === 0}
            className="px-3.5 py-1.5 text-xs font-medium rounded-lg border border-surface-border bg-white hover:bg-surface-muted disabled:opacity-30 text-ink-primary transition-colors"
          >
            Previous Hat
          </button>

          <div className="flex items-center gap-2">
            {activeHatIndex < 4 ? (
              <button
                onClick={() => {
                  setActiveHatIndex((prev) => prev + 1);
                  setTimerSeconds(180);
                  setIsTimerRunning(false);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-ink-primary text-white hover:bg-ink-secondary transition-colors"
              >
                <span>Next Hat</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleSaveToArchive}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 transition-colors shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Save to Discernment Archive</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
