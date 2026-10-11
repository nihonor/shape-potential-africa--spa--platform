export interface Pillar {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  leadRole: string;
  color: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  programs: string[];
  keyOutcomes: string[];
  kpiMetric: {
    label: string;
    target: string;
    current: string;
    unit: string;
  };
}

export interface PersonaBenefit {
  id: string;
  roleTitle: string;
  category: 'Beneficiary' | 'Institutional' | 'Governance';
  headline: string;
  description: string;
  primaryGains: string[];
  platformTools: string[];
  quote: {
    text: string;
    author: string;
    title: string;
    location: string;
  };
}

export interface CoachingTopic {
  id: string;
  code: string;
  title: string;
  category: 'Foundational' | 'Leadership' | 'Operational & Systems';
  description: string;
  duration: string;
  outcomes: string[];
  suitableFor: string;
  suggestedPackage: 'Standard' | 'Advanced' | 'Custom';
}

export interface ServicePackage {
  id: string;
  name: string;
  tier: 'Standard' | 'Advanced' | 'Custom';
  participantBand: string;
  coachingHours: string;
  includedTopicsCount: number;
  basePriceUSD: number;
  deliveryMode: 'Virtual' | 'In-Person' | 'Hybrid';
  features: string[];
}

export interface RoadmapPhase {
  phase: number;
  name: string;
  period: string;
  beneficiaryTarget: string;
  strategicObjective: string;
  keyMilestones: string[];
  status: 'In Progress' | 'Upcoming' | 'Planned';
}

export interface VerifiedCertificate {
  code: string;
  recipientName: string;
  program: string;
  pillar: string;
  completionDate: string;
  grade: string;
  issuer: string;
  credentialId: string;
  skillsVerified: string[];
}

export const PILLARS: Pillar[] = [
  {
    id: 'technology',
    name: 'Technology & Digital Transformation',
    shortName: 'Technology',
    tagline: 'Bridging the continental AI, software & robotics divide',
    description: 'Delivering hands-on artificial intelligence, software engineering, and robotics labs with automated skill tracking and offline-capable e-learning.',
    leadRole: 'Technology Pillar Representative',
    color: 'emerald',
    accentBg: 'bg-emerald-50',
    accentBorder: 'border-emerald-200',
    accentText: 'text-emerald-800',
    programs: [
      'AI & Digital Skills Academy',
      'Robotics & Embedded Systems Lab Logs',
      'Cloud Architecture & Open Source Fellowships',
      'Digital Transformation Diagnostic for African Institutions'
    ],
    keyOutcomes: [
      'Accredited, verifiable digital credentials',
      'Algorithmic skill-progression vectors via FastAPI',
      'Low-bandwidth offline course access across remote regions'
    ],
    kpiMetric: {
      label: 'Certified in Digital Skills',
      target: '15,000',
      current: '2,840',
      unit: 'Engineers & Trainees'
    }
  },
  {
    id: 'education',
    name: 'Education & Institutional Capacitation',
    shortName: 'Education',
    tagline: 'Modernizing pedagogical leadership and learning infrastructure',
    description: 'Empowering primary, secondary, and tertiary educators with digitized curricula, stem instructional models, and centralized open research libraries.',
    leadRole: 'Education Pillar Representative',
    color: 'amber',
    accentBg: 'bg-amber-50',
    accentBorder: 'border-amber-200',
    accentText: 'text-amber-800',
    programs: [
      'Teacher Capacity Building Program',
      'Digital Curricula Adoption Accelerator',
      'Continental Open Research & E-Library Access',
      'STEM Classroom Modernization Kits'
    ],
    keyOutcomes: [
      'Over 200 school networks adopting standardized digital coursework',
      'Continuous pedagogical peer-coaching and evaluation',
      'Direct measurement of student STEM performance outcomes'
    ],
    kpiMetric: {
      label: 'Teachers Certified',
      target: '8,000',
      current: '1,420',
      unit: 'Certified Educators'
    }
  },
  {
    id: 'leadership',
    name: 'Leadership & Executive Governance',
    shortName: 'Leadership',
    tagline: 'Cultivating ethical, results-based civic and corporate stewards',
    description: 'Forming emerging public and private sector leaders through rigorous mentorship frameworks, organizational change coaching, and impact assessment.',
    leadRole: 'Leadership Pillar Representative',
    color: 'slate',
    accentBg: 'bg-slate-100',
    accentBorder: 'border-slate-300',
    accentText: 'text-slate-900',
    programs: [
      'Emerging Leaders Academy (Cohort Model)',
      'Executive Capacity Building for Ministries & NGOs',
      'Strategic Planning & Results-Based Leadership Coaching',
      'Continental Cross-Border Mentorship Network'
    ],
    keyOutcomes: [
      'Rigorous peer mentorship pairing with longitudinal career tracking',
      'Institutional diagnostics and tailored intervention roadmaps',
      'Audited leadership ethics and change-readiness indices'
    ],
    kpiMetric: {
      label: 'Leadership Cohorts Formed',
      target: '120',
      current: '34',
      unit: 'Active Cohorts'
    }
  },
  {
    id: 'young_startups',
    name: 'Young Startups & Continental Investment',
    shortName: 'Young Startups',
    tagline: 'From pitch sandbox to venture-backed commercial viability',
    description: 'Incubating high-growth African ventures through rigorous startup bootcamps, anonymized blind-graded pitch competitions, and direct investor forums.',
    leadRole: 'Startups Pillar Representative',
    color: 'indigo',
    accentBg: 'bg-indigo-50',
    accentBorder: 'border-indigo-200',
    accentText: 'text-indigo-800',
    programs: [
      'Continental Startup Bootcamps',
      'Blind-Graded Pitch Entry Sandbox',
      'Pitch & Investment Forums (Continental Heat Series)',
      'Seed Capital & Microfinance Pipeline Tracking'
    ],
    keyOutcomes: [
      'Zero-bias blind grading across innovation, viability, and impact',
      'Direct link to pre-vetted continental angel investors',
      'Structured employment tracking for funded ventures'
    ],
    kpiMetric: {
      label: 'Startups Incubated & Funded',
      target: '1,200',
      current: '215',
      unit: 'Enterprises'
    }
  },
  {
    id: 'agriculture',
    name: 'Smart Agriculture & Food Sovereignty',
    shortName: 'Agriculture',
    tagline: 'Digitizing smallholder farming and direct market distribution',
    description: 'Pairing precision agro-climatic training with a peer-to-peer digital marketplace that directly connects youth farmers with institutional buyers.',
    leadRole: 'Agriculture Pillar Representative',
    color: 'teal',
    accentBg: 'bg-teal-50',
    accentBorder: 'border-teal-200',
    accentText: 'text-teal-800',
    programs: [
      'Smart Agriculture Training Centers',
      'Agri-Market Access Digital Exchange',
      'Climate-Smart Yield & Post-Harvest Preservation',
      'Youth Agro-Entrepreneurship Cooperatives'
    ],
    keyOutcomes: [
      'Elimination of predatory middlemen via transparent buyer inquiries',
      'Direct household income growth verification',
      'Real-time commodity price transparency across regional borders'
    ],
    kpiMetric: {
      label: 'Produce Marketed via Platform',
      target: '50,000',
      current: '7,430',
      unit: 'Metric Tons'
    }
  }
];

export const PERSONA_BENEFITS: PersonaBenefit[] = [
  {
    id: 'beneficiary_youth',
    roleTitle: 'Youth & Emerging Trainees',
    category: 'Beneficiary',
    headline: 'Practical skills, zero dead-ends, and credentials employers verify.',
    description: 'Designed specifically for African learners who face costly mobile data and intermittent power. Access modular curricula offline and earn tamper-proof certificates.',
    primaryGains: [
      'Offline-First PWA: Cache lessons and submit quizzes without steady connection',
      'Verifiable QR Credentials: Publicly provable certificates with cryptographic verification codes',
      'Clear Skill Vectors: Algorithmic tracking of mastery across AI, programming, or agronomy',
      'Zero Tuition Barriers: Free cohort access for qualifying youth and marginalized applicants'
    ],
    platformTools: ['LMS Course Explorer', 'Offline Quiz Submissions', 'Digital Certificate Wallet'],
    quote: {
      text: 'Having course materials automatically sync when I reach town made it possible to complete my AI certification despite rural power cuts in Eastern Province.',
      author: 'Amina Mwangi',
      title: 'AI & Data Track Graduate',
      location: 'Nairobi, Kenya'
    }
  },
  {
    id: 'entrepreneur',
    roleTitle: 'Innovators & Startup Founders',
    category: 'Beneficiary',
    headline: 'Fair, blind pitch evaluation without insider gatekeeping.',
    description: 'Submit your deck, business plan, and financial projections directly into the MinIO-backed Pitch Sandbox. Expert judges evaluate your idea based purely on merit.',
    primaryGains: [
      'Anonymized Blind Review: Evaluated without demographic or personal name bias',
      'Multi-Criteria Rubric: Transparent feedback on innovation, viability, and financial rigor',
      'Direct Seed Access: Top entries qualify for Continental Pitch and Investment Forums',
      'Real-time Status Tracking: Observe cycle transitions from submission to finalist status'
    ],
    platformTools: ['Pitch Entry Sandbox', 'Pre-signed S3 Uploads', 'Blind Review Feedback'],
    quote: {
      text: 'Our logistics venture was evaluated strictly on market viability and unit economics. We secured our initial pilot grant without having elite alumni connections.',
      author: 'Kofi Mensah',
      title: 'Co-founder, FarmFlow Logistics',
      location: 'Accra, Ghana'
    }
  },
  {
    id: 'agri_producer',
    roleTitle: 'Farmers & Agri-Cooperatives',
    category: 'Beneficiary',
    headline: 'Sell produce directly to bulk buyers with transparent pricing.',
    description: 'Transform smallholder harvests into predictable commercial revenue. Connect directly with processors, school feeding programs, and regional distributors.',
    primaryGains: [
      'Direct Buyer Inquiries: Eliminate broker cuts that eat up to 40% of farm-gate value',
      'Verified Quality Taxonomy: List crops by standardized moisture, grade, and harvest date',
      'Localized Commodity Insights: Real-time price references across regional hubs',
      'Smart Agriculture Courses: Best practices in post-harvest drying and climate resilience'
    ],
    platformTools: ['Agri-Market Access Platform', 'Listing Inquiries Thread', 'Smart Ag Modules'],
    quote: {
      text: 'Listing our cooperative’s 40-ton soybean yield on the SPA Agri-Market allowed us to negotiate directly with an animal feed manufacturer at 30% higher margins.',
      author: 'Grace Uwase',
      title: 'Chairwoman, Terimbere Agritech Coop',
      location: 'Musanze, Rwanda'
    }
  },
  {
    id: 'organization',
    roleTitle: 'Institutions & Ministries',
    category: 'Institutional',
    headline: 'Evidence-based organizational capacity, tailored coaching & transparent billing.',
    description: 'Strengthen ministry departments, NGO teams, and corporate divisions. Complete an automated diagnostic, select tailored coaching tracks, and receive instant invoices.',
    primaryGains: [
      'Automated Needs Assessment: 7-dimension maturity scoring of leadership & project systems',
      '11 Structured Coaching Topics: From Results-Based Leadership to Baseline Impact Surveys',
      'Instant Commercial Invoicing: Configurable service tiers, VAT clarity, and PDF generation',
      'Longitudinal Impact Auditing: Pre and post-engagement performance benchmarks'
    ],
    platformTools: ['Organization Diagnostic Portal', 'Service Package Builder', 'Automated Invoicing'],
    quote: {
      text: 'The automated needs assessment identified our reporting and baseline survey bottlenecks immediately. The blended coaching engagement transformed our project velocity.',
      author: 'Dr. Samuel Osei',
      title: 'Director of Programs, West Africa Development Initiative',
      location: 'Abidjan, Côte d’Ivoire'
    }
  },
  {
    id: 'governance',
    roleTitle: 'Pillar Reps & Board of Trustees',
    category: 'Governance',
    headline: 'Strict RLS data isolation, blind peer grading & live 10-Year M&E dashboards.',
    description: 'Operational autonomy for thematic pillar managers with unified, read-only oversight for the Board of Trustees. Automated quarterly rollups ensure strategic accountability.',
    primaryGains: [
      'PostgreSQL Row-Level Security: Pillar reps operate in isolated data silos',
      'Automated Nightly M&E Jobs: Continuous roll-up of KPIs directly from transactional tables',
      'Target vs. Actual Tracking: Real-time alert triggers when KPIs fall below 70% of goal',
      'Inclusive Gender Metrics: Built-in verification of the 50% women and youth mandate'
    ],
    platformTools: ['IOMS Management Console', 'Blind Grading Terminal', 'Board Analytics View'],
    quote: {
      text: 'As Board Trustees, we require auditable evidence before each quarterly review. The platform gives us real-time milestone logs without interfering in daily operations.',
      author: 'Justice Victoria Adeleke',
      title: 'Member, Board of Trustees',
      location: 'Lagos, Nigeria'
    }
  }
];

export const COACHING_TOPICS: CoachingTopic[] = [
  {
    id: 'cb-foundational',
    code: 'FR-C2.1a',
    title: 'Capacity Building & Institutional Strengthening',
    category: 'Foundational',
    description: 'Core organizational assessment, governance systems, SOP design, and sustainable institutional frameworks.',
    duration: '40 Hours / 5 Days',
    outcomes: ['Comprehensive institutional baseline audit', 'Standard operating procedures (SOP) design', 'Governance risk matrix'],
    suitableFor: 'Ministries, Non-Profit Leadership, Emerging Parastatals',
    suggestedPackage: 'Standard'
  },
  {
    id: 'cb-leadership-core',
    code: 'FR-C2.1b',
    title: 'Leadership Training & Executive Development',
    category: 'Leadership',
    description: 'Cohort-based training for directors and mid-level managers focusing on ethical decision-making, crisis resilience, and strategic clarity.',
    duration: '32 Hours / 4 Days',
    outcomes: ['360-degree leadership diagnostic', 'Ethical decision framework', 'Cross-departmental collaboration models'],
    suitableFor: 'Executive Committees, Department Heads, Regional Managers',
    suggestedPackage: 'Standard'
  },
  {
    id: 'cb-strategic-dev',
    code: 'FR-C2.1c',
    title: 'Coaching: Strategic Development & Planning',
    category: 'Operational & Systems',
    description: 'Hands-on facilitation to build 3–5 year strategic masterplans, Theory of Change models, and measurable operational roadmaps.',
    duration: '48 Hours / 6 Days',
    outcomes: ['Validated 5-Year Strategic Masterplan', 'Theory of Change and logic framework', 'Quarterly milestone accountability scorecard'],
    suitableFor: 'C-Suite, Board Executive Committees, Strategic Planning Units',
    suggestedPackage: 'Advanced'
  },
  {
    id: 'cb-team-leadership',
    code: 'FR-C2.1d',
    title: 'Coaching: Team Leadership & High Performance',
    category: 'Leadership',
    description: 'Transforming cross-functional teams into self-synchronizing units with psychological safety, clear role chartering, and velocity metrics.',
    duration: '24 Hours / 3 Days',
    outcomes: ['Team charter and accountability agreements', 'Conflict resolution protocols', 'Sprint-based objective setting (OKRs)'],
    suitableFor: 'Project Managers, Technical Team Leads, Operations Supervisors',
    suggestedPackage: 'Standard'
  },
  {
    id: 'cb-org-behaviour',
    code: 'FR-C2.1e',
    title: 'Coaching: Organizational Behaviour & Change',
    category: 'Leadership',
    description: 'Navigating organizational restructures, culture shifts, digital transformations, and overcoming institutional resistance.',
    duration: '32 Hours / 4 Days',
    outcomes: ['Change-readiness index audit', 'Stakeholder alignment communications kit', 'Culture preservation roadmap'],
    suitableFor: 'Human Capital Officers, Change Management Taskforces',
    suggestedPackage: 'Advanced'
  },
  {
    id: 'cb-people-mgmt',
    code: 'FR-C2.1f',
    title: 'Coaching: People Management (Human Behaviour & Psychology)',
    category: 'Leadership',
    description: 'Applying behavioral economics and industrial psychology to talent retention, motivation, performance appraisal, and burnout mitigation.',
    duration: '24 Hours / 3 Days',
    outcomes: ['Behavior-anchored rating scales (BARS)', 'Motivational diagnostic framework', 'Preventative burnout support systems'],
    suitableFor: 'HR Directors, People Operations Leads, Unit Supervisors',
    suggestedPackage: 'Standard'
  },
  {
    id: 'cb-results-leadership',
    code: 'FR-C2.1g',
    title: 'Coaching: Organizational Innovation & Results-Based Leadership',
    category: 'Operational & Systems',
    description: 'Embedding agile execution, rapid prototyping, and empirical KPI attribution inside public and civil society bureaucracies.',
    duration: '36 Hours / 4.5 Days',
    outcomes: ['Results-Based Management (RBM) matrices', 'Rapid experimentation sandbox design', 'Value-for-money scorecard'],
    suitableFor: 'Senior Civil Servants, Innovation Leads, Managing Directors',
    suggestedPackage: 'Advanced'
  },
  {
    id: 'cb-project-mgmt',
    code: 'FR-C2.1h',
    title: 'Coaching: Project Management & Critical Path Execution',
    category: 'Operational & Systems',
    description: 'Modern project management methodologies (Agile + Waterfall hybrid), budget risk containment, and procurement timeline controls.',
    duration: '40 Hours / 5 Days',
    outcomes: ['Critical path schedule modeling', 'Risk register and mitigation matrix', 'Resource allocation balancing sheet'],
    suitableFor: 'Program Managers, Field Coordinators, Grants Officers',
    suggestedPackage: 'Standard'
  },
  {
    id: 'cb-pro-reporting',
    code: 'FR-C2.1i',
    title: 'Coaching: Professional Reporting & Technical Communication',
    category: 'Operational & Systems',
    description: 'Standardizing donor-grade quarterly reporting, executive board briefs, and high-stakes evidence presentations.',
    duration: '20 Hours / 2.5 Days',
    outcomes: ['Standardized donor reporting templates', 'Data visualization and infographic briefs', 'Zero-defect editorial review checklist'],
    suitableFor: 'Reporting Officers, Communications Specialists, M&E Officers',
    suggestedPackage: 'Standard'
  },
  {
    id: 'cb-baseline-survey',
    code: 'FR-C2.1j',
    title: 'Coaching: Baseline Survey & Impact Assessment',
    category: 'Operational & Systems',
    description: 'Designing rigorous field data collection, sample stratification, counterfactual analysis, and longitudinal evaluation.',
    duration: '48 Hours / 6 Days',
    outcomes: ['Survey instrument design and mobile field tools', 'Statistical sample sizing methodology', 'Automated dashboard aggregation workflow'],
    suitableFor: 'Monitoring & Evaluation Specialists, Field Researchers',
    suggestedPackage: 'Custom'
  },
  {
    id: 'cb-healthy-teams',
    code: 'FR-C2.1k',
    title: 'Coaching: Healthy Teams & Healthy Organizations',
    category: 'Leadership',
    description: 'Eradicating toxic workplace dynamics, fostering inclusive gender representation, and cultivating enduring institutional resilience.',
    duration: '24 Hours / 3 Days',
    outcomes: ['Workplace health & safety sentiment audit', 'Equity and inclusion policy code', 'Institutional wellness action plan'],
    suitableFor: 'Entire Executive and Management Leadership Teams',
    suggestedPackage: 'Standard'
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'pkg-standard',
    name: 'Foundation Institutional Cohort',
    tier: 'Standard',
    participantBand: 'Up to 25 Staff',
    coachingHours: '40 Hours Total',
    includedTopicsCount: 2,
    basePriceUSD: 4800,
    deliveryMode: 'Hybrid',
    features: [
      'Comprehensive organizational pre-assessment',
      'Choice of any 2 standard coaching/training modules',
      'Digital participant workbooks and toolkits',
      'System-issued certificates of completion',
      '60-day post-training follow-up check-in'
    ]
  },
  {
    id: 'pkg-advanced',
    name: 'Strategic Transformation Accelerator',
    tier: 'Advanced',
    participantBand: 'Up to 60 Staff',
    coachingHours: '90 Hours Total',
    includedTopicsCount: 4,
    basePriceUSD: 9600,
    deliveryMode: 'Hybrid',
    features: [
      'Deep 7-dimension institutional diagnostic report',
      'Choice of any 4 coaching/training modules',
      'Dedicated SPA Senior Master Coach assignment',
      'Customized SOP and strategy document templates',
      'Executive debrief presentation to Board/Ministry leadership',
      '6-month longitudinal impact tracking dashboard'
    ]
  },
  {
    id: 'pkg-custom',
    name: 'Continental Enterprise & Parastatal Retainer',
    tier: 'Custom',
    participantBand: 'Unlimited (Organization-Wide)',
    coachingHours: '180+ Hours Dedicated',
    includedTopicsCount: 8,
    basePriceUSD: 18500,
    deliveryMode: 'In-Person',
    features: [
      'Full institutional re-engineering roadmap',
      'Bespoke curriculum tailored to national strategic priorities',
      'Baseline survey design with field deployment oversight',
      'Direct integration with SPA IOMS automated M&E collector',
      'Quarterly executive coaching sessions with SPA Board Fellows',
      'Annual third-party institutional health audit certification'
    ]
  }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: 1,
    name: 'Foundation & Digital Architecture',
    period: '2026 – 2027',
    beneficiaryTarget: '500 Pilot Users',
    strategicObjective: 'Deploy resilient Gateway-Fronted microservices, offline PWA core, and PostgreSQL RLS security.',
    keyMilestones: [
      'SRS 1.0 architecture accepted and deployed behind Nginx gateway',
      'MinIO S3 quarantine upload scanning for pitch materials',
      'Core LMS engine with objective auto-grading and QR certificate generator',
      'Pilot cohorts in Rwanda and Kenya across AI and Smart Agriculture'
    ],
    status: 'In Progress'
  },
  {
    phase: 2,
    name: 'Pilot Rollout & Capacity Building',
    period: '2028 – 2029',
    beneficiaryTarget: '1,500 Beneficiaries',
    strategicObjective: 'Validate blind grading terminal, launch Agri-Market platform, and scale institutional coaching.',
    keyMilestones: [
      'First Continental Pitch and Investment Forum with 100% blind scoring',
      '50,000 metric tons produce traded across Agri-Market platform',
      '30 Institutional Clients enrolled in organizational coaching',
      'Validation of 50% women and marginalized group participation target'
    ],
    status: 'Upcoming'
  },
  {
    phase: 3,
    name: 'Regional Expansion & Hubs',
    period: '2030 – 2031',
    beneficiaryTarget: '5,000 Beneficiaries',
    strategicObjective: 'Establish physical and digital liaison offices across East, West, and Central Africa.',
    keyMilestones: [
      'Opening of regional coordination hubs in Nairobi, Accra, and Kinshasa',
      'Mid-term strategic evaluation audit (2031 statutory review)',
      'Multi-lingual portal localization (French, Swahili, Portuguese)',
      '100+ partner universities and secondary schools adopting digital curricula'
    ],
    status: 'Planned'
  },
  {
    phase: 4,
    name: 'Institutionalization & Scaling',
    period: '2032 – 2033',
    beneficiaryTarget: '15,000 Beneficiaries',
    strategicObjective: 'Integrate microfinance rails, expand robotics lab networks, and automate continental M&E.',
    keyMilestones: [
      'Microfinance and seed disbursement automated tracking integration',
      'Expansion to 500 active Agri-Market producer cooperatives',
      '50 funded startups advancing to Series A funding rounds',
      'Automated Ministry reporting dashboards across 6 partner nations'
    ],
    status: 'Planned'
  },
  {
    phase: 5,
    name: 'Continental Integration',
    period: '2034 – 2035',
    beneficiaryTarget: '35,000 Beneficiaries',
    strategicObjective: 'Full presence in 10+ African nations with unified cross-border credential reciprocity.',
    keyMilestones: [
      'Pan-African credential recognition agreements with regional trade blocs',
      'Cross-border agricultural trade corridors with zero tariff friction',
      '1,000+ certified master teachers mentoring across 10 countries',
      'Decentralized Redis edge-localized session nodes across 5 regions'
    ],
    status: 'Planned'
  },
  {
    phase: 6,
    name: 'Sustainability & Legacy',
    period: '2036',
    beneficiaryTarget: '50,000+ Active Users',
    strategicObjective: 'Self-sustaining continental institution with endowment funding and permanent alumni leadership.',
    keyMilestones: [
      'Final 10-Year Strategic Plan evaluation and public audit release',
      'Alumni endowment fund providing permanent seed microfinancing',
      '50,000+ total cumulative certified youths and professionals',
      'Permanent institutional knowledge repository open to African Union'
    ],
    status: 'Planned'
  }
];

export const SAMPLE_CERTIFICATES: Record<string, VerifiedCertificate> = {
  'SPA-2026-AI-8492': {
    code: 'SPA-2026-AI-8492',
    recipientName: 'Kezia Umutoni',
    program: 'AI & Digital Skills Academy — Advanced Specialization',
    pillar: 'Technology & Digital Transformation',
    completionDate: 'August 14, 2026',
    grade: 'Distinction (94.2%)',
    issuer: 'SHAPE Potential Africa — Academic Board',
    credentialId: 'CRED-UUID-8841-B920',
    skillsVerified: [
      'Deep Learning & Neural Networks',
      'Python for African Agronomic Modeling',
      'API Integration & Cloud Deployment',
      'Ethical AI Governance Frameworks'
    ]
  },
  'SPA-2026-AG-1903': {
    code: 'SPA-2026-AG-1903',
    recipientName: 'Emmanuel Chidubem',
    program: 'Smart Agriculture & Post-Harvest Preservation',
    pillar: 'Smart Agriculture & Food Sovereignty',
    completionDate: 'July 28, 2026',
    grade: 'Excellence (91.0%)',
    issuer: 'SHAPE Potential Africa — Agriculture Directorate',
    credentialId: 'CRED-UUID-1903-E551',
    skillsVerified: [
      'Drip Irrigation Scheduling & Soil Sensors',
      'Digital Marketplace Logistics & Commodity Grading',
      'Integrated Pest Management for Horticulture',
      'Cooperative Financial Governance'
    ]
  },
  'SPA-2026-LD-5521': {
    code: 'SPA-2026-LD-5521',
    recipientName: 'Fatu Kamara',
    program: 'Results-Based Leadership & Strategic Development',
    pillar: 'Leadership & Executive Governance',
    completionDate: 'September 02, 2026',
    grade: 'Honors (96.5%)',
    issuer: 'SHAPE Potential Africa — Executive Office',
    credentialId: 'CRED-UUID-5521-F904',
    skillsVerified: [
      'Theory of Change & Strategic Alignment',
      'Organizational Behavior & Change Navigation',
      'Cross-Functional Team Health Coaching',
      'Evidence-Based Impact Assessment'
    ]
  }
};
