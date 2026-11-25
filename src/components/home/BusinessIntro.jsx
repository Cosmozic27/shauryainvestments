import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  MapPin, 
  CheckCircle2, 
  Scale, 
  FileCheck, 
  Users, 
  Clock 
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import ImageWithSkeleton from '../common/ImageWithSkeleton';
import ParallaxImage from '../common/ParallaxImage';
import NumberCounter from '../common/NumberCounter';
import { companyData } from '../../data/companyData';

export default function BusinessIntro() {
  return (
    <section 
      id="about" 
      data-contrast-zone="light"
      data-theme="light"
      data-nav-contrast="light"
      className="py-24 md:py-32 bg-[#E6DED0] border-y border-[#D2C7B6] relative overflow-hidden scroll-mt-24"
    >
      
      {/* Full-Bleed Architectural Consultation Photographic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02]"
        />
        {/* Responsive Translucent Warm Stone Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#E6DED0] via-[#E6DED0]/95 to-[#DDD3C3]/90" />
        {/* Subtle architectural radial grid pattern */}
        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#17243A_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Executive Dossier & Photographic Composition */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-2.5 border border-gold/30 rounded-sm pointer-events-none group-hover:border-gold/50 transition-colors" />
              
              {/* Main Container Card with Glassmorphism */}
              <div className="card-glass-dark text-white rounded-sm overflow-hidden gold-sweep-active">
                
                {/* Executive Advisory Consultation Photography with Subtle Parallax */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-navy-950">
                  <ParallaxImage offset={10} className="w-full h-full">
                    <ImageWithSkeleton
                      src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80"
                      alt="Executive financial consultation"
                      className="w-full h-full"
                      imageClassName="w-full h-full object-cover object-center brightness-90 contrast-105 hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </ParallaxImage>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />

                  {/* Official Emblem Badge */}
                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-navy-900 border border-gold/60 flex items-center justify-center shadow-md p-1.5 overflow-hidden">
                      <img 
                        src="/assets/logo/logo-symbol.png" 
                        alt="Shaurya Investments Crest" 
                        className="w-full h-full object-contain filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block">
                        Principal Consultant
                      </span>
                      <span className="font-serif text-lg font-semibold text-white leading-none">
                        {companyData.owner}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Profile Details Dossier */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  <div className="grid grid-cols-2 gap-4 pb-6 border-b border-white/10 text-xs">
                    <div>
                      <span className="text-gray-400 block uppercase tracking-wider text-[10px]">Total Experience</span>
                      <span className="font-serif text-xl font-bold text-white mt-0.5 block">
                        <NumberCounter target={25} suffix=" Years" />
                      </span>
                      <span className="text-gold-light text-[11px]">Continuous Practice</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block uppercase tracking-wider text-[10px]">Headquarters</span>
                      <span className="font-serif text-base font-semibold text-white mt-0.5 block">Malad East</span>
                      <span className="text-gray-400 text-[11px]">Mumbai, India</span>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-gray-300">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">Physical Location:</strong>
                        <span className="text-gray-400">{companyData.location.full}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileCheck className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">Full Advisory Suite:</strong>
                        <span className="text-gray-400">Home, Personal, Business Loans, Mutual Funds, SIP, LIC</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Firm Narrative & Principles */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-gold" />
              <span className="text-xs uppercase font-semibold tracking-widest text-gold">
                Firm Leadership & Advisory Wisdom
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-primary tracking-tight leading-tight">
              Direct, Accessible Stewardship for Mumbai Families & Enterprises
            </h2>

            <p className="text-base sm:text-lg text-brand-secondary leading-relaxed font-normal">
              At Shaurya Investments, we believe significant financial decisions should never be rushed or outsourced to anonymous digital queues. For a quarter-century, founder <strong className="text-brand-primary font-semibold">Santosh D. Chavan</strong> has personally met with clients at our Kurar Village office, navigating loan approvals and multi-year wealth roadmaps.
            </p>

            <div className="p-5 bg-[#F5F0E7]/80 border-l-2 border-gold rounded-r-sm shadow-sm space-y-2">
              <span className="text-xs font-semibold text-brand-primary block uppercase tracking-wider">
                Our Core Operating Principle
              </span>
              <p className="font-serif italic text-sm text-brand-primary/90 leading-relaxed">
                "We provide the exact same candid guidance on borrowing capacity and investment prudence that we would give to our own immediate family members."
              </p>
            </div>

            {/* Credential Attributes Grid with Glassmorphism */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="card-glass-light flex items-start gap-3 p-3.5 rounded-sm">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-brand-primary/90 leading-relaxed">
                  Direct personal access to principal advisor Santosh D. Chavan
                </span>
              </div>
              <div className="card-glass-light flex items-start gap-3 p-3.5 rounded-sm">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-brand-primary/90 leading-relaxed">
                  Comprehensive documentation preparation and bank liaison
                </span>
              </div>
              <div className="card-glass-light flex items-start gap-3 p-3.5 rounded-sm">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-brand-primary/90 leading-relaxed">
                  Independent product comparison free of sales quotas
                </span>
              </div>
              <div className="card-glass-light flex items-start gap-3 p-3.5 rounded-sm">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-brand-primary/90 leading-relaxed">
                  25 years of continuous local reputation in Malad East
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
