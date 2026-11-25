import React, { useState, useId } from 'react';
import { Calculator, ArrowRight, ShieldAlert, Sparkles, RefreshCw } from 'lucide-react';
import { formatINR } from '../../utils/formatters';
import DonutChart from '../common/DonutChart';
import WhatsAppButton from '../common/WhatsAppButton';

export default function SipCalculator({
  initialMonthly = 5000,
  initialYears = 15,
  initialRate = 12,
  title = "SIP Wealth Compounding Calculator",
  subtitle = "Estimate your potential wealth creation through disciplined monthly mutual fund contributions."
}) {
  const [monthlyInvestment, setMonthlyInvestment] = useState(initialMonthly);
  const [durationYears, setDurationYears] = useState(initialYears);
  const [expectedReturnRate, setExpectedReturnRate] = useState(initialRate);

  const monthlyId = useId();
  const durationId = useId();
  const rateId = useId();

  // Mathematical Calculation
  const P = Math.max(0, Number(monthlyInvestment) || 0);
  const years = Math.max(1, Math.round(Number(durationYears) || 1));
  const annualR = Math.max(0, Number(expectedReturnRate) || 0);

  const n = years * 12; // Total monthly installments
  const totalInvested = P * n;

  let estimatedFutureValue = 0;
  let estimatedReturns = 0;

  if (P > 0) {
    if (annualR === 0) {
      estimatedFutureValue = totalInvested;
      estimatedReturns = 0;
    } else {
      // Monthly compounding rate derived from assumed annual rate
      const i = (annualR / 100) / 12;
      // Standard Annuity Due compounding: Contributions at beginning of month
      // FV = P * [ ((1 + i)^n - 1) / i ] * (1 + i)
      estimatedFutureValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
      estimatedReturns = estimatedFutureValue - totalInvested;
    }
  }

  const resetDefaults = () => {
    setMonthlyInvestment(initialMonthly);
    setDurationYears(initialYears);
    setExpectedReturnRate(initialRate);
  };

  return (
    <div className="interactive-card card-glass-dark bg-[#14243B]/85 backdrop-blur-md rounded-sm border border-gold/30 shadow-[0_16px_48px_-8px_rgba(6,11,20,0.6)] p-6 sm:p-10 text-left gold-sweep-active">
      
      {/* Calculator Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gold/20">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B1424] text-gold border border-gold/40 text-xs font-semibold uppercase tracking-wider rounded-sm mb-2 shadow-soft">
            <Calculator className="w-3.5 h-3.5" />
            <span>SIP Projection Engine</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F5F0E7]">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-[#B8C0CC] mt-1 max-w-xl">
            {subtitle}
          </p>
        </div>

        <button
          type="button"
          onClick={resetDefaults}
          className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold-light transition-colors focus:outline-none self-start sm:self-auto font-medium"
          aria-label="Reset calculator inputs to default values"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Defaults</span>
        </button>
      </div>

      {/* Main Grid: Controls on Left, Results & Donut on Right */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Sliders & Numeric Inputs (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-7">
          
          {/* Input 1: Monthly Investment */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-medium text-[#F5F0E7]">
              <label htmlFor={monthlyId}>Monthly Investment (₹)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gold text-xs font-medium">₹</span>
                <input
                  id={monthlyId}
                  type="number"
                  min="500"
                  max="1000000"
                  step="500"
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(Math.max(0, Number(e.target.value)))}
                  className="w-32 pl-7 pr-3 py-1.5 text-right font-serif text-base font-bold text-[#F5F0E7] bg-[#0B1424] border border-gold/40 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>
            </div>

            <input
              type="range"
              min="500"
              max="100000"
              step="500"
              value={Math.min(monthlyInvestment, 100000)}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              className="w-full accent-gold cursor-pointer bg-[#0B1424] h-2 rounded-sm"
              aria-label="Monthly investment amount slider"
            />
            <div className="flex justify-between text-[11px] text-[#B8C0CC]">
              <span>₹500</span>
              <span>₹10,000</span>
              <span>₹50,000</span>
              <span>₹1,00,000+</span>
            </div>
          </div>

          {/* Input 2: Investment Duration (Years) */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-medium text-[#F5F0E7]">
              <label htmlFor={durationId}>Investment Duration (Years)</label>
              <div className="relative">
                <input
                  id={durationId}
                  type="number"
                  min="1"
                  max="35"
                  step="1"
                  value={durationYears}
                  onChange={(e) => setDurationYears(Math.max(1, Math.min(35, Number(e.target.value))))}
                  className="w-24 pr-8 pl-3 py-1.5 text-right font-serif text-base font-bold text-[#F5F0E7] bg-[#0B1424] border border-gold/40 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold"
                />
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gold text-[11px] font-medium">Yrs</span>
              </div>
            </div>

            <input
              type="range"
              min="1"
              max="35"
              step="1"
              value={durationYears}
              onChange={(e) => setDurationYears(Number(e.target.value))}
              className="w-full accent-gold cursor-pointer bg-[#0B1424] h-2 rounded-sm"
              aria-label="Investment duration slider in years"
            />
            <div className="flex justify-between text-[11px] text-[#B8C0CC]">
              <span>1 Year</span>
              <span>10 Years</span>
              <span>20 Years</span>
              <span>35 Years</span>
            </div>
          </div>

          {/* Input 3: Assumed Annual Return Rate */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-medium text-[#F5F0E7]">
              <label htmlFor={rateId}>Assumed Annual Return Rate (%)</label>
              <div className="relative">
                <input
                  id={rateId}
                  type="number"
                  min="1"
                  max="25"
                  step="0.5"
                  value={expectedReturnRate}
                  onChange={(e) => setExpectedReturnRate(Math.max(0, Math.min(30, Number(e.target.value))))}
                  className="w-24 pr-7 pl-3 py-1.5 text-right font-serif text-base font-bold text-[#F5F0E7] bg-[#0B1424] border border-gold/40 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gold text-xs font-medium">%</span>
              </div>
            </div>

            <input
              type="range"
              min="1"
              max="20"
              step="0.5"
              value={expectedReturnRate}
              onChange={(e) => setExpectedReturnRate(Number(e.target.value))}
              className="w-full accent-gold cursor-pointer bg-[#0B1424] h-2 rounded-sm"
              aria-label="Assumed annual rate of return slider"
            />
            <div className="flex justify-between text-[11px] text-[#B8C0CC]">
              <span>6% (Conservative)</span>
              <span>10%</span>
              <span>12% (Balanced)</span>
              <span>15%+</span>
            </div>
          </div>

          {/* Mathematical Assumption Explanation */}
          <div className="p-4 bg-[#0B1424]/90 rounded-sm border border-gold/25 text-xs text-[#B8C0CC] leading-relaxed">
            <p>
              <strong className="text-gold font-semibold">Mathematical Formula & Assumption:</strong> Uses the standard Annuity-Due future value formula: <code className="bg-[#14243B] text-gold px-1.5 py-0.5 rounded text-[11px] font-mono border border-gold/20">FV = P × [((1+i)^n - 1) / i] × (1+i)</code>, where monthly compounding rate <code className="font-mono text-gold">i = (r / 100) / 12</code> and contributions occur on the first day of each month across <code className="font-mono text-gold">{n}</code> installments.
            </p>
          </div>

        </div>

        {/* Results Showcase & Donut Chart (5 cols on lg) */}
        <div className="lg:col-span-5 bg-[#0B1424]/95 p-6 sm:p-7 rounded-sm border border-gold/30 space-y-6 shadow-elevated">
          
          {/* Highlighted Estimated Future Value */}
          <div className="bg-[#14243B] text-white p-5 rounded-sm shadow-soft text-center space-y-1 border border-gold/40">
            <span className="text-[11px] uppercase tracking-widest text-gold font-semibold block">
              Estimated Future Value
            </span>
            <p className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F0E7] tracking-tight">
              {formatINR(estimatedFutureValue)}
            </p>
            <span className="text-xs text-[#B8C0CC] block pt-0.5">
              Across {years} years ({n} installments)
            </span>
          </div>

          {/* Visual Donut Chart */}
          <DonutChart
            value1={totalInvested}
            value2={estimatedReturns}
            label1="Amount Invested"
            label2="Estimated Wealth Gain"
            centerTitle="Total Corpus"
            centerValue={formatINR(estimatedFutureValue)}
            variant="dark"
            size={180}
            strokeWidth={26}
          />

          {/* Quick Summary Metrics */}
          <div className="space-y-2 pt-2 border-t border-gold/20 text-xs">
            <div className="flex justify-between text-[#B8C0CC]">
              <span>Total Amount Invested:</span>
              <strong className="text-[#F5F0E7]">{formatINR(totalInvested)}</strong>
            </div>
            <div className="flex justify-between text-[#B8C0CC]">
              <span>Estimated Returns (Gain):</span>
              <strong className="text-gold font-semibold">{formatINR(estimatedReturns)}</strong>
            </div>
            <div className="flex justify-between text-[#B8C0CC] pt-1.5 border-t border-gold/15">
              <span className="font-medium text-[#F5F0E7]">Projected Total Corpus:</span>
              <strong className="text-[#F5F0E7] text-sm font-serif">{formatINR(estimatedFutureValue)}</strong>
            </div>
          </div>

          {/* WhatsApp Direct Action */}
          <div className="pt-2">
            <WhatsAppButton
              type="sipInvestments"
              variant="whatsapp"
              size="md"
              label="Start a SIP With Us via WhatsApp"
              magnetic={true}
              className="w-full justify-center text-xs uppercase tracking-wider font-semibold shadow-soft"
            />
          </div>

          {/* Mandatory Statutory Risk Disclaimer */}
          <div className="border-t border-gold/20 pt-3 space-y-1 text-[10.5px] text-[#B8C0CC]/80 leading-relaxed">
            <p className="font-medium text-gold">
              Important Disclaimer:
            </p>
            <p className="italic">
              These calculations are illustrative estimates only. Actual mutual fund returns are market-linked and not guaranteed. Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully. Never consider assumed rates as guaranteed performance.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
