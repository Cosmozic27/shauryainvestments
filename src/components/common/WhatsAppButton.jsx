import React from 'react';
import { getWhatsAppUrl } from '../../data/companyData';
import Magnetic from './Magnetic';

/**
 * Reusable WhatsApp SVG Icon
 */
export function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
    </svg>
  );
}

/**
 * Reusable WhatsAppButton component.
 * Directs users to the verified WhatsApp number with a pre-filled service inquiry message.
 */
export default function WhatsAppButton({
  type = 'general',
  variant = 'whatsapp', // 'whatsapp', 'gold', 'primary', 'outline', 'floating'
  size = 'md',
  label = 'Enquire on WhatsApp',
  className = '',
  showIcon = true,
  magnetic = false,
  ...props
}) {
  const url = getWhatsAppUrl(type);

  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 tracking-wide rounded-sm select-none";

  const sizes = {
    sm: "text-xs px-3.5 py-1.5 gap-2",
    md: "text-sm px-5 py-2.5 gap-2.5",
    lg: "text-base px-6 py-3.5 gap-3",
  };

  const variants = {
    // Elegant deep emerald with gold touch
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20ba59] shadow-sm focus:ring-[#25D366] active:translate-y-[0.5px]",
    // Muted luxury gold variant
    gold: "bg-gold text-navy font-semibold hover:bg-gold-light focus:ring-gold border border-gold-dark/20 shadow-sm active:translate-y-[0.5px]",
    // Deep navy variant
    primary: "bg-navy text-white hover:bg-navy-800 focus:ring-navy border border-navy/20 shadow-sm active:translate-y-[0.5px]",
    // Subtle stone outline variant
    outline: "border border-stone text-brand-primary hover:border-gold hover:text-gold hover:bg-cream focus:ring-gold",
    // Floating circular button on mobile/desktop
    floating: "fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-30 bg-[#25D366] text-white hover:bg-[#20ba59] p-3.5 rounded-full shadow-elevated hover:scale-105 active:scale-95 transition-all focus:ring-4 focus:ring-[#25D366]/30 print:hidden",
  };

  if (variant === 'floating') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation with Shaurya Investments"
        className={`${variants.floating} ${className}`}
        {...props}
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} - opens WhatsApp chat`}
      className={`${baseStyles} ${sizes[size] || sizes.md} ${variants[variant] || variants.whatsapp} ${className}`}
      {...props}
    >
      {showIcon && <WhatsAppIcon className={size === 'sm' ? "w-3.5 h-3.5" : "w-4 h-4 shrink-0"} />}
      <span>{label}</span>
    </a>
  );
}
