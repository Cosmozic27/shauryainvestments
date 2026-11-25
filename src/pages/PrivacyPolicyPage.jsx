import React from 'react';
import PageHeader from '../components/common/PageHeader';
import ContactCTA from '../components/common/ContactCTA';
import SEO from '../components/common/SEO';
import { Shield, Lock, FileText, Smartphone, Server, AlertTriangle, Mail } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 2026";

  return (
    <div className="bg-champagne min-h-screen">
      <SEO
        title="Privacy Policy"
        description="A transparent overview of how Shaurya Investments handles visitor information, direct contact communications, and browser-based financial calculators."
        canonicalPath="/privacy-policy"
      />
      <PageHeader
        badge="Legal & Compliance"
        title="Privacy Policy"
        description="A transparent overview of how Shaurya Investments handles visitor information, contact communications, and browser-based financial calculators."
        breadcrumbs={[{ label: "Legal" }, { label: "Privacy Policy" }]}
      />

      {/* Main Content Area */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Document Summary Card */}
          <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm shadow-soft mb-12">
            <div className="flex items-center gap-3 text-gold mb-3">
              <Shield className="w-5 h-5 shrink-0" />
              <span className="text-xs uppercase tracking-widest font-semibold">Privacy Commitment</span>
            </div>
            <p className="text-sm text-brand-secondary leading-relaxed font-light">
              This Privacy Policy explains how <strong className="text-brand-primary font-medium">{companyData.name}</strong> (led by {companyData.owner}) collects, uses, and safeguards information when you visit our website or communicate with us. We believe in complete transparency and have designed this policy to reflect the true technical operations of our website.
            </p>
            <div className="mt-4 pt-4 border-t border-stone/60 flex items-center justify-between text-xs text-brand-secondary">
              <span>Jurisdiction: Mumbai, Maharashtra, India</span>
              <span className="font-medium text-brand-primary">Last Updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Numbered Legal Sections */}
          <div className="space-y-10 text-brand-secondary leading-relaxed font-light text-sm sm:text-[15px]">
            
            {/* Section 1 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">01.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  Nature of Website & Account Structure
                </h2>
              </div>
              <p>
                The Shaurya Investments website is an informational and advisory showcase. It serves to introduce our 25-year financial consultancy practice in Malad East, Mumbai, and outline our guidance across loans, mutual funds, SIPs, and LIC insurance.
              </p>
              <div className="p-4 bg-sand/60 border border-stone rounded-sm text-xs text-brand-secondary space-y-1.5">
                <p className="font-medium text-brand-primary">What Our Website Does Not Do:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>We do not operate a user account system, client login portal, or registration dashboard.</li>
                  <li>We do not store passwords, profile credentials, or transactional banking records on our web servers.</li>
                  <li>We do not maintain an automated online loan sanction engine or transaction execution gateway on this site.</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">02.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  Voluntary Information You May Share
                </h2>
              </div>
              <p>
                Because our website does not utilize online data capture forms, we only receive personal information that you deliberately and voluntarily choose to share with us via:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-brand-primary font-medium">Direct Telephone Calls:</strong> When you call us at <span className="text-brand-primary font-medium">{companyData.phone}</span> to discuss loan options, investment queries, or insurance policy servicing.
                </li>
                <li>
                  <strong className="text-brand-primary font-medium">Direct WhatsApp Messages:</strong> When you initiate a chat through our website's WhatsApp buttons or direct link to discuss financial queries.
                </li>
                <li>
                  <strong className="text-brand-primary font-medium">Direct Email Correspondence:</strong> When you write to us at <span className="text-brand-primary font-medium">{companyData.email}</span> with documents or inquiries.
                </li>
              </ul>
              <p>
                Depending on your inquiry, you may share your name, phone number, email address, basic financial requirements, or document copies required for loan underwriting or KYC procedures.
              </p>
            </div>

            {/* Section 3 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">03.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  How We Use Your Contact Information
                </h2>
              </div>
              <p>
                Information you provide through communication channels is used strictly and exclusively for:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Answering your specific questions regarding loan options, mutual funds, or LIC policies.</li>
                <li>Evaluating prospective loan eligibility criteria against institutional lending guidelines.</li>
                <li>Assisting with procedural documentation, KYC verification, and application submissions.</li>
                <li>Providing ongoing policyholder service, maturity assistance, or claim guidance for LIC insurance.</li>
              </ul>
              <p>
                <strong className="text-brand-primary font-medium">No Sale or Unauthorized Sharing:</strong> We do not sell, rent, lease, or distribute your contact records or personal information to third-party telemarketers or external lead aggregators.
              </p>
            </div>

            {/* Section 4 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">04.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  Client-Side Financial Calculators (EMI & SIP)
                </h2>
              </div>
              <p>
                Our interactive EMI and SIP calculators are built with client-side JavaScript. This means:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>All calculations are performed entirely within your web browser on your own device.</li>
                <li>Input values (such as loan principal, interest rates, tenure, or monthly SIP amounts) are never transmitted to, recorded by, or stored on our servers.</li>
                <li>The calculators are purely illustrative educational tools intended to help you understand mathematical amortization and compounding.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4 border-l-4 border-l-gold">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">05.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  Critical Advisory: Sensitive Financial Credentials
                </h2>
              </div>
              <div className="flex items-start gap-3 p-4 bg-sand/80 border border-stone rounded-sm">
                <AlertTriangle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div className="space-y-1.5 text-xs text-brand-secondary">
                  <p className="font-medium text-brand-primary">Never Share Sensitive Banking Credentials:</p>
                  <p>
                    Please never send internet banking passwords, ATM PINs, UPI PINs, credit card CVVs, or One-Time Passwords (OTPs) through WhatsApp, email, or over the phone. Shaurya Investments will never solicit or ask for your sensitive authorization codes.
                  </p>
                </div>
              </div>
              <p className="text-xs">
                Official documentation required for formal loan processing or mutual fund KYC (such as PAN cards, Aadhaar documents, income tax returns, and bank statements) should only be submitted via secure, verified channels after prior consultation with our office.
              </p>
            </div>

            {/* Section 6 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">06.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  Third-Party Services & Technical Infrastructure
                </h2>
              </div>
              <p>
                While navigating our website or reaching out to us, you may interact with independent third-party platforms that operate under their own privacy practices:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-brand-primary font-medium">WhatsApp / Meta:</strong> When you initiate a conversation via WhatsApp, Meta processes your communications subject to the WhatsApp Privacy Policy.
                </li>
                <li>
                  <strong className="text-brand-primary font-medium">Email & Telecommunication Providers:</strong> Standard email systems (such as Google Gmail) and cellular networks process message routing and call metadata under their regulatory standards.
                </li>
                <li>
                  <strong className="text-brand-primary font-medium">Hosting & Content Delivery:</strong> Our website hosting service may log standard technical data (such as IP addresses, browser types, and access timestamps) for server maintenance, DDoS mitigation, and operational diagnostics.
                </li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">07.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  Data Security & Prudent Retention
                </h2>
              </div>
              <p>
                We employ reasonable administrative and physical safeguards to protect information received through direct client inquiries. Because we are an independent consultancy and not a software platform, client records for active applications are maintained strictly for legitimate advisory evaluation, documentation handholding, and statutory record-keeping.
              </p>
              <p>
                We do not claim formal ISO certifications or institutional cloud storage standards that do not reflect our direct physical consultancy model. We maintain all client information with seasoned confidentiality rooted in our 25-year local advisory practice.
              </p>
            </div>

            {/* Section 8 */}
            <div className="bg-cream border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-lg font-bold text-gold">08.</span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-primary">
                  Your Rights & Contacting Us
                </h2>
              </div>
              <p>
                You may at any time request an update, correction, or deletion of the contact records you have voluntarily shared with our consultancy by contacting us directly:
              </p>
              <div className="p-4 bg-sand/60 border border-stone rounded-sm space-y-2 text-xs">
                <p><strong className="text-brand-primary">Shaurya Investments</strong></p>
                <p>Principal Consultant: <span className="text-brand-primary font-medium">{companyData.owner}</span></p>
                <p>Office: {companyData.location.full}</p>
                <p>Phone: <a href={`tel:${companyData.phoneRaw}`} className="text-gold font-medium hover:underline">{companyData.phone}</a></p>
                <p>Email: <a href={`mailto:${companyData.email}`} className="text-gold font-medium hover:underline">{companyData.email}</a></p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Direct Contact CTA */}
      <ContactCTA
        title="Have Questions Regarding Privacy or Advisory Conduct?"
        subtitle="We welcome open, transparent dialogue with every client. Reach out directly to Santosh D. Chavan."
        primaryLabel="Message on WhatsApp"
        secondaryLabel="Call Direct Office"
      />
    </div>
  );
}
