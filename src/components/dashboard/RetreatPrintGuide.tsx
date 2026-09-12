'use client';

import React from 'react';
import { Printer, X, ArrowLeft, Scissors } from 'lucide-react';

export function RetreatPrintGuide({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-background/95 backdrop-blur-md p-4 sm:p-8 flex justify-center print:p-0 print:bg-white print:text-black">
      <div className="w-full max-w-4xl bg-card border border-border-rule rounded-2xl p-6 sm:p-12 space-y-10 shadow-2xl print:border-none print:shadow-none print:p-0">
        {/* Screen Toolbar (hidden in print) */}
        <div className="flex items-center justify-between border-b border-border-rule pb-4 no-print">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Interactive Dashboard</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground font-mono hidden sm:inline">
              Optimized for Letter/A4 In-Person Retreat Use
            </span>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-button bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary-hover shadow-md transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print Conversation Guide</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-surface-subtle text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PRINTABLE RETREAT ARTIFACT CONTENT */}
        <div className="space-y-8 font-serif">
          {/* Header */}
          <div className="border-b-2 border-black/20 pb-4 space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-mono text-muted-foreground print:text-black/60 font-bold block">
                  APEST Teams · In-Person Retreat Conversation Artifact
                </span>
                <h1 className="text-3xl font-heading font-bold text-foreground print:text-black">
                  Restoration Road Community Church
                </h1>
                <p className="text-xs text-muted-foreground print:text-black/70 italic mt-1">
                  &ldquo;A mirror for honest self-knowledge, not an operational scorecard.&rdquo;
                </p>
              </div>

              <div className="text-right text-xs font-mono text-muted-foreground print:text-black/60 space-y-0.5">
                <div>Date: _______________</div>
                <div>Location: _______________</div>
                <div>Facilitator: Marcus Webb</div>
              </div>
            </div>
          </div>

          {/* Section 1: The Team Roster Mirror */}
          <div className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-foreground print:text-black border-b border-black/10 pb-1">
              1. Who is in the Room? (The Fivefold Calling)
            </h2>
            <div className="grid grid-cols-3 gap-4 text-xs font-body">
              <div className="p-3 rounded-lg border border-black/20 space-y-1">
                <div className="font-heading font-bold text-sm">Marcus Webb</div>
                <div className="text-muted-foreground print:text-black/60 font-mono">Lead Pastor · <strong>AT</strong></div>
                <div className="text-[11px] italic">Apostolic Pioneer / Theological Architect</div>
              </div>
              <div className="p-3 rounded-lg border border-black/20 space-y-1">
                <div className="font-heading font-bold text-sm">James Okafor</div>
                <div className="text-muted-foreground print:text-black/60 font-mono">Executive Pastor · <strong>ST</strong></div>
                <div className="text-[11px] italic">Shepherding Anchor / Pastoral Architect</div>
              </div>
              <div className="p-3 rounded-lg border border-black/20 space-y-1">
                <div className="font-heading font-bold text-sm">Priya Nair</div>
                <div className="text-muted-foreground print:text-black/60 font-mono">Formation Director · <strong>PS</strong></div>
                <div className="text-[11px] italic">Prophetic Compass / Contemplative Healer</div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-black/5 border border-black/10 text-xs italic">
              <strong>The Structural Gap:</strong> Evangelist (E) has NO primary voice in the room. Priya carries E as tertiary. Outsider accessibility and recruitment currently have no dedicated advocate.
            </div>
          </div>

          {/* Section 2: Large Draw-On Pentagon Diagram */}
          <div className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-foreground print:text-black border-b border-black/10 pb-1">
              2. The Team’s 5Q Shape & Capacity Drawing Canvas
            </h2>
            <p className="text-xs italic text-muted-foreground print:text-black/70">
              Draw your notes or circle where you feel tension in the room directly on the pentagon:
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-xl border border-black/20">
              {/* Pentagon */}
              <div className="w-56 h-56 shrink-0">
                <svg viewBox="0 0 220 220" className="w-full h-full">
                  <circle cx="110" cy="110" r="85" fill="none" stroke="#000" strokeOpacity="0.15" />
                  <polygon
                    points="110,25 190,85 160,180 60,180 30,85"
                    fill="none"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  {/* Actual team shape */}
                  <polygon
                    points="110,40 175,90 125,135 60,180 45,95"
                    fill="#000"
                    fillOpacity="0.08"
                    stroke="#000"
                    strokeWidth="2"
                  />
                  {/* Labels */}
                  <text x="110" y="16" textAnchor="middle" className="text-[11px] font-bold">Apostle (A)</text>
                  <text x="195" y="88" textAnchor="start" className="text-[11px] font-bold">Prophet (P)</text>
                  <text x="170" y="195" textAnchor="start" className="text-[11px] font-bold text-amber-800">Evangelist (E) [Gap]</text>
                  <text x="50" y="195" textAnchor="end" className="text-[11px] font-bold">Shepherd (S) [1.5]</text>
                  <text x="25" y="88" textAnchor="end" className="text-[11px] font-bold">Teacher (T)</text>
                </svg>
              </div>

              {/* Lined notes space beside drawing */}
              <div className="flex-1 w-full space-y-2">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground print:text-black/60">
                  Retreat Observations & Margin Notes:
                </div>
                <div className="space-y-3">
                  <div className="border-b border-black/30 h-6" />
                  <div className="border-b border-black/30 h-6" />
                  <div className="border-b border-black/30 h-6" />
                  <div className="border-b border-black/30 h-6" />
                  <div className="border-b border-black/30 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Tear-Out / Cut-Out Discussion Prompts */}
          <div className="space-y-3 page-break-before">
            <div className="flex items-center justify-between border-b border-black/10 pb-1">
              <h2 className="text-xl font-heading font-bold text-foreground print:text-black">
                3. The Six Discussion Starters (Cut or Tear Out)
              </h2>
              <span className="text-[10px] font-mono text-muted-foreground print:text-black/60 flex items-center gap-1">
                <Scissors className="w-3.5 h-3.5" /> Tear-out retreat prompt format
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-lg border-2 border-dashed border-black/30 space-y-2">
                <div className="font-mono font-bold text-[10px] uppercase">Card 1 · Apostle (Whole Team)</div>
                <p className="italic font-serif leading-relaxed">
                  &ldquo;If we were planting this church today, from scratch, in this neighborhood — what would we do differently? And what does that tell us about what we’re afraid to change?&rdquo;
                </p>
                <div className="pt-4 border-t border-black/10 text-[9px] font-mono text-black/60">Notes: ___________________________</div>
              </div>

              <div className="p-4 rounded-lg border-2 border-dashed border-black/30 space-y-2">
                <div className="font-mono font-bold text-[10px] uppercase">Card 2 · Prophet (Whole Team)</div>
                <p className="italic font-serif leading-relaxed">
                  &ldquo;What is the gap between what we say we are and what we actually are? Name it plainly. No caveats.&rdquo;
                </p>
                <div className="pt-4 border-t border-black/10 text-[9px] font-mono text-black/60">Notes: ___________________________</div>
              </div>

              <div className="p-4 rounded-lg border-2 border-dashed border-black/30 space-y-2">
                <div className="font-mono font-bold text-[10px] uppercase">Card 3 · Evangelist (Whole Team)</div>
                <p className="italic font-serif leading-relaxed">
                  &ldquo;When did someone on this team last lead a person to Jesus in a direct, personal conversation? What does our answer tell us about gospel accessibility in our culture?&rdquo;
                </p>
                <div className="pt-4 border-t border-black/10 text-[9px] font-mono text-black/60">Notes: ___________________________</div>
              </div>

              <div className="p-4 rounded-lg border-2 border-dashed border-black/30 space-y-2">
                <div className="font-mono font-bold text-[10px] uppercase">Card 4 · Shepherd (Whole Team)</div>
                <p className="italic font-serif leading-relaxed">
                  &ldquo;Who in this room is being left behind by our current pace and direction? Who are we not caring for well? And is our answer making us more cautious than we should be?&rdquo;
                </p>
                <div className="pt-4 border-t border-black/10 text-[9px] font-mono text-black/60">Notes: ___________________________</div>
              </div>

              <div className="p-4 rounded-lg border-2 border-dashed border-black/30 space-y-2">
                <div className="font-mono font-bold text-[10px] uppercase">Card 5 · Teacher (Whole Team)</div>
                <p className="italic font-serif leading-relaxed">
                  &ldquo;What does our theology actually say about the people in the Stapleton neighborhood who have never heard the gospel? Do our structures reflect that theology — or contradict it?&rdquo;
                </p>
                <div className="pt-4 border-t border-black/10 text-[9px] font-mono text-black/60">Notes: ___________________________</div>
              </div>

              <div className="p-4 rounded-lg border-2 border-dashed border-black/30 space-y-2">
                <div className="font-mono font-bold text-[10px] uppercase">Card 6 · Apostle (For Marcus Specifically)</div>
                <p className="italic font-serif leading-relaxed">
                  &ldquo;The apostolic leader who cannot name the gap is not leading apostolically — he is managing apostolically. What is the thing you have known for three years that you have not yet said out loud to this team? Say it now.&rdquo;
                </p>
                <div className="pt-4 border-t border-black/10 text-[9px] font-mono text-black/60">Notes: ___________________________</div>
              </div>
            </div>
          </div>

          {/* Section 4: Half-Day Retreat Covenant Agreement Notes */}
          <div className="space-y-2 border-t border-black/20 pt-4">
            <h3 className="font-heading font-bold text-sm">Retreat Discernment Covenant & Next Rhythms:</h3>
            <div className="space-y-3">
              <div className="border-b border-black/30 h-6" />
              <div className="border-b border-black/30 h-6" />
              <div className="border-b border-black/30 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
