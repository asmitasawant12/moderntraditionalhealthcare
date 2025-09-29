import React from 'react';
import { FacebookIcon } from './icons/FacebookIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 dark:text-gray-400">
        <p className="mb-4">&copy; {new Date().getFullYear()} The Art of Healing. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <FacebookIcon className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <TwitterIcon className="h-6 w-6" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <LinkedinIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);