import { TeamState } from '../types/apest';

export const INITIAL_RESTORATION_ROAD_STATE: TeamState = {
  team: {
    teamName: 'Restoration Road Community Church',
    city: 'Denver, CO',
    ecclesialType: 'church_staff',
    tenure: '2-3 years together (9-year-old plant)',
    statedMission:
      'To be an incarnational, sent community in East Denver that makes disciples, embodies Jesus’ kingdom, and plants neighborhood expressions across the city.',
    persistentFrustration:
      'Attendance has plateaued for 3 years at ~340 adults. Staff meetings are consumed by Sunday logistics, pastoral emergencies, and budget maintenance. Our actual output is inward-facing care.',
    thrivingVision:
      'Activating new missional communities outside the church building, breaking our pastoral care bottleneck, and empowering our team to lead with spiritual boldness rather than operational management.',
  },
  capacity: 5,
  decisions: [
    {
      id: 'dec_aurora_house_churches',
      title: 'Launch Missional Micro-Church Network in Aurora',
      date: '2026-08-15',
      context: 'Discerning whether to fund 3 lay-led neighborhood missional households vs expanding main auditorium staff.',
      notes: {
        apostle: [
          'Essential strategic expansion: establishes apostolic foothold in underserved immigrant corridor.',
          'Decentralized model lowers institutional overhead and multiplies missional reach.',
        ],
        prophet: [
          'Tests our covenant integrity: are we seeking kingdom fruit or protecting Sunday attendance numbers?',
          'Demands radical prayer and ethical vetting of lay leaders before commissioning.',
        ],
        evangelist: [
          'Massive relational surface area for non-churched neighbors who will never enter our Sunday building.',
          'Sofia commits to training host families in hospitality and table discipleship.',
        ],
        shepherd: [
          'High risk of pastoral isolation: who cares for the lay house pastors when crisis hits?',
          'James insists on a bi-weekly care rhythm before approving launch.',
        ],
        teacher: [
          'Requires clear theological guardrails, hermeneutical training, and durable covenant standards.',
        ],
      },
      covenantAgreement:
        'Unanimously approved launch of 2 pilot households for 6 months, with James stewarding weekly care check-ins and Marcus providing apostolic commissioning.',
    },
  ],
  members: [
    {
      id: 'marcus-webb',
      name: 'Marcus Webb',
      role: 'Lead Pastor',
      tenureYears: 9,
      isStaff: true,
      hasFormalAuthority: true,
      email: 'marcus@restorationroad.org',
      status: 'complete',
      profile: {
        primary: 'apostle',
        secondary: 'teacher',
        scores: {
          apostle: { score: 46, rank: 1, role: 'primary' },
          teacher: { score: 35, rank: 2, role: 'secondary' },
          prophet: { score: 27, rank: 3, role: 'supplementary' },
          shepherd: { score: 13, rank: 4, role: 'supplementary' },
          evangelist: { score: 9, rank: 5, role: 'supplementary' },
        },
        combination: {
          label: 'Architect Educator (A-T)',
          populationPercent: 5,
          descriptor:
            'Pioneers through systematic frameworks and deep theological architecture, cultivating movements driven by foundational truth.',
        },
        benchmarks: {
          apostle: { you: 46, others: 21, populationPercent: 14 },
          teacher: { you: 35, others: 28, populationPercent: 22 },
          prophet: { you: 27, others: 23, populationPercent: 18 },
          shepherd: { you: 13, others: 27, populationPercent: 28 },
          evangelist: { you: 9, others: 25, populationPercent: 18 },
        },
        supplementaryMaturity: [
          {
            key: 'shepherd',
            oneStepTowardMaturity:
              'Engage in a 30-minute "humanizing conversation" with pastoral leaders before casting major initiatives to gauge relational cost.',
          },
          {
            key: 'evangelist',
            oneStepTowardMaturity:
              'Translate dense architectural frameworks into accessible, everyday stories for non-churched neighbors.',
          },
        ],
      },
    },
    {
      id: 'priya-nair',
      name: 'Priya Nair',
      role: 'Director of Community Formation',
      tenureYears: 3,
      isStaff: true,
      hasFormalAuthority: false,
      email: 'priya@restorationroad.org',
      status: 'complete',
      profile: {
        primary: 'prophet',
        secondary: 'shepherd',
        scores: {
          prophet: { score: 47, rank: 1, role: 'primary' },
          shepherd: { score: 36, rank: 2, role: 'secondary' },
          evangelist: { score: 24, rank: 3, role: 'supplementary' },
          teacher: { score: 16, rank: 4, role: 'supplementary' },
          apostle: { score: 8, rank: 5, role: 'supplementary' },
        },
        combination: {
          label: 'Contemplative Healer (P-S)',
          populationPercent: 6,
          descriptor:
            'Anchors the community in covenant fidelity, contemplative stillness, and deep emotional and spiritual restoration.',
        },
        benchmarks: {
          prophet: { you: 47, others: 23, populationPercent: 18 },
          shepherd: { you: 36, others: 27, populationPercent: 28 },
          evangelist: { you: 24, others: 25, populationPercent: 18 },
          teacher: { you: 16, others: 28, populationPercent: 22 },
          apostle: { you: 8, others: 21, populationPercent: 14 },
        },
        supplementaryMaturity: [
          {
            key: 'apostle',
            oneStepTowardMaturity:
              'Channel prophetic critique into actionable, pioneering prototypes rather than withdrawing when systems resist.',
          },
          {
            key: 'teacher',
            oneStepTowardMaturity:
              'Document discernment principles into reproducible guides for lay community facilitators.',
          },
        ],
      },
    },
    {
      id: 'james-okafor',
      name: 'James Okafor',
      role: 'Executive Pastor',
      tenureYears: 4,
      isStaff: true,
      hasFormalAuthority: true,
      email: 'james@restorationroad.org',
      status: 'complete',
      profile: {
        primary: 'shepherd',
        secondary: 'teacher',
        scores: {
          shepherd: { score: 48, rank: 1, role: 'primary' },
          teacher: { score: 37, rank: 2, role: 'secondary' },
          prophet: { score: 21, rank: 3, role: 'supplementary' },
          evangelist: { score: 12, rank: 4, role: 'supplementary' },
          apostle: { score: 7, rank: 5, role: 'supplementary' },
        },
        combination: {
          label: 'Pastoral Architect (S-T)',
          populationPercent: 18,
          descriptor:
            'The classic Shepherd-Teacher stabilizer, protecting staff health, structural order, and community well-being.',
        },
        benchmarks: {
          shepherd: { you: 48, others: 27, populationPercent: 28 },
          teacher: { you: 37, others: 28, populationPercent: 22 },
          prophet: { you: 21, others: 23, populationPercent: 18 },
          evangelist: { you: 12, others: 25, populationPercent: 18 },
          apostle: { you: 7, others: 21, populationPercent: 14 },
        },
        supplementaryMaturity: [
          {
            key: 'apostle',
            oneStepTowardMaturity:
              'Allow necessary apostolic disequilibrium to unfold without instinctively neutralizing tension in the name of safety.',
          },
          {
            key: 'evangelist',
            oneStepTowardMaturity:
              'Reposition operational budgets to aggressively fund outward hospitality and margin initiatives.',
          },
        ],
      },
    },
    {
      id: 'sofia-reyes',
      name: 'Sofia Reyes',
      role: 'Outreach & Neighboring Director',
      tenureYears: 2,
      isStaff: true,
      hasFormalAuthority: false,
      email: 'sofia@restorationroad.org',
      status: 'complete',
      profile: {
        primary: 'evangelist',
        secondary: 'shepherd',
        scores: {
          evangelist: { score: 45, rank: 1, role: 'primary' },
          shepherd: { score: 38, rank: 2, role: 'secondary' },
          prophet: { score: 20, rank: 3, role: 'supplementary' },
          teacher: { score: 14, rank: 4, role: 'supplementary' },
          apostle: { score: 8, rank: 5, role: 'supplementary' },
        },
        combination: {
          label: 'Hospitable Herald (E-S)',
          populationPercent: 9,
          descriptor:
            'Builds relational bridges to outsiders, embodies compassionate hospitality, and welcomes strangers into belonging.',
        },
        benchmarks: {
          evangelist: { you: 45, others: 25, populationPercent: 18 },
          shepherd: { you: 38, others: 27, populationPercent: 28 },
          prophet: { you: 20, others: 23, populationPercent: 18 },
          teacher: { you: 14, others: 28, populationPercent: 22 },
          apostle: { you: 8, others: 21, populationPercent: 14 },
        },
        supplementaryMaturity: [
          {
            key: 'teacher',
            oneStepTowardMaturity:
              'Synthesize conversational evangelism methods into theological training modules for the church.',
          },
          {
            key: 'prophet',
            oneStepTowardMaturity:
              'Pair gospel hospitality with prophetic challenge, ensuring grace calls people into holy transformation.',
          },
        ],
      },
    },
    {
      id: 'daniel-park',
      name: 'Daniel Park',
      role: 'Worship & Arts Pastor',
      tenureYears: 2,
      isStaff: true,
      hasFormalAuthority: false,
      email: 'daniel@restorationroad.org',
      status: 'complete',
      profile: {
        primary: 'prophet',
        secondary: 'teacher',
        scores: {
          prophet: { score: 46, rank: 1, role: 'primary' },
          teacher: { score: 38, rank: 2, role: 'secondary' },
          shepherd: { score: 22, rank: 3, role: 'supplementary' },
          evangelist: { score: 11, rank: 4, role: 'supplementary' },
          apostle: { score: 6, rank: 5, role: 'supplementary' },
        },
        combination: {
          label: 'Prophetic Reformer (P-T)',
          populationPercent: 7,
          descriptor:
            'Communicates transcendent truth through creative liturgy, song, and doctrinal depth, awakening hunger for God.',
        },
        benchmarks: {
          prophet: { you: 46, others: 23, populationPercent: 18 },
          teacher: { you: 38, others: 28, populationPercent: 22 },
          shepherd: { you: 22, others: 27, populationPercent: 28 },
          evangelist: { you: 11, others: 25, populationPercent: 18 },
          apostle: { you: 6, others: 21, populationPercent: 14 },
        },
        supplementaryMaturity: [
          {
            key: 'evangelist',
            oneStepTowardMaturity:
              'Design musical and artistic liturgy that is emotionally resonant and intelligible for first-time seekers.',
          },
          {
            key: 'shepherd',
            oneStepTowardMaturity:
              'Nurture the volunteer musicians pastorally, prioritizing their souls over Sunday stage execution.',
          },
        ],
      },
    },
  ],
};
