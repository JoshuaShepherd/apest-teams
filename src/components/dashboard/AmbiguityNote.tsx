import React from 'react';
import { HelpCircle } from 'lucide-react';

export function AmbiguityNote({
  customNote,
  className = '',
}: {
  customNote?: string;
  className?: string;
}) {
  return (
    <div
      className={`p-3 rounded-lg bg-surface-subtle/80 border border-border-rule/80 flex items-start gap-2.5 text-xs text-muted-foreground ${className}`}
    >
      <HelpCircle className="w-4 h-4 text-clay shrink-0 mt-0.5" />
      <p className="font-serif italic leading-relaxed text-foreground/80">
        {customNote ||
          'The data here is genuinely ambiguous. We have named the range rather than forcing a single reading. Your team’s conversation is the instrument that resolves this — not the algorithm.'}
      </p>
    </div>
  );
}
