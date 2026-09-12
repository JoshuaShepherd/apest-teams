'use client';

import React from 'react';
import { AlertTriangle, Info, CheckCircle2, ShieldAlert, Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { EmptyChairIcon, MutedMicIcon, AbsenceFlag, SuppressionFlag } from '../SuppressionBadge';

export function Panel3TeamMap({ onNext }: { onNext?: () => void }) {
  // Pentagon geometry calculation
  // Radius R = 130, Center = (160, 160)
  // Points: top is A (Apostle), then P, E, S, T clockwise
  // Standard angles (in degrees): A: -90 (top), P: -18, E: 54, S: 126, T: 198
  const cx = 160;
  const cy = 160;
  const maxR = 120;

  // Actual team scores relative to baseline 1.5 (max scale)
  // A: 1.0 -> 1.0 / 1.5 = 0.67
  // P: 1.0 -> 1.0 / 1.5 = 0.67
  // E: 0.25 -> 0.25 / 1.5 = 0.17 (thin!)
  // S: 1.5 -> 1.5 / 1.5 = 1.0 (full weight!)
  // T: 1.0 -> 1.0 / 1.5 = 0.67
  const angles = [-90, -18, 54, 126, 198]; // A, P, E, S, T
  const idealWeights = [0.8, 0.8, 0.8, 0.8, 0.8];
  const actualWeights = [0.75, 0.75, 0.22, 1.0, 0.75]; // E is visibly contracted!

  const toCoords = (angleDeg: number, weight: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    const x = cx + maxR * weight * Math.cos(rad);
    const y = cy + maxR * weight * Math.sin(rad);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  };

  const idealPoints = angles.map((a, i) => toCoords(a, idealWeights[i])).join(' ');
  const actualPoints = angles.map((a, i) => toCoords(a, actualWeights[i])).join(' ');

  const vertexLabels = [
    { key: 'A', name: 'Apostle', score: '1.0', x: cx, y: cy - maxR - 15, color: '#9A5B2D' },
    { key: 'P', name: 'Prophet', score: '1.0', x: cx + maxR + 25, y: cy - 35, color: '#3E5C76' },
    { key: 'E', name: 'Evangelist', score: '0.25', x: cx + maxR * 0.6 + 30, y: cy + maxR + 10, color: '#D97706', isGap: true },
    { key: 'S', name: 'Shepherd', score: '1.5', x: cx - maxR * 0.6 - 30, y: cy + maxR + 10, color: '#2D6A4F', isDominant: true },
    { key: 'T', name: 'Teacher', score: '1.0', x: cx - maxR - 25, y: cy - 35, color: '#5C5F66' },
  ];

  return (
    <section
      id="panel-3"
      className="p-6 sm:p-8 rounded-panel bg-card border border-border-rule shadow-card space-y-8 transition-all"
    >
      {/* Panel Header */}
      <div className="space-y-3 border-b border-border-rule/60 pb-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-surface-subtle border border-border-soft text-[11px] font-mono text-muted-foreground">
          <span>Panel 3 of 11</span>
          <span>•</span>
          <span className="text-primary font-bold">The Team Map</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight">
          Your Team’s 5Q Shape
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground font-serif leading-relaxed max-w-4xl">
          Every team has a shape. The shape reveals which expressions of Christ’s ministry are actively present in your leadership culture — and which are absent or suppressed. A perfectly balanced pentagon is not the goal; the goal is honest self-knowledge about where the gaps are, so you can name them and address them.
        </p>
      </div>

      {/* Pentagon Visual & Gap Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Pentagon SVG Container */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 rounded-2xl bg-surface-warm/60 border border-border-rule">
          <div className="text-[11px] uppercase tracking-wider font-mono text-muted-foreground mb-4 flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-primary/30 border border-primary" /> Actual 5Q Shape
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full border border-dashed border-foreground/50" /> Ideal Balance
            </span>
          </div>

          <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
            <svg viewBox="0 0 320 320" className="w-full h-full overflow-visible">
              {/* Concentric reference rings */}
              <circle cx={cx} cy={cy} r={maxR * 0.33} fill="none" stroke="currentColor" strokeOpacity="0.08" />
              <circle cx={cx} cy={cy} r={maxR * 0.66} fill="none" stroke="currentColor" strokeOpacity="0.08" />
              <circle cx={cx} cy={cy} r={maxR} fill="none" stroke="currentColor" strokeOpacity="0.12" />

              {/* Spokes */}
              {angles.map((a, i) => {
                const rad = (a * Math.PI) / 180;
                const sx = cx + maxR * Math.cos(rad);
                const sy = cy + maxR * Math.sin(rad);
                return (
                  <line
                    key={i}
                    x1={cx}
                    y1={cy}
                    x2={sx}
                    y2={sy}
                    stroke="currentColor"
                    strokeOpacity="0.15"
                    strokeDasharray="2 2"
                  />
                );
              })}

              {/* Ideal Balanced Pentagon (Faint outline behind) */}
              <polygon
                points={idealPoints}
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.3"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Capacity Gap Shading (difference between ideal and actual) */}
              <polygon
                points={idealPoints}
                fill="rgba(217, 119, 6, 0.08)"
              />

              {/* Actual Team Pentagon (Filled in warm primary palette) */}
              <polygon
                points={actualPoints}
                fill="rgba(154, 91, 45, 0.35)"
                stroke="#9A5B2D"
                strokeWidth="2.5"
                className="transition-all duration-700"
              />

              {/* Vertex Nodes and Labels */}
              {vertexLabels.map((v, i) => {
                const pt = toCoords(angles[i], actualWeights[i]).split(',');
                const px = parseFloat(pt[0]);
                const py = parseFloat(pt[1]);

                return (
                  <g key={v.key}>
                    {/* Connection point dot */}
                    <circle
                      cx={px}
                      cy={py}
                      r={v.isGap ? 6 : 5}
                      fill={v.color}
                      stroke="#fff"
                      strokeWidth="2"
                      className="shadow-sm"
                    />

                    {/* Text Label */}
                    <text
                      x={v.x}
                      y={v.y}
                      textAnchor="middle"
                      className="text-[12px] font-heading font-bold"
                      fill={v.color}
                    >
                      {v.key} · {v.name}
                    </text>
                    <text
                      x={v.x}
                      y={v.y + 12}
                      textAnchor="middle"
                      className="text-[10px] font-mono fill-muted-foreground font-semibold"
                    >
                      {v.score}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-card border border-border-rule/80 text-center text-xs font-serif italic text-muted-foreground max-w-sm">
            The pentagon shape is visibly heavy on the S–T–A–P quadrant and visibly thin at E. The shape itself is the diagnosis. No numbers needed. The asymmetry speaks.
          </div>
        </div>

        {/* 3-Column Diagnostic Table */}
        <div className="lg:col-span-6 space-y-4">
          <div className="text-xs font-heading font-bold uppercase tracking-wider text-muted-foreground">
            Aggregate 5Q Capacity Summary
          </div>

          <div className="border border-border-rule rounded-xl overflow-hidden bg-card shadow-sm">
            <table className="w-full text-xs text-left">
              <thead className="bg-surface-subtle border-b border-border-rule text-muted-foreground font-mono uppercase text-[10px]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Function</th>
                  <th className="px-4 py-3 font-semibold">Team Strength</th>
                  <th className="px-4 py-3 font-semibold text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-rule/60 font-body">
                <tr className="hover:bg-surface-warm/40 transition-colors">
                  <td className="px-4 py-3 font-heading font-bold flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#9A5B2D' }} />
                    <span>Apostle (A)</span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">Strong — primary voice present (Marcus)</td>
                  <td className="px-4 py-3 text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-800 dark:text-emerald-300">
                      <span className="w-2 h-2 rounded-full bg-emerald-700 inline-block" />
                      Active
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-surface-warm/40 transition-colors">
                  <td className="px-4 py-3 font-heading font-bold flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#3E5C76' }} />
                    <span>Prophet (P)</span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">Strong — primary voice present (Priya)</td>
                  <td className="px-4 py-3 text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-800 dark:text-emerald-300">
                      <span className="w-2 h-2 rounded-full bg-emerald-700 inline-block" />
                      Active
                    </span>
                  </td>
                </tr>

                <tr className="bg-amber-500/10 hover:bg-amber-500/15 transition-colors">
                  <td className="px-4 py-3 font-heading font-bold flex items-center gap-2 text-amber-900 dark:text-amber-200">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#D97706' }} />
                    <span>Evangelist (E)</span>
                  </td>
                  <td className="px-4 py-3 text-amber-950/80 dark:text-amber-200/90 font-medium">
                    Thin — no primary voice present
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-800 dark:text-amber-300 font-bold">
                      <EmptyChairIcon className="w-3.5 h-3.5" />
                      Underrepresented
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-surface-warm/40 transition-colors">
                  <td className="px-4 py-3 font-heading font-bold flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#2D6A4F' }} />
                    <span>Shepherd (S)</span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">Very strong — two voices (James, Priya)</td>
                  <td className="px-4 py-3 text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-foreground font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-700 inline-block" />
                      Active (Monitor)
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-surface-warm/40 transition-colors">
                  <td className="px-4 py-3 font-heading font-bold flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#5C5F66' }} />
                    <span>Teacher (T)</span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">Strong — two secondary voices</td>
                  <td className="px-4 py-3 text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-800 dark:text-emerald-300">
                      <span className="w-2 h-2 rounded-full bg-emerald-700 inline-block" />
                      Active
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Neutral scoring note (Appendix non-negotiable) */}
          <p className="text-[11px] font-mono text-muted-foreground">
            * Note: No traffic-light failure ratings. Weight and asymmetry communicate imbalance rather than deficit scores.
          </p>
        </div>
      </div>

      {/* Callout Box 1: The Evangelist Gap */}
      <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-600/30 flex items-start gap-3.5 shadow-sm">
        <div className="p-2 rounded-lg bg-amber-500/20 text-amber-800 dark:text-amber-300 shrink-0 mt-0.5">
          <EmptyChairIcon className="w-5 h-5" />
        </div>
        <div className="space-y-1.5 text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-heading font-bold text-base text-amber-900 dark:text-amber-200">
            <span>⚠️ The Evangelist Gap</span>
            <AbsenceFlag label="Absence in Room" compact />
          </div>
          <p className="text-amber-950/85 dark:text-amber-200/95 font-serif leading-relaxed">
            Your team has no primary Evangelist voice. This means the grace-note — the function that makes the gospel accessible, that recruits new people to Jesus, that corrects the prophet&rsquo;s tendency toward demand and the teacher&rsquo;s tendency toward complexity — has no primary advocate in your leadership conversations. The cascade sequence matters here: without the evangelist, the shepherd has no one new to care for, and the apostle&rsquo;s new ground stays empty.
          </p>
        </div>
      </div>

      {/* Callout Box 2: The Shepherd Weight */}
      <div className="p-5 rounded-xl bg-surface-warm/80 border border-border-rule flex items-start gap-3.5">
        <div className="p-2 rounded-lg bg-emerald-800/10 text-emerald-800 dark:text-emerald-400 shrink-0 mt-0.5">
          <ShieldAlert className="w-5 h-5" />
        </div>
        <div className="space-y-1.5 text-xs sm:text-sm">
          <div className="font-heading font-bold text-base text-foreground">
            🔵 The Shepherd Weight
          </div>
          <p className="text-muted-foreground font-serif leading-relaxed">
            Your team carries significant shepherding intelligence — James as primary, Priya as secondary. This is a gift. It is also a structural risk. The shepherd&rsquo;s gravitational pull toward harmony and care can cushion the apostolic and prophetic challenges before they land. Watch for the moment when pastoral sensitivity becomes conflict-avoidance in theological clothing.
          </p>
        </div>
      </div>

            {/* Deep-Dive Bridge to Layer 1 Portrait */}
      <div className="p-4 rounded-xl bg-surface-subtle border border-border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <span className="font-heading font-semibold text-foreground block">
              Explore Analytical Layer 1: Fivefold Team Portrait
            </span>
            <span className="text-muted-foreground font-body">
              View the multi-ring Organizational MRI, pairwise Euclidean tension matrix, and individual APEST spider radars.
            </span>
          </div>
        </div>
        <Link
          href="/dashboard/portrait"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-button bg-card hover:bg-surface-warm border border-border-rule font-semibold text-foreground transition-colors shrink-0 shadow-xs"
        >
          <span>Open Layer 1 Portrait</span>
          <ArrowRight className="w-3.5 h-3.5 text-primary" />
        </Link>
      </div>

      {/* Sequential advance prompt */}
      {onNext && (
        <div className="pt-2 flex justify-end">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-button bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary-hover transition-all shadow-sm"
          >
            <span>Proceed to Panel 4: The Cascade</span>
            <span>&rarr;</span>
          </button>
        </div>
      )}
    </section>
  );
}

