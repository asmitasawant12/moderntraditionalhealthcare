import React from 'react';
import { Page } from '../../types';
import DetailPageLayout from './DetailPageLayout';
import RelatedTopics from './RelatedTopics';

interface UnaniPageProps {
  setCurrentPage: (page: Page) => void;
}

const UnaniPage: React.FC<UnaniPageProps> = ({ setCurrentPage }) => {
  const relatedTopics = [
    { title: 'Ayurveda', page: Page.AYURVEDA },
    { title: 'Herbal Medicine', page: Page.HERBAL_MEDICINE },
    { title: 'Folk & Indigenous Medicine', page: Page.FOLK_INDIGENOUS },
  ];

  return (
    <DetailPageLayout
      title="Unani Medicine"
      subtitle="A traditional system of healing with Greco-Arabic origins, based on the concept of balancing four humors within the body."
      returnPage={Page.TRADITIONAL}
      returnPageText="Traditional Healthcare"
      setCurrentPage={setCurrentPage}
    >
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p>Unani medicine, also known as Unani-Tibb, is a Perso-Arabic traditional medicine system. Its foundations were laid by the Greek physician Hippocrates, and it was later developed and refined by Roman and Persian physicians like Galen and Ibn Sina (Avicenna). The term Unani is derived from the Arabic word for "Greek."</p>
        
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">The Theory of Humors</h3>
        <p>The central tenet of Unani medicine is the humoral theory, which posits that the human body is composed of four primary fluids or "humors":</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Blood (Dam):</strong> Hot and moist, associated with a sanguine temperament.</li>
          <li><strong>Phlegm (Balgham):</strong> Cold and moist, associated with a phlegmatic temperament.</li>
          <li><strong>Yellow Bile (Safra):</strong> Hot and dry, associated with a choleric temperament.</li>
          <li><strong>Black Bile (Sauda):</strong> Cold and dry, associated with a melancholic temperament.</li>
        </ul>
        <p>Health is believed to be a state of perfect balance among these humors. Illness occurs when this balance is disturbed. The goal of a Unani practitioner (a "hakim") is to restore this equilibrium.</p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Diagnosis and Treatment Methods</h3>
        <p>Diagnosis in Unani medicine is based on observing a patient's symptoms, temperament, and pulse (nabz). The practitioner also examines the urine and stool to understand the humoral imbalance.</p>
        <p>Treatment is based on the principle of "Ilaj-bil-Zid" (treatment with opposites). For example, a disease caused by an excess of coldness would be treated with "hot" foods and herbs. The primary treatment modalities include:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Ilaj-bil-Ghiza (Dietotherapy):</strong> Using specific diets to correct humoral imbalances.</li>
          <li><strong>Ilaj-bil-Dawa (Pharmacotherapy):</strong> Prescribing single herbs or compound formulations of plant, animal, or mineral origin.</li>
          <li><strong>Ilaj-bil-Tadbeer (Regimental Therapy):</strong> Non-medicinal techniques like cupping (Hijama), massage (Dalak), Turkish baths, and exercise (Riyazat).</li>
          <li><strong>Jarahat (Surgery):</strong> While less common now, Unani historically included a range of surgical procedures.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Contemporary Practice</h3>
        <p>Unani medicine is primarily practiced in South Asia, particularly in India, where it is officially recognized as a system of medicine. It is often sought for managing chronic lifestyle diseases, skin conditions, and musculoskeletal issues. As with other traditional systems, there is a growing need for scientific validation to integrate its practices more broadly into modern healthcare.</p>
      </div>

      <RelatedTopics topics={relatedTopics} setCurrentPage={setCurrentPage} />
    </DetailPageLayout>
  );
};

export default UnaniPage;
