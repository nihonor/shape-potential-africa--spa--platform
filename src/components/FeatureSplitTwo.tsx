import React from 'react';

interface FeatureSplitProps {
  onLearnMoreClick?: () => void;
}

export const FeatureSplitTwo: React.FC<FeatureSplitProps> = ({ onLearnMoreClick }) => {
  return (
    <section className="bg-white py-16 sm:py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Mobile & Security Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[420px]">
              <svg viewBox="0 0 450 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Soft ground shadow */}
                <ellipse cx="225" cy="390" rx="180" ry="16" fill="#E8F5E9" opacity="0.7" />

                {/* Green Leaf accent background */}
                <path d="M300 240C330 200 370 230 350 280C330 330 280 300 300 240Z" fill="#C8E6C9" opacity="0.6" />

                {/* Big Green Padlock at top */}
                <g>
                  <path d="M305 170V140C305 125 320 115 335 115C350 115 365 125 365 140V170" stroke="#4CAF4F" strokeWidth="12" strokeLinecap="round" />
                  <rect x="290" y="165" width="70" height="55" rx="14" fill="#4CAF4F" />
                  <circle cx="325" cy="190" r="6" fill="#FFFFFF" />
                  <rect x="323" y="190" width="4" height="12" rx="2" fill="#FFFFFF" />
                </g>

                {/* Mobile Phone Mockup */}
                <g>
                  {/* Outer phone frame */}
                  <rect x="140" y="80" width="160" height="300" rx="28" fill="#FFFFFF" stroke="#37474F" strokeWidth="6" />
                  <rect x="150" y="90" width="140" height="280" rx="20" fill="#F5F7FA" />

                  {/* Speaker line */}
                  <rect x="195" y="98" width="50" height="4" rx="2" fill="#CFD8DC" />

                  {/* Avatar & Input items */}
                  <circle cx="220" cy="130" r="16" fill="#E8F5E9" />
                  <circle cx="220" cy="126" r="6" fill="#4CAF4F" />
                  <path d="M212 140C212 135 215 133 220 133C225 133 228 135 228 140" stroke="#4CAF4F" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Form fields on phone */}
                  <rect x="165" y="160" width="110" height="14" rx="3" fill="#FFFFFF" stroke="#E0E0E0" />
                  <line x1="175" y1="167" x2="210" y2="167" stroke="#4CAF4F" strokeWidth="3" strokeLinecap="round" />

                  <rect x="165" y="185" width="110" height="14" rx="3" fill="#FFFFFF" stroke="#E0E0E0" />
                  <line x1="175" y1="192" x2="230" y2="192" stroke="#B0BEC5" strokeWidth="3" strokeLinecap="round" />

                  <rect x="165" y="210" width="110" height="14" rx="3" fill="#FFFFFF" stroke="#E0E0E0" />
                  <circle cx="173" cy="217" r="2.5" fill="#4CAF4F" />
                  <circle cx="180" cy="217" r="2.5" fill="#4CAF4F" />
                  <circle cx="187" cy="217" r="2.5" fill="#4CAF4F" />
                  <circle cx="194" cy="217" r="2.5" fill="#4CAF4F" />

                  {/* Green CTA on screen */}
                  <rect x="165" y="240" width="110" height="22" rx="5" fill="#4CAF4F" />
                  <text x="190" y="255" fill="#FFFFFF" fontSize="9" fontWeight="bold">SUBMIT DECK</text>
                </g>

                {/* Floating Thumbs-Up Badge */}
                <g>
                  <circle cx="115" cy="225" r="20" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="1.5" />
                  <circle cx="115" cy="225" r="18" fill="#E8F5E9" />
                  <path d="M110 230V222H113L116 217C117 215 119 216 119 218V222H123C124 222 125 223 125 224L123 230C123 231 121 232 120 232H112C111 232 110 231 110 230Z" fill="#4CAF4F" />
                </g>

                {/* Character standing & touching screen */}
                <g>
                  {/* Legs */}
                  <path d="M190 280L185 380L175 382" stroke="#263238" strokeWidth="11" strokeLinecap="round" />
                  <path d="M208 280L212 380L222 382" stroke="#263238" strokeWidth="11" strokeLinecap="round" />
                  <ellipse cx="173" cy="385" rx="10" ry="4" fill="#37474F" />
                  <ellipse cx="225" cy="385" rx="10" ry="4" fill="#37474F" />

                  {/* Torso & Green Blouse */}
                  <path d="M180 200C180 185 215 185 215 200L210 285H185L180 200Z" fill="#2E7D32" />

                  {/* Left Arm pointing at phone */}
                  <path d="M185 205L160 215L170 200L195 190" stroke="#2E7D32" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Right Arm */}
                  <path d="M212 205L230 240L210 250" stroke="#2E7D32" strokeWidth="6" strokeLinecap="round" />

                  {/* Head & Hair */}
                  <circle cx="198" cy="168" r="15" fill="#D7CCC8" />
                  {/* Dark long hair */}
                  <path d="M185 160C185 145 215 145 215 165C215 185 182 185 182 220C178 220 178 190 185 160Z" fill="#263238" />
                </g>
              </svg>
            </div>
          </div>

          {/* Right Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D4D4D] tracking-tight leading-[1.2]">
              Anonymized Pitch Sandbox &amp; Direct Agri-Marketplace
            </h2>

            <p className="text-base text-[#717171] leading-relaxed">
              Founders upload business plans and slide decks through a quarantined MinIO ingest pipeline. The system strips all personal and demographic identifiers, assigning randomized submission tokens for strictly objective peer and expert evaluation.
            </p>

            <p className="text-sm text-[#717171] leading-relaxed">
              In parallel, rural agricultural cooperatives list crop batches directly to commercial buyers with live price discovery and batch grading. Middlemen are bypassed, and transactions feed directly into quarterly impact KPIs verified for donor and board governance.
            </p>

            <div className="pt-2">
              <button
                onClick={onLearnMoreClick}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-[#4CAF4F] hover:bg-[#388E3C] rounded-md transition-all shadow-xs cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
