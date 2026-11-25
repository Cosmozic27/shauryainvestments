import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  UserCheck, 
  Briefcase, 
  TrendingUp, 
  PiggyBank, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  Sparkles,
  Calculator
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import WhatsAppButton from '../common/WhatsAppButton';
import ServiceCard from '../common/ServiceCard';
import { servicesData } from '../../data/servicesData';

export default function ServicePreview() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterCategories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'lending', label: 'Lending Solutions' },
    { id: 'wealth', label: 'Wealth & Protection' },
  ];

  const filteredServices = servicesData.filter((service) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'lending') return service.category === 'Lending Solutions' || service.category === 'Commercial Financing';
    if (activeFilter === 'wealth') return service.category === 'Wealth Building' || service.category === 'Protection & Security';
    return true;
  });

  return (
    <section 
      id="services" 
      data-theme="dark"
      data-nav-contrast="dark"
      data-contrast-zone="dark"
      className="py-24 md:py-32 bg-[#14243B] text-[#F5F0E7] relative scroll-mt-24 overflow-hidden border-b border-gold/20"
    >
      {/* Designed architectural ambient background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#C6A66B_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#0B1424]/80 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          subtitle="Advisory Verticals"
          title="Engineered for Growth. Protected for Tomorrow."
          description="Explore our six core advisory solutions, structured to provide strategic liquidity, long-term capital compounding, and enduring family safety."
          isLight={true}
          align="center"
        />

        {/* Filter Tab Bar */}
        <div className="flex items-center justify-center gap-2 mb-14">
          <div className="inline-flex p-1 bg-[#0B1424]/90 backdrop-blur-sm border border-gold/30 rounded-sm shadow-soft">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 text-xs font-medium tracking-wide uppercase transition-all duration-200 rounded-sm ${
                  activeFilter === cat.id
                    ? 'bg-gold text-[#0B1424] font-semibold shadow-sm'
                    : 'text-[#B8C0CC] hover:text-[#F5F0E7] hover:bg-[#14243B]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="h-full"
            >
              <ServiceCard service={service} index={index} enableSpotlight={true} variant="dark" />
            </motion.div>
          ))}
        </div>

        {/* Interactive Financial Tools Quick Banner */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/loans"
            className="card-glass-dark p-5 rounded-sm flex items-center justify-between group border border-gold/25 hover:border-gold/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#0B1424] border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-[#0B1424] transition-colors">
                <Calculator className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider text-gold font-semibold block">Planning Tool</span>
                <span className="font-serif text-base font-semibold text-[#F5F0E7]">Loan EMI Calculator</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/sip-investments"
            className="card-glass-dark p-5 rounded-sm flex items-center justify-between group border border-gold/25 hover:border-gold/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#0B1424] border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-[#0B1424] transition-colors">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider text-gold font-semibold block">Planning Tool</span>
                <span className="font-serif text-base font-semibold text-[#F5F0E7]">SIP Compounding Calculator</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Tailored Consultation Reassurance Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 bg-[#0B1424]/90 border border-gold/30 rounded-sm p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[11px] uppercase tracking-widest text-gold font-semibold">
              Personalized Consultation
            </span>
            <h4 className="font-serif text-lg font-semibold text-[#F5F0E7]">
              Require guidance on loan structuring or investment allocation?
            </h4>
            <p className="text-xs text-[#B8C0CC]">
              Meet directly with Santosh D. Chavan at our Malad East, Mumbai office for confidential counsel.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <WhatsAppButton
              type="general"
              variant="whatsapp"
              size="md"
              label="WhatsApp Consultation"
              className="w-full sm:w-auto text-xs uppercase tracking-wider font-semibold"
            />
            <a
              href="#footer"
              className="shrink-0 inline-flex items-center justify-center text-xs uppercase tracking-wider font-semibold text-[#F5F0E7] border border-gold/30 px-6 py-3 rounded-sm hover:bg-gold hover:text-[#0B1424] hover:border-gold transition-all duration-200 w-full sm:w-auto"
            >
              Office Address & Info
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
