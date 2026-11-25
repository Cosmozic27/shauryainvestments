import React from 'react';
import { motion } from 'framer-motion';
import { 
  PiggyBank, 
  TrendingUp, 
  Calendar, 
  Sparkles, 
  ShieldAlert, 
  CheckCircle2, 
  Repeat, 
  Calculator, 
  ArrowRight,
  Clock,
  Layers
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import ContactCTA from '../components/common/ContactCTA';
import Button from '../components/common/Button';
import SipCalculator from '../components/calculators/SipCalculator';
import WhatsAppButton from '../components/common/WhatsAppButton';

export default function SipInvestmentsPage() {
  const benefits = [
    {
      icon: Repeat,
      title: "Rupee-Cost Averaging",
      description: "When the market corrects, your fixed monthly allocation buys more mutual fund units. When markets rise, you buy fewer. Over time, this smooths out purchase costs without needing to time market peaks or valleys."
    },
    {
      icon: Calendar,
      title: "Disciplined Habit Formation",
      description: "Automated monthly deductions cultivate effortless financial discipline. By prioritizing investing on payday, you eliminate impulsive expenditures and maintain consistency across market cycles."
    },
    {
      icon: TrendingUp,
      title: "The Power of Compounding",
      description: "Returns earned on your invested capital are reinvested to generate their own returns. Over 10, 15, or 25 years, compounding transforms small periodic installments into substantial wealth."
    },
    {
      icon: Clock,
      title: "Flexibility & Convenience",
      description: "You can start with modest monthly amounts (often as low as ₹500 or ₹1,000), choose convenient debit dates, pause when necessary, or step-up contributions as your annual income expands."
    }
  ];

  const compoundingPillars = [
    {
      title: "Time Horizon is Paramount",
      description: "Compounding operates like a snowball: the real acceleration takes place in the latter half of the investment tenure. Staying invested through interim corrections is crucial."
    },
    {
      title: "Consistency Outweighs Market Timing",
      description: "Attempting to predict market tops and bottoms usually leads to missed rallies. An uninterrupted SIP ensures you participate across all economic phases."
    },
    {
      title: "Step-Up Escalation",
      description: "Increasing your SIP contribution by 5% to 10% annually in step with salary increments significantly magnifies the terminal corpus."
    }
  ];

  return (
    <div className="w-full bg-champagne">
      
      {/* Editorial Page Header */}
      <PageHeader
        badge="Systematic Wealth Building"
        title="SIP Investments: The Disciplined Path to Wealth Creation"
        description="A Systematic Investment Plan (SIP) allows you to invest small, fixed amounts in mutual funds on a recurring monthly basis. It instills financial discipline, averages market volatility, and harnesses the power of long-term compounding."
        breadcrumbs={[{ label: "Services", path: "/services" }, { label: "SIP Investments" }]}
      />

      {/* Mandatory Statutory Risk Notice */}
      <div className="bg-sand border-b border-stone py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start sm:items-center gap-3 text-xs text-brand-secondary">
          <ShieldAlert className="w-4 h-4 text-gold shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-brand-primary font-medium">Market Risk Disclosure:</strong> Mutual fund investments and SIPs are subject to market risks; read all scheme-related documents carefully. Returns from mutual fund SIPs are market-linked, fluctuate with macroeconomic conditions, and are strictly not guaranteed. Past performance does not guarantee future results.
          </p>
        </div>
      </div>

      {/* What is an SIP & How It Works */}
      <section className="py-20 md:py-28 bg-champagne border-b border-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs uppercase tracking-widest font-semibold text-gold block">
                Disciplined Architecture
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-primary tracking-tight leading-snug">
                How Monthly Investing Transforms Saving Into Wealth
              </h2>

              <div className="space-y-4 text-base text-brand-secondary leading-relaxed font-normal">
                <p>
                  A <strong className="text-brand-primary font-semibold">Systematic Investment Plan (SIP)</strong> is not a distinct financial product itself, but a disciplined method of investing in mutual fund schemes.
                </p>
                <p>
                  Instead of committing a large lump-sum, a pre-determined sum (e.g., ₹2,000, ₹5,000, or ₹25,000) is automatically debited from your bank account on a chosen date every month via NACH or e-mandate.
                </p>
                <p>
                  This capital is utilized to purchase units in selected mutual fund schemes at the prevailing Net Asset Value (NAV). By eliminating the urge to time market peaks and troughs, an SIP turns market volatility into an ally.
                </p>
              </div>

              {/* 3 Quick Facts */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3.5 bg-sand/60 rounded-sm border border-stone">
                  <span className="text-xs text-brand-secondary block uppercase tracking-wider font-medium">Starting Point</span>
                  <span className="font-serif text-lg font-bold text-brand-primary mt-0.5 block">From ₹500/mo</span>
                  <span className="text-[11px] text-brand-secondary">Accessible to all earners</span>
                </div>
                <div className="p-3.5 bg-sand/60 rounded-sm border border-stone">
                  <span className="text-xs text-brand-secondary block uppercase tracking-wider font-medium">Frequency</span>
                  <span className="font-serif text-lg font-bold text-brand-primary mt-0.5 block">Monthly Auto-Debit</span>
                  <span className="text-[11px] text-brand-secondary">Effortless habit building</span>
                </div>
                <div className="p-3.5 bg-sand/60 rounded-sm border border-stone">
                  <span className="text-xs text-brand-secondary block uppercase tracking-wider font-medium">Strategy</span>
                  <span className="font-serif text-lg font-bold text-brand-primary mt-0.5 block">Averaging</span>
                  <span className="text-[11px] text-brand-secondary">Smooths volatility cycles</span>
                </div>
              </div>

            </div>

            {/* Right: Compounding Explanatory Card */}
            <div className="lg:col-span-5">
              <div className="bg-cream p-8 rounded-sm border border-stone shadow-elevated text-left space-y-6">
                <div className="flex items-center gap-2.5 pb-4 border-b border-stone/60">
                  <Sparkles className="w-5 h-5 text-gold" />
                  <h3 className="font-serif text-xl font-semibold text-brand-primary">
                    Compounding Explained Simply
                  </h3>
                </div>

                <p className="text-sm text-brand-secondary leading-relaxed font-normal">
                  Albert Einstein famously described compound interest as the eighth wonder of the world. In an equity or hybrid SIP, compounding occurs when the earnings generated on your accumulated units are retained to generate further earnings.
                </p>

                <div className="space-y-3 pt-2 text-xs text-brand-primary">
                  {compoundingPillars.map((p, idx) => (
                    <div key={idx} className="p-3 bg-sand/40 rounded-sm border border-stone/60">
                      <strong className="block text-brand-primary text-sm font-semibold mb-1">{p.title}</strong>
                      <span className="text-brand-secondary leading-relaxed">{p.description}</span>
                    </div>
                  ))}
                </div>

                <div className="text-[11px] text-brand-secondary italic border-t border-stone/60 pt-3">
                  At Shaurya Investments, we help you determine the appropriate SIP amount aligned with your retirement, children's education, or milestone horizons.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* The 4 Core Benefits */}
      <section className="py-20 md:py-28 bg-sand border-b border-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold block mb-2">
              Investor Advantages
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-primary tracking-tight">
              Why Disciplined SIPs Create Enduring Wealth
            </h2>
            <p className="mt-4 text-base text-brand-secondary">
              Four fundamental advantages that make Systematic Investment Planning the preferred wealth accumulation vehicle for Indian families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={benefit.title}
                  className="bg-cream p-7 rounded-sm border border-stone shadow-soft text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-sm bg-sand border border-stone flex items-center justify-center text-gold mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-brand-primary mb-2.5">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-brand-secondary leading-relaxed font-normal">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Interactive SIP Wealth Compounding Calculator Section */}
      <section id="sip-calculator" className="py-20 md:py-28 bg-champagne border-b border-stone scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold block mb-2">
              Wealth Projection Engine
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-primary tracking-tight">
              Model Your Long-Term Compounding Potential
            </h2>
            <p className="mt-4 text-base text-brand-secondary">
              Experiment with different monthly contributions and horizons to understand the compounding trajectory of disciplined investing.
            </p>
          </div>

          <SipCalculator />
        </div>
      </section>

      {/* Prominent Contact CTA */}
      <ContactCTA
        title="Start Your Disciplined SIP With Shaurya Investments"
        subtitle="Bring your KYC and banking details to our Kurar Village, Malad East office. Santosh D. Chavan will assist you with seamless scheme distribution setup."
        variant="navy"
      />

    </div>
  );
}
