import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

import { CommunitySection } from './components/CommunitySection';
import { FeatureSplitOne } from './components/FeatureSplitOne';
import { MetricsSection } from './components/MetricsSection';
import { FeatureSplitTwo } from './components/FeatureSplitTwo';
import { HowItWorks } from './components/HowItWorks';
import { PillarsExplorer } from './components/PillarsExplorer';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#4D4D4D] font-sans selection:bg-[#4CAF4F] selection:text-white">

      {/* 1. Header (Navbar) */}
      <Header 
        onLoginClick={() => scrollToSection('features')}
        onSignUpClick={() => scrollToSection('overview')}
      />

      <main className="flex-1">
        {/* 2. Hero Section: Split Layout with Illustration */}
        <Hero 
          onExploreClick={() => scrollToSection('features')}
          onRegisterClick={() => scrollToSection('overview')}
        />

        {/* 3. Community 3 Cards: Manage your entire ecosystem */}
        <CommunitySection />

        {/* 5. Feature Split One: Dual-Facing Architecture */}
        <FeatureSplitOne 
          onLearnMoreClick={() => scrollToSection('how-it-works')}
        />

        {/* 6. Metrics Counter: Helping a continent reinvent itself */}
        <MetricsSection />

        {/* 7. Feature Split Two: Pitch Sandbox & Agri-Trade */}
        <FeatureSplitTwo 
          onLearnMoreClick={() => scrollToSection('pillars')}
        />

        {/* 8. Operational Pipeline: How the Platform Works */}
        <HowItWorks />

        {/* 9. The Five Strategic Pillars */}
        <PillarsExplorer />

        {/* 10. Call to Action Banner */}
        <CtaSection 
          onCtaClick={() => scrollToSection('overview')}
        />
      </main>

      {/* 11. Dark Slate Footer */}
      <Footer />

    </div>
  );
}
