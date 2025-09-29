import React from 'react';
import { Page } from '../../types';
import DetailPageLayout from './DetailPageLayout';
import RelatedTopics from './RelatedTopics';

interface CaseStudyAfricaPageProps {
  setCurrentPage: (page: Page) => void;
}

const CaseStudyAfricaPage: React.FC<CaseStudyAfricaPageProps> = ({ setCurrentPage }) => {
  const relatedTopics = [
    { title: 'Folk & Indigenous Medicine', page: Page.FOLK_INDIGENOUS },
    { title: 'Case Study: India', page: Page.CASE_STUDY_INDIA },
    { title: 'Case Study: China', page: Page.CASE_STUDY_CHINA },
  ];

  return (
    <DetailPageLayout
      title="Case Study: Africa"
      subtitle="A continent where traditional medicine remains the primary source of care for a majority of the population, prompting efforts toward research and integration."
      returnPage={Page.COMPARISON}
      returnPageText="Comparison"
      setCurrentPage={setCurrentPage}
    >
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p>Across the African continent, traditional medicine is not just an alternative; for up to 80% of the population, it is the main source of healthcare. Deeply rooted in indigenous cultures and beliefs, African traditional medicine is holistic, accessible, and affordable. The relationship between traditional and modern medicine in Africa is complex, shaped by colonial history, resource limitations, and a growing movement toward official recognition and collaboration.</p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">The Role of Traditional Health Practitioners (THPs)</h3>
        <p>Traditional Health Practitioners are highly respected figures in their communities. They are not only dispensers of herbal remedies but also act as counselors and spiritual guides. Their role is critical, especially in rural areas where modern health facilities are scarce. They provide care for a wide range of conditions, from common illnesses to chronic diseases and mental health issues.</p>
        
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">WHO's Strategy and Support</h3>
        <p>Recognizing the vital role of traditional medicine, the World Health Organization (WHO) African Region has actively promoted a strategy for its integration into national health systems. This strategy focuses on:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Policy and Regulation:</strong> Encouraging member states to develop national policies and regulatory frameworks for traditional medicine products and practices.</li>
          <li><strong>Scientific Research:</strong> Supporting clinical research on the safety and efficacy of traditional medicines, particularly for priority diseases like HIV/AIDS, malaria, and diabetes. The discovery of artemisinin, a key anti-malarial drug, from the sweet wormwood plant used in Chinese traditional medicine, serves as a powerful example of this potential.</li>
          <li><strong>Building Capacity:</strong> Training THPs in basic hygiene, record-keeping, and recognizing symptoms that require urgent referral to modern health facilities.</li>
          <li><strong>Cultivation and Conservation:</strong> Promoting the sustainable cultivation of medicinal plants to protect biodiversity and ensure a stable supply.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Examples of Collaboration</h3>
        <p>While full integration is still a work in progress, collaborative efforts are emerging. In some countries, THPs are being trained to work alongside modern healthcare workers in areas like HIV/AIDS counseling and ensuring patient adherence to antiretroviral therapy. This pragmatic approach leverages the trust and cultural authority of THPs to achieve better public health outcomes.</p>
        <p>The African experience highlights a "ground-up" approach to integration, driven by the reality that traditional medicine is the bedrock of the healthcare system. The challenge and opportunity lie in building bridges of mutual respect and collaboration between the two systems to ensure everyone has access to safe and effective care.</p>
      </div>

      <RelatedTopics topics={relatedTopics} setCurrentPage={setCurrentPage} />
    </DetailPageLayout>
  );
};

export default CaseStudyAfricaPage;