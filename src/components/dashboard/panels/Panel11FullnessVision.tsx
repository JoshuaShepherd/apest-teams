'use client';

import React from 'react';
import { Sparkles, Heart, Printer, RotateCcw, ArrowUpRight, FileSpreadsheet, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Panel11FullnessVision({
  onRestart,
  onPrintExport,
}: {
  onRestart?: () => void;
  onPrintExport?: () => void;
}) {
  // Ideal Balanced Pentagon Geometry
  const cx = 130;
  const cy = 130;
  const r = 90;
  const angles = [-90, -18, 54, 126, 198]; // A, P, E, S, T
  const coords = angles.map((a) => {
    const rad = (a * Math.PI) / 180;
    return `${(cx + r * Math.cos(rad)).toFixed(1)},${(cy + r * Math.sin(rad)).toFixed(1)}`;
  });
  const pentagonPoints = coords.join(' ');

  const vertices = [
    { key: 'A', name: 'Apostle', color: '#9A5B2D', x: cx, y: cy - r - 12 },
    { key: 'P', name: 'Prophet', color: '#3E5C76', x: cx + r + 20, y: cy - 25 },
    { key: 'E', name: 'Evangelist', color: '#D97706', x: cx + r * 0.6 + 25, y: cy + r + 10 },
    { key: 'S', name: 'Shepherd', color: '#2D6A4F', x: cx - r * 0.6 - 25, y: cy + r + 10 },
    { key: 'T', name: 'Teacher', color: '#5C5F66', x: cx - r - 20, y: cy - 25 },
  ];

  return (
    <section
      id="panel-11"
      className="p-6 sm:p-10 rounded-panel bg-card border border-border-rule shadow-card space-y-10 transition-all text-foreground"
    >
      {/* Panel Header */}
      <div className="space-y-3 border-b border-border-rule/60 pb-6 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Final Panel · 11 of 11</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground tracking-tight">
          The Fullness Vision · What You Are Being Called Toward
        </h2>
        <p className="text-sm font-serif italic text-muted-foreground leading-relaxed">
          Closing the dashboard not with a summary, but with a theological and apostolic vision.
        </p>
      </div>

      {/* Balanced Pentagon Illustration Centerpiece */}
      <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-surface-warm/50 border border-border-rule max-w-md mx-auto space-y-4 shadow-sm">
        <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-bold text-center">
          The Pleroma (Fullness of Christ) — All Five in Harmonic Equilibrium
        </div>

        <div className="relative w-64 h-64 flex items-center justify-center">
          <svg viewBox="0 0 260 260" className="w-full h-full overflow-visible">
            {/* Concentric rings */}
            <circle cx={cx} cy={cy} r={r * 0.4} fill="none" stroke="currentColor" strokeOpacity="0.08" />
            <circle cx={cx} cy={cy} r={r * 0.7} fill="none" stroke="currentColor" strokeOpacity="0.08" />
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeOpacity="0.12" />

            {/* Radiant golden balanced fill */}
            <polygon
              points={pentagonPoints}
              fill="rgba(154, 91, 45, 0.2)"
              stroke="#9A5B2D"
              strokeWidth="2.5"
            />

            {/* Inner star pattern connecting all five */}
            {angles.map((a, i) => {
              const rad = (a * Math.PI) / 180;
              const x1 = cx + r * Math.cos(rad);
              const y1 = cy + r * Math.sin(rad);
              return angles.map((a2, j) => {
                if (i >= j) return null;
                const rad2 = (a2 * Math.PI) / 180;
                const x2 = cx + r * Math.cos(rad2);
                const y2 = cy + r * Math.sin(rad2);
                return (
                  <line
                    key={`${i}-${j}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#9A5B2D"
                    strokeOpacity="0.15"
                    strokeWidth="1"
                  />
                );
              });
            })}

            {/* Vertices */}
            {vertices.map((v, i) => {
              const pt = coords[i].split(',');
              const px = parseFloat(pt[0]);
              const py = parseFloat(pt[1]);

              return (
                <g key={v.key}>
                  <circle cx={px} cy={py} r={6} fill={v.color} stroke="#fff" strokeWidth="2" />
                  <text
                    x={v.x}
                    y={v.y}
                    textAnchor="middle"
                    className="text-[12px] font-heading font-bold"
                    fill={v.color}
                  >
                    {v.key} · {v.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <p className="text-xs font-serif italic text-muted-foreground text-center max-w-xs">
          Not as a rebuke of where the team currently is, but as a living portrait of what is possible.
        </p>
      </div>

      {/* Vision Statement Copy (Exact copy from spec) */}
      <div className="max-w-3xl mx-auto space-y-6 text-sm sm:text-base leading-relaxed font-serif text-foreground/90">
        <p className="text-lg sm:text-xl font-heading font-bold text-foreground text-center">
          This is what you are being called toward.
        </p>

        <div className="space-y-4 pl-4 border-l-2 border-primary/40 italic">
          <p>
            A team where Marcus’s apostolic frameworks are humanized by James’s shepherd wisdom — and where James’s pastoral care is extended toward new people by Marcus’s drive toward new ground.
          </p>
          <p>
            A team where Priya’s prophetic challenge lands at the center of every decision — not in the last ten minutes — and is received with the grace-note of an evangelist who believes the good news is good before it is demanding.
          </p>
          <p>
            A team where the Evangelist gap is filled — not by a program, not by an outreach initiative, but by a person whose primary intelligence is accessibility, recruitment, and the grace of God made tangible to people who have not yet encountered it.
          </p>
          <p>
            A team whose staff meetings sound less like a nonprofit operations review and more like a war council of missionaries planning their next move into new ground.
          </p>
          <p>
            A team whose food pantry is a relational outpost, not a service delivery mechanism.
          </p>
          <p>
            A team whose Sunday gathering is excellent — and whose Monday through Saturday is the reason the Sunday gathering matters.
          </p>
        </div>

        <p>
          This is not an idealized picture of a perfect team. It is a picture of a team that is moving — toward the fullness of Christ, toward the maturity described in Ephesians 4, toward the kind of community that the New Testament assumes as normal and that most of Western Christianity has quietly decided is impossible.
        </p>

        <p>
          It is not impossible. It is recoverable. The functions are already present — constitutionally given by Christ in his ascension, distributed across the body, waiting to be activated rather than installed. The Restoration Road team has an apostle. It has a prophet. It has a shepherd. It has teachers. What it lacks is the structural permission and the deliberate corrective attention to let all five operate at full capacity.
        </p>

        <p>
          The Evangelist is coming. The question is whether the team will be ready to receive her — or him — when she arrives. And whether the culture will have changed enough by then to let the evangelistic intelligence actually change the room.
        </p>

        <p>
          That is the work. Not a program. Not a restructure. Not a strategic planning retreat with color-coded sticky notes on a whiteboard.
        </p>

        <div className="p-6 rounded-2xl bg-surface-warm/80 border border-border-soft text-center space-y-2">
          <p className="text-xl sm:text-2xl font-heading font-bold text-foreground">
            A team. Learning to be the whole body of Christ together.
          </p>
          <p className="text-lg font-heading font-semibold text-primary">
            That is enough. That is everything.
          </p>
        </div>

        {/* Closing Anchor (Ephesians 4:12-13) */}
        <div className="text-center pt-4 border-t border-border-rule/60 space-y-1">
          <p className="text-xs sm:text-sm font-serif italic text-muted-foreground">
            &ldquo;To equip his people for works of service, so that the body of Christ may be built up until we all reach unity in the faith and in the knowledge of the Son of God and become mature, attaining to the whole measure of the fullness of Christ.&rdquo;
          </p>
          <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-bold">
            — Ephesians 4:12–13
          </p>
        </div>
      </div>

            {/* Deep-Dive Bridge to Layer 5 Board Export Dossier */}
      <div className="p-4 rounded-xl bg-surface-subtle border border-border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
            <FileSpreadsheet className="w-4 h-4" />
          </div>
          <div>
            <span className="font-heading font-semibold text-foreground block">
              Explore Executive Board Export & Printable Dossier
            </span>
            <span className="text-muted-foreground font-body">
              Export a high-fidelity 12-page executive summary formatted for board packets, elders, and retreat facilitation.
            </span>
          </div>
        </div>
        <Link
          href="/dashboard/export"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-button bg-card hover:bg-surface-warm border border-border-rule font-semibold text-foreground transition-colors shrink-0 shadow-xs"
        >
          <span>Open Board Dossier</span>
          <ArrowRight className="w-3.5 h-3.5 text-primary" />
        </Link>
      </div>

      {/* Action Footer */}
      <div className="pt-6 border-t border-border-rule/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        {onRestart && (
          <button
            onClick={onRestart}
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground font-mono"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Return to Panel 1: The Team at a Glance</span>
          </button>
        )}

        {onPrintExport && (
          <button
            onClick={onPrintExport}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-button bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary-hover transition-all shadow-md"
          >
            <Printer className="w-4 h-4" />
            <span>Generate In-Person Team Retreat Guide</span>
          </button>
        )}
      </div>
    </section>
  );
}


