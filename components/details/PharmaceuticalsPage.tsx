import React from 'react';
import { Page } from '../../types';
import DetailPageLayout from './DetailPageLayout';
import RelatedTopics from './RelatedTopics';

interface PharmaceuticalsPageProps {
  setCurrentPage: (page: Page) => void;
}

const PharmaceuticalsPage: React.FC<PharmaceuticalsPageProps> = ({ setCurrentPage }) => {
  const relatedTopics = [
    { title: 'Allopathic Medicine', page: Page.ALLOPATHIC },
    { title: 'Biotechnology & Genetics', page: Page.BIOTECH },
    { title: 'Preventive Medicine', page: Page.PREVENTIVE },
  ];

  return (
    <DetailPageLayout
      title="Pharmaceuticals"
      subtitle="The science and practice of discovering, producing, and dispensing drugs to diagnose, cure, treat, or prevent disease."
      returnPage={Page.MODERN}
      returnPageText="Modern Healthcare"
      setCurrentPage={setCurrentPage}
    >
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p>Pharmaceuticals, or drugs, are a cornerstone of modern allopathic medicine. They are chemical substances designed to interact with the body's biological systems to produce a therapeutic effect. The pharmaceutical industry is a global enterprise dedicated to the research, development, and manufacturing of these life-saving and life-enhancing medicines.</p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">The Drug Development Process</h3>
        <p>Bringing a new drug to market is a long, complex, and expensive process that can take over a decade. It involves several key stages:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Discovery and Development:</strong> Scientists identify a "target" (e.g., a specific protein or gene involved in a disease) and screen thousands of chemical compounds to find ones that might interact with it.</li>
          <li><strong>Preclinical Research:</strong> Promising compounds are tested in laboratories and on animals to assess their safety and potential efficacy.</li>
          <li><strong>Clinical Trials:</strong> If a drug is deemed safe in preclinical studies, it moves to human testing in a three-phase process (Phase I, II, and III) to evaluate its safety, dosage, and effectiveness in increasingly large groups of people.</li>
          <li><strong>Regulatory Review and Approval:</strong> After successful clinical trials, a pharmaceutical company submits all the data to a regulatory body like the U.S. Food and Drug Administration (FDA) for approval.</li>
          <li><strong>Post-Market Surveillance (Phase IV):</strong> After a drug is approved and marketed, its safety is continuously monitored to detect any rare or long-term side effects.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Major Classes of Drugs</h3>
        <p>Pharmaceuticals can be broadly categorized by their function:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Antibiotics:</strong> Fight bacterial infections (e.g., Penicillin).</li>
          <li><strong>Analgesics:</strong> Relieve pain (e.g., Aspirin, Morphine).</li>
          <li><strong>Antihypertensives:</strong> Lower high blood pressure.</li>
          <li><strong>Vaccines:</strong> Stimulate the immune system to prevent infectious diseases.</li>
          <li><strong>Chemotherapy Agents:</strong> Kill cancer cells.</li>
          <li><strong>Psychotropics:</strong> Affect brain chemistry to treat mental health disorders.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Challenges and Future Directions</h3>
        <p>The pharmaceutical industry faces challenges including the rising cost of R&D, patent expirations, and concerns about drug safety and pricing. The future of pharmaceuticals lies in personalized medicine, where treatments are tailored to an individual's genetic makeup, and in the development of biologics—complex drugs derived from living organisms (like antibodies and gene therapies)—which offer new hope for treating previously incurable diseases.</p>
      </div>

      <RelatedTopics topics={relatedTopics} setCurrentPage={setCurrentPage} />
    </DetailPageLayout>
  );
};

export default PharmaceuticalsPage;
