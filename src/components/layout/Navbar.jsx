import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from '../common/Logo';
import Button from '../common/Button';
import WhatsAppButton from '../common/WhatsAppButton';
import { companyData } from '../../data/companyData';

/**
 * Helper to detect whether the background behind a given viewport coordinate is dark or light.
 * Inspects:
 * 1. Explicit contrast zones ([data-nav-contrast], [data-contrast-zone]) by bounding rectangle
 *    (works reliably even if child overlays have pointer-events: none)
 * 2. Underlying DOM elements via elementsFromPoint
 * 3. Class patterns indicating dark navy backgrounds (.bg-navy, .bg-navy-900, etc.)
 * 4. Computed background color RGB luminance (< 0.45 = dark)
 */
function detectContrastAtPoint(x, y) {
  if (typeof document === 'undefined') return 'light';
  if (x < 0 || x > window.innerWidth || y < 0 || y > window.innerHeight) return 'light';

  try {
    // 1. Check explicit contrast zones by geometric bounding rect
    const contrastZones = document.querySelectorAll('[data-nav-contrast], [data-contrast-zone]');
    let bestZoneContrast = null;
    let bestZoneDepth = -1;

    for (const zone of contrastZones) {
      if (zone.closest('header') || zone.closest('[data-nav-skip]')) continue;
      const rect = zone.getBoundingClientRect();
      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        // Deeper in DOM tree has higher specificity
        let depth = 0;
        let parent = zone;
        while (parent) {
          depth++;
          parent = parent.parentElement;
        }
        if (depth > bestZoneDepth) {
          bestZoneDepth = depth;
          const val = zone.getAttribute('data-nav-contrast') || zone.getAttribute('data-contrast-zone');
          bestZoneContrast = val === 'dark' ? 'dark' : 'light';
        }
      }
    }

    if (bestZoneContrast) {
      return bestZoneContrast;
    }

    // 2. Fallback to elementsFromPoint
    const elements = document.elementsFromPoint(x, y);
    for (const el of elements) {
      // Skip the fixed header itself, loader overlay, and non-interactive overlays
      if (el.closest('header, [data-nav-skip], [aria-label*="Intro"], [class*="z-[99999]"]')) {
        continue;
      }

      // Check data-theme attribute
      const themeAttr = el.closest('[data-theme]');
      if (themeAttr) {
        return themeAttr.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      }

      // Check known navy / midnight / slate class patterns
      if (el.closest('.bg-navy, .bg-midnight, .bg-slate, .bg-navy-900, .bg-navy-950, [class*="bg-[#0B1424]"], [class*="bg-[#14243B]"], [class*="bg-[#101D32]"]')) {
        return 'dark';
      }

      // Computed background color luminance check
      const bg = window.getComputedStyle(el).backgroundColor;
      if (bg && bg !== 'transparent' && !bg.startsWith('rgba(0, 0, 0, 0)')) {
        const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (match) {
          const r = parseInt(match[1], 10);
          const g = parseInt(match[2], 10);
          const b = parseInt(match[3], 10);
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          if (luminance < 0.45) return 'dark';
          return 'light';
        }
      }
    }
  } catch {
    // Graceful fallback
  }

  return 'light';
}

