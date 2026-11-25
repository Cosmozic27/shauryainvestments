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
  FileCheck2
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import ContactCTA from '../components/common/ContactCTA';

export default function MutualFundsPage() {
  const categories = [
    {
      title: "Equity Funds",
      type: "Capital Growth Focus",
      horizon: "Long Term (5+ Years)",
      risk: "Higher Volatility",
      description: "Pools capital to invest in shares of listed enterprises across Large Cap, Mid Cap, Small Cap, or Flexi Cap segments. Suitable for wealth accumulation over multi-year horizons.",
      points: [
        "Large Cap: Established companies with proven market stability",
        "Mid & Small Cap: Emerging enterprises with higher expansion potential",
        "Flexi Cap: Dynamic capital allocation across market capitalizations"
      ]
    },
    {
      title: "Debt Funds",
      type: "Capital Preservation & Income",
      horizon: "Short to Medium Term",
      risk: "Lower to Moderate Volatility",
      description: "Invests in fixed-income securities such as Government Bonds, Treasury Bills, and Corporate Debentures. Aims to generate regular income with lower fluctuation than equities.",
      points: [
        "Liquid & Overnight Funds: Short-term cash parking with high liquidity",
        "Short Duration Funds: Stable returns over 1–3 year horizons",
        "Corporate Bond Funds: Exposure to highly rated commercial debt"
      ]
    },
    {
      title: "Hybrid Funds",
      type: "Balanced Asset Allocation",
      horizon: "Medium to Long Term (3–5 Years)",
      risk: "Moderate Volatility",
      description: "Blends both equities and debt securities in structured proportions. Designed to capture equity upside while debt cushioning softens market pullbacks.",
      points: [
        "Aggressive Hybrid: 65%–80% equity allocation with remaining in debt",
        "Balanced Advantage / Dynamic: Automatically shifts between equity and debt",
        "Multi-Asset Allocation: Incorporates equity, debt, and gold within one scheme"
      ]
    },
    {
      title: "Solution-Oriented Funds",
      type: "Goal-Specific Milestones",
      horizon: "Long Term (Lock-in Applies)",
      risk: "Aligned With Objective",
      description: "Schemes structured with defined mandates and mandatory lock-in periods, specifically designed to address retirement planning or children's higher education.",
      points: [
        "Retirement Funds: 5-year lock-in designed to build retirement capital",
        "Children's Benefit Funds: Structured to fund future education fees",
        "Disciplined lock-in periods to prevent emotional premature withdrawals"
      ]
    }
  ];

  const distributionSupport = [
    {
      title: "KYC & Investor Onboarding",
      description: "Assistance with initial CAMS / KFintech KYC registration, bank mandate verification, and documentation compliance."
    },
    {
      title: "Risk Profile & Horizon Mapping",
      description: "Helping you evaluate your time frame, liquidity needs, and psychological tolerance for market fluctuations before selecting categories."
    },
    {
      title: "Scheme Category Diversification",
      description: "Guidance on spreading capital across uncorrelated asset classes rather than concentrating in single funds or market themes."
    },
    {
      title: "Periodic Portfolio Distribution Reviews",
      description: "Periodic reviews to ensure your scheme distribution stays aligned with your stated life goals as time elapses."
    }
  ];

  return (
    <div className="w-full bg-champagne">
      
      {/* Editorial Page Header */}
      <PageHeader
        badge="Wealth Building"
        title="Mutual Fund Distribution With Clear, Unhurried Advice"
        description="Mutual funds allow investors to access diversified portfolios managed by professional fund houses. As mutual fund distributors in Malad East, Shaurya Investments helps you navigate scheme categories with clarity, discipline, and objective alignment."
        breadcrumbs={[{ label: "Services", path: "/services" }, { label: "Mutual Funds" }]}
      />

      {/* Mandatory Statutory Risk Notice */}
      <div className="bg-sand border-b border-stone py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start sm:items-center gap-3 text-xs text-brand-secondary">
          <ShieldAlert className="w-4 h-4 text-gold shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-brand-primary font-medium">Statutory Risk Disclosure:</strong> Mutual Fund investments are subject to market risks; read all scheme-related documents carefully before investing. Past performance is not an indicator of future returns. Shaurya Investments acts strictly as a mutual fund distributor and does not provide guaranteed return assurances or claim SEBI-registered investment adviser (RIA) status.
          </p>
        </div>
      </div>

      {/* How Mutual Funds Work Explained Simply */}
      <section className="py-20 md:py-28 bg-champagne border-b border-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5 text-left">
              <span className="text-xs uppercase tracking-widest font-semibold text-gold block">
                Fundamental Concept
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-primary tracking-tight leading-snug">
                What is a Mutual Fund and How Does it Function?
              </h2>
              
              <div className="space-y-4 text-sm text-brand-secondary leading-relaxed font-normal">
                <p>
                  A <strong className="text-brand-primary font-semibold">Mutual Fund</strong> is a collective investment vehicle that pools money from many individuals to purchase a diversified portfolio of stocks, bonds, or money market instruments.
                </p>
                <p>
                  Instead of buying individual shares or corporate debt instruments yourself—which requires extensive research, high capital, and constant monitoring—professional Asset Management Companies (AMCs) manage the pooled fund in accordance with a stated objective.
                </p>
                <p>
                  Every investor holds <strong className="text-brand-primary font-semibold">units</strong> representing their proportionate share of the fund's holdings. The value of these units is denoted daily by the <strong className="text-brand-primary font-semibold">Net Asset Value (NAV)</strong>, which fluctuates based on the performance of underlying securities.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-2 gap-3 text-xs text-brand-primary">
                <div className="p-3 bg-sand/60 rounded-sm border border-stone">
                  <strong className="block text-brand-primary font-semibold">Diversification</strong>
                  <span className="text-brand-secondary">Spreads risk across multiple securities and sectors.</span>
                </div>
                <div className="p-3 bg-sand/60 rounded-sm border border-stone">
                  <strong className="block text-brand-primary font-semibold">Liquidity</strong>
                  <span className="text-brand-secondary">Open-ended funds can be redeemed at prevailing NAV.</span>
                </div>
              </div>

            </div>

            {/* Visual Explanatory Card */}
            <div className="lg:col-span-6">
              <div className="bg-cream p-8 rounded-sm border border-stone shadow-elevated text-left space-y-6">
                <h3 className="font-serif text-xl font-semibold text-brand-primary border-b border-stone/60 pb-4">
                  The Investment Mechanism
                </h3>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3 p-3 bg-sand/40 rounded-sm border border-stone/60">
                    <span className="w-6 h-6 rounded-full bg-navy text-gold flex items-center justify-center font-bold text-xs shrink-0">1</span>
                    <div>
                      <strong className="text-brand-primary block text-sm">Investors Pool Capital</strong>
                      <p className="text-brand-secondary mt-0.5">Individuals contribute small or substantial sums through lump-sum or SIPs.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-sand/40 rounded-sm border border-stone/60">
                    <span className="w-6 h-6 rounded-full bg-navy text-gold flex items-center justify-center font-bold text-xs shrink-0">2</span>
                    <div>
                      <strong className="text-brand-primary block text-sm">Professional Management</strong>
                      <p className="text-brand-secondary mt-0.5">Fund managers and research teams allocate the pool into equities, debt, or gold.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-sand/40 rounded-sm border border-stone/60">
                    <span className="w-6 h-6 rounded-full bg-navy text-gold flex items-center justify-center font-bold text-xs shrink-0">3</span>
                    <div>
                      <strong className="text-brand-primary block text-sm">NAV Valuation & Compounding</strong>
                      <p className="text-brand-secondary mt-0.5">Returns in form of capital appreciation and dividends accrue to unitholders over time.</p>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-brand-secondary italic border-t border-stone/60 pt-3">
                  Note: Shaurya Investments distributes mutual fund schemes from registered Indian AMCs. All transactions are routed securely through authorized platforms.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Main Categories of Mutual Funds */}
      <section className="py-20 md:py-28 bg-sand border-b border-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold block mb-2">
              Asset Classes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-primary tracking-tight">
              Primary Categories of Mutual Funds
            </h2>
            <p className="mt-4 text-base text-brand-secondary">
              Selecting the right category is rooted in matching your financial time horizon and volatility comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div 
                key={cat.title}
                className="bg-cream p-8 rounded-sm border border-stone shadow-soft text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-stone/60 mb-4">
                    <h3 className="font-serif text-2xl font-semibold text-brand-primary">
                      {cat.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-gold bg-navy px-2.5 py-1 rounded-sm">
                      {cat.type}
                    </span>
                  </div>

                  <p className="text-sm text-brand-secondary leading-relaxed mb-6 font-normal">
                    {cat.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {cat.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-brand-primary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone/60 grid grid-cols-2 gap-2 text-[11px] text-brand-secondary">
                  <div>
                    <span className="text-brand-secondary block font-medium">Ideal Horizon:</span>
                    <strong className="text-brand-primary">{cat.horizon}</strong>
                  </div>
                  <div>
                    <span className="text-brand-secondary block font-medium">Volatility Level:</span>
                    <strong className="text-brand-primary">{cat.risk}</strong>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Distribution Services Offered */}
      <section className="py-20 md:py-28 bg-champagne border-b border-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold block mb-2">
              Our Role as Distributor
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-primary tracking-tight">
              How Shaurya Investments Assists You
            </h2>
            <p className="mt-4 text-base text-brand-secondary">
              We remove the operational complexity of mutual fund investments so you can focus on long-term discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {distributionSupport.map((item) => (
              <div 
                key={item.title}
                className="bg-cream p-6 rounded-sm border border-stone shadow-soft"
              >
                <div className="w-10 h-10 rounded-sm bg-sand border border-stone flex items-center justify-center text-gold mb-4">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-semibold text-brand-primary mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-brand-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Prominent Contact CTA */}
      <ContactCTA
        title="Consult Regarding Mutual Fund Distribution"
        subtitle="Visit our Kurar Village, Malad East office to complete your KYC or align your existing mutual fund schemes with Santosh D. Chavan."
        variant="navy"
      />

    </div>
  );
}
