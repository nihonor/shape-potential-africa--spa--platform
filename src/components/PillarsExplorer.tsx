import React, { useState } from 'react';
import { PILLARS, Pillar } from '../data/spaData';
import { 
  Laptop, 
  GraduationCap, 
  Compass, 
  Rocket, 
  Sprout, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck
} from 'lucide-react';

export const PillarsExplorer: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>(PILLARS[0].id);

  const activePillar: Pillar = PILLARS.find(p => p.id === selectedPillarId) || PILLARS[0];

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'technology': return <Laptop className="w-5 h-5" />;
      case 'education': return <GraduationCap className="w-5 h-5" />;
      case 'leadership': return <Compass className="w-5 h-5" />;
      case 'young_startups': return <Rocket className="w-5 h-5" />;
      case 'agriculture': return <Sprout className="w-5 h-5" />;
      default: return <Laptop className="w-5 h-5" />;
    }
  };

  return (
    <section id="pillars" className="py-20 bg-[#F5F7FA] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4D4D4D] tracking-tight">
            The Five Strategic Pillars of SPA
          </h2>
          <p className="mt-3 text-base text-[#717171]">
            Every training module, pitch competition, and marketplace transaction is organized under five strategic tracks with strict PostgreSQL Row-Level Security isolation.
          </p>
        </div>

        {/* 5-Pillar Segmented Filter Control */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {PILLARS.map((pillar) => {
            const isSelected = pillar.id === selectedPillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`p-4 rounded-lg text-left transition-all cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#4CAF4F] shadow-sm ring-2 ring-[#4CAF4F]/20'
                    : 'bg-white text-[#4D4D4D] border-gray-200 hover:border-[#4CAF4F]/50 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#E8F5E9] text-[#4CAF4F]' : 'bg-gray-100 text-[#717171]'}`}>
                    {getPillarIcon(pillar.id)}
                  </div>
                  <span className={`text-[11px] font-bold tracking-wider uppercase ${isSelected ? 'text-[#4CAF4F]' : 'text-[#89939E]'}`}>
                    Pillar
                  </span>
                </div>
                <div className={`text-sm font-bold truncate ${isSelected ? 'text-[#263238]' : 'text-[#4D4D4D]'}`}>
                  {pillar.shortName}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Card Showcase */}
        <div className="bg-white rounded-xl border border-gray-200/80 p-6 sm:p-8 lg:p-10 shadow-[0_2px_4px_rgba(171,190,209,0.2)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#4CAF4F] mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Mandated Lead: {activePillar.leadRole}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#263238]">
                  {activePillar.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#4CAF4F] italic">
                  "{activePillar.tagline}"
                </p>
                <p className="mt-3 text-sm text-[#717171] leading-relaxed">
                  {activePillar.description}
                </p>
              </div>

              {/* Programs Hierarchy */}
              <div className="space-y-3 pt-1">
                <span className="text-xs font-bold text-[#4D4D4D] uppercase tracking-wider block">
                  Core Curricula &amp; Initiatives
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activePillar.programs.map((prog, idx) => (
                    <div key={idx} className="p-3 bg-[#F5F7FA] rounded-md border border-gray-200/70 text-xs font-medium text-[#4D4D4D] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#4CAF4F] shrink-0" />
                      <span>{prog}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Outcomes */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-bold text-[#4D4D4D] uppercase tracking-wider block">
                  System Deliverables
                </span>
                <ul className="space-y-2 text-xs text-[#717171]">
                  {activePillar.keyOutcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4CAF4F] shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Content: M&E Quantitative Target Card */}
            <div className="lg:col-span-5 bg-[#F5F7FA] rounded-xl p-6 border border-gray-200 shadow-xs space-y-6">
              
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <span className="text-xs font-bold text-[#4D4D4D] uppercase">M&amp;E STRATEGIC KPI TRACKER</span>
                <span className="text-[11px] font-semibold text-[#4CAF4F] bg-white px-2.5 py-0.5 rounded border border-gray-200">2026–2036 Plan</span>
              </div>

              <div className="space-y-2">
                <div className="text-xs text-[#717171] font-medium">
                  {activePillar.kpiMetric.label}
                </div>
                <div className="flex items-baseline gap-3">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#263238] tabular-nums tracking-tight">
                    {activePillar.kpiMetric.current}
                  </div>
                  <div className="text-xs text-[#717171]">
                    of <span className="font-bold text-[#4D4D4D]">{activePillar.kpiMetric.target}</span> {activePillar.kpiMetric.unit}
                  </div>
                </div>

                {/* Progress Bar */}
                {(() => {
                  const currentNum = parseFloat(activePillar.kpiMetric.current.replace(/,/g, ''));
                  const targetNum = parseFloat(activePillar.kpiMetric.target.replace(/,/g, ''));
                  const pct = Math.min(100, Math.round((currentNum / targetNum) * 100));
                  return (
                    <div className="space-y-1.5 pt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className="bg-[#4CAF4F] h-2.5 rounded-full transition-all duration-500" 
                          style={{ width: `${pct}%` }} 
                        />
                      </div>
                      <div className="flex justify-between text-[11px] text-[#717171]">
                        <span>Pilot Milestone: {pct}%</span>
                        <span>Full Target: 100%</span>
                      </div>
                    </div>
                  );
                })()}
              </div>

              <div className="p-4 rounded-lg bg-white border border-gray-200 text-xs space-y-2">
                <div className="font-bold text-[#263238] text-[11px] flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#4CAF4F]" />
                  <span>Automated Nightly Aggregation</span>
                </div>
                <p className="text-[#717171] leading-relaxed text-[11px]">
                  Aggregated automatically by Python workers from live transactions, updating executive governance metrics daily.
                </p>
              </div>

              <div className="text-xs text-[#717171] border-t border-gray-200 pt-3">
                <span>Row-Level Security: </span>
                <span className="font-mono text-[#263238] font-semibold">pillar_id = '{activePillar.id}'</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
