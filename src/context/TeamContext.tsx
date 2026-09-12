'use client';

import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import {
  TeamState,
  TeamMember,
  TeamContext as TeamContextType,
  ComputedTeamMetrics,
  DiscernmentDecision,
} from '@/lib/types/apest';
import { INITIAL_RESTORATION_ROAD_STATE } from '@/lib/fixtures/restoration-road';
import { calculateTeamMetrics } from '@/lib/engine/calculator';

interface TeamContextValue {
  state: TeamState;
  metrics: ComputedTeamMetrics;
  activeMember: TeamMember | null;
  setActiveMember: (m: TeamMember | null) => void;
  isCopilotOpen: boolean;
  setIsCopilotOpen: (open: boolean) => void;
  copilotMode: 'interpretation' | 'challenge';
  setCopilotMode: (mode: 'interpretation' | 'challenge') => void;
  isThinkingHatsOpen: boolean;
  setIsThinkingHatsOpen: (open: boolean) => void;
  isQuarterlyReviewOpen: boolean;
  setIsQuarterlyReviewOpen: (open: boolean) => void;
  addMember: (member: TeamMember) => void;
  updateMember: (id: string, updates: Partial<TeamMember>) => void;
  removeMember: (id: string) => void;
  updateTeamContext: (updates: Partial<TeamContextType>) => void;
  addDecision: (decision: DiscernmentDecision) => void;
  resetToRestorationRoad: () => void;
}

const TeamContext = createContext<TeamContextValue | undefined>(undefined);

export function TeamProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<TeamState>(INITIAL_RESTORATION_ROAD_STATE);
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);
  const [copilotMode, setCopilotMode] = useState<'interpretation' | 'challenge'>('interpretation');
  const [isThinkingHatsOpen, setIsThinkingHatsOpen] = useState(false);
  const [isQuarterlyReviewOpen, setIsQuarterlyReviewOpen] = useState(false);

  // Compute metrics dynamically whenever members change
  const metrics = useMemo(() => calculateTeamMetrics(state.members), [state.members]);

  const addMember = (member: TeamMember) => {
    setState((prev) => ({
      ...prev,
      members: [...prev.members, member],
    }));
  };

  const updateMember = (id: string, updates: Partial<TeamMember>) => {
    setState((prev) => ({
      ...prev,
      members: prev.members.map((m) => (m.id === id ? { ...m, ...updates } : m)),
    }));
  };

  const removeMember = (id: string) => {
    setState((prev) => ({
      ...prev,
      members: prev.members.filter((m) => m.id !== id),
    }));
  };

  const updateTeamContext = (updates: Partial<TeamContextType>) => {
    setState((prev) => ({
      ...prev,
      team: { ...prev.team, ...updates },
    }));
  };

  const addDecision = (decision: DiscernmentDecision) => {
    setState((prev) => ({
      ...prev,
      decisions: [decision, ...prev.decisions],
    }));
  };

  const resetToRestorationRoad = () => {
    setState(INITIAL_RESTORATION_ROAD_STATE);
  };

  return (
    <TeamContext.Provider
      value={{
        state,
        metrics,
        activeMember,
        setActiveMember,
        isCopilotOpen,
        setIsCopilotOpen,
        copilotMode,
        setCopilotMode,
        isThinkingHatsOpen,
        setIsThinkingHatsOpen,
        isQuarterlyReviewOpen,
        setIsQuarterlyReviewOpen,
        addMember,
        updateMember,
        removeMember,
        updateTeamContext,
        addDecision,
        resetToRestorationRoad,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
}

export function useTeam() {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error('useTeam must be used within a TeamProvider');
  }
  return context;
}
