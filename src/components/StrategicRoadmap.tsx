import React, { useState } from 'react';
import { ROADMAP_PHASES, RoadmapPhase } from '../data/spaData';
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Users, 
  TrendingUp,
  FileBarChart
} from 'lucide-react';

export const StrategicRoadmap: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(1);

  const currentPhase: RoadmapPhase = ROADMAP_PHASES.find(p => p.phase === selectedPhase) || ROADMAP_PHASES[0];

  return (
    <section id="roadmap" className="py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-900 tracking-wider uppercase mb-2">
            10-Year Masterplan (2026–2036)
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight text-balance">
            Strategic Phasing: From Pilot Foundations to Pan-African Scale.
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            The platform's data models, multi-region database sharding, and M&E metrics are mapped directly against the six strategic phases approved by the Board of Trustees.
          </p>
        </div>

        {/* Phase Timeline Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-10">
          {ROADMAP_PHASES.map((phase) => {
            const isSelected = selectedPhase === phase.phase;
            return (
              <button
                key={phase.phase}
                onClick={() => setSelectedPhase(phase.phase)}
                className={`p-3.5 rounded-lg text-left transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-stone-900 text-stone-100 border-stone-900 shadow-sm translate-y-[-1px]'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-amber-400' : 'text-stone-500'}`}>
                    PHASE 0{phase.phase}
                  </span>
                  <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${
                    phase.status === 'In Progress' 
                      ? 'bg-emerald-900 text-emerald-200' 
                      : isSelected 
                      ? 'bg-stone-800 text-stone-400' 
                      : 'bg-stone-200 text-stone-600'
                  }`}>
                    {phase.status}
                  </span>
                </div>
                <div className={`text-xs font-bold truncate ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                  {phase.name}
                </div>
                <div className={`text-[11px] font-mono mt-1 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                  {phase.period}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Detail Showcase */}
        <div className="bg-stone-50 rounded-xl border border-stone-200 p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900 mb-1">
                  <span>Phase {currentPhase.phase} Milestone Log</span>
                  <span aria-hidden="true">·</span>
                  <span>Timeline: {currentPhase.period}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-stone-950">
                  {currentPhase.name}
                </h3>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                  {currentPhase.strategicObjective}
                </p>
              </div>

              {/* Milestones List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
                  Mandated Key Milestones & Outputs
                </span>
                <div className="space-y-2">
                  {currentPhase.keyMilestones.map((ms, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-md bg-white border border-stone-200/80 text-xs text-stone-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{ms}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Content: Scale Target & Governance Card */}
            <div className="lg:col-span-5 bg-white rounded-xl p-6 border border-stone-200 shadow-xs space-y-5">
              
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <span className="text-xs font-mono font-bold text-stone-700">SCALE & EVALUATION CHECKPOINT</span>
                <span className="text-[11px] font-mono text-emerald-800 font-semibold">Board Oversight</span>
              </div>

              <div>
                <div className="text-xs text-stone-500">Cumulative Target Cohort:</div>
                <div className="font-display text-3xl font-extrabold text-stone-950 mt-1 tabular-nums">
                  {currentPhase.beneficiaryTarget}
                </div>
                <div className="text-xs text-stone-500 mt-0.5">
                  Audited across all 5 thematic pillars
                </div>
              </div>

              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 text-xs space-y-2">
                <div className="font-bold text-stone-900 text-[11px] flex items-center gap-1.5">
                  <FileBarChart className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Statutory Evaluation Milestones (FR-B3.7)</span>
                </div>
                <p className="text-stone-600 leading-relaxed text-[11px]">
                  Quarterly M&E reports route to the Executive Office and Board of Trustees. A formal Mid-Term Evaluation snapshot is scheduled for 2031 (Phase 3), culminating in the 2036 Final Impact Assessment.
                </p>
              </div>

              <div className="text-[11px] text-stone-500 border-t border-stone-100 pt-3 flex items-center justify-between">
                <span>Inclusion Mandate: Min 50% Women & Youth</span>
                <span className="font-mono text-emerald-800 font-semibold">Active</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
