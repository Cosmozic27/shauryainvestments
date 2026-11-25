import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/common/ScrollToTop';
import WhatsAppButton from './components/common/WhatsAppButton';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import LoansPage from './pages/LoansPage';
import MutualFundsPage from './pages/MutualFundsPage';
import SipInvestmentsPage from './pages/SipInvestmentsPage';
import LicInsurancePage from './pages/LicInsurancePage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/loans" element={<LoansPage />} />
          <Route path="/mutual-funds" element={<MutualFundsPage />} />
          <Route path="/sip-investments" element={<SipInvestmentsPage />} />
          <Route path="/lic-insurance" element={<LicInsurancePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* Persistent Floating WhatsApp Quick-Consultation Trigger */}
        <WhatsAppButton variant="floating" type="general" />
      </Layout>
    </BrowserRouter>
  );
}
