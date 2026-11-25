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
  ArrowRight
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import ContactCTA from '../components/common/ContactCTA';

export default function LicInsurancePage() {
  const purposes = [
    {
      title: "Family Income Replacement",
      description: "Ensuring your dependents maintain their accustomed lifestyle, meet household expenses, and fulfill educational milestones even in your unexpected absence."
    },
    {
      title: "Debt & Liability Shielding",
      description: "Safeguarding your family from inheriting outstanding liabilities, such as residential home loans or commercial business borrowing."
    },
    {
      title: "Guaranteed Generational Legacy",
      description: "Structured life coverage providing clear, legally documented financial compensation to designated nominees without family disputes."
    },
    {
      title: "Long-Term Milestone Security",
      description: "Coordinating life coverage horizons around specific milestones, such as children's higher education entry or retirement transition."
    }
  ];

  const selectionFactors = [
    {
      title: "Adequate Sum Assured",
      description: "Determining insurance cover based on your annual earnings, family living expenses, ongoing liabilities, and future milestone costs rather than an arbitrary figure."
    },
    {
      title: "Term vs. Savings Orientation",
      description: "Pure protection term plans provide maximum risk cover at lower premiums, whereas traditional endowment plans blend life protection with conservative capital return."
    },
    {
      title: "Affordable Premium Structure",
      description: "Ensuring premium schedules remain sustainable throughout the policy term so policies do not lapse due to cash-flow strain."
    },
    {
      title: "Nomination & Claim Clarity",
      description: "Maintaining up-to-date nominee details and keeping policy documents organized so claims can be filed seamlessly by dependents."
    }
  ];

  const assistanceAreas = [
    {
      title: "Policy Enquiries & Status Tracking",
      description: "Guidance on checking ongoing policy status, premium due dates, surrender values, and loan eligibility on eligible policies."
    },
    {
      title: "Lapsed Policy Revival Guidance",
      description: "Assistance with understanding reinstatement terms, penalty interest, and medical declaration formalities for dormant LIC policies."
    },
    {
      title: "Nomination & Address Updates",
      description: "Step-by-step paperwork support for updating legal nominees, postal addresses, or bank account mandates (NEFT registration)."
    },
    {
      title: "Claim Documentation Compilation",
      description: "Handholding family members through documentation requirements—death certificates, original policy bonds, and claim forms—to ensure orderly processing."
    }
  ];

  return (
    <div className="w-full bg-champagne">
      
      {/* Editorial Page Header */}
      <PageHeader
        badge="Protection & Security"
        title="Life Insurance (LIC) Assistance & Policy Guidance"
        description="Life insurance is the bedrock of family financial security. At Shaurya Investments in Malad East, Mumbai, we provide consultative guidance on policy selection, premium planning, and ongoing policy servicing for Life Insurance Corporation of India (LIC) plans."
        breadcrumbs={[{ label: "Services", path: "/services" }, { label: "LIC Insurance" }]}
      />

      {/* Regulatory & Institutional Notice Banner */}
      <div className="bg-sand border-b border-stone py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start sm:items-center gap-3 text-xs text-brand-secondary">
          <AlertCircle className="w-4 h-4 text-gold shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-brand-primary font-medium">Policy Notice:</strong> Insurance is the subject matter of solicitation. Policy terms, bonuses, claim approvals, and underwriting rules are strictly determined by the Life Insurance Corporation of India (LIC). Shaurya Investments provides policyholder assistance and procedural guidance; we do not invent policy terms, promise unauthorized guaranteed bonuses, or operate as an insurance underwriting company.
          </p>
        </div>
      </div>

      {/* The Fundamental Purpose of Life Insurance */}
      <section className="py-20 md:py-28 bg-champagne border-b border-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs uppercase tracking-widest font-semibold text-gold block">
                Family Security
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-primary tracking-tight leading-snug">
                Why Life Insurance Precedes All Wealth Creation
              </h2>

              <div className="space-y-4 text-base text-brand-secondary leading-relaxed font-normal">
                <p>
                  Before building ambitious investment portfolios or acquiring property, a family's financial foundation must be safeguarded against life's uncertainties.
                </p>
                <p>
                  Life insurance is fundamentally an economic contract: in return for regular premium contributions, an insurer promises a substantial financial benefit to your dependents if untimely tragedy strikes.
                </p>
                <p>
                  For over two decades, Life Insurance Corporation of India (LIC) has stood as a symbol of sovereign trust and reliable claim settlement. At Shaurya Investments, we help you assess how much cover your family genuinely needs.
                </p>
              </div>

              <div className="p-4 bg-cream border border-stone rounded-sm text-xs text-brand-primary">
                <strong className="font-semibold block mb-1">Our Core Advisory Principle:</strong>
                <span className="text-brand-secondary leading-relaxed">
                  Insurance should never be purchased as an afterthought. It must match your actual income replacement value and outstanding liabilities.
                </span>
              </div>
            </div>

            {/* 4 Purpose Blocks */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {purposes.map((purpose) => (
                <div 
                  key={purpose.title}
                  className="bg-cream p-6 rounded-sm border border-stone shadow-soft flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-sm bg-sand border border-stone flex items-center justify-center text-gold mb-4">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-base font-semibold text-brand-primary mb-2">
                      {purpose.title}
                    </h4>
                    <p className="text-xs text-brand-secondary leading-relaxed font-normal">
                      {purpose.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Policy Selection Considerations */}
      <section className="py-20 md:py-28 bg-sand border-b border-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold block mb-2">
              Prudent Planning
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-primary tracking-tight">
              Factors to Consider Before Finalizing a Policy
            </h2>
            <p className="mt-4 text-base text-brand-secondary">
              Evaluating the correct balance between insurance coverage, tenure, and premium affordability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {selectionFactors.map((factor) => (
              <div 
                key={factor.title}
                className="bg-cream p-7 rounded-sm border border-stone shadow-soft"
              >
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <h3 className="font-serif text-lg font-semibold text-brand-primary">
                    {factor.title}
                  </h3>
                </div>
                <p className="text-xs text-brand-secondary leading-relaxed font-normal pl-8">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Policyholder Assistance & Enquiries */}
      <section className="py-20 md:py-28 bg-champagne border-b border-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold block mb-2">
              Servicing & Support
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-primary tracking-tight">
              Ongoing Policyholder Assistance
            </h2>
            <p className="mt-4 text-base text-brand-secondary">
              Already hold existing LIC policies? We assist you with procedural inquiries, revival formalities, and record maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {assistanceAreas.map((area) => (
              <div 
                key={area.title}
                className="bg-cream p-6 rounded-sm border border-stone shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-sand border border-stone flex items-center justify-center text-gold mb-4">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base font-semibold text-brand-primary mb-2">
                    {area.title}
                  </h4>
                  <p className="text-xs text-brand-secondary leading-relaxed font-normal">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Prominent Contact CTA */}
      <ContactCTA
        title="Consult Regarding Life Insurance & Policy Servicing"
        subtitle="Visit our office at Kurar Village, Shivaji Nagar, Malad East, Mumbai for unbiased advice regarding life cover requirements or existing policy queries."
        variant="navy"
      />

    </div>
  );
}
