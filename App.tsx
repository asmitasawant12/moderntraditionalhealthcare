import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import BackToTopButton from './components/BackToTopButton';

// Lazy load all page components
const HomePage = lazy(() => import('./components/HomePage'));
const TraditionalPage = lazy(() => import('./components/TraditionalPage'));
const ModernPage = lazy(() => import('./components/ModernPage'));
const ComparisonPage = lazy(() => import('./components/ComparisonPage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const SupportPage = lazy(() => import('./components/SupportPage'));

// Traditional Detail Pages
const AyurvedaPage = lazy(() => import('./components/details/AyurvedaPage'));
const HerbalMedicinePage = lazy(() => import('./components/details/HerbalMedicinePage'));
const TcmPage = lazy(() => import('./components/details/TcmPage'));
const NaturopathyPage = lazy(() => import('./components/details/NaturopathyPage'));
const UnaniPage = lazy(() => import('./components/details/UnaniPage'));
const FolkIndigenousPage = lazy(() => import('./components/details/FolkIndigenousPage'));

// Modern Detail Pages
const AllopathicPage = lazy(() => import('./components/details/AllopathicPage'));
const PharmaceuticalsPage = lazy(() => import('./components/details/PharmaceuticalsPage'));
const SurgeryPage = lazy(() => import('./components/details/SurgeryPage'));
const DiagnosticPage = lazy(() => import('./components/details/DiagnosticPage'));
const PreventivePage = lazy(() => import('./components/details/PreventivePage'));
const BiotechPage = lazy(() => import('./components/details/BiotechPage'));

// Case Study Detail Pages
const CaseStudyIndiaPage = lazy(() => import('./components/details/CaseStudyIndiaPage'));
const CaseStudyChinaPage = lazy(() => import('./components/details/CaseStudyChinaPage'));
const CaseStudyAfricaPage = lazy(() => import('./components/details/CaseStudyAfricaPage'));
const CaseStudyBrazilPage = lazy(() => import('./components/details/CaseStudyBrazilPage'));
const CaseStudyJapanPage = lazy(() => import('./components/details/CaseStudyJapanPage'));

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.TRADITIONAL:
        return <TraditionalPage setCurrentPage={setCurrentPage} />;
      case Page.MODERN:
        return <ModernPage setCurrentPage={setCurrentPage} />;
      case Page.COMPARISON:
        return <ComparisonPage setCurrentPage={setCurrentPage} />;
      case Page.ABOUT_US:
        return <AboutPage />;
      case Page.SUPPORT:
        return <SupportPage />;

      // Traditional Sub-pages
      case Page.AYURVEDA:
        return <AyurvedaPage setCurrentPage={setCurrentPage} />;
      case Page.HERBAL_MEDICINE:
        return <HerbalMedicinePage setCurrentPage={setCurrentPage} />;
      case Page.TCM:
        return <TcmPage setCurrentPage={setCurrentPage} />;
      case Page.NATUROPATHY:
        return <NaturopathyPage setCurrentPage={setCurrentPage} />;
      case Page.UNANI:
        return <UnaniPage setCurrentPage={setCurrentPage} />;
      case Page.FOLK_INDIGENOUS:
        return <FolkIndigenousPage setCurrentPage={setCurrentPage} />;
      
      // Modern Sub-pages
      case Page.ALLOPATHIC:
        return <AllopathicPage setCurrentPage={setCurrentPage} />;
      case Page.PHARMACEUTICALS:
        return <PharmaceuticalsPage setCurrentPage={setCurrentPage} />;
      case Page.SURGERY:
        return <SurgeryPage setCurrentPage={setCurrentPage} />;
      case Page.DIAGNOSTIC:
        return <DiagnosticPage setCurrentPage={setCurrentPage} />;
      case Page.PREVENTIVE:
        return <PreventivePage setCurrentPage={setCurrentPage} />;
      case Page.BIOTECH:
        return <BiotechPage setCurrentPage={setCurrentPage} />;

      // Case Study Sub-pages
      case Page.CASE_STUDY_INDIA:
        return <CaseStudyIndiaPage setCurrentPage={setCurrentPage} />;
      case Page.CASE_STUDY_CHINA:
        return <CaseStudyChinaPage setCurrentPage={setCurrentPage} />;
      case Page.CASE_STUDY_AFRICA:
        return <CaseStudyAfricaPage setCurrentPage={setCurrentPage} />;
      case Page.CASE_STUDY_BRAZIL:
        return <CaseStudyBrazilPage setCurrentPage={setCurrentPage} />;
      case Page.CASE_STUDY_JAPAN:
        return <CaseStudyJapanPage setCurrentPage={setCurrentPage} />;

      case Page.HOME:
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 dark:text-gray-900 bg-[#f8f9fa] dark:bg-[#121212]">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Suspense fallback={<Loader />}>
          {renderPage()}
        </Suspense>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;