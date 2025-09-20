import React, { useState } from 'react';
import { Page } from './types';
import Header from './components/Header';
import HomePage from './components/HomePage';
import TraditionalPage from './components/TraditionalPage';
import ModernPage from './components/ModernPage';
import ComparisonPage from './components/ComparisonPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case Page.TRADITIONAL:
        return <TraditionalPage />;
      case Page.MODERN:
        return <ModernPage />;
      case Page.COMPARISON:
        return <ComparisonPage />;
      case Page.HOME:
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 dark:text-gray-900 bg-[#f8f9fa] dark:bg-[#121212]">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;