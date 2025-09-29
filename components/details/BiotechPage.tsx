import React from 'react';
import { Page } from '../../types';
import DetailPageLayout from './DetailPageLayout';
import RelatedTopics from './RelatedTopics';

interface BiotechPageProps {
  setCurrentPage: (page: Page) => void;
}

const BiotechPage: React.FC<BiotechPageProps> = ({ setCurrentPage }) => {
  const relatedTopics = [
    { title: 'Pharmaceuticals', page: Page.PHARMACEUTICALS },
    { title: 'Allopathic Medicine', page: Page.ALLOPATHIC },
    { title: 'Preventive Medicine', page: Page.PREVENTIVE },
  ];

  return (
    <DetailPageLayout
      title="Biotechnology & Genetics"
      subtitle="The cutting edge of medicine, using biological systems and genetic information to develop revolutionary new therapies and diagnostics."
      returnPage={Page.MODERN}
      returnPageText="Modern Healthcare"
      setCurrentPage={setCurrentPage}
    >
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p>Biotechnology harnesses cellular and biomolecular processes to develop technologies and products that help improve our lives and the health of our planet. In medicine, biotechnology and the related field of genetics are driving a paradigm shift from a one-size-fits-all approach to a new era of personalized and regenerative medicine.</p>
        
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Personalized Medicine</h3>
        <p>Also known as precision medicine, this approach tailors medical treatment to the individual characteristics of each patient. The completion of the Human Genome Project was a critical milestone, providing a "map" of human DNA. Now, genetic testing can:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Predict Disease Risk:</strong> Identify genetic mutations (like BRCA1/2 for breast cancer) that increase a person's risk of developing certain diseases.</li>
          <li><strong>Guide Treatment Choices:</strong> Determine which drugs will be most effective and least toxic for a specific individual. For example, certain chemotherapy drugs work only on cancers with specific genetic mutations.</li>
          <li><strong>Inform Drug Dosing:</strong> Pharmacogenomics studies how genes affect a person's response to drugs, helping to optimize dosages and avoid adverse reactions.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Revolutionary Therapies</h3>
        <p>Biotechnology has given rise to entirely new classes of treatments:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Gene Therapy:</strong> A technique that aims to treat or cure genetic disorders by replacing a faulty gene or adding a new gene. It holds promise for diseases like cystic fibrosis and sickle cell anemia.</li>
          <li><strong>Stem Cell Therapy:</strong> Uses stem cells—unspecialized cells that can develop into many different cell types—to repair or replace damaged tissue. This is a key component of regenerative medicine.</li>
          <li><strong>Immunotherapy:</strong> Leverages the body's own immune system to fight disease, particularly cancer. CAR-T cell therapy, for example, involves genetically engineering a patient's immune cells to attack cancer cells.</li>
          <li><strong>Biologics:</strong> Complex medicines made from living organisms, including monoclonal antibodies that can target specific cancer cells or inflammatory proteins.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">The Future is Now</h3>
        <p>Biotechnology and genetics are no longer science fiction. They are rapidly moving from the research lab to the clinic, offering hope for some of the most challenging medical conditions. While ethical and cost considerations are significant, these technologies are fundamentally reshaping our understanding of disease and our ability to treat it, paving the way for a healthier future.</p>
      </div>

      <RelatedTopics topics={relatedTopics} setCurrentPage={setCurrentPage} />
    </DetailPageLayout>
  );
};

export default BiotechPage;
