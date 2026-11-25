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
  Layers, 
  Coins, 
  ShieldCheck 
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import ContactCTA from '../components/common/ContactCTA';
import SipCalculator from '../components/calculators/SipCalculator';
import WhatsAppButton from '../components/common/WhatsAppButton';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../components/common/SEO';
import ArchitecturalHeroBackground from '../components/common/ArchitecturalHeroBackground';

export default function SipInvestmentsPage() {
  const steps = [
    {
      step: "01",
      title: "Choose Monthly Amount",
      subtitle: "Comfortable Allocation",
      description: "Select a monthly investment sum that comfortably fits your cash flows (starting from as little as ₹500 or ₹1,000). The key is sustainability over multiple economic cycles."
    },
    {
      step: "02",
      title: "Automate Regular Debits",
      subtitle: "Hands-Free Execution",
      description: "Set up an automated bank e-mandate on your salary date. Investing occurs systematically on payday, eliminating impulsive expenses and market timing stress."
    },
    {
      step: "03",
      title: "Align With Goals & Risk",
      subtitle: "Compounding Growth",
      description: "Units accumulate across bull and bear phases via rupee-cost averaging. Your capital stays invested toward target milestone horizons—such as higher education or retirement."
    }
  ];

  const benefits = [
    {
      icon: Repeat,
      title: "Rupee-Cost Averaging",
      subtitle: "Smoothing Market Volatility",
      description: "When markets pull back, your fixed monthly allocation buys more mutual fund units. When markets advance, you buy fewer. Over time, this systematically lowers your average unit acquisition cost without the stressful need to predict market peaks or troughs."
    },
    {
      icon: Calendar,
      title: "Disciplined Habit Formation",
      subtitle: "Pay Yourself First",
      description: "Automated monthly debits establish effortless financial consistency. By prioritizing investment before discretionary expenditures, you ensure continuous capital accumulation across good and lean seasons alike."
    },
    {
      icon: TrendingUp,
      title: "The Exponential Multiplier",
      subtitle: "The Magic of Compounding",
      description: "Returns generated on your invested capital are continuously reinvested to earn subsequent returns. In the initial years, growth appears linear; after 10, 15, or 20 years, compound interest creates transformative wealth creation."
    },
    {
      icon: Clock,
      title: "Unmatched Flexibility",
      subtitle: "Full Liquidity Control",
      description: "You retain control over your investment plan. You can step up contributions as your salary expands, pause debits during emergency cash-flow constraints, or redeem accumulated units when life milestones arrive."
    }
  ];

  return (
    <div className="w-full bg-[#0B1424] text-[#F5F0E7]">
      <SEO
        title="SIP Investment Advisory & Wealth Compounding Calculator in Mumbai"
        description="Model your wealth growth with our interactive SIP calculator. Seasoned guidance on systematic investment plans with rupee-cost averaging by Shaurya Investments in Malad East."
        canonicalPath="/sip-investments"
      />
      
      {/* Editorial Page Header with Compounding Curved Trajectory Background */}
      <PageHeader
        variant="sip"
        badge="Systematic Wealth Building"
        title="SIP Investments: The Disciplined Path to Wealth Creation"
        description="A Systematic Investment Plan (SIP) allows you to invest small, fixed amounts in mutual funds on a recurring monthly basis. It instills financial discipline, averages market volatility, and harnesses the power of multi-decade compounding."
        breadcrumbs={[{ label: "Services", path: "/services" }, { label: "SIP Investments" }]}
      />

      {/* Mandatory Statutory Risk Notice */}
      <div className="bg-[#14243B] border-b border-gold/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start sm:items-center gap-3 text-xs text-[#B8C0CC]">
          <ShieldAlert className="w-5 h-5 text-gold shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-[#F5F0E7] font-medium">Market Risk Disclosure:</strong> Mutual fund investments are subject to market risks. Read all scheme-related documents carefully. Calculator projections are illustrative and based on assumed rates of return. Actual returns are market-linked and cannot be guaranteed.
          </p>
        </div>
      </div>

      {/* SECTION 1: Full-Section Visual Compounding Growth Background */}
      <section 
        data-theme="dark"
        data-nav-contrast="dark"
        data-contrast-zone="dark"
        className="py-20 md:py-28 bg-[#0B1424] text-[#F5F0E7] border-b border-gold/20 relative overflow-hidden"
      >
        {/* Full-section visual compounding growth curve motif */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="w-full h-full opacity-[0.08] text-gold" viewBox="0 0 1440 600" preserveAspectRatio="none" fill="none">
            <path d="M0,550 C300,530 600,480 900,320 C1200,160 1350,60 1440,0 L1440,600 L0,600 Z" fill="currentColor" />
            <path d="M0,550 C300,530 600,480 900,320 C1200,160 1350,60 1440,0" stroke="currentColor" strokeWidth="3" />
          </svg>
          {/* Responsive Midnight Navy Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1424] via-[#0B1424]/95 to-[#14243B]/85" />
          {/* Subtle architectural radial grid */}
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
                  Systematic Compounding
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F0E7] tracking-tight leading-tight">
                Transform Modest Monthly Savings Into <br />
                <span className="text-gold italic font-normal">Substantial Family Security.</span>
              </h2>

              <p className="text-base text-[#B8C0CC] leading-relaxed font-normal">
                You do not need a large initial windfall to build generational wealth. A <strong className="text-[#F5F0E7] font-semibold">Systematic Investment Plan (SIP)</strong> bridges the gap between everyday earnings and capital market compounding.
              </p>

              <p className="text-sm text-[#B8C0CC]/90 leading-relaxed">
                By investing a fixed sum every month, you remove emotion from investing. Market corrections become buying opportunities, allowing your portfolio to accumulate more units when prices are low. At Shaurya Investments, <strong className="text-[#F5F0E7] font-semibold">Santosh D. Chavan</strong> helps you select fund categories aligned with your true risk horizon.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <WhatsAppButton 
                  type="sip" 
                  label="Start Your SIP Consultation on WhatsApp" 
                  className="shadow-soft"
                />
              </div>
            </motion.div>

            {/* Right: Compounding Impact Card with Visual Growth Trajectory */}
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
                        Power of Regularity
                      </span>
                      <h4 className="font-serif text-xl font-semibold text-[#F5F0E7]">
                        The Compounding Advantage
                      </h4>
                    </div>
                    <Sparkles className="w-6 h-6 text-gold" />
                  </div>

                  <div className="space-y-4 text-xs">
                    <div className="p-3.5 bg-[#0B1424]/90 rounded-sm border border-gold/20">
                      <span className="text-[10px] uppercase font-semibold text-[#B8C0CC] block">
                        Starting Small
                      </span>
                      <span className="font-serif text-lg font-bold text-[#F5F0E7] block mt-0.5">
                        ₹2,000 / month
                      </span>
                      <span className="text-[11px] text-[#B8C0CC]">
                        Invested consistently across market cycles
                      </span>
                    </div>

                    <div className="p-3.5 bg-[#0B1424]/90 rounded-sm border border-gold/20">
                      <span className="text-[10px] uppercase font-semibold text-[#B8C0CC] block">
                        Annual Step-Up Option
                      </span>
                      <span className="font-serif text-lg font-bold text-gold block mt-0.5">
                        + 10% Every Year
                      </span>
                      <span className="text-[11px] text-[#B8C0CC]">
                        Increases in line with your salary promotions
                      </span>
                    </div>

                    <div className="p-3.5 bg-[#14243B] text-white rounded-sm border border-gold/30">
                      <span className="text-[10px] uppercase font-semibold text-gold block">
                        Long-Term Impact
                      </span>
                      <span className="font-serif text-lg font-bold text-white block mt-0.5">
                        Exponential Compounding
                      </span>
                      <span className="text-[11px] text-gray-300">
                        Over 15-20 years, returns far surpass invested capital
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#B8C0CC] italic text-center">
                    "Time in the market consistently beats timing the market."
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: 3-Step SIP Architecture with Slate Navy Background */}
      <section 
        data-theme="dark"
        data-nav-contrast="dark"
        data-contrast-zone="dark"
        className="py-20 md:py-28 bg-[#14243B] text-[#F5F0E7] border-b border-gold/20 relative overflow-hidden"
      >
        {/* Subtle geometric dot grid & ambient lighting */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#C6A66B_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute top-1/2 right-10 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeading
            subtitle="How It Operates"
            title="The Simple 3-Step Architecture of an SIP"
            description="How disciplined monthly execution transforms everyday income into an enduring wealth engine."
            align="center"
            isLight={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
            {steps.map((st, idx) => (
              <motion.div
                key={st.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-glass-dark border border-gold/25 p-8 rounded-sm flex flex-col justify-between text-[#F5F0E7] gold-sweep-active"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gold/20">
                    <span className="font-serif text-4xl font-bold text-gold/40">
                      {st.step}
                    </span>
                    <span className="text-[10px] uppercase font-semibold tracking-widest text-gold bg-[#0B1424] px-2.5 py-1 rounded-sm border border-gold/30">
                      Phase {idx + 1}
                    </span>
                  </div>

                  <span className="text-xs uppercase tracking-wider text-gold font-semibold block mb-1">
                    {st.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-[#F5F0E7] mb-3">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8C0CC] leading-relaxed font-normal">
                    {st.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gold/20 flex items-center gap-2 text-xs font-medium text-[#F5F0E7]">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Hands-free monthly execution</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Benefits Section with Warm Stone Background (25% Warm Neutral Experience) */}
      <section 
        data-theme="light"
        data-nav-contrast="light"
        data-contrast-zone="light"
        className="py-20 md:py-28 bg-[#E6DED0] text-[#17243A] border-b border-[#D2C7B6] relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#17243A_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            subtitle="Investor Advantages"
            title="Why Seasoned Investors Rely on SIPs"
            description="Proven mathematical and behavioral benefits that make systematic investing the cornerstone of financial security."
            align="center"
            isLight={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 text-left">
            {benefits.map((ben, idx) => {
              const Icon = ben.icon;
              return (
                <motion.div
                  key={ben.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="card-glass-light p-8 rounded-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-sm bg-[#F5F0E7] border border-[#D2C7B6] flex items-center justify-center text-[#17243A] shrink-0 shadow-sm">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-semibold tracking-widest text-gold block mb-1">
                        {ben.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl font-semibold text-[#17243A] mb-2">
                        {ben.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#404E63] leading-relaxed font-normal">
                        {ben.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: Prominent SIP Calculator with Atmospheric Architectural Background */}
      <section 
        data-theme="dark"
        data-nav-contrast="dark"
        data-contrast-zone="dark"
        className="py-20 md:py-28 bg-[#0B1424] text-[#F5F0E7] relative overflow-hidden border-b border-gold/20"
      >
        <ArchitecturalHeroBackground variant="sip" className="opacity-70" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14243B] border border-gold/40 text-gold text-xs uppercase font-semibold tracking-widest mb-3">
              <Calculator className="w-3.5 h-3.5 text-gold" />
              <span>Interactive Growth Modeler</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5F0E7]">
              Model Your Future Wealth With Our SIP Calculator
            </h2>
            <p className="mt-3 text-base text-[#B8C0CC]">
              Experiment with monthly contribution sizes, expected annual returns, and time horizons to visualize total corpus accumulation.
            </p>
          </div>

          {/* Prominent Dark Navy SIP Calculator Card */}
          <div className="max-w-5xl mx-auto">
            <SipCalculator />
          </div>

          <div className="max-w-2xl mx-auto text-center mt-8 text-xs text-[#B8C0CC]">
            * Note: Mutual fund investments are subject to market risks. Calculations above are strictly illustrative based on compounding mathematics. Past performance is not indicative of future returns.
          </div>

        </div>
      </section>

      {/* SECTION 5: Closing Deep Navy CTA */}
      <ContactCTA
        title="Ready to Structure Your Monthly SIP Plan?"
        subtitle="Visit our office in Malad East, Mumbai for a personalized review of suitable mutual fund categories aligned with your milestones and risk profile."
        variant="navy"
        whatsAppType="sip"
        whatsAppLabel="Enquire About SIP on WhatsApp"
      />

    </div>
  );
}
