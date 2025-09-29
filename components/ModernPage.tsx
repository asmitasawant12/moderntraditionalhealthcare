import React from 'react';
import Card from './Card';
import { Page } from '../types';

const InfoSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{title}</h3>
    <div className="text-gray-600 dark:text-gray-300 space-y-2">{children}</div>
  </div>
);

interface ModernPageProps {
  setCurrentPage: (page: Page) => void;
}

const ModernPage: React.FC<ModernPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="animate-fade-in-up space-y-16">
      <div>
        <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-2 tracking-tight">
          Science & Innovation
        </h1>
        <p className="text-center text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Modern healthcare is driven by scientific discovery, evidence-based practices, and technological advancement. It excels in diagnosing and treating specific ailments with high precision. Click a card to learn more about its key pillars.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Allopathic Medicine"
            onClick={() => setCurrentPage(Page.ALLOPATHIC)}
          >
            The dominant system of Western medicine, which treats diseases using drugs, radiation, or surgery.
          </Card>
          <Card
            title="Pharmaceuticals"
            onClick={() => setCurrentPage(Page.PHARMACEUTICALS)}
          >
            The science of developing and using drugs to diagnose, cure, treat, or prevent disease. A cornerstone of modern therapy.
          </Card>
          <Card
            title="Surgical Interventions"
            onClick={() => setCurrentPage(Page.SURGERY)}
          >
            The use of operative techniques to investigate or treat a medical condition. Includes minimally invasive and robotic procedures.
          </Card>
          <Card
            title="Diagnostic Technology"
            onClick={() => setCurrentPage(Page.DIAGNOSTIC)}
          >
            Advanced imaging and lab testing, such as MRI, CT scans, and genetic analysis, for precise and early diagnosis of diseases.
          </Card>
          <Card
            title="Preventive Medicine"
            onClick={() => setCurrentPage(Page.PREVENTIVE)}
          >
            A proactive approach focused on preventing illness through vaccinations, health screenings, and lifestyle guidance.
          </Card>
          <Card
            title="Biotechnology & Genetics"
            onClick={() => setCurrentPage(Page.BIOTECH)}
          >
            The cutting edge of medicine, using biological systems to develop therapies, including gene therapy and personalized medicine.
          </Card>
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Core Principles & Characteristics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoSection title="Evidence-Based">
              <p>Treatments and practices are supported by rigorous scientific research, clinical trials, and data analysis to ensure effectiveness and safety.</p>
            </InfoSection>
            <InfoSection title="Reliance on Technology">
              <p>Employs advanced technology for diagnostics, treatment, and research, from imaging machines and surgical robots to data analysis with AI.</p>
            </InfoSection>
            <InfoSection title="Specialization">
              <p>Healthcare professionals are often highly specialized in specific fields (e.g., cardiology, oncology), allowing for deep expertise in treating particular diseases.</p>
            </InfoSection>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Strengths and Limitations</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-sky-50 dark:bg-sky-900/30 p-6 rounded-xl border border-sky-200 dark:border-sky-800">
            <h3 className="text-2xl font-semibold text-sky-800 dark:text-sky-300 mb-4">Advantages</h3>
            <ul className="space-y-2 list-disc list-inside text-sky-700 dark:text-sky-200">
              <li>Scientifically tested, reliable, and standardized.</li>
              <li>Highly effective in emergencies and critical care.</li>
              <li>Continuous innovations and new discoveries.</li>
              <li>Increased life expectancy due to better disease control.</li>
              <li>Effective at treating infections and genetic disorders.</li>
            </ul>
          </div>
          <div className="bg-rose-50 dark:bg-rose-900/30 p-6 rounded-xl border border-rose-200 dark:border-rose-800">
            <h3 className="text-2xl font-semibold text-rose-800 dark:text-rose-300 mb-4">Limitations</h3>
            <ul className="space-y-2 list-disc list-inside text-rose-700 dark:text-rose-200">
              <li>High cost of treatments and medicines.</li>
              <li>Risk of side effects from drugs and surgeries.</li>
              <li>Can be overly dependent on technology.</li>
              <li>May treat symptoms rather than root causes.</li>
              <li>Accessibility issues in underdeveloped regions.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernPage;