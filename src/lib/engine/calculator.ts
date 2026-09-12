import {
  ApestFunction,
  ComputedTeamMetrics,
  CoverageTier,
  PairwiseTension,
  TeamMember,
} from '../types/apest';

export type { ApestFunction };

export const POPULATION_BENCHMARKS: Record<ApestFunction, number> = {
  apostle: 21.0,
  prophet: 23.0,
  evangelist: 25.0,
  shepherd: 27.0,
  teacher: 28.0,
};

export const APEST_ORDER: ApestFunction[] = [
  'apostle',
  'prophet',
  'evangelist',
  'shepherd',
  'teacher',
];

const PAIRWISE_THEOLOGICAL_DYNAMICS: Record<
  string,
  { label: string; dynamic: string; risk: string }
> = {
  'apostle-shepherd': {
    label: 'Extension vs. Preservation',
    dynamic:
      'Apostles drive outward pioneering; Shepherds ensure people are loved and protected. Essential balance of mission and soul care.',
    risk: 'Without partnership, the Apostle burns out the community or the Shepherd creates an inward-facing holy huddle.',
  },
  'prophet-evangelist': {
    label: 'Covenant vs. Hospitality',
    dynamic:
      'Prophets confront with divine truth; Evangelists welcome with relentless grace. Together they maintain good news with moral weight.',
    risk: 'Without partnership, the Prophet turns into an insular cynic, or the Evangelist cheapens grace into shallow accommodation.',
  },
  'prophet-teacher': {
    label: 'Spiritual Vision vs. Systematic Order',
    dynamic:
      'Prophets hear what the Spirit is saying now; Teachers build the durable doctrinal structures to sustain it across generations.',
    risk: 'Without partnership, the Prophet creates chaotic revolutions, or the Teacher fossilizes dead orthodoxy.',
  },
  'apostle-prophet': {
    label: 'The Foundation Engine (Eph 2:20)',
    dynamic:
      'Apostles pioneer strategic horizons; Prophets demand covenant alignment and divine presence. The dual catalytic foundation.',
    risk: 'Without mutual submission, the Apostle pursues fleshly ambition or the Prophet paralyzes momentum with hyper-critique.',
  },
  'evangelist-shepherd': {
    label: 'The Gathering & Holding Dynamic',
    dynamic:
      'Evangelists recruit outsiders across relational thresholds; Shepherds fold them into deep belonging and communal discipleship.',
    risk: 'Without partnership, the Evangelist drops converts with no shelter, or the Shepherd guards an aging, childless fold.',
  },
  'apostle-teacher': {
    label: 'The Movement Architect',
    dynamic:
      'Apostles cast bold systemic visions; Teachers write the curriculum and training systems to multiply the vision faithfully.',
    risk: 'Without balance, the Apostle launches half-baked ventures, or the Teacher produces abstract manuals that never launch.',
  },
  'apostle-evangelist': {
    label: 'The Outward Catalyst',
    dynamic:
      'Apostles break ground in new territory; Evangelists draw the surrounding community into the story with compelling contagion.',
    risk: 'Without grounding in Shepherd/Teacher care, converts are left un-discipled and structures collapse under growth.',
  },
  'shepherd-teacher': {
    label: 'The Constantinian Equilibrium',
    dynamic:
      'The classic Western pastoral synthesis: caring for the flock and preaching sound doctrine. Provides comfort, stability, and depth.',
    risk: 'Without Apostle, Prophet, and Evangelist challenge, this pairing traps the church in static maintenance and stagnation.',
  },
};

