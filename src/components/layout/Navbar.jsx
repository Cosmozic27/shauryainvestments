import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Award, MapPin, Phone, Mail } from 'lucide-react';
import Logo from '../common/Logo';
import Button from '../common/Button';
import WhatsAppButton from '../common/WhatsAppButton';
import { companyData } from '../../data/companyData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
            {companyData.navigation.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) => `text-[13px] font-medium tracking-wide uppercase transition-colors relative py-1 group ${
                  isActive 
                    ? 'text-brand-primary font-semibold' 
                    : 'text-brand-primary/75 hover:text-brand-primary'
                }`}
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    <span 
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-gold transition-all duration-200 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} 
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action / Direct Contact Info */}
          <div className="hidden sm:flex items-center space-x-3.5">
            <div className="hidden xl:flex items-center gap-1.5 text-xs text-brand-secondary border-r border-stone pr-3.5">
              <Award className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>25 Yrs in Mumbai</span>
            </div>

            <WhatsAppButton
              type="general"
              variant="whatsapp"
              size="sm"
              label="WhatsApp"
              className="text-xs uppercase tracking-wider font-semibold px-3 py-1.5"
            />

            <Button
              to="/services"
              variant="primary"
              size="sm"
              icon={ArrowUpRight}
              className="text-xs tracking-wider uppercase px-3.5 py-1.5"
            >
              Services
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm text-brand-primary hover:text-gold hover:bg-stone/30 transition-colors focus:outline-none focus:ring-1 focus:ring-gold"
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
            <div className="flex flex-col space-y-3">
              <div className="pb-3 border-b border-stone flex items-center justify-between text-xs text-brand-secondary">
                <span>Santosh D. Chavan · Financial Advisory</span>
                <span className="text-gold font-semibold">25 Yrs Experience</span>
              </div>

              {companyData.navigation.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => `py-2 text-base font-serif font-medium transition-colors flex items-center justify-between group ${
                    isActive ? 'text-gold font-semibold pl-2 border-l-2 border-gold' : 'text-brand-primary hover:text-gold'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </NavLink>
              ))}

              <div className="pt-4 border-t border-stone space-y-3">
                <WhatsAppButton
                  type="general"
                  variant="whatsapp"
                  size="md"
                  label="Direct WhatsApp Message"
                  className="w-full text-center justify-center font-semibold text-xs uppercase tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                />

                <Button
                  to="/services"
                  variant="primary"
                  size="md"
                  className="w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Explore All Services
                </Button>

                {/* Direct Phone & Email in Mobile Menu */}
                <div className="pt-3 border-t border-stone/60 space-y-2 text-xs text-brand-secondary">
                  <a 
                    href={`tel:${companyData.phoneRaw}`}
                    className="flex items-center gap-2 hover:text-gold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span className="font-medium text-brand-primary">{companyData.phone}</span>
                  </a>

                  <a 
                    href={`mailto:${companyData.email}`}
                    className="flex items-center gap-2 hover:text-gold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>{companyData.email}</span>
                  </a>

                  <div className="flex items-start gap-2 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                    <span>Kurar Village, Shivaji Nagar, Malad East, Mumbai</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
