'use client';

import React, { useEffect } from 'react';
import {
  X,
  Layers,
  ArrowLeft,
  Users,
  Activity,
  GitMerge,
  Sparkles,
  FileSpreadsheet,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';
import { useTeam } from '@/context/TeamContext';

// Layer 1
import { ProfilesSideBySide } from '@/components/layer1/ProfilesSideBySide';
import { TeamWheelPentagon } from '@/components/layer1/TeamWheelPentagon';
import { PairingNetworkMap } from '@/components/layer1/PairingNetworkMap';

// Layer 2
import { CultureRewardsCard } from '@/components/layer2/CultureRewardsCard';
import { SuppressionGridCard } from '@/components/layer2/SuppressionGridCard';
import { ActivityInventoryCard } from '@/components/layer2/ActivityInventoryCard';
import { MovementArcCard } from '@/components/layer2/MovementArcCard';

// Layer 3
import { CorrectiveActivators } from '@/components/layer3/CorrectiveActivators';
import { DiscernmentArchive } from '@/components/layer3/DiscernmentArchive';

// Layer 4
import { TeamHealthScore } from '@/components/layer4/TeamHealthScore';
import { TwelveWeekPlan } from '@/components/layer4/TwelveWeekPlan';
import { MemberFormationCards } from '@/components/layer4/MemberFormationCards';

const DRAWER_META = {
  portrait: {
    title: 'Layer 1: Fivefold Team Portrait & Radar',
    panelAnchor: 'Panel 3: The Team Map (5Q Shape)',
    icon: Users,
    description: 'Level 1–5 concentric radar geometry, individual overlay toggles, and all 10 corrective pairwise distances.',
    standaloneHref: '/dashboard/portrait',
  },
  diagnostics: {
    title: 'Layer 2: Four Systemic Diagnostics',
    panelAnchor: 'Panel 4: The Cascade & Panel 6: Culture Audit',
    icon: Activity,
    description: 'Stated theology vs revealed rewards, 4-quadrant presence vs suppression grid, and functional weekly activity inventory.',
    standaloneHref: '/dashboard/diagnostics',
  },
  correctives: {
    title: 'Layer 3: Correctives & 10 Canonical Pairings',
    panelAnchor: 'Panel 9: The Corrective Pathway',
    icon: GitMerge,
    description: 'Pairwise tension check-in rituals, catalytic activators, and historical team discernment log.',
    standaloneHref: '/dashboard/correctives',
  },
  formation: {
    title: 'Layer 4: 12-Week Formation Roadmap',
    panelAnchor: 'Panel 9: The Corrective Pathway (Horizon 1–3)',
    icon: Sparkles,
    description: 'Composite team health score (0–100), weekly curriculum rhythms, and orbital member growth stages.',
    standaloneHref: '/dashboard/formation',
  },
  export: {
    title: 'Layer 5: Executive Board Dossier',
    panelAnchor: 'Panel 11: The Fullness Vision',
    icon: FileSpreadsheet,
    description: 'Comprehensive 12-page executive report formatted for board governance and retreat facilitation.',
    standaloneHref: '/dashboard/export',
  },
};

export function LayerDeepDiveDrawer() {
  const { activeLayerDrawer, setActiveLayerDrawer } = useTeam();

  useEffect(() => {
    if (!activeLayerDrawer) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveLayerDrawer(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLayerDrawer, setActiveLayerDrawer]);

  if (!activeLayerDrawer) return null;

  const meta = DRAWER_META[activeLayerDrawer];
  const Icon = meta.icon;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Backdrop Click Dismiss */}
      <div
        className="absolute inset-0"
        onClick={() => setActiveLayerDrawer(null)}
        aria-hidden="true"
      />

      {/* Slide-over Drawer Panel */}
      <div className="relative w-full max-w-5xl h-full bg-card border-l border-border-rule shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-4 sm:p-6 border-b border-border-rule bg-surface-warm/50 flex items-center justify-between gap-4 shrink-0">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
                Deep Dive Workbench
              </span>
              <span className="text-muted-foreground text-xs">•</span>
              <span className="text-xs text-muted-foreground font-serif italic">
                Anchored to {meta.panelAnchor}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
              {meta.title}
            </h2>
            <p className="text-xs text-muted-foreground font-body max-w-2xl">
              {meta.description}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={meta.standaloneHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-button bg-card hover:bg-surface-subtle border border-border-rule text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
              title="Open full page in new tab"
            >
              <span>Full Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setActiveLayerDrawer(null)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-button bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary-hover transition-colors shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Mirror</span>
            </button>

            <button
              onClick={() => setActiveLayerDrawer(null)}
              className="p-1.5 rounded-full hover:bg-surface-subtle text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawer Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-8">
          {activeLayerDrawer === 'portrait' && (
            <div className="space-y-8">
              <ProfilesSideBySide />
              <TeamWheelPentagon />
              <PairingNetworkMap />
            </div>
          )}

          {activeLayerDrawer === 'diagnostics' && (
            <div className="space-y-8">
              <CultureRewardsCard />
              <SuppressionGridCard />
              <ActivityInventoryCard />
              <MovementArcCard />
            </div>
          )}

          {activeLayerDrawer === 'correctives' && (
            <div className="space-y-8">
              <CorrectiveActivators />
              <DiscernmentArchive />
            </div>
          )}

          {activeLayerDrawer === 'formation' && (
            <div className="space-y-8">
              <TeamHealthScore />
              <TwelveWeekPlan />
              <MemberFormationCards />
            </div>
          )}

          {activeLayerDrawer === 'export' && (
            <div className="p-6 rounded-2xl bg-surface-subtle border border-border-rule space-y-4 text-center py-12">
              <FileSpreadsheet className="w-12 h-12 text-primary mx-auto" />
              <div className="space-y-1">
                <h3 className="text-lg font-heading font-bold text-foreground">
                  Executive Board Export Ready
                </h3>
                <p className="text-xs text-muted-foreground max-w-md mx-auto">
                  View and print the complete 12-page executive summary formatted for board packets, elders, and retreat facilitation.
                </p>
              </div>
              <div className="pt-2 flex justify-center gap-3">
                <Link
                  href="/dashboard/export"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-button bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary-hover shadow-sm transition-all"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Launch Executive Dossier Canvas</span>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-border-rule bg-surface-subtle/60 flex items-center justify-between text-xs text-muted-foreground shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-mono">Press [ESC] to return to the 11-panel mirror</span>
          </div>
          <button
            onClick={() => setActiveLayerDrawer(null)}
            className="text-primary hover:underline font-semibold"
          >
            Close Deep Dive &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
