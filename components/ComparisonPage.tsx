import React from 'react';
import { LeafIcon } from './icons/LeafIcon';
import { StethoscopeIcon } from './icons/StethoscopeIcon';
import Card from './Card';
import { Page } from '../types';

const ComparisonRow: React.FC<{
  category: string;
  traditional: string;
  modern: string;
}> = ({ category, traditional, modern }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-b border-gray-200 dark:border-gray-700 items-start">
      <h3 className="md:col-span-1 text-xl font-bold text-gray-800 dark:text-white md:text-right">{category}</h3>
      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-2">
            <LeafIcon className="h-6 w-6 text-emerald-500 mr-2" />
            <h4 className="font-semibold text-lg text-emerald-700 dark:text-emerald-400">Traditional</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-300">{traditional}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-2">
            <StethoscopeIcon className="h-6 w-6 text-sky-500 mr-2" />
            <h4 className="font-semibold text-lg text-sky-700 dark:text-sky-400">Modern</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-300">{modern}</p>
        </div>
      </div>
    </div>
  );
};

interface ComparisonPageProps {
  setCurrentPage: (page: Page) => void;
}

const ComparisonPage: React.FC<ComparisonPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-2 tracking-tight">
        Bridging the Divide
      </h1>
      <p className="text-center text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
        Both traditional and modern healthcare methods offer valuable approaches to health. Understanding their core differences helps appreciate the unique strengths of each system.
      </p>

      <div className="max-w-5xl mx-auto">
        <ComparisonRow
          category="Philosophy"
          traditional="Holistic approach, focusing on balance within the body's systems and connection to nature. Aims to treat the root cause."
          modern="Reductionist approach, focusing on specific diseases, symptoms, and pathogens. Aims to treat or manage the ailment."
        />
        <ComparisonRow
          category="Diagnosis"
          traditional="Based on observation of symptoms, patient history, pulse, tongue, and physical examination. Highly personalized."
          modern="Relies on scientific testing, lab results, imaging scans (X-ray, MRI), and quantifiable data to identify specific pathogens or abnormalities."
        />
        <ComparisonRow
          category="Treatment"
          traditional="Utilizes natural remedies like herbal medicine, acupuncture, dietary changes, and lifestyle adjustments."
          modern="Employs pharmaceuticals, surgery, radiation, and other evidence-based medical interventions."
        />
        <ComparisonRow
          category="Approach to Prevention"
          traditional="Focuses on maintaining balance through lifestyle, diet, and stress reduction to prevent illness from occurring."
          modern="Emphasizes vaccinations, screenings for early detection, and public health policies to prevent specific diseases."
        />
        <ComparisonRow
          category="Treatment Speed"
          traditional="Often slower-acting, focusing on gradual, long-term healing and lifestyle changes. May require long-term commitment."
          modern="Typically provides rapid intervention and symptom relief, especially in acute or emergency situations."
        />
         <ComparisonRow
          category="Patient's Role"
          traditional="Requires active participation from the patient in their healing process through diet, lifestyle changes, and mindfulness."
          modern="Often positions the patient as a recipient of care, following prescribed treatments and expert advice."
        />
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Case Studies: Integration in Action
        </h2>
        <p className="text-center text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Click on each card to learn more about specific regional approaches to healthcare integration.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card
            title="India"
            imageUrl="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop"
            onClick={() => setCurrentPage(Page.CASE_STUDY_INDIA)}
          >
            The Ministry of AYUSH promotes traditional systems alongside modern medicine in a pluralistic healthcare framework.
          </Card>
          <Card
            title="China"
            imageUrl="https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=800&auto=format&fit=crop"
            onClick={() => setCurrentPage(Page.CASE_STUDY_CHINA)}
          >
            Traditional Chinese Medicine (TCM) is deeply integrated into the national healthcare system and practiced in modern hospitals.
          </Card>
          <Card
            title="Africa"
            imageUrl="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800&auto=format&fit=crop"
            onClick={() => setCurrentPage(Page.CASE_STUDY_AFRICA)}
          >
            The WHO supports research into African traditional medicine, the primary form of care for a majority of the population.
          </Card>
           <Card
            title="Brazil"
            imageUrl="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=800&auto=format&fit=crop"
            onClick={() => setCurrentPage(Page.CASE_STUDY_BRAZIL)}
          >
            Brazil's public health system (SUS) officially includes and funds integrative practices like acupuncture and homeopathy.
          </Card>
           <Card
            title="Japan"
            imageUrl="https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=800&auto=format&fit=crop"
            onClick={() => setCurrentPage(Page.CASE_STUDY_JAPAN)}
          >
            Kampo medicine, a Japanese adaptation of TCM, is fully integrated into the national health insurance system.
          </Card>
        </div>
      </div>

      <div className="mt-20 bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-2xl max-w-5xl mx-auto border border-indigo-200 dark:border-indigo-800">
        <h2 className="text-2xl font-bold text-indigo-800 dark:text-indigo-300 mb-4 text-center">Conclusion: A Complementary Future</h2>
        <p className="text-indigo-700 dark:text-indigo-200 text-center leading-relaxed">
          Neither system holds all the answers. The future of healthcare may lie in an integrative approach, where the time-tested wisdom of traditional practices complements the precision and power of modern science. A patient might use acupuncture to manage the side effects of chemotherapy, or use mindfulness techniques alongside medication for mental health. By embracing the strengths of both, we can achieve a more comprehensive, compassionate, and personalized form of wellness for everyone.
        </p>
      </div>
    </div>
  );
};

export default ComparisonPage;