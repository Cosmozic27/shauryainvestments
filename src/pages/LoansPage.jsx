import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  UserCheck, 
  Briefcase, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Calculator,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import ContactCTA from '../components/common/ContactCTA';
import EmiCalculator from '../components/calculators/EmiCalculator';
import WhatsAppButton from '../components/common/WhatsAppButton';
import ImageMaskReveal from '../components/common/ImageMaskReveal';
import ParallaxImage from '../components/common/ParallaxImage';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../components/common/SEO';
import ArchitecturalHeroBackground from '../components/common/ArchitecturalHeroBackground';

export default function LoansPage() {
  const [activeTab, setActiveTab] = useState('home-loans');

  const loanTypes = [
    {
      id: "home-loans",
      icon: Home,
      title: "Home Loans",
      subtitle: "Residential Property Financing",
      badge: "Secured Credit",
      description: "A secured credit facility designed to purchase a ready-to-move apartment, under-construction home, plot and construction, or to execute home improvement and balance transfers with optimized rates.",
      targetAudience: "Salaried professionals, self-employed individuals, and families seeking long-term residential ownership in Mumbai and surrounding areas.",
      features: [
        "Financing for new flats, resale properties, or self-construction",
        "Home loan balance transfer to lower interest burdens",
        "Top-up loan facilities on existing residential mortgages",
        "Expert assistance for PMAY & statutory documentation"
      ],
      eligibility: [
        "Age between 21 and 65 years (at loan maturity)",
        "Minimum 2 years of salaried employment or 3 years of business track record",
        "Healthy credit score (CIBIL 750+ preferred for best interest spreads)",
        "Clear, marketable legal title of the residential property"
      ],
      documentation: [
        "KYC Proofs: PAN Card, Aadhaar Card, Passport / Voter ID",
        "Income Proofs: Last 3–6 months salary slips, Form 16, or last 3 years ITR with computation",
        "Last 6 months operating bank account statements",
        "Property Dossier: Agreement of sale, builder NOC, approved plans, and title reports"
      ]
    },
    {
      id: "personal-loans",
      icon: UserCheck,
      title: "Personal Loans",
      subtitle: "Unsecured Personal Financing",
      badge: "Unsecured Liquidity",
      description: "An unsecured credit option that offers immediate liquidity for personal milestones such as family medical emergencies, higher education fees, weddings, or debt consolidation without collateral.",
      targetAudience: "Salaried professionals or self-employed individuals who require urgent funding with predictable monthly repayment terms.",
      features: [
        "No collateral or property mortgaging required",
        "Predictable fixed EMI repayment tenures from 1 to 5 years",
        "Disbursement coordination with competitive financial institutions",
        "Full transparency on processing fees and prepayment guidelines"
      ],
      eligibility: [
        "Minimum net monthly salary or verifiable professional income",
        "Stable tenure with current employer or established business",
        "Prudent debt-to-income ratio (existing EMIs within reasonable proportion)",
        "Satisfactory past repayment history across credit cards and loans"
      ],
      documentation: [
        "Identity and residential address verification (PAN, Aadhaar, utility bills)",
        "Latest 3 months salary slips or professional income proofs",
        "Latest 3–6 months primary bank account statements showing salary credits",
        "Details and statements of any existing loan obligations"
      ]
    },
    {
      id: "business-loans",
      icon: Briefcase,
      title: "Business Loans",
      subtitle: "Commercial & Working Capital",
      badge: "Commercial Facility",
      description: "Financing solutions tailored for MSMEs, traders, manufacturers, and service enterprises to fund operational cash flows, inventory cycles, machinery acquisition, or facility expansion.",
      targetAudience: "Proprietorships, partnerships, private limited firms, and self-employed professionals aiming to scale enterprise operations.",
      features: [
        "Working capital facilities and commercial term loans",
        "Financing for machinery, office infrastructure, and inventory cycles",
        "Custom borrowing structures aligned with business cash collections",
        "Dossier preparation tailored to banking credit committee standards"
      ],
      eligibility: [
        "Minimum 2–3 years of active commercial operations with positive turnover",
        "Audited financial statements showing profitability and healthy margins",
        "Clean banking conduct with steady current account transactions",
        "Favorable business entity and promoter credit profiles"
      ],
      documentation: [
        "Entity proofs: GST registration, Shop & Establishment Certificate, Udyam MSME certificate",
        "Last 2–3 years audited balance sheets, Profit & Loss accounts, and ITR filings",
        "Last 12 months primary current bank account statements",
        "Promoter KYC documents, partnership deed / MOA & AOA, and existing loan sanction letters"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Understanding Requirements",
      subtitle: "Assessment & Affordability",
      description: "We review your funding needs, income stability, existing obligations, and property details to determine an optimal borrowing amount and sensible EMI tenure."
    },
    {
      step: "02",
      title: "Documentation Guidance",
      subtitle: "Dossier Preparation",
      description: "We pre-screen your KYC, income records, and property or business papers, assembling an institution-ready submission package that avoids unnecessary delays or rejections."
    },
    {
      step: "03",
      title: "Application Coordination",
      subtitle: "Sanction & Disbursement",
      description: "We coordinate with banking officers through legal title vetting, property valuation, sanction letter clause examination, and final disbursement."
    }
  ];

  const currentLoan = loanTypes.find(l => l.id === activeTab) || loanTypes[0];

  return (
    <div className="w-full bg-[#0B1424] text-[#F5F0E7]">
      <SEO
        title="Home, Personal & Business Loan Assistance in Malad East"
        description="Comprehensive loan guidance and documentation support by Shaurya Investments in Mumbai. End-to-end assistance for home purchases, balance transfers, and business credit."
        canonicalPath="/loans"
      />
      
      {/* Editorial Page Header with Architectural Elevation Drafting Background */}
      <PageHeader
        variant="loans"
        badge="Credit Solutions"
        title="Loan Advisory With Uncompromising Paperwork Rigor"
        description="Navigating retail and commercial credit requires more than just interest rate comparisons. At Shaurya Investments, we provide end-to-end guidance across Home Loans, Personal Loans, and Business Loans—ensuring eligibility alignment, clean documentation, and transparent terms."
        breadcrumbs={[{ label: "Services", path: "/services" }, { label: "Loans" }]}
      />

      {/* SECTION 1: Full-Bleed Residential Architectural Photographic Hero */}
      <section 
        data-theme="dark"
        data-nav-contrast="dark"
        data-contrast-zone="dark"
        className="py-20 md:py-28 bg-[#0B1424] text-[#F5F0E7] border-b border-gold/20 relative overflow-hidden"
      >
        {/* Full-bleed high-resolution modern residential architectural background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
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
            
            {/* Left: Text & Key Value */}
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
                  Residential & Commercial Credit
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F0E7] tracking-tight leading-tight">
                Financing Your Milestones With <br />
                <span className="text-gold italic font-normal">Clarity & Confidence.</span>
              </h2>

              <p className="text-base text-[#B8C0CC] leading-relaxed font-normal">
                Whether you are securing the keys to your family's first residence in Mumbai, expanding enterprise operations, or managing immediate personal liquidity, Shaurya Investments simplifies the institutional lending process.
              </p>

              <p className="text-sm text-[#B8C0CC]/90 leading-relaxed">
                Led by principal consultant <strong className="text-[#F5F0E7] font-semibold">Santosh D. Chavan</strong> with 25 years of banking and loan facilitation experience, we examine the fine print—processing fees, benchmark spreads, foreclosure clauses, and title clearances—so you never encounter unwelcome surprises.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <WhatsAppButton 
                  type="loan" 
                  label="Check Your Loan Eligibility on WhatsApp" 
                  className="shadow-soft"
                />
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-[#14243B] grid grid-cols-3 gap-4">
                <div>
                  <span className="font-serif text-2xl font-bold text-[#F5F0E7] block">25+</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#B8C0CC]">Years of Advisory</span>
                </div>
                <div>
                  <span className="font-serif text-2xl font-bold text-[#F5F0E7] block">100%</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#B8C0CC]">Documentation Support</span>
                </div>
                <div>
                  <span className="font-serif text-2xl font-bold text-[#F5F0E7] block">Zero</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#B8C0CC]">Hidden Surcharges</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Architectural Photo with Frame & Parallax */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="relative group">
                <div className="absolute -inset-3 border border-gold/40 rounded-sm pointer-events-none group-hover:border-gold/60 transition-colors" />
                <div className="relative card-glass-dark p-3 rounded-sm border border-gold/30 shadow-2xl overflow-hidden gold-sweep-active">
                  <div className="relative h-96 sm:h-[440px] w-full rounded-sm overflow-hidden bg-[#060B14]">
                    <ParallaxImage offset={14} className="w-full h-full">
                      <ImageMaskReveal
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                        alt="Modern Residential Architecture Mumbai"
                        className="w-full h-full"
                        imageClassName="hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </ParallaxImage>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060B14]/90 via-[#0B1424]/30 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-[#F5F0E7] z-10">
                      <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block mb-1">
                        Residential & Commercial Credit
                      </span>
                      <p className="font-serif text-lg font-medium leading-snug">
                        Structured Funding for Real Estate & Enterprises
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

      {/* SECTION 2: 3 Loan Category Cards with Warm Stone Background (25% Warm Neutral Experience) */}
      <section 
        data-theme="light"
        data-nav-contrast="light"
        data-contrast-zone="light"
        className="py-20 md:py-28 bg-[#E6DED0] text-[#17243A] border-b border-[#D2C7B6] relative overflow-hidden"
      >
        {/* Architectural radial grid & ambient glow */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#17243A_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#F5F0E7]/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            subtitle="Financing Solutions"
            title="Three Pillars of Loan Guidance"
            description="Explore our specialized credit categories, tailored eligibility criteria, and required documentation."
            align="center"
            isLight={false}
          />

          {/* Interactive Tab Switcher */}
          <div className="flex justify-center mt-12 mb-10">
            <div className="inline-flex p-1.5 rounded-sm bg-[#F5F0E7] border border-[#D2C7B6] shadow-sm">
              {loanTypes.map((loan) => {
                const Icon = loan.icon;
                const isActive = activeTab === loan.id;
                return (
                  <button
                    key={loan.id}
                    onClick={() => setActiveTab(loan.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      isActive 
                        ? 'bg-[#0B1424] text-white shadow-soft' 
                        : 'text-[#17243A] hover:text-gold hover:bg-[#E6DED0]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-gold' : 'text-[#5A6678]'}`} />
                    <span>{loan.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Category Editorial Card with Glassmorphism */}
          <motion.div
            key={currentLoan.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="card-glass-light p-8 sm:p-12 rounded-sm gold-sweep-active"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Category Overview */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-sm bg-sand border border-stone flex items-center justify-center text-brand-primary">
                    <currentLoan.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold tracking-widest text-gold block">
                      {currentLoan.badge}
                    </span>
                    <h3 className="font-serif text-3xl font-semibold text-brand-primary">
                      {currentLoan.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-brand-secondary leading-relaxed font-normal">
                  {currentLoan.description}
                </p>

                <div className="p-4 bg-sand/60 rounded-sm border border-stone/80">
                  <span className="text-[11px] uppercase tracking-wider text-brand-secondary font-semibold block mb-1">
                    Ideal Profile & Scope
                  </span>
                  <p className="text-xs text-brand-primary font-medium leading-relaxed">
                    {currentLoan.targetAudience}
                  </p>
                </div>

                <div>
                  <h4 className="font-serif text-base font-semibold text-brand-primary mb-3">
                    Key Features & Options
                  </h4>
                  <div className="space-y-2.5">
                    {currentLoan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span className="text-xs text-brand-primary/90 font-medium leading-relaxed">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <WhatsAppButton 
                    type="loan" 
                    label={`Inquire About ${currentLoan.title}`} 
                    className="shadow-soft"
                  />
                </div>
              </div>

              {/* Eligibility & Documentation Checklist */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Eligibility Box */}
                <div className="p-6 bg-sand/40 rounded-sm border border-stone">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                    <h4 className="font-serif text-sm font-semibold text-brand-primary uppercase tracking-wider">
                      Eligibility Parameters
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {currentLoan.eligibility.map((el, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-brand-secondary">
                        <ChevronRight className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span>{el}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Documentation Box */}
                <div className="p-6 bg-champagne/60 rounded-sm border border-stone">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-4 h-4 text-gold shrink-0" />
                    <h4 className="font-serif text-sm font-semibold text-brand-primary uppercase tracking-wider">
                      Standard Documentation Checklist
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {currentLoan.documentation.map((doc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-brand-secondary">
                        <ChevronRight className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-brand-secondary italic mt-4 pt-3 border-t border-stone">
                    * Note: Exact document requirements may vary based on lending institution policies and individual profile type.
                  </p>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 3: 3-Step Loan Guidance Process (Slate Navy) with Designed Background */}
      <section 
        data-theme="dark"
        data-nav-contrast="dark"
        data-contrast-zone="dark"
        className="py-20 md:py-28 bg-[#14243B] text-[#F5F0E7] border-b border-gold/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#C6A66B_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionHeading
            subtitle="Advisory Pathway"
            title="Our Three-Step Loan Guidance Process"
            description="A methodical framework designed to evaluate capacity, assemble compliant paperwork, and secure timely disbursement."
            align="center"
            isLight={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-glass-dark p-8 rounded-sm border border-gold/25 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gold/20">
                    <span className="font-serif text-4xl font-bold text-gold/40">
                      {step.step}
                    </span>
                    <span className="text-[10px] uppercase font-semibold tracking-widest text-gold bg-[#0B1424] px-2.5 py-1 rounded-sm border border-gold/30">
                      Phase {idx + 1}
                    </span>
                  </div>

                  <span className="text-xs uppercase tracking-wider text-gold font-semibold block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-[#F5F0E7] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8C0CC] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gold/20 flex items-center gap-2 text-xs font-medium text-[#F5F0E7]">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Guided by Santosh D. Chavan</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Interactive EMI Calculator Feature with Atmospheric Architectural Background */}
      <section 
        data-theme="dark"
        data-nav-contrast="dark"
        data-contrast-zone="dark"
        className="py-20 md:py-28 bg-[#0B1424] text-[#F5F0E7] relative overflow-hidden border-b border-gold/20"
      >
        <ArchitecturalHeroBackground variant="loans" className="opacity-70" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14243B] border border-gold/40 text-gold text-xs uppercase font-semibold tracking-widest mb-3">
              <Calculator className="w-3.5 h-3.5 text-gold" />
              <span>Interactive Decision Tool</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5F0E7]">
              Calculate Your Estimated Monthly EMI
            </h2>
            <p className="mt-3 text-base text-[#B8C0CC]">
              Adjust loan amount, interest rate, and repayment tenure to evaluate monthly cash outflows and principal-versus-interest breakdown.
            </p>
          </div>

          {/* Prominent Dark Navy EMI Calculator Card */}
          <div className="max-w-5xl mx-auto">
            <EmiCalculator />
          </div>

          <div className="max-w-2xl mx-auto text-center mt-8 text-xs text-[#B8C0CC]">
            * Note: EMI calculations are indicative and based on standard reducing-balance formulas. Actual loan sanction, applicable interest rate, processing charges, and insurance requirements are determined by the lender.
          </div>

        </div>
      </section>

      {/* SECTION 5: Closing Deep Navy CTA */}
      <ContactCTA
        title="Need Clarity on Your Loan Eligibility?"
        subtitle="Schedule an in-person consultation with Santosh D. Chavan in Malad East, Mumbai to review your borrowing capacity, title papers, and rate options."
        variant="navy"
        whatsAppType="loan"
        whatsAppLabel="Enquire About Loans on WhatsApp"
      />

    </div>
  );
}
