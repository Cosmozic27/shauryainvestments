import React from 'react';
import SEO from '../components/common/SEO';
import Hero from '../components/home/Hero';
import BusinessIntro from '../components/home/BusinessIntro';
import ServicePreview from '../components/home/ServicePreview';
import WhyChooseUs from '../components/home/WhyChooseUs';

export default function HomePage() {
  return (
    <div className="w-full">
      <SEO
        title="Home Loans, Mutual Funds & LIC Consultancy in Mumbai"
        description="Shaurya Investments, led by Santosh D. Chavan with 25 years of advisory experience in Malad East, Mumbai. Guiding families and businesses across Loans, Mutual Funds, SIPs, and LIC Insurance."
        canonicalPath="/"
      />
      <Hero />
      <BusinessIntro />
      <ServicePreview />
      <WhyChooseUs />
    </div>
  );
}
