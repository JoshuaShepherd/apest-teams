'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Activity,
  GitMerge,
  Sparkles,
  FileSpreadsheet,
} from 'lucide-react';

const NAV_TABS = [
  {
    href: '/dashboard',
    label: 'Overview',
    description: 'Executive Composite',
    icon: LayoutDashboard,
    exact: true,
  },
  {
    href: '/dashboard/portrait',
    label: 'Layer 1: Portrait',
    description: 'Profiles & Radar Wheel',
    icon: Users,
  },
  {
    href: '/dashboard/diagnostics',
    label: 'Layer 2: Diagnostics',
    description: 'Suppression & Activity Inventory',
    icon: Activity,
  },
  {
    href: '/dashboard/correctives',
    label: 'Layer 3: Correctives',
    description: '10 Pairings & Thinking Hats',
    icon: GitMerge,
  },
  {
    href: '/dashboard/formation',
    label: 'Layer 4: Formation',
    description: '12-Week Plan & Member Cards',
    icon: Sparkles,
  },
  {
    href: '/dashboard/export',
    label: 'Board Export',
    description: 'Print-Ready 12-Page PDF',
    icon: FileSpreadsheet,
  },
];

export function Breadcrumbs() {
  const pathname = usePathname();

  return (
    <div className="border-b border-surface-border bg-surface-card px-4 lg:px-8 no-print">
      <div className="max-w-7xl mx-auto flex items-center gap-1 sm:gap-2 overflow-x-auto py-2.5 no-scrollbar">
        {NAV_TABS.map((tab) => {
          const isActive = tab.exact
            ? pathname === tab.href
            : pathname.startsWith(tab.href);
          const Icon = tab.icon;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-ink-primary text-white shadow-sm'
                  : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-subtle'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-ink-tertiary'}`} />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
