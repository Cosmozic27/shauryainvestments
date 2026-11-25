import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from './SmoothScroll';

/**
 * Direct GPU-Synchronized Top Scroll Progress Indicator:
 * - 0% at top of page, 100% at bottom.
 * - Zero springs, zero delayed animations, zero CSS transitions.
 * - Stops immediately when scrolling stops (never continues moving or overshoots).
 * - GPU-accelerated scaleX transform with origin-left.
 * - Synchronized with both native scrolling and Lenis smooth scrolling.
 */
export default function ScrollProgress() {
  const barRef = useRef(null);
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      if (!barRef.current) return;
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      let progress = 0;
      if (totalHeight > 0) {
        progress = Math.min(1, Math.max(0, scrollY / totalHeight));
      }

      // Direct GPU transform update: instantaneous, zero transition lag, zero overshoot
      barRef.current.style.transform = `scaleX(${progress})`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    // Native scroll and resize listeners
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Also register directly on Lenis if active
    if (lenis) {
      lenis.on('scroll', onScroll);
    }

    // Initial update on mount & route change
    updateProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (lenis) {
        lenis.off('scroll', onScroll);
      }
    };
  }, [location.pathname, lenis]);

  return (
    <div 
      data-nav-skip
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[9990] pointer-events-none"
      aria-hidden="true"
    >
      <div 
        ref={barRef}
        className="h-full w-full bg-gold shadow-[0_0_8px_rgba(201,169,110,0.6)]"
        style={{
          transform: 'scaleX(0)',
          transformOrigin: '0% 50%',
          willChange: 'transform',
          transition: 'none',
        }}
      />
    </div>
  );
}
