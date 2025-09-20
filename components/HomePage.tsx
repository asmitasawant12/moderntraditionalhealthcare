import React from 'react';
import { Page } from '../types';
import FeatureCard from './FeatureCard';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-280px)]">
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tighter">
              Where Ancient Wisdom Meets Modern Science.
            </h1>
            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-gray-600 dark:text-gray-300">
              Explore the fascinating world of healthcare, from time-honored traditional practices to the cutting-edge innovations of modern medicine.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
            <div className="mt-8 flex justify-center lg:justify-start items-center space-x-4 text-gray-500">
              <div className="flex items-center">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="ml-2 font-semibold">5.0</span>
              </div>
              <p className="text-sm">Based on 1,200+ academic reviews.</p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://picsum.photos/seed/healing/800/800"
              alt="Art of Healing"
              className="rounded-3xl object-cover w-full h-full shadow-2xl"
            />
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
              imageUrl="https://picsum.photos/seed/wisdom/800/600"
              title="The Wisdom of Ages"
              description="Delve into healing traditions passed down through generations. Explore holistic philosophies that focus on balance, nature, and the body's innate ability to heal."
              buttonText="Explore Traditional"
            />
            <FeatureCard
              page={Page.MODERN}
              setCurrentPage={setCurrentPage}
              imageUrl="https://picsum.photos/seed/science/800/600"
              title="The Power of Science"
              description="Discover the world of evidence-based medicine, from life-saving pharmaceuticals and precision surgeries to the cutting-edge diagnostics that make them possible."
              buttonText="Explore Modern"
              reverse={true}
            />
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