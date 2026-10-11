import React from 'react';

interface FeatureSplitProps {
  onLearnMoreClick?: () => void;
}

export const FeatureSplitOne: React.FC<FeatureSplitProps> = ({ onLearnMoreClick }) => {
  return (
    <section id="overview" className="bg-white py-16 sm:py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Vector Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[420px]">
              <svg viewBox="0 0 450 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Soft ground shadow */}
                <ellipse cx="225" cy="375" rx="180" ry="18" fill="#E8F5E9" opacity="0.7" />

                {/* Portal Screen with Profile & Form */}
                <g>
                  {/* Outer phone/tablet card */}
                  <rect x="140" y="50" width="170" height="310" rx="20" fill="#FFFFFF" stroke="#CFD8DC" strokeWidth="3" />
                  <rect x="150" y="60" width="150" height="290" rx="14" fill="#F5F7FA" />

                  {/* Profile Avatar Card inside */}
                  <circle cx="225" cy="115" r="28" fill="#E8F5E9" />
                  <path d="M225 102C230 102 234 106 234 111C234 116 230 120 225 120C220 120 216 116 216 111C216 106 220 102 225 102Z" fill="#4CAF4F" />
                  <path d="M210 133C210 126 216 123 225 123C234 123 240 126 240 133" stroke="#4CAF4F" strokeWidth="4" strokeLinecap="round" />

                  {/* Form input lines */}
                  <rect x="165" y="160" width="120" height="18" rx="4" fill="#FFFFFF" stroke="#E0E0E0" />
                  <circle cx="175" cy="169" r="3" fill="#4CAF4F" />
                  <circle cx="185" cy="169" r="3" fill="#4CAF4F" />
                  <circle cx="195" cy="169" r="3" fill="#4CAF4F" />

                  <rect x="165" y="190" width="120" height="18" rx="4" fill="#FFFFFF" stroke="#E0E0E0" />
                  <circle cx="175" cy="199" r="3" fill="#81C784" />
                  <circle cx="185" cy="199" r="3" fill="#81C784" />
                  <circle cx="195" cy="199" r="3" fill="#81C784" />
                  <circle cx="205" cy="199" r="3" fill="#81C784" />

                  <rect x="165" y="220" width="120" height="18" rx="4" fill="#FFFFFF" stroke="#E0E0E0" />
                  <line x1="175" y1="229" x2="235" y2="229" stroke="#B0BEC5" strokeWidth="3" strokeLinecap="round" />

                  {/* Green submit button */}
                  <rect x="165" y="255" width="120" height="26" rx="6" fill="#4CAF4F" />
                  <text x="195" y="272" fill="#FFFFFF" fontSize="10" fontWeight="bold">SIGN UP</text>
                </g>

                {/* Person 1 (Woman in green top sitting / standing on left) */}
                <g>
                  {/* Legs */}
                  <path d="M110 260L100 350L90 352" stroke="#263238" strokeWidth="10" strokeLinecap="round" />
                  <path d="M125 260L120 350L130 352" stroke="#263238" strokeWidth="10" strokeLinecap="round" />
                  <ellipse cx="88" cy="355" rx="10" ry="4" fill="#37474F" />
                  <ellipse cx="132" cy="355" rx="10" ry="4" fill="#37474F" />

                  {/* Torso & Green Top */}
                  <path d="M100 190C100 178 130 178 130 190L125 265H105L100 190Z" fill="#2E7D32" />

                  {/* Head & Hair */}
                  <circle cx="115" cy="158" r="14" fill="#D7CCC8" />
                  <path d="M102 150C102 140 128 140 128 150C128 165 110 170 102 150Z" fill="#263238" />

                  {/* Arm interacting with screen */}
                  <path d="M125 195L155 190L168 170" stroke="#2E7D32" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </g>

                {/* Person 2 (Man in green top standing on right) */}
                <g>
                  {/* Legs */}
                  <path d="M335 265L330 365L320 367" stroke="#263238" strokeWidth="11" strokeLinecap="round" />
                  <path d="M355 265L360 365L370 367" stroke="#263238" strokeWidth="11" strokeLinecap="round" />
                  <ellipse cx="318" cy="370" rx="10" ry="4" fill="#37474F" />
                  <ellipse cx="372" cy="370" rx="10" ry="4" fill="#37474F" />

                  {/* Torso & Green Shirt */}
                  <path d="M325 185C325 172 365 172 365 185L360 270H330L325 185Z" fill="#4CAF4F" />

                  {/* Head */}
                  <circle cx="345" cy="155" r="15" fill="#D7CCC8" />
                  <path d="M333 150C333 138 357 138 357 150C357 145 360 155 357 160" fill="#263238" />

                  {/* Arm gesturing to screen */}
                  <path d="M330 190L300 210L285 200" stroke="#4CAF4F" strokeWidth="7" strokeLinecap="round" />
                  <path d="M360 190L375 220" stroke="#4CAF4F" strokeWidth="7" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          {/* Right Column: Narrative & Learn More */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D4D4D] tracking-tight leading-[1.2]">
              The Dual-Facing Architecture for Pan-African Low-Connectivity Realities
            </h2>

            <p className="text-base text-[#717171] leading-relaxed">
              Derived directly from the 2026–2036 Strategic Plan, SHAPE Potential Africa is neither a generic e-learning portal nor a disconnected back-office spreadsheet. It is an integrated operating system built to withstand intermittent power and costly mobile data.
            </p>

            <p className="text-sm text-[#717171] leading-relaxed">
              Frontline learners and farmers interact through an offline-resilient Progressive Web App (PWA) with IndexedDB caching and lightweight assets. Simultaneously, internal administrators and expert pitch judges operate behind strict PostgreSQL Row-Level Security (RLS) guaranteeing absolute data isolation across strategic tracks.
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
