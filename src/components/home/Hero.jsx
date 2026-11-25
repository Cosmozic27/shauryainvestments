import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Award, 
  MapPin, 
  ShieldCheck, 
  Building2, 
  Coins, 
  FileText 
} from 'lucide-react';
import Button from '../common/Button';
import NumberCounter from '../common/NumberCounter';
import ImageMaskReveal from '../common/ImageMaskReveal';
import ParallaxImage from '../common/ParallaxImage';
import { companyData } from '../../data/companyData';
import { useLoader } from '../../context/LoaderContext';
import ArchitecturalHeroBackground from '../common/ArchitecturalHeroBackground';

// Refined editorial motion easing curves
const easeCurve = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeCurve },
  },
};

const lineRevealItem1 = {
  hidden: { opacity: 0, y: '105%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeCurve },
  },
};

const lineRevealItem2 = {
  hidden: { opacity: 0, y: '105%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeCurve },
  },
};

export default function Hero() {
  const { loaderDone } = useLoader();
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // The animation triggers strictly after the intro loader has completed its exit transition,
  // or immediately if reduced motion is preferred or if navigating back to Home after initial load.
  const shouldAnimate = prefersReducedMotion || loaderDone;

  return (
    <section 
      id="hero" 
      data-theme="dark"
      data-nav-contrast="dark"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0B1424] text-[#F5F0E7] scroll-mt-28"
    >
      
      {/* Designer-Quality Architectural Hero Background Composition */}
      <ArchitecturalHeroBackground variant="home" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Authoritative Editorial Copy with Progressive Line-by-Line Entrance */}
          <motion.div 
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            variants={containerVariants}
            className="lg:col-span-7 text-left space-y-6"
          >
            
            {/* 1. Trust Eyebrow Badge */}
            <motion.div 
              variants={fadeUpItem}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#14243B] border border-gold/40 shadow-soft"
            >
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#F5F0E7]">
                Santosh D. Chavan · 25 Years of Trusted Advisory
              </span>
            </motion.div>

            {/* 2. Main Headline with Smooth Progressive Line-by-Line Mask Reveal (no clipped descenders) */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-[#F5F0E7] leading-[1.14] tracking-tight">
              {/* Line 1: Your Financial Goals. */}
              <span className="block overflow-hidden py-1.5 -my-1.5">
                <motion.span
                  variants={lineRevealItem1}
                  className="block will-change-transform"
                >
                  Your Financial Goals.
                </motion.span>
              </span>

              {/* Line 2: Our Commitment. (Highlighted Gold Phrase) */}
              <span className="block overflow-hidden pt-1 pb-3 -mb-3">
                <motion.span
                  variants={lineRevealItem2}
                  className="block font-normal italic text-gold will-change-transform"
                >
                  Our Commitment.
                </motion.span>
              </span>
            </h1>

            {/* 3. Editorial Lead Paragraph */}
            <motion.p 
              variants={fadeUpItem}
              className="text-base sm:text-lg text-[#B8C0CC] leading-relaxed max-w-xl font-light"
            >
              For over two and a half decades, Shaurya Investments has provided bespoke, measured financial advisory to families and businesses across Mumbai. We harmonize debt financing, wealth compounding, and asset protection under one disciplined philosophy.
            </motion.p>

            {/* 4. Refined Calls to Action */}
            <motion.div 
              variants={fadeUpItem}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Button
                to="/services"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="shadow-sm"
              >
                Explore Advisory Verticals
              </Button>
              <Button
                to="/about"
                variant="outline"
                size="lg"
              >
                The Firm & Leadership
              </Button>
            </motion.div>

            {/* 5. Quick Credentials / Micro-Attributes */}
            <motion.div 
              variants={fadeUpItem}
              className="pt-6 border-t border-[#14243B] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#B8C0CC]"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Retail & Commercial Loans</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Mutual Funds & Systematic SIPs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>LIC Life Coverage</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Editorial Visual Showcase with Architectural Photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Decorative background framing */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-gold/20 via-transparent to-[#14243B]/30 rounded-sm -rotate-1 pointer-events-none" />
            
            {/* Primary Frame */}
            <div className="interactive-card card-glass-dark relative p-3 rounded-sm border border-gold/25 shadow-2xl overflow-hidden transition-all duration-300 hover:border-gold/50">
              
              {/* High-quality Architectural Photography Asset with Mask Reveal & Subtle Parallax */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden rounded-[2px] bg-[#060B14]">
                <ParallaxImage offset={12} className="w-full h-full">
                  <ImageMaskReveal
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                    alt="Modern architectural financial district institution"
                    className="w-full h-full"
                    imageClassName="opacity-85 hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </ParallaxImage>
                
                {/* Elegant Navy/Gold tonal overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060B14]/95 via-[#0B1424]/30 to-transparent pointer-events-none" />

                {/* Overlaid Badge on Top Right */}
                <div className="absolute top-4 right-4 bg-[#0B1424]/90 backdrop-blur-md border border-gold/40 px-3 py-1.5 rounded-sm flex items-center gap-2 z-10">
                  <Award className="w-3.5 h-3.5 text-gold" />
                  <span className="text-[11px] font-medium text-white tracking-wider uppercase">
                    25 Years Experience
                  </span>
                </div>

                {/* Overlaid Advisory Statement on Image Bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-sm bg-[#0B1424]/90 backdrop-blur-md border border-gold/20 text-[#F5F0E7] z-10">
                  <p className="text-[11px] uppercase tracking-widest text-gold font-semibold">
                    Santosh D. Chavan
                  </p>
                  <p className="font-serif text-base font-medium mt-0.5 text-[#F5F0E7]/95">
                    "Prudent guidance, transparent terms, and multigenerational security."
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-[#B8C0CC]">
                    <MapPin className="w-3 h-3 text-gold" />
                    <span>Kurar Village, Malad East, Mumbai</span>
                  </div>
                </div>

              </div>

              {/* Lower Card Bar */}
              <div className="p-4 grid grid-cols-2 gap-3 text-left">
                <div className="border-r border-gold/20 pr-2">
                  <span className="block text-[10px] uppercase tracking-wider text-[#B8C0CC] font-medium">Practice Tenure</span>
                  <span className="font-serif text-lg font-bold text-[#F5F0E7]">
                    <NumberCounter target={25} suffix=" Years" />
                  </span>
                  <span className="block text-[11px] text-[#B8C0CC]">Continuous Guidance</span>
                </div>
                <div className="pl-2">
                  <span className="block text-[10px] uppercase tracking-wider text-[#B8C0CC] font-medium">Advisory Focus</span>
                  <span className="font-serif text-lg font-bold text-[#F5F0E7]">
                    <NumberCounter target={6} suffix=" Verticals" />
                  </span>
                  <span className="block text-[11px] text-[#B8C0CC]">Loans, Wealth & LIC</span>
                </div>
              </div>

            </div>

          </motion.div>

        </div>

        {/* Bottom Editorial Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-16 pt-8 border-t border-stone grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
        >
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold">Experience</span>
            <p className="font-serif text-2xl font-bold text-brand-primary">
              <NumberCounter target={25} suffix=" Years" />
            </p>
            <p className="text-xs text-brand-secondary">Navigating diverse economic cycles</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold">Commitment</span>
            <p className="font-serif text-2xl font-bold text-brand-primary">Transparent</p>
            <p className="text-xs text-brand-secondary">Clear documentation & counsel</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold">Scope</span>
            <p className="font-serif text-2xl font-bold text-brand-primary">
              <NumberCounter target={6} suffix=" Portfolios" />
            </p>
            <p className="text-xs text-brand-secondary">Loans, Mutual Funds, SIPs & LIC</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold">Location</span>
            <p className="font-serif text-2xl font-bold text-brand-primary">Malad East</p>
            <p className="text-xs text-brand-secondary">Shivaji Nagar, Kurar Village, Mumbai</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
