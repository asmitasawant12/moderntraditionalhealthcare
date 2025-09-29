import React from 'react';
import { Page } from '../types';

interface FeatureCardProps {
  page: Page;
  setCurrentPage: (page: Page) => void;
  imageUrl?: string;
  title: string;
  description: string;
  buttonText: string;
  reverse?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ page, setCurrentPage, imageUrl, title, description, buttonText, reverse = false }) => {
  // If no image, render a centered, text-only version
  if (!imageUrl) {
    return (
      <div className="w-full flex flex-col justify-center items-center text-center animate-fade-in-up">
        <div className="max-w-3xl">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => setCurrentPage(page)}
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              {buttonText} &rarr;
            </button>
            <button
              onClick={() => setCurrentPage(page)}
              className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline transition-colors"
              aria-label={`Learn more about ${title}`}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Original rendering logic for when imageUrl exists
  const imageColumn = (
    <div className="w-full lg:w-1/2 animate-fade-in-up">
      <img
        src={imageUrl}
        alt={title}
        className="rounded-2xl object-cover w-full h-80 shadow-xl"
        loading="lazy"
        decoding="async"
      />
    </div>
  );

  const textColumn = (
    <div className="w-full lg:w-1/2 flex flex-col justify-center lg:px-12 animate-fade-in-up">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      <div className="flex items-center gap-6">
        <button
          onClick={() => setCurrentPage(page)}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
        >
          {buttonText} &rarr;
        </button>
        <button
          onClick={() => setCurrentPage(page)}
          className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline transition-colors"
          aria-label={`Learn more about ${title}`}
        >
          Learn More
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

export default React.memo(FeatureCard);