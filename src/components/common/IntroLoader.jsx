import React, { useState, useEffect } from 'react';

/**
 * Premium 2-Second Initial Intro Loader for Shaurya Investments:
 * - Independent fixed-position overlay above the fully rendered website.
 * - Guaranteed automatic dismissal at ~2.0s with an absolute 2.8s failsafe.
 * - CSS-based opacity transition (zero AnimatePresence exit hanging).
 * - Full-screen deep navy background (#101D32).
 * - Official metallic-gold emblem with ambient glow.
 * - Classical SHAURYA INVESTMENTS wordmark and tagline.
 * - Thin animated gold progress line.
 * - Restores body scrolling and pointer events cleanly.
 */
export default function IntroLoader({ onComplete }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // 1. Lock document scrolling on initial mount
    document.body.style.overflow = 'hidden';

    const unlock = () => {
      document.body.style.overflow = '';
    };

    // 2. Normal fade-out trigger at 1850ms (right as progress reaches 100%)
    const fadeTimer = setTimeout(() => {
      setFading(true);
      unlock();
    }, 1850);

    // 3. Complete dismissal and unmount at 2250ms
    const completeTimer = setTimeout(() => {
      unlock();
      if (onComplete) onComplete();
    }, 2250);

    // 4. Absolute Failsafe: guaranteed unmount no later than 2800ms
    const failsafeTimer = setTimeout(() => {
      unlock();
      if (onComplete) onComplete();
    }, 2800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
      clearTimeout(failsafeTimer);
      unlock();
    };
  }, [onComplete]);

  // Optional manual skip on user click / tap
  const handleDismiss = () => {
    setFading(true);
    document.body.style.overflow = '';
    if (onComplete) onComplete();
  };

  return (
    <div
      data-nav-skip="true"
      onClick={handleDismiss}
      className={`fixed inset-0 w-screen h-screen z-[99999] flex flex-col items-center justify-center bg-[#0B1424] text-white select-none transition-opacity duration-400 ease-out ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
      style={{
        backgroundColor: '#0B1424',
      }}
      aria-live="polite"
      aria-label="Shaurya Investments Intro"
    >
      {/* Ambient Gold Glow behind emblem */}
      <div 
        className="absolute w-72 h-72 rounded-full bg-gold/15 blur-3xl pointer-events-none -translate-y-6" 
        aria-hidden="true" 
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md pointer-events-none">
        
        {/* 1. Official Emblem */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-6 flex items-center justify-center transition-transform duration-700 ease-out">
          <div className="absolute inset-0 rounded-[4px] bg-gradient-to-br from-navy-900 to-navy-950 border border-gold/50 shadow-elevated" />
          <div className="absolute inset-[3px] border border-gold/25 rounded-[3px] pointer-events-none" />

          <div className="relative z-10 w-full h-full p-2.5 flex items-center justify-center">
            <img
              src="/assets/logo/logo-symbol.png"
              alt="Shaurya Investments Crest"
              className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(201,169,110,0.4)]"
              draggable="false"
            />
          </div>
        </div>

        {/* 2. Official Brand Wordmark */}
        <div className="space-y-1">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.06em] text-white">
            SHAURYA
          </h1>
          <span className="block text-xs sm:text-[13px] tracking-[0.28em] font-medium text-gold uppercase">
            INVESTMENTS
          </span>
        </div>

        {/* 3. Official Tagline */}
        <p className="mt-4 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#C9A96E]/80 font-medium">
          YOUR GOALS · OUR COMMITMENT
        </p>

        {/* 4. Animated Gold Loading Progress Bar (0% to 100% left-to-right over 1.8s) */}
        <div 
          className="mt-8 intro-progress-track"
          aria-hidden="true"
        >
          <div className="intro-progress-fill" />
        </div>

      </div>
    </div>
  );
}
