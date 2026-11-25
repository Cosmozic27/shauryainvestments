import React from 'react';
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
  HelpCircle
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import ContactCTA from '../components/common/ContactCTA';
import { servicesData } from '../data/servicesData';

const iconMap = {
  Home,
  UserCheck,
  Briefcase,
  TrendingUp,
  PiggyBank,
  ShieldCheck,
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-champagne">
      
      {/* Editorial Page Header */}
      <PageHeader
        badge="Advisory Capabilities"
        title="Comprehensive Financial Services Tailored to Your Goals"
        description="Shaurya Investments offers six dedicated financial advisory verticals. We combine thorough documentation support for credit financing with prudent strategies for long-term wealth compounding and risk management."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Services Grid Section */}
      <section className="py-20 md:py-28 bg-champagne border-b border-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
              const IconComponent = iconMap[service.icon] || TrendingUp;
              const formattedIndex = String(index + 1).padStart(2, '0');

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative bg-cream p-8 rounded-sm border border-stone hover:border-gold/60 transition-all duration-300 shadow-soft hover:shadow-elevated flex flex-col justify-between"
                >
                  {/* Hairline Gold Top Accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gold transition-colors duration-300" />

                  <div>
                    {/* Number & Category Badge */}
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

                      <h3 className="font-serif text-xl font-semibold text-brand-primary group-hover:text-navy transition-colors mt-2">
                        {service.title}
                      </h3>
                    </div>

                    {/* Simple Customer Explanation */}
                    <p className="mt-4 text-sm text-brand-secondary leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Main Benefits / Assistance Highlights */}
                    <div className="mt-6 pt-5 border-t border-stone/60 space-y-2.5">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-gold block mb-2">
                        Key Assistance:
                      </span>
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-brand-primary/85">
                          <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Link to Dedicated Page */}
                  <div className="mt-8 pt-5 border-t border-stone/60">
                    <Link
                      to={service.path}
                      className="inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-brand-primary hover:text-gold group-hover:translate-x-0.5 transition-all focus:outline-none"
                    >
                      <span>View Dedicated Guide</span>
                      <ArrowRight className="w-4 h-4 text-gold transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Advisory Workflow Section */}
      <section className="py-20 md:py-28 bg-sand border-b border-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold block mb-2">
              Our Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-primary tracking-tight">
              How We Guide You From Inquiry to Execution
            </h2>
            <p className="mt-4 text-base text-brand-secondary">
              A structured 4-step workflow designed to eliminate friction and ensure full transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            <div className="bg-cream p-6 rounded-sm border border-stone shadow-soft">
              <span className="font-serif text-3xl font-bold text-gold/60 block mb-3">01</span>
              <h4 className="font-serif text-base font-semibold text-brand-primary mb-2">Initial Diagnosis</h4>
              <p className="text-xs text-brand-secondary leading-relaxed">
                Reviewing your income statements, borrowing appetite, or investment horizon without rushing into products.
              </p>
            </div>

            <div className="bg-cream p-6 rounded-sm border border-stone shadow-soft">
              <span className="font-serif text-3xl font-bold text-gold/60 block mb-3">02</span>
              <h4 className="font-serif text-base font-semibold text-brand-primary mb-2">Structure & Selection</h4>
              <p className="text-xs text-brand-secondary leading-relaxed">
                Evaluating loan tenures or mutual fund allocation models matching your specific milestones and repayment comfort.
              </p>
            </div>

            <div className="bg-cream p-6 rounded-sm border border-stone shadow-soft">
              <span className="font-serif text-3xl font-bold text-gold/60 block mb-3">03</span>
              <h4 className="font-serif text-base font-semibold text-brand-primary mb-2">Document Assistance</h4>
              <p className="text-xs text-brand-secondary leading-relaxed">
                Meticulous KYC verification, bank dossier preparation, and application tracking to prevent rejection or delay.
              </p>
            </div>

            <div className="bg-cream p-6 rounded-sm border border-stone shadow-soft">
              <span className="font-serif text-3xl font-bold text-gold/60 block mb-3">04</span>
              <h4 className="font-serif text-base font-semibold text-brand-primary mb-2">Ongoing Continuity</h4>
              <p className="text-xs text-brand-secondary leading-relaxed">
                Post-disbursement loan tracking, annual SIP reviews, and insurance policy servicing whenever you need support.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Prominent Contact CTA */}
      <ContactCTA
        title="Discuss Your Financial Requirements"
        subtitle="Schedule an in-person appointment at our Malad East office with Santosh D. Chavan for thorough, confidential guidance across loans, investments, and insurance."
        variant="navy"
        whatsAppType="general"
        whatsAppLabel="Enquire on WhatsApp"
      />

    </div>
  );
}
