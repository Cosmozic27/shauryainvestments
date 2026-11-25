import React from 'react';
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
  Calculator
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import ContactCTA from '../components/common/ContactCTA';
import EmiCalculator from '../components/calculators/EmiCalculator';
import WhatsAppButton from '../components/common/WhatsAppButton';

export default function LoansPage() {
  const loanTypes = [
    {
      id: "home-loans",
      icon: Home,
      title: "Home Loans",
      subtitle: "Residential Property Financing",
      description: "A secured credit facility designed to purchase a ready-to-move apartment, under-construction home, plot and construction, or to execute home improvement and balance transfers.",
      targetAudience: "Salaried professionals, self-employed individuals, and families seeking long-term residential ownership in Mumbai and surrounding areas.",
      eligibility: [
        "Age between 21 and 65 years (at loan maturity)",
        "Consistent employment history (minimum 2 years) or business continuity (minimum 3 years)",
        "Healthy credit repayment track record (CIBIL score)",
        "Clear, marketable legal title of the property"
      ],
      documentation: [
        "KYC Proofs (PAN, Aadhaar, Passport / Voter ID)",
        "Income Proofs: Last 3–6 months salary slips, Form 16, or last 2–3 years ITR with computation",
        "Last 6 months operating bank account statements",
        "Property documents: Agreement of sale, builder NOC, approved floor plan, and title search reports"
      ]
    },
    {
      id: "personal-loans",
      icon: UserCheck,
      title: "Personal Loans",
      subtitle: "Unsecured Personal Financing",
      description: "An unsecured credit option that offers liquidity for immediate personal milestones such as family medical emergencies, higher education fees, weddings, or debt consolidation.",
      targetAudience: "Salaried or self-employed individuals who require immediate liquidity without pledging collateral or residential property.",
      eligibility: [
        "Minimum regular net monthly income threshold",
        "Stable tenure with current employer or business establishment",
        "Prudent debt-to-income ratio (existing EMIs within reasonable proportion of net earnings)",
        "Positive credit repayment history"
      ],
      documentation: [
        "Identity and residential address verification (PAN, Aadhaar, utility bills)",
        "Latest 3 months salary slips or professional income proofs",
        "Latest 3–6 months primary bank account statements showing salary/income credits",
        "Proof of ongoing loan obligations if applicable"
      ]
    },
    {
      id: "business-loans",
      icon: Briefcase,
      title: "Business Loans",
      subtitle: "Commercial & Working Capital",
      description: "Financing solutions tailored for MSMEs, traders, manufacturers, and service enterprises to fund operational cash flows, raw material procurement, equipment, or facility expansion.",
      targetAudience: "Proprietorships, partnerships, private limited firms, and self-employed professionals aiming to expand enterprise operations or bridge working capital cycles.",
      eligibility: [
        "Minimum 2–3 years of active business operations",
        "Audited financial statements showing stable turnover and profitability",
        "Satisfactory banking conduct with healthy cash flows",
        "Positive business and promoter credit profile"
      ],
      documentation: [
        "Entity proof (GST registration, Shop & Establishment Certificate, Udyam / MSME Certificate)",
        "Last 2–3 years audited balance sheet, Profit & Loss accounts, and ITR with computation",
        "Last 6–12 months primary current bank account statements",
        "Promoter KYC documents and existing facility sanction letters"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Preliminary Consultation",
      description: "We assess your funding requirement, existing obligations, and repayment budget to determine sensible borrowing parameters."
    },
    {
      step: "02",
      title: "Dossier & Document Compilation",
      description: "We assemble your KYC, financial proofs, and property/business records into a clean, compliant submission package."
    },
    {
      step: "03",
      title: "Application & Verification Support",
      description: "We assist through field verification, property legal/technical valuation checks, and credit queries raised by institutions."
    },
    {
      step: "04",
      title: "Sanction Review & Acceptance",
      description: "Upon approval, we help you carefully examine the sanction letter, interest rate terms, processing charges, and covenants."
    },
    {
      step: "05",
      title: "Disbursement & Post-Sanction Guidance",
      description: "Guidance through loan agreement execution, NACH/e-mandate setup, and final disbursement coordination."
    }
  ];

  return (
    <div className="w-full bg-champagne">
      
      {/* Editorial Page Header */}
      <PageHeader
        badge="Lending Advisory"
        title="Comprehensive Loan Guidance With Procedural Rigor"
        description="Navigating loan approval requires precise documentation, clear eligibility evaluation, and transparent understanding of terms. At Shaurya Investments, we provide end-to-end guidance for home, personal, and business financing."
        breadcrumbs={[{ label: "Services", path: "/services" }, { label: "Loans" }]}
      />

      {/* Regulatory & Institutional Notice Banner */}
      <div className="bg-sand border-b border-stone py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start sm:items-center gap-3 text-xs text-brand-secondary">
          <AlertCircle className="w-4 h-4 text-gold shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-brand-primary font-medium">Important Advisory Notice:</strong> Loan sanctions, eligibility limits, interest rates, processing fees, and disbursement timelines are at the sole discretion of the lending institutions and governed by their underwriting policies. Shaurya Investments provides advisory and documentation support; we do not guarantee approvals or promise specific interest rates.
          </p>
        </div>
      </div>

      {/* The 3 Loan Types Detailed Breakdown */}
      <section className="py-20 md:py-28 bg-champagne border-b border-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {loanTypes.map((loan, index) => {
            const Icon = loan.icon;

            return (
              <div 
                key={loan.id}
                id={loan.id}
                className="bg-cream rounded-sm border border-stone shadow-soft overflow-hidden p-8 sm:p-10 scroll-mt-24"
              >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone/60">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-sm bg-sand border border-stone flex items-center justify-center text-brand-primary shrink-0 shadow-sm">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-gold block">
                        {loan.subtitle}
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-primary">
                        {loan.title}
                      </h2>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-sand/60 border border-stone text-xs text-brand-secondary self-start md:self-auto">
                    <ShieldCheck className="w-4 h-4 text-gold" />
                    <span>Documentation Support</span>
                  </div>
                </div>

                {/* Narrative & Target Audience */}
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7 space-y-4 text-left">
                    <h3 className="font-serif text-base font-semibold text-brand-primary">
                      Facility Overview
                    </h3>
                    <p className="text-sm text-brand-secondary leading-relaxed font-normal">
                      {loan.description}
                    </p>
                    <div className="pt-2 p-4 bg-sand/50 rounded-sm border border-stone/80 text-xs text-brand-primary">
                      <strong className="block font-semibold mb-1 text-brand-primary">Who This Is Designed For:</strong>
                      <span className="text-brand-secondary leading-relaxed">{loan.targetAudience}</span>
                    </div>
                  </div>

                  {/* General Eligibility Checklist */}
                  <div className="lg:col-span-5 space-y-3 text-left">
                    <h3 className="font-serif text-base font-semibold text-brand-primary">
                      General Eligibility Considerations
                    </h3>
                    <div className="space-y-2">
                      {loan.eligibility.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-brand-secondary">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Documentation Support */}
                <div className="mt-8 pt-6 border-t border-stone/60 text-left">
                  <h3 className="font-serif text-base font-semibold text-brand-primary mb-3">
                    Standard Documentation Assistance
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {loan.documentation.map((doc, idx) => (
                      <div key={idx} className="p-3 bg-sand/30 rounded-sm border border-stone/60 text-xs text-brand-secondary">
                        <FileText className="w-3.5 h-3.5 text-gold mb-1.5" />
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Service Specific Actions */}
                  <div className="mt-6 pt-4 border-t border-stone/40 flex flex-wrap items-center justify-between gap-4">
                    <a 
                      href="#emi-calculator" 
                      className="text-xs font-semibold text-gold hover:text-gold-dark inline-flex items-center gap-1.5 focus:outline-none"
                    >
                      <Calculator className="w-4 h-4" />
                      <span>Estimate {loan.title} EMI Below</span>
                    </a>
                    
                    <WhatsAppButton
                      type={loan.id === 'home-loans' ? 'homeLoans' : loan.id === 'personal-loans' ? 'personalLoans' : 'businessLoans'}
                      variant="whatsapp"
                      size="sm"
                      label={`Enquire for ${loan.title}`}
                    />
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* Interactive EMI Calculator Section */}
      <section id="emi-calculator" className="py-20 md:py-28 bg-sand border-b border-stone scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold block mb-2">
              Borrowing Assessment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-primary tracking-tight">
              Plan Your Monthly Outflow Before Applying
            </h2>
            <p className="mt-4 text-base text-brand-secondary">
              Simulate your monthly installment, principal allocation, and interest liability with our reducing-balance EMI calculator.
            </p>
          </div>

          <EmiCalculator />
        </div>
      </section>

      {/* The 5-Step Loan Advisory Journey */}
      <section className="py-20 md:py-28 bg-sand border-b border-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold block mb-2">
              Application Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-primary tracking-tight">
              How the Loan Process Generally Works
            </h2>
            <p className="mt-4 text-base text-brand-secondary">
              A transparent, structured methodology to eliminate confusion and streamline documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-left">
            {processSteps.map((step) => (
              <div 
                key={step.step}
                className="bg-cream p-5 rounded-sm border border-stone shadow-soft flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-2xl font-bold text-gold/70 block mb-2">{step.step}</span>
                  <h4 className="font-serif text-sm font-semibold text-brand-primary mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-brand-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Prominent Contact CTA */}
      <ContactCTA
        title="Check Your Borrowing Eligibility & Paperwork"
        subtitle="Bring your income and financial details to our Kurar Village, Malad East office for an objective preliminary assessment with Santosh D. Chavan."
        variant="navy"
      />

    </div>
  );
}
