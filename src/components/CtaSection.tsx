import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaProps {
  onCtaClick?: () => void;
}

export const CtaSection: React.FC<CtaProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-[#F5F7FA] py-16 sm:py-20 text-center border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263238] tracking-tight leading-tight">
          Ready to scale impact across your community or institution?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#717171] max-w-2xl mx-auto">
          Join thousands of African youth, farmers, and institutional leaders leveraging unified e-learning, blind pitch sandboxes, and direct market access.
        </p>
        <div className="mt-8 flex justify-center">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium text-white bg-[#4CAF4F] hover:bg-[#388E3C] rounded-md transition-all shadow-xs cursor-pointer"
          >
            <span>Get Started with SPA</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
