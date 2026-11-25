import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/common/ScrollToTop';
import SmoothScroll from './components/common/SmoothScroll';
import CustomCursor from './components/common/CustomCursor';
import IntroLoader from './components/common/IntroLoader';
import ScrollProgress from './components/common/ScrollProgress';
import WhatsAppButton from './components/common/WhatsAppButton';
import { LoaderProvider, useLoader } from './context/LoaderContext';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import LoansPage from './pages/LoansPage';
import MutualFundsPage from './pages/MutualFundsPage';
import SipInvestmentsPage from './pages/SipInvestmentsPage';
import LicInsurancePage from './pages/LicInsurancePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import FinancialDisclaimerPage from './pages/FinancialDisclaimerPage';
import NotFoundPage from './pages/NotFoundPage';

function AppContent() {
  const [showLoader, setShowLoader] = useState(true);
  const { setLoaderDone } = useLoader();

  const handleLoaderComplete = () => {
    setShowLoader(false);
    setLoaderDone(true);
  };

  return (
    <SmoothScroll>
      {showLoader && <IntroLoader onComplete={handleLoaderComplete} />}
      <ScrollProgress />
      <ScrollToTop />
      <CustomCursor />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/loans" element={<LoansPage />} />
          <Route path="/mutual-funds" element={<MutualFundsPage />} />
          <Route path="/sip-investments" element={<SipInvestmentsPage />} />
          <Route path="/lic-insurance" element={<LicInsurancePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
          <Route path="/financial-disclaimer" element={<FinancialDisclaimerPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* Persistent Floating WhatsApp Quick-Consultation Trigger */}
        <WhatsAppButton variant="floating" type="general" />
      </Layout>
    </SmoothScroll>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LoaderProvider>
        <AppContent />
      </LoaderProvider>
    </BrowserRouter>
  );
}
