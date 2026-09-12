'use client';

import React, { useState } from 'react';
import { useTeam } from '@/context/TeamContext';
import { ApestFunction } from '@/lib/types/apest';
import { APEST_ORDER } from '@/lib/engine/calculator';

interface Point {
  x: number;
  y: number;
}

export function TeamWheelPentagon() {
  const { metrics, state } = useTeam();
  const [selectedOverlayMemberId, setSelectedOverlayMemberId] = useState<string | null>(null);

  const size = 460;
  const center = size / 2;
  const maxRadius = 160;

  // Angles for 5 vertices starting with Apostle at top (-90 degrees)
  // [Apostle, Prophet, Evangelist, Shepherd, Teacher]
  const angles = [-90, -18, 54, 126, 198].map((deg) => (deg * Math.PI) / 180);

  const getCoordinates = (angle: number, value: number, max: number = 50): Point => {
    const r = (value / max) * maxRadius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  // 1. Concentric Ring Paths (Levels 1 to 5, values 10, 20, 30, 40, 50)
  const rings = [10, 20, 30, 40, 50].map((ringVal) => {
    const points = angles.map((a) => getCoordinates(a, ringVal)).map((p) => `${p.x},${p.y}`);
    return points.join(' ');
  });

  // 2. Team Average Polygon
  const teamScores = [
    metrics.means.apostle,
    metrics.means.prophet,
    metrics.means.evangelist,
    metrics.means.shepherd,
    metrics.means.teacher,
  ];
  const teamPoints = angles
    .map((a, i) => getCoordinates(a, teamScores[i]))
    .map((p) => `${p.x},${p.y}`)
    .join(' ');

  // 3. Optional Overlay Member Polygon
  const overlayMember = state.members.find((m) => m.id === selectedOverlayMemberId);
  const overlayPoints = overlayMember
    ? angles
        .map((a, i) =>
          getCoordinates(a, overlayMember.profile.scores[APEST_ORDER[i]]?.score ?? 0)
        )
        .map((p) => `${p.x},${p.y}`)
        .join(' ')
    : null;

  const vertexLabels: Array<{ func: ApestFunction; name: string; score: number; pos: Point }> = [
    { func: 'apostle', name: 'Apostle', score: metrics.means.apostle, pos: { x: center, y: center - maxRadius - 28 } },
    { func: 'prophet', name: 'Prophet', score: metrics.means.prophet, pos: { x: center + maxRadius + 32, y: center - 45 } },
    { func: 'evangelist', name: 'Evangelist', score: metrics.means.evangelist, pos: { x: center + maxRadius - 10, y: center + maxRadius + 15 } },
    { func: 'shepherd', name: 'Shepherd', score: metrics.means.shepherd, pos: { x: center - maxRadius + 10, y: center + maxRadius + 15 } },
    { func: 'teacher', name: 'Teacher', score: metrics.means.teacher, pos: { x: center - maxRadius - 32, y: center - 45 } },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-surface-border shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif font-bold text-lg text-ink-primary">
            The 5Q Dual-Layer Team Wheel
          </h3>
          <p className="text-xs text-ink-secondary">
            Pentagonal radar mapping fivefold fullness, Organizational MRI levels (1–5), and the
            central &ldquo;Jesus Space&rdquo; area.
          </p>
        </div>

        {/* Member Overlay Selector */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-ink-secondary font-medium">Overlay Individual:</span>
          <select
            value={selectedOverlayMemberId || ''}
            onChange={(e) => setSelectedOverlayMemberId(e.target.value || null)}
            className="px-3 py-1.5 rounded-lg border border-surface-border bg-surface-subtle text-ink-primary font-medium focus:outline-none focus:ring-1 focus:ring-ink-primary"
          >
            <option value="">None (Team Average Only)</option>
            {state.members.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name} ({m.profile.primary.toUpperCase()})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 py-2">
        {/* SVG Visualization Canvas */}
        <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
          <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full overflow-visible">
            {/* Background 5-Level MRI Concentric Rings */}
            {rings.map((ringPolygon, idx) => (
              <polygon
                key={idx}
                points={ringPolygon}
                fill={idx === 4 ? '#fafaf8' : 'none'}
                stroke="#e7e7e2"
                strokeWidth="1.2"
                strokeDasharray={idx < 4 ? '3 3' : 'none'}
              />
            ))}

            {/* Radial Spokes from center to vertices */}
            {angles.map((a, i) => {
              const outer = getCoordinates(a, 50);
              return (
                <line
                  key={i}
                  x1={center}
                  y1={center}
                  x2={outer.x}
                  y2={outer.y}
                  stroke="#dcdcd6"
                  strokeWidth="1.2"
                />
              );
            })}

            {/* Team Area Polygon (Jesus Space) */}
            <polygon
              points={teamPoints}
              fill="rgba(67, 56, 202, 0.18)"
              stroke="#4338ca"
              strokeWidth="2.5"
              className="transition-all duration-700"
            />

            {/* Overlay Individual Member Polygon */}
            {overlayPoints && (
              <polygon
                points={overlayPoints}
                fill="rgba(225, 29, 72, 0.15)"
                stroke="#e11d48"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="transition-all duration-500 animate-fade-in"
              />
            )}

            {/* Center Jesus Space Label */}
            <circle cx={center} cy={center} r={32} fill="#ffffff" stroke="#dcdcd6" strokeWidth="1.5" />
            <text
              x={center}
              y={center - 4}
              textAnchor="middle"
              className="text-[10px] uppercase font-mono font-bold fill-ink-secondary"
            >
              Pleroma
            </text>
            <text
              x={center}
              y={center + 12}
              textAnchor="middle"
              className="text-xs font-mono font-extrabold fill-ink-primary"
            >
              {metrics.jesusSpaceArea}%
            </text>

            {/* Vertex Nodes & Labels */}
            {vertexLabels.map((v, i) => {
              const pt = getCoordinates(angles[i], v.score);
              return (
                <g key={v.func}>
                  {/* Vertex node dot */}
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={5}
                    className="fill-indigo-700 stroke-white stroke-2 shadow-sm"
                  />
                  {/* Vertex text label */}
                  <text
                    x={v.pos.x}
                    y={v.pos.y}
                    textAnchor="middle"
                    className="text-xs font-bold font-sans fill-ink-primary tracking-tight"
                  >
                    {v.name}
                  </text>
                  <text
                    x={v.pos.x}
                    y={v.pos.y + 13}
                    textAnchor="middle"
                    className="text-[10px] font-mono fill-ink-tertiary"
                  >
                    {v.score}/50
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Legend & Theological Explanation */}
        <div className="max-w-xs space-y-4 text-xs">
          <div className="p-4 rounded-xl bg-surface-subtle border border-surface-border space-y-2">
            <div className="font-bold text-ink-primary">The 5 Concentric MRI Rings</div>
            <div className="space-y-1 text-ink-secondary leading-relaxed text-[11px]">
              <div>• <strong>Level 1 (0–10):</strong> Latent / Unconscious intuition</div>
              <div>• <strong>Level 2 (11–20):</strong> Emerging personal practice</div>
              <div>• <strong>Level 3 (21–30):</strong> Local communal expression</div>
              <div>• <strong>Level 4 (31–40):</strong> Institutional equipping</div>
              <div>• <strong>Level 5 (41–50):</strong> Movemental reproduction</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-surface-subtle border border-surface-border space-y-2">
            <div className="font-bold text-ink-primary">&ldquo;Jesus Space&rdquo; Fullness Area</div>
            <p className="text-ink-secondary text-[11px] leading-relaxed">
              When all 5 functions operate in dynamic tension, the shaded polygon expands toward its
              symmetrical maximum. Pinched vertices visually demonstrate Christological deficit.
            </p>
          </div>

          {overlayMember && (
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-900 flex items-center justify-between">
              <span>Overlaying {overlayMember.name}</span>
              <button
                onClick={() => setSelectedOverlayMemberId(null)}
                className="text-[10px] font-bold underline"
              >
                Clear
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
