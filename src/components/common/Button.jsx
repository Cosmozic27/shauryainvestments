import React from 'react';
import { Link } from 'react-router-dom';
import Magnetic from './Magnetic';

/**
 * Reusable Button component supporting internal links, external links, standard buttons,
 * and optional subtle magnetic interaction effects.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  to,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  magnetic = false,
  ...props
}) {
  const baseStyles = 'relative overflow-hidden inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none tracking-wide rounded-sm select-none';

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  };

  const variants = {
    // Primary: Antique Gold with Midnight Navy text & subtle shine
    primary: 'bg-gold text-[#0B1424] font-semibold hover:bg-gold-light focus:ring-gold border border-gold/40 shadow-sm active:scale-[0.99]',
    // Navy / Slate Button: Dark slate surface with gold border
    navy: 'bg-[#14243B] text-[#F5F0E7] hover:bg-[#1C3252] focus:ring-gold border border-gold/30 shadow-sm active:scale-[0.99]',
    // Gold: Luxurious warm metallic gold with dark navy text
    gold: 'bg-gold text-[#0B1424] font-semibold hover:bg-gold-light focus:ring-gold border border-gold-dark/20 shadow-gold-glow/20 active:scale-[0.99]',
    // Outline: Refined Gold / Ivory Outline for dark backgrounds
    outline: 'border border-gold/40 text-[#F5F0E7] hover:border-gold hover:bg-gold/10 focus:ring-gold active:scale-[0.99]',
    // Outline Gold
    outlineGold: 'border border-gold/50 text-gold hover:border-gold hover:bg-gold/10 focus:ring-gold active:scale-[0.99]',
    // Outline Dark: for light backgrounds
    outlineDark: 'border border-[#17243A]/40 text-[#17243A] hover:border-[#17243A] hover:bg-stone/30 focus:ring-navy active:scale-[0.99]',
    // Secondary: Soft Warm Stone / Ivory button
    secondary: 'bg-[#E6DED0] text-[#17243A] hover:bg-[#F5F0E7] focus:ring-gold border border-[#D2C7B6] active:scale-[0.99]',
    // Ghost: Subtle link style
    ghost: 'text-[#F5F0E7] hover:text-gold hover:bg-white/5 focus:ring-gold active:scale-[0.99]',
  };

  const combinedStyles = `${baseStyles} ${sizes[size] || sizes.md} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {/* Subtle gold light sweep across button on hover */}
      <span 
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-gold/25 to-transparent pointer-events-none" 
        aria-hidden="true" 
      />

      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5 relative z-10" />
      )}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 relative z-10" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedStyles}`} {...props}>
        {content}
      </Link>
    );
  } else if (href) {
    return (
      <a href={href} className={`group ${combinedStyles}`} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`group ${combinedStyles}`} {...props}>
      {content}
    </button>
  );
}
