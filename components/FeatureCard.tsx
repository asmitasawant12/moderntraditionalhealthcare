import React from 'react';
import { Page } from '../types';

interface FeatureCardProps {
  page: Page;
  setCurrentPage: (page: Page) => void;
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  reverse?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ page, setCurrentPage, imageUrl, title, description, buttonText, reverse = false }) => {
  const imageColumn = (
    <div className="w-full lg:w-1/2 animate-fade-in-up">
      <img src={imageUrl} alt={title} className="rounded-2xl object-cover w-full h-80 shadow-xl" />
    </div>
  );

  const textColumn = (
    <div className="w-full lg:w-1/2 flex flex-col justify-center lg:px-12 animate-fade-in-up">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      <div className="flex">
        <button
          onClick={() => setCurrentPage(page)}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
        >
          {buttonText} &rarr;
        </button>
      </div>
    </div>
  );

  return (
    <div className={`flex flex-col lg:flex-row gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      {imageColumn}
      {textColumn}
    </div>
  );
};

export default FeatureCard;