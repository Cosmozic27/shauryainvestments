import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Scale, 
  HeartHandshake, 
  MapPin, 
  Target, 
  FileText, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Award,
  Sparkles
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import ContactCTA from '../components/common/ContactCTA';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../components/common/SEO';
import NumberCounter from '../components/common/NumberCounter';
import TiltCard from '../components/common/TiltCard';
import ImageMaskReveal from '../components/common/ImageMaskReveal';
import ParallaxImage from '../components/common/ParallaxImage';
import WhatsAppButton from '../components/common/WhatsAppButton';
import { companyData } from '../data/companyData';
import ArchitecturalHeroBackground from '../components/common/ArchitecturalHeroBackground';

export default function AboutPage() {
  const philosophies = [
    {
      icon: ShieldCheck,
      title: "Unyielding Trust",
      subtitle: "Decades of Consistency",
      description: "Financial advice is only as valuable as the integrity behind it. We never recommend a borrowing obligation, mutual fund scheme, or insurance policy that we would not comfortably recommend to our own family."
    },
    {
      icon: Scale,
      title: "Principled Transparency",
      subtitle: "Clarity Without Surprises",
      description: "We explain interest rate mechanisms, processing fees, loan covenants, and market risk parameters in straightforward language, ensuring you make informed decisions free of obscure clauses or hidden costs."
    },
    {
      icon: HeartHandshake,
      title: "Personalised Guidance",
      subtitle: "Tailored to Your Life",
      description: "No two families share the same cash flows or milestone horizons. Every strategy—whether structuring a home loan or mapping an SIP roadmap—is individually calibrated to your real-world affordability."
    }
  ];

  const differentiators = [
    "25 years of continuous financial advisory experience in Mumbai",
    "Comprehensive guidance across loans, mutual funds, SIPs, and LIC insurance",
    "Direct, personal access to principal consultant Santosh D. Chavan",
    "Accessible physical office in Kurar Village, Shivaji Nagar, Malad East",
    "Unbiased product comparison tailored to client affordability",
    "Strict professional ethics and confidential document handling"
  ];

  return (
    <div className="w-full bg-[#0B1424] text-[#F5F0E7]">
      <SEO
        title="About Santosh D. Chavan & Our Advisory Practice"
        description="Learn about Shaurya Investments and founder Santosh D. Chavan. 25 years of disciplined, client-first financial consultancy in Kurar Village, Malad East, Mumbai."
        canonicalPath="/about"
      />
      
      {/* Editorial Page Header with Tailored Architectural Background */}
      <PageHeader
        variant="about"
        badge="Company Profile"
        title="Twenty-Five Years of Disciplined Financial Guidance"
        description="Shaurya Investments is an independent financial advisory practice rooted in Malad East, Mumbai. Under the stewardship of Santosh D. Chavan, we help individuals, families, and businesses make measured, well-structured financial decisions."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* SECTION 1: Full-Bleed Architectural Photographic Story Background */}
      <section 
        data-theme="dark"
        data-nav-contrast="dark"
        data-contrast-zone="dark"
        className="py-20 md:py-28 bg-[#0B1424] text-[#F5F0E7] border-b border-gold/20 relative overflow-hidden"
      >
        {/* Full-bleed high-resolution architectural background image covering entire section */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.1]"
          />
          {/* Responsive Midnight Navy Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1424] via-[#0B1424]/95 to-[#14243B]/85" />
          {/* Architectural radial dot grid */}
          <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#C6A66B_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Narrative & History */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-gold" />
                <span className="text-xs uppercase font-semibold tracking-widest text-gold">
                  Our Story
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F0E7] tracking-tight leading-tight">
                Built on Integrity, <br />
                <span className="text-gold italic font-normal">Sustained by Generations.</span>
              </h2>

              <div className="w-16 h-0.5 bg-gold/50 my-4" />

              <div className="space-y-4 text-base text-[#B8C0CC] leading-relaxed font-normal">
                <p>
                  <strong className="text-[#F5F0E7] font-semibold">Shaurya Investments</strong> began with a clear purpose: to demystify financial products and provide working families and enterprise owners in Mumbai with dependable, unhurried counsel.
                </p>
                <p>
                  Over a quarter-century of continuous practice in <strong className="text-[#F5F0E7] font-semibold">Kurar Village, Malad East</strong>, we have walked alongside clients through every stage of their financial lives—securing foundational home loans, navigating complex paperwork, weathering market cycles with disciplined mutual funds, and safeguarding families through LIC life insurance.
                </p>
                <p className="text-[#B8C0CC]/90">
                  We reject the prevailing culture of aggressive sales targets. Instead, we remain an independent advisory boutique where clients speak directly with principal consultant Santosh D. Chavan and receive advice that prioritizes their long-term security.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <WhatsAppButton 
                  type="general" 
                  label="Speak With Our Principal Consultant" 
                  className="shadow-soft"
                />
              </div>
            </motion.div>

            {/* Right: Architectural / Advisory Image with Frame & Parallax */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="relative group">
                {/* Decorative gold border offset frame */}
                <div className="absolute -inset-3 border border-gold/40 rounded-sm pointer-events-none group-hover:border-gold/60 transition-colors" />
                
                {/* Card Container with Glassmorphism */}
                <div className="card-glass-dark p-3 rounded-sm border border-gold/30 shadow-2xl overflow-hidden gold-sweep-active">
                  <div className="relative h-96 sm:h-[420px] w-full rounded-sm overflow-hidden bg-[#060B14]">
                    <ParallaxImage offset={14} className="w-full h-full">
                      <ImageMaskReveal
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                        alt="Shaurya Investments Advisory Practice"
                        className="w-full h-full"
                        imageClassName="hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </ParallaxImage>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060B14]/90 via-[#0B1424]/30 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-[#F5F0E7] z-10">
                      <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block mb-1">
                        Independent Consultancy
                      </span>
                      <p className="font-serif text-lg font-medium leading-snug">
                        25 Years of Measured Financial Stewardship
                      </p>
                      <p className="text-xs text-[#B8C0CC] mt-0.5">
                        Kurar Village, Malad East, Mumbai
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: Atmospheric Deep Navy Experience Highlight */}
      <section 
        data-theme="dark"
        data-nav-contrast="dark"
        data-contrast-zone="dark"
        className="py-20 md:py-28 bg-[#0B1424] text-[#F5F0E7] relative overflow-hidden border-b border-gold/20"
      >
        <ArchitecturalHeroBackground variant="about" className="opacity-70" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14243B] border border-gold/40 text-gold text-xs uppercase font-semibold tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Proven Enduring Stability</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F5F0E7] leading-tight">
              25 YEARS OF EXPERIENCE
            </h2>

            <p className="font-serif italic text-xl sm:text-2xl text-gold-light max-w-2xl mx-auto font-normal">
              "Your Financial Goals. Our Commitment."
            </p>

            <p className="text-base sm:text-lg text-[#B8C0CC] leading-relaxed font-light max-w-2xl mx-auto">
              Through shifting economic environments, fluctuating interest regimes, and evolving financial regulations, Shaurya Investments has provided grounded, consistent advisory to thousands of families and businesses.
            </p>

            {/* Credential Metrics Row with Gold Light Sweep & Glassmorphism */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-gold/20 mt-10">
              <div className="card-glass-dark p-4 rounded-sm border border-gold/25 gold-sweep-active">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-gold block">
                  <NumberCounter target={25} suffix="+" />
                </span>
                <span className="text-xs uppercase tracking-wider text-[#B8C0CC] mt-1 block">Years of Advisory</span>
              </div>
              <div className="card-glass-dark p-4 rounded-sm border border-gold/25">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-gold block">6</span>
                <span className="text-xs uppercase tracking-wider text-[#B8C0CC] mt-1 block">Dedicated Verticals</span>
              </div>
              <div className="card-glass-dark p-4 rounded-sm border border-gold/25">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-gold block">100%</span>
                <span className="text-xs uppercase tracking-wider text-[#B8C0CC] mt-1 block">Personal Attention</span>
              </div>
              <div className="card-glass-dark p-4 rounded-sm border border-gold/25">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-gold block">1</span>
                <span className="text-xs uppercase tracking-wider text-[#B8C0CC] mt-1 block">Trusted Partner</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Our Philosophy with Designed Warm Stone Background (25% Warm Neutral Experience) */}
      <section 
        data-theme="light"
        data-nav-contrast="light"
        data-contrast-zone="light"
        className="py-20 md:py-28 bg-[#E6DED0] text-[#17243A] border-b border-[#D2C7B6] relative overflow-hidden"
      >
        {/* Subtle architectural radial grid & soft ambient glow */}
        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#17243A_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#F5F0E7]/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            subtitle="Guiding Principles"
            title="Our Advisory Philosophy"
            description="The core values that define every conversation, recommendation, and application we undertake."
            align="center"
            isLight={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {philosophies.map((item, idx) => {
              const Icon = item.icon;
              const isCenter = idx === 1;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`card-glass-light p-8 rounded-sm flex flex-col justify-between ${
                    isCenter ? 'gold-sweep-active' : ''
                  }`}
                >
                  <div>
                    <div className="w-14 h-14 rounded-sm bg-[#F5F0E7] border border-[#D2C7B6] flex items-center justify-center text-[#17243A] mb-6 shadow-sm">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-[#17243A] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#404E63] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#D2C7B6] flex items-center gap-2 text-xs font-medium text-[#17243A]">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>Practiced without compromise</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Differentiators Grid with Glassmorphism */}
          <div className="mt-16 card-glass-light p-8 rounded-sm">
            <h4 className="font-serif text-xl font-semibold text-[#17243A] mb-6 text-center">
              The Shaurya Investments Standard
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {differentiators.map((diff, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-[#F5F0E7]/80 rounded-sm border border-[#D2C7B6]">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-[#17243A] leading-relaxed">
                    {diff}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Founder Profile with Designed Background */}
      <section 
        data-theme="dark"
        data-nav-contrast="dark"
        data-contrast-zone="dark"
        className="py-20 md:py-28 bg-[#14243B] text-[#F5F0E7] border-b border-gold/20 relative overflow-hidden"
      >
        {/* Subtle architectural dot grid */}
        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#C6A66B_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Founder Photographic / Seal Badge Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <TiltCard maxTilt={2.5}>
                <div className="relative">
                  <div className="absolute -inset-3 border border-gold/40 rounded-sm pointer-events-none" />

                  <div className="interactive-card relative card-glass-dark p-4 rounded-sm border border-gold/30 shadow-2xl overflow-hidden gold-sweep-active">
                    
                    {/* Genuine Founder Photograph / Crest Badge Placeholder */}
                    <div className="relative h-80 sm:h-96 w-full rounded-sm bg-gradient-to-b from-[#0B1424] via-[#14243B] to-[#060B14] flex flex-col items-center justify-center text-center p-6 border border-gold/20 overflow-hidden group">
                      
                      {/* Background watermark crest */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                        <img 
                          src="/assets/logo/logo-symbol.png" 
                          alt="" 
                          aria-hidden="true" 
                          className="w-64 h-64 object-contain filter brightness-125"
                        />
                      </div>

                      {/* Official Emblem Seal Badge */}
                      <div className="relative z-10 w-20 h-20 rounded-full bg-[#0B1424] border-2 border-gold flex items-center justify-center mb-4 shadow-elevated p-3 overflow-hidden">
                        <img 
                          src="/assets/logo/logo-symbol.png" 
                          alt="Shaurya Investments Official Emblem" 
                          className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                        />
                      </div>

                      <div className="relative z-10 space-y-1">
                        <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block">
                          Founder & Principal Consultant
                        </span>
                        <h4 className="font-serif text-2xl font-semibold text-[#F5F0E7]">
                          {companyData.owner}
                        </h4>
                        <p className="text-xs text-[#B8C0CC] font-light">
                          Founder, Shaurya Investments
                        </p>
                        <p className="text-[11px] text-gold font-medium pt-1">
                          25 Years of Continuous Advisory
                        </p>
                      </div>

                      <div className="relative z-10 mt-6 pt-4 border-t border-gold/20 text-[11px] text-[#B8C0CC] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>Malad East, Mumbai</span>
                      </div>
                    </div>

                    {/* Profile Dossier Strip */}
                    <div className="p-4 grid grid-cols-2 gap-3 text-left">
                      <div className="border-r border-gold/20 pr-2">
                        <span className="text-[10px] uppercase tracking-wider text-[#B8C0CC] block font-medium">Practice Tenure</span>
                        <span className="font-serif text-lg font-bold text-[#F5F0E7]">
                          <NumberCounter target={25} suffix=" Years" />
                        </span>
                        <span className="text-[11px] text-[#B8C0CC] block">Advisory Experience</span>
                      </div>
                      <div className="pl-2">
                        <span className="text-[10px] uppercase tracking-wider text-[#B8C0CC] block font-medium">Location</span>
                        <span className="font-serif text-lg font-bold text-[#F5F0E7]">Malad East</span>
                        <span className="text-[11px] text-[#B8C0CC] block">Mumbai, India</span>
                      </div>
                    </div>

                  </div>
                </div>
              </TiltCard>
            </motion.div>

            {/* Right: Narrative Profile & Quote */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-gold" />
                <span className="text-xs uppercase font-semibold tracking-widest text-gold">
                  Leadership Profile
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#F5F0E7] tracking-tight leading-snug">
                Santosh D. Chavan
              </h2>
              <p className="text-xs uppercase tracking-wider text-gold font-semibold -mt-3">
                Principal Consultant & Founder
              </p>

              <div className="space-y-4 text-base text-[#B8C0CC] leading-relaxed font-normal">
                <p>
                  With over two decades of handholding clients through intricate financial decisions, Santosh D. Chavan brings seasoned procedural knowledge across retail lending, corporate borrowing, mutual fund distribution, and Life Insurance Corporation of India (LIC) portfolios.
                </p>

                <p>
                  His advisory practice is anchored in straightforward communication. Rather than overwhelming clients with financial jargon, Mr. Chavan focuses on answering core practical questions: <em>What is the total cost of borrowing? How does this investment fit your milestone timeline? How will your family be protected if circumstances change?</em>
                </p>

                <div className="p-5 bg-[#0B1424]/90 border-l-2 border-gold rounded-r-sm italic text-sm text-[#F5F0E7] leading-relaxed border border-gold/20">
                  "Our client relationships span decades. When a client took a home loan through us 20 years ago and now returns to start their son's first SIP, that continuity is the highest metric of success we could ever ask for."
                  <span className="block mt-2 font-normal text-xs text-[#B8C0CC] not-italic font-sans">
                    — Santosh D. Chavan, Founder
                  </span>
                </div>
              </div>

              <div className="pt-2 flex items-start gap-3 p-4 bg-[#0B1424]/90 border border-gold/25 rounded-sm">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div className="text-xs text-[#B8C0CC] leading-relaxed">
                  <strong className="text-[#F5F0E7] block text-sm font-semibold">Our Registered Practice Location</strong>
                  <span>{companyData.location.full}</span>
                  <span className="block text-[#B8C0CC]/80 mt-0.5">In-person consultations available by prior appointment.</span>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 5: Our Commitment & Closing Contact CTA (bg-navy) */}
      <ContactCTA
        title="Schedule a Personal Consultation With Santosh D. Chavan"
        subtitle="Visit our office at Kurar Village, Shivaji Nagar, Malad East, Mumbai to review your borrowing eligibility or establish a disciplined investment roadmap."
        variant="navy"
        whatsAppType="general"
        whatsAppLabel="Chat With Us on WhatsApp"
      />

    </div>
  );
}
