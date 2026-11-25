import React from 'react';
import PageHeader from '../components/common/PageHeader';
import ContactCTA from '../components/common/ContactCTA';
import SEO from '../components/common/SEO';
import { AlertTriangle, ShieldAlert, FileText, CheckCircle2, Info } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function FinancialDisclaimerPage() {
  const lastUpdated = "November 2026";

  return (
    <div className="bg-champagne min-h-screen">
      <SEO
        title="Financial Disclosures & Regulatory Disclaimer"
        description="Comprehensive statutory disclaimers, lender underwriting guidelines, mutual fund market risk disclosures, and regulatory boundaries for Shaurya Investments."
        canonicalPath="/financial-disclaimer"
      />
      <PageHeader
        badge="Regulatory Transparency"
        title="Financial Disclaimer"
        description="Comprehensive statutory disclaimers, regulatory boundaries, and advisory disclosures for all financial products discussed by Shaurya Investments."
        breadcrumbs={[{ label: "Legal" }, { label: "Financial Disclaimer" }]}
      />

      {/* Main Content Area */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Prominent Statutory Warning Banner */}
          <div className="bg-sand border border-stone p-6 sm:p-8 rounded-sm shadow-soft mb-12 border-l-4 border-l-gold">
            <div className="flex items-center gap-3 text-gold mb-3">
              <ShieldAlert className="w-5 h-5 shrink-0" />
              <span className="text-xs uppercase tracking-widest font-semibold text-brand-primary">Important Regulatory Notice</span>
            </div>
            <p className="text-sm text-brand-secondary leading-relaxed font-light">
              Financial products—including retail loans, commercial credit, mutual funds, systemic investment plans (SIPs), and life insurance policies—involve distinct risk profiles, market volatility, contractual covenants, and institutional underwriting standards. Please review the disclosures below carefully prior to initiating any transaction.
            </p>
            <div className="mt-4 pt-4 border-t border-stone/60 flex items-center justify-between text-xs text-brand-secondary">
              <span>Jurisdiction: Mumbai, Maharashtra, India</span>
              <span className="font-medium text-brand-primary">Last Updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Numbered Disclaimer Sections */}
          <div className="space-y-10 text-brand-secondary leading-relaxed font-light text-sm sm:text-[15px]">
            
            {/* Section 1 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">01.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  General Information Only (No Bespoke Advice)
                </h2>
              </div>
              <p>
                All materials, commentary, rate indications, product descriptions, and interactive calculations presented on this website are provided for general educational and informational orientation only.
              </p>
              <p>
                Nothing contained on this website constitutes an offer, solicitation, or recommendation to buy or sell any security, financial instrument, or insurance product, nor does it constitute formal tax, legal, or investment counseling. Individual circumstances vary widely; you should seek independent, verified counsel suited to your specific personal balance sheet before taking financial action.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">02.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  Regulatory Status & Practice Scope
                </h2>
              </div>
              <p>
                <strong className="text-brand-primary font-medium">Shaurya Investments</strong> operates as an independent financial consultancy and mutual fund distributor under the direct guidance of <strong className="text-brand-primary font-medium">{companyData.owner}</strong>, who offers 25 years of continuous advisory experience in Malad East, Mumbai.
              </p>
              <div className="p-4 bg-sand/60 border border-stone rounded-sm text-xs text-brand-secondary space-y-2">
                <p className="font-semibold text-brand-primary uppercase tracking-wider text-[11px]">Explicit Regulatory Clarifications:</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>
                    <strong className="text-brand-primary">Not a SEBI-Registered Investment Adviser:</strong> Shaurya Investments does not hold registration as a SEBI Registered Investment Adviser (RIA) and does not charge fee-only fiduciary advisory retainers under SEBI (Investment Advisers) Regulations.
                  </li>
                  <li>
                    <strong className="text-brand-primary">Mutual Fund Distribution:</strong> Mutual fund services are provided in the capacity of a distributor facilitating client transactions in regular schemes.
                  </li>
                  <li>
                    <strong className="text-brand-primary">No Invented Regulatory Registrations:</strong> We do not publish unverified ARN numbers, sub-broker licenses, or institutional underwriting charters on this site.
                  </li>
                  <li>
                    <strong className="text-brand-primary">No Fiduciary Claim:</strong> We operate strictly as an independent distributor and financial facilitator, maintaining honest, client-centric guidance.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4 border-l-4 border-l-gold">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">03.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  Loans & Credit Facilities Disclosure
                </h2>
              </div>
              <p>
                Regarding all credit services (Home Loans, Personal Loans, Business Loans):
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-brand-primary font-medium">Underwriting Discretion:</strong> Loan sanction, loan-to-value (LTV) limits, floating/fixed interest rates, processing charges, administrative fees, documentation requirements, and disbursement schedules are determined solely and exclusively by the lending institutions (banks, housing finance companies, or NBFCs).
                </li>
                <li>
                  <strong className="text-brand-primary font-medium">No Sanction Guarantee:</strong> Shaurya Investments provides advisory structuring and document preparation. We do not guarantee approval, sanction, or specific terms from any bank or financial institution.
                </li>
                <li>
                  <strong className="text-brand-primary font-medium">Credit Risk:</strong> Loan defaults or delays in EMI repayment impact the borrower's credit score (such as CIBIL) and may trigger statutory recovery proceedings by the lending institution.
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">04.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  Mutual Funds & Market Risk Disclosure
                </h2>
              </div>
              <p className="font-medium text-brand-primary">
                Mutual Fund investments are subject to market risks; read all scheme-related documents carefully before investing.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-brand-primary font-medium">Capital Volatility:</strong> The Net Asset Value (NAV) of mutual fund units fluctuates in response to equity market conditions, interest rate movements, credit events, and general macroeconomic developments.
                </li>
                <li>
                  <strong className="text-brand-primary font-medium">No Assured Returns:</strong> Neither mutual fund asset management companies (AMCs) nor Shaurya Investments guarantee any specific rate of return, capital preservation, or dividends.
                </li>
                <li>
                  <strong className="text-brand-primary font-medium">Past Performance:</strong> Historical performance, track records, or category returns are not indicative of future results and cannot be relied upon as a guarantee.
                </li>
                <li>
                  <strong className="text-brand-primary font-medium">Offer Documents:</strong> Investors are advised to examine the Scheme Information Document (SID), Key Information Memorandum (KIM), and Statement of Additional Information (SAI) issued by the AMC.
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">05.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  SIP & Calculator Disclaimers
                </h2>
              </div>
              <p>
                Our interactive EMI and SIP calculators are purely mathematical illustrations:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-brand-primary font-medium">SIP Wealth Projections:</strong> Apply a standard monthly compounding formula based on a static, user-selected expected rate. Equity mutual funds never produce linear, constant annual returns; actual historical returns exhibit volatility and market cycle corrections.
                </li>
                <li>
                  <strong className="text-brand-primary font-medium">EMI Calculations:</strong> Do not account for prospective changes in floating repo rates, prepayment penalties, statutory stamp duty, or insurance riders that your lender may apply.
                </li>
              </ul>
              <p className="text-xs">
                Calculator outputs do not represent quotes, commitments, or promises of performance by Shaurya Investments.
              </p>
            </div>

            {/* Section 6 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">06.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  LIC Life Insurance Solicitation & Policy Terms
                </h2>
              </div>
              <p>
                Insurance is the subject matter of solicitation. Policy information and servicing assistance provided by Shaurya Investments for Life Insurance Corporation of India (LIC) plans are governed strictly by:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The terms, conditions, mortality tables, policy exclusions, and surrender values stipulated in the official policy document issued by LIC.</li>
                <li>All decisions regarding policy issuance, medical underwriting requirements, bonus rates, and claim settlements rest exclusively with LIC.</li>
                <li>Shaurya Investments acts in an advisory and policyholder facilitation capacity and does not underwrite insurance risk.</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">07.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  Independent Evaluation Encouraged
                </h2>
              </div>
              <p>
                Every visitor, prospective borrower, and investor is strongly encouraged to conduct an independent evaluation of their financial needs, risk tolerance, and time horizon. Please review all primary loan sanction letters, scheme information documents, and insurance policy schedules thoroughly before executing agreements or transferring funds.
              </p>
            </div>

            {/* Section 8 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">08.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  Contact for Compliance & Disclosures
                </h2>
              </div>
              <p>
                For any inquiries regarding this Financial Disclaimer or our advisory practice, please contact:
              </p>
              <div className="p-4 bg-sand/60 border border-stone rounded-sm space-y-2 text-xs">
                <p><strong className="text-brand-primary">Shaurya Investments</strong></p>
                <p>Principal Consultant: <span className="text-brand-primary font-medium">{companyData.owner}</span></p>
                <p>Physical Practice: {companyData.location.full}</p>
                <p>Direct Phone: <a href={`tel:${companyData.phoneRaw}`} className="text-gold font-medium hover:underline">{companyData.phone}</a></p>
                <p>Direct Email: <a href={`mailto:${companyData.email}`} className="text-gold font-medium hover:underline">{companyData.email}</a></p>
              </div>
              <div className="pt-2 text-xs text-brand-secondary/80 italic">
                * Note: These legal and disclosure pages represent draft informational content prepared for Shaurya Investments and are subject to formal business-owner and qualified legal review prior to final regulatory filing.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Direct Contact CTA */}
      <ContactCTA
        title="Need Advice Grounded in Realistic Discipline?"
        subtitle="We discuss numbers honestly and without false promises. Consult directly with Santosh D. Chavan."
        primaryLabel="Message on WhatsApp"
        secondaryLabel="Call Direct Office"
      />
    </div>
  );
}
