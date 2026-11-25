import React, { useRef, useState, useEffect } from 'react';

/**
 * ImageMaskReveal: Smoothly reveals photography using an elegant clip-path wipe
 * without altering aspect ratio or causing layout shift.
 * Respects prefers-reduced-motion.
 */
export default function ImageMaskReveal({
  src,
  alt = '',
  className = '',
  imageClassName = '',
  ...props
}) {
  const containerRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        clipPath: isRevealed ? 'inset(0% 0 0 0)' : 'inset(12% 0 12% 0)',
        opacity: isRevealed ? 1 : 0.3,
        transition: 'clip-path 1.0s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s ease',
      }}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
          isRevealed ? 'scale-100' : 'scale-105'
        } ${imageClassName}`}
        {...props}
      />
    </div>
  );
}
