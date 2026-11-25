import React from 'react';

/**
 * ArchitecturalHeroBackground
 * 
 * Designer-quality architectural decorative background compositions for luxury private wealth:
 * - Midnight Navy (#0B1424) / Deep Navy (#060B14) foundational depth
 * - Slate Navy (#14243B) volumetric layered geometric planes and translucent facets
 * - Antique Gold (#C6A66B) & Champagne Gold (#D8C7A5) precision drafting hairlines & engraved accents
 * - Warm Stone (#E6DED0) & Soft Ivory (#F5F0E7) subtle ambient highlights
 * - Large, carefully composed concentric arcs, overlapping geometric forms, and fine architectural grids
 * - Dimensional radial lighting, shadow creases, and embossed drafting vectors
 * - 100% SVG/CSS: zero external raster images, pointer-events-none, high contrast, responsive
 */
export default function ArchitecturalHeroBackground({ variant = 'default', className = '' }) {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    >
      {/* 1. Deep Midnight Base with Dimensional Lighting Wells */}
      <div className="absolute inset-0 bg-[#0B1424]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#101D31_0%,_#0B1424_60%,_#060B14_100%)]" />

      {/* 2. Precision Architectural Micro-Grid (Visible yet restrained drafting surface) */}
      <svg className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="archGridMaster" width="80" height="80" patternUnits="userSpaceOnUse">
            {/* Fine coordinate grid lines */}
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(198, 166, 107, 0.07)" strokeWidth="0.75" />
            {/* Sub-grid subdivisions */}
            <path d="M 40 0 L 40 80 M 0 40 L 80 40" fill="none" stroke="rgba(184, 192, 204, 0.03)" strokeWidth="0.5" strokeDasharray="2 4" />
            {/* Precision intersection crosshairs */}
            <g stroke="#C6A66B" strokeWidth="0.75" opacity="0.35">
              <line x1="77" y1="0" x2="83" y2="0" />
              <line x1="80" y1="-3" x2="80" y2="3" />
            </g>
          </pattern>
          <radialGradient id="gridVignetteMask" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#fff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.1" />
          </radialGradient>
          <mask id="gridMask">
            <rect width="100%" height="100%" fill="url(#gridVignetteMask)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#archGridMaster)" mask="url(#gridMask)" />
      </svg>

      {/* 3. Page-Specific Masterwork Art-Directed Composition */}
      {variant === 'home' && <HomeHeroArt />}
      {variant === 'about' && <AboutHeroArt />}
      {variant === 'services' && <ServicesHeroArt />}
      {variant === 'loans' && <LoansHeroArt />}
      {variant === 'mutual-funds' && <MutualFundsHeroArt />}
      {variant === 'sip' && <SipHeroArt />}
      {variant === 'lic' && <LicHeroArt />}
      {variant === 'default' && <DefaultHeroArt />}

      {/* 4. Peripheral Protective Edge Vignette (Shields text readability & section transitions) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1424] via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1424]/70 via-transparent to-[#0B1424]/40" />
    </div>
  );
}

/* ==========================================================================
   1. HOMEPAGE HERO:
   - Preserves approved hero layout completely
   - Restrained architectural geometry behind the right visual card
   - Large sweeping concentric arcs & atmospheric warm gold radial radiance
   - Subtle SI watermark & precision framing axes
   ========================================================================== */
function HomeHeroArt() {
  return (
    <>
      {/* Primary Warm Gold & Slate Ambient Glow (Positioned behind right card) */}
      <div className="absolute top-1/4 right-[10%] w-[620px] h-[620px] bg-[radial-gradient(circle,rgba(198,166,107,0.18)_0%,rgba(20,36,59,0.5)_40%,transparent_75%)] blur-[100px]" />
      <div className="absolute -bottom-20 left-10 w-[460px] h-[460px] bg-[#14243B]/70 rounded-full blur-[110px]" />

      {/* Oversized Official SI Symbol Watermark */}
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 opacity-[0.038] flex items-center justify-center pointer-events-none">
        <img 
          src="/assets/logo/logo-symbol.png" 
          alt="" 
          className="w-[500px] h-[500px] object-contain filter brightness-125" 
        />
      </div>

      {/* Master Vector Geometry */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1440 900" 
        preserveAspectRatio="xMidYMid slice" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="homeGoldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C6A66B" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#C6A66B" stopOpacity="0.45" />
            <stop offset="80%" stopColor="#D8C7A5" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C6A66B" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="homeFacetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14243B" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#14243B" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0B1424" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="homeOrbGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C6A66B" stopOpacity="0.18" />
            <stop offset="70%" stopColor="#14243B" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0B1424" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Layered Translucent Geometric Plane (Diagonal architectural cantilever) */}
        <polygon 
          points="780,100 1380,80 1440,780 960,820" 
          fill="url(#homeFacetGrad)" 
          stroke="url(#homeGoldStroke)" 
          strokeWidth="0.75" 
        />

        {/* Large Concentric Architectural Arcs (Radiating behind the media column) */}
        <g fill="none">
          {/* Innermost Arc */}
          <circle cx="1060" cy="420" r="220" stroke="url(#homeGoldStroke)" strokeWidth="1.2" />
          {/* Subtle concentric orb fill */}
          <circle cx="1060" cy="420" r="320" fill="url(#homeOrbGrad)" stroke="url(#homeGoldStroke)" strokeWidth="0.75" strokeDasharray="6 6" />
          {/* Outer sweeping arcs */}
          <circle cx="1060" cy="420" r="440" stroke="url(#homeGoldStroke)" strokeWidth="1" opacity="0.6" />
          <circle cx="1060" cy="420" r="560" stroke="url(#homeGoldStroke)" strokeWidth="0.75" strokeDasharray="12 8" opacity="0.45" />
          <circle cx="1060" cy="420" r="680" stroke="url(#homeGoldStroke)" strokeWidth="0.5" opacity="0.3" />
        </g>

        {/* Precision Tangent Lines & Coordinate Crosshairs */}
        <g stroke="#C6A66B" strokeWidth="0.75" opacity="0.5">
          <line x1="720" y1="420" x2="1400" y2="420" strokeDasharray="4 6" />
          <line x1="1060" y1="80" x2="1060" y2="760" strokeDasharray="4 6" />
          
          {/* Compass ticks on arc perimeter */}
          <circle cx="1060" cy="200" r="3" fill="#C6A66B" />
          <circle cx="1060" cy="640" r="3" fill="#C6A66B" />
          <circle cx="840" cy="420" r="3" fill="#C6A66B" />
          <circle cx="1280" cy="420" r="3" fill="#C6A66B" />

          {/* Diagonal Structural Vector Line */}
          <line x1="680" y1="800" x2="1340" y2="140" stroke="url(#homeGoldStroke)" strokeWidth="1.5" />
          <line x1="700" y1="815" x2="1360" y2="155" stroke="#14243B" strokeWidth="1" />
        </g>

        {/* Left-Column Framing Hairline Guides (Subtle architectural datum) */}
        <g stroke="#C6A66B" strokeWidth="0.75" opacity="0.3">
          <line x1="60" y1="160" x2="680" y2="160" strokeDasharray="2 8" />
          <line x1="60" y1="840" x2="680" y2="840" strokeDasharray="2 8" />
          <line x1="60" y1="140" x2="60" y2="180" />
          <line x1="60" y1="820" x2="60" y2="860" />
        </g>
      </svg>
    </>
  );
}

/* ==========================================================================
   2. ABOUT PAGE HERO:
   - Elegant concentric arcs & subtle SI watermark
   - Asymmetric geometric framing with engraved double-line border
   - Volumetric slate navy layered planes
   ========================================================================== */
function AboutHeroArt() {
  return (
    <>
      {/* Focal Radial Lighting */}
      <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[580px] h-[480px] bg-[radial-gradient(circle,rgba(198,166,107,0.2)_0%,rgba(20,36,59,0.5)_45%,transparent_75%)] blur-[95px]" />
      <div className="absolute -bottom-10 left-1/4 w-[420px] h-[320px] bg-[#14243B]/60 rounded-full blur-[90px]" />

      {/* Prominent Official SI Emblem Watermark (Positioned inside the concentric arc focal point) */}
      <div className="absolute right-[12%] top-1/2 -translate-y-1/2 opacity-[0.048] flex items-center justify-center">
        <img 
          src="/assets/logo/logo-symbol.png" 
          alt="" 
          className="w-[440px] h-[440px] object-contain filter brightness-125"
        />
      </div>

      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1440 600" 
        preserveAspectRatio="xMidYMid slice" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="aboutGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C6A66B" stopOpacity="0.2" />
            <stop offset="40%" stopColor="#C6A66B" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#D8C7A5" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#C6A66B" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="aboutPlaneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14243B" stopOpacity="0.45" />
            <stop offset="80%" stopColor="#14243B" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0B1424" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="aboutArcFill" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C6A66B" stopOpacity="0.12" />
            <stop offset="60%" stopColor="#14243B" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0B1424" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Asymmetric Overlapping Geometric Plates */}
        <polygon 
          points="820,40 1380,40 1420,540 880,560" 
          fill="url(#aboutPlaneGrad)" 
          stroke="url(#aboutGoldGrad)" 
          strokeWidth="0.75" 
        />
        <polygon 
          points="900,90 1340,90 1380,490 940,510" 
          fill="none" 
          stroke="rgba(198,166,107,0.25)" 
          strokeWidth="0.5" 
          strokeDasharray="4 6" 
        />

        {/* Large Concentric Arcs (Anchored off-axis at x=1120, y=300) */}
        <g fill="none">
          {/* Inner core ring */}
          <circle cx="1120" cy="300" r="140" stroke="url(#aboutGoldGrad)" strokeWidth="1.5" />
          <circle cx="1120" cy="300" r="148" stroke="#060B14" strokeWidth="1" opacity="0.8" />
          {/* Mid-range concentric arcs */}
          <circle cx="1120" cy="300" r="230" fill="url(#aboutArcFill)" stroke="url(#aboutGoldGrad)" strokeWidth="1" />
          <circle cx="1120" cy="300" r="320" stroke="url(#aboutGoldGrad)" strokeWidth="0.75" strokeDasharray="8 6" opacity="0.7" />
          <circle cx="1120" cy="300" r="420" stroke="url(#aboutGoldGrad)" strokeWidth="1.2" opacity="0.5" />
          <circle cx="1120" cy="300" r="540" stroke="url(#aboutGoldGrad)" strokeWidth="0.5" strokeDasharray="16 8" opacity="0.35" />
          <circle cx="1120" cy="300" r="660" stroke="url(#aboutGoldGrad)" strokeWidth="0.75" opacity="0.2" />
        </g>

        {/* Refined Classical Corner Brackets & Hairline Framing */}
        <g stroke="#C6A66B" strokeWidth="1.5" fill="none" opacity="0.65">
          {/* Top-Left Bracket */}
          <path d="M 40 70 L 40 40 L 70 40" />
          <circle cx="40" cy="40" r="2" fill="#C6A66B" />
          {/* Bottom-Left Bracket */}
          <path d="M 40 530 L 40 560 L 70 560" />
          <circle cx="40" cy="560" r="2" fill="#C6A66B" />
          {/* Top-Right Bracket */}
          <path d="M 1400 70 L 1400 40 L 1370 40" />
          <circle cx="1400" cy="40" r="2" fill="#C6A66B" />
          {/* Bottom-Right Bracket */}
          <path d="M 1400 530 L 1400 560 L 1370 560" />
          <circle cx="1400" cy="560" r="2" fill="#C6A66B" />
        </g>

        {/* Embossed Horizontal Datum Scale */}
        <g stroke="#C6A66B" opacity="0.45">
          <line x1="40" y1="560" x2="1400" y2="560" strokeWidth="1" />
          <line x1="40" y1="562" x2="1400" y2="562" stroke="#060B14" strokeWidth="0.75" />
          {/* Calibration Ticks */}
          <line x1="200" y1="552" x2="200" y2="560" strokeWidth="1" />
          <line x1="400" y1="552" x2="400" y2="560" strokeWidth="1" />
          <line x1="600" y1="550" x2="600" y2="560" strokeWidth="1.5" />
          <line x1="800" y1="552" x2="800" y2="560" strokeWidth="1" />
          <line x1="1000" y1="552" x2="1000" y2="560" strokeWidth="1" />
          <line x1="1200" y1="550" x2="1200" y2="560" strokeWidth="1.5" />
        </g>
      </svg>
    </>
  );
}

/* ==========================================================================
   3. SERVICES PAGE HERO:
   - Structured architectural grid with 30° / 60° diagonal geometry
   - Intersecting fine lines with gold diamond nodes & glowing junctions
   - Overlapping translucent slate navy geometric facets
   ========================================================================== */
function ServicesHeroArt() {
  return (
    <>
      {/* Dynamic Dual-Point Radial Lighting */}
      <div className="absolute top-1/4 right-[20%] w-[560px] h-[440px] bg-[radial-gradient(circle,rgba(198,166,107,0.18)_0%,rgba(20,36,59,0.5)_50%,transparent_75%)] blur-[95px]" />
      <div className="absolute bottom-0 left-[10%] w-[440px] h-[340px] bg-[#14243B]/65 rounded-full blur-[85px]" />

      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1440 600" 
        preserveAspectRatio="xMidYMid slice" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="servicesGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C6A66B" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#C6A66B" stopOpacity="0.55" />
            <stop offset="85%" stopColor="#D8C7A5" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#C6A66B" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="servicesPolyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14243B" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#14243B" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0B1424" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="servicesPolyGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1C3252" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#14243B" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0B1424" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Layered Overlapping Isometric Geometric Forms */}
        <polygon 
          points="800,80 1140,80 1340,380 1000,380" 
          fill="url(#servicesPolyGrad1)" 
          stroke="url(#servicesGoldGrad)" 
          strokeWidth="1.2" 
        />
        <polygon 
          points="960,220 1300,220 1440,520 1100,520" 
          fill="url(#servicesPolyGrad2)" 
          stroke="url(#servicesGoldGrad)" 
          strokeWidth="1" 
        />
        {/* Supporting tertiary glass facet */}
        <polygon 
          points="680,240 920,240 1060,480 820,480" 
          fill="url(#servicesPolyGrad1)" 
          stroke="rgba(198,166,107,0.3)" 
          strokeWidth="0.75" 
          strokeDasharray="6 4" 
        />

        {/* Precision Diagonal Blueprint Grid System */}
        <g stroke="url(#servicesGoldGrad)" strokeWidth="0.8" opacity="0.6">
          {/* Main Diagonal Truss Beams */}
          <line x1="560" y1="600" x2="960" y2="0" />
          <line x1="740" y1="600" x2="1140" y2="0" strokeWidth="1.2" />
          <line x1="920" y1="600" x2="1320" y2="0" />
          <line x1="1100" y1="600" x2="1440" y2="90" strokeDasharray="8 6" />

          {/* Reverse Counter-Diagonal Structs */}
          <line x1="800" y1="0" x2="1200" y2="600" strokeDasharray="4 6" opacity="0.4" />
          <line x1="980" y1="0" x2="1380" y2="600" strokeWidth="1" />
        </g>

        {/* Structural Horizontal Elevation Strings */}
        <g stroke="#C6A66B" opacity="0.5">
          <line x1="600" y1="220" x2="1440" y2="220" strokeWidth="0.75" strokeDasharray="3 6" />
          <line x1="600" y1="380" x2="1440" y2="380" strokeWidth="0.75" strokeDasharray="3 6" />
        </g>

        {/* Gold Diamond Intersection Nodes & Precision Crosshairs */}
        <g fill="#C6A66B" opacity="0.8">
          {/* Major Intersection Diamonds */}
          <polygon points="1140,80 1145,85 1140,90 1135,85" />
          <polygon points="1000,380 1005,385 1000,390 995,385" />
          <polygon points="1300,220 1305,225 1300,230 1295,225" />
          <polygon points="1100,520 1105,525 1100,530 1095,525" />
          <polygon points="920,240 925,245 920,250 915,245" />

          {/* Coordinate Crosshairs */}
          <g stroke="#C6A66B" strokeWidth="1">
            <line x1="1135" y1="80" x2="1145" y2="80" />
            <line x1="1140" y1="75" x2="1140" y2="85" />
            <line x1="995" y1="380" x2="1005" y2="380" />
            <line x1="1000" y1="375" x2="1000" y2="385" />
          </g>
        </g>
      </svg>
    </>
  );
}

/* ==========================================================================
   4. LOANS PAGE HERO:
   - Modern architectural cantilevered rooflines & structural trusses
   - Layered geometric facets and elevation reference strings
   - Sophisticated luxury residential blueprint aesthetic (strictly no cartoon houses)
   ========================================================================== */
function LoansHeroArt() {
  return (
    <>
      {/* Warm Golden Haven Radiant Glow */}
      <div className="absolute top-1/4 right-[18%] w-[580px] h-[460px] bg-[radial-gradient(circle,rgba(198,166,107,0.2)_0%,rgba(20,36,59,0.55)_50%,transparent_75%)] blur-[95px]" />
      <div className="absolute bottom-0 left-[15%] w-[420px] h-[320px] bg-[#14243B]/65 rounded-full blur-[90px]" />

      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1440 600" 
        preserveAspectRatio="xMidYMid slice" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="loansGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C6A66B" stopOpacity="0.1" />
            <stop offset="35%" stopColor="#C6A66B" stopOpacity="0.55" />
            <stop offset="75%" stopColor="#D8C7A5" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C6A66B" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="loansCantileverGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#14243B" stopOpacity="0.55" />
            <stop offset="80%" stopColor="#14243B" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0B1424" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="loansCantileverGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1C3252" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#14243B" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0B1424" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Primary Modern Cantilever Architectural Roof Facet */}
        <polygon 
          points="700,420 1080,140 1440,210 1440,480 960,540" 
          fill="url(#loansCantileverGrad1)" 
        />
        {/* Secondary Shaded Under-Soffit Facet */}
        <polygon 
          points="780,450 1080,240 1380,290 1040,560" 
          fill="url(#loansCantileverGrad2)" 
        />

        {/* Precision Cantilever Edge Hairlines */}
        <g stroke="url(#loansGoldGrad)" fill="none">
          {/* Main angular roofline */}
          <path d="M 660,450 L 1080,140 L 1440,210" strokeWidth="1.75" />
          {/* Double-line architectural reveal */}
          <path d="M 680,465 L 1080,165 L 1440,230" strokeWidth="0.75" strokeDasharray="8 6" opacity="0.6" />
          {/* Soffit return */}
          <path d="M 760,490 L 1080,260 L 1380,310" strokeWidth="1" opacity="0.75" />
        </g>

        {/* Structural Column & Mullion Rhythms */}
        <g stroke="url(#loansGoldGrad)" strokeWidth="0.8" opacity="0.65">
          <line x1="880" y1="285" x2="880" y2="520" />
          <line x1="940" y1="240" x2="940" y2="520" />
          <line x1="1000" y1="200" x2="1000" y2="520" strokeWidth="1.2" />
          <line x1="1080" y1="140" x2="1080" y2="540" strokeWidth="1.5" />
          <line x1="1160" y1="155" x2="1160" y2="520" />
          <line x1="1240" y1="170" x2="1240" y2="520" />
          <line x1="1320" y1="185" x2="1320" y2="520" />
        </g>

        {/* Structural Cross-Truss Webbing */}
        <g stroke="#C6A66B" strokeWidth="0.6" strokeDasharray="3 5" opacity="0.4">
          <line x1="880" y1="285" x2="940" y2="520" />
          <line x1="940" y1="240" x2="1000" y2="520" />
          <line x1="1000" y1="200" x2="1080" y2="540" />
          <line x1="1080" y1="140" x2="1160" y2="520" />
          <line x1="1160" y1="155" x2="1240" y2="520" />
          <line x1="1240" y1="170" x2="1320" y2="520" />
        </g>

        {/* Architectural Elevation Dimension Strings & Datum Lines */}
        <g stroke="#C6A66B" opacity="0.6">
          {/* Horizontal Datum Floor Line */}
          <line x1="560" y1="520" x2="1440" y2="520" strokeWidth="1.2" />
          <line x1="560" y1="523" x2="1440" y2="523" stroke="#060B14" strokeWidth="1" />
          
          {/* Dimension string extension ticks */}
          <line x1="1080" y1="125" x2="1080" y2="135" strokeWidth="1" />
          <line x1="1440" y1="195" x2="1440" y2="205" strokeWidth="1" />
          <line x1="1080" y1="130" x2="1440" y2="200" strokeWidth="0.75" strokeDasharray="3 3" />

          {/* Elevation Datum Marker: Level Triangle */}
          <polygon points="1080,120 1074,110 1086,110" fill="#C6A66B" />
          <circle cx="1080" cy="140" r="3" fill="#C6A66B" />
        </g>
      </svg>
    </>
  );
}

/* ==========================================================================
   5. MUTUAL FUNDS HERO:
   - Layered ascending geometric forms & carefully composed mathematical curves
   - Volumetric slate navy planes with warm gold rims
   - Sophisticated growth dynamic (strictly no stock-market symbols, arrows, or generic graphs)
   ========================================================================== */
function MutualFundsHeroArt() {
  return (
    <>
      {/* Radiant Ascending Gold Luminescence */}
      <div className="absolute top-1/4 right-[16%] w-[600px] h-[480px] bg-[radial-gradient(circle,rgba(198,166,107,0.18)_0%,rgba(20,36,59,0.5)_50%,transparent_75%)] blur-[95px]" />
      <div className="absolute -bottom-10 left-[10%] w-[440px] h-[340px] bg-[#14243B]/65 rounded-full blur-[90px]" />

      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1440 600" 
        preserveAspectRatio="xMidYMid slice" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="mfGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C6A66B" stopOpacity="0.1" />
            <stop offset="40%" stopColor="#C6A66B" stopOpacity="0.55" />
            <stop offset="75%" stopColor="#D8C7A5" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C6A66B" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="mfTierGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14243B" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#14243B" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#C6A66B" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="mfTierGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1C3252" stopOpacity="0.55" />
            <stop offset="70%" stopColor="#14243B" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#D8C7A5" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        {/* Monumental Layered Ascending Geometric Planes */}
        {/* Tier 1 Plane */}
        <polygon 
          points="620,600 880,320 1060,320 800,600" 
          fill="url(#mfTierGrad1)" 
          stroke="url(#mfGoldGrad)" 
          strokeWidth="1" 
        />
        {/* Tier 2 Plane (Higher elevation) */}
        <polygon 
          points="800,600 1060,200 1240,200 980,600" 
          fill="url(#mfTierGrad2)" 
          stroke="url(#mfGoldGrad)" 
          strokeWidth="1.25" 
        />
        {/* Tier 3 Plane (Apex structural facet) */}
        <polygon 
          points="980,600 1240,80 1420,80 1160,600" 
          fill="url(#mfTierGrad1)" 
          stroke="url(#mfGoldGrad)" 
          strokeWidth="1.5" 
        />

        {/* Harmonious Intersecting Mathematical Trajectory Curves */}
        <g fill="none">
          <path 
            d="M 520 540 C 780 520, 940 380, 1140 220 C 1260 120, 1360 80, 1440 60" 
            stroke="url(#mfGoldGrad)" 
            strokeWidth="1.5" 
          />
          <path 
            d="M 520 560 C 780 540, 940 405, 1140 245 C 1260 145, 1360 105, 1440 85" 
            stroke="url(#mfGoldGrad)" 
            strokeWidth="0.75" 
            strokeDasharray="6 6" 
            opacity="0.6" 
          />
        </g>

        {/* Coordinate Trajectory Rings & Arc Guides */}
        <g stroke="url(#mfGoldGrad)" fill="none" opacity="0.4">
          <circle cx="1060" cy="200" r="80" strokeWidth="0.75" strokeDasharray="4 4" />
          <circle cx="1060" cy="200" r="160" strokeWidth="0.5" />
          <circle cx="1240" cy="80" r="100" strokeWidth="0.75" strokeDasharray="4 4" />
        </g>

        {/* Milestone Coordination Crosshairs & Nodes */}
        <g stroke="#C6A66B" opacity="0.7">
          {/* Horizontal Level Guides */}
          <line x1="740" y1="320" x2="1400" y2="320" strokeWidth="0.75" strokeDasharray="3 6" />
          <line x1="880" y1="200" x2="1400" y2="200" strokeWidth="0.75" strokeDasharray="3 6" />
          <line x1="1040" y1="80" x2="1400" y2="80" strokeWidth="0.75" strokeDasharray="3 6" />

          {/* Precision Nodes */}
          <circle cx="880" cy="320" r="3" fill="#C6A66B" />
          <circle cx="1060" cy="200" r="3.5" fill="#C6A66B" />
          <circle cx="1240" cy="80" r="4" fill="#C6A66B" />
        </g>
      </svg>
    </>
  );
}

/* ==========================================================================
   6. SIP INVESTMENTS HERO:
   - Flowing concentric paths & subtle circular geometry
   - Harmonious mathematical spiral trajectories & compounding orbit rings
   - Restrained gold strokes & soft radial depth (strictly no literal financial graphs)
   ========================================================================== */
function SipHeroArt() {
  return (
    <>
      {/* Focal Harmonic Radial Glow */}
      <div className="absolute top-1/3 right-[18%] w-[620px] h-[500px] bg-[radial-gradient(circle,rgba(198,166,107,0.2)_0%,rgba(20,36,59,0.5)_50%,transparent_75%)] blur-[95px]" />
      <div className="absolute bottom-0 left-[12%] w-[420px] h-[320px] bg-[#14243B]/65 rounded-full blur-[85px]" />

      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1440 600" 
        preserveAspectRatio="xMidYMid slice" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sipGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C6A66B" stopOpacity="0.1" />
            <stop offset="45%" stopColor="#C6A66B" stopOpacity="0.55" />
            <stop offset="80%" stopColor="#D8C7A5" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C6A66B" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="sipDiscGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C6A66B" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#14243B" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0B1424" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Large Flowing Concentric Orbits (Centered around compounding vortex x=1100, y=260) */}
        <g fill="none">
          {/* Central Translucent Disc */}
          <circle cx="1100" cy="260" r="160" fill="url(#sipDiscGrad)" stroke="url(#sipGoldGrad)" strokeWidth="1.25" />
          {/* Concentric Harmonic Rings */}
          <circle cx="1100" cy="260" r="240" stroke="url(#sipGoldGrad)" strokeWidth="0.75" strokeDasharray="6 6" opacity="0.75" />
          <circle cx="1100" cy="260" r="340" stroke="url(#sipGoldGrad)" strokeWidth="1" opacity="0.6" />
          <circle cx="1100" cy="260" r="460" stroke="url(#sipGoldGrad)" strokeWidth="0.75" strokeDasharray="12 8" opacity="0.45" />
          <circle cx="1100" cy="260" r="600" stroke="url(#sipGoldGrad)" strokeWidth="0.5" opacity="0.3" />
          <circle cx="1100" cy="260" r="760" stroke="url(#sipGoldGrad)" strokeWidth="0.75" opacity="0.18" />
        </g>

        {/* Flowing Compounding Bezier Curves (Gliding through orbit rings) */}
        <g fill="none">
          <path 
            d="M 240 580 C 620 560, 880 480, 1100 260 C 1220 140, 1340 80, 1440 50" 
            stroke="url(#sipGoldGrad)" 
            strokeWidth="1.75" 
          />
          <path 
            d="M 240 600 C 620 580, 880 505, 1100 285 C 1220 165, 1340 105, 1440 75" 
            stroke="url(#sipGoldGrad)" 
            strokeWidth="0.75" 
            strokeDasharray="8 6" 
            opacity="0.65" 
          />
        </g>

        {/* Periodic Compounding Cadence Ticks (Interval nodes) */}
        <g stroke="#C6A66B" strokeWidth="0.75" opacity="0.65">
          {/* Radial Axis Rays */}
          <line x1="1100" y1="260" x2="1100" y2="20" strokeDasharray="4 6" />
          <line x1="1100" y1="260" x2="1440" y2="260" strokeDasharray="4 6" />
          <line x1="1100" y1="260" x2="1100" y2="580" strokeDasharray="4 6" />
          <line x1="1100" y1="260" x2="760" y2="260" strokeDasharray="4 6" />

          {/* Focal Nodes */}
          <circle cx="1100" cy="260" r="4" fill="#C6A66B" />
          <circle cx="1100" cy="100" r="2.5" fill="#C6A66B" />
          <circle cx="1260" cy="260" r="2.5" fill="#C6A66B" />
          <circle cx="1100" cy="420" r="2.5" fill="#C6A66B" />
          <circle cx="940" cy="260" r="2.5" fill="#C6A66B" />
        </g>
      </svg>
    </>
  );
}

/* ==========================================================================
   7. LIC INSURANCE HERO:
   - Overlapping protective architectural arches & soft radial lighting
   - Monumental vaulted sanctuary geometry with dimensional depth
   - Reassuring, sovereign atmosphere (strictly no literal shields or cartoon families)
   ========================================================================== */
function LicHeroArt() {
  return (
    <>
      {/* Warm Sovereign Sanctuary Radiant Luminescence */}
      <div className="absolute top-1/4 right-[16%] w-[620px] h-[520px] bg-[radial-gradient(circle,rgba(198,166,107,0.22)_0%,rgba(20,36,59,0.55)_50%,transparent_75%)] blur-[95px]" />
      <div className="absolute bottom-0 left-[14%] w-[420px] h-[320px] bg-[#14243B]/65 rounded-full blur-[90px]" />

      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1440 600" 
        preserveAspectRatio="xMidYMid slice" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="licGoldGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#C6A66B" stopOpacity="0.1" />
            <stop offset="45%" stopColor="#C6A66B" stopOpacity="0.6" />
            <stop offset="85%" stopColor="#D8C7A5" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#C6A66B" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="licVaultFill1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#14243B" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#14243B" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#C6A66B" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="licVaultFill2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#1C3252" stopOpacity="0.4" />
            <stop offset="80%" stopColor="#14243B" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0B1424" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Monumental Concentric Architectural Vault Arches */}
        {/* Outermost Vault Arch with Intrados Shading */}
        <path 
          d="M 800 600 L 800 360 Q 1120 100 1440 360 L 1440 600 Z" 
          fill="url(#licVaultFill1)" 
          stroke="url(#licGoldGrad)" 
          strokeWidth="1.25" 
        />
        {/* Mid-Tier Sanctuary Arch */}
        <path 
          d="M 880 600 L 880 380 Q 1120 170 1360 380 L 1360 600 Z" 
          fill="url(#licVaultFill2)" 
          stroke="url(#licGoldGrad)" 
          strokeWidth="1.5" 
        />
        {/* Innermost Protective Arch */}
        <path 
          d="M 960 600 L 960 400 Q 1120 240 1280 400 L 1280 600 Z" 
          fill="none" 
          stroke="url(#licGoldGrad)" 
          strokeWidth="1" 
          strokeDasharray="8 6" 
        />

        {/* Structural Fluting & Vertical Colonnade Columns */}
        <g stroke="url(#licGoldGrad)" strokeWidth="0.8" opacity="0.6">
          <line x1="840" y1="360" x2="840" y2="600" />
          <line x1="920" y1="380" x2="920" y2="600" />
          <line x1="1000" y1="410" x2="1000" y2="600" strokeDasharray="4 6" />
          <line x1="1240" y1="410" x2="1240" y2="600" strokeDasharray="4 6" />
          <line x1="1320" y1="380" x2="1320" y2="600" />
          <line x1="1400" y1="360" x2="1400" y2="600" />
        </g>

        {/* Sovereign Keystone Apex Crown */}
        <g stroke="#C6A66B" opacity="0.8">
          {/* Keystone Vertical Axis */}
          <line x1="1120" y1="70" x2="1120" y2="150" strokeWidth="1.5" />
          {/* Keystone Horizontal Crossbar */}
          <line x1="1100" y1="100" x2="1140" y2="100" strokeWidth="1.5" />
          {/* Keystone Diamond Finial */}
          <polygon points="1120,70 1126,80 1120,90 1114,80" fill="#C6A66B" />
          <circle cx="1120" cy="100" r="3" fill="#C6A66B" />

          {/* Radiating Celestial Alignment Beams */}
          <line x1="1120" y1="100" x2="980" y2="180" strokeWidth="0.75" strokeDasharray="4 6" opacity="0.5" />
          <line x1="1120" y1="100" x2="1260" y2="180" strokeWidth="0.75" strokeDasharray="4 6" opacity="0.5" />
        </g>

        {/* Anchored Base Entablature Lines */}
        <g stroke="#C6A66B" opacity="0.5">
          <line x1="680" y1="580" x2="1440" y2="580" strokeWidth="1.2" />
          <line x1="680" y1="583" x2="1440" y2="583" stroke="#060B14" strokeWidth="1" />
        </g>
      </svg>
    </>
  );
}

/* ==========================================================================
   DEFAULT / FALLBACK: Subtle grid and ambient lighting
   ========================================================================== */
function DefaultHeroArt() {
  return (
    <>
      <div className="absolute top-10 right-10 w-96 h-96 bg-[radial-gradient(circle,rgba(198,166,107,0.18)_0%,transparent_70%)] blur-[100px]" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-[#14243B]/60 rounded-full blur-[90px]" />
      <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-[0.04]">
        <img src="/assets/logo/logo-symbol.png" alt="" className="w-80 h-80 object-contain" />
      </div>
    </>
  );
}
