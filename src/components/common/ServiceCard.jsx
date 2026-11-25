import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  UserCheck, 
  Briefcase, 
  TrendingUp, 
  PiggyBank, 
  ShieldCheck, 
  Check, 
  ArrowRight 
} from 'lucide-react';

const iconMap = {
  Home,
  UserCheck,
  Briefcase,
  TrendingUp,
  PiggyBank,
  ShieldCheck,
};

/**
 * Reusable Entirely-Clickable Service Card:
 * - Entire card is a semantic, keyboard-accessible React Router Link.
 * - Zero nested interactive elements (no nested buttons or links).
 * - Subtle cursor-following radial spotlight (muted champagne/gold).
 * - Restrained hover elevation without layout shift.
 * - Keyboard accessible with visible focus-visible outline.
 */
export default function ServiceCard({
  service,
  index = 0,
  enableSpotlight = true,
  className = '',
  variant = 'dark', // 'dark' | 'light'
}) {
  const IconComponent = iconMap[service.icon] || TrendingUp;
  const formattedIndex = String(index + 1).padStart(2, '0');
  const isDark = variant === 'dark';

  // Spotlight coordinates within card
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!enableSpotlight) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link
      to={service.path}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Explore ${service.title} - ${service.category}`}
      className={`${
        isDark ? 'card-glass-dark text-[#F5F0E7]' : 'card-glass-light text-brand-primary'
      } interactive-card group relative p-8 rounded-sm flex flex-col justify-between h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 select-none ${className}`}
      data-interactive="card"
    >
      {/* Hairline Gold Accent on Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gold transition-colors duration-300" />

      {/* Subtle cursor-following radial spotlight */}
      {enableSpotlight && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-sm opacity-0 group-hover:opacity-100 overflow-hidden"
          style={{
            background: `radial-gradient(350px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(198, 166, 107, 0.12), transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}

      <div>
        {/* Top Bar: Number & Category Badge */}
        <div className={`flex items-center justify-between pb-6 border-b ${
          isDark ? 'border-gold/20' : 'border-stone/60'
        } relative z-10`}>
          <span className="font-serif text-2xl font-bold text-gold tracking-tight">
            {formattedIndex}
          </span>
          <span className={`text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-sm border ${
            isDark 
              ? 'bg-[#0B1424] text-gold border-gold/30' 
              : 'text-brand-primary/80 bg-sand border-stone/60'
          }`}>
            {service.category}
          </span>
        </div>

        {/* Icon & Title */}
        <div className="mt-6 flex items-start gap-4 relative z-10">
          <div className={`w-12 h-12 rounded-sm border flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm ${
            isDark 
              ? 'bg-[#0B1424] border-gold/30 text-gold group-hover:bg-gold group-hover:text-[#0B1424]' 
              : 'bg-sand/70 border-stone text-brand-primary group-hover:text-gold group-hover:bg-navy'
          }`}>
            <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          </div>

          <div>
            <h3 className={`font-serif text-xl font-semibold transition-colors ${
              isDark ? 'text-[#F5F0E7] group-hover:text-gold' : 'text-brand-primary group-hover:text-navy'
            }`}>
              {service.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className={`mt-4 text-sm leading-relaxed font-normal relative z-10 ${
          isDark ? 'text-[#B8C0CC]' : 'text-brand-secondary'
        }`}>
          {service.description}
        </p>

        {/* Highlights Bullet List */}
        <div className={`mt-6 pt-5 border-t space-y-2.5 relative z-10 ${
          isDark ? 'border-gold/20' : 'border-stone/60'
        }`}>
          {service.highlights.map((highlight, idx) => (
            <div key={idx} className={`flex items-start gap-2.5 text-xs ${
              isDark ? 'text-[#F5F0E7]/90' : 'text-brand-primary/85'
            }`}>
              <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Non-interactive Directional Footer Indicator */}
      <div 
        className={`mt-8 pt-4 border-t flex items-center justify-between text-xs font-medium relative z-10 ${
          isDark ? 'border-gold/20 text-[#B8C0CC] group-hover:text-[#F5F0E7]' : 'border-stone/60 text-brand-secondary group-hover:text-brand-primary'
        } transition-colors`}
        aria-hidden="true"
      >
        <span className="tracking-wide">Explore details & process</span>
        <div className="flex items-center gap-1 text-gold font-semibold text-[11px] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
          <span>View details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}
