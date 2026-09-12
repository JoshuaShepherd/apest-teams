'use client';

import React from 'react';
import { GitMerge, Compass, CheckCircle2, MessageSquare } from 'lucide-react';
import { useTeam } from '@/context/TeamContext';

export function CorrectiveActivators() {
  const { setIsThinkingHatsOpen } = useTeam();

  const ACTIVATOR_PROTOCOLS = [
    {
      pair: 'Apostle ↔ Shepherd',
      name: 'The Humanization Dialogue',
      frequency: 'Monthly (60 min pre-flight before major initiatives)',
      leadRoles: 'Marcus Webb (Lead Pastor) & James Okafor (Executive Pastor)',
      protocol:
        'Before casting new expansion blueprints, the Apostle must answer: "What is the human and emotional cost to our staff and community?" The Shepherd must answer: "Where am I prioritizing comfort and safety over Jesus’ call to cross new frontiers?"',
      deliverable: 'Agreed-upon pace and relational safety covenants.',
    },
    {
      pair: 'Prophet ↔ Evangelist',
      name: 'Truth & Grace Covenant',
      frequency: 'Bi-Weekly (45 min reflection)',
      leadRoles: 'Priya Nair (Formation) & Sofia Reyes (Outreach)',
      protocol:
        'The Prophet ensures outward outreach does not dilute repentance, holiness, or covenant integrity. The Evangelist ensures prophetic challenge remains hospitable, accessible, and overflowing with good news to the stranger.',
      deliverable: 'Shared liturgy for welcoming and discipling seekers.',
    },
    {
      pair: 'Prophet ↔ Teacher',
      name: 'Living Orthodoxy Alignment',
      frequency: 'Quarterly (Half-day retreat)',
      leadRoles: 'Daniel Park (Worship) & Marcus / James (Teaching)',
      protocol:
        'The Prophet challenges theological curricula when it becomes dry intellectualism. The Teacher builds durable hermeneutical scaffolding so prophetic fire transforms into sustainable community habits.',
      deliverable: 'Sermon series & curriculum review through 5Q lens.',
    },
    {
      pair: 'Evangelist ↔ Shepherd',
      name: 'The Gathering & Holding Dynamic',
      frequency: 'Monthly staff review',
      leadRoles: 'Sofia Reyes (Outreach) & James Okafor (Executive)',
      protocol:
        'Evangelists bring unchurched people over the threshold; Shepherds integrate them into belonging. Together they review assimilation rates and ensure new believers are neither abandoned nor smothered.',
      deliverable: 'Audit of newcomer integration pathways.',
    },
    {
      pair: 'Apostle ↔ Prophet',
      name: 'The Ephesians 2:20 Foundation Engine',
      frequency: 'Strategic Planning Retraite',
      leadRoles: 'Marcus Webb (Apostle) & Priya Nair (Prophet)',
      protocol:
        'Apostles scan the external horizon for pioneering opportunity; Prophets interrogate divine alignment and test motives. Together they forge the unstoppable generative foundation of missional movements.',
      deliverable: '12-month strategic vision vetted for covenant purity.',
    },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-surface-border shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif font-bold text-lg text-ink-primary">
            Corrective Relationship Activators
          </h3>
          <p className="text-xs text-ink-secondary">
            Structured relational rituals designed to turn theological tension into missional
            momentum.
          </p>
        </div>

        <button
          onClick={() => setIsThinkingHatsOpen(true)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-ink-primary text-white hover:bg-ink-secondary text-xs font-semibold transition-colors shadow-sm"
        >
          <Compass className="w-3.5 h-3.5 text-indigo-300" />
          <span>Launch Thinking Hats Studio</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {ACTIVATOR_PROTOCOLS.map((proto, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-surface-subtle border border-surface-border space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-ink-primary">{proto.name}</span>
              <span className="font-mono text-[10px] uppercase font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                {proto.pair}
              </span>
            </div>

            <div className="text-[11px] text-ink-tertiary">
              Cadence: <span className="font-medium text-ink-secondary">{proto.frequency}</span>
            </div>

            <div className="text-[11px] text-ink-tertiary">
              Restoration Road Leads:{' '}
              <span className="font-medium text-ink-primary">{proto.leadRoles}</span>
            </div>

            <p className="text-ink-secondary leading-relaxed bg-white/80 p-3 rounded-lg border border-surface-border">
              {proto.protocol}
            </p>

            <div className="text-[11px] text-emerald-800 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Expected Deliverable: {proto.deliverable}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
