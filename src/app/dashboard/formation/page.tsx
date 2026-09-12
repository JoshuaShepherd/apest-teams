'use client';

import React from 'react';
import { TwelveWeekPlan } from '@/components/layer4/TwelveWeekPlan';
import { MemberFormationCards } from '@/components/layer4/MemberFormationCards';
import { TeamHealthScore } from '@/components/layer4/TeamHealthScore';

export default function FormationPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-button bg-surface-subtle border border-border-rule text-xs font-mono tracking-wider text-ink-secondary">
          Layer 4 Formation Engine
        </div>
        <h1 className="text-2xl sm:text-4xl font-heading font-bold text-ink-primary tracking-tight">
          12-Week Discipleship & <span className="italic font-normal text-primary">Formation</span>
        </h1>
        <p className="text-xs sm:text-sm text-ink-secondary max-w-2xl leading-relaxed font-body">
          Operationalizing the fivefold ministry through structured team rhythms, individual
          orbital growth phases, and longitudinal health scoring.
        </p>
      </div>

      {/* Unified Team Health Score */}
      <TeamHealthScore />

      {/* 12-Week Roadmap */}
      <TwelveWeekPlan />

      {/* Individual Orbital Member Formation Cards */}
      <MemberFormationCards />
    </div>
  );
}
