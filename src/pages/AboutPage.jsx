import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  MapPin, 
  ShieldCheck, 
  Target, 
  Compass, 
  CheckCircle2, 
  HeartHandshake, 
  Users, 
  FileText, 
  Scale 
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import ContactCTA from '../components/common/ContactCTA';
import { companyData } from '../data/companyData';

export default function AboutPage() {
  const values = [
    {
      icon: Scale,
      title: "Principled Transparency",
      description: "We explain interest rate mechanisms, processing fees, and mutual fund structures in plain language, ensuring you never face hidden clauses or unwelcome surprises."
    },
    {
      icon: Target,
      title: "Objective Alignment",
      description: "Every borrowing strategy or investment portfolio is mapped around your specific cash flows, risk comfort, and milestone deadlines rather than sales quotas."
    },
    {
      icon: HeartHandshake,
      title: "Client-First Stewardship",
      description: "We consider financial advisory a long-term commitment. From your first loan sanction to generational wealth transfer, our guidance remains steady and dependable."
    },
    {
      icon: FileText,
      title: "Paperwork Rigor",
      description: "Over two decades of procedural familiarity allows us to prepare bank dossiers, KYC filings, and insurance submissions with thorough documentation precision."
    }
  ];

  const differentiators = [
    "25 years of continuous financial advisory experience in Mumbai",
    "Comprehensive guidance across loans, mutual funds, SIPs, and LIC insurance",
    "Direct, personal access to principal consultant Santosh D. Chavan",
    "Accessible physical office in Kurar Village, Shivaji Nagar, Malad East",
    "Unbiased product comparison tailored to client affordability",
    "Strict professional ethics and data confidentiality"
  ];

  return (
    <div className="w-full bg-champagne">
      
      {/* Editorial Page Header */}
      <PageHeader
        badge="Company Profile"
        title="Twenty-Five Years of Disciplined Financial Guidance"
        description="Shaurya Investments is an independent financial advisory practice based in Malad East, Mumbai. Under the stewardship of Santosh D. Chavan, we help individuals, families, and businesses make measured, well-structured financial decisions."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Founder & Firm Overview Section */}
      <section className="py-20 md:py-28 bg-sand border-b border-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Founder Photographic Placeholder Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                {/* Decorative border frame */}
                <div className="absolute -inset-3 border border-gold/40 rounded-sm pointer-events-none" />

                <div className="relative bg-cream p-4 rounded-sm border border-stone shadow-elevated overflow-hidden">
                  
                  {/* Genuine Founder Photograph Placeholder */}
                  <div className="relative h-80 sm:h-96 w-full rounded-sm bg-gradient-to-b from-sand via-stone to-navy-900 flex flex-col items-center justify-center text-center p-6 border border-stone/80 overflow-hidden group">
                    
                    {/* Background subtle watermark crest */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                      <img 
                        src="/assets/logo/logo-symbol.png" 
                        alt="" 
                        aria-hidden="true" 
                        className="w-64 h-64 object-contain filter brightness-50"
                      />
                    </div>

                    {/* Official Emblem Seal Badge */}
                    <div className="relative z-10 w-20 h-20 rounded-full bg-navy-900 border-2 border-gold flex items-center justify-center mb-4 shadow-elevated p-3 overflow-hidden">
                      <img 
                        src="/assets/logo/logo-symbol.png" 
                        alt="Shaurya Investments Official Emblem" 
                        className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                      />
                    </div>

                    <div className="relative z-10 space-y-1">
                      <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block">
                        Founder Photograph Placeholder
                      </span>
                      <h4 className="font-serif text-2xl font-semibold text-white">
                        {companyData.owner}
                      </h4>
                      <p className="text-xs text-gray-300 font-light">
                        Founder & Principal Consultant
                      </p>
                      <p className="text-[11px] text-gold-light font-medium pt-1">
                        25 Years of Seasoned Advisory
                      </p>
                    </div>

                    <div className="relative z-10 mt-6 pt-4 border-t border-white/20 text-[11px] text-gray-300 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span>Malad East, Mumbai</span>
                    </div>
                  </div>

                  {/* Profile Dossier Strip */}
                  <div className="p-4 grid grid-cols-2 gap-3 text-left bg-cream">
                    <div className="border-r border-stone pr-2">
                      <span className="text-[10px] uppercase tracking-wider text-brand-secondary block font-medium">Practice Tenure</span>
                      <span className="font-serif text-lg font-bold text-brand-primary">25 Years</span>
                      <span className="text-[11px] text-brand-secondary block">Advisory Experience</span>
                    </div>
                    <div className="pl-2">
                      <span className="text-[10px] uppercase tracking-wider text-brand-secondary block font-medium">Headquarters</span>
                      <span className="font-serif text-lg font-bold text-brand-primary">Malad East</span>
                      <span className="text-[11px] text-brand-secondary block">Mumbai, India</span>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* Right: Narrative Biography & Philosophy */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[1.5px] bg-gold" />
                <span className="text-xs uppercase font-semibold tracking-widest text-gold">
                  Leadership & History
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-primary tracking-tight leading-snug">
                Practical Wisdom Backed by a Quarter-Century of Service
              </h2>

              <div className="space-y-4 text-base text-brand-primary/85 leading-relaxed font-normal">
                <p>
                  <strong className="text-brand-primary font-semibold">Shaurya Investments</strong> was founded by <strong className="text-brand-primary font-semibold">Santosh D. Chavan</strong> to bring structured clarity, ethical counsel, and accessibility to personal and enterprise financial decisions.
                </p>

                <p>
                  Over the span of <strong className="text-brand-primary font-semibold">25 years</strong>, Mr. Chavan has advised families through major life transitions—purchasing first homes, funding higher education, launching commercial ventures, and building generational safety nets. Situated in <strong className="text-brand-primary font-semibold">Kurar Village, Shivaji Nagar, Malad East, Mumbai</strong>, the firm remains an enduring neighborhood fixture known for straightforward discussions and detailed paperwork handling.
                </p>

                <p className="text-sm text-brand-secondary border-l-2 border-gold pl-4 italic">
                  "Our philosophy is simple: we never recommend a financial obligation or investment plan that we would not comfortably recommend to our own family. Trust takes decades to build, and we honor that trust with every consultation."
                </p>
              </div>

              <div className="pt-2 flex items-start gap-3 p-4 bg-cream border border-stone rounded-sm">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div className="text-xs text-brand-secondary leading-relaxed">
                  <strong className="text-brand-primary block text-sm font-semibold">Our Registered Practice Location</strong>
                  <span>{companyData.location.full}</span>
                  <span className="block text-brand-primary/70 mt-0.5">Walk-in consultations welcome by prior appointment.</span>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Business Values */}
      <section className="py-20 md:py-28 bg-champagne border-b border-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-gold" />
              <span className="text-xs uppercase font-semibold tracking-widest text-gold">
                Guiding Principles
              </span>
              <span className="w-6 h-[1.5px] bg-gold" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-primary tracking-tight">
              The Tenets That Govern Our Practice
            </h2>
            <p className="mt-4 text-base text-brand-secondary">
              In an industry frequently pressured by rapid transactions, we maintain deliberate, ethical consistency across every client engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div 
                  key={val.title}
                  className="bg-cream p-7 rounded-sm border border-stone hover:border-gold/60 transition-all duration-300 shadow-soft flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-sm bg-sand border border-stone flex items-center justify-center text-brand-primary mb-5">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-brand-primary mb-2.5">
                      {val.title}
                    </h3>
                    <p className="text-xs text-brand-secondary leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Why Choose Us Differentiation List */}
      <section className="py-20 md:py-28 bg-sand border-b border-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-gold" />
                <span className="text-xs uppercase font-semibold tracking-widest text-gold">
                  Client Advantage
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-primary tracking-tight leading-snug">
                Why Families & Enterprises Partner With Us
              </h2>
              <p className="text-base text-brand-secondary leading-relaxed font-light">
                Whether you need assistance securing an optimal home loan, launching a disciplined SIP, or managing business liquidity, we provide accountable advisory without corporate detachment.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentiators.map((diff, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-sm bg-cream border border-stone shadow-sm flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-brand-primary/90 leading-relaxed">
                    {diff}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Prominent Contact CTA */}
      <ContactCTA
        title="Schedule a Personal Consultation With Santosh D. Chavan"
        subtitle="Visit our office at Kurar Village, Shivaji Nagar, Malad East, Mumbai to review your borrowing eligibility or establish a disciplined investment roadmap."
        variant="navy"
        whatsAppType="general"
        whatsAppLabel="Chat With Us on WhatsApp"
      />

    </div>
  );
}
