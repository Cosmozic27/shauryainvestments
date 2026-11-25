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
import { companyData } from '../../data/companyData';

export default function BusinessIntro() {
  return (
    <section id="about" className="py-24 md:py-32 bg-sand border-y border-stone relative overflow-hidden scroll-mt-24">
      
      {/* Subtle background ornamentation */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-ivory rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Executive Dossier & Photographic Composition */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-2.5 border border-gold/30 rounded-sm pointer-events-none" />
              
              {/* Main Container Card */}
              <div className="relative bg-navy text-white rounded-sm shadow-elevated overflow-hidden border border-navy-800">
                
                {/* Executive Advisory Interior Photography */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                    alt="Executive consultation office space"
                    className="w-full h-full object-cover object-center brightness-90 contrast-105"
                    loading="lazy"
                  />
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
                      <span className="font-serif text-xl font-bold text-white mt-0.5 block">25 Years</span>
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
                      <Award className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">Advisory Scope:</strong>
                        <span className="text-gray-400">Retail & Business Credit, Mutual Fund Distribution & LIC Protection</span>
                      </div>
                    </div>
                  </div>

                  {/* Founder Philosophy Quote */}
                  <div className="p-4 rounded-sm bg-navy-900/90 border-l-2 border-gold text-xs italic text-gray-300 leading-relaxed font-serif">
                    "A trusted advisor is measured not during calm markets, but by the clarity and stability provided when major financial choices must be made."
                  </div>

                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & Principles */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            <SectionHeading
              subtitle="The Firm & Leadership"
              title="Twenty-Five Years of Disciplined Financial Counsel"
              description="Founded on the enduring tenets of ethical stewardship, personalized financial alignment, and unwavering client dedication."
              align="left"
              className="mb-6"
            />

            <div className="space-y-5 text-brand-primary/90 text-base leading-relaxed">
              <p>
                At <strong className="text-brand-primary font-semibold">Shaurya Investments</strong>, we take a multigenerational view of personal and enterprise finance. Founded and spearheaded by <strong className="text-brand-primary font-semibold">Santosh D. Chavan</strong>, our practice has been serving individuals, business proprietors, and salaried professionals for a quarter of a century.
              </p>

              <p>
                Headquartered in <strong className="text-brand-primary font-semibold">Kurar Village, Malad East, Mumbai</strong>, our firm bridges the gap between intricate institutional lending norms and practical, goal-oriented wealth building. We believe that securing a home loan, expanding business capital, or setting up a systematic investment plan should never be driven by aggressive salesmanship, but by meticulous financial diagnosis.
              </p>

              <p className="text-sm text-brand-secondary border-l-2 border-gold/60 pl-4 italic">
                Every recommendation is crafted with transparency: clear documentation pathways, realistic risk horizons, and a genuine commitment to your long-term economic security.
              </p>
            </div>

            {/* 4 Pillars of Advisory Conduct */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div className="p-4 rounded-sm bg-cream border border-stone hover:border-gold/60 shadow-sm transition-colors">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Scale className="w-4 h-4 text-gold shrink-0" />
                  <h4 className="font-serif text-sm font-semibold text-brand-primary">Principled Transparency</h4>
                </div>
                <p className="text-xs text-brand-secondary leading-relaxed">
                  Honest fee explanations, realistic interest rates, and no obfuscated terms.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-cream border border-stone hover:border-gold/60 shadow-sm transition-colors">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <FileCheck className="w-4 h-4 text-gold shrink-0" />
                  <h4 className="font-serif text-sm font-semibold text-brand-primary">Document Rigor</h4>
                </div>
                <p className="text-xs text-brand-secondary leading-relaxed">
                  Decades of familiarity ensuring clean loan processing and compliant KYC filing.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-cream border border-stone hover:border-gold/60 shadow-sm transition-colors">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Clock className="w-4 h-4 text-gold shrink-0" />
                  <h4 className="font-serif text-sm font-semibold text-brand-primary">25-Year Consistency</h4>
                </div>
                <p className="text-xs text-brand-secondary leading-relaxed">
                  Continuous guidance through market booms, corrections, and regulatory evolutions.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-cream border border-stone hover:border-gold/60 shadow-sm transition-colors">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <MapPin className="w-4 h-4 text-gold shrink-0" />
                  <h4 className="font-serif text-sm font-semibold text-brand-primary">Local Accountability</h4>
                </div>
                <p className="text-xs text-brand-secondary leading-relaxed">
                  A rooted Malad East office where you can meet face-to-face with your advisor.
                </p>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
