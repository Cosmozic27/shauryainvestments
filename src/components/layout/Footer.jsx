import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Award, Shield, ArrowUp, ArrowUpRight, Phone, Mail } from 'lucide-react';
import Logo from '../common/Logo';
import WhatsAppButton from '../common/WhatsAppButton';
import { companyData } from '../../data/companyData';
import { servicesData } from '../../data/servicesData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="footer" 
      data-theme="dark"
      data-nav-contrast="dark"
      className="bg-navy-950 text-white pt-20 pb-12 border-t border-gold/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Legacy (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="dark" size="normal" showTagline={true} />
            
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm font-light">
              Shaurya Investments is an independent financial consultancy led by Santosh D. Chavan. For 25 years, we have provided measured, client-centric guidance across credit financing, systematic wealth compounding, and LIC life insurance.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-2 bg-navy-900 border border-gold/40 px-3 py-1.5 rounded-sm text-xs text-gold">
                <Award className="w-3.5 h-3.5" />
                <span className="font-semibold tracking-wide">25 Years in Advisory</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-navy-900 border border-white/15 px-3 py-1.5 rounded-sm text-xs text-gray-300">
                <Shield className="w-3.5 h-3.5 text-gold" />
                <span>Client-First Focus</span>
              </div>
            </div>
          </div>

          {/* Column 2: Financial Offerings (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-gold text-base tracking-wide font-semibold">
              Advisory Verticals
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300 font-light">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    to={service.path}
                    className="hover:text-gold transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/50 group-hover:bg-gold group-hover:w-2 transition-all duration-200" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-gold text-base tracking-wide font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300 font-light">
              {companyData.navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="hover:text-gold transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Office & Verified Contact (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-gold text-base tracking-wide font-semibold">
              Office & Direct Contact
            </h4>
            
            <div className="space-y-3 text-xs text-gray-300 leading-relaxed font-light">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-medium">Principal Consultant</span>
                <span className="text-white font-medium text-sm block mt-0.5">{companyData.owner}</span>
              </div>

              <div className="space-y-2 pt-1 border-t border-white/10">
                <a 
                  href={`tel:${companyData.phoneRaw}`} 
                  className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span className="font-medium text-white">{companyData.phone}</span>
                </a>

                <a 
                  href={`mailto:${companyData.email}`} 
                  className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>{companyData.email}</span>
                </a>
              </div>

              <div className="flex items-start gap-2 pt-2 border-t border-white/10">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Office Location:</span>
                  <span>{companyData.location.address}</span>
                  <span className="block">{companyData.location.city}, {companyData.location.state}</span>
                  <span className="block">{companyData.location.country}</span>
                </div>
              </div>

              <div className="pt-2">
                <WhatsAppButton
                  type="general"
                  variant="whatsapp"
                  size="sm"
                  label="Direct WhatsApp Message"
                  className="w-full justify-center text-xs"
                />
              </div>

              <p className="text-[11px] text-gray-400 italic">
                In-person consultations by prior appointment.
              </p>
            </div>
          </div>

        </div>

        {/* Regulatory & Advisory Disclaimer */}
        <div className="py-6 border-b border-white/10 text-[11px] leading-relaxed text-gray-400 font-light space-y-2">
          <p>
            <strong className="text-gray-300 font-medium">Regulatory & Compliance Disclosure:</strong> Mutual Fund investments are subject to market risks; please read all scheme-related documents carefully before investing. Past performance does not assure or guarantee future results. Loan approval, interest rates, eligibility criteria, and disbursement terms are subject to lender underwriting policies, documentation verification, and credit assessment. Shaurya Investments operates strictly as an independent financial consultant and mutual fund distributor.
          </p>
        </div>

        {/* Bottom Bar: Copyright, Legal Links & Back to Top */}
        <div className="pt-6 flex flex-col lg:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-3 text-center sm:text-left">
            <span>© {currentYear} {companyData.name}. All rights reserved.</span>
            <span className="hidden sm:inline text-white/20">·</span>
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <span className="text-white/20">·</span>
            <Link to="/terms-and-conditions" className="hover:text-gold transition-colors">Terms & Conditions</Link>
            <span className="text-white/20">·</span>
            <Link to="/financial-disclaimer" className="hover:text-gold transition-colors">Financial Disclaimer</Link>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-gray-400">
              Founder: <strong className="text-gray-200 font-medium">{companyData.owner}</strong> · Malad East, Mumbai
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gold transition-colors focus:outline-none"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-gold" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
