import React, { useState } from 'react';
import { 
  COACHING_TOPICS, 
  SERVICE_PACKAGES, 
  CoachingTopic, 
  ServicePackage 
} from '../data/spaData';
import { 
  Building2, 
  CheckCircle2, 
  FileText, 
  Calculator, 
  Clock, 
  Sparkles, 
  ArrowRight,
  Download,
  Check
} from 'lucide-react';

export const CapacityBuildingModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'catalogue' | 'assessment' | 'packages'>('catalogue');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Interactive Needs Assessment State
  const [assessmentScores, setAssessmentScores] = useState({
    strategicPlanning: 2, // 1 (Critical Need) to 5 (Mastered)
    teamLeadership: 3,
    projectExecution: 2,
    reportingAndME: 2,
    orgHealthAndChange: 3
  });

  const [selectedPackageId, setSelectedPackageId] = useState<string>('pkg-advanced');
  const [showInvoicePreview, setShowInvoicePreview] = useState(false);

  // Filter catalogue
  const filteredTopics = COACHING_TOPICS.filter(topic => {
    if (selectedCategory === 'All') return true;
    return topic.category === selectedCategory;
  });

  // Calculate assessment recommendation
  const avgScore = (
    assessmentScores.strategicPlanning + 
    assessmentScores.teamLeadership + 
    assessmentScores.projectExecution + 
    assessmentScores.reportingAndME + 
    assessmentScores.orgHealthAndChange
  ) / 5;

  const recommendedTier = avgScore < 2.5 ? 'Advanced' : avgScore < 3.8 ? 'Standard' : 'Custom';
  const recommendedPackage = SERVICE_PACKAGES.find(p => p.tier === recommendedTier) || SERVICE_PACKAGES[0];

  return (
    <section id="capacity-building" className="py-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-900 tracking-wider uppercase mb-2">
            Module C · Institutional Strengthening
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight text-balance">
            Organizational Capacity Building & Executive Coaching Services.
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Designed for ministries, NGO secretariats, school networks, and agricultural cooperatives. Complete an automated diagnostic assessment, select specialized coaching tracks, and receive instant system-generated invoices.
          </p>
        </div>

        {/* Sub-navigation Tabs (Button elements with active/inactive states) */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1 bg-stone-200/70 rounded-lg max-w-fit">
          <button
            onClick={() => setActiveTab('catalogue')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              activeTab === 'catalogue'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-950'
            }`}
          >
            11-Topic Coaching Taxonomy
          </button>
          <button
            onClick={() => setActiveTab('assessment')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'assessment'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-950'
            }`}
          >
            <Calculator className="w-3.5 h-3.5 text-emerald-800" />
            <span>Automated Needs Diagnostic</span>
          </button>
          <button
            onClick={() => setActiveTab('packages')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              activeTab === 'packages'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-950'
            }`}
          >
            Service Packages & Invoicing
          </button>
        </div>

        {/* Tab 1: 11-Topic Catalogue */}
        {activeTab === 'catalogue' && (
          <div className="space-y-6">
            
            {/* Category Filter */}
            <div className="flex items-center gap-2 text-xs text-stone-500 pb-2">
              <span>Filter by domain:</span>
              {['All', 'Foundational', 'Leadership', 'Operational & Systems'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded text-xs font-medium cursor-pointer transition-colors ${
                    selectedCategory === cat
                      ? 'bg-stone-900 text-white'
                      : 'bg-stone-200/80 text-stone-700 hover:bg-stone-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Topics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredTopics.map((topic) => (
                <div 
                  key={topic.id}
                  className="bg-white rounded-lg p-5 border border-stone-200/80 shadow-xs hover:border-emerald-800/60 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-stone-400 font-semibold">{topic.code}</span>
                      <span className="text-stone-500 font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3 text-stone-400" />
                        {topic.duration}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-stone-950 leading-snug">
                      {topic.title}
                    </h4>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {topic.description}
                    </p>

                    <div className="pt-2 border-t border-stone-100 space-y-1.5">
                      <span className="text-[11px] font-bold text-stone-700 uppercase tracking-wide block">
                        Verified Learning Outcomes:
                      </span>
                      <ul className="space-y-1 text-[11px] text-stone-600">
                        {topic.outcomes.map((out, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-emerald-800 font-bold">·</span>
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <span className="truncate max-w-[180px] text-[11px]">Audience: {topic.suitableFor}</span>
                    <span className="font-mono text-emerald-900 font-semibold text-[11px]">
                      {topic.suggestedPackage} Tier
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Tab 2: Automated Needs Diagnostic (Interactive Tool) */}
        {activeTab === 'assessment' && (
          <div className="bg-white rounded-xl border border-stone-200/90 p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left: Interactive Sliders */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-800 uppercase block mb-1">
                    FR-C3 AUTOMATED ASSESSMENT ENGINE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-950">
                    Simulate Your Institutional Readiness Assessment
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Rate your organization's current maturity across 5 key dimensions (1 = Critical Deficit, 5 = High Maturity) to trigger system scoring.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  
                  {/* Dimension 1 */}
                  <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 space-y-2">
                    <div className="flex justify-between text-xs font-semibold text-stone-800">
                      <span>1. Strategic Planning & Theory of Change</span>
                      <span className="font-mono text-emerald-900">{assessmentScores.strategicPlanning} / 5</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={assessmentScores.strategicPlanning}
                      onChange={(e) => setAssessmentScores({...assessmentScores, strategicPlanning: parseInt(e.target.value)})}
                      className="w-full accent-emerald-900 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-stone-400">
                      <span>Fragmented roadmaps</span>
                      <span>Audited 5-yr plan</span>
                    </div>
                  </div>

                  {/* Dimension 2 */}
                  <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 space-y-2">
                    <div className="flex justify-between text-xs font-semibold text-stone-800">
                      <span>2. Team Leadership & Role Chartering</span>
                      <span className="font-mono text-emerald-900">{assessmentScores.teamLeadership} / 5</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={assessmentScores.teamLeadership}
                      onChange={(e) => setAssessmentScores({...assessmentScores, teamLeadership: parseInt(e.target.value)})}
                      className="w-full accent-emerald-900 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-stone-400">
                      <span>Frequent friction</span>
                      <span>High psychological safety</span>
                    </div>
                  </div>

                  {/* Dimension 3 */}
                  <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 space-y-2">
                    <div className="flex justify-between text-xs font-semibold text-stone-800">
                      <span>3. Project Management & Delivery Velocity</span>
                      <span className="font-mono text-emerald-900">{assessmentScores.projectExecution} / 5</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={assessmentScores.projectExecution}
                      onChange={(e) => setAssessmentScores({...assessmentScores, projectExecution: parseInt(e.target.value)})}
                      className="w-full accent-emerald-900 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-stone-400">
                      <span>Repeated budget slippage</span>
                      <span>Agile critical-path controls</span>
                    </div>
                  </div>

                  {/* Dimension 4 */}
                  <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 space-y-2">
                    <div className="flex justify-between text-xs font-semibold text-stone-800">
                      <span>4. Donor-Grade Reporting & Impact M&E</span>
                      <span className="font-mono text-emerald-900">{assessmentScores.reportingAndME} / 5</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={assessmentScores.reportingAndME}
                      onChange={(e) => setAssessmentScores({...assessmentScores, reportingAndME: parseInt(e.target.value)})}
                      className="w-full accent-emerald-900 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-stone-400">
                      <span>Ad-hoc spreadsheets</span>
                      <span>Continuous longitudinal data</span>
                    </div>
                  </div>

                  {/* Dimension 5 */}
                  <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 space-y-2">
                    <div className="flex justify-between text-xs font-semibold text-stone-800">
                      <span>5. Organizational Behavior & Change Readiness</span>
                      <span className="font-mono text-emerald-900">{assessmentScores.orgHealthAndChange} / 5</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={assessmentScores.orgHealthAndChange}
                      onChange={(e) => setAssessmentScores({...assessmentScores, orgHealthAndChange: parseInt(e.target.value)})}
                      className="w-full accent-emerald-900 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-stone-400">
                      <span>High change resistance</span>
                      <span>Adaptive learning culture</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right: Real-time Recommendation Output */}
              <div className="lg:col-span-5 bg-stone-900 text-stone-100 rounded-xl p-6 sm:p-7 border border-stone-800 space-y-6">
                
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <span className="text-xs font-mono tracking-wider text-amber-400">AUTOMATED DIAGNOSTIC SYNTHESIS</span>
                  <span className="text-xs font-mono text-stone-400">FastAPI Engine</span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs text-stone-400">Calculated Institutional Maturity:</div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl font-extrabold text-white tabular-nums">
                      {(avgScore * 20).toFixed(0)}%
                    </span>
                    <span className="text-xs text-stone-400">
                      ({avgScore.toFixed(1)} / 5.0 Aggregate)
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-stone-800/80 border border-stone-700/80 space-y-2">
                  <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">
                    System-Recommended Package Tier:
                  </div>
                  <div className="text-lg font-bold text-white">
                    {recommendedPackage.name} ({recommendedPackage.tier})
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Designed for {recommendedPackage.participantBand} with {recommendedPackage.coachingHours} across {recommendedPackage.includedTopicsCount} core topics.
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-stone-300 block">
                    Priority Recommended Modules:
                  </span>
                  <div className="space-y-1.5 text-xs text-stone-300">
                    {assessmentScores.strategicPlanning <= 3 && (
                      <div className="flex items-center gap-2 text-amber-300">
                        <Check className="w-3.5 h-3.5 shrink-0" />
                        <span>FR-C2.1c: Strategic Development & Planning</span>
                      </div>
                    )}
                    {assessmentScores.reportingAndME <= 3 && (
                      <div className="flex items-center gap-2 text-amber-300">
                        <Check className="w-3.5 h-3.5 shrink-0" />
                        <span>FR-C2.1j: Baseline Survey & Impact Assessment</span>
                      </div>
                    )}
                    {assessmentScores.projectExecution <= 3 && (
                      <div className="flex items-center gap-2 text-amber-300">
                        <Check className="w-3.5 h-3.5 shrink-0" />
                        <span>FR-C2.1h: Project Management & Critical Path</span>
                      </div>
                    )}
                    {assessmentScores.teamLeadership <= 3 && (
                      <div className="flex items-center gap-2 text-amber-300">
                        <Check className="w-3.5 h-3.5 shrink-0" />
                        <span>FR-C2.1d: Team Leadership & High Performance</span>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedPackageId(recommendedPackage.id);
                    setActiveTab('packages');
                    setShowInvoicePreview(true);
                  }}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-all cursor-pointer text-center font-sans"
                >
                  Generate Sample System Invoice (${recommendedPackage.basePriceUSD.toLocaleString()} USD)
                </button>

              </div>

            </div>
          </div>
        )}

        {/* Tab 3: Service Packages & Invoicing (FR-C4) */}
        {activeTab === 'packages' && (
          <div className="space-y-10">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SERVICE_PACKAGES.map((pkg) => {
                const isSelected = pkg.id === selectedPackageId;
                return (
                  <div
                    key={pkg.id}
                    className={`rounded-xl p-6 sm:p-7 border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-stone-900 text-stone-100 border-stone-900 shadow-md ring-2 ring-emerald-600'
                        : 'bg-white text-stone-900 border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className={`text-xs font-mono font-bold tracking-wider uppercase ${isSelected ? 'text-amber-400' : 'text-stone-500'}`}>
                          {pkg.tier} Tier
                        </span>
                        <span className={`text-[11px] px-2 py-0.5 rounded ${isSelected ? 'bg-stone-800 text-stone-300' : 'bg-stone-100 text-stone-700'}`}>
                          {pkg.deliveryMode}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold leading-tight">
                        {pkg.name}
                      </h3>

                      <div className="space-y-0.5">
                        <div className="text-3xl font-extrabold font-display tabular-nums">
                          ${pkg.basePriceUSD.toLocaleString()} <span className="text-xs font-sans font-normal text-stone-400">USD</span>
                        </div>
                        <div className={`text-xs ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                          {pkg.participantBand} · {pkg.coachingHours}
                        </div>
                      </div>

                      <div className={`border-t pt-4 space-y-2 text-xs ${isSelected ? 'border-stone-800 text-stone-300' : 'border-stone-100 text-stone-600'}`}>
                        {pkg.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isSelected ? 'text-amber-400' : 'text-emerald-700'}`} />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-stone-800/40">
                      <button
                        onClick={() => {
                          setSelectedPackageId(pkg.id);
                          setShowInvoicePreview(true);
                        }}
                        className={`w-full py-2.5 px-4 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-amber-400 text-stone-950 hover:bg-amber-300'
                            : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
                        }`}
                      >
                        {isSelected ? 'Selected Package · Preview Invoice' : 'Select Package'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Invoice Generator Simulation (FR-C4.2 / FR-C4.3) */}
            {showInvoicePreview && (
              <div className="bg-white rounded-xl border border-stone-300 p-6 sm:p-8 max-w-3xl mx-auto shadow-md space-y-6">
                
                <div className="flex flex-wrap items-center justify-between border-b border-stone-200 pb-4 gap-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-emerald-800 tracking-wider">
                      SYSTEM-GENERATED INVOICE RECORD
                    </span>
                    <h4 className="text-lg font-bold text-stone-950">
                      INVOICE #{'SPA-2026-INV-' + Math.floor(1000 + Math.random() * 9000)}
                    </h4>
                  </div>
                  <div className="text-right text-xs text-stone-500">
                    <div>Issued: September 2026</div>
                    <div className="font-mono text-emerald-800 font-semibold">Status: DRAFT / ISSUED</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs text-stone-600 border-b border-stone-100 pb-4">
                  <div>
                    <span className="font-bold text-stone-900 block mb-1">Service Provider:</span>
                    <div>SHAPE Potential Africa (SPA) Platform</div>
                    <div>Executive Leadership Directorate</div>
                    <div>Pillar: Leadership & Institutional Strengthening</div>
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block mb-1">Billed To (Sample Client):</span>
                    <div>Ministry of ICT & Innovation / Parastatal Unit</div>
                    <div>Institutional Client ID: ORG-KGL-0481</div>
                    <div>Primary Contact: Directorate of Human Capital</div>
                  </div>
                </div>

                {/* Line Items */}
                {(() => {
                  const selPkg = SERVICE_PACKAGES.find(p => p.id === selectedPackageId) || SERVICE_PACKAGES[0];
                  return (
                    <div className="space-y-3">
                      <table className="w-full text-xs text-left">
                        <thead>
                          <tr className="border-b border-stone-200 text-stone-400 font-mono">
                            <th className="py-2">Line Item / Package Description</th>
                            <th className="py-2 text-center">Scope</th>
                            <th className="py-2 text-right">Amount (USD)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100">
                          <tr>
                            <td className="py-2.5 font-medium text-stone-900">
                              {selPkg.name} ({selPkg.tier} Tier)
                              <span className="block text-[11px] text-stone-500">{selPkg.features[0]}</span>
                            </td>
                            <td className="py-2.5 text-center text-stone-600 font-mono">{selPkg.participantBand}</td>
                            <td className="py-2.5 text-right font-mono font-bold text-stone-900">${selPkg.basePriceUSD.toLocaleString()}</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 text-stone-700">Pre-engagement Diagnostic & Needs Audit Scoring (FastAPI Engine)</td>
                            <td className="py-2.5 text-center text-stone-600 font-mono">System Automated</td>
                            <td className="py-2.5 text-right font-mono text-stone-500">INCLUDED</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 text-stone-700">Digital Certificate Wallet & MinIO Archival Issuance</td>
                            <td className="py-2.5 text-center text-stone-600 font-mono">Per Graduate</td>
                            <td className="py-2.5 text-right font-mono text-stone-500">INCLUDED</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr className="border-t border-stone-200 font-bold text-sm text-stone-950">
                            <td colSpan={2} className="py-3 text-right pr-4">Total Billed Amount:</td>
                            <td className="py-3 text-right font-mono font-extrabold text-emerald-950">
                              ${selPkg.basePriceUSD.toLocaleString()} USD
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  );
                })()}

                <div className="bg-stone-50 p-3 rounded text-[11px] text-stone-500 flex items-center justify-between">
                  <span>In compliance with FR-C4.3: PDF generated and stored in MinIO invoices bucket.</span>
                  <span className="font-mono text-stone-700">Payment Terms: Net 30 Days</span>
                </div>

              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
};
