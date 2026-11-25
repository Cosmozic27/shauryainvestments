import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable SectionHeading component with subtitle, title and description
 * Enhanced with subtle upward scroll reveal and expanding muted gold line
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
    <motion.div 
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignmentClasses[align] || alignmentClasses.center} ${className}`}
    >
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
        isLight ? 'text-[#F5F0E7]' : 'text-[#17243A]'
      }`}>
        {title}
      </h2>

      {/* Expanding Muted Gold Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className={`h-[1.5px] w-12 bg-gold mt-4 ${align === 'center' ? 'origin-center' : 'origin-left'}`}
      />

      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          isLight ? 'text-[#B8C0CC] font-light' : 'text-brand-secondary'
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
