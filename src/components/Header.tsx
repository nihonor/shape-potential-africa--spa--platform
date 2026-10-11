import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onLoginClick?: () => void;
  onSignUpClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLoginClick, onSignUpClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Overview', href: '#overview' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pillars', href: '#pillars' },
    { label: 'Impact', href: '#impact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F5F7FA] border-b border-gray-100/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 relative flex items-center justify-center">
              {/* Nexcent style geometric triangle logo mark */}
              <svg width="35" height="26" viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0L24.5 24H0.5L12.5 0Z" fill="#4CAF4F" />
                <path d="M22.5 0L34.5 24H10.5L22.5 0Z" fill="#388E3C" fillOpacity="0.8" />
                <path d="M17.5 10L27.5 26H7.5L17.5 10Z" fill="#2E7D32" fillOpacity="0.9" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-[#263238] font-sans">
                SPA<span className="text-[#4CAF4F]">.</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-[#4D4D4D] hover:text-[#4CAF4F] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#login"
              onClick={(e) => {
                if (onLoginClick) {
                  e.preventDefault();
                  onLoginClick();
                }
              }}
              className="text-[15px] font-medium text-[#4CAF4F] hover:text-[#388E3C] px-3 py-2 transition-colors cursor-pointer"
            >
              Login
            </a>
            <a
              href="#register"
              onClick={(e) => {
                if (onSignUpClick) {
                  e.preventDefault();
                  onSignUpClick();
                }
              }}
              className="inline-flex items-center justify-center text-[15px] font-medium text-white bg-[#4CAF4F] hover:bg-[#388E3C] px-5 py-2.5 rounded-md transition-all shadow-xs cursor-pointer"
            >
              Sign up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4D4D4D] hover:text-[#263238] rounded-md focus:outline-hidden"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#4D4D4D] hover:text-[#4CAF4F] hover:bg-[#F5F7FA] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onLoginClick) onLoginClick();
              }}
              className="w-full text-center py-2.5 text-sm font-semibold text-[#4CAF4F] hover:bg-gray-50 rounded-md"
            >
              Login
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onSignUpClick) onSignUpClick();
              }}
              className="w-full text-center py-2.5 text-sm font-semibold text-white bg-[#4CAF4F] hover:bg-[#388E3C] rounded-md shadow-xs"
            >
              Sign up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
