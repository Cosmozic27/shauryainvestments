import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  PieChart, 
  ShieldAlert, 
  Layers, 
  CheckCircle2, 
  Scale, 
  Clock, 
  BarChart3, 
  HelpCircle,
  FileCheck2,
  Users,
  Coins,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import ContactCTA from '../components/common/ContactCTA';
import WhatsAppButton from '../components/common/WhatsAppButton';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../components/common/SEO';

export default function MutualFundsPage() {
  const categories = [
    {
      title: "Equity Funds",
      type: "Capital Growth Focus",
      horizon: "Long Term (5+ Years)",
      risk: "High Volatility",
      riskColor: "text-amber-700 bg-amber-50 border-amber-200",
      description: "Pools capital to invest in equity shares of publicly listed companies across market capitalisations. Designed for aggressive wealth accumulation over multi-year horizons.",
      points: [
        "Large Cap: Established companies with proven market leadership and resilience",
        "Mid & Small Cap: High-potential emerging enterprises with superior growth runway",
        "Flexi Cap: Dynamic fund manager allocation across large, mid, and small-cap stocks",
        "Sectoral / Thematic: Targeted exposure to specific domestic economic sectors"
      ]
    },
    {
      title: "Debt Funds",
      type: "Capital Preservation & Income",
      horizon: "Short to Medium Term",
      risk: "Lower to Moderate Volatility",
      riskColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      description: "Allocates capital into fixed-income securities such as Government Securities, Treasury Bills, and Corporate Bonds. Aims to generate predictable income with lower capital fluctuation than equities.",
      points: [
        "Liquid & Overnight Funds: Short-term cash parking with swift liquidity and stability",
        "Short & Medium Duration: Optimized yield profiles over 1–3 year horizons",
        "Corporate Bond Funds: Exposure to highly rated (AAA/AA+) enterprise paper",
        "Target Maturity Funds: Fixed maturity dates aligning with planned milestones"
      ]
    },
    {
      title: "Hybrid Funds",
      type: "Balanced Asset Allocation",
      horizon: "Medium to Long Term (3–5 Years)",
      risk: "Moderate Volatility",
      riskColor: "text-blue-700 bg-blue-50 border-blue-200",
      description: "Strategically blends both equities and debt securities in defined ratios. Designed to participate in market appreciation while fixed-income cushions protect against sharp corrections.",
      points: [
        "Aggressive Hybrid: 65%–80% in equity with the balance in high-quality debt instruments",
        "Balanced Advantage (BAF): Dynamically shifts asset mix based on market valuations",
        "Multi-Asset Allocation: Combines equity, fixed-income, and gold within one unified vehicle",
        "Conservative Hybrid: Debt-predominant allocation with modest equity upside"
      ]
    }
  ];

  const assistanceProcess = [
    {
      step: "01",
      title: "Understanding Objectives",
      subtitle: "Horizon & Risk Profile",
      description: "We discuss your financial milestones, investment horizon, cash-flow liquidity needs, and psychological tolerance for volatility before recommending scheme types."
    },
    {
      step: "02",
      title: "Scheme Exploration",
      subtitle: "Asset Diversification",
      description: "We help you select diversified scheme categories across proven AMCs, balancing equity, debt, or hybrid allocations to prevent excessive concentration in single sectors."
    },
    {
      step: "03",
      title: "Documentation & KYC Support",
      subtitle: "Seamless Onboarding",
      description: "We handle your CAMS / KFintech KYC registration, bank mandate setup, nomination verification, and provide periodic portfolio distribution reviews."
    }
  ];

  return (
    <div className="w-full bg-[#0B1424] text-[#F5F0E7]">
      <SEO
        title="Mutual Fund Distribution & Wealth Management in Mumbai"
        description="Navigate equity, debt, and hybrid mutual funds with unhurried advisory by Shaurya Investments in Malad East, Mumbai. Disciplined goal-aligned wealth distribution."
        canonicalPath="/mutual-funds"
      />
      
      {/* Editorial Page Header with Geometric Growth Vector Background */}
      <PageHeader
        variant="mutual-funds"
        badge="Wealth Building"
        title="Mutual Fund Distribution With Clear, Unhurried Advice"
        description="Mutual funds allow investors to access diversified portfolios managed by professional fund houses. As mutual fund distributors in Malad East, Shaurya Investments helps you navigate scheme categories with clarity, discipline, and objective alignment."
        breadcrumbs={[{ label: "Services", path: "/services" }, { label: "Mutual Funds" }]}
      />

      {/* Prominent Statutory Risk Disclosure Banner */}
      <div className="bg-[#14243B] border-b border-gold/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start sm:items-center gap-3 text-xs text-[#B8C0CC]">
          <ShieldAlert className="w-5 h-5 text-gold shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-[#F5F0E7] font-medium">Statutory Risk Disclosure:</strong> Mutual fund investments are subject to market risks. Read all scheme-related documents carefully. Past performance is not an indicator of future returns. Shaurya Investments acts strictly as a mutual fund distributor and does not promise guaranteed returns or claim status as a SEBI-registered investment adviser (RIA).
          </p>
        </div>
      </div>

      {/* SECTION 1: Full-Bleed Financial / Capital Market Themed Hero */}
      <section 
        data-theme="dark"
        data-nav-contrast="dark"
        data-contrast-zone="dark"
        className="py-20 md:py-28 bg-[#0B1424] text-[#F5F0E7] border-b border-gold/20 relative overflow-hidden"
      >
        {/* Full-bleed abstract capital market and financial investment background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=80"
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
            
            {/* Left: Narrative */}
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
                  Disciplined Wealth Compounding
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F0E7] tracking-tight leading-tight">
                Demystifying Capital Markets For <br />
                <span className="text-gold italic font-normal">Every Stage of Life.</span>
              </h2>

              <p className="text-base text-[#B8C0CC] leading-relaxed font-normal">
                With hundreds of asset management companies and thousands of mutual fund schemes available in India, choosing the right combination can feel overwhelming. Many retail investors fall into the trap of chasing last year's top performer or reacting emotionally to short-term market pullbacks.
              </p>

              <p className="text-sm text-[#B8C0CC]/90 leading-relaxed">
                At Shaurya Investments, <strong className="text-[#F5F0E7] font-semibold">Santosh D. Chavan</strong> provides measured, unhurried guidance. We focus on matching fund categories to your real-life milestones—whether building a retirement nest egg, funding a child’s overseas degree, or generating stable cash yields.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <WhatsAppButton 
                  type="mutual-fund" 
                  label="Discuss Mutual Funds on WhatsApp" 
                  className="shadow-soft"
                />
              </div>
            </motion.div>

            {/* Right: Illustrative Asset Allocation Matrix Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="relative group">
                <div className="absolute -inset-3 border border-gold/40 rounded-sm pointer-events-none group-hover:border-gold/60 transition-colors" />

                <div className="card-glass-dark p-8 rounded-sm text-left space-y-6 border border-gold/30 shadow-2xl gold-sweep-active">
                  <div className="flex items-center justify-between pb-4 border-b border-gold/20">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block">
                        Illustrative Example
                      </span>
                      <h4 className="font-serif text-xl font-semibold text-[#F5F0E7]">
                        Asset Allocation Matrix
                      </h4>
                    </div>
                    <PieChart className="w-7 h-7 text-gold" />
                  </div>

                  <div className="space-y-4 text-xs">
                    <div>
                      <div className="flex justify-between font-medium text-[#F5F0E7] mb-1">
                        <span>Equity (Wealth Accumulation)</span>
                        <span className="text-gold font-semibold">60%</span>
                      </div>
                      <div className="w-full bg-[#0B1424] h-2 rounded-full overflow-hidden border border-gold/20">
                        <div className="bg-gold h-full w-[60%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between font-medium text-[#F5F0E7] mb-1">
                        <span>Debt & Fixed Income (Capital Cushion)</span>
                        <span className="text-gold-light font-semibold">30%</span>
                      </div>
                      <div className="w-full bg-[#0B1424] h-2 rounded-full overflow-hidden border border-gold/20">
                        <div className="bg-gold-light h-full w-[30%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between font-medium text-[#F5F0E7] mb-1">
                        <span>Gold & Commodities (Inflation Hedge)</span>
                        <span className="text-[#B8C0CC] font-semibold">10%</span>
                      </div>
                      <div className="w-full bg-[#0B1424] h-2 rounded-full overflow-hidden border border-gold/20">
                        <div className="bg-[#B8C0CC] h-full w-[10%]" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-[#0B1424]/90 rounded-sm border border-gold/20 text-[11px] text-[#B8C0CC] leading-relaxed">
                    <strong className="text-gold block font-medium mb-0.5">Educational Illustration:</strong>
                    * Note: Percentages shown above are illustrative educational examples, not actual investment recommendations or company portfolio allocations. Specific allocations are calibrated individually according to your risk appetite.
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: Fundamental Concept Visual Diagram with Warm Stone Background (25% Warm Neutral Experience) */}
      <section 
        data-theme="light"
        data-nav-contrast="light"
        data-contrast-zone="light"
        className="py-20 md:py-28 bg-[#E6DED0] text-[#17243A] border-b border-[#D2C7B6] relative overflow-hidden"
      >
        {/* Subtle geometric dot grid & ambient lighting */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#17243A_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#F5F0E7]/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeading
            subtitle="Core Mechanics"
            title="How Mutual Funds Actually Work"
            description="A clear visual breakdown of how collective capital creates institutional advantages for everyday families."
            align="center"
            isLight={false}
          />

          {/* 3-Step Visual Diagram */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              
              {/* Node 1: Multiple Investors */}
              <div className="card-glass-light p-8 rounded-sm text-center flex flex-col items-center justify-between relative group gold-sweep-active">
                <div className="w-16 h-16 rounded-full bg-[#F5F0E7] border border-[#D2C7B6] flex items-center justify-center text-[#17243A] mb-4 shadow-sm group-hover:bg-gold/10 transition-colors">
                  <Users className="w-8 h-8 text-gold" />
                </div>
                <span className="text-[10px] uppercase font-semibold tracking-widest text-gold block mb-1">
                  Step 01
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#17243A] mb-2">
                  Multiple Investors
                </h3>
                <p className="text-xs text-[#404E63] leading-relaxed">
                  Thousands of individuals and families contribute periodic savings or lump sums into a collective investment vehicle.
                </p>
                <div className="mt-4 pt-3 border-t border-[#D2C7B6] w-full text-[11px] text-[#17243A] font-medium">
                  Small periodic capital
                </div>
              </div>

              {/* Node 2: Pooled Investments */}
              <div className="card-glass-light p-8 rounded-sm text-center flex flex-col items-center justify-between relative group gold-sweep-active">
                <div className="w-16 h-16 rounded-full bg-[#F5F0E7] border border-[#D2C7B6] flex items-center justify-center text-[#17243A] mb-4 shadow-sm group-hover:bg-gold/10 transition-colors">
                  <Coins className="w-8 h-8 text-gold" />
                </div>
                <span className="text-[10px] uppercase font-semibold tracking-widest text-gold block mb-1">
                  Step 02
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#17243A] mb-2">
                  Pooled Investments
                </h3>
                <p className="text-xs text-[#404E63] leading-relaxed">
                  The collected corpus forms a substantial pool governed by a registered Asset Management Company (AMC) and SEBI regulations.
                </p>
                <div className="mt-4 pt-3 border-t border-[#D2C7B6] w-full text-[11px] text-[#17243A] font-medium">
                  Institutional scale & safety
                </div>
              </div>

              {/* Node 3: Professionally Managed Portfolio */}
              <div className="card-glass-light p-8 rounded-sm text-center flex flex-col items-center justify-between relative group gold-sweep-active">
                <div className="w-16 h-16 rounded-full bg-[#F5F0E7] border border-[#D2C7B6] flex items-center justify-center text-[#17243A] mb-4 shadow-sm group-hover:bg-gold/10 transition-colors">
                  <Briefcase className="w-8 h-8 text-gold" />
                </div>
                <span className="text-[10px] uppercase font-semibold tracking-widest text-gold block mb-1">
                  Step 03
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#17243A] mb-2">
                  Managed Portfolio
                </h3>
                <p className="text-xs text-[#404E63] leading-relaxed">
                  Experienced fund managers deploy the capital across hundreds of vetted securities, equities, or government bonds.
                </p>
                <div className="mt-4 pt-3 border-t border-[#D2C7B6] w-full text-[11px] text-[#17243A] font-medium">
                  Diversified market returns
                </div>
              </div>

            </div>

            {/* Connecting Banner */}
            <div className="mt-8 p-4 bg-[#F5F0E7]/80 rounded-sm border border-[#D2C7B6] text-center text-xs text-[#404E63]">
              <span className="font-semibold text-[#17243A]">The Result:</span> Individual investors enjoy institutional-grade diversification, full liquidity, and dedicated research without needing large capital reserves.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: 3 Fund Categories — Slate Navy Feature Section */}
      <section 
        data-theme="dark"
        data-nav-contrast="dark"
        data-contrast-zone="dark"
        className="py-20 md:py-28 bg-[#14243B] text-[#F5F0E7] relative overflow-hidden border-b border-gold/20"
      >
        {/* Subtle radial depth gradient and architectural gold grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,166,107,0.12)_0,transparent_60%)] pointer-events-none" />
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
            subtitle="Scheme Verticals"
            title="Three Core Mutual Fund Categories"
            description="Explore the structural differences, risk metrics, and ideal horizons across primary asset classes."
            isLight={true}
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-glass-dark border border-gold/25 p-8 rounded-sm flex flex-col justify-between text-[#F5F0E7]"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-gold/20">
                    <span className="text-[10px] uppercase font-semibold tracking-widest text-gold">
                      {cat.type}
                    </span>
                    <span className={`text-[10px] uppercase font-medium px-2 py-0.5 rounded-full border ${
                      cat.risk === 'High Volatility' ? 'border-red-400/40 text-red-300 bg-red-950/30' :
                      cat.risk === 'Moderate Volatility' ? 'border-amber-400/40 text-amber-300 bg-amber-950/30' :
                      'border-emerald-400/40 text-emerald-300 bg-emerald-950/30'
                    }`}>
                      {cat.risk}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#F5F0E7] mb-2">
                    {cat.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-[#B8C0CC] mb-4">
                    <Clock className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>Horizon: {cat.horizon}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#B8C0CC] leading-relaxed mb-6 font-light">
                    {cat.description}
                  </p>

                  <div className="space-y-2 border-t border-gold/20 pt-4">
                    {cat.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-[#F5F0E7]/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gold/20">
                  <WhatsAppButton 
                    type="mutual-fund" 
                    label={`Inquire on ${cat.title}`} 
                    className="w-full text-center justify-center text-xs"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: 3-Column Assistance Process with Midnight Navy Background */}
      <section 
        data-theme="dark"
        data-nav-contrast="dark"
        data-contrast-zone="dark"
        className="py-20 md:py-28 bg-[#0B1424] text-[#F5F0E7] border-b border-gold/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#C6A66B_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeading
            subtitle="Advisory Framework"
            title="Our Three-Step Distribution Process"
            description="How Santosh D. Chavan guides your mutual fund journey from objective definition to ongoing reviews."
            align="center"
            isLight={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
            {assistanceProcess.map((proc, idx) => (
              <motion.div
                key={proc.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-glass-dark border border-gold/25 p-8 rounded-sm flex flex-col justify-between text-[#F5F0E7]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gold/20">
                    <span className="font-serif text-4xl font-bold text-gold/40">
                      {proc.step}
                    </span>
                    <span className="text-[10px] uppercase font-semibold tracking-widest text-gold bg-[#14243B] px-2.5 py-1 rounded-sm border border-gold/30">
                      Phase {idx + 1}
                    </span>
                  </div>

                  <span className="text-xs uppercase tracking-wider text-gold font-semibold block mb-1">
                    {proc.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-[#F5F0E7] mb-3">
                    {proc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8C0CC] leading-relaxed font-normal">
                    {proc.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gold/20 flex items-center gap-2 text-xs font-medium text-[#F5F0E7]">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Personalized Documentation</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Closing Contact CTA (bg-navy) */}
      <ContactCTA
        title="Start Building a Disciplined Mutual Fund Portfolio"
        subtitle="Schedule a consultation with Santosh D. Chavan at our Malad East office to evaluate your risk comfort and align your investments with your life milestones."
        variant="navy"
        whatsAppType="mutual-fund"
        whatsAppLabel="Enquire on WhatsApp"
      />

    </div>
  );
}
