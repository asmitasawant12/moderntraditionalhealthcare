import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import { Page } from '../types';
import { BalanceIcon } from './icons/BalanceIcon';
import { SearchIcon } from './icons/SearchIcon';
import { searchData, SearchableContent } from '../searchData';
import { LeafIcon } from './icons/LeafIcon';
import { StethoscopeIcon } from './icons/StethoscopeIcon';
import { ScaleIcon } from './icons/ScaleIcon';
import { InfoIcon } from './icons/InfoIcon';
import { HelpCircleIcon } from './icons/HelpCircleIcon';


interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

interface NavLinkProps {
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = memo(({ page, currentPage, setCurrentPage, children, icon }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => setCurrentPage(page)}
      className={`relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors duration-200 shrink-0 ${
        isActive
          ? 'text-indigo-600 dark:text-indigo-400'
          : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
      }`}
    >
      {icon}
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
      )}
    </button>
  );
});

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchableContent[]>([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    const lowerCaseQuery = searchQuery.toLowerCase();
    const results = searchData.filter(item =>
      item.title.toLowerCase().includes(lowerCaseQuery) ||
      item.keywords.some(keyword => keyword.toLowerCase().includes(lowerCaseQuery))
    );
    setSearchResults(results);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchActive(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = useCallback((page: Page) => {
    setCurrentPage(page);
  }, [setCurrentPage]);

  const handleResultClick = useCallback((page: Page) => {
    setCurrentPage(page);
    setSearchQuery('');
    setSearchResults([]);
    setIsSearchActive(false);
  }, [setCurrentPage]);

  const navItems = [
    { page: Page.HOME, label: 'Home', Icon: BalanceIcon },
    { page: Page.TRADITIONAL, label: 'Traditional', Icon: LeafIcon },
    { page: Page.MODERN, label: 'Modern', Icon: StethoscopeIcon },
    { page: Page.COMPARISON, label: 'Comparison', Icon: ScaleIcon },
    { page: Page.ABOUT_US, label: 'About Us', Icon: InfoIcon },
    { page: Page.SUPPORT, label: 'Support', Icon: HelpCircleIcon }
  ];
  
  const searchInput = (
    <>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" aria-hidden="true">
        <SearchIcon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="search"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setIsSearchActive(true)}
        className="block w-full pl-10 pr-3 py-2 bg-gray-100 dark:bg-gray-700/50 border border-transparent rounded-md leading-5 text-gray-900 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:bg-white dark:focus:bg-gray-800 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition"
      />
    </>
  );

  const searchResultsDropdown = (
    <div className="absolute z-10 mt-2 w-full sm:w-80 right-0 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
      <ul className="max-h-80 overflow-y-auto" role="listbox">
        {searchResults.length > 0 ? (
          searchResults.map(item => (
            <li key={item.page}>
              <button
                onClick={() => handleResultClick(item.page)}
                className="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                role="option"
                aria-selected="false"
              >
                <p className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
              </button>
            </li>
          ))
        ) : (
          <li className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">No results found.</li>
        )}
      </ul>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNavClick(Page.HOME)}
          >
            <BalanceIcon className="h-8 w-8 text-indigo-600" />
            <span className="ml-3 text-xl font-semibold text-gray-800 dark:text-white hidden sm:block">
              Art of Healing
            </span>
          </div>
          <div className="flex items-center">
            <div ref={searchContainerRef} className="relative w-full max-w-[150px] sm:max-w-xs">
              {searchInput}
              {isSearchActive && searchQuery && searchResultsDropdown}
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-b border-gray-200 dark:border-gray-800">
        <nav className="container mx-auto px-2 sm:px-6 lg:px-8 flex items-center overflow-x-auto whitespace-nowrap hide-scrollbar" aria-label="Main navigation">
            {navItems.map(({ page, label, Icon }) => (
                <NavLink key={page} page={page} currentPage={currentPage} setCurrentPage={handleNavClick} icon={<Icon className="h-4 w-4" />}>
                    {label}
                </NavLink>
            ))}
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);