import React from 'react';
import { Page } from '../types';
import FeatureCard from './FeatureCard';
import { LeafIcon } from './icons/LeafIcon';
import { StethoscopeIcon } from './icons/StethoscopeIcon';
import { ScaleIcon } from './icons/ScaleIcon';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="py-16 sm:py-24">
          {/* Text Content */}
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tighter">
              Where Ancient Wisdom Meets Modern Science.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Explore the fascinating world of healthcare, from time-honored traditional practices to the cutting-edge innovations of modern healthcare.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage(Page.TRADITIONAL)}
                className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 duration-300 ease-in-out"
              >
                Explore Traditions
              </button>
              <button
                onClick={() => setCurrentPage(Page.MODERN)}
                className="px-8 py-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-bold rounded-lg shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform transform hover:scale-105 duration-300 ease-in-out"
              >
                Discover Innovations
              </button>
            </div>
            <div className="mt-8 flex justify-center items-center space-x-4 text-gray-500">
              <div className="flex items-center">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="ml-2 font-semibold">5.0</span>
              </div>
              <p className="text-sm">Based on 1,200+ academic reviews.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white dark:bg-gray-800/50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">A Journey of Discovery</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
              We believe the path to wellness is paved with knowledge. Our goal is to foster understanding and empower you to make informed decisions about your health.
            </p>
          </div>
          <div className="space-y-20">
            <FeatureCard
              page={Page.TRADITIONAL}
              setCurrentPage={setCurrentPage}
              title="The Wisdom of Ages"
              description="Delve into healing traditions passed down through generations. Explore holistic philosophies that focus on balance, nature, and the body's innate ability to heal."
              buttonText="Explore Traditional"
            />
            <FeatureCard
              page={Page.MODERN}
              setCurrentPage={setCurrentPage}
              title="The Power of Science"
              description="Discover the world of evidence-based medicine, from life-saving pharmaceuticals and precision surgeries to the cutting-edge diagnostics that make them possible."
              buttonText="Explore Modern"
              reverse={true}
            />
          </div>
        </div>
      </div>

      {/* Health Journey Section */}
      <div className="py-24">
        <div className="container mx-auto animate-fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Your Path to Knowledge</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
              Follow these steps to build a comprehensive understanding of healthcare.
            </p>
          </div>
          <div className="relative">
            <div className="absolute top-12 left-0 w-full hidden md:block" aria-hidden="true">
              <div className="w-5/6 lg:w-2/3 mx-auto border-t-2 border-dashed border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative grid md:grid-cols-3 gap-12 items-start">
              {/* Step 1 */}
              <div className="text-center p-6 bg-white dark:bg-gray-800/50 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-emerald-100 dark:bg-emerald-900/40 rounded-full">
                    <LeafIcon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Step 1: Roots of Wellness</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 h-16">
                  Begin by exploring ancient healing traditions and holistic philosophies.
                </p>
                <button
                  onClick={() => setCurrentPage(Page.TRADITIONAL)}
                  className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline transition-colors"
                >
                  Explore Traditional &rarr;
                </button>
              </div>
              {/* Step 2 */}
              <div className="text-center p-6 bg-white dark:bg-gray-800/50 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-sky-100 dark:bg-sky-900/40 rounded-full">
                    <StethoscopeIcon className="h-8 w-8 text-sky-600 dark:text-sky-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Step 2: Scientific Frontiers</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 h-16">
                  Discover the world of evidence-based medicine and technological innovation.
                </p>
                <button
                  onClick={() => setCurrentPage(Page.MODERN)}
                  className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline transition-colors"
                >
                  Explore Modern &rarr;
                </button>
              </div>
              {/* Step 3 */}
              <div className="text-center p-6 bg-white dark:bg-gray-800/50 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-amber-100 dark:bg-amber-900/40 rounded-full">
                    <ScaleIcon className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Step 3: Bridging the Gap</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 h-16">
                  Compare the two approaches to see how they can work together.
                </p>
                <button
                  onClick={() => setCurrentPage(Page.COMPARISON)}
                  className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline transition-colors"
                >
                  Compare Methods &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="container mx-auto animate-fade-in-up">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">What the Experts Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">"The good physician treats the disease; the great physician treats the patient who has the disease."</p>
              <p className="font-bold text-right text-indigo-600 dark:text-indigo-400">- William Osler</p>
            </div>
            <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">"The art of healing comes from nature, not from the physician. Therefore the physician must start from nature, with an open mind."</p>
              <p className="font-bold text-right text-indigo-600 dark:text-indigo-400">- Paracelsus</p>
            </div>
            <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">"It is more important to know what sort of person has a disease than to know what sort of disease a person has."</p>
              <p className="font-bold text-right text-indigo-600 dark:text-indigo-400">- Hippocrates</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;