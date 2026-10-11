import React, { useState } from 'react';
import { 
  Users, 
  ShieldAlert, 
  GraduationCap, 
  Rocket, 
  Sprout, 
  Building2, 
  Lock, 
  Eye, 
  BarChart3, 
  FileCheck2,
  Database,
  ArrowRight
} from 'lucide-react';

export const SystemOverview: React.FC = () => {
  const [activeView, setActiveView] = useState<'public' | 'internal'>('public');

  return (
    <section id="overview" className="pt-36 pb-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-emerald-900 tracking-wider uppercase mb-2">
            System Purpose & Dual-Core Architecture
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight text-balance">
            What SHAPE Potential Africa Does: Bridging Frontline Action and Rigorous Governance.
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Derived directly from the 2026â€“2036 Strategic Plan, SPA is neither a generic learning site nor an isolated back-office tool. It is an integrated operating system with two synchronized faces designed specifically for low-connectivity African environments.
          </p>
        </div>

        {/* Dual-View Switcher: Interactive Filter Tabs (Button elements with click handlers) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-stone-200">
          <div className="flex items-center gap-1 p-1 bg-stone-200/70 rounded-lg">
            <button
              onClick={() => setActiveView('public')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeView === 'public'
                  ? 'bg-white text-stone-950 shadow-xs'
                  : 'text-stone-600 hover:text-stone-950'
              }`}
            >
              Face 1: Public-Facing Portal
            </button>
            <button
              onClick={() => setActiveView('internal')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                activeView === 'internal'
                  ? 'bg-white text-stone-950 shadow-xs'
                  : 'text-stone-600 hover:text-stone-950'
              }`}
            >
              Face 2: Internal Org Management (IOMS)
            </button>
          </div>

          <div className="text-xs text-stone-500 flex items-center gap-2">
            <span>Actor Scope:</span>
            <span className="font-medium text-stone-800">
              {activeView === 'public' ? 'Beneficiaries, Trainees, Startups, Farmers & Institutions' : 'Pillar Reps, Expert Judges, Executive Office & Board'}
            </span>
          </div>
        </div>

        {/* Dynamic View Display */}
        {activeView === 'public' ? (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200/90 shadow-xs">
              <div className="max-w-2xl mb-6">
                <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block mb-1">
                  Public Portal Modules
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-950">
                  Self-Service Empowerment for 50,000+ African Citizens & Institutions
                </h3>
                <p className="text-sm text-stone-600 mt-2">
                  Trainees, founders, and agricultural cooperatives access training, funding pipelines, and direct buyers through an offline-resilient PWA frontend.
                </p>
              </div>

              {/* 4 Core Pillars of Public Portal */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Module 1: Self-Service Profile & Onboarding */}
                <div className="p-5 rounded-lg bg-stone-50 border border-stone-200/70 hover:border-emerald-700/50 transition-colors">
                  <div className="w-9 h-9 rounded-md bg-emerald-100/80 flex items-center justify-center text-emerald-900 mb-4">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-mono text-stone-400 mb-1">MODULE FR-A1</div>
                  <h4 className="text-sm font-bold text-stone-950 mb-2">Inclusive Onboarding</h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Self-service registration capturing pillar interests, age verification, and demographic flags to audit the 50% women & youth quota.
                  </p>
                  <div className="text-[11px] text-emerald-800 font-medium">
                    âœ“ Offline IndexedDB form cache
                  </div>
                </div>

                {/* Module 2: E-Learning & Verification */}
                <div className="p-5 rounded-lg bg-stone-50 border border-stone-200/70 hover:border-emerald-700/50 transition-colors">
                  <div className="w-9 h-9 rounded-md bg-amber-100/80 flex items-center justify-center text-amber-900 mb-4">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-mono text-stone-400 mb-1">MODULE FR-A2</div>
                  <h4 className="text-sm font-bold text-stone-950 mb-2">Curated LMS & QR Verification</h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Pillar curricula with adaptive bitrate video, objective auto-grading, and cryptographically verifiable PDF certificates.
                  </p>
                  <div className="text-[11px] text-emerald-800 font-medium">
                    âœ“ Public /verify/:code lookup
                  </div>
                </div>

                {/* Module 3: Pitch Entry Sandbox */}
                <div className="p-5 rounded-lg bg-stone-50 border border-stone-200/70 hover:border-emerald-700/50 transition-colors">
                  <div className="w-9 h-9 rounded-md bg-indigo-100/80 flex items-center justify-center text-indigo-900 mb-4">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-mono text-stone-400 mb-1">MODULE FR-A3</div>
                  <h4 className="text-sm font-bold text-stone-950 mb-2">Pitch Entry Sandbox</h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Upload business plans and pitch decks directly to MinIO via pre-signed URLs with deadline locking and quarantine virus scanning.
                  </p>
                  <div className="text-[11px] text-emerald-800 font-medium">
                    âœ“ Anti-bias anonymized intake
                  </div>
                </div>

                {/* Module 4: Agri-Market Access & Org Coaching */}
                <div className="p-5 rounded-lg bg-stone-50 border border-stone-200/70 hover:border-emerald-700/50 transition-colors">
                  <div className="w-9 h-9 rounded-md bg-teal-100/80 flex items-center justify-center text-teal-900 mb-4">
                    <Sprout className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-mono text-stone-400 mb-1">MODULE FR-C1/C4</div>
                  <h4 className="text-sm font-bold text-stone-950 mb-2">Agri-Market & Org Coaching</h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Direct marketplace for farmer produce, plus institutional capacity booking with automated needs assessment and instant invoices.
                  </p>
                  <div className="text-[11px] text-emerald-800 font-medium">
                    âœ“ Real-time buyer inquiries & billing
                  </div>
                </div>

              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-stone-900 text-stone-100 rounded-xl p-6 sm:p-8 border border-stone-800 shadow-md">
              <div className="max-w-2xl mb-6">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                  Internal Governance & Operational Engine
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-100">
                  Strict Data Isolation, Anonymized Grading & Automated 10-Year M&E
                </h3>
                <p className="text-sm text-stone-400 mt-2">
                  Operating behind Nginx reverse proxy with PostgreSQL Row-Level Security, NestJS RBAC guards, and FastAPI computation workers.
                </p>
              </div>

              {/* 4 Core Pillars of Internal IOMS */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Internal 1: RBAC & PostgreSQL RLS */}
                <div className="p-5 rounded-lg bg-stone-800/90 border border-stone-700/80">
                  <div className="w-9 h-9 rounded-md bg-amber-950/80 border border-amber-700/50 flex items-center justify-center text-amber-400 mb-4">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-mono text-stone-400 mb-1">REQUIREMENT FR-B1</div>
                  <h4 className="text-sm font-bold text-stone-100 mb-2">Pillar-Level RLS Isolation</h4>
                  <p className="text-xs text-stone-400 leading-relaxed mb-3">
                    Five Pillar Reps manage only their assigned pillar data. Database RLS prevents unauthorized cross-track access, with immutable audit logging.
                  </p>
                  <div className="text-[11px] text-amber-400 font-medium font-mono">
                    Enforced at PostgreSQL layer
                  </div>
                </div>

                {/* Internal 2: Blind Grading Terminal */}
                <div className="p-5 rounded-lg bg-stone-800/90 border border-stone-700/80">
                  <div className="w-9 h-9 rounded-md bg-indigo-950/80 border border-indigo-700/50 flex items-center justify-center text-indigo-400 mb-4">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-mono text-stone-400 mb-1">REQUIREMENT FR-B2</div>
                  <h4 className="text-sm font-bold text-stone-100 mb-2">Blind Grading Terminal</h4>
                  <p className="text-xs text-stone-400 leading-relaxed mb-3">
                    Expert Judges score pitch entries with beneficiary names redacted. Multi-criteria rubrics and blind peer scoring prevent bias.
                  </p>
                  <div className="text-[11px] text-indigo-400 font-medium font-mono">
                    Conflict recusal + automated weights
                  </div>
                </div>

                {/* Internal 3: Nightly Automated M&E Engine */}
                <div className="p-5 rounded-lg bg-stone-800/90 border border-stone-700/80">
                  <div className="w-9 h-9 rounded-md bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-emerald-400 mb-4">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-mono text-stone-400 mb-1">REQUIREMENT FR-B3</div>
                  <h4 className="text-sm font-bold text-stone-100 mb-2">Automated M&E Aggregator</h4>
                  <p className="text-xs text-stone-400 leading-relaxed mb-3">
                    Nightly FastAPI jobs roll up live transactions into quarterly KPI snapshots: certified trainees, produce volume, and funded startups.
                  </p>
                  <div className="text-[11px] text-emerald-400 font-medium font-mono">
                    Target vs. actual warning threshold
                  </div>
                </div>

                {/* Internal 4: Board of Trustees Oversight */}
                <div className="p-5 rounded-lg bg-stone-800/90 border border-stone-700/80">
                  <div className="w-9 h-9 rounded-md bg-stone-700/60 border border-stone-600/50 flex items-center justify-center text-stone-300 mb-4">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-mono text-stone-400 mb-1">GOVERNANCE LAYER</div>
                  <h4 className="text-sm font-bold text-stone-100 mb-2">Board Oversight Dashboard</h4>
                  <p className="text-xs text-stone-400 leading-relaxed mb-3">
                    Read-only analytical visibility into 10-Year Plan phases (1 to 6) and donor compliance metrics, strictly isolating trustees from operational writes.
                  </p>
                  <div className="text-[11px] text-stone-300 font-medium font-mono">
                    3-Year term limit monitoring
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
