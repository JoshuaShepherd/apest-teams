'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';

export const CHRISTOLOGICAL_ANCHORS = [
  {
    key: 'apostle',
    role: 'Apostolic',
    color: '#9A5B2D', // Deep Ochre
    text: 'The apostolic carries the pioneering intelligence of Jesus.',
    reference: 'Ephesians 4:11 · Hebrews 3:1',
  },
  {
    key: 'prophet',
    role: 'Prophetic',
    color: '#3E5C76', // Slate Blue
    text: 'The prophet carries the discernment and justice-edge of Jesus.',
    reference: 'Ephesians 4:11 · Luke 4:18–19',
  },
  {
    key: 'evangelist',
    role: 'Evangelistic',
    color: '#D97706', // Amber
    text: 'The evangelist carries the grace-note and recruitment impulse of Jesus.',
    reference: 'Ephesians 4:11 · Luke 19:10',
  },
  {
    key: 'shepherd',
    role: 'Shepherding',
    color: '#2D6A4F', // Forest Green
    text: 'The shepherd carries the care and presence of Jesus.',
    reference: 'Ephesians 4:11 · John 10:11',
  },
  {
    key: 'teacher',
    role: 'Teaching',
    color: '#5C5F66', // Warm Grey
    text: 'The teacher carries the wisdom and formation intelligence of Jesus.',
    reference: 'Ephesians 4:11 · Matthew 7:28–29',
  },
];

export function ChristologicalBanner({
  forcedIndex,
  className = '',
}: {
  forcedIndex?: number;
  className?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(forcedIndex ?? 0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (forcedIndex !== undefined) {
      setCurrentIndex(forcedIndex);
      return;
    }

    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CHRISTOLOGICAL_ANCHORS.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [forcedIndex, isPaused]);

  const active = CHRISTOLOGICAL_ANCHORS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CHRISTOLOGICAL_ANCHORS.length) % CHRISTOLOGICAL_ANCHORS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CHRISTOLOGICAL_ANCHORS.length);
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`border-b border-border-rule/80 bg-surface-subtle/70 backdrop-blur-sm px-4 py-2 text-xs transition-colors ${className}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <span
            className="w-2 h-2 rounded-full shrink-0 transition-colors"
            style={{ backgroundColor: active.color }}
          />
          <span className="font-heading font-bold uppercase tracking-wider text-[10px] text-muted-foreground shrink-0">
            Christological Anchor
          </span>
          <span className="text-border-rule hidden sm:inline">|</span>
          <p className="text-foreground/90 font-serif italic text-xs sm:text-sm truncate">
            &ldquo;{active.text}&rdquo;
          </p>
          <span className="text-[10px] font-mono text-muted-foreground hidden lg:inline shrink-0">
            ({active.reference})
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <div className="hidden md:flex items-center gap-1 mr-2">
            {CHRISTOLOGICAL_ANCHORS.map((anchor, idx) => (
              <button
                key={anchor.key}
                onClick={() => setCurrentIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentIndex ? 'w-4 bg-foreground' : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
                title={anchor.role}
              />
            ))}
          </div>
          <button
            onClick={handlePrev}
            className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            title="Previous anchor"
          >
            <ChevronLeft className="w-3 h-3" />
          </button>
          <button
            onClick={handleNext}
            className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            title="Next anchor"
          >
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
