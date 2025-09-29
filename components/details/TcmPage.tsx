import React from 'react';
import { Page } from '../../types';
import DetailPageLayout from './DetailPageLayout';
import RelatedTopics from './RelatedTopics';

interface TcmPageProps {
  setCurrentPage: (page: Page) => void;
}

const TcmPage: React.FC<TcmPageProps> = ({ setCurrentPage }) => {
  const relatedTopics = [
    { title: 'Herbal Medicine', page: Page.HERBAL_MEDICINE },
    { title: 'Folk & Indigenous Medicine', page: Page.FOLK_INDIGENOUS },
    { title: 'Case Study: China', page: Page.CASE_STUDY_CHINA },
  ];

  return (
    <DetailPageLayout
      title="Acupuncture & Traditional Chinese Medicine (TCM)"
      subtitle="A comprehensive medical system based on the concept of balancing the flow of Qi (vital energy) through the body's meridians."
      returnPage={Page.TRADITIONAL}
      returnPageText="Traditional Healthcare"
      setCurrentPage={setCurrentPage}
    >
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p>Traditional Chinese Medicine (TCM) is a complete system of healing that has been practiced for over 2,500 years. It is based on the philosophical concept that the human body is a microcosm of the surrounding universe and is interconnected with nature. Health is achieved by maintaining the body in a state of balance and harmony.</p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Core Concepts: Qi, Yin & Yang</h3>
        <p>TCM is built on several foundational theories:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Qi (Vital Energy):</strong> The life force that flows through the body in pathways called meridians. Illness is believed to be caused by disruptions or blockages in the flow of Qi.</li>
          <li><strong>Yin and Yang:</strong> Two opposing but complementary forces that shape the universe and everything in it, including the body. Yin represents coolness, darkness, and stillness, while Yang represents heat, light, and activity. Health is the dynamic balance of Yin and Yang.</li>
          <li><strong>Five Elements:</strong> Wood, Fire, Earth, Metal, and Water are used to explain the interactions between the body's organs and the natural world.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Key Practices in TCM</h3>
        <p>TCM practitioners use a variety of techniques to restore balance:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Acupuncture:</strong> The insertion of very thin needles into specific points on the body (acupoints) to stimulate and unblock the flow of Qi. It is widely used for pain management, stress relief, and a variety of other conditions.</li>
          <li><strong>Herbal Medicine:</strong> Complex formulas of herbs are prescribed to address underlying imbalances. Chinese herbalism is a core component of TCM.</li>
          <li><strong>Tui Na (Massage):</strong> A form of therapeutic massage that targets acupoints and meridians to improve Qi flow.</li>
          <li><strong>Cupping:</strong> The use of heated glass cups to create suction on the skin, believed to draw out toxins and improve circulation.</li>
          <li><strong>Dietary Therapy & Tai Chi:</strong> Lifestyle recommendations are integral to TCM, including specific foods and gentle exercises to support health.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Integration with Modern Medicine</h3>
        <p>In China, TCM is integrated into the mainstream healthcare system and practiced alongside Western medicine. Globally, practices like acupuncture have gained widespread acceptance, particularly for pain relief. Scientific research is ongoing to understand the physiological mechanisms behind TCM's effectiveness, such as its effects on the nervous system and inflammation.</p>
      </div>

      <RelatedTopics topics={relatedTopics} setCurrentPage={setCurrentPage} />
    </DetailPageLayout>
  );
};

export default TcmPage;
