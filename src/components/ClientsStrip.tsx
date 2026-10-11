import React from 'react';

export const ClientsStrip: React.FC = () => {
  const partners = [
    { name: 'African Union Tech', glyph: 'AU' },
    { name: 'AfriAgri Bloc', glyph: 'AAB' },
    { name: 'Pan-African STEM', glyph: 'STEM' },
    { name: 'East Africa Trade', glyph: 'EAT' },
    { name: 'West Africa Agro', glyph: 'WAA' },
    { name: 'SADC Innovation', glyph: 'SADC' },
    { name: 'Continental Youth', glyph: 'CYF' },
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-2xl sm:text-3xl font-bold text-[#4D4D4D]">
          Our Partners &amp; Collaborators
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#717171]">
          Working with leading regional agricultural blocs, educational networks, and pan-African initiatives
        </p>

        {/* Logo Badges Row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-18 opacity-80">
          {/* Logo 1 */}
          <div className="flex items-center gap-2 text-[#4D4D4D] hover:text-[#4CAF4F] transition-colors">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect x="4" y="4" width="14" height="14" rx="4" fill="currentColor" fillOpacity="0.8" />
              <rect x="22" y="4" width="14" height="14" rx="4" fill="currentColor" fillOpacity="0.5" />
              <rect x="4" y="22" width="14" height="14" rx="4" fill="currentColor" fillOpacity="0.5" />
              <rect x="22" y="22" width="14" height="14" rx="7" fill="#4CAF4F" />
            </svg>
            <span className="text-xs font-bold font-mono tracking-wider">AFRI-TECH</span>
          </div>

          {/* Logo 2 */}
          <div className="flex items-center gap-2 text-[#4D4D4D] hover:text-[#4CAF4F] transition-colors">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <ellipse cx="18" cy="18" rx="14" ry="9" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="18" cy="18" r="4.5" fill="#4CAF4F" />
            </svg>
            <span className="text-xs font-bold font-mono tracking-wider">PAN-AGRI</span>
          </div>

          {/* Logo 3 */}
          <div className="flex items-center gap-2 text-[#4D4D4D] hover:text-[#4CAF4F] transition-colors">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M6 10H20C22.2091 10 24 11.7909 24 14V22C24 24.2091 22.2091 26 20 26H6V10Z" fill="currentColor" fillOpacity="0.7" />
              <circle cx="28" cy="18" r="3.5" fill="#4CAF4F" />
            </svg>
            <span className="text-xs font-bold font-mono tracking-wider">EDU-NETWORK</span>
          </div>

          {/* Logo 4 */}
          <div className="flex items-center gap-2 text-[#4D4D4D] hover:text-[#4CAF4F] transition-colors">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M18 4L30 14V28L18 34L6 28V14L18 4Z" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="18" cy="19" r="4" fill="#4CAF4F" />
            </svg>
            <span className="text-xs font-bold font-mono tracking-wider">ECO-LEAGUE</span>
          </div>

          {/* Logo 5 */}
          <div className="flex items-center gap-2 text-[#4D4D4D] hover:text-[#4CAF4F] transition-colors">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect x="6" y="8" width="24" height="20" rx="6" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" />
              <rect x="11" y="13" width="14" height="10" rx="3" fill="#4CAF4F" />
            </svg>
            <span className="text-xs font-bold font-mono tracking-wider">INNO-BLOC</span>
          </div>

          {/* Logo 6 */}
          <div className="flex items-center gap-2 text-[#4D4D4D] hover:text-[#4CAF4F] transition-colors">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="12" cy="18" r="7" stroke="currentColor" strokeWidth="2" />
              <circle cx="24" cy="18" r="7" stroke="#4CAF4F" strokeWidth="2" />
            </svg>
            <span className="text-xs font-bold font-mono tracking-wider">CORRIDOR</span>
          </div>
        </div>

      </div>
    </section>
  );
};
