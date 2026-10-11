import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Server, 
  ArrowLeft
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);

  const stages = [
    {
      number: 1,
      title: 'Inclusive Onboarding & Diagnostic',
      subtitle: 'Self-service registration with offline sync & institutional assessment',
      badge: 'Step 01',
      actor: 'Beneficiary (Individual) or Institutional Client',
      description: 'Users onboard via email or Google OAuth. Demographics, age verification, and pillar interests are recorded to audit the 50% women & youth inclusion quota. For organizations, an automated diagnostic scores institutional maturity.',
      techMechanism: 'PWA IndexedDB form caching captures inputs offline; replayed to Nginx upon network reconnect. Organization profiles link to multi-topic coaching requests.',
      inputs: ['Demographic survey & pillar preferences', 'Organization size, sector & leadership challenges', 'Offline device network state'],
      outputs: ['Verified beneficiary profile or Org record', 'Audited inclusion flag (women/youth >= 50%)', 'Automated readiness score & package recommendation']
    },
    {
      number: 2,
      title: 'Curated E-Learning & Skill Tracking',
      subtitle: 'Hierarchical curricula with adaptive video and automated quizzes',
      badge: 'Step 02',
      actor: 'Trainees & Pillar Representatives',
      description: 'Beneficiaries progress through modular lessons (Pillar → Program → Course → Module → Lesson). Video resumes seamlessly across devices. Auto-graded objective quizzes provide immediate feedback with offline quiz download support.',
      techMechanism: 'Video streams via pre-signed MinIO URLs with adaptive bitrate (360p–720p). Quiz submissions trigger Redis events; dynamic skill vectors update automatically.',
      inputs: ['Lesson video watch positions', 'Objective quiz question responses', 'Pillar-specific assignment uploads'],
      outputs: ['Course completion percentage', 'Aggregated skill mastery score', 'Passing threshold evaluation (>= 70%)']
    },
    {
      number: 3,
      title: 'Pitch Sandbox & Direct Agri-Marketplace',
      subtitle: 'Real-world application: blind funding reviews & produce trade',
      badge: 'Step 03',
      actor: 'Startup Founders, Farmers & Buyers',
      description: 'Young Startups submit decks and business plans into the Pitch Sandbox via direct pre-signed URLs. Agriculture trainees list produce batches directly to commercial buyers with transparent price discovery.',
      techMechanism: 'Decks land in MinIO quarantine prefix for malware scan before promotion. Pitch metadata is stripped of personal identifiers before judge dispatch.',
      inputs: ['Business plan (PDF) & pitch slide deck', 'Agricultural produce listings (grade, tons, price)', 'Direct buyer inquiry threads'],
      outputs: ['Anonymized submission code (e.g. PITCH-2028-00417)', 'Automated judge load-balancing assignment', 'Confirmed commercial transaction & price reference']
    },
    {
      number: 4,
      title: 'Verification, Blind Grading & 10-Year M&E',
      subtitle: 'Verifiable credentials, peer scoring rubrics & Board oversight',
      badge: 'Step 04',
      actor: 'Judges, Executive Office & Board of Trustees',
      description: 'Graduates receive verifiable QR-enabled certificates stored in MinIO. Judges score anonymized startups across 5 rubric criteria. Nightly M&E workers aggregate transactions into quarterly Board reports tracking the 2026–2036 Strategic Plan.',
      techMechanism: 'PDF certificate worker hashes credential ID into QR code. FastAPI aggregates me_pillar_metrics; PostgreSQL RLS guarantees strict cross-pillar data isolation.',
      inputs: ['Course completion events', 'Judge scores across Innovation, Viability & Impact', 'Transactional logs across all 5 pillars'],
      outputs: ['Publicly verifiable credential at /verify/:code', 'Ranked competition leaderboard in Redis', 'Audited quarterly M&E report for Board review']
    }
  ];

  const current = stages[activeStage - 1];

  return (
    <section id="how-it-works" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4D4D4D] tracking-tight">
            How the Platform Works
          </h2>
          <p className="mt-3 text-base text-[#717171]">
            An end-to-end operational pipeline connecting learning, entrepreneurship, and agricultural markets with rigorous governance oversight.
          </p>
        </div>

        {/* 4-Stage Stepper Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stages.map((stage) => {
            const isActive = activeStage === stage.number;
            return (
              <button
                key={stage.number}
                onClick={() => setActiveStage(stage.number)}
                className={`p-5 rounded-lg text-left transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#E8F5E9] border-[#4CAF4F] shadow-xs'
                    : 'bg-[#F5F7FA] text-[#4D4D4D] border-gray-200 hover:border-gray-300 hover:bg-gray-100/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold tracking-wider ${isActive ? 'text-[#4CAF4F]' : 'text-[#89939E]'}`}>
                    STAGE 0{stage.number}
                  </span>
                  {isActive && <div className="w-2.5 h-2.5 rounded-full bg-[#4CAF4F]" />}
                </div>
                <div className={`text-sm font-bold truncate ${isActive ? 'text-[#263238]' : 'text-[#4D4D4D]'}`}>
                  {stage.title}
                </div>
                <div className={`text-xs mt-1 truncate ${isActive ? 'text-[#4CAF4F]' : 'text-[#717171]'}`}>
                  {stage.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Workspace */}
        <div className="bg-[#F5F7FA] rounded-xl border border-gray-200/90 p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Stage Narrative & Details */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#4CAF4F] tracking-wide uppercase">
                  <span className="bg-white px-2.5 py-0.5 rounded border border-gray-200">{current.badge}</span>
                  <span aria-hidden="true" className="text-gray-300">•</span>
                  <span>Primary Actor: {current.actor}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#263238]">
                  {current.title}
                </h3>
                <p className="text-[#717171] text-sm sm:text-base leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Technical Mechanism */}
              <div className="p-4 rounded-lg bg-white border border-gray-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#263238]">
                  <Server className="w-4 h-4 text-[#4CAF4F]" />
                  <span>ARCHITECTURE &amp; DATA INTEGRITY MECHANISM</span>
                </div>
                <p className="text-xs text-[#717171] leading-relaxed">
                  {current.techMechanism}
                </p>
              </div>

              {/* Inputs vs Outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-2">
                  <span className="text-xs font-bold text-[#4D4D4D] uppercase tracking-wider block">
                    System Inputs
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#717171]">
                    {current.inputs.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#4CAF4F] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-2">
                  <span className="text-xs font-bold text-[#4CAF4F] uppercase tracking-wider block">
                    Verified Deliverables
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#717171]">
                    {current.outputs.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#4CAF4F] shrink-0 mt-0.5" />
                        <span className="font-medium text-[#263238]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Lifecycle Diagram */}
            <div className="lg:col-span-5 bg-white rounded-xl p-6 border border-gray-200 shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <span className="text-xs font-bold text-[#4D4D4D]">PIPELINE FLOW VISUALIZER</span>
                <span className="text-xs font-medium text-[#4CAF4F] bg-[#E8F5E9] px-2 py-0.5 rounded">
                  Stage {activeStage} of 4
                </span>
              </div>

              {/* Flowchart Nodes */}
              <div className="space-y-3 text-xs">
                
                <div className={`p-3.5 rounded-md border transition-all ${activeStage === 1 ? 'bg-[#E8F5E9] border-[#4CAF4F] text-[#263238] font-medium' : 'bg-[#F5F7FA] border-gray-200 text-[#717171]'}`}>
                  <div className="flex items-center justify-between">
                    <span>1. Onboarding / Assessment</span>
                    {activeStage >= 1 && <Check className="w-4 h-4 text-[#4CAF4F]" />}
                  </div>
                  <div className="text-[11px] text-[#89939E] mt-1">IndexedDB offline queue → Nginx /api/core/onboard</div>
                </div>

                <div className="flex justify-center text-gray-300">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>

                <div className={`p-3.5 rounded-md border transition-all ${activeStage === 2 ? 'bg-[#E8F5E9] border-[#4CAF4F] text-[#263238] font-medium' : 'bg-[#F5F7FA] border-gray-200 text-[#717171]'}`}>
                  <div className="flex items-center justify-between">
                    <span>2. LMS &amp; Auto-Graded Quizzes</span>
                    {activeStage >= 2 && <Check className="w-4 h-4 text-[#4CAF4F]" />}
                  </div>
                  <div className="text-[11px] text-[#89939E] mt-1">MinIO HLS video stream → Redis BullMQ quiz events</div>
                </div>

                <div className="flex justify-center text-gray-300">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>

                <div className={`p-3.5 rounded-md border transition-all ${activeStage === 3 ? 'bg-[#E8F5E9] border-[#4CAF4F] text-[#263238] font-medium' : 'bg-[#F5F7FA] border-gray-200 text-[#717171]'}`}>
                  <div className="flex items-center justify-between">
                    <span>3. Pitch Sandbox &amp; Agri-Market</span>
                    {activeStage >= 3 && <Check className="w-4 h-4 text-[#4CAF4F]" />}
                  </div>
                  <div className="text-[11px] text-[#89939E] mt-1">Direct pre-signed S3 upload → Anonymized dispatch</div>
                </div>

                <div className="flex justify-center text-gray-300">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>

                <div className={`p-3.5 rounded-md border transition-all ${activeStage === 4 ? 'bg-[#E8F5E9] border-[#4CAF4F] text-[#263238] font-medium' : 'bg-[#F5F7FA] border-gray-200 text-[#717171]'}`}>
                  <div className="flex items-center justify-between">
                    <span>4. Blind Grading, Certs &amp; M&amp;E</span>
                    {activeStage >= 4 && <Check className="w-4 h-4 text-[#4CAF4F]" />}
                  </div>
                  <div className="text-[11px] text-[#89939E] mt-1">QR verification endpoint + Nightly KPI rollups to Board</div>
                </div>

              </div>

              {/* Stepper Controls */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  disabled={activeStage === 1}
                  onClick={() => setActiveStage(Math.max(1, activeStage - 1))}
                  className="px-3.5 py-2 text-xs font-medium text-[#4D4D4D] bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
                <button
                  disabled={activeStage === 4}
                  onClick={() => setActiveStage(Math.min(4, activeStage + 1))}
                  className="px-4 py-2 text-xs font-medium text-white bg-[#4CAF4F] hover:bg-[#388E3C] rounded disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1.5 shadow-xs"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
