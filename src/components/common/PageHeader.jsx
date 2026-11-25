import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ArchitecturalHeroBackground from './ArchitecturalHeroBackground';

/**
 * Reusable PageHeader for internal pages with breadcrumb, subtitle badge, editorial title,
 * and page-specific designer-quality architectural hero backgrounds.
 */
export default function PageHeader({
  badge,
  title,
  description,
  breadcrumbs = [],
  variant = 'default',
  className = '',
}) {
  return (
    <section 
      data-theme="dark"
      data-nav-contrast="dark"
      className={`pt-32 pb-16 md:pt-40 md:pb-20 bg-[#0B1424] text-[#F5F0E7] border-b border-gold/20 relative overflow-hidden ${className}`}
    >
      {/* Designer-Quality Architectural Hero Background Composition */}
      <ArchitecturalHeroBackground variant={variant} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-[#B8C0CC] mb-6 font-medium">
          <Link to="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-gold/40 shrink-0" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-gold transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gold font-semibold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Badge & Subtitle */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#14243B] border border-gold/40 rounded-full mb-4 shadow-soft">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-[11px] uppercase tracking-widest font-semibold text-[#F5F0E7]">
              {badge}
            </span>
          </div>
        )}

        {/* Heading */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#F5F0E7] tracking-tight max-w-4xl leading-[1.15]">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="mt-5 text-base sm:text-lg text-[#B8C0CC] leading-relaxed max-w-3xl font-light">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
