import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Shield, MapPin, Award } from 'lucide-react';
import Logo from '../common/Logo';
import Button from '../common/Button';
import { companyData } from '../../data/companyData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-champagne/95 backdrop-blur-md shadow-soft border-b border-stone py-3'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with temporary SI monogram */}
          <Logo size="normal" showTagline={!isScrolled} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-9">
            {companyData.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] font-medium tracking-wide uppercase text-brand-primary/85 hover:text-brand-primary transition-colors relative py-1 group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action / Trust Info */}
          <div className="hidden sm:flex items-center space-x-5">
            <div className="hidden xl:flex items-center gap-2 text-xs text-navy/70 border-r border-navy/15 pr-5">
              <Award className="w-4 h-4 text-gold shrink-0" />
              <span className="font-medium">25 Years in Mumbai</span>
            </div>

            <Button
              href="#services"
              variant="primary"
              size="sm"
              icon={ArrowUpRight}
              className="text-xs tracking-wider uppercase px-4 py-2"
            >
              Our Solutions
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm text-navy hover:text-gold hover:bg-navy/5 transition-colors focus:outline-none focus:ring-1 focus:ring-gold"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 top-[65px] bg-navy/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="bg-champagne border-b border-stone px-6 pt-6 pb-8 shadow-elevated max-h-[calc(100vh-65px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-4">
              <div className="pb-3 border-b border-stone flex items-center justify-between text-xs text-brand-secondary">
                <span>Santosh D. Chavan · Financial Advisory</span>
                <span className="text-gold font-semibold">25 Yrs Experience</span>
              </div>

              {companyData.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-base font-serif font-medium text-brand-primary hover:text-gold transition-colors flex items-center justify-between group"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}

              <div className="pt-4 border-t border-stone space-y-3">
                <Button
                  href="#services"
                  variant="primary"
                  size="md"
                  className="w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Explore All Services
                </Button>

                <div className="flex items-start gap-2 pt-2 text-xs text-brand-secondary">
                  <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                  <span>Kurar Village, Shivaji Nagar, Malad East, Mumbai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
