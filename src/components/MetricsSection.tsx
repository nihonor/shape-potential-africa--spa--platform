import React from 'react';
import { Users, Layers, Award, ShieldCheck } from 'lucide-react';

export const MetricsSection: React.FC = () => {
  const metrics = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Target Beneficiaries',
      sublabel: 'Youth, women & founders',
    },
    {
      icon: Layers,
      value: '5',
      label: 'Strategic Pillars',
      sublabel: 'Tech, STEM, Ag & more',
    },
    {
      icon: Award,
      value: '11',
      label: 'Coaching Modules',
      sublabel: 'Institutional taxonomy',
    },
    {
      icon: ShieldCheck,
      value: '50%',
      label: 'Inclusion Quota',
      sublabel: 'Mandatory gender tracking',
    },
  ];

  return (
    <section id="impact" className="bg-[#F5F7FA] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4D4D4D] tracking-tight leading-[1.2]">
              Helping Pan-African{' '}
              <span className="block text-[#4CAF4F]">
                communities reinvent themselves
              </span>
            </h2>
            <p className="text-base text-[#717171]">
              Derived directly from the 2026–2036 Strategic Plan with automated nightly M&amp;E rollups.
            </p>
          </div>

          {/* Right Column: 2x2 Stats Grid with Green Icons */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            {metrics.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  {/* Green Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#4CAF4F] shadow-xs shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>
                  {/* Stat Text */}
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#4D4D4D] tabular-nums tracking-tight">
                      {item.value}
                    </div>
                    <div className="text-sm font-medium text-[#717171]">
                      {item.label}
                    </div>
                    <div className="text-xs text-[#89939E]">
                      {item.sublabel}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
