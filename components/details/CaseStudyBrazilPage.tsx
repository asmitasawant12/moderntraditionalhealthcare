import React from 'react';
import { Page } from '../../types';
import DetailPageLayout from './DetailPageLayout';
import RelatedTopics from './RelatedTopics';

interface CaseStudyBrazilPageProps {
  setCurrentPage: (page: Page) => void;
}

const CaseStudyBrazilPage: React.FC<CaseStudyBrazilPageProps> = ({ setCurrentPage }) => {
  const relatedTopics = [
    { title: 'Folk & Indigenous Medicine', page: Page.FOLK_INDIGENOUS },
    { title: 'Case Study: India', page: Page.CASE_STUDY_INDIA },
    { title: 'Naturopathy', page: Page.NATUROPATHY },
  ];

  return (
    <DetailPageLayout
      title="Case Study: Brazil"
      subtitle="A model where integrative and complementary practices are officially recognized and offered within the national public health system."
      returnPage={Page.COMPARISON}
      returnPageText="Comparison"
      setCurrentPage={setCurrentPage}
    >
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p>Brazil offers a compelling case study of state-sponsored integration of traditional and complementary medicine into a modern public healthcare framework. The cornerstone of this system is the Sistema Único de Saúde (SUS), the Unified Health System, which aims to provide free and universal healthcare to all citizens.</p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">The National Policy on Integrative and Complementary Practices (PNPIC)</h3>
        <p>In 2006, Brazil's Ministry of Health launched the PNPIC, a landmark policy that formally incorporated a range of integrative practices into the SUS. This policy was a response to growing public demand and WHO recommendations, aiming to broaden therapeutic options and promote a more holistic view of health.</p>
        <p>Initially, the policy included five main practices:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Traditional Chinese Medicine (including Acupuncture)</li>
          <li>Homeopathy</li>
          <li>Phytotherapy (Herbal Medicine)</li>
          <li>Anthroposophic Medicine</li>
          <li>Crenotherapy (Spa and mineral water therapy)</li>
        </ul>
        <p>Over the years, the program has expanded dramatically. As of today, the SUS offers 29 different integrative practices, including Reiki, yoga, meditation, and art therapy, available for free in thousands of public health clinics across the country.</p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Implementation and Goals</h3>
        <p>The primary goals of the PNPIC are to improve the quality of life, reduce the burden on the conventional health system for chronic conditions, and promote rational use of medications. The integration focuses on primary care, where these therapies are used to manage chronic pain, anxiety, stress, and other common health issues. This approach emphasizes patient-centered care and prevention.</p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Challenges and Achievements</h3>
        <p>Brazil's model is ambitious but faces challenges, including inconsistent availability of services across different municipalities, a need for more standardized training for practitioners, and ongoing debates about the scientific evidence for some of the offered therapies. However, its major achievement is the formal recognition and public funding of a wide array of healing modalities. This democratizes access to holistic care and positions Brazil as a global leader in public health integration, acknowledging that health and well-being encompass more than just the absence of disease.</p>
      </div>

      <RelatedTopics topics={relatedTopics} setCurrentPage={setCurrentPage} />
    </DetailPageLayout>
  );
};

export default CaseStudyBrazilPage;