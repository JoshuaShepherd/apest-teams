'use client';

import React from 'react';
import { TopBar } from '@/components/shell/TopBar';
import { Breadcrumbs } from '@/components/shell/Breadcrumbs';
import { MemberProfileDrawer } from '@/components/shell/MemberProfileDrawer';
import { MissionalCopilotDrawer } from '@/components/layer5/MissionalCopilotDrawer';
import { ThinkingHatsStudio } from '@/components/layer3/ThinkingHatsStudio';
import { QuarterlyReviewWizard } from '@/components/layer5/QuarterlyReviewWizard';
import { useTeam } from '@/context/TeamContext';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { provenance } = useTeam();

  return (
    <div
      data-provenance={provenance ? 'on' : 'off'}
      className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary transition-colors"
    >
      <TopBar />
      <Breadcrumbs />
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>

      {/* Persistent Drawers & Modals */}
      <MemberProfileDrawer />
      <MissionalCopilotDrawer />
      <ThinkingHatsStudio />
      <QuarterlyReviewWizard />
    </div>
  );
}
