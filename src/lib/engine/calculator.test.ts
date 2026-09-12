import { describe, it, expect } from 'vitest';
import { calculateTeamMetrics, POPULATION_BENCHMARKS } from './calculator';
import { INITIAL_RESTORATION_ROAD_STATE } from '../fixtures/restoration-road';

describe('APEST Teams Arithmetic Engine', () => {
  it('calculates exact team means for Restoration Road', () => {
    const metrics = calculateTeamMetrics(INITIAL_RESTORATION_ROAD_STATE.members);

    // Marcus: 46 A, 35 T, 27 P, 13 S, 9 E
    // Priya:   8 A, 16 T, 47 P, 36 S, 24 E
    // James:   7 A, 37 T, 21 P, 48 S, 12 E
    // Sofia:   8 A, 14 T, 20 P, 38 S, 45 E
    // Daniel:  6 A, 38 T, 46 P, 22 S, 11 E
    // Sums:
    // A: 46 + 8 + 7 + 8 + 6 = 75 => Mean = 75 / 5 = 15.0
    // P: 27 + 47 + 21 + 20 + 46 = 161 => Mean = 161 / 5 = 32.2
    // E: 9 + 24 + 12 + 45 + 11 = 101 => Mean = 101 / 5 = 20.2
    // S: 13 + 36 + 48 + 38 + 22 = 157 => Mean = 157 / 5 = 31.4
    // T: 35 + 16 + 37 + 14 + 38 = 140 => Mean = 140 / 5 = 28.0

    expect(metrics.means.apostle).toBe(15.0);
    expect(metrics.means.prophet).toBe(32.2);
    expect(metrics.means.evangelist).toBe(20.2);
    expect(metrics.means.shepherd).toBe(31.4);
    expect(metrics.means.teacher).toBe(28.0);
  });

  it('calculates correct benchmark deltas against 150,000 national test-takers', () => {
    const metrics = calculateTeamMetrics(INITIAL_RESTORATION_ROAD_STATE.members);

    // A: 15.0 - 21.0 = -6.0
    // P: 32.2 - 23.0 = +9.2
    // E: 20.2 - 25.0 = -4.8
    // S: 31.4 - 27.0 = +4.4
    // T: 28.0 - 28.0 = 0.0

    expect(metrics.deltasVsNorms.apostle).toBe(-6.0);
    expect(metrics.deltasVsNorms.prophet).toBe(9.2);
    expect(metrics.deltasVsNorms.evangelist).toBe(-4.8);
    expect(metrics.deltasVsNorms.shepherd).toBe(4.4);
    expect(metrics.deltasVsNorms.teacher).toBe(0.0);
  });

  it('evaluates accurate coverage tiers', () => {
    const metrics = calculateTeamMetrics(INITIAL_RESTORATION_ROAD_STATE.members);

    // Prophet: mean 32.2 (>= 25) => PRESENT (or STRONG if >= 35)
    // Shepherd: mean 31.4 (>= 25) => PRESENT
    // Teacher: mean 28.0 (>= 25) => PRESENT
    // Evangelist: mean 20.2 (>= 15) => THIN
    // Apostle: mean 15.0 (>= 15) => THIN
    expect(metrics.coverageTiers.prophet).toBe('PRESENT');
    expect(metrics.coverageTiers.shepherd).toBe('PRESENT');
    expect(metrics.coverageTiers.teacher).toBe('PRESENT');
    expect(metrics.coverageTiers.evangelist).toBe('THIN');
    expect(metrics.coverageTiers.apostle).toBe('THIN');
  });

  it('calculates the pentagonal "Jesus Space" area and Pleroma metric', () => {
    const metrics = calculateTeamMetrics(INITIAL_RESTORATION_ROAD_STATE.members);
    expect(metrics.jesusSpaceArea).toBeGreaterThan(20);
    expect(metrics.jesusSpaceArea).toBeLessThan(80);
  });

  it('computes pairwise Euclidean distances and identifies tensions', () => {
    const metrics = calculateTeamMetrics(INITIAL_RESTORATION_ROAD_STATE.members);

    // 5 members => (5 * 4) / 2 = 10 pairwise tensions
    expect(metrics.pairwiseTensions.length).toBe(10);
    expect(metrics.closestPair.distance).toBeGreaterThan(0);
    expect(metrics.furthestPair.distance).toBeGreaterThan(metrics.closestPair.distance);
  });

  it('calculates formal authority weights reflecting veto power', () => {
    const metrics = calculateTeamMetrics(INITIAL_RESTORATION_ROAD_STATE.members);

    // Marcus (AT) and James (ST) have formal authority
    // Together they concentrate high Shepherd and Teacher institutional control
    expect(metrics.authorityWeights.shepherd).toBeGreaterThan(15);
    expect(metrics.authorityWeights.teacher).toBeGreaterThan(25);
  });
});
