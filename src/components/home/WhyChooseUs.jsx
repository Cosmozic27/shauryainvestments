import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Calendar, 
  FileCheck2, 
  MapPin, 
  Compass, 
  Scale, 
  Award,
  ArrowUpRight
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const reasons = [
  {
    icon: Calendar,
    number: "01",
    title: "A Quarter-Century of Market Navigation",
    description: "Guiding clients through bull runs, economic shifts, and changing lending policies under Santosh D. Chavan's direct oversight across 25 years of practice.",
  },
  {
    icon: Scale,
    number: "02",
    title: "Principled, Client-First Alignment",
    description: "Every solution is tailored to your real cash-flow requirements and risk capacity, free from aggressive quotas or one-size-fits-all products.",
  },
  {
    icon: Compass,
    number: "03",
    title: "Integrated Debt & Wealth Strategy",
    description: "A single, experienced point of contact to simultaneously manage retail or commercial loans, systematic SIPs, and family life insurance.",
  },
  {
    icon: FileCheck2,
    number: "04",
    title: "Meticulous Documentation Support",
    description: "Navigating bank underwriting criteria, eligibility checks, and AMC compliance with exhaustive attention to paperwork precision.",
  },
  {
    icon: MapPin,
    number: "05",
    title: "Rooted Mumbai Accountability",
    description: "Conveniently situated in Kurar Village, Shivaji Nagar, Malad East. An established physical practice providing reliable face-to-face counsel.",
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "Absolute Confidentiality & Discretion",
    description: "Handling personal balance sheets, business financial data, and wealth goals with stringent professional discretion and integrity.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 md:py-32 bg-navy text-white relative overflow-hidden scroll-mt-24">
      
      {/* Background architectural ambiance */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#C9A96E_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <SectionHeading
          subtitle="Our Distinctions"
          title="Anchored in Trust. Defined by Long-Term Reliability."
          description="In an era of fleeting financial apps and detached call centers, Shaurya Investments upholds the enduring value of personal advisory excellence."
          isLight={true}
          align="center"
        />

        {/* Editorial Layout: Featured Manifesto + 6 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Featured Editorial Anchor Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 bg-navy-900 rounded-sm border border-gold/30 p-8 flex flex-col justify-between shadow-elevated relative overflow-hidden"
          >
            {/* Background architectural vignette */}
            <div className="absolute top-0 right-0 w-full h-48 opacity-20 pointer-events-none overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80"
                alt="Institutional stone architectural pillars"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-900" />
            </div>

            <div className="relative space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-800 border border-gold/40 rounded-sm text-gold text-xs font-semibold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>25 Years Experience</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white leading-snug">
                Advisory Grounded in Reality, Not Hype.
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed font-light">
                Financial success is not achieved through speculative shortcuts. It is realized through disciplined debt management, continuous SIP accumulation, and safeguarding family security against unforeseen contingencies.
              </p>
            </div>

            <div className="relative pt-8 mt-8 border-t border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-navy-800 border border-gold/40 flex items-center justify-center text-gold font-serif font-bold text-sm">
                  SI
                </div>
                <div>
                  <span className="text-white font-medium text-sm block">Santosh D. Chavan</span>
                  <span className="text-gold-light text-xs">25 Years of Dedicated Advisory</span>
                </div>
              </div>

              <div className="text-[11px] text-gray-400 flex items-center gap-1.5 pt-2">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Malad East, Mumbai, Maharashtra</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: 6 Concrete Pillars Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="bg-navy-900/80 backdrop-blur-sm p-7 rounded-sm border border-white/10 hover:border-gold/50 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Icon & Roman/Digit Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-sm bg-navy-800 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-105 group-hover:border-gold transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-serif text-lg font-bold text-gold/40 group-hover:text-gold transition-colors">
                        {reason.number}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg font-semibold text-white group-hover:text-gold-light transition-colors mb-2.5">
                      {reason.title}
                    </h4>

                    <p className="text-sm text-gray-300 leading-relaxed font-light">
                      {reason.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-gold/80 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="tracking-wide">Core Commitment</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Commitment Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 sm:p-10 rounded-sm bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 border border-gold/40 text-center max-w-4xl mx-auto shadow-elevated"
        >
          <span className="text-xs uppercase tracking-widest font-semibold text-gold block mb-2">
            The Shaurya Promise
          </span>
          <p className="font-serif text-2xl sm:text-3xl font-normal italic text-white">
            "Your Financial Goals. Our Commitment."
          </p>
          <p className="text-xs sm:text-sm text-gray-300 mt-3 max-w-xl mx-auto font-light">
            Twenty-five years of building trust one family, one business, and one milestone at a time in Mumbai.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
