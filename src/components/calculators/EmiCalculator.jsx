import React, { useState, useId } from 'react';
import { Calculator, ArrowRight, ShieldAlert, Sparkles, RefreshCw } from 'lucide-react';
import { formatINR } from '../../utils/formatters';
import DonutChart from '../common/DonutChart';
import WhatsAppButton from '../common/WhatsAppButton';

export default function EmiCalculator({ 
  initialPrincipal = 2500000, 
  initialRate = 8.5, 
  initialTenureYears = 20,
  loanType = 'homeLoans', // 'homeLoans', 'personalLoans', 'businessLoans'
  title = "Loan EMI Calculator",
  subtitle = "Calculate your monthly installment, total interest, and complete repayment structure."
}) {
  const [principal, setPrincipal] = useState(initialPrincipal);
  const [annualRate, setAnnualRate] = useState(initialRate);
  const [tenureYears, setTenureYears] = useState(initialTenureYears);

  const principalId = useId();
  const rateId = useId();
  const tenureId = useId();

  // Mathematical Calculation
  const P = Math.max(0, Number(principal) || 0);
  const annualR = Math.max(0, Number(annualRate) || 0);
  const n = Math.max(1, Math.round((Number(tenureYears) || 1) * 12));

  let monthlyEmi = 0;
  let totalRepayment = 0;
  let totalInterest = 0;

  if (P > 0) {
    if (annualR === 0) {
      // Zero-interest edge case
      monthlyEmi = P / n;
      totalRepayment = P;
      totalInterest = 0;
    } else {
      const r = (annualR / 12) / 100;
      const compoundFactor = Math.pow(1 + r, n);
      monthlyEmi = (P * r * compoundFactor) / (compoundFactor - 1);
      totalRepayment = monthlyEmi * n;
      totalInterest = totalRepayment - P;
    }
  }

  const resetDefaults = () => {
    setPrincipal(initialPrincipal);
    setAnnualRate(initialRate);
    setTenureYears(initialTenureYears);
  };

  return (
    <div className="interactive-card card-glass-dark bg-[#14243B]/85 backdrop-blur-md rounded-sm border border-gold/30 shadow-[0_16px_48px_-8px_rgba(6,11,20,0.6)] p-6 sm:p-10 text-left gold-sweep-active">
      
      {/* Calculator Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gold/20">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B1424] text-gold border border-gold/40 text-xs font-semibold uppercase tracking-wider rounded-sm mb-2 shadow-soft">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Financial Tool</span>
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
          
          {/* Input 1: Loan Amount */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-medium text-[#F5F0E7]">
              <label htmlFor={principalId}>Loan Amount (₹)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gold text-xs font-medium">₹</span>
                <input
                  id={principalId}
                  type="number"
                  min="50000"
                  max="100000000"
                  step="50000"
                  value={principal}
                  onChange={(e) => setPrincipal(Math.max(0, Number(e.target.value)))}
                  className="w-36 pl-7 pr-3 py-1.5 text-right font-serif text-base font-bold text-[#F5F0E7] bg-[#0B1424] border border-gold/40 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>
            </div>

            <input
              type="range"
              min="100000"
              max="20000000"
              step="50000"
              value={Math.min(principal, 20000000)}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full accent-gold cursor-pointer bg-[#0B1424] h-2 rounded-sm"
              aria-label="Loan amount slider"
            />
            <div className="flex justify-between text-[11px] text-[#B8C0CC]">
              <span>₹1 Lakh</span>
              <span>₹50 Lakhs</span>
              <span>₹1 Crore</span>
              <span>₹2 Crores+</span>
            </div>
          </div>

          {/* Input 2: Annual Interest Rate */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-medium text-[#F5F0E7]">
              <label htmlFor={rateId}>Annual Interest Rate (%)</label>
              <div className="relative">
                <input
                  id={rateId}
                  type="number"
                  min="0"
                  max="25"
                  step="0.1"
                  value={annualRate}
                  onChange={(e) => setAnnualRate(Math.max(0, Math.min(30, Number(e.target.value))))}
                  className="w-28 pr-7 pl-3 py-1.5 text-right font-serif text-base font-bold text-[#F5F0E7] bg-[#0B1424] border border-gold/40 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gold text-xs font-medium">%</span>
              </div>
            </div>

            <input
              type="range"
              min="0"
              max="20"
              step="0.1"
              value={annualRate}
              onChange={(e) => setAnnualRate(Number(e.target.value))}
              className="w-full accent-gold cursor-pointer bg-[#0B1424] h-2 rounded-sm"
              aria-label="Annual interest rate slider"
            />
            <div className="flex justify-between text-[11px] text-[#B8C0CC]">
              <span>0% (Interest-Free)</span>
              <span>8.5% (Typical Home)</span>
              <span>14% (Personal)</span>
              <span>20%</span>
            </div>
          </div>

          {/* Input 3: Loan Tenure */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-medium text-[#F5F0E7]">
              <label htmlFor={tenureId}>Loan Tenure (Years)</label>
              <div className="relative">
                <input
                  id={tenureId}
                  type="number"
                  min="1"
                  max="35"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Math.max(1, Math.min(35, Number(e.target.value))))}
                  className="w-28 pr-8 pl-3 py-1.5 text-right font-serif text-base font-bold text-[#F5F0E7] bg-[#0B1424] border border-gold/40 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold"
                />
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gold text-[11px] font-medium">Yrs</span>
              </div>
            </div>

            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full accent-gold cursor-pointer bg-[#0B1424] h-2 rounded-sm"
              aria-label="Loan tenure slider in years"
            />
            <div className="flex justify-between text-[11px] text-[#B8C0CC]">
              <span>1 Year ({12} mo)</span>
              <span>15 Years</span>
              <span>30 Years ({360} mo)</span>
            </div>
          </div>

          {/* Technical Note on Reducing Balance */}
          <div className="p-4 bg-[#0B1424]/90 rounded-sm border border-gold/25 text-xs text-[#B8C0CC] leading-relaxed">
            <p>
              <strong className="text-gold font-semibold">Calculation Principle:</strong> Calculated using the standard reducing-balance amortisation model where interest is computed monthly on the diminishing principal outstanding balance.
            </p>
          </div>

        </div>

        {/* Results Showcase & Donut Chart (5 cols on lg) */}
        <div className="lg:col-span-5 bg-[#0B1424]/95 p-6 sm:p-7 rounded-sm border border-gold/30 space-y-6 shadow-elevated">
          
          {/* Highlighted Monthly EMI */}
          <div className="bg-[#14243B] text-white p-5 rounded-sm shadow-soft text-center space-y-1 border border-gold/40">
            <span className="text-[11px] uppercase tracking-widest text-gold font-semibold block">
              Estimated Monthly EMI
            </span>
            <p className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F0E7] tracking-tight">
              {formatINR(monthlyEmi)}
            </p>
            <span className="text-xs text-[#B8C0CC] block pt-0.5">
              payable for {n} monthly installments
            </span>
          </div>

          {/* Visual Donut Chart */}
          <DonutChart
            value1={P}
            value2={totalInterest}
            label1="Principal Loan Amount"
            label2="Total Interest Payable"
            centerTitle="Total Repayment"
            centerValue={formatINR(totalRepayment)}
            variant="dark"
            size={180}
            strokeWidth={26}
          />

          {/* Quick Summary Metrics */}
          <div className="space-y-2 pt-2 border-t border-gold/20 text-xs">
            <div className="flex justify-between text-[#B8C0CC]">
              <span>Principal Amount:</span>
              <strong className="text-[#F5F0E7]">{formatINR(P)}</strong>
            </div>
            <div className="flex justify-between text-[#B8C0CC]">
              <span>Total Interest:</span>
              <strong className="text-gold font-semibold">{formatINR(totalInterest)}</strong>
            </div>
            <div className="flex justify-between text-[#B8C0CC] pt-1.5 border-t border-gold/15">
              <span className="font-medium text-[#F5F0E7]">Total Amount Payable:</span>
              <strong className="text-[#F5F0E7] text-sm font-serif">{formatINR(totalRepayment)}</strong>
            </div>
          </div>

          {/* WhatsApp Direct Action */}
          <div className="pt-2">
            <WhatsAppButton
              type={loanType}
              variant="whatsapp"
              size="md"
              label="Enquire About This Loan on WhatsApp"
              magnetic={true}
              className="w-full justify-center text-xs uppercase tracking-wider font-semibold shadow-soft"
            />
          </div>

          {/* Legal / Lender Disclaimer */}
          <p className="text-[10.5px] text-[#B8C0CC]/80 leading-relaxed italic border-t border-gold/20 pt-3">
            Disclaimer: This EMI calculation is for illustrative estimation purposes. Actual lender sanction, applicable interest rates, processing fees, and repayment terms are determined by the respective banking institutions based on credit appraisal and underwriting guidelines.
          </p>

        </div>

      </div>

    </div>
  );
}
