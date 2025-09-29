import React from 'react';
import { Page } from '../../types';

interface DetailPageLayoutProps {
  title: string;
  subtitle: string;
  returnPage: Page;
  returnPageText: string;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
}

const DetailPageLayout: React.FC<DetailPageLayoutProps> = ({ title, subtitle, returnPage, returnPageText, setCurrentPage, children }) => {
  return (
    <div className="animate-fade-in-up">
      <div className="mb-12">
        <button
          onClick={() => setCurrentPage(returnPage)}
          className="text-indigo-600 dark:text-indigo-400 hover:underline mb-4 font-semibold text-lg"
        >
          &larr; Back to {returnPageText}
        </button>
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight">
          {title}
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl">
          {subtitle}
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        {children}
      </div>
    </div>
  );
};

export default DetailPageLayout;