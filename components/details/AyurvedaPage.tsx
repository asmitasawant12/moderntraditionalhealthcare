import React from 'react';
import { Page } from '../../types';
import DetailPageLayout from './DetailPageLayout';
import RelatedTopics from './RelatedTopics';

interface AyurvedaPageProps {
  setCurrentPage: (page: Page) => void;
}

const AyurvedaPage: React.FC<AyurvedaPageProps> = ({ setCurrentPage }) => {
  const relatedTopics = [
    { title: 'Herbal Medicine', page: Page.HERBAL_MEDICINE },
    { title: 'Naturopathy', page: Page.NATUROPATHY },
    { title: 'Case Study: India', page: Page.CASE_STUDY_INDIA },
  ];

  return (
    <DetailPageLayout
      title="Ayurveda"
      subtitle="An ancient Indian holistic healing system that emphasizes balance in body, mind, and spirit to achieve optimal health and wellness."
      returnPage={Page.TRADITIONAL}
      returnPageText="Traditional Healthcare"
      setCurrentPage={setCurrentPage}
    >
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p>Ayurveda, which translates to "the science of life," is one of the world's oldest medical systems, originating in India more than 3,000 years ago. Its core principle is that health depends on a delicate balance between the mind, body, and spirit. The primary goal of Ayurvedic medicine is not to fight disease but to promote good health.</p>
        
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">The Three Doshas</h3>
        <p>Ayurveda revolves around the concept of three fundamental energies, or doshas: Vata, Pitta, and Kapha. These are derived from the five elements (space, air, fire, water, and earth). Every individual has a unique mix of the three doshas, with one usually being more dominant, which defines their Ayurvedic constitution or "prakriti."</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Vata (Space and Air):</strong> Represents movement. Vata types are often energetic, creative, and lively. When imbalanced, they may experience anxiety, insomnia, and dry skin.</li>
          <li><strong>Pitta (Fire and Water):</strong> Governs digestion, metabolism, and transformation. Pitta individuals are typically intelligent, focused, and ambitious. Imbalance can lead to anger, inflammation, and digestive issues.</li>
          <li><strong>Kapha (Earth and Water):</strong> Relates to structure and lubrication. Kapha types are calm, loving, and stable. Imbalance may result in weight gain, congestion, and lethargy.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Diagnosis and Treatment</h3>
        <p>An Ayurvedic practitioner diagnoses imbalances by examining the pulse, tongue, eyes, and physical form, as well as inquiring about lifestyle and habits. Treatments are highly personalized and aim to restore the balance of the doshas.</p>
        <p>Key therapeutic approaches include:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Panchakarma:</strong> A comprehensive detoxification process involving massage, herbal oils, and cleansing techniques to eliminate toxins from the body.</li>
          <li><strong>Diet and Nutrition:</strong> Food is considered medicine. Diets are tailored to an individual's dosha to support balance and digestion.</li>
          <li><strong>Herbal Remedies:</strong> Using plants and minerals like Ashwagandha, Turmeric, and Triphala to address specific health concerns.</li>
          <li><strong>Yoga and Meditation:</strong> Practices to unite mind and body, reduce stress, and improve flexibility and circulation.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Modern Relevance</h3>
        <p>Today, Ayurveda is practiced globally as a complementary and alternative medicine. While some of its principles align with modern concepts of preventive health and personalized medicine, more rigorous scientific research is needed to validate many of its treatments. It is particularly valued for its focus on chronic conditions, stress management, and promoting overall well-being.</p>
      </div>

      <RelatedTopics topics={relatedTopics} setCurrentPage={setCurrentPage} />
    </DetailPageLayout>
  );
};

export default AyurvedaPage;
