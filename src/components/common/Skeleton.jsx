import React from 'react';

/**
 * Reusable Skeleton loader with warm champagne/stone tones and soft shimmer.
 * Respects prefers-reduced-motion by disabling animations.
 */
export default function Skeleton({
  variant = 'text', // 'text', 'circular', 'rectangular', 'card'
  width,
  height,
  className = '',
  ...props
}) {
  const baseClasses = 'relative overflow-hidden bg-stone/40 rounded-sm select-none';

  const variantClasses = {
    text: 'h-4 w-full rounded-sm',
    circular: 'rounded-full shrink-0',
    rectangular: 'w-full rounded-sm',
    card: 'w-full h-64 rounded-sm border border-stone/50',
  };

  const style = {};
  if (width) style.width = width;
  if (height) style.height = height;

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant] || ''} ${className}`}
      style={style}
      aria-hidden="true"
      {...props}
    >
      {/* Soft Shimmer Overlay */}
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-cream/60 to-transparent" />
    </div>
  );
}

/**
 * Skeleton Card for Service / Feature Cards
 */
export function CardSkeleton({ className = '' }) {
  return (
    <div className={`p-6 sm:p-8 bg-cream/70 border border-stone rounded-sm space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <Skeleton variant="circular" width="48px" height="48px" />
        <Skeleton variant="text" width="60px" height="14px" />
      </div>
      <Skeleton variant="text" width="75%" height="22px" className="mt-4" />
      <Skeleton variant="text" width="100%" height="14px" />
      <Skeleton variant="text" width="90%" height="14px" />
      <div className="pt-4 border-t border-stone/40 flex justify-between items-center">
        <Skeleton variant="text" width="80px" height="14px" />
        <Skeleton variant="circular" width="16px" height="16px" />
      </div>
    </div>
  );
}
