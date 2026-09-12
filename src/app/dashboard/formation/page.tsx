'use client';

import React from 'react';
import { TwelveWeekPlan } from '@/components/layer4/TwelveWeekPlan';
import { MemberFormationCards } from '@/components/layer4/MemberFormationCards';
import { TeamHealthScore } from '@/components/layer4/TeamHealthScore';

export default function FormationPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <div className="text-xs uppercase font-mono text-ink-tertiary">
          Layer 4 Formation Engine
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-ink-primary">
          12-Week Discipleship & Formation
        </h1>
        <p className="text-xs sm:text-sm text-ink-secondary max-w-2xl leading-relaxed">
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
