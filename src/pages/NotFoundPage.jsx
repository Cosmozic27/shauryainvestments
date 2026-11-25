import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Compass } from 'lucide-react';
import Button from '../components/common/Button';

export default function NotFoundPage() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-champagne py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6 bg-cream p-8 sm:p-10 rounded-sm border border-stone shadow-elevated">
        
        {/* 404 Status Emblem */}
        <div className="w-16 h-16 rounded bg-navy text-gold font-serif text-2xl font-bold flex items-center justify-center mx-auto border border-gold/40 shadow-soft">
          404
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest font-semibold text-gold block">
            Resource Unavailable
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-primary">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed font-light">
            The page or document you requested cannot be located. It may have been relocated or you might have followed an outdated link.
          </p>
        </div>

        <div className="pt-4 border-t border-stone flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            to="/"
            variant="primary"
            size="md"
            icon={Home}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Return Home
          </Button>
          <Button
            to="/services"
            variant="outline"
            size="md"
            icon={Compass}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            All Services
          </Button>
        </div>

        <p className="text-[11px] text-brand-secondary pt-2">
          Need personal guidance? Visit us at Kurar Village, Malad East, Mumbai.
        </p>

      </div>
    </div>
  );
}
