import React from 'react';

interface HeroProps {
  onExploreClick?: () => void;
  onRegisterClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onRegisterClick }) => {
  return (
    <section className="bg-[#F5F7FA] py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-[#4D4D4D] tracking-tight leading-[1.15]">
              Empowering African Youth,{' '}
              <span className="block text-[#4CAF4F]">
                Farmers & Institutions
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#717171] leading-relaxed max-w-xl">
              A unified digital platform powering offline-capable e-learning, anonymized startup pitch reviews, and direct agricultural market access with automated M&amp;E governance.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onRegisterClick || onExploreClick}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-[#4CAF4F] hover:bg-[#388E3C] rounded-md transition-all shadow-xs cursor-pointer"
              >
                Register
              </button>
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-[#4D4D4D] hover:text-[#4CAF4F] bg-white hover:bg-gray-50 border border-gray-200 rounded-md transition-all cursor-pointer"
              >
                Learn More
              </button>
            </div>

            {/* Carousel Dots indicator */}
            <div className="pt-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4CAF4F] transition-all" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#4CAF4F]/30 hover:bg-[#4CAF4F]/60 cursor-pointer transition-all" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#4CAF4F]/30 hover:bg-[#4CAF4F]/60 cursor-pointer transition-all" />
            </div>
          </div>

          {/* Right Column: Nexcent-Style Tech & Learner Vector Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[480px]">
              <svg viewBox="0 0 520 440" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-sm">
                {/* Background soft shadow / ground */}
                <ellipse cx="260" cy="405" rx="210" ry="22" fill="#E8F5E9" opacity="0.6" />
                
                {/* Gear behind */}
                <g opacity="0.5">
                  <circle cx="380" cy="360" r="32" fill="#CFD8DC" />
                  <circle cx="380" cy="360" r="14" fill="#F5F7FA" />
                  <rect x="375" y="322" width="10" height="76" rx="2" fill="#CFD8DC" />
                  <rect x="342" y="355" width="76" height="10" rx="2" fill="#CFD8DC" />
                </g>

                {/* Computer Monitor */}
                <g>
                  {/* Stand */}
                  <path d="M220 320L200 370H280L260 320H220Z" fill="#37474F" />
                  <rect x="180" y="370" width="120" height="12" rx="6" fill="#263238" />

                  {/* Monitor Body / Bezel */}
                  <rect x="100" y="70" width="280" height="250" rx="16" fill="#263238" />
                  {/* Monitor Screen */}
                  <rect x="110" y="80" width="260" height="230" rx="10" fill="#FFFFFF" />

                  {/* Screen Content - Left Panel (Flowchart & Code) */}
                  <rect x="120" y="92" width="115" height="206" rx="6" fill="#F5F7FA" />
                  
                  {/* Flowchart blocks */}
                  <rect x="132" y="104" width="90" height="22" rx="4" fill="#E8F5E9" stroke="#4CAF4F" strokeWidth="1.5" />
                  <line x1="177" y1="126" x2="177" y2="136" stroke="#4CAF4F" strokeWidth="2" strokeDasharray="2 2" />
                  
                  <rect x="132" y="136" width="90" height="24" rx="4" fill="#FFFFFF" stroke="#81C784" strokeWidth="1.5" />
                  <line x1="145" y1="148" x2="195" y2="148" stroke="#4CAF4F" strokeWidth="2" strokeLinecap="round" />
                  
                  <line x1="177" y1="160" x2="177" y2="170" stroke="#4CAF4F" strokeWidth="2" />
                  
                  <rect x="132" y="170" width="90" height="24" rx="4" fill="#4CAF4F" />
                  <text x="145" y="186" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">VERIFIED OK</text>
                  
                  {/* Code Snippet pills */}
                  <rect x="130" y="210" width="40" height="18" rx="4" fill="#4CAF4F" />
                  <text x="138" y="223" fill="#FFFFFF" fontSize="9" fontWeight="bold">AI LAB</text>
                  
                  <rect x="175" y="210" width="45" height="18" rx="4" fill="#2E7D32" />
                  <text x="181" y="223" fill="#FFFFFF" fontSize="9" fontWeight="bold">AGRI</text>

                  <rect x="130" y="235" width="45" height="18" rx="4" fill="#81C784" />
                  <text x="137" y="248" fill="#FFFFFF" fontSize="9" fontWeight="bold">PITCH</text>

                  <rect x="180" y="235" width="40" height="18" rx="4" fill="#388E3C" />
                  <text x="188" y="248" fill="#FFFFFF" fontSize="9" fontWeight="bold">M&amp;E</text>

                  {/* Screen Content - Right Panel (IDE / Code Editor) */}
                  <rect x="245" y="92" width="115" height="206" rx="6" fill="#1E293B" />
                  <circle cx="257" cy="104" r="3" fill="#EF4444" />
                  <circle cx="267" cy="104" r="3" fill="#F59E0B" />
                  <circle cx="277" cy="104" r="3" fill="#10B981" />

                  {/* Code lines */}
                  <line x1="255" y1="120" x2="310" y2="120" stroke="#4CAF4F" strokeWidth="3" strokeLinecap="round" />
                  <line x1="265" y1="130" x2="340" y2="130" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="265" y1="140" x2="320" y2="140" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="255" y1="155" x2="295" y2="155" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round" />
                  <line x1="265" y1="165" x2="335" y2="165" stroke="#4CAF4F" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="265" y1="175" x2="305" y2="175" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="255" y1="190" x2="325" y2="190" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="255" y1="205" x2="340" y2="205" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Code tags floating */}
                  <rect x="122" y="268" width="105" height="22" rx="4" fill="#2E7D32" />
                  <text x="135" y="283" fill="#FFFFFF" fontSize="10" fontWeight="bold">PAN-AFRICAN PWA</text>
                </g>

                {/* Floating cross/tick badge */}
                <g>
                  <rect x="390" y="110" width="30" height="30" rx="8" fill="#37474F" />
                  <path d="M400 120L410 130M410 120L400 130" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                </g>

                {/* Person / Professional Illustration standing on right */}
                <g>
                  {/* Legs & Shoes */}
                  <path d="M406 280L400 375L392 377" stroke="#263238" strokeWidth="12" strokeLinecap="round" />
                  <path d="M424 280L432 375L440 377" stroke="#263238" strokeWidth="12" strokeLinecap="round" />

                  {/* Shoes */}
                  <ellipse cx="390" cy="380" rx="12" ry="5" fill="#37474F" />
                  <ellipse cx="442" cy="380" rx="12" ry="5" fill="#37474F" />

                  {/* Body & Shirt (Vibrant Green) */}
                  <path d="M396 200C396 185 434 185 434 200L430 285H400L396 200Z" fill="#4CAF4F" />

                  {/* Left Arm holding laptop */}
                  <path d="M398 205L380 230L400 240" stroke="#4CAF4F" strokeWidth="8" strokeLinecap="round" />
                  
                  {/* Laptop */}
                  <rect x="382" y="222" width="46" height="30" rx="3" fill="#81C784" stroke="#2E7D32" strokeWidth="1.5" />
                  <rect x="380" y="250" width="50" height="4" rx="2" fill="#263238" />

                  {/* Right Arm */}
                  <path d="M432 205L445 235L425 242" stroke="#4CAF4F" strokeWidth="8" strokeLinecap="round" />

                  {/* Head & Hair */}
                  <circle cx="415" cy="165" r="16" fill="#D7CCC8" />
                  {/* Hair */}
                  <path d="M402 165C402 150 428 145 428 155C428 150 432 165 428 170" fill="#263238" />
                  {/* Face details */}
                  <circle cx="410" cy="164" r="1.5" fill="#263238" />
                </g>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
