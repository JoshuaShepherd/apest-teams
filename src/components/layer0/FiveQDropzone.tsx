'use client';

import React, { useState } from 'react';
import { UploadCloud, FileText, CheckCircle2, Sparkles } from 'lucide-react';
import { useTeam } from '@/context/TeamContext';
import { TeamMember } from '@/lib/types/apest';

export function FiveQDropzone() {
  const { addMember, state } = useTeam();
  const [isHovered, setIsHovered] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSimulateAddCandidate = () => {
    if (state.members.length >= 8) {
      alert('Maximum team capacity reached.');
      return;
    }

    const candidate: TeamMember = {
      id: `member_${Date.now()}`,
      name: 'Elena Rostova',
      role: 'Apprentice Church Planter',
      tenureYears: 1,
      isStaff: false,
      hasFormalAuthority: false,
      email: 'elena@restorationroad.org',
      status: 'complete',
      profile: {
        primary: 'apostle',
        secondary: 'evangelist',
        scores: {
          apostle: { score: 44, rank: 1, role: 'primary' },
          evangelist: { score: 41, rank: 2, role: 'secondary' },
          prophet: { score: 22, rank: 3, role: 'supplementary' },
          shepherd: { score: 12, rank: 4, role: 'supplementary' },
          teacher: { score: 8, rank: 5, role: 'supplementary' },
        },
        combination: {
          label: 'Catalytic Pioneer (A-E)',
          populationPercent: 4,
          descriptor:
            'Breaks into unreached demographics with relational zeal, rapid prototyping, and pioneering grit.',
        },
        benchmarks: {
          apostle: { you: 44, others: 21, populationPercent: 14 },
          evangelist: { you: 41, others: 25, populationPercent: 18 },
          prophet: { you: 22, others: 23, populationPercent: 18 },
          shepherd: { you: 12, others: 27, populationPercent: 28 },
          teacher: { you: 8, others: 28, populationPercent: 22 },
        },
      },
    };

    addMember(candidate);
    setSuccessMessage('Elena Rostova (A-E) successfully added to roster.');
    setTimeout(() => setSuccessMessage(''), 4000);
  };

  return (
    <div className="space-y-3" data-layer="SOURCE">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsHovered(true);
        }}
        onDragLeave={() => setIsHovered(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsHovered(false);
          handleSimulateAddCandidate();
        }}
        onClick={handleSimulateAddCandidate}
        className={`p-6 sm:p-8 rounded-card border-2 border-dashed text-center transition-all cursor-pointer shadow-sm ${
          isHovered
            ? 'border-primary bg-surface-subtle'
            : 'border-border-rule bg-card hover:border-primary/40 hover:bg-surface-subtle/50'
        }`}
      >
        <div className="max-w-md mx-auto space-y-2 font-body">
          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center">
            <UploadCloud className="w-6 h-6" />
          </div>
          <div className="font-heading font-bold text-sm text-ink-primary">
            Click to upload 5Q Central PDF Report or drag and drop
          </div>
          <p className="text-[11px] text-ink-secondary leading-relaxed">
            Extracts vocational scores (0–50), primary/secondary badges, and national benchmark
            percentiles directly into your roster.
          </p>
          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-3 py-1 rounded-button bg-surface-subtle border border-border-rule text-ink-secondary">
              <Sparkles className="w-3.5 h-3.5 text-clay" />
              Demo: Click to simulate parsing a 5Q Vocational PDF
            </span>
          </div>
        </div>
      </div>

      {successMessage && (
        <div className="p-3.5 rounded-card bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2.5 font-body">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}
    </div>
  );
}
