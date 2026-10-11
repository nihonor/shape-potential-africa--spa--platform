import React from 'react';
import { Users, Building2, Sprout } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  const categories = [
    {
      title: 'Youth & Trainees',
      subtitle: 'Vocational Learning & Verifiable Skills',
      description:
        'Offline-first modular curricula with adaptive bitrate video, objective auto-grading, and tamper-proof QR certificates verifiable across borders.',
      icon: Users,
    },
    {
      title: 'National Institutions',
      subtitle: 'Capacity Coaching & Governance',
      description:
        '11-topic leadership coaching taxonomy, automated maturity diagnostic scoring, and streamlined institutional capability booking with verified impact logs.',
      icon: Building2,
    },
    {
      title: 'Farmers & Startups',
      subtitle: 'Market Access & Anonymized Pitching',
      description:
        'Direct farm-to-commercial-buyer produce marketplace bypassing intermediaries, coupled with an anti-bias blind grading pitch review sandbox.',
      icon: Sprout,
    },
  ];

  return (
    <section id="features" className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4D4D4D] tracking-tight">
            Manage your entire ecosystem in a single system
          </h2>
          <p className="mt-3 text-base text-[#717171]">
            Who is the SHAPE Potential Africa platform engineered for?
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 text-center border border-gray-100 shadow-[0_2px_4px_rgba(171,190,209,0.2)] hover:shadow-[0_8px_16px_rgba(171,190,209,0.3)] transition-all hover:-translate-y-1 flex flex-col items-center"
              >
                {/* Icon Badge */}
                <div className="w-16 h-16 rounded-2xl bg-[#E8F5E9] flex items-center justify-center text-[#4CAF4F] mb-6 relative">
                  <Icon className="w-8 h-8" />
                  {/* Subtle decorative dot/corner */}
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#A5D6A7]/50" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#4D4D4D] mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#717171] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
