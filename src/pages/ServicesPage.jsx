import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  UserCheck, 
  Briefcase, 
  TrendingUp, 
  PiggyBank, 
  ShieldCheck, 
  ArrowRight, 
  ArrowUpRight,
  CheckCircle2, 
  Sparkles,
  Users,
  Compass,
  FileCheck2,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import ContactCTA from '../components/common/ContactCTA';
import SEO from '../components/common/SEO';
import WhatsAppButton from '../components/common/WhatsAppButton';
import { servicesData } from '../data/servicesData';

// Map icon string to Lucide component
const iconMap = {
  Home,
  UserCheck,
  Briefcase,
  TrendingUp,
  PiggyBank,
  ShieldCheck
};

export default function ServicesPage() {
  const bentoServices = [
    {
      ...servicesData[0], // Home Loans
      number: "01",
      badge: "Credit Financing",
      featured: true,
      colSpan: "lg:col-span-8",
      summary: "Comprehensive guidance for acquiring residential property, structuring balance transfers, or securing construction capital with verified paperwork."
    },
    {
      ...servicesData[1], // Personal Loans
      number: "02",
      badge: "Unsecured Liquidity",
      featured: false,
      colSpan: "lg:col-span-4",
      summary: "Calibrated personal borrowing counsel for immediate family milestones or contingencies without collateral encumbrance."
    },
    {
      ...servicesData[2], // Business Loans
      number: "03",
      badge: "Enterprise Credit",
      featured: false,
      colSpan: "lg:col-span-4",
      summary: "Commercial loan structuring for working capital cycles, equipment acquisition, and business expansion."
    },
    {
      ...servicesData[3], // Mutual Funds
      number: "04",
      badge: "Wealth Compounding",
      featured: true,
      colSpan: "lg:col-span-8",
      summary: "Unhurried mutual fund distribution focused on long-term capital compounding across equity, debt, and hybrid assets aligned with your milestone deadlines."
    },
    {
      ...servicesData[4], // SIP Investments
      number: "05",
      badge: "Disciplined Investing",
      featured: false,
      colSpan: "lg:col-span-6",
      summary: "Systematic monthly investment plans harnessing rupee-cost averaging and multi-year compounding from ₹500/month."
    },
    {
      ...servicesData[5], // LIC Insurance
      number: "06",
      badge: "Family Protection",
      featured: false,
      colSpan: "lg:col-span-6",
      summary: "End-to-end guidance for Life Insurance Corporation of India (LIC) term policies, endowment planning, revival, and claim documentation."
    }
  ];

  return (
    <div className="w-full bg-[#0B1424] text-[#F5F0E7]">
      <SEO
        title="Financial Advisory Verticals & Services in Malad East"
        description="Explore Shaurya Investments' core financial verticals: Home Loans, Personal Loans, Business Loans, Mutual Fund Distribution, SIP Wealth Planning, and LIC Insurance Assistance."
        canonicalPath="/services"
      />
      
      {/* Editorial Page Header with Tailored Architectural Grid Background */}
      <PageHeader
        variant="services"
        badge="Advisory Capabilities"
        title="Comprehensive Financial Services Tailored to Your Goals"
        description="Shaurya Investments offers six dedicated financial advisory verticals. We combine thorough documentation support for credit financing with prudent strategies for long-term wealth compounding and risk management."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* SECTION 2: Premium Bento-style Grid with Slate Navy Background */}
      <section 
        data-theme="dark"
        data-nav-contrast="dark"
        data-contrast-zone="dark"
        className="py-20 md:py-28 bg-[#14243B] text-[#F5F0E7] border-b border-gold/20 relative overflow-hidden"
      >
        {/* Full-section designed architectural background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#C6A66B_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#0B1424]/80 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold block mb-2">
              Our Practice Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#F5F0E7] tracking-tight">
              Six Specialized Advisory Verticals
            </h2>
            <p className="mt-3 text-base text-[#B8C0CC]">
              Each discipline is managed with hands-on documentation precision, regulatory adherence, and client-first ethics.
            </p>
          </div>

          {/* Bento Grid: Full Card Clickable with Directional Indicator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {bentoServices.map((service, index) => {
              const Icon = iconMap[service.icon] || Home;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`group relative flex flex-col justify-between card-glass-dark border border-gold/25 hover:border-gold/50 p-8 sm:p-10 rounded-sm ${service.colSpan} ${
                    service.featured ? 'gold-sweep-active' : ''
                  }`}
                >
                  {/* Invisible Full-Card Accessible Link */}
                  <Link
                    to={service.path}
                    className="absolute inset-0 z-10"
                    aria-label={`Explore ${service.title}`}
                  />

                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between pb-6 mb-6 border-b border-gold/20">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-sm bg-[#0B1424] border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-[#0B1424] transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-semibold tracking-widest text-gold block">
                            {service.badge}
                          </span>
                          <span className="text-xs text-[#B8C0CC]">
                            {service.category}
                          </span>
                        </div>
                      </div>
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-gold/40 group-hover:text-gold transition-colors">
                        {service.number}
                      </span>
                    </div>

                    {/* Title & Body */}
                    <div className="flex items-baseline justify-between gap-2 mb-3">
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F5F0E7] group-hover:text-gold transition-colors">
                        {service.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-gold opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </div>

                    <p className="text-sm text-[#B8C0CC] leading-relaxed mb-6 font-normal">
                      {service.summary}
                    </p>

                    {/* Highlights with checkmarks */}
                    <div className="space-y-2.5 mb-6">
                      {service.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <span className="text-xs text-[#F5F0E7]/90 font-medium leading-relaxed">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="pt-4 border-t border-gold/20 flex items-center justify-between text-xs text-[#B8C0CC]">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-gold">
                      Explore Overview & Process →
                    </span>
                    <span className="text-[11px] hidden sm:inline text-[#B8C0CC]">
                      Santosh D. Chavan
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 3: Deep Midnight Navy Feature Section with Atmospheric Full-Section Design */}
      <section 
        data-theme="dark"
        data-nav-contrast="dark"
        data-contrast-zone="dark"
        className="py-20 md:py-28 bg-[#0B1424] text-[#F5F0E7] relative overflow-hidden border-b border-gold/20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,166,107,0.12)_0,transparent_60%)] pointer-events-none" />
        
        {/* Subtle architectural dot grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C6A66B_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

        {/* Official SI emblem watermark */}
        <div className="absolute inset-0 flex items-center justify-end pr-10 opacity-[0.035] pointer-events-none">
          <img 
            src="/assets/logo/logo-symbol.png" 
            alt="" 
            aria-hidden="true" 
            className="w-[450px] h-[450px] object-contain filter brightness-125"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14243B] border border-gold/40 text-gold text-xs uppercase font-semibold tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>The Independent Advantage</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5F0E7] leading-tight">
                Why Personalised Advisory Outperforms Automated Portals
              </h2>

              <p className="text-base text-[#B8C0CC] leading-relaxed font-light">
                Digital aggregators offer automated algorithms and standardized forms, but real financial decisions are rarely one-size-fits-all. When your loan eligibility hinges on tax nuances or your family’s investment timeline demands calibrated risk moderation, direct human guidance makes all the difference.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-[#F5F0E7]">Direct Human Accountability</h4>
                    <p className="text-xs text-[#B8C0CC] mt-0.5 leading-relaxed">
                      You consult directly with principal advisor Santosh D. Chavan, not an anonymous support desk or temporary sales agent.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-[#F5F0E7]">Pre-Emptive Paperwork Scrutiny</h4>
                    <p className="text-xs text-[#B8C0CC] mt-0.5 leading-relaxed">
                      We pre-screen title reports, bank statements, and KYC records to resolve discrepancies before institutional submission.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-[#F5F0E7]">Quarter-Century Local Rootedness</h4>
                    <p className="text-xs text-[#B8C0CC] mt-0.5 leading-relaxed">
                      Based in Malad East since 1999, our long-term reputation in Mumbai is built on recommendations passed through generations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <WhatsAppButton 
                  type="general" 
                  label="Discuss Your Requirement With Santosh D. Chavan" 
                  className="shadow-soft"
                />
              </div>
            </div>

            {/* Right: Architectural Dossier Presentation */}
            <div className="lg:col-span-6">
              <div className="card-glass-dark border border-gold/30 p-8 rounded-sm shadow-2xl relative overflow-hidden gold-sweep-active">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
                
                <span className="text-[10px] uppercase font-semibold tracking-widest text-gold block mb-2">
                  Our Advisory Standard
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#F5F0E7] mb-6">
                  Guaranteed Standards for Every Client
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-4 bg-[#0B1424]/90 rounded-sm border border-gold/20">
                    <Clock className="w-6 h-6 text-gold mb-2" />
                    <h5 className="font-serif text-sm font-semibold text-[#F5F0E7]">Unhurried Consultations</h5>
                    <p className="text-xs text-[#B8C0CC] mt-1 leading-relaxed">
                      We take whatever time is required to evaluate your financial situation without rushed decisions.
                    </p>
                  </div>

                  <div className="p-4 bg-[#0B1424]/90 rounded-sm border border-gold/20">
                    <FileCheck2 className="w-6 h-6 text-gold mb-2" />
                    <h5 className="font-serif text-sm font-semibold text-[#F5F0E7]">Transparent Terms</h5>
                    <p className="text-xs text-[#B8C0CC] mt-1 leading-relaxed">
                      Clear disclosure of interest charges, processing fees, loan covenants, and market-linked factors.
                    </p>
                  </div>

                  <div className="p-4 bg-[#0B1424]/90 rounded-sm border border-gold/20">
                    <Users className="w-6 h-6 text-gold mb-2" />
                    <h5 className="font-serif text-sm font-semibold text-[#F5F0E7]">Family-First Alignment</h5>
                    <p className="text-xs text-[#B8C0CC] mt-1 leading-relaxed">
                      Recommendations designed to protect family stability rather than satisfy sales quotas.
                    </p>
                  </div>

                  <div className="p-4 bg-[#0B1424]/90 rounded-sm border border-gold/20">
                    <Compass className="w-6 h-6 text-gold mb-2" />
                    <h5 className="font-serif text-sm font-semibold text-[#F5F0E7]">Post-Sanction Support</h5>
                    <p className="text-xs text-[#B8C0CC] mt-1 leading-relaxed">
                      Continuous handholding through annual portfolio reviews, interest resets, and claim filings.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gold/20 text-center text-xs text-[#B8C0CC]">
                  Shaurya Investments • Santosh D. Chavan • Malad East, Mumbai
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: Advisory Workflow Section (25% Warm Stone Section) */}
      <section 
        data-theme="light"
        data-nav-contrast="light"
        data-contrast-zone="light"
        className="py-20 md:py-28 bg-[#E6DED0] text-[#17243A] border-b border-[#D2C7B6] relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#17243A_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold block mb-2">
              Our Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#17243A] tracking-tight">
              How We Guide You From Inquiry to Execution
            </h2>
            <p className="mt-4 text-base text-[#404E63]">
              A structured 4-step workflow designed to eliminate friction, prevent delays, and ensure complete transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            <div className="card-glass-light p-7 rounded-sm">
              <span className="font-serif text-3xl font-bold text-gold block mb-3">01</span>
              <h4 className="font-serif text-lg font-semibold text-[#17243A] mb-2">Initial Diagnosis</h4>
              <p className="text-xs text-[#404E63] leading-relaxed">
                Reviewing your income statements, borrowing appetite, risk comfort, or investment horizon without rushing into products.
              </p>
            </div>

            <div className="card-glass-light p-7 rounded-sm">
              <span className="font-serif text-3xl font-bold text-gold block mb-3">02</span>
              <h4 className="font-serif text-lg font-semibold text-[#17243A] mb-2">Structure & Selection</h4>
              <p className="text-xs text-[#404E63] leading-relaxed">
                Evaluating loan tenures or mutual fund allocation models matching your specific milestones and repayment comfort.
              </p>
            </div>

            <div className="card-glass-light p-7 rounded-sm">
              <span className="font-serif text-3xl font-bold text-gold block mb-3">03</span>
              <h4 className="font-serif text-lg font-semibold text-[#17243A] mb-2">Document Assistance</h4>
              <p className="text-xs text-[#404E63] leading-relaxed">
                Meticulous KYC verification, bank dossier preparation, and application tracking to prevent rejection or delay.
              </p>
            </div>

            <div className="card-glass-light p-7 rounded-sm">
              <span className="font-serif text-3xl font-bold text-gold block mb-3">04</span>
              <h4 className="font-serif text-lg font-semibold text-[#17243A] mb-2">Ongoing Continuity</h4>
              <p className="text-xs text-[#404E63] leading-relaxed">
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
