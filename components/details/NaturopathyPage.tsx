import React from 'react';
import { Page } from '../../types';
import DetailPageLayout from './DetailPageLayout';
import RelatedTopics from './RelatedTopics';

interface NaturopathyPageProps {
  setCurrentPage: (page: Page) => void;
}

const NaturopathyPage: React.FC<NaturopathyPageProps> = ({ setCurrentPage }) => {
  const relatedTopics = [
    { title: 'Ayurveda', page: Page.AYURVEDA },
    { title: 'Herbal Medicine', page: Page.HERBAL_MEDICINE },
    { title: 'Preventive Medicine', page: Page.PREVENTIVE },
  ];

  return (
    <DetailPageLayout
      title="Naturopathy"
      subtitle="A system of medicine based on the healing power of nature, emphasizing prevention, treatment, and optimal health through natural therapies."
      returnPage={Page.TRADITIONAL}
      returnPageText="Traditional Healthcare"
      setCurrentPage={setCurrentPage}
    >
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p>Naturopathy is a distinct form of primary health care that combines modern scientific knowledge with traditional and natural forms of medicine. It is guided by a philosophy that emphasizes the body's innate ability to heal itself, treating the underlying cause of disease rather than just its symptoms.</p>
        
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">The Six Principles of Naturopathy</h3>
        <p>Naturopathic practice is governed by six core principles:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>First, Do No Harm (Primum Non Nocere):</strong> Utilize the most natural, least invasive, and least toxic therapies.</li>
          <li><strong>The Healing Power of Nature (Vis Medicatrix Naturae):</strong> Trust in the body's inherent wisdom to heal itself.</li>
          <li><strong>Identify and Treat the Causes (Tolle Causam):</strong> Look beyond the symptoms to the underlying cause of disease.</li>
          <li><strong>Doctor as Teacher (Docere):</strong> Educate patients and encourage self-responsibility for health.</li>
          <li><strong>Treat the Whole Person:</strong> View the body as an integrated whole in all its physical and spiritual dimensions.</li>
          <li><strong>Prevention:</strong> Focus on overall health, wellness, and disease prevention.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Therapeutic Modalities</h3>
        <p>Naturopathic doctors (NDs) are trained in a variety of natural therapies and use them to create individualized treatment plans. These may include:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Clinical Nutrition:</strong> Using diet and nutritional supplements to address deficiencies and promote health.</li>
          <li><strong>Botanical Medicine:</strong> Employing plant-based remedies for their healing properties.</li>
          <li><strong>Homeopathy:</strong> Using minute doses of natural substances to stimulate the body's self-healing response.</li>
          <li><strong>Lifestyle Counseling:</strong> Addressing factors like stress, exercise, and sleep to improve overall well-being.</li>
          <li><strong>Physical Medicine:</strong> Using techniques like massage, hydrotherapy, and gentle electrical stimulation to support healing.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Role in Modern Healthcare</h3>
        <p>Naturopathy is often used to address chronic conditions such as allergies, digestive issues, hormonal imbalances, and chronic pain. Many people seek naturopathic care for its patient-centered, whole-person approach. While it emphasizes natural treatments, licensed NDs are trained to recognize conditions that require referral to other medical specialists, allowing for an integrative approach to patient care.</p>
      </div>

      <RelatedTopics topics={relatedTopics} setCurrentPage={setCurrentPage} />
    </DetailPageLayout>
  );
};

export default NaturopathyPage;
