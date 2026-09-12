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
    icon: LayoutDashboard,
    exact: true,
  },
  {
    href: '/dashboard/portrait',
    label: 'Layer 1: Portrait',
    icon: Users,
  },
  {
    href: '/dashboard/diagnostics',
    label: 'Layer 2: Diagnostics',
    icon: Activity,
  },
  {
    href: '/dashboard/correctives',
    label: 'Layer 3: Correctives',
    icon: GitMerge,
  },
  {
    href: '/dashboard/formation',
    label: 'Layer 4: Formation',
    icon: Sparkles,
  },
  {
    href: '/dashboard/export',
    label: 'Board Export',
    icon: FileSpreadsheet,
  },
];

export function Breadcrumbs() {
  const pathname = usePathname();

  return (
    <div className="border-b border-border-rule bg-card/60 backdrop-blur px-4 lg:px-8 no-print">
      <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto py-2.5 no-scrollbar">
        {NAV_TABS.map((tab) => {
          const isActive = tab.exact
            ? pathname === tab.href
            : pathname.startsWith(tab.href);
          const Icon = tab.icon;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-button text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-accent' : 'text-muted-foreground/70'}`} />
              <span className="font-body">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
