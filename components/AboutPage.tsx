import React from 'react';
import { TargetIcon } from './icons/TargetIcon';
import { EyeIcon } from './icons/EyeIcon';

const PhilosophyCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{children}</p>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up space-y-20">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          About The Art of Healing
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
          Uncovering the world of wellness by bridging the gap between ancient wisdom and modern science.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/40 rounded-full">
                <TargetIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To provide a clear, balanced, and comprehensive resource that explores both traditional and modern healthcare. We aim to foster understanding and empower individuals to make informed, holistic decisions about their health and well-being.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/40 rounded-full">
                <EyeIcon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We envision a future where the best of all medical traditions are integrated. A world where the precision of science and the wisdom of ancient practices work hand-in-hand to create a more compassionate, personalized, and effective approach to human healing.
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">Our Philosophy</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PhilosophyCard title="Balance & Objectivity">
            We present information without bias, highlighting the strengths and limitations of every approach to provide a complete picture.
          </PhilosophyCard>
          <PhilosophyCard title="Empowerment Through Knowledge">
            We believe that understanding the 'why' and 'how' behind different healing methods is the first step toward true wellness.
          </PhilosophyCard>
          <PhilosophyCard title="Respect for Tradition & Science">
            We honor the deep cultural roots of traditional medicine while embracing the rigorous, evidence-based foundation of modern science.
          </PhilosophyCard>
        </div>
      </div>
      
      {/* Inspiration Section */}
       <div className="py-12 bg-gray-100 dark:bg-gray-800/50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-2xl">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" 
                alt="A diverse team collaborating on the project" 
                className="rounded-2xl object-cover w-full h-80 shadow-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">The Inspiration</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  'The Art of Healing' was born from a simple yet profound question: How can we navigate the vast and often conflicting world of healthcare information? In an age of misinformation, finding trustworthy, balanced content is a challenge.
                </p>
                <p>
                  This project was created by a small, dedicated group of developers and health enthusiasts passionate about making knowledge accessible. Our goal was to build a beautiful, intuitive platform that cuts through the noise and presents the rich tapestry of human healing—from ancient rituals to modern labs—in a way that is respectful, insightful, and easy to explore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;