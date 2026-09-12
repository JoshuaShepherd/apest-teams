import React from 'react';
import { MicOff } from 'lucide-react';

export function EmptyChairIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Backrest */}
      <path d="M7 3h10v8H7z" />
      {/* Seat */}
      <path d="M5 11h14v4H5z" />
      {/* Front legs */}
      <path d="M6 15v6" />
      <path d="M18 15v6" />
      {/* Back legs cross-stretch */}
      <path d="M6 18h12" />
    </svg>
  );
}

export function MutedMicIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return <MicOff className={className} />;
}

export function AbsenceFlag({
  label = 'Absence (Not in the room)',
  compact = false,
}: {
  label?: string;
  compact?: boolean;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-950/20 text-amber-800 dark:text-amber-300 border border-amber-800/30 text-xs font-medium"
      title="Absence: The function is not in the room. Recruitment or external access needed."
    >
      <EmptyChairIcon className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 shrink-0" />
      {!compact && <span>{label}</span>}
    </span>
  );
}

export function SuppressionFlag({
  label = 'Suppression (In the room, not in the culture)',
  compact = false,
}: {
  label?: string;
  compact?: boolean;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/15 text-slate-800 dark:text-slate-300 border border-slate-700/30 text-xs font-medium"
      title="Suppression: The function is in the room but silenced or neutralized by the prevailing culture."
    >
      <MutedMicIcon className="w-3.5 h-3.5 text-slate-700 dark:text-slate-400 shrink-0" />
      {!compact && <span>{label}</span>}
    </span>
  );
}