/**
 * Position-Aware, Per-Link Contrast Navbar for Shaurya Investments.
 * Features:
 * - Desktop 3-Column Grid: Left (Logo), Center (Genuinely Centered Nav), Right (CTAs).
 * - Predominant Background Adaptation: Translucent champagne on light sections; translucent deep navy on dark sections.
 * - Per-Navigation-Item Position Sampling: Each individual link independently detects the background
 *   directly behind it (via DOM hit testing + contrast metadata) and adapts its color treatment.
 * - Single-line navigation labels with whitespace: nowrap (no multi-line wrapping).
 * - Background-only translucency on scroll.
 * - All content (logo, text, buttons) remains 100% opaque.
 * - Mobile responsive drawer with accessible quick contact links.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarTheme, setNavbarTheme] = useState('light');
  const [linkContrasts, setLinkContrasts] = useState({});
  const [logoContrast, setLogoContrast] = useState('light');
  const [ctaContrast, setCtaContrast] = useState('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const rafId = useRef(null);

  // Position sampling routine: evaluates each link's center point against the underlying DOM
  const updateContrastSampling = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 20);

    const navY = 40;

    // 1. Determine predominant navbar background theme across 5 horizontal test points
    const testPointsX = [
      window.innerWidth * 0.15,
      window.innerWidth * 0.32,
      window.innerWidth * 0.50,
      window.innerWidth * 0.68,
      window.innerWidth * 0.85,
    ];
    let darkPoints = 0;
    testPointsX.forEach((px) => {
      if (detectContrastAtPoint(px, navY) === 'dark') {
        darkPoints++;
      }
    });

    // Check if the navbar is currently intersecting any dark section directly
    const darkSections = document.querySelectorAll('[data-nav-contrast="dark"], [data-theme="dark"]');
    let sectionOverDark = false;
    for (const sec of darkSections) {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= navY + 25 && rect.bottom >= navY - 15) {
        sectionOverDark = true;
        break;
      }
    }

    const isPredominantlyDark = darkPoints >= 3 || (sectionOverDark && darkPoints >= 2);
    setNavbarTheme(isPredominantlyDark ? 'dark' : 'light');

    // 2. Sample each desktop navigation link independently
    const navLinks = document.querySelectorAll('[data-nav-link]');
    const newContrasts = {};

    navLinks.forEach((linkEl) => {
      const key = linkEl.getAttribute('data-nav-link');
      if (!key) return;
      const rect = linkEl.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      newContrasts[key] = detectContrastAtPoint(x, y);
    });

    // 3. Sample Logo independently
    const logoEl = document.querySelector('[data-nav-logo]');
    let newLogoContrast = 'light';
    if (logoEl) {
      const rect = logoEl.getBoundingClientRect();
      newLogoContrast = detectContrastAtPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }

    // 4. Sample Right CTAs / Mobile Hamburger independently
    const ctaEl = document.querySelector('[data-nav-cta]');
    let newCtaContrast = 'light';
    if (ctaEl) {
      const rect = ctaEl.getBoundingClientRect();
      newCtaContrast = detectContrastAtPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }

    setLinkContrasts(newContrasts);
    setLogoContrast(newLogoContrast);
    setCtaContrast(newCtaContrast);
  };

  useEffect(() => {
    const handleScrollOrResize = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(updateContrastSampling);
    };

    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    // Initial check on mount & route change
    handleScrollOrResize();

    // Secondary delayed checks to catch dynamic images, fonts, and intro loader completion
    const timer1 = setTimeout(handleScrollOrResize, 200);
    const timer2 = setTimeout(handleScrollOrResize, 2100);

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out ${
          isScrolled
            ? navbarTheme === 'dark'
              ? 'bg-[#0B1424]/90 backdrop-blur-[16px] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)] border-b border-gold/25 py-2.5 sm:py-3'
              : 'bg-[#E6DED0]/90 backdrop-blur-[16px] shadow-[0_4px_24px_-4px_rgba(11,20,36,0.06)] border-b border-[#D2C7B6]/80 py-2.5 sm:py-3'
            : navbarTheme === 'dark'
            ? 'bg-[#0B1424]/90 sm:bg-transparent py-3.5 sm:py-4 md:py-5'
            : 'bg-[#E6DED0]/90 sm:bg-transparent py-3.5 sm:py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ========================================================= */}
          {/* DESKTOP: PROPER 3-COLUMN STRUCTURE (lg and above)        */}
          {/* Left: Logo (minmax 240px, 1fr)                           */}
          {/* Center: Genuinely Centered Nav (auto)                     */}
          {/* Right: CTAs (minmax 260px, 1fr)                          */}
          {/* ========================================================= */}
          <div className="hidden lg:grid grid-cols-[minmax(220px,1fr)_auto_minmax(220px,1fr)] xl:grid-cols-[minmax(240px,1fr)_auto_minmax(260px,1fr)] items-center w-full">
            
            {/* Column 1: Brand Logo & Tagline (Left Aligned, Vertically Centered) */}
            <div data-nav-logo className="flex items-center justify-start shrink-0">
              <Logo 
                variant={logoContrast === 'dark' ? "dark" : "default"} 
                size="normal" 
                showTagline={!isScrolled} 
                className="shrink-0" 
              />
            </div>

            {/* Column 2: Navigation Group (Genuinely Centered in Viewport/Container) */}
            <nav 
              className="flex items-center justify-center gap-2 xl:gap-3.5 2xl:gap-5 shrink-0 px-2"
              aria-label="Desktop Navigation"
            >
              {companyData.navigation.map((item) => {
                // Independent per-link contrast detection
                const isItemOverDark = linkContrasts[item.path] === 'dark';
                return (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    data-nav-link={item.path}
                    className={({ isActive }) => `text-[11.5px] xl:text-[12px] 2xl:text-[12.5px] font-medium tracking-wider uppercase transition-colors duration-200 relative py-1.5 px-1 whitespace-nowrap select-none shrink-0 group ${
                      isItemOverDark
                        ? isActive
                          ? 'text-gold font-semibold'
                          : 'text-[#F5F0E7] hover:text-gold'
                        : isActive 
                          ? 'text-[#17243A] font-semibold' 
                          : 'text-[#17243A] hover:text-[#0B1424]'
                    }`}
                  >
                    {({ isActive }) => (
                      <>
                        <span className="transition-colors duration-200">
                          {item.label}
                        </span>
                        {/* Active & Hover Underline: Strictly follows this individual link's contrast color */}
                        <span 
                          className={`absolute bottom-0 left-0 h-[1.5px] origin-left transition-all duration-300 ease-out ${
                            isItemOverDark ? 'bg-gold' : 'bg-[#17243A]'
                          } ${
                            isActive ? 'w-full' : 'w-0 group-hover:w-full'
                          }`} 
                        />
                      </>
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* Column 3: Action Buttons (Right Aligned, Vertically Centered) */}
            <div data-nav-cta className="flex items-center justify-end shrink-0 gap-2.5 xl:gap-3">
              <WhatsAppButton
                type="general"
                variant="whatsapp"
                size="sm"
                label="WhatsApp"
                className="text-xs uppercase tracking-wider font-semibold px-3 py-1.5 whitespace-nowrap shrink-0 shadow-sm"
              />

              <Button
                to="/services"
                variant="primary"
                size="sm"
                icon={ArrowUpRight}
                className="text-xs tracking-wider uppercase px-3.5 py-1.5 whitespace-nowrap shrink-0"
              >
                Services
              </Button>
            </div>

          </div>

          {/* ========================================================= */}
          {/* MOBILE & TABLET ROW (< lg)                                */}
          {/* ========================================================= */}
          <div className="flex lg:hidden items-center justify-between w-full">
            <div data-nav-logo className="flex items-center shrink-0">
              <Logo 
                variant={logoContrast === 'dark' ? "dark" : "default"} 
                size="small" 
                showTagline={false} 
                className="shrink-0" 
              />
            </div>

            <div data-nav-cta className="flex items-center gap-2.5">
              <WhatsAppButton
                type="general"
                variant="whatsapp"
                size="sm"
                label="WhatsApp"
                showIcon={true}
                className="text-xs px-2.5 py-1 uppercase tracking-wider font-semibold"
              />

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-sm transition-colors focus:outline-none focus:ring-1 focus:ring-gold ${
                  ctaContrast === 'dark' 
                    ? 'text-gold hover:text-gold-light hover:bg-white/10' 
                    : 'text-brand-primary hover:text-gold hover:bg-stone/30'
                }`}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

        </div>

        {/* Mobile Drawer / Dropdown */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 top-[56px] sm:top-[60px] bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div 
              className="bg-[#0B1424] border-b border-gold/30 px-6 pt-6 pb-8 shadow-elevated max-h-[calc(100vh-60px)] overflow-y-auto text-[#F5F0E7]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-3">
                <div className="pb-3 border-b border-white/10 flex items-center justify-between text-xs text-[#B8C0CC]">
                  <span>Santosh D. Chavan · Financial Advisory</span>
                  <span className="text-gold font-semibold">25 Yrs Experience</span>
                </div>

                {companyData.navigation.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) => `py-2 text-base font-serif font-medium transition-colors flex items-center justify-between group ${
                      isActive ? 'text-gold font-semibold pl-2 border-l-2 border-gold' : 'text-[#F5F0E7] hover:text-gold'
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </NavLink>
                ))}

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <WhatsAppButton
                    type="general"
                    label="Chat on WhatsApp"
                    className="w-full text-center justify-center text-xs uppercase tracking-wider font-semibold py-2.5"
                  />
                  <div className="text-center text-[11px] text-[#B8C0CC]">
                    Kurar Village, Malad East, Mumbai
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
