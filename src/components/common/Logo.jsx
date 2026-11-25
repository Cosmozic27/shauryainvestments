import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Official Brand Identity Logo for Shaurya Investments.
 * Features the authoritative metallic-gold eagle & growth arrow crest
 * paired with classical serif typography.
 */
export default function Logo({ 
  variant = 'default', 
  size = 'normal', 
  showTagline = true,
  className = '' 
}) {
  const isDark = variant === 'dark'; // dark background (e.g. footer)
  const isCompact = size === 'small';
  const isLarge = size === 'large';

  return (
    <Link 
      to="/" 
      className={`group inline-flex items-center gap-3.5 select-none shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold ${className}`}
      aria-label="Shaurya Investments - Home"
    >
      {/* Official Metallic Gold Emblem Container */}
      <div 
        className={`relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-[1.03] ${
          isCompact 
            ? 'w-9 h-9' 
            : isLarge 
            ? 'w-14 h-14' 
            : 'w-11 h-11'
        }`}
      >
        {/* Outer Shadow & Deep Navy Frame */}
        <div 
          className={`absolute inset-0 rounded-[3px] transition-all duration-300 ${
            isDark 
              ? 'bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 border border-gold/40 group-hover:border-gold shadow-md' 
              : 'bg-gradient-to-br from-navy to-navy-950 border border-gold/50 group-hover:border-gold shadow-sm'
          }`}
        />

        {/* Inner Gold Inset Frame */}
        <div className="absolute inset-[2.5px] border border-gold/25 rounded-[2px] pointer-events-none transition-colors duration-300 group-hover:border-gold/50" />

        {/* Diagonal Corner Accents */}
        <div className="absolute top-1 left-1 w-1 h-1 bg-gold/60 rounded-full" />
        <div className="absolute bottom-1 right-1 w-1 h-1 bg-gold/60 rounded-full" />

        {/* Official Metallic Gold Crest Image */}
        <div className="relative z-10 w-full h-full p-1.5 flex items-center justify-center">
          <img 
            src="/assets/logo/logo-symbol.png" 
            alt="Shaurya Investments Crest" 
            className="w-full h-full object-contain filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
            draggable="false"
          />
        </div>
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span 
            className={`font-serif tracking-tight font-bold transition-colors duration-200 ${
              isCompact 
                ? 'text-base' 
                : isLarge 
                ? 'text-2xl sm:text-3xl' 
                : 'text-xl sm:text-[22px]'
            } ${
              isDark 
                ? 'text-white group-hover:text-gold-light' 
                : 'text-brand-primary group-hover:text-navy'
            }`}
          >
            Shaurya
          </span>
          <span className="font-serif tracking-tight font-medium text-gold">
            Investments
          </span>
        </div>

        {showTagline && !isCompact && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-[1px] bg-gold" />
            <span 
              className={`text-[9.5px] uppercase tracking-[0.2em] font-medium ${
                isDark ? 'text-gray-400' : 'text-brand-secondary'
              }`}
            >
              Your Goals · Our Commitment
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
