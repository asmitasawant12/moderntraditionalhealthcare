import React from 'react';
import { Page } from '../../types';
import DetailPageLayout from './DetailPageLayout';
import RelatedTopics from './RelatedTopics';

interface FolkIndigenousPageProps {
  setCurrentPage: (page: Page) => void;
}

const FolkIndigenousPage: React.FC<FolkIndigenousPageProps> = ({ setCurrentPage }) => {
  const relatedTopics = [
    { title: 'Herbal Medicine', page: Page.HERBAL_MEDICINE },
    { title: 'Acupuncture & TCM', page: Page.TCM },
    { title: 'Case Study: Africa', page: Page.CASE_STUDY_AFRICA },
  ];

  return (
    <DetailPageLayout
      title="Folk & Indigenous Medicine"
      subtitle="A diverse range of healing practices, knowledge, and beliefs passed down through generations within cultures and communities."
      returnPage={Page.TRADITIONAL}
      returnPageText="Traditional Healthcare"
      setCurrentPage={setCurrentPage}
    >
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p>Folk and indigenous medicine encompasses the traditional health practices of native peoples from all over the world, including those of Native Americans, African healers, South American shamans, and Australian Aboriginals. These systems are deeply intertwined with the cultural, spiritual, and environmental context of the communities that practice them.</p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Core Philosophy: Harmony and Connection</h3>
        <p>A common thread in most indigenous healing systems is the belief that health is a state of harmony between an individual, their community, and the natural world. Illness is often seen as a result of imbalance or disconnection from spiritual forces, nature, or the community. Healing, therefore, involves restoring this balance on physical, emotional, mental, and spiritual levels.</p>
        
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Key Elements of Indigenous Healing</h3>
        <p>Practices vary widely but often include several key components:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Medicinal Plants:</strong> An extensive knowledge of local flora is fundamental. Herbal remedies are used to treat a wide range of ailments, from physical injuries to spiritual disturbances. This knowledge is often passed down orally through generations.</li>
          <li><strong>Ritual and Ceremony:</strong> Healing is frequently conducted within a ceremonial context. Chanting, drumming, dancing, and prayer are used to create a sacred space and invoke spiritual assistance. These rituals are vital for community cohesion and psychological well-being.</li>
          <li><strong>Spiritual Healers:</strong> Healers, often known as shamans, medicine people, or traditional healers, act as intermediaries between the physical and spiritual worlds. They are highly respected members of their communities who undergo extensive training.</li>
          <li><strong>Community Involvement:</strong> The healing process often involves the patient's family and community, reinforcing social support systems and addressing the social dimensions of illness.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Challenges and Preservation</h3>
        <p>Indigenous medical knowledge is a vital resource, offering unique perspectives on health and providing primary care for millions of people. However, this knowledge is at risk due to deforestation, cultural assimilation, and a lack of formal recognition. There is a growing global effort, supported by organizations like the WHO, to document, preserve, and respectfully integrate indigenous healing practices into broader healthcare frameworks, ensuring that this ancient wisdom is not lost.</p>
      </div>

      <RelatedTopics topics={relatedTopics} setCurrentPage={setCurrentPage} />
    </DetailPageLayout>
  );
};

export default FolkIndigenousPage;
