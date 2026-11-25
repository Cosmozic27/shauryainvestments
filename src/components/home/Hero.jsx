import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Award, 
  MapPin, 
  ShieldCheck, 
  Building2, 
  Coins, 
  FileText 
} from 'lucide-react';
import Button from '../common/Button';
import { companyData } from '../../data/companyData';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-champagne scroll-mt-28">
      
      {/* Refined architectural ambient watermark / lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#101D32_1px,transparent_1px)] [background-size:28px_28px]" />
      
      {/* Subtle gold ambient glow */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-navy/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Authoritative Editorial Copy */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Trust Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cream border border-gold/40 shadow-soft"
            >
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-brand-primary">
                Santosh D. Chavan · 25 Years of Trusted Advisory
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-brand-primary leading-[1.12] tracking-tight"
            >
              Your Financial Goals.{' '}
              <span className="block mt-2 font-normal italic text-gold-dark">
                Our Commitment.
              </span>
            </motion.h1>

            {/* Editorial Lead Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-brand-secondary leading-relaxed max-w-xl font-normal"
            >
              For over two and a half decades, Shaurya Investments has provided bespoke, measured financial advisory to families and businesses across Mumbai. We harmonize debt financing, wealth compounding, and asset protection under one disciplined philosophy.
            </motion.p>

            {/* Refined Calls to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Button
                href="#services"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="shadow-sm"
              >
                Explore Advisory Verticals
              </Button>
              <Button
                href="#about"
                variant="outline"
                size="lg"
              >
                The Firm & Leadership
              </Button>
            </motion.div>

            {/* Quick Credentials / Micro-Attributes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-stone flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-brand-secondary"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Retail & Commercial Loans</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Mutual Funds & Systematic SIPs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>LIC Life Coverage</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Editorial Visual Showcase with Architectural Photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Decorative background framing */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-gold/20 via-transparent to-navy/10 rounded-sm -rotate-1 pointer-events-none" />
            
            {/* Primary Frame */}
            <div className="relative bg-cream p-3 rounded-sm border border-stone shadow-elevated overflow-hidden">
              
              {/* High-quality Architectural Photography Asset */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden rounded-[2px] bg-navy-950">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern architectural financial district institution"
                  className="w-full h-full object-cover object-center opacity-85 hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                
                {/* Elegant Navy/Gold tonal overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/30 to-transparent" />

                {/* Overlaid Badge on Top Right */}
                <div className="absolute top-4 right-4 bg-navy-900/90 backdrop-blur-md border border-gold/40 px-3 py-1.5 rounded-sm flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-gold" />
                  <span className="text-[11px] font-medium text-white tracking-wider uppercase">
                    25 Years Experience
                  </span>
                </div>

                {/* Overlaid Advisory Statement on Image Bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-sm bg-navy/85 backdrop-blur-md border border-white/10 text-white">
                  <p className="text-[11px] uppercase tracking-widest text-gold font-semibold">
                    Santosh D. Chavan
                  </p>
                  <p className="font-serif text-base font-medium mt-0.5 text-white/95">
                    "Prudent guidance, transparent terms, and multigenerational security."
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-gray-300">
                    <MapPin className="w-3 h-3 text-gold" />
                    <span>Kurar Village, Malad East, Mumbai</span>
                  </div>
                </div>

              </div>

              {/* Lower Card Bar */}
              <div className="p-4 grid grid-cols-2 gap-3 text-left">
                <div className="border-r border-stone pr-2">
                  <span className="block text-[10px] uppercase tracking-wider text-brand-secondary font-medium">Practice Tenure</span>
                  <span className="font-serif text-lg font-bold text-brand-primary">25 Years</span>
                  <span className="block text-[11px] text-brand-secondary">Continuous Guidance</span>
                </div>
                <div className="pl-2">
                  <span className="block text-[10px] uppercase tracking-wider text-brand-secondary font-medium">Advisory Focus</span>
                  <span className="font-serif text-lg font-bold text-brand-primary">6 Verticals</span>
                  <span className="block text-[11px] text-brand-secondary">Loans, Wealth & LIC</span>
                </div>
              </div>

            </div>

          </motion.div>

        </div>

        {/* Bottom Editorial Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-stone grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
        >
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold">Experience</span>
            <p className="font-serif text-2xl font-bold text-brand-primary">25 Years</p>
            <p className="text-xs text-brand-secondary">Navigating diverse economic cycles</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold">Commitment</span>
            <p className="font-serif text-2xl font-bold text-brand-primary">Transparent</p>
            <p className="text-xs text-brand-secondary">Clear documentation & counsel</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold">Scope</span>
            <p className="font-serif text-2xl font-bold text-brand-primary">6 Portfolios</p>
            <p className="text-xs text-brand-secondary">Loans, Mutual Funds, SIPs & LIC</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold">Location</span>
            <p className="font-serif text-2xl font-bold text-brand-primary">Malad East</p>
            <p className="text-xs text-brand-secondary">Shivaji Nagar, Kurar Village, Mumbai</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
