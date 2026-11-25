import React from 'react';
import PageHeader from '../components/common/PageHeader';
import ContactCTA from '../components/common/ContactCTA';
import SEO from '../components/common/SEO';
import { Scale, FileCheck, AlertCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function TermsConditionsPage() {
  const lastUpdated = "November 2026";

  return (
    <div className="bg-champagne min-h-screen">
      <SEO
        title="Terms and Conditions"
        description="Governing terms, advisory boundaries, and operational guidelines for visitors accessing the Shaurya Investments website."
        canonicalPath="/terms-and-conditions"
      />
      <PageHeader
        badge="Legal & Compliance"
        title="Terms and Conditions"
        description="The governing terms, advisory boundaries, and operational guidelines for visitors accessing the Shaurya Investments website."
        breadcrumbs={[{ label: "Legal" }, { label: "Terms and Conditions" }]}
      />

      {/* Main Content Area */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Terms Overview Banner */}
          <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm shadow-soft mb-12">
            <div className="flex items-center gap-3 text-gold mb-3">
              <Scale className="w-5 h-5 shrink-0" />
              <span className="text-xs uppercase tracking-widest font-semibold">Terms of Use</span>
            </div>
            <p className="text-sm text-brand-secondary leading-relaxed font-light">
              Welcome to the website of <strong className="text-brand-primary font-medium">{companyData.name}</strong>. By accessing, browsing, or utilizing the informational resources on this website, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions. If you do not agree with these terms, please refrain from using this website.
            </p>
            <div className="mt-4 pt-4 border-t border-stone/60 flex items-center justify-between text-xs text-brand-secondary">
              <span>Governing Jurisdiction: Mumbai, Maharashtra, India</span>
              <span className="font-medium text-brand-primary">Last Updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Numbered Sections */}
          <div className="space-y-10 text-brand-secondary leading-relaxed font-light text-sm sm:text-[15px]">
            
            {/* Section 1 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">01.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  Informational Scope & General Purpose
                </h2>
              </div>
              <p>
                All materials, guides, figures, and overviews presented on this website are provided solely for general informational, educational, and introductory guidance. Nothing on this website constitutes a binding offer of financing, an underwriting guarantee, a prospectus, an invitation to subscribe to securities, or individualized tax or legal advice.
              </p>
              <p>
                Shaurya Investments operates as an independent financial consultancy and mutual fund distributor under the leadership of Santosh D. Chavan, with 25 years of practice in Malad East, Mumbai.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">02.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  Accuracy of Information & Content Updates
                </h2>
              </div>
              <p>
                While we endeavor to keep the material on this site accurate and up-to-date, financial regulations, taxation rules, lender benchmark rates (such as repo-linked lending rates), and mutual fund policies change over time.
              </p>
              <p>
                Shaurya Investments reserves the right to modify, revise, update, or discontinue any portion of this website or its descriptive content at any time without prior notice. Visitors are responsible for verifying terms directly with our office before making financial commitments.
              </p>
            </div>

            {/* Section 3 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">03.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  Limitations of Financial Calculators (EMI & SIP)
                </h2>
              </div>
              <p>
                The EMI and SIP calculators on this website are client-side mathematical simulation tools. They apply standard reducing balance and monthly compounding annuity-due formulas:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-brand-primary font-medium">EMI Calculations:</strong> Are illustrative estimates. Actual amortization schedules produced by banks or Non-Banking Financial Companies (NBFCs) may include broken-period interest, processing fees, GST, stamp duty, insurance, or daily-reducing balance adjustments.
                </li>
                <li>
                  <strong className="text-brand-primary font-medium">SIP Wealth Projections:</strong> Are hypothetical mathematical models based on user-entered constant annual rates. Equity mutual funds do not generate fixed, linear, or guaranteed returns. Actual returns fluctuate with market conditions and macroeconomic cycles.
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4 border-l-4 border-l-gold">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">04.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  Loans & Credit Advisory Boundaries
                </h2>
              </div>
              <p>
                Shaurya Investments provides facilitation, documentation guidance, and advisory coordination for retail and commercial loans. We explicitly state that:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-brand-primary font-medium">No Sanction Guarantee:</strong> Shaurya Investments does not sanction or disburse loans directly, nor do we guarantee approval from any financial institution.
                </li>
                <li>
                  <strong className="text-brand-primary font-medium">Sole Lender Discretion:</strong> All credit evaluations, eligibility limits, sanction terms, interest rates, processing fees, and disbursement timelines are at the sole discretion of the respective lending institution under its underwriting policies.
                </li>
                <li>
                  <strong className="text-brand-primary font-medium">Borrower Responsibility:</strong> Borrowers are solely responsible for verifying the terms of their sanction letter, loan agreement, foreclosure charges, and repayment obligations before signing.
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">05.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  Mutual Fund Distribution & Market Risks
                </h2>
              </div>
              <p>
                Mutual Fund investments are subject to market risks; please read all scheme-related documents carefully before investing.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Mutual fund units are not guaranteed deposits, and their Net Asset Value (NAV) may rise or fall depending on capital market factors.</li>
                <li>Past performance of any mutual fund scheme does not indicate or assure future returns.</li>
                <li>Shaurya Investments operates strictly as an independent mutual fund distributor and financial consultant. We do not provide guaranteed returns or claim status as a SEBI Registered Investment Adviser (RIA).</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">06.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  LIC Life Insurance Policy Guidance
                </h2>
              </div>
              <p>
                Insurance is the subject matter of solicitation. Procedural guidance and policy information for Life Insurance Corporation of India (LIC) plans are governed strictly by:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The specific terms, conditions, mortality tables, grace periods, and exclusion clauses defined in the official policy contract issued by LIC.</li>
                <li>All bonus declarations, surrender valuations, maturity proceeds, and claim settlement determinations are made exclusively by LIC.</li>
                <li>Shaurya Investments does not underwrite risk or issue insurance policies directly.</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">07.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  Third-Party Links & External Communications
                </h2>
              </div>
              <p>
                This website may contain links to third-party services, including WhatsApp (Meta), email services, and Google Maps. These external platforms are operated independently. Shaurya Investments has no control over the privacy practices, reliability, or availability of third-party networks and assumes no responsibility for third-party service disruptions.
              </p>
            </div>

            {/* Section 8 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">08.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  Intellectual Property & Permitted Personal Use
                </h2>
              </div>
              <p>
                The name "Shaurya Investments", the official metallic-gold eagle/growth arrow emblem, logos, editorial website copy, layout designs, and custom software components are the intellectual property of Shaurya Investments.
              </p>
              <p>
                Visitors are granted a limited, non-exclusive, non-transferable license to access and view website content solely for personal, non-commercial, and informational purposes. You may not copy, reproduce, modify, distribute, or reverse-engineer website materials without prior written consent.
              </p>
            </div>

            {/* Section 9 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">09.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  Limitation of Liability
                </h2>
              </div>
              <p>
                To the fullest extent permitted under applicable Indian law, Shaurya Investments and its principal consultant Santosh D. Chavan shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Your access to, reliance upon, or inability to use this website or its illustrative calculators.</li>
                <li>Credit decisions, rejection of loan applications, or alteration of terms by third-party lending institutions.</li>
                <li>Investment losses or market volatility experienced in mutual fund portfolios.</li>
                <li>Technical interruptions, transmission errors, or delays across public telecommunications networks.</li>
              </ul>
              <p className="text-xs italic text-brand-secondary">
                Nothing in these Terms and Conditions shall limit or exclude any statutory consumer rights that cannot be lawfully waived or excluded under applicable Indian laws.
              </p>
            </div>

            {/* Section 10 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">10.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  Governing Law & Contact Information
                </h2>
              </div>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising out of or related to website usage shall be subject to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra, India.
              </p>
              <div className="p-4 bg-sand/60 border border-stone rounded-sm space-y-2 text-xs">
                <p><strong className="text-brand-primary">Shaurya Investments</strong></p>
                <p>Principal Consultant: <span className="text-brand-primary font-medium">{companyData.owner}</span></p>
                <p>Physical Practice: {companyData.location.full}</p>
                <p>Direct Phone: <a href={`tel:${companyData.phoneRaw}`} className="text-gold font-medium hover:underline">{companyData.phone}</a></p>
                <p>Direct Email: <a href={`mailto:${companyData.email}`} className="text-gold font-medium hover:underline">{companyData.email}</a></p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Direct Contact CTA */}
      <ContactCTA
        title="Require Clarification on Advisory Terms?"
        subtitle="We value clarity and ethical practice. Contact our office directly for any questions regarding our terms."
        primaryLabel="Message on WhatsApp"
        secondaryLabel="Call Direct Office"
      />
    </div>
  );
}
