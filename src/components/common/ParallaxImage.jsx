import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Reusable Subtle Parallax Image component:
 * - Applies a gentle, restrained vertical parallax offset (±12px) during scroll.
 * - Strictly maintains container dimensions and image aspect ratio.
 * - Scales image slightly (1.06) to ensure seamless bleed without border gaps.
 * - Automatically disabled on mobile/touch devices and prefers-reduced-motion.
 */
export default function ParallaxImage({
  src,
  alt = '',
  className = '',
  imageClassName = '',
  offset = 12,
  children,
  ...props
}) {
  const containerRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setDisabled(isTouch || prefersReducedMotion);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  if (disabled) {
    return (
      <div ref={containerRef} className={`overflow-hidden relative ${className}`}>
        {src ? (
          <img src={src} alt={alt} className={`w-full h-full object-cover ${imageClassName}`} {...props} />
        ) : (
          children
        )}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`overflow-hidden relative ${className}`}>
      {src ? (
        <motion.img
          src={src}
          alt={alt}
          style={{ y }}
          className={`w-full h-full object-cover scale-[1.06] ${imageClassName}`}
          {...props}
        />
      ) : (
        <motion.div style={{ y }} className="w-full h-full scale-[1.06]">
          {children}
        </motion.div>
      )}
    </div>
  );
}