export function calculateTeamMetrics(members: TeamMember[]): ComputedTeamMetrics {
  const activeMembers = members.filter((m) => m.status === 'complete');
  const count = activeMembers.length;

  if (count === 0) {
    return getZeroMetrics();
  }

  // 1. Means, Primary & Secondary Counts
  const sums: Record<ApestFunction, number> = {
    apostle: 0,
    prophet: 0,
    evangelist: 0,
    shepherd: 0,
    teacher: 0,
  };
  const primaryCounts: Record<ApestFunction, number> = {
    apostle: 0,
    prophet: 0,
    evangelist: 0,
    shepherd: 0,
    teacher: 0,
  };
  const secondaryCounts: Record<ApestFunction, number> = {
    apostle: 0,
    prophet: 0,
    evangelist: 0,
    shepherd: 0,
    teacher: 0,
  };

  // Authority scoring
  const authoritySums: Record<ApestFunction, number> = {
    apostle: 0,
    prophet: 0,
    evangelist: 0,
    shepherd: 0,
    teacher: 0,
  };
  let totalAuthorityPool = 0;

  for (const m of activeMembers) {
    primaryCounts[m.profile.primary]++;
    secondaryCounts[m.profile.secondary]++;

    for (const f of APEST_ORDER) {
      const score = m.profile.scores[f]?.score ?? 0;
      sums[f] += score;

      if (m.hasFormalAuthority) {
        authoritySums[f] += score;
        totalAuthorityPool += score;
      }
    }
  }

  const means: Record<ApestFunction, number> = {
    apostle: Math.round((sums.apostle / count) * 10) / 10,
    prophet: Math.round((sums.prophet / count) * 10) / 10,
    evangelist: Math.round((sums.evangelist / count) * 10) / 10,
    shepherd: Math.round((sums.shepherd / count) * 10) / 10,
    teacher: Math.round((sums.teacher / count) * 10) / 10,
  };

  // 2. Deltas vs National Population Norms
  const deltasVsNorms: Record<ApestFunction, number> = {
    apostle: Math.round((means.apostle - POPULATION_BENCHMARKS.apostle) * 10) / 10,
    prophet: Math.round((means.prophet - POPULATION_BENCHMARKS.prophet) * 10) / 10,
    evangelist: Math.round((means.evangelist - POPULATION_BENCHMARKS.evangelist) * 10) / 10,
    shepherd: Math.round((means.shepherd - POPULATION_BENCHMARKS.shepherd) * 10) / 10,
    teacher: Math.round((means.teacher - POPULATION_BENCHMARKS.teacher) * 10) / 10,
  };

  // 3. Coverage Tiers
  const coverageTiers: Record<ApestFunction, CoverageTier> = {
    apostle: getCoverageTier(means.apostle, primaryCounts.apostle),
    prophet: getCoverageTier(means.prophet, primaryCounts.prophet),
    evangelist: getCoverageTier(means.evangelist, primaryCounts.evangelist),
    shepherd: getCoverageTier(means.shepherd, primaryCounts.shepherd),
    teacher: getCoverageTier(means.teacher, primaryCounts.teacher),
  };

  // 4. Authority Weights
  const authorityWeights: Record<ApestFunction, number> = {
    apostle: totalAuthorityPool > 0 ? Math.round((authoritySums.apostle / totalAuthorityPool) * 100) : 20,
    prophet: totalAuthorityPool > 0 ? Math.round((authoritySums.prophet / totalAuthorityPool) * 100) : 20,
    evangelist: totalAuthorityPool > 0 ? Math.round((authoritySums.evangelist / totalAuthorityPool) * 100) : 20,
    shepherd: totalAuthorityPool > 0 ? Math.round((authoritySums.shepherd / totalAuthorityPool) * 100) : 20,
    teacher: totalAuthorityPool > 0 ? Math.round((authoritySums.teacher / totalAuthorityPool) * 100) : 20,
  };

  // 5. "Jesus Space" Pentagon Area & Pleroma %
  // 5 vertices in order: Apostle (0), Prophet (1), Evangelist (2), Shepherd (3), Teacher (4)
  // Area = 1/2 * sin(72 deg) * sum(r_i * r_{i+1})
  const radScores = [
    means.apostle,
    means.prophet,
    means.evangelist,
    means.shepherd,
    means.teacher,
  ];
  const sin72 = Math.sin((72 * Math.PI) / 180); // ~0.9510565
  let areaSum = 0;
  for (let i = 0; i < 5; i++) {
    const rCurrent = radScores[i];
    const rNext = radScores[(i + 1) % 5];
    areaSum += rCurrent * rNext;
  }
  const computedArea = 0.5 * sin72 * areaSum;
  // Maximum area at 50 in all dimensions: 0.5 * sin(72) * 5 * 2500 = 5944.1
  const maxArea = 0.5 * sin72 * 5 * 50 * 50;
  const jesusSpaceArea = Math.min(100, Math.max(0, Math.round((computedArea / maxArea) * 100)));

  // 6. Pairwise Euclidean Distances
  const pairwiseTensions: PairwiseTension[] = [];
  let minDistance = Infinity;
  let maxDistance = -Infinity;
  let closestPair = { memberA: '', memberB: '', distance: 0 };
  let furthestPair = { memberA: '', memberB: '', distance: 0 };

  for (let i = 0; i < activeMembers.length; i++) {
    for (let j = i + 1; j < activeMembers.length; j++) {
      const mA = activeMembers[i];
      const mB = activeMembers[j];

      let sumSquareDiff = 0;
      for (const f of APEST_ORDER) {
        const sA = mA.profile.scores[f]?.score ?? 0;
        const sB = mB.profile.scores[f]?.score ?? 0;
        sumSquareDiff += Math.pow(sA - sB, 2);
      }
      const distance = Math.round(Math.sqrt(sumSquareDiff) * 10) / 10;

      if (distance < minDistance) {
        minDistance = distance;
        closestPair = { memberA: mA.name, memberB: mB.name, distance };
      }
      if (distance > maxDistance) {
        maxDistance = distance;
        furthestPair = { memberA: mA.name, memberB: mB.name, distance };
      }

      const keyPair1 = `${mA.profile.primary}-${mB.profile.primary}`;
      const keyPair2 = `${mB.profile.primary}-${mA.profile.primary}`;
      const dynamicInfo =
        PAIRWISE_THEOLOGICAL_DYNAMICS[keyPair1] ||
        PAIRWISE_THEOLOGICAL_DYNAMICS[keyPair2] || {
          label: `${capitalize(mA.profile.primary)} & ${capitalize(mB.profile.primary)}`,
          dynamic: 'Mutual complementary discipleship and shared calling in Christ.',
          risk: 'Misunderstanding different vocational orientations.',
        };

      pairwiseTensions.push({
        memberA: mA.name,
        memberB: mB.name,
        functionA: mA.profile.primary,
        functionB: mB.profile.primary,
        euclideanDistance: distance,
        tensionLabel: dynamicInfo.label,
        correctiveDynamic: dynamicInfo.dynamic,
        riskIfIgnored: dynamicInfo.risk,
      });
    }
  }

  // 7. Team Health Score (0 - 100)
  // Components:
  // - Pleroma Area (40%)
  // - Coverage Tier Balance (30%): all 5 represented without ABSENT gives full marks
  // - Outward Orientation (15%): Presence of A and E
  // - Authority Balance (15%): No single function holds > 40% authority
  let coverageScore = 0;
  const tiers = Object.values(coverageTiers);
  for (const t of tiers) {
    if (t === 'STRONG') coverageScore += 6;
    else if (t === 'PRESENT') coverageScore += 5;
    else if (t === 'THIN') coverageScore += 2;
  }

  const hasOutward =
    (primaryCounts.apostle > 0 || means.apostle >= 25) &&
    (primaryCounts.evangelist > 0 || means.evangelist >= 25);
  const outwardScore = hasOutward ? 15 : 7;

  const maxAuth = Math.max(...Object.values(authorityWeights));
  const authorityScore = maxAuth <= 35 ? 15 : maxAuth <= 45 ? 10 : 5;

  const teamHealthScore = Math.min(
    100,
    Math.round(jesusSpaceArea * 0.4 + coverageScore + outwardScore + authorityScore)
  );

  return {
    means,
    deltasVsNorms,
    coverageTiers,
    primaryCounts,
    secondaryCounts,
    authorityWeights,
    jesusSpaceArea,
    pairwiseTensions,
    teamHealthScore,
    closestPair,
    furthestPair,
  };
}

function getCoverageTier(mean: number, primaryCount: number): CoverageTier {
  if (mean >= 35 && primaryCount >= 1) return 'STRONG';
  if (mean >= 25) return 'PRESENT';
  if (mean >= 15) return 'THIN';
  return 'ABSENT';
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function getZeroMetrics(): ComputedTeamMetrics {
  const zeroScores: Record<ApestFunction, number> = {
    apostle: 0,
    prophet: 0,
    evangelist: 0,
    shepherd: 0,
    teacher: 0,
  };
  const absentTiers: Record<ApestFunction, CoverageTier> = {
    apostle: 'ABSENT',
    prophet: 'ABSENT',
    evangelist: 'ABSENT',
    shepherd: 'ABSENT',
    teacher: 'ABSENT',
  };
  return {
    means: zeroScores,
    deltasVsNorms: zeroScores,
    coverageTiers: absentTiers,
    primaryCounts: zeroScores,
    secondaryCounts: zeroScores,
    authorityWeights: zeroScores,
    jesusSpaceArea: 0,
    pairwiseTensions: [],
    teamHealthScore: 0,
    closestPair: { memberA: '', memberB: '', distance: 0 },
    furthestPair: { memberA: '', memberB: '', distance: 0 },
  };
}
