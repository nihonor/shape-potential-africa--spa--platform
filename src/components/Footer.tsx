import React, { useState } from 'react';
import { Send, Instagram, Twitter, Youtube, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#263238] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Copyright (Span 5) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2.5">
              <svg width="35" height="26" viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L24.5 24H0.5L12.5 0Z" fill="#4CAF4F" />
                <path d="M22.5 0L34.5 24H10.5L22.5 0Z" fill="#81C784" />
                <path d="M17.5 10L27.5 26H7.5L17.5 10Z" fill="#A5D6A7" />
              </svg>
              <span className="text-2xl font-bold tracking-tight text-white font-sans">
                SPA<span className="text-[#4CAF4F]">.</span>
              </span>
            </div>

            <p className="text-[#D9DBE1] text-xs sm:text-sm leading-relaxed max-w-sm">
              Unified pan-African digital platform powering offline-capable vocational e-learning, blind pitch sandboxes, and transparent agri-commodity exchange.
            </p>

            <div className="text-xs text-[#A4A6B3] space-y-1">
              <div>Copyright © 2026 SHAPE Potential Africa.</div>
              <div>All rights reserved. Derived from 10-Year Strategic Plan.</div>
            </div>

            {/* Social Icons matching Nexcent round pills */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-[#3C464C] hover:bg-[#4CAF4F] flex items-center justify-center text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#3C464C] hover:bg-[#4CAF4F] flex items-center justify-center text-white transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#3C464C] hover:bg-[#4CAF4F] flex items-center justify-center text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#3C464C] hover:bg-[#4CAF4F] flex items-center justify-center text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Platform Links (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-semibold text-white">Platform</h4>
            <ul className="space-y-2.5 text-[#D9DBE1] text-xs sm:text-sm">
              <li><a href="#" className="hover:text-[#4CAF4F] transition-colors">Overview</a></li>
              <li><a href="#features" className="hover:text-[#4CAF4F] transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-[#4CAF4F] transition-colors">How It Works</a></li>
              <li><a href="#impact" className="hover:text-[#4CAF4F] transition-colors">Impact &amp; M&amp;E</a></li>
              <li><a href="#pillars" className="hover:text-[#4CAF4F] transition-colors">Strategic Pillars</a></li>
            </ul>
          </div>

          {/* Col 3: Strategic Pillars (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-semibold text-white">Thematic Pillars</h4>
            <ul className="space-y-2.5 text-[#D9DBE1] text-xs sm:text-sm">
              <li><a href="#pillars" className="hover:text-[#4CAF4F] transition-colors">Technology &amp; AI Academy</a></li>
              <li><a href="#pillars" className="hover:text-[#4CAF4F] transition-colors">Education &amp; STEM Labs</a></li>
              <li><a href="#pillars" className="hover:text-[#4CAF4F] transition-colors">Emerging Leaders Program</a></li>
              <li><a href="#pillars" className="hover:text-[#4CAF4F] transition-colors">Young Startups &amp; Pitch Sandbox</a></li>
              <li><a href="#pillars" className="hover:text-[#4CAF4F] transition-colors">Smart Agriculture &amp; Marketplace</a></li>
            </ul>
          </div>

          {/* Col 4: Stay up to date newsletter input (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-semibold text-white">Stay up to date</h4>
            <p className="text-xs text-[#D9DBE1]">
              Subscribe for continental impact updates and quarterly strategic progress reports.
            </p>

            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-[#515B60] text-white placeholder-[#D9DBE1]/60 text-xs sm:text-sm px-4 py-3 rounded-lg pr-11 focus:outline-hidden focus:ring-2 focus:ring-[#4CAF4F] transition-all"
              />
              <button
                type="submit"
                aria-label="Submit email"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-[#4CAF4F] p-1.5 transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {subscribed && (
              <p className="text-xs text-[#81C784]">
                Thank you! You are now subscribed to platform updates.
              </p>
            )}
          </div>

        </div>
      </div>
    </footer>
  );
};
