import React from 'react';
import Card from './Card';
import { Page } from '../types';

const InfoSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{title}</h3>
    <div className="text-gray-600 dark:text-gray-300 space-y-2">{children}</div>
  </div>
);

interface TraditionalPageProps {
  setCurrentPage: (page: Page) => void;
}

const TraditionalPage: React.FC<TraditionalPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="animate-fade-in-up space-y-16">
      <div>
        <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-2 tracking-tight">
          Roots of Wellness
        </h1>
        <p className="text-center text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Traditional healthcare systems are built on centuries of wisdom, viewing health as a harmonious balance between mind, body, and spirit. These practices often use natural remedies and holistic approaches to promote well-being. Click on a card to learn more.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Ayurveda"
            onClick={() => setCurrentPage(Page.AYURVEDA)}
          >
            Originating in India, Ayurveda focuses on balancing three doshas (Vata, Pitta, Kapha) through herbs, diet, and lifestyle.
          </Card>
          <Card
            title="Herbal Medicine"
            onClick={() => setCurrentPage(Page.HERBAL_MEDICINE)}
          >
            Herbalism uses plants and plant extracts for medicinal purposes. It's a cornerstone of many traditional healing systems worldwide.
          </Card>
          <Card
            title="Acupuncture & TCM"
            onClick={() => setCurrentPage(Page.TCM)}
          >
            Traditional Chinese Medicine (TCM) is based on the concept of Qi (vital energy). Acupuncture is a key practice to restore this flow.
          </Card>
          <Card
            title="Naturopathy"
            onClick={() => setCurrentPage(Page.NATUROPATHY)}
          >
            Naturopathy emphasizes prevention and self-healing through natural therapies like nutrition, botanical medicine, and lifestyle counseling.
          </Card>
           <Card
            title="Unani Medicine"
            onClick={() => setCurrentPage(Page.UNANI)}
          >
            With roots in Greek medicine, Unani is based on balancing four humors. It uses herbal remedies, diet, and massage.
          </Card>
           <Card
            title="Folk & Indigenous"
            onClick={() => setCurrentPage(Page.FOLK_INDIGENOUS)}
          >
            Practices from Native American, Aboriginal, and African traditions emphasize harmony with nature through medicinal plants and rituals.
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Core Principles & Characteristics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoSection title="Holistic Approach">
              <p>Treats the whole person—mind, body, and spirit—not just the symptoms of a disease. It seeks to restore balance and harmony within the individual.</p>
            </InfoSection>
            <InfoSection title="Rooted in Nature">
              <p>Relies heavily on natural, plant-based remedies like herbs, spices, and oils. The healing power of nature is a central theme.</p>
            </InfoSection>
            <InfoSection title="Emphasis on Prevention">
              <p>Focuses on maintaining health and preventing illness through lifestyle discipline, proper diet, and stress management, rather than just curing diseases after they arise.</p>
            </InfoSection>
        </div>
      </div>

       <div>
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Strengths and Limitations</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
            <h3 className="text-2xl font-semibold text-emerald-800 dark:text-emerald-300 mb-4">Advantages</h3>
            <ul className="space-y-2 list-disc list-inside text-emerald-700 dark:text-emerald-200">
              <li>Cost-effective and affordable for many.</li>
              <li>Easily accessible, especially in rural areas.</li>
              <li>Often has fewer side effects when practiced correctly.</li>
              <li>Promotes lifestyle discipline and preventive care.</li>
              <li>Culturally accepted and trusted by local populations.</li>
            </ul>
          </div>
          <div className="bg-rose-50 dark:bg-rose-900/30 p-6 rounded-xl border border-rose-200 dark:border-rose-800">
            <h3 className="text-2xl font-semibold text-rose-800 dark:text-rose-300 mb-4">Limitations</h3>
            <ul className="space-y-2 list-disc list-inside text-rose-700 dark:text-rose-200">
              <li>Lack of scientific evidence in some practices.</li>
              <li>Standardization and dosage issues can arise.</li>
              <li>Risk of misuse by untrained practitioners.</li>
              <li>Less effective for emergencies or severe infections.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraditionalPage;