import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/**
 * Reusable PageHeader for internal pages with breadcrumb, subtitle badge, and editorial title.
 */
export default function PageHeader({
  badge,
  title,
  description,
  breadcrumbs = [],
  className = '',
}) {
  return (
    <section className={`pt-32 pb-16 md:pt-40 md:pb-20 bg-champagne border-b border-stone relative overflow-hidden ${className}`}>
      {/* Subtle ambient lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-sand/60 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-brand-secondary mb-6 font-medium">
          <Link to="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-stone shrink-0" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-gold transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-brand-primary font-semibold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Badge & Subtitle */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cream border border-gold/40 rounded-full mb-4 shadow-soft">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-[11px] uppercase tracking-widest font-semibold text-brand-primary">
              {badge}
            </span>
          </div>
        )}

        {/* Heading */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-primary tracking-tight max-w-4xl leading-[1.15]">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="mt-5 text-base sm:text-lg text-brand-secondary leading-relaxed max-w-3xl font-normal">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
