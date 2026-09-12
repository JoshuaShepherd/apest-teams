export type ApestFunction = 'apostle' | 'prophet' | 'evangelist' | 'shepherd' | 'teacher';

export interface VocationalScore {
  score: number; // 0 - 50
  rank: 1 | 2 | 3 | 4 | 5;
  role: 'primary' | 'secondary' | 'supplementary';
}

export interface FiveQProfile {
  scores: Record<ApestFunction, VocationalScore>;
  primary: ApestFunction;
  secondary: ApestFunction;
  combination: {
    label: string;
    descriptor: string;
    populationPercent: number;
  };
  benchmarks: Record<ApestFunction, { you: number; others: number; populationPercent: number }>;
  supplementaryMaturity?: Array<{
    key: ApestFunction;
    oneStepTowardMaturity: string;
  }>;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tenureYears: number;
  isStaff: boolean;
  hasFormalAuthority: boolean; // Institutional veto / decision power
  email: string;
  status: 'complete' | 'pending';
  profile: FiveQProfile;
}

export interface TeamContext {
  teamName: string;
  city: string;
  ecclesialType: 'church_staff' | 'church_plant' | 'elder_board' | 'network_cabinet';
  tenure: string;
  statedMission: string;
  persistentFrustration: string;
  thrivingVision: string;
}

export interface PairwiseTension {
  memberA: string;
  memberB: string;
  functionA: ApestFunction;
  functionB: ApestFunction;
  euclideanDistance: number;
  tensionLabel: string;
  correctiveDynamic: string;
  riskIfIgnored: string;
}

export type CoverageTier = 'STRONG' | 'PRESENT' | 'THIN' | 'ABSENT';

export interface ComputedTeamMetrics {
  means: Record<ApestFunction, number>;
  deltasVsNorms: Record<ApestFunction, number>; // Norms: A:21, P:23, E:25, S:27, T:28
  coverageTiers: Record<ApestFunction, CoverageTier>;
  primaryCounts: Record<ApestFunction, number>;
  secondaryCounts: Record<ApestFunction, number>;
  authorityWeights: Record<ApestFunction, number>; // Percentage of total authority held by each function
  jesusSpaceArea: number; // Surface area of the pentagon (0 - 100% of theoretical maximum)
  pairwiseTensions: PairwiseTension[];
  teamHealthScore: number; // 0 - 100
  closestPair: { memberA: string; memberB: string; distance: number };
  furthestPair: { memberA: string; memberB: string; distance: number };
}

export interface DiscernmentDecision {
  id: string;
  title: string;
  date: string;
  context: string;
  notes: Record<ApestFunction, string[]>;
  covenantAgreement: string;
}

export interface TeamState {
  team: TeamContext;
  members: TeamMember[];
  capacity: number;
  decisions: DiscernmentDecision[];
}
