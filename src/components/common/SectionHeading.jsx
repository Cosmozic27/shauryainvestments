import React from 'react';

/**
 * Reusable SectionHeading component with subtitle, title and description
 */
export default function SectionHeading({
  subtitle,
  title,
  description,
  align = 'center',
  isLight = false,
  className = '',
}) {
  const alignmentClasses = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignmentClasses[align] || alignmentClasses.center} ${className}`}>
      {subtitle && (
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-[1.5px] bg-gold" />
          <span className="text-xs uppercase font-semibold tracking-widest text-gold">
            {subtitle}
          </span>
          {align === 'center' && <span className="w-6 h-[1.5px] bg-gold" />}
        </div>
      )}
      
      <h2 className={`font-serif text-3xl sm:text-4xl lg:text-[40px] leading-tight font-semibold tracking-tight ${
        isLight ? 'text-white' : 'text-brand-primary'
      }`}>
        {title}
      </h2>

      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          isLight ? 'text-gray-300' : 'text-brand-secondary'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
