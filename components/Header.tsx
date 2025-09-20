import React from 'react';
import { Page } from '../types';
import { BalanceIcon } from './icons/BalanceIcon';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, setCurrentPage, children }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => setCurrentPage(page)}
      className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'text-indigo-600 dark:text-indigo-400'
          : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
      )}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setCurrentPage(Page.HOME)}
          >
            <BalanceIcon className="h-8 w-8 text-indigo-600" />
            <span className="ml-3 text-xl font-semibold text-gray-800 dark:text-white hidden sm:block">
              Art of Healing
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-2">
            <NavLink page={Page.HOME} currentPage={currentPage} setCurrentPage={setCurrentPage}>
              Home
            </NavLink>
            <NavLink page={Page.TRADITIONAL} currentPage={currentPage} setCurrentPage={setCurrentPage}>
              Traditional
            </NavLink>
            <NavLink page={Page.MODERN} currentPage={currentPage} setCurrentPage={setCurrentPage}>
              Modern
            </NavLink>
             <NavLink page={Page.COMPARISON} currentPage={currentPage} setCurrentPage={setCurrentPage}>
              Comparison
            </NavLink>
          </nav>
          <div className="flex items-center">
            <button
              onClick={() => setCurrentPage(Page.COMPARISON)}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
            >
              Compare Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;