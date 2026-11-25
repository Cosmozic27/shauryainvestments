import React, { useEffect, useState, useRef } from 'react';

/**
 * Reusable animated number counter for verified business facts.
 * Smoothly counts from 0 up to target number using ease-out interpolation.
 * Runs once upon viewport entry, never invents figures, and respects prefers-reduced-motion.
 */
export default function NumberCounter({
  target,
  duration = 1400,
  suffix = '',
  prefix = '',
  className = '',
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const startTime = performance.now();
          const startVal = 0;
          const endVal = Number(target);

          const step = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic: 1 - (1 - progress)^3
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(startVal + (endVal - startVal) * easeProgress);

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(endVal);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
