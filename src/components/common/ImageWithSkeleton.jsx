import React, { useState } from 'react';
import Skeleton from './Skeleton';

/**
 * Image loader component that displays a warm champagne skeleton
 * until the genuine image is loaded, transitioning with a smooth fade-in.
 */
export default function ImageWithSkeleton({
  src,
  alt = '',
  className = '',
  imageClassName = '',
  skeletonHeight = '100%',
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton placeholder while image decodes */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10">
          <Skeleton variant="rectangular" height={skeletonHeight} className="h-full w-full" />
        </div>
      )}

      {/* Actual Image with smooth opacity transition */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-500 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${imageClassName}`}
        {...props}
      />
    </div>
  );
}
