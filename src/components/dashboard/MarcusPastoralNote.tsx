'use client';

import React from 'react';
import { X, Heart, Sparkles, BookOpen } from 'lucide-react';

export function MarcusPastoralNote({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border-soft shadow-2xl p-6 sm:p-8 space-y-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-surface-subtle text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 border-b border-border-rule pb-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-bold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Pastoral Letter · For Marcus Webb</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
            One Final Note — To Marcus
          </h2>
          <p className="text-xs font-serif italic text-muted-foreground">
            This is not in the formal dashboard. But it belongs here.
          </p>
        </div>

        <div className="space-y-4 font-serif text-sm sm:text-base text-foreground/90 leading-relaxed">
          <p>
            You have read <em>The Forgotten Ways</em> twice. You have suspected the diagnosis for three years. You have not said it out loud to your team because you did not have language for it that didn’t feel like an accusation.
          </p>
          <p className="font-semibold text-primary">
            You have the language now. You have the data. You have the mirror.
          </p>
          <p>
            The apostolic leader who cannot name the gap is not leading apostolically. He is managing apostolically — which is a sophisticated form of the same institutional drift he is trying to resist.
          </p>
          <p>
            The gap is nameable. The team is ready — more ready than you think. James will hold the room. Priya will receive the permission to move from the last ten minutes to the center. The Evangelist gap is the most urgent structural issue, and it is addressable.
          </p>
          <p className="italic text-foreground">
            The seed of the future is already in the womb of the present.
          </p>
          <p className="font-heading font-bold text-lg text-foreground pt-2">
            Name it. Say it out loud. Let the dashboard do what a mirror does.
          </p>
          <p className="font-heading font-bold text-xl text-primary">
            Then build.
          </p>
        </div>

        <div className="pt-4 border-t border-border-rule flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-button bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity"
          >
            Close & Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
