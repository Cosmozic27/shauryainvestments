import React from 'react';
import Hero from '../components/home/Hero';
import BusinessIntro from '../components/home/BusinessIntro';
import ServicePreview from '../components/home/ServicePreview';
import WhyChooseUs from '../components/home/WhyChooseUs';

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <BusinessIntro />
      <ServicePreview />
      <WhyChooseUs />
    </div>
  );
}
