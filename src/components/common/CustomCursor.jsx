import React, { useEffect, useState, useRef } from 'react';

/**
 * Premium Custom Cursor with Native Cursor Elimination & Outer Ring Magnetic Attraction:
 * - Completely hides the native browser cursor inside the website on supported desktop screens.
 * - Central crisp white dot strictly follows the user's real pointer coordinates.
 * - Outer ring smoothly trails the pointer and is gently attracted toward the center
 *   of nearby/hovered clickable elements (buttons, navbar links, WhatsApp CTA, service cards).
 * - Ring expands slightly and turns muted gold (#C9A96E) during attraction.
 * - Buttons and cards remain completely stationary (zero layout shift or button jumping).
 * - Restores native OS cursor immediately when pointer leaves the viewport or on window blur.
 * - Preserves natural I-beam text cursor over input and textarea fields.
 * - Automatically disabled on touch/coarse devices and prefers-reduced-motion.
 */
export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Position and attraction physics references
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const attractionOffset = useRef({ x: 0, y: 0 });
  const isAttracted = useRef(false);
  const isCard = useRef(false);
  const isMouseDown = useRef(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // 1. Detect touch or coarse pointer devices
    const checkTouch = () => {
      return (
        window.matchMedia('(pointer: coarse)').matches ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0
      );
    };

    // 2. Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (checkTouch() || prefersReducedMotion) {
      setIsTouchDevice(true);
      document.body.classList.remove('custom-cursor-active');
      return;
    }

    setIsTouchDevice(false);

    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
        document.body.classList.add('custom-cursor-active');
      }

      // Central dot strictly tracks real pointer coordinates
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check for clickable/interactive target under or near cursor
      const target = e.target;
      if (!target) return;

      const clickableEl = target.closest(
        'a, button, [role="button"], .interactive-card, [data-interactive], input[type="submit"], input[type="button"]'
      );

      if (clickableEl) {
        const rect = clickableEl.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = centerX - e.clientX;
        const dy = centerY - e.clientY;

        const isLargeCard = rect.width > 240;
        isCard.current = isLargeCard;
        isAttracted.current = true;

        if (isLargeCard) {
          // Restrained pull for wide service cards
          attractionOffset.current.x = Math.max(-12, Math.min(12, dx * 0.08));
          attractionOffset.current.y = Math.max(-12, Math.min(12, dy * 0.08));
        } else {
          // More pronounced attraction for buttons, navbar links and CTAs
          attractionOffset.current.x = Math.max(-20, Math.min(20, dx * 0.28));
          attractionOffset.current.y = Math.max(-14, Math.min(14, dy * 0.28));
        }
      } else {
        isAttracted.current = false;
        isCard.current = false;
        attractionOffset.current.x = 0;
        attractionOffset.current.y = 0;
      }
    };

    const onMouseDown = () => {
      isMouseDown.current = true;
    };

    const onMouseUp = () => {
      isMouseDown.current = false;
    };

    const onMouseEnter = () => {
      setIsVisible(true);
      document.body.classList.add('custom-cursor-active');
    };

    const onMouseLeave = () => {
      setIsVisible(false);
      isAttracted.current = false;
      attractionOffset.current.x = 0;
      attractionOffset.current.y = 0;
      document.body.classList.remove('custom-cursor-active');
    };

    const onWindowBlur = () => {
      setIsVisible(false);
      document.body.classList.remove('custom-cursor-active');
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('blur', onWindowBlur);

    // Initial activation if cursor is already inside window
    document.body.classList.add('custom-cursor-active');

    // RAF Lerp loop for trailing outer ring and magnetic displacement
    let animationFrameId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const render = () => {
      const targetX = mousePos.current.x + attractionOffset.current.x;
      const targetY = mousePos.current.y + attractionOffset.current.y;

      ringPos.current.x = lerp(ringPos.current.x, targetX, 0.18);
      ringPos.current.y = lerp(ringPos.current.y, targetY, 0.18);

      if (ringRef.current) {
        let scale = 1.0;
        let borderColor = 'rgba(201, 169, 110, 0.65)';
        let backgroundColor = 'transparent';

        if (isMouseDown.current) {
          scale = 0.75;
          borderColor = '#C9A96E';
          backgroundColor = 'rgba(201, 169, 110, 0.2)';
        } else if (isAttracted.current) {
          scale = isCard.current ? 1.25 : 1.4;
          borderColor = '#C9A96E';
          backgroundColor = 'rgba(201, 169, 110, 0.12)';
        }

        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) scale(${scale})`;
        ringRef.current.style.borderColor = borderColor;
        ringRef.current.style.backgroundColor = backgroundColor;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('blur', onWindowBlur);
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isVisible]);

  if (isTouchDevice) {
    return null;
  }

  return (
    <div 
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* 1. Small Crisp Central White Dot (tracks actual mouse location) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-white rounded-full shadow-[0_0_4px_rgba(0,0,0,0.4)] pointer-events-none transition-transform duration-75 will-change-transform"
      />

      {/* 2. Thin Circular Outline (attracted smoothly toward target centers) */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-gold/60 pointer-events-none transition-[border-color,background-color] duration-200 ease-out will-change-transform shadow-[0_0_12px_rgba(201,169,110,0.15)]"
      />
    </div>
  );
}
