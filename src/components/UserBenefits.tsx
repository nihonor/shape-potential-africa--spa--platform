import React, { useState } from 'react';
import { PERSONA_BENEFITS, PersonaBenefit } from '../data/spaData';
import { CheckCircle2, Quote, ArrowRight, Sparkles } from 'lucide-react';

export const UserBenefits: React.FC = () => {
  const [selectedPersonaId, setSelectedPersonaId] = useState<string>(PERSONA_BENEFITS[0].id);

  const activePersona: PersonaBenefit = PERSONA_BENEFITS.find(p => p.id === selectedPersonaId) || PERSONA_BENEFITS[0];

  return (
    <section id="benefits" className="py-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-900 tracking-wider uppercase mb-2">
            Target User Value & Real-World Impact
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight text-balance">
            Primary Benefits: Engineered for Africa’s Diverse Stakeholders.
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Whether you are a rural farmer bypassing intermediaries, a female founder seeking unbiased venture capital, or a Ministry director building institutional capacity, the platform delivers tailored capabilities.
          </p>
        </div>

        {/* Persona Selector Tabs (Buttons with click handlers, single-line with truncation safety) */}
        <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-stone-200/60 rounded-lg max-w-full overflow-x-auto">
          {PERSONA_BENEFITS.map((p) => {
            const isSelected = p.id === selectedPersonaId;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPersonaId(p.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-white text-stone-950 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {p.roleTitle}
              </button>
            );
          })}
        </div>

        {/* Selected Persona Deep Dive Card */}
        <div className="bg-white rounded-xl border border-stone-200/90 p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Core Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 mb-1">
                  <span>Category: {activePersona.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-800">{activePersona.roleTitle}</span>
                </div>
                <h3 className="text-2xl font-bold text-stone-950 tracking-tight">
                  {activePersona.headline}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
                  {activePersona.description}
                </p>
              </div>

              {/* Bulleted Gains List */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                  Key Tangible Outcomes
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {activePersona.primaryGains.map((gain, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-md bg-stone-50 border border-stone-200/70">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-stone-800 font-medium">
                        {gain}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accessible Platform Tools */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-stone-500 block mb-2">
                  Dedicated Platform Modules Accessed:
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {activePersona.platformTools.map((tool, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 bg-stone-100 text-stone-800 rounded border border-stone-300/80"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Attributable Stakeholder Proof / Quote */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-stone-50 rounded-xl p-6 sm:p-7 border border-stone-200 relative">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 mb-4">
                  <Quote className="w-4 h-4" />
                </div>

                <blockquote className="text-sm text-stone-700 italic leading-relaxed mb-5">
                  "{activePersona.quote.text}"
                </blockquote>

                <div className="border-t border-stone-200 pt-3">
                  <div className="text-sm font-bold text-stone-900">
                    {activePersona.quote.author}
                  </div>
                  <div className="text-xs text-stone-600">
                    {activePersona.quote.title}
                  </div>
                  <div className="text-xs text-emerald-800 font-medium mt-0.5">
                    {activePersona.quote.location}
                  </div>
                </div>
              </div>

              {/* Technical Enabler Note */}
              <div className="p-4 rounded-lg bg-emerald-950 text-emerald-100 text-xs space-y-2 border border-emerald-900">
                <div className="font-bold text-amber-400 font-mono text-[11px]">
                  PAN-AFRICAN ACCESSIBILITY GUARANTEE
                </div>
                <p className="text-emerald-200/90 leading-relaxed text-[12px]">
                  Every feature above is tested against a simulated Slow 4G profile (&lt; 250KB initial JS bundle) and English + French bilingual interface support.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
