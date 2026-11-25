import React, { useState } from 'react';
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
  Sparkles
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { servicesData } from '../../data/servicesData';

const iconMap = {
  Home,
  UserCheck,
  Briefcase,
  TrendingUp,
  PiggyBank,
  ShieldCheck,
};

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
    <section id="services" className="py-24 md:py-32 bg-champagne relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          subtitle="Advisory Verticals"
          title="Engineered for Growth. Protected for Tomorrow."
          description="Explore our six core advisory solutions, structured to provide strategic liquidity, long-term capital compounding, and enduring family safety."
          align="center"
        />

        {/* Filter Tab Bar */}
        <div className="flex items-center justify-center gap-2 mb-14">
          <div className="inline-flex p-1 bg-cream/90 backdrop-blur-sm border border-stone rounded-sm shadow-soft">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 text-xs font-medium tracking-wide uppercase transition-all duration-200 rounded-sm ${
                  activeFilter === cat.id
                    ? 'bg-navy text-white shadow-sm'
                    : 'text-brand-secondary hover:text-brand-primary hover:bg-champagne'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || TrendingUp;
            const formattedIndex = String(index + 1).padStart(2, '0');

            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group relative bg-cream p-8 rounded-sm border border-stone hover:border-gold/60 transition-all duration-300 shadow-soft hover:shadow-elevated flex flex-col justify-between"
              >
                {/* Hairline Gold Accent on Top Border */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gold transition-colors duration-300" />

                <div>
                  {/* Top Bar: Number & Category Badge */}
                  <div className="flex items-center justify-between pb-6 border-b border-stone/60">
                    <span className="font-serif text-2xl font-bold text-gold/80 tracking-tight">
                      {formattedIndex}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-primary/80 bg-sand px-2.5 py-1 rounded-sm border border-stone/60">
                      {service.category}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="mt-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-sm bg-sand/70 border border-stone flex items-center justify-center text-brand-primary shrink-0 group-hover:text-gold group-hover:bg-navy transition-all duration-300 shadow-sm">
                      <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <div>
                      <h3 className="font-serif text-xl font-semibold text-brand-primary group-hover:text-navy transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm text-brand-secondary leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-6 pt-5 border-t border-stone/60 space-y-2.5">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-brand-primary/85">
                        <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer Interaction */}
                <div className="mt-8 pt-4 border-t border-stone/60 flex items-center justify-between text-xs font-medium text-brand-secondary group-hover:text-brand-primary transition-colors">
                  <span className="tracking-wide">Personalized Advisory</span>
                  <div className="flex items-center gap-1 text-gold font-semibold text-[11px] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tailored Consultation Reassurance Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-cream border border-stone rounded-sm p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft"
        >
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[11px] uppercase tracking-widest text-gold font-semibold">
              Personalized Consultation
            </span>
            <h4 className="font-serif text-lg font-semibold text-brand-primary">
              Require guidance on loan structuring or investment allocation?
            </h4>
            <p className="text-xs text-brand-secondary">
              Meet directly with Santosh D. Chavan at our Malad East, Mumbai office for confidential counsel.
            </p>
          </div>

          <a
            href="#footer"
            className="shrink-0 inline-flex items-center justify-center text-xs uppercase tracking-wider font-semibold text-brand-primary border border-stone px-6 py-3 rounded-sm hover:bg-navy hover:text-white hover:border-navy transition-all duration-200"
          >
            Office Address & Info
          </a>
        </motion.div>

      </div>
    </section>
  );
}
