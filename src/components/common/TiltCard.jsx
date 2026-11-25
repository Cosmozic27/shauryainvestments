import React, { useRef, useState, useEffect } from 'react';

/**
 * Reusable 3D Tilt Card wrapper.
 * Generates an understated, restrained 2-3 degree perspective tilt based on mouse position.
 * Preserves typography readability, avoids layout shifts,
 * and automatically disables on touch devices and for prefers-reduced-motion.
 */
export default function TiltCard({
  children,
  maxRotation = 2.5,
  className = '',
  ...props
}) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setDisabled(isTouch || prefersReducedMotion);
  }, []);

  const handleMouseMove = (e) => {
    if (disabled || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * maxRotation;
    const rotateY = ((x - centerX) / centerX) * maxRotation;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  };

  if (disabled) {
    return <div className={className} {...props}>{children}</div>;
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{ transform }}
      {...props}
    >
      {children}
    </div>
  );
}
