import React from 'react';
import { Page } from '../../types';
import DetailPageLayout from './DetailPageLayout';
import RelatedTopics from './RelatedTopics';

interface CaseStudyJapanPageProps {
  setCurrentPage: (page: Page) => void;
}

const CaseStudyJapanPage: React.FC<CaseStudyJapanPageProps> = ({ setCurrentPage }) => {
  const relatedTopics = [
    { title: 'Acupuncture & TCM', page: Page.TCM },
    { title: 'Case Study: China', page: Page.CASE_STUDY_CHINA },
    { title: 'Pharmaceuticals', page: Page.PHARMACEUTICALS },
  ];

  return (
    <DetailPageLayout
      title="Case Study: Japan"
      subtitle="A highly regulated system where traditional Kampo medicine is fully integrated into the national health insurance and prescribed by modern doctors."
      returnPage={Page.COMPARISON}
      returnPageText="Comparison"
      setCurrentPage={setCurrentPage}
    >
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p>Japan offers a distinct and highly successful model of medical integration centered on Kampo, a traditional Japanese medicine system adapted from Traditional Chinese Medicine (TCM). What makes Japan's approach unique is the seamless assimilation of Kampo into its modern, evidence-based medical framework, including full coverage by the national health insurance system.</p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">The Kampo System</h3>
        <p>Kampo medicine was introduced to Japan from China in the 7th century and has since evolved into a unique system. It primarily uses complex multi-herb formulas to treat illness. A key feature of Kampo is its diagnostic method, which includes a detailed abdominal examination ("Fukushin") to determine the patient's specific "sho" or constitution, which then guides the choice of formula.</p>
        
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Integration into Modern Practice</h3>
        <p>The integration of Kampo in Japan is deep and systematic:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Prescribed by MDs:</strong> Unlike in many other countries where traditional medicine is practiced by separate specialists, in Japan, any licensed medical doctor can prescribe Kampo medicines. The vast majority of Japanese doctors have some training in Kampo and use it in their daily practice.</li>
          <li><strong>Insurance Coverage:</strong> Since 1976, a set of standardized, quality-controlled Kampo herbal formulas have been covered by Japan's national health insurance. These are produced by pharmaceutical companies as granules or powders, ensuring consistent dosage and quality.</li>
          <li><strong>Evidence-Based Approach:</strong> There is a strong emphasis on scientific research. Japanese medical schools and research institutions conduct clinical trials to validate the efficacy of Kampo formulas and understand their mechanisms of action, bridging the gap between traditional knowledge and modern science.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">A Complementary Role</h3>
        <p>In practice, Kampo is rarely used as a standalone treatment for serious diseases. Instead, it is used in a complementary fashion. A doctor might prescribe a standard pharmaceutical drug for a condition like hypertension, and also a Kampo formula to manage side effects, improve the patient's overall constitution, or address symptoms not well-managed by the modern drug. It is particularly popular for managing conditions like colds, digestive issues, menopausal symptoms, and chronic pain.</p>
        <p>Japan's model is a testament to how a traditional medical system can be successfully modernized and integrated into a high-tech healthcare environment through rigorous quality control, insurance integration, and a focus on scientific validation.</p>
      </div>

      <RelatedTopics topics={relatedTopics} setCurrentPage={setCurrentPage} />
    </DetailPageLayout>
  );
};

export default CaseStudyJapanPage;