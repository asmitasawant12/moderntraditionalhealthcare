import React from 'react';
import { Page } from '../../types';
import DetailPageLayout from './DetailPageLayout';
import RelatedTopics from './RelatedTopics';

interface PreventivePageProps {
  setCurrentPage: (page: Page) => void;
}

const PreventivePage: React.FC<PreventivePageProps> = ({ setCurrentPage }) => {
  const relatedTopics = [
    { title: 'Naturopathy', page: Page.NATUROPATHY },
    { title: 'Diagnostic Technology', page: Page.DIAGNOSTIC },
    { title: 'Pharmaceuticals', page: Page.PHARMACEUTICALS },
  ];

  return (
    <DetailPageLayout
      title="Preventive Medicine"
      subtitle="A proactive approach to healthcare focused on preventing illness and promoting health, rather than just treating diseases after they occur."
      returnPage={Page.MODERN}
      returnPageText="Modern Healthcare"
      setCurrentPage={setCurrentPage}
    >
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p>Preventive medicine is a specialty within modern healthcare that aims to keep people healthy. Its motto is "prevention is better than cure." This field encompasses a wide range of activities, from public health initiatives that protect entire populations to clinical services that help individuals reduce their personal health risks.</p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Levels of Prevention</h3>
        <p>Preventive care is often categorized into three levels:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Primary Prevention:</strong> Aims to prevent disease before it ever occurs. This includes actions that promote health and protect against exposure to risk factors. Examples include vaccinations, encouraging healthy eating and exercise, and policies like smoking bans.</li>
          <li><strong>Secondary Prevention:</strong> Focuses on early detection and treatment of disease to slow its progression and prevent complications. Regular screenings, such as mammograms for breast cancer, colonoscopies for colon cancer, and blood pressure checks, are key components.</li>
          <li><strong>Tertiary Prevention:</strong> Involves managing existing, often chronic diseases to prevent further complications and improve quality of life. Examples include cardiac rehabilitation programs for heart attack survivors and patient education for managing diabetes.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Key Tools of Preventive Medicine</h3>
        <p>Several key strategies are employed to prevent disease:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Vaccinations:</strong> One of the greatest public health achievements, vaccines have virtually eliminated diseases like smallpox and polio and dramatically reduced the incidence of measles, tetanus, and influenza.</li>
          <li><strong>Health Screenings:</strong> Systematic testing of asymptomatic individuals to identify early-stage diseases when they are most treatable.</li>
          <li><strong>Lifestyle Counseling:</strong> Healthcare providers advise patients on diet, physical activity, smoking cessation, and stress management to reduce their risk of chronic conditions like heart disease, cancer, and type 2 diabetes.</li>
          <li><strong>Chemoprevention:</strong> The use of medications to prevent disease in high-risk individuals, such as taking aspirin to reduce the risk of cardiovascular events.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Impact and Importance</h3>
        <p>Preventive medicine is crucial for building a sustainable healthcare system. By preventing illness, it reduces the burden on hospitals, lowers healthcare costs, and, most importantly, helps people live longer, healthier lives. While modern medicine has powerful tools to treat disease, the ultimate goal is to create a world where fewer people get sick in the first place.</p>
      </div>

      <RelatedTopics topics={relatedTopics} setCurrentPage={setCurrentPage} />
    </DetailPageLayout>
  );
};

export default PreventivePage;
