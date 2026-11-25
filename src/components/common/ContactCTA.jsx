import React from 'react';
import { MapPin, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { companyData } from '../../data/companyData';
import Button from './Button';

/**
 * Reusable Contact CTA banner across internal pages.
 */
export default function ContactCTA({
  title = "Begin Your Consultation With Santosh D. Chavan",
  subtitle = "Have questions regarding eligibility, documentation, or structuring an investment plan? We welcome you to visit our Malad East office.",
  variant = "navy", // "navy" or "sand"
}) {
  const isNavy = variant === "navy";

  return (
    <section className={`py-16 md:py-20 border-y ${
      isNavy ? 'bg-navy text-white border-navy-800' : 'bg-sand text-brand-primary border-stone'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
              <Award className="w-4 h-4" />
              <span>25 Years of Seasoned Advisory in Mumbai</span>
            </div>

            <h3 className={`font-serif text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug ${
              isNavy ? 'text-white' : 'text-brand-primary'
            }`}>
              {title}
            </h3>

            <p className={`text-sm sm:text-base leading-relaxed max-w-2xl font-light ${
              isNavy ? 'text-gray-300' : 'text-brand-secondary'
            }`}>
              {subtitle}
            </p>

            <div className={`pt-2 flex flex-wrap items-center gap-4 text-xs ${
              isNavy ? 'text-gray-300' : 'text-brand-secondary'
            }`}>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>{companyData.location.full}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                <span>Consultations by prior appointment</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3">
            <Button
              href="#footer"
              variant={isNavy ? "gold" : "primary"}
              size="lg"
              icon={ArrowRight}
              className="w-full sm:w-auto lg:w-full justify-center"
            >
              Office Address & Hours
            </Button>
            <span className={`text-[11px] ${isNavy ? 'text-gray-400' : 'text-brand-secondary'} text-left lg:text-right`}>
              Personal, confidential guidance in Malad East
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
