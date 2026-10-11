import React, { useState } from 'react';
import { SAMPLE_CERTIFICATES, VerifiedCertificate } from '../data/spaData';
import { 
  ShieldCheck, 
  Eye, 
  Sprout, 
  Search, 
  Sliders, 
  Send, 
  FileCheck2, 
  AlertTriangle,
  QrCode,
  CheckCircle2,
  Lock
} from 'lucide-react';

export const InteractiveDemos: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'cert' | 'judge' | 'agri'>('judge');

  // Certificate State
  const [certInput, setCertInput] = useState<string>('SPA-2026-AI-8492');
  const [certResult, setCertResult] = useState<VerifiedCertificate | null>(SAMPLE_CERTIFICATES['SPA-2026-AI-8492']);
  const [certSearched, setCertSearched] = useState<boolean>(true);

  const handleVerifyLookup = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    setCertInput(cleanCode);
    setCertSearched(true);
    if (SAMPLE_CERTIFICATES[cleanCode]) {
      setCertResult(SAMPLE_CERTIFICATES[cleanCode]);
    } else {
      setCertResult(null);
    }
  };

  // Judge Rubric State
  const [rubricScores, setRubricScores] = useState({
    innovation: 9,      // 1-10
    marketViability: 8,
    execution: 8,
    financials: 7,
    socialImpact: 9
  });
  const [judgeFeedback, setJudgeFeedback] = useState<string>(
    'Strong unit economics and solar-powered cold chain tech. Clear path to profitability with documented farmer agreements.'
  );
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isRecused, setIsRecused] = useState<boolean>(false);

  // Compute weighted score (FR-B2.6)
  const weightedScore = (
    rubricScores.innovation * 0.25 +
    rubricScores.marketViability * 0.25 +
    rubricScores.execution * 0.20 +
    rubricScores.financials * 0.15 +
    rubricScores.socialImpact * 0.15
  );

  // Agri-Market Mock State
  const [inquirySent, setInquirySent] = useState<boolean>(false);

  return (
    <section id="interactive-sandbox" className="py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-900 tracking-wider uppercase mb-2">
            Live Functional Simulators
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight text-balance">
            Interactive System Demos: Experience Core SRS Features.
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Test the live workflows specified in the Software Requirements Specification: Blind Grading Terminal for judges, public QR credential verification, and direct agricultural market trade.
          </p>
        </div>

        {/* Demo Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1 bg-stone-100 rounded-lg max-w-fit">
          <button
            onClick={() => setActiveDemo('judge')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
              activeDemo === 'judge'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Eye className="w-3.5 h-3.5 text-amber-400" />
            <span>FR-B2: Blind Grading Terminal</span>
          </button>
          
          <button
            onClick={() => setActiveDemo('cert')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
              activeDemo === 'cert'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>FR-A2.12: Credential Verification</span>
          </button>

          <button
            onClick={() => setActiveDemo('agri')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
              activeDemo === 'agri'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Sprout className="w-3.5 h-3.5 text-teal-400" />
            <span>Agri-Market Access Exchange</span>
          </button>
        </div>

        {/* DEMO 1: Blind Grading Terminal Simulator (FR-B2) */}
        {activeDemo === 'judge' && (
          <div className="bg-stone-900 text-stone-100 rounded-xl p-6 sm:p-8 lg:p-10 border border-stone-800 shadow-xl space-y-8">
            
            {/* Terminal Header */}
            <div className="flex flex-wrap items-center justify-between border-b border-stone-800 pb-4 gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                  <Lock className="w-3.5 h-3.5" />
                  <span>BLIND GRADING TERMINAL · ANONYMIZED DISPATCH</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Pitch Evaluation: #PITCH-2028-00417
                </h3>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                <span className="bg-stone-800 px-2.5 py-1 rounded border border-stone-700">
                  Sector: CleanTech & Agri-Logistics
                </span>
                <span className="bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded border border-amber-800">
                  Continental Heat #2
                </span>
              </div>
            </div>

            {/* Redacted Pitch Materials Showcase */}
            <div className="p-4 rounded-lg bg-stone-800/80 border border-stone-700 text-xs space-y-2">
              <div className="text-stone-400 font-mono flex items-center justify-between">
                <span>BENEFICIARY IDENTITY MASKING (FR-B2.2):</span>
                <span className="text-emerald-400">PII STRIPPED AT FASTAPI GATEWAY</span>
              </div>
              <div className="text-stone-300 leading-relaxed font-sans text-sm">
                <span className="font-bold text-white">Executive Summary: </span>
                Autonomous, solar-powered decentralized micro-cold storage lockers deployed across rural tomato aggregation clusters in the Rift Valley. Reduces post-harvest spoilage from 42% to 4% while enabling farmers to time market sales for optimal pricing.
              </div>
              <div className="text-stone-400 text-[11px] font-mono pt-1">
                Requested Funding: $45,000 USD Seed · Team Size: 4 Engineers & Agronomists (Names Anonymized)
              </div>
            </div>

            {isRecused ? (
              <div className="p-6 rounded-lg bg-amber-950/40 border border-amber-800/80 text-center space-y-3">
                <AlertTriangle className="w-8 h-8 text-amber-400 mx-auto" />
                <h4 className="text-base font-bold text-amber-200">Conflict of Interest Declared (FR-B2.7)</h4>
                <p className="text-xs text-amber-300/90 max-w-md mx-auto">
                  You have recused yourself from evaluating submission #PITCH-2028-00417. The FastAPI Evaluation Router has re-assigned this entry to another qualified judge in your sector pool.
                </p>
                <button
                  onClick={() => setIsRecused(false)}
                  className="px-4 py-2 text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 rounded border border-stone-700 cursor-pointer"
                >
                  Reset Simulation
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Scoring Sliders */}
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider block">
                    Multi-Criteria Scoring Rubric (Scale: 1 – 10)
                  </span>

                  {/* Criteria 1 */}
                  <div className="p-3 bg-stone-800/70 rounded border border-stone-700/80 space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Innovation & Technical Feasibility (Weight 25%)</span>
                      <span className="font-mono text-amber-400 font-bold">{rubricScores.innovation}/10</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={rubricScores.innovation}
                      onChange={(e) => setRubricScores({...rubricScores, innovation: parseInt(e.target.value)})}
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                  </div>

                  {/* Criteria 2 */}
                  <div className="p-3 bg-stone-800/70 rounded border border-stone-700/80 space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Market Viability & Customer Traction (Weight 25%)</span>
                      <span className="font-mono text-amber-400 font-bold">{rubricScores.marketViability}/10</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={rubricScores.marketViability}
                      onChange={(e) => setRubricScores({...rubricScores, marketViability: parseInt(e.target.value)})}
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                  </div>

                  {/* Criteria 3 */}
                  <div className="p-3 bg-stone-800/70 rounded border border-stone-700/80 space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Execution Capability & Operational Plan (Weight 20%)</span>
                      <span className="font-mono text-amber-400 font-bold">{rubricScores.execution}/10</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={rubricScores.execution}
                      onChange={(e) => setRubricScores({...rubricScores, execution: parseInt(e.target.value)})}
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                  </div>

                  {/* Criteria 4 */}
                  <div className="p-3 bg-stone-800/70 rounded border border-stone-700/80 space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Financial Soundness & Unit Economics (Weight 15%)</span>
                      <span className="font-mono text-amber-400 font-bold">{rubricScores.financials}/10</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={rubricScores.financials}
                      onChange={(e) => setRubricScores({...rubricScores, financials: parseInt(e.target.value)})}
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                  </div>

                  {/* Criteria 5 */}
                  <div className="p-3 bg-stone-800/70 rounded border border-stone-700/80 space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Social & Environmental Impact (Weight 15%)</span>
                      <span className="font-mono text-amber-400 font-bold">{rubricScores.socialImpact}/10</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={rubricScores.socialImpact}
                      onChange={(e) => setRubricScores({...rubricScores, socialImpact: parseInt(e.target.value)})}
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                  </div>

                  {/* Mandatory Qualitative Feedback */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-medium text-stone-300">
                      Mandatory Qualitative Feedback (FR-B2.4):
                    </span>
                    <textarea
                      rows={2}
                      value={judgeFeedback}
                      onChange={(e) => setJudgeFeedback(e.target.value)}
                      className="w-full p-2.5 rounded bg-stone-800 border border-stone-700 text-xs text-stone-200 focus:outline-hidden focus:border-amber-400"
                    />
                  </div>
                </div>

                {/* Real-time Aggregate Score Card */}
                <div className="lg:col-span-5 bg-stone-800/90 rounded-xl p-6 border border-stone-700 space-y-5">
                  <div className="flex items-center justify-between border-b border-stone-700 pb-3">
                    <span className="text-xs font-mono text-stone-400">AGGREGATE COMPUTATION</span>
                    <span className="text-[11px] font-mono text-emerald-400">FastAPI Worker</span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs text-stone-400">Composite Multi-Criteria Score:</div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-5xl font-extrabold text-amber-400 tabular-nums">
                        {weightedScore.toFixed(1)}
                      </span>
                      <span className="text-stone-400 text-sm font-mono">/ 10.0</span>
                    </div>
                  </div>

                  <div className="text-xs text-stone-300 leading-relaxed p-3 bg-stone-900/80 rounded border border-stone-700/80">
                    <span className="text-emerald-400 font-bold">Blind Peer Scoring Rule: </span>
                    Other judges' individual evaluations remain hidden until you commit your final grade (preventing anchoring bias).
                  </div>

                  <div className="space-y-2 pt-2">
                    <button
                      onClick={() => setIsSubmitted(true)}
                      className="w-full py-2.5 px-4 text-xs font-semibold text-stone-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-all cursor-pointer font-sans"
                    >
                      {isSubmitted ? 'Evaluation Committed to Redis Leaderboard ✓' : 'Commit Final Evaluation Score'}
                    </button>

                    <button
                      onClick={() => setIsRecused(true)}
                      className="w-full py-2 px-3 text-xs font-semibold text-stone-400 hover:text-stone-200 bg-transparent hover:bg-stone-800 rounded transition-all cursor-pointer border border-stone-700 font-sans"
                    >
                      Declare Conflict of Interest (Recuse)
                    </button>
                  </div>

                  {isSubmitted && (
                    <div className="text-[11px] text-emerald-300 font-mono text-center">
                      ✓ Aggregate updated in PostgreSQL and Redis Sorted Set
                    </div>
                  )}
                </div>

              </div>
            )}

          </div>
        )}

        {/* DEMO 2: Certificate Verification (FR-A2.12) */}
        {activeDemo === 'cert' && (
          <div className="bg-stone-50 rounded-xl p-6 sm:p-8 lg:p-10 border border-stone-200 shadow-xs space-y-8">
            
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold text-emerald-900 uppercase block mb-1">
                PUBLIC ENDPOINT /verify/:certificate_code
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-950">
                Verifiable Pan-African Credential Lookup
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Employers, universities, and partners verify trainee credentials instantly without accessing private personal data.
              </p>
            </div>

            {/* Input Bar with Sample Preset Codes */}
            <div className="max-w-xl space-y-3">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-stone-400" />
                  <input
                    type="text"
                    value={certInput}
                    onChange={(e) => setCertInput(e.target.value)}
                    placeholder="Enter code (e.g. SPA-2026-AI-8492)"
                    className="w-full pl-9 pr-3 py-2.5 bg-white border border-stone-300 rounded-md text-xs font-mono text-stone-900 focus:outline-hidden focus:border-emerald-800"
                  />
                </div>
                <button
                  onClick={() => handleVerifyLookup(certInput)}
                  className="px-4 py-2.5 bg-emerald-900 text-white rounded-md text-xs font-semibold hover:bg-emerald-950 cursor-pointer whitespace-nowrap"
                >
                  Verify Now
                </button>
              </div>

              {/* Sample Code Badges */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                <span>Sample Codes:</span>
                {Object.keys(SAMPLE_CERTIFICATES).map((code) => (
                  <button
                    key={code}
                    onClick={() => handleVerifyLookup(code)}
                    className="px-2 py-0.5 bg-stone-200/80 hover:bg-stone-300 text-stone-800 rounded font-mono text-[11px] cursor-pointer"
                  >
                    {code}
                  </button>
                ))}
              </div>
            </div>

            {/* Verification Result Display */}
            {certSearched && (
              certResult ? (
                <div className="bg-white rounded-xl border-2 border-emerald-800/40 p-6 sm:p-8 max-w-2xl shadow-md space-y-6">
                  
                  <div className="flex flex-wrap items-center justify-between border-b border-stone-200 pb-4 gap-2">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-6 h-6 text-emerald-700" />
                      <div>
                        <div className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                          AUTHENTIC CREDENTIAL VERIFIED
                        </div>
                        <div className="font-mono text-xs text-stone-500">
                          Code: {certResult.code}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="bg-emerald-100 text-emerald-900 text-xs px-2.5 py-1 rounded font-semibold font-mono">
                        {certResult.grade}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-stone-500">Certified Graduate:</div>
                      <div className="text-xl font-extrabold text-stone-950">
                        {certResult.recipientName}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-stone-500">Program Completed:</div>
                      <div className="text-sm font-bold text-stone-900">
                        {certResult.program}
                      </div>
                      <div className="text-xs text-emerald-900 font-medium">
                        Pillar: {certResult.pillar}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs text-stone-600 border-t border-b border-stone-100 py-3">
                      <div>
                        <span className="text-stone-400 block text-[11px]">Issuance Date</span>
                        <span className="font-medium text-stone-800">{certResult.completionDate}</span>
                      </div>
                      <div>
                        <span className="text-stone-400 block text-[11px]">Authorizing Body</span>
                        <span className="font-medium text-stone-800">{certResult.issuer}</span>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                        Demonstrated & Tested Competencies:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                        {certResult.skillsVerified.map((sk, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 p-2 bg-stone-50 rounded border border-stone-200/60">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                            <span>{sk}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400 font-mono">
                    <span>Cryptographic ID: {certResult.credentialId}</span>
                    <span className="text-emerald-700 font-bold">MinIO S3 Immutable Storage</span>
                  </div>

                </div>
              ) : (
                <div className="p-6 bg-red-50 border border-red-200 rounded-lg max-w-xl text-xs text-red-800 space-y-1">
                  <div className="font-bold">Credential Not Found</div>
                  <div>The certificate code "{certInput}" does not match an issued credential in the SPA registry. Please double-check formatting or contact the issuing directorate.</div>
                </div>
              )
            )}

          </div>
        )}

        {/* DEMO 3: Agri-Market Access Exchange Simulator */}
        {activeDemo === 'agri' && (
          <div className="bg-stone-50 rounded-xl p-6 sm:p-8 lg:p-10 border border-stone-200 shadow-xs space-y-6">
            
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold text-teal-800 uppercase block mb-1">
                MODULE A / AGRICULTURE · DIRECT PRODUCER EXCHANGE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-950">
                Live Agri-Market Access Platform
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Farmers and cooperatives list produce batches with certified moisture and grading, eliminating middlemen cuts.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-stone-200 p-6 max-w-2xl shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between border-b border-stone-200 pb-3 gap-2">
                <div>
                  <span className="text-[11px] font-mono text-stone-400">LOT #AGRI-2026-SOY-042</span>
                  <h4 className="text-base font-bold text-stone-950">
                    Grade-A Non-GMO Soybeans (40 Metric Tons)
                  </h4>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold font-display text-emerald-950">$580 USD / Ton</div>
                  <div className="text-[11px] text-stone-500">Warehouse: Musanze Hub, Rwanda</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs text-stone-600 bg-stone-50 p-3 rounded">
                <div>
                  <span className="text-stone-400 block text-[10px]">Moisture Content</span>
                  <span className="font-bold text-stone-800">11.4% (Certified)</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">Producer Group</span>
                  <span className="font-bold text-stone-800">Terimbere Coop</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">Harvest Period</span>
                  <span className="font-bold text-stone-800">August 2026</span>
                </div>
              </div>

              <div className="pt-2">
                {inquirySent ? (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-900 font-medium text-center">
                    ✓ Buyer inquiry thread initiated. Secure direct negotiation channel opened with cooperative leadership.
                  </div>
                ) : (
                  <button
                    onClick={() => setInquirySent(true)}
                    className="w-full py-2.5 px-4 bg-teal-900 hover:bg-teal-950 text-white rounded-md text-xs font-semibold cursor-pointer transition-colors"
                  >
                    Initiate Direct Buyer Inquiry (No Middleman Fee)
                  </button>
                )}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
