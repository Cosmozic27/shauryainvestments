import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Heart, 
  HelpCircle, 
  CheckCircle2, 
  Clock, 
  FileCheck, 
  AlertCircle, 
  Users, 
  ShieldAlert, 
  ArrowRight, 
  Sparkles, 
  FileText, 
  RefreshCw, 
  Umbrella 
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import ContactCTA from '../components/common/ContactCTA';
import WhatsAppButton from '../components/common/WhatsAppButton';
import SectionHeading from '../components/common/SectionHeading';
import ImageMaskReveal from '../components/common/ImageMaskReveal';
import ParallaxImage from '../components/common/ParallaxImage';
import SEO from '../components/common/SEO';

export default function LicInsurancePage() {
  const assistanceCards = [
    {
      icon: Umbrella,
      title: "Term Insurance Plans",
      subtitle: "Pure Protection",
      description: "High-value life cover at affordable premiums. Ensures your family receives a substantial tax-free corpus to replace lost earnings and settle outstanding loans if life's unexpected events occur.",
      features: [
        "Maximum life coverage at minimal annual cost",
        "Comprehensive family income replacement",
        "Covers liabilities like home and personal loans",
        "Fixed premium rate locked throughout tenure"
      ]
    },
    {
      icon: Heart,
      title: "Endowment & Savings Plans",
      subtitle: "Guaranteed Milestone Savings",
      description: "Traditional Life Insurance Corporation (LIC) plans blending life risk protection with disciplined capital accumulation for children's higher education, weddings, or retirement corpus.",
      features: [
        "Guaranteed maturity sum assured plus bonuses",
        "Habitual annual or semi-annual savings",
        "Sovereign guarantee backed by LIC of India",
        "Loan facilities available on active policy bonds"
      ]
    },
    {
      icon: RefreshCw,
      title: "Lapsed Policy Revival",
      subtitle: "Reactivating Dormant Cover",
      description: "Guidance on reinstating dormant or lapsed LIC policies. We calculate accrued interest penalties, explain medical requirements, and guide documentation so your protection is restored.",
      features: [
        "Revival quotation and penalty calculation",
        "Special revival campaign assistance",
        "Medical declaration dossier handling",
        "Reactivation of accrued life benefits"
      ]
    },
    {
      icon: FileCheck,
      title: "Claim & Servicing Assistance",
      subtitle: "Compassionate Handholding",
      description: "Support for policyholders and bereaved families through death claim submissions, maturity claims, nomination changes, address updates, and NEFT mandate registrations.",
      features: [
        "Step-by-step death & maturity claim filing",
        "Direct documentation liaison with LIC branch",
        "Nominee and legal beneficiary updates",
        "Bank account NEFT mandate registration"
      ]
    }
  ];

  const protectionReasons = [
    {
      title: "Family Income Replacement",
      description: "Ensures your dependents maintain their accustomed lifestyle, meet household expenses, and fulfill educational milestones without compromise even in your unexpected absence."
    },
    {
      title: "Debt & Mortgage Shielding",
      description: "Prevents residential mortgages or enterprise liabilities from falling onto your grieving family. Term coverage absorbs outstanding loans completely."
    },
    {
      title: "Generational Peace of Mind",
      description: "A legally binding, sovereign-backed safety net that removes the constant anxiety of what might happen to your loved ones if circumstances take a sudden turn."
    },
    {
      title: "Milestone Security",
      description: "Coordinates guaranteed maturity payouts around key milestone transitions—such as college tuition or child marriage funding."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Understanding Requirements",
      subtitle: "Needs & Affordability",
      description: "We calculate your ideal sum assured based on family living costs, children's future expenses, and ongoing liabilities to determine comfortable premium limits."
    },
    {
      step: "02",
      title: "Explaining Policy Details",
      subtitle: "Clear Comparison",
      description: "We walk you through LIC policy options—distinguishing pure term cover from endowment savings—explaining tenure, surrender terms, and bonus accrual mechanisms."
    },
    {
      step: "03",
      title: "Documentation & Servicing",
      subtitle: "Enduring Support",
      description: "From initial proposal submission and medical coordination to annual premium reminders, nomination changes, and claim handholding, we remain your lifelong point of contact."
    }
  ];

  return (
    <div className="w-full bg-[#0B1424] text-[#F5F0E7]">
      <SEO
        title="LIC Life Insurance Guidance & Policy Servicing in Mumbai"
        description="Dedicated assistance for Life Insurance Corporation of India (LIC) plans in Malad East, Mumbai. Term assurance, endowment policies, revival, and claim support by Santosh D. Chavan."
        canonicalPath="/lic-insurance"
      />
      
      {/* Editorial Page Header with Protective Architectural Vault Arches Background */}
      <PageHeader
        variant="lic"
        badge="Protection & Security"
        title="Life Insurance (LIC) Assistance & Policy Guidance"
        description="Life insurance is the bedrock of family financial security. At Shaurya Investments in Malad East, Mumbai, we provide consultative guidance on policy selection, premium planning, and ongoing policy servicing for Life Insurance Corporation of India (LIC) plans."
        breadcrumbs={[{ label: "Services", path: "/services" }, { label: "LIC Insurance" }]}
      />

      {/* Regulatory & Institutional Notice Banner */}
      <div className="bg-[#14243B] border-b border-gold/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start sm:items-center gap-3 text-xs text-[#B8C0CC]">
          <AlertCircle className="w-5 h-5 text-gold shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-[#F5F0E7] font-medium">Policy Notice:</strong> Insurance is the subject matter of solicitation. Policy benefits, exclusions, eligibility, and claim settlements are governed strictly by the relevant policy terms and applicable procedures of the Life Insurance Corporation of India (LIC). Shaurya Investments provides policyholder guidance and procedural assistance; we do not operate as an insurance underwriting company.
          </p>
        </div>
      </div>

      {/* SECTION 1: Full-Bleed Warm Family Protection Photographic Hero */}
      <section 
        data-theme="dark"
        data-nav-contrast="dark"
        data-contrast-zone="dark"
        className="py-20 md:py-28 bg-[#0B1424] text-[#F5F0E7] border-b border-gold/20 relative overflow-hidden"
      >
        {/* Full-bleed high-resolution family protection and security background image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1920&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.1]"
          />
          {/* Responsive Midnight Navy Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1424] via-[#0B1424]/95 to-[#14243B]/85" />
          {/* Subtle architectural dot grid */}
          <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#C6A66B_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Reassuring Narrative */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-gold" />
                <span className="text-xs uppercase font-semibold tracking-widest text-gold">
                  Family Protection First
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F0E7] tracking-tight leading-tight">
                Protecting What Matters Most, <br />
                <span className="text-gold italic font-normal">Before All Else.</span>
              </h2>

              <p className="text-base text-[#B8C0CC] leading-relaxed font-normal">
                Before building an investment portfolio or purchasing a home, securing your family’s fundamental safety net is imperative. In an unpredictable world, adequate life coverage guarantees that your dependents will never face financial hardship if you are no longer there to provide for them.
              </p>

              <p className="text-sm text-[#B8C0CC]/90 leading-relaxed">
                With <strong className="text-[#F5F0E7] font-semibold">25 years of insurance facilitation experience</strong>, principal advisor <strong className="text-[#F5F0E7] font-semibold">Santosh D. Chavan</strong> guides policyholders through Life Insurance Corporation of India (LIC) plans with honesty and procedural diligence—ensuring proper sum assured calculation, transparent terms, and seamless claim support for your family.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <WhatsAppButton 
                  type="insurance" 
                  label="Consult on LIC Insurance on WhatsApp" 
                  className="shadow-soft"
                />
              </div>
            </motion.div>

            {/* Right: Protective Visual Card with Frame & Parallax */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="relative group">
                <div className="absolute -inset-3 border border-gold/40 rounded-sm pointer-events-none group-hover:border-gold/60 transition-colors" />

                <div className="card-glass-dark p-3 rounded-sm border border-gold/30 shadow-2xl overflow-hidden gold-sweep-active">
                  <div className="relative h-96 sm:h-[440px] w-full rounded-sm overflow-hidden bg-[#060B14]">
                    <ParallaxImage offset={14} className="w-full h-full">
                      <ImageMaskReveal
                        src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=1000&q=80"
                        alt="Family Protection and Life Insurance Consultation"
                        className="w-full h-full"
                        imageClassName="hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </ParallaxImage>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060B14]/90 via-[#0B1424]/30 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-[#F5F0E7] z-10">
                      <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block mb-1">
                        Sovereign-Backed Security
                      </span>
                      <p className="font-serif text-lg font-medium leading-snug">
                        Life Insurance Corporation of India (LIC)
                      </p>
                      <p className="text-xs text-[#B8C0CC] mt-0.5">
                        Santosh D. Chavan • Malad East, Mumbai
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: Core Insurance Assistance Cards with Slate Navy Background */}
      <section 
        data-theme="dark"
        data-nav-contrast="dark"
        data-contrast-zone="dark"
        className="py-20 md:py-28 bg-[#14243B] text-[#F5F0E7] border-b border-gold/20 relative overflow-hidden"
      >
        {/* Subtle geometric dot grid & ambient lighting */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#C6A66B_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            subtitle="Advisory Areas"
            title="Our Core LIC Insurance Services"
            description="Whether evaluating new protection, reviving a dormant policy, or compiling claim paperwork, we provide dedicated handholding."
            align="center"
            isLight={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 text-left">
            {assistanceCards.map((card, idx) => {
              const Icon = card.icon;
              const isFirst = idx === 0;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`card-glass-dark border border-gold/25 p-8 sm:p-10 rounded-sm flex flex-col justify-between text-[#F5F0E7] ${
                    isFirst ? 'gold-sweep-active' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3.5 pb-4 mb-4 border-b border-gold/20">
                      <div className="w-12 h-12 rounded-sm bg-[#0B1424] border border-gold/30 flex items-center justify-center text-gold">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-semibold tracking-widest text-gold block">
                          {card.subtitle}
                        </span>
                        <h3 className="font-serif text-2xl font-semibold text-[#F5F0E7]">
                          {card.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#B8C0CC] leading-relaxed mb-6 font-normal">
                      {card.description}
                    </p>

                    <div className="space-y-2.5 border-t border-gold/20 pt-4">
                      {card.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[#F5F0E7]/90 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-gold/20">
                    <WhatsAppButton 
                      type="insurance" 
                      label={`Inquire About ${card.title}`} 
                      className="w-full text-center justify-center text-xs"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: Why Protection Matters — Midnight Navy Feature Section */}
      <section 
        data-theme="dark"
        data-nav-contrast="dark"
        data-contrast-zone="dark"
        className="py-20 md:py-28 bg-[#0B1424] text-[#F5F0E7] relative overflow-hidden border-b border-gold/20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(198,166,107,0.12)_0,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C6A66B_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

        {/* Faint SI Emblem Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none">
          <img 
            src="/assets/logo/logo-symbol.png" 
            alt="" 
            aria-hidden="true" 
            className="w-[500px] h-[500px] object-contain filter brightness-125"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            subtitle="The Foundational Truth"
            title="Why Life Insurance Precedes Wealth Creation"
            description="The indispensable reasons why every family needs an unshakeable protection shield before committing capital to risk assets."
            isLight={true}
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 text-left">
            {protectionReasons.map((reason, idx) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="card-glass-dark border border-gold/25 p-7 rounded-sm flex flex-col justify-between text-[#F5F0E7] gold-sweep-active"
              >
                <div>
                  <span className="font-serif text-3xl font-bold text-gold block mb-3">
                    0{idx + 1}
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-[#F5F0E7] mb-2">
                    {reason.title}
                  </h4>
                  <p className="text-xs text-[#B8C0CC] leading-relaxed font-light">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gold/20 flex items-center gap-1.5 text-[11px] font-medium text-gold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Essential Protection</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: 3-Step Assistance Process with Warm Stone Background (25% Warm Neutral Experience) */}
      <section 
        data-theme="light"
        data-nav-contrast="light"
        data-contrast-zone="light"
        className="py-20 md:py-28 bg-[#E6DED0] text-[#17243A] border-b border-[#D2C7B6] relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#17243A_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeading
            subtitle="Consultative Process"
            title="Our Three-Step Policy Assistance"
            description="How we ensure your family obtains the right coverage and keeps policies in good standing for decades."
            align="center"
            isLight={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-glass-light p-8 rounded-sm flex flex-col justify-between text-[#17243A]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#D2C7B6]">
                    <span className="font-serif text-4xl font-bold text-gold">
                      {step.step}
                    </span>
                    <span className="text-[10px] uppercase font-semibold tracking-widest text-gold bg-[#F5F0E7] px-2.5 py-1 rounded-sm border border-[#D2C7B6]">
                      Phase {idx + 1}
                    </span>
                  </div>

                  <span className="text-xs uppercase tracking-wider text-gold font-semibold block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-[#17243A] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#404E63] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#D2C7B6] flex items-center gap-2 text-xs font-medium text-[#17243A]">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Guided by Santosh D. Chavan</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Closing Contact CTA (bg-navy) */}
      <ContactCTA
        title="Review Your Family's Life Insurance Protection"
        subtitle="Visit our office in Kurar Village, Malad East, Mumbai for a detailed assessment of your sum assured, policy status review, or claim assistance with Santosh D. Chavan."
        variant="navy"
        whatsAppType="insurance"
        whatsAppLabel="Enquire About LIC Insurance on WhatsApp"
      />

    </div>
  );
}
