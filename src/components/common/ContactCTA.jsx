import React from 'react';
import { MapPin, Award, ShieldCheck, ArrowRight, Phone, Mail } from 'lucide-react';
import { companyData } from '../../data/companyData';
import Button from './Button';
import WhatsAppButton from './WhatsAppButton';

/**
 * Reusable Contact CTA banner across internal pages.
 */
export default function ContactCTA({
  title = "Begin Your Consultation With Santosh D. Chavan",
  subtitle = "Have questions regarding eligibility, documentation, or structuring an investment plan? We welcome you to reach out directly or visit our Malad East office.",
  variant = "navy", // "navy" or "sand"
  whatsAppType = "general",
  whatsAppLabel = "Chat on WhatsApp",
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

            <div className={`pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs ${
              isNavy ? 'text-gray-300' : 'text-brand-secondary'
            }`}>
              <a 
                href={`tel:${companyData.phoneRaw}`}
                className="flex items-center gap-1.5 hover:text-gold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                <span className="font-medium text-white">{companyData.phone}</span>
              </a>

              <a 
                href={`mailto:${companyData.email}`}
                className="flex items-center gap-1.5 hover:text-gold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>{companyData.email}</span>
              </a>

              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>{companyData.location.city}, Maharashtra</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3">
            <WhatsAppButton
              type={whatsAppType}
              variant="whatsapp"
              size="lg"
              label={whatsAppLabel}
              className="w-full sm:w-auto lg:w-full justify-center text-xs uppercase tracking-wider font-semibold shadow-soft"
            />

            <Button
              href="#footer"
              variant={isNavy ? "outlineGold" : "outline"}
              size="md"
              icon={ArrowRight}
              className="w-full sm:w-auto lg:w-full justify-center text-xs uppercase tracking-wider"
            >
              Office Location & Hours
            </Button>

            <span className={`text-[11px] ${isNavy ? 'text-gray-400' : 'text-brand-secondary'} text-left lg:text-right`}>
              Personal consultations in Malad East by prior appointment
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
