import React from 'react';
import { Page } from '../../types';
import DetailPageLayout from './DetailPageLayout';
import RelatedTopics from './RelatedTopics';

interface CaseStudyIndiaPageProps {
  setCurrentPage: (page: Page) => void;
}

const CaseStudyIndiaPage: React.FC<CaseStudyIndiaPageProps> = ({ setCurrentPage }) => {
  const relatedTopics = [
    { title: 'Ayurveda', page: Page.AYURVEDA },
    { title: 'Case Study: China', page: Page.CASE_STUDY_CHINA },
    { title: 'Case Study: Africa', page: Page.CASE_STUDY_AFRICA },
  ];

  return (
    <DetailPageLayout
      title="Case Study: India"
      subtitle="A pluralistic healthcare system where traditional medicine is officially recognized and promoted alongside modern allopathic medicine."
      returnPage={Page.COMPARISON}
      returnPageText="Comparison"
      setCurrentPage={setCurrentPage}
    >
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p>India presents a unique and complex case study in healthcare integration. With a rich history of ancient healing traditions, the country has formally adopted a pluralistic approach, where multiple systems of medicine coexist and are supported by the government. This model reflects a deep cultural respect for traditional wisdom while simultaneously embracing modern scientific advancements.</p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">The Role of the Ministry of AYUSH</h3>
        <p>A key element of India's integration strategy is the Ministry of AYUSH, established in 2014. The acronym stands for Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homoeopathy. This government body is responsible for:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Education and Standardization:</strong> Setting standards for colleges and practitioners of traditional medicine to ensure quality and safety.</li>
          <li><strong>Research and Development:</strong> Funding scientific research to validate the efficacy of traditional treatments and develop new formulations.</li>
          <li><strong>Public Health Integration:</strong> Incorporating AYUSH practitioners and therapies into the national public health system to improve access to care, especially in rural areas.</li>
          <li><strong>Global Promotion:</strong> Promoting India's traditional medical systems on the world stage.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Coexistence in Practice</h3>
        <p>In practice, the systems often operate in parallel. Patients may choose to consult an allopathic doctor for an acute infection but seek Ayurvedic treatment for a chronic condition like arthritis. This freedom of choice is a hallmark of the Indian system. Increasingly, there are efforts to foster more direct collaboration:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Some modern hospitals are beginning to incorporate AYUSH departments, offering services like yoga for stress relief or Ayurvedic dietary counseling.</li>
          <li>Research is exploring the synergistic effects of combining traditional and modern treatments, such as using herbal remedies to mitigate the side effects of chemotherapy.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Challenges and the Path Forward</h3>
        <p>Despite the official support, challenges remain. These include a lack of rigorous scientific evidence for some traditional practices, issues with the quality control of herbal medicines, and a degree of skepticism from parts of the allopathic medical community. However, India's model of institutionalized pluralism offers valuable lessons. By formally recognizing and regulating its traditional systems, India is striving to create a truly integrative healthcare framework that leverages the strengths of both ancient wisdom and modern science to meet the diverse health needs of its population.</p>
      </div>

      <RelatedTopics topics={relatedTopics} setCurrentPage={setCurrentPage} />
    </DetailPageLayout>
  );
};

export default CaseStudyIndiaPage;