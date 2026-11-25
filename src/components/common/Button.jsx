import React from 'react';

/**
 * Reusable Button component supporting primary, secondary, outline, and ghost variants.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none tracking-wide rounded-sm';

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  };

  const variants = {
    // Primary: Elegant Navy with subtle Gold accent
    primary: 'bg-navy text-white hover:bg-navy-800 focus:ring-navy border border-navy/20 shadow-sm active:translate-y-[0.5px]',
    // Gold: Luxurious warm metallic gold with navy text
    gold: 'bg-gold text-navy font-semibold hover:bg-gold-light focus:ring-gold border border-gold-dark/20 shadow-gold-glow/20 active:translate-y-[0.5px]',
    // Outline: Refined Stone/Navy Outline
    outline: 'border border-stone text-brand-primary hover:border-brand-primary hover:bg-stone/30 focus:ring-navy',
    // Outline Gold: Used on dark backgrounds
    outlineGold: 'border border-gold/50 text-gold hover:border-gold hover:bg-gold/10 focus:ring-gold',
    // Secondary: Soft Cream / Sand button
    secondary: 'bg-cream text-brand-primary hover:bg-sand focus:ring-navy border border-stone',
    // Ghost: Subtle link style
    ghost: 'text-brand-primary hover:text-gold-dark hover:bg-black/5 focus:ring-navy',
  };

  const combinedStyles = `${baseStyles} ${sizes[size] || sizes.md} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (href) {
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
