import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

const LenisContext = createContext(null);

export const useLenis = () => useContext(LenisContext);

/**
 * High-performance, natural Lenis Smooth Scrolling Provider:
 * - Natural, controlled inertia (wheelMultiplier: 0.75, duration: 0.85s).
 * - ZERO runaway inertia: native scroll-behavior is strictly disabled.
 * - Mobile touch scrolling remains 100% native hardware scroll (syncTouch: false).
 * - Smoothly handles anchor clicks without erratic jumping.
 * - Respects prefers-reduced-motion.
 */
export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    // Initialize Lenis with controlled, natural parameters
    const lenis = new Lenis({
      duration: 0.85,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.75, // Natural and responsive, prevents runaway inertia
      touchMultiplier: 1.0,
      syncTouch: false, // Mobile touch scrolling stays 100% native hardware scroll
      infinite: false,
    });

    lenisRef.current = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    // Handle standard anchor tag clicks seamlessly
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element, { offset: -90, duration: 0.9 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Synchronize route changes
  useEffect(() => {
    if (lenisRef.current) {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          lenisRef.current.scrollTo(element, { offset: -90, duration: 0.9 });
          return;
        }
      }
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname, location.hash]);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
}
