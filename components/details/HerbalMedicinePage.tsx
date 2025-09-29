import React from 'react';
import { Page } from '../../types';
import DetailPageLayout from './DetailPageLayout';
import RelatedTopics from './RelatedTopics';

interface HerbalMedicinePageProps {
  setCurrentPage: (page: Page) => void;
}

const HerbalMedicinePage: React.FC<HerbalMedicinePageProps> = ({ setCurrentPage }) => {
  const relatedTopics = [
    { title: 'Ayurveda', page: Page.AYURVEDA },
    { title: 'Naturopathy', page: Page.NATUROPATHY },
    { title: 'Folk & Indigenous Medicine', page: Page.FOLK_INDIGENOUS },
  ];

  return (
    <DetailPageLayout
      title="Herbal Medicine"
      subtitle="The practice of using plants and plant extracts for medicinal purposes, forming the foundation of many traditional healing systems."
      returnPage={Page.TRADITIONAL}
      returnPageText="Traditional Healthcare"
      setCurrentPage={setCurrentPage}
    >
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p>Herbal medicine, also known as botanical medicine or phytomedicine, is one of the oldest and most widely practiced forms of medicine in the world. It involves using seeds, berries, roots, leaves, bark, or flowers of plants for their therapeutic benefits. For millennia, cultures across the globe have relied on the healing properties of plants to treat illnesses and maintain health.</p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Foundational Principles</h3>
        <p>The core philosophy of herbalism is that plants contain a complex blend of active compounds that work synergistically to support the body's natural healing processes. Unlike pharmaceuticals that often isolate a single active ingredient, herbal remedies are believed to work more gently and holistically, with fewer side effects due to the buffering effects of other plant compounds.</p>
        
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Common Herbal Remedies & Their Uses</h3>
        <p>Many common plants are used in herbal medicine for their well-documented properties:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Echinacea:</strong> Often used to stimulate the immune system and help prevent or shorten the duration of the common cold.</li>
          <li><strong>St. John's Wort:</strong> Widely used for managing mild to moderate depression, though it can interact with other medications.</li>
          <li><strong>Ginseng:</strong> Valued as an adaptogen, believed to help the body resist stress and improve energy and stamina.</li>
          <li><strong>Ginger:</strong> Commonly used to alleviate nausea, motion sickness, and digestive upset.</li>
          <li><strong>Turmeric:</strong> Contains curcumin, a powerful anti-inflammatory compound used to manage conditions like arthritis.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Modern Research and Integration</h3>
        <p>Many modern pharmaceuticals, including aspirin (from willow bark) and morphine (from the opium poppy), have their origins in plant-based sources. Today, scientific research continues to explore the mechanisms behind herbal remedies, seeking to validate their traditional uses and identify new therapeutic applications.</p>
        <p>However, it is crucial to approach herbal medicine with caution. The quality and potency of herbal products can vary significantly, and some herbs can cause side effects or interact with prescription drugs. Consultation with a qualified herbalist or healthcare provider is always recommended.</p>
      </div>

      <RelatedTopics topics={relatedTopics} setCurrentPage={setCurrentPage} />
    </DetailPageLayout>
  );
};

export default HerbalMedicinePage;
