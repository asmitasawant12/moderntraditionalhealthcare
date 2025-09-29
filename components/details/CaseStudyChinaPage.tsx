import React from 'react';
import { Page } from '../../types';
import DetailPageLayout from './DetailPageLayout';
import RelatedTopics from './RelatedTopics';

interface CaseStudyChinaPageProps {
  setCurrentPage: (page: Page) => void;
}

const CaseStudyChinaPage: React.FC<CaseStudyChinaPageProps> = ({ setCurrentPage }) => {
  const relatedTopics = [
    { title: 'Acupuncture & TCM', page: Page.TCM },
    { title: 'Case Study: India', page: Page.CASE_STUDY_INDIA },
    { title: 'Case Study: Africa', page: Page.CASE_STUDY_AFRICA },
  ];

  return (
    <DetailPageLayout
      title="Case Study: China"
      subtitle="A model of deep integration where Traditional Chinese Medicine (TCM) is practiced alongside Western medicine within the national healthcare system."
      returnPage={Page.COMPARISON}
      returnPageText="Comparison"
      setCurrentPage={setCurrentPage}
    >
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <figure className="sm:float-right sm:ml-6 sm:mb-4 sm:w-1/2 lg:w-1/3">
          <img 
            src="https://images.unsplash.com/photo-1584039233958-c172a39a06a2?q=80&w=800&auto=format&fit=crop" 
            alt="Traditional Chinese medicine pharmacy with drawers of herbs" 
            className="rounded-lg shadow-lg w-full object-cover border border-gray-200 dark:border-gray-700"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
            A traditional pharmacy showcases the extensive herbal knowledge integral to TCM.
          </figcaption>
        </figure>

        <p>China's healthcare system is perhaps the most prominent example of an integrated medical model in the world. For decades, the Chinese government has actively promoted the parallel development and use of both Traditional Chinese Medicine (TCM) and modern Western medicine. This "two legs of a stool" approach is deeply embedded in the country's health policy, infrastructure, and clinical practice.</p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">A Three-Tiered System</h3>
        <p>The integration is evident across China's healthcare infrastructure:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>TCM Hospitals:</strong> There are dedicated hospitals focused primarily on TCM, though they are also equipped with modern diagnostic tools like CT scanners and MRI machines.</li>
          <li><strong>Western Medicine Hospitals with TCM Departments:</strong> Virtually all major conventional hospitals in China have a TCM department, allowing for easy referrals and collaborative care.</li>
          <li><strong>Community Health Centers:</strong> Both TCM and Western medicine services are available at the primary care level, making them accessible to the general population.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Integrative Clinical Practice</h3>
        <p>In a clinical setting, integration can take many forms. It is common for a patient to receive a diagnosis from both a Western-trained doctor and a TCM practitioner. Treatment plans often combine the strengths of both systems. For example:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>A cancer patient might receive chemotherapy (Western medicine) to target the tumor, while also being prescribed acupuncture and herbal formulas (TCM) to manage nausea, boost the immune system, and improve overall quality of life.</li>
          <li>A patient recovering from stroke may undergo physical therapy (Western medicine) alongside acupuncture (TCM) to help restore motor function.</li>
          <li>During the COVID-19 pandemic, the Chinese government promoted the use of specific TCM herbal formulas alongside conventional antiviral treatments.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Standardization and Modernization</h3>
        <p>A key aspect of China's strategy has been the "modernization" of TCM. This involves applying scientific research methods to understand the mechanisms of TCM therapies, standardizing herbal formulas, and developing new drugs based on traditional knowledge. This effort, while sometimes controversial among traditional purists, has been crucial for TCM's acceptance and integration.</p>
        <p>China's model demonstrates a deep commitment to preserving its medical heritage while leveraging the power of modern science. It serves as a powerful example of how two vastly different medical philosophies can not only coexist but also work together to provide more comprehensive patient care.</p>
      </div>

      <RelatedTopics topics={relatedTopics} setCurrentPage={setCurrentPage} />
    </DetailPageLayout>
  );
};

export default CaseStudyChinaPage;