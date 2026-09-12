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
    <div className="p-6 sm:p-8 rounded-card bg-card border border-border-soft shadow-card space-y-6" data-layer="INTERPRETED">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-heading font-bold text-xl text-ink-primary">
            Corrective <span className="italic font-normal text-primary">Relationship Activators</span>
          </h3>
          <p className="text-xs text-ink-secondary font-body">
            Structured relational rituals designed to turn theological tension into missional
            momentum.
          </p>
        </div>

        <button
          onClick={() => setIsThinkingHatsOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-button bg-primary text-primary-foreground hover:bg-primary-hover text-xs font-semibold transition-all shadow-sm"
        >
          <Compass className="w-3.5 h-3.5 text-clay" />
          <span>Launch Thinking Hats Studio</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-body">
        {ACTIVATOR_PROTOCOLS.map((proto, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-surface-subtle border border-border-rule space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="font-heading font-bold text-sm text-ink-primary">{proto.name}</span>
              <span className="font-mono text-[10px] uppercase font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-button border border-primary/20">
                {proto.pair}
              </span>
            </div>

            <div className="text-[11px] text-ink-tertiary">
              Cadence: <span className="font-medium text-ink-secondary">{proto.frequency}</span>
            </div>

            <div className="text-[11px] text-ink-tertiary">
              Restoration Road Leads:{' '}
              <span className="font-medium text-ink-primary font-heading">{proto.leadRoles}</span>
            </div>

            <div className="p-3 rounded-lg bg-card border border-border-rule space-y-1">
              <div className="font-semibold text-primary font-heading">Protocol & Dialogue Question:</div>
              <p className="text-ink-secondary leading-relaxed italic">{proto.protocol}</p>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-emerald-900 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>
                <strong>Deliverable:</strong> {proto.deliverable}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
