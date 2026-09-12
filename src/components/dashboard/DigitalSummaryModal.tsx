'use client';

import React, { useState } from 'react';
import { X, Copy, Check, Download, FileText, Share2 } from 'lucide-react';

export function DigitalSummaryModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const markdownContent = `# APEST Teams Mirror Summary — Restoration Road Community Church
Date: Half-Day Leadership Retreat
Team Context: 9-year-old Denver church plant; plateaued at ~340 adults; ST-dominant operational culture.

---

## 1. Identity & Composition
- **Marcus Webb** (Lead Pastor): Apostle-Teacher (AT) — Primary Apostle (46), Secondary Teacher (35)
- **James Okafor** (Executive Pastor): Shepherd-Teacher (ST) — Primary Shepherd (48), Secondary Teacher (37)
- **Priya Nair** (Formation Director): Prophet-Shepherd (PS) — Primary Prophet (47), Secondary Shepherd (36), Tertiary Evangelist (24)
- **The Core Finding**: No leader carries Evangelist as primary calling. The E circle is unowned in the room.

## 2. The 5Q Shape & Capacity Gap
- Apostle: 1.0 (Marcus primary)
- Prophet: 1.0 (Priya primary)
- Evangelist: 0.25 (Priya tertiary) — **Thin / Underrepresented (Empty Chair)**
- Shepherd: 1.5 (James primary 1.0 + Priya secondary 0.5) — **Dominant Weight**
- Teacher: 1.0 (James secondary 0.5 + Marcus secondary 0.5)

## 3. Key Systemic Diagnostics
1. **The Evangelist Gap**: The grace-note, gospel accessibility, and outsider recruitment has no primary advocate in the room.
2. **The Shepherd Cushion**: High shepherding intelligence naturally pulls toward harmony and cushions apostolic/prophetic challenges.
3. **The Cascade Strain (P -> E)**: Priya's strong prophetic voice lacks an evangelist to receive and soften it with grace, risking the perception of demand without good news.
4. **Suppression vs. Absence**: Apostle and Prophet are in the room but structurally suppressed by the 80% ST calendar mass.

## 4. Immediate 30-Day Action
- **Name the gap publicly**: Marcus calls a half-day retreat solely to read the dashboard mirror together without rushing to action items.
- James holds the room in safety while the diagnosis lands.
- Priya moves from the last 10 minutes into the center of discernment.

## 5. The 6 Conversation Starters
1. (A) If we were planting from scratch today, what would we do differently?
2. (P) What is the gap between what we say we are and what we actually are?
3. (E) When did someone on this team last lead a person to Jesus directly?
4. (S) Who is being left behind by our current pace and direction?
5. (T) What does our theology say about our unchurched neighbors vs our structures?
6. (A/Marcus) What have you known for three years that you have not said out loud?
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border-soft shadow-2xl p-6 sm:p-8 space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-surface-subtle text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 border-b border-border-rule pb-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-surface-subtle border border-border-rule text-xs font-mono font-bold text-foreground">
            <FileText className="w-3.5 h-3.5 text-primary" />
            <span>Format A: Digital Summary Artifact (Async Review)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
            Digital Summary Artifact
          </h2>
          <p className="text-xs font-serif italic text-muted-foreground">
            Designed for team members to read, annotate, and digest asynchronously before meeting in the room.
          </p>
        </div>

        {/* Content Box */}
        <div className="p-4 rounded-xl bg-surface-subtle border border-border-rule text-xs font-mono text-foreground/90 overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-[50vh]">
          {markdownContent}
        </div>

        {/* Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleCopy}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-button bg-card border border-border-rule hover:bg-surface-warm text-xs font-semibold transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied Markdown' : 'Copy Full Summary'}</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-button bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary-hover transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
