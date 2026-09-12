'use client';

import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Send,
  HelpCircle,
  AlertTriangle,
  BookOpen,
  Compass,
  Flame,
} from 'lucide-react';
import { useTeam } from '@/context/TeamContext';

interface Message {
  id: string;
  sender: 'user' | 'copilot';
  text: string;
  timestamp: string;
  citation?: string;
}

export function MissionalCopilotDrawer() {
  const {
    isCopilotOpen,
    setIsCopilotOpen,
    copilotMode,
    setCopilotMode,
    state,
    metrics,
  } = useTeam();

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      sender: 'copilot',
      text: `Grace and peace. I am your Missional Copilot, grounded in the ecclesial theology of Alan Hirsch (*5Q*, *The Permanent Revolution*, *The Forgotten Ways*).\n\nYour team at ${state.team.teamName} currently registers a **Pleroma Fullness of ${metrics.jesusSpaceArea}%**. You carry significant Prophetic (32.2) and Shepherding (31.4) depth, but your Apostolic voice (15.0) is carried exclusively by Marcus Webb, while Sofia Reyes is your lone Evangelistic herald.\n\nHow can I help interpret your team dynamics or challenge your current operational equilibrium today?`,
      timestamp: 'Just now',
      citation: 'Ephesians 4:11-16; 5Q Ch. 14',
    },
  ]);

  if (!isCopilotOpen) return null;

  const handleSend = (textToSend?: string) => {
    const q = textToSend || input;
    if (!q.trim()) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: q,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Dynamic response based on mode and query
    setTimeout(() => {
      let replyText = '';
      let replyCitation = '';

      if (copilotMode === 'challenge') {
        if (q.toLowerCase().includes('plateau') || q.toLowerCase().includes('frustration')) {
          replyText = `Let's speak plainly about Restoration Road's 3-year plateau. In *The Permanent Revolution*, Alan Hirsch notes that **equilibrium is where an organism goes to stagnate**.\n\nYou have James Okafor with a 48 Shepherd score holding executive veto authority, while Sofia Reyes (45 Evangelist) and Daniel Park (46 Prophet) have no formal authority. When tension arises, the system instinctively neutralizes conflict to preserve relational comfort. Your plateau is not a lack of vision; it is structural peace-faking. Will you give Sofia and Daniel permission to disrupt your weekly staff agenda?`;
          replyCitation = 'The Permanent Revolution, Ch. 7: The Corrective Tensions';
        } else if (q.toLowerCase().includes('authority') || q.toLowerCase().includes('marcus') || q.toLowerCase().includes('james')) {
          replyText = `Notice the authority crosstab: 100% of formal decision authority is held by Marcus (A-T) and James (S-T). This forms a classical **Pastor-Teacher gatekeeper monopoly**.\n\nMarcus feels isolated because when he casts apostolic expansion, James instinctively calculates the emotional and administrative burden on the flock. Marcus then backs down to avoid hurting feelings, or pushes unilaterally, breeding resentment. You must institute the **Apostle-Shepherd Humanization Dialogue** before any budget vote.`;
          replyCitation = '5Q, Ch. 15: The APEST Leadership Pipeline';
        } else {
          replyText = `A prophetic confrontation for your team: You are currently spending 85% of your collective staff hours maintaining Sunday morning services and counseling meetings. Yet your stated mission is *'to plant neighborhood expressions across East Denver.'*\n\nIf Jesus audited your calendar this past month, would he recognize an apostolic movement or an institutional chaplaincy? Where is the risk? Who is touching outsiders?`;
          replyCitation = 'The Forgotten Ways, Ch. 3: Apostolic Environment';
        }
      } else {
        // Interpretation Mode
        if (q.toLowerCase().includes('jesus space') || q.toLowerCase().includes('pleroma')) {
          replyText = `In *5Q* (Figure 8.1), the center of your pentagonal radar is called the **'Jesus Space'** (${metrics.jesusSpaceArea}% on your dashboard). Christ alone embodied the fivefold fullness in absolute perfection. When He ascended, He distributed these charisms to the body.\n\nWhen a team has an indented or pinched vertex (like your Apostolic score at 15.0 or Evangelistic output), the church suffers a Christological deficit: the community forgets how to reflect Jesus as the Pioneer and the Herald.`;
          replyCitation = '5Q, Ch. 14: Expanding the Jesus Space';
        } else if (q.toLowerCase().includes('pairing') || q.toLowerCase().includes('tension')) {
          replyText = `The 10 corrective pairings are not personality clashes; they are theological counter-weights required for ecclesial health.\n\nTake Marcus (Apostle) and James (Shepherd): Apostles view people through the lens of mission; Shepherds view mission through the lens of people. If either silences the other, the church either abuses its people or abandons its mission. Tension is the catalyst of movement.`;
          replyCitation = 'The Permanent Revolution, Ch. 8';
        } else {
          replyText = `Your team's configuration is an **Architect Educator + Contemplative Healer + Pastoral Stabilizer** ecosystem. Your primary challenge is moving from a centralized Sunday delivery model to decentralized disciple-making. How can we apply the 12-week formation plan to activate Sofia's evangelistic gifting this quarter?`;
          replyCitation = '5Q Practical Companion, p. 112';
        }
      }

      const copilotMsg: Message = {
        id: `c-${Date.now()}`,
        sender: 'copilot',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        citation: replyCitation,
      };

      setMessages((prev) => [...prev, copilotMsg]);
    }, 600);
  };

  const SUGGESTED_QUESTIONS =
    copilotMode === 'challenge'
      ? [
          'Why has our church plateaued for 3 years?',
          'How is our formal authority dampening mission?',
          'Expose our Shepherd-Teacher equilibrium trap.',
        ]
      : [
          'Explain our Pleroma / Jesus Space score.',
          'How should Marcus (A) and James (S) navigate conflict?',
          'Why is Sofia’s evangelistic voice being suppressed?',
        ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-fade-in no-print">
      <div
        className="w-full max-w-xl bg-surface-card h-full shadow-2xl flex flex-col border-l border-surface-border overflow-hidden animate-slide-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-surface-border bg-surface-subtle flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-ink-primary text-white flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm text-ink-primary">Missional Copilot</h3>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white border border-surface-border text-ink-secondary">
                  Alan Hirsch Grounded
                </span>
              </div>
              <p className="text-xs text-ink-secondary">Ecclesial Diagnostic & Formation Agent</p>
            </div>
          </div>

          <button
            onClick={() => setIsCopilotOpen(false)}
            className="p-1.5 rounded-lg text-ink-secondary hover:text-ink-primary hover:bg-surface-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector */}
        <div className="p-3 border-b border-surface-border bg-white flex items-center justify-between gap-3 text-xs">
          <span className="text-ink-secondary font-medium">Operational Stance:</span>
          <div className="flex items-center p-0.5 rounded-lg bg-surface-subtle border border-surface-border">
            <button
              onClick={() => setCopilotMode('interpretation')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
                copilotMode === 'interpretation'
                  ? 'bg-white shadow-sm font-semibold text-ink-primary'
                  : 'text-ink-secondary hover:text-ink-primary'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-sky-600" />
              <span>Interpretation</span>
            </button>
            <button
              onClick={() => setCopilotMode('challenge')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
                copilotMode === 'challenge'
                  ? 'bg-rose-50 shadow-sm font-semibold text-rose-900 border border-rose-200'
                  : 'text-ink-secondary hover:text-ink-primary'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-rose-600" />
              <span>Challenge Mode</span>
            </button>
          </div>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col ${
                m.sender === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div
                className={`max-w-[88%] rounded-xl p-4 text-xs leading-relaxed space-y-2 ${
                  m.sender === 'user'
                    ? 'bg-ink-primary text-white rounded-br-none'
                    : 'bg-surface-subtle text-ink-primary border border-surface-border rounded-bl-none'
                }`}
              >
                <div className="whitespace-pre-line">{m.text}</div>
                {m.citation && (
                  <div className="pt-2 border-t border-surface-border/60 text-[10px] text-indigo-700 font-mono flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    <span>Theological Citation: {m.citation}</span>
                  </div>
                )}
              </div>
              <span className="text-[10px] text-ink-tertiary mt-1 px-1">{m.timestamp}</span>
            </div>
          ))}
        </div>

        {/* Suggested Prompts */}
        <div className="p-3 border-t border-surface-border bg-surface-subtle space-y-1.5">
          <span className="text-[10px] uppercase font-mono text-ink-tertiary">
            Suggested Inquiries:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="text-[11px] text-left px-2.5 py-1 rounded-md bg-white border border-surface-border hover:border-ink-secondary text-ink-secondary transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Input Field */}
        <div className="p-4 border-t border-surface-border bg-white flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={
              copilotMode === 'challenge'
                ? 'Ask for a prophetic audit of your team...'
                : 'Ask how to interpret your APEST scores...'
            }
            className="flex-1 px-3.5 py-2 text-xs rounded-lg border border-surface-border bg-surface-subtle focus:bg-white focus:outline-none focus:ring-1 focus:ring-ink-primary"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim()}
            className="p-2 rounded-lg bg-ink-primary text-white hover:bg-ink-secondary disabled:opacity-40 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
