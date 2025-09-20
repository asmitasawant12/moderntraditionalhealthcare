import React from 'react';
import Card from './Card';

const TraditionalPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-2 tracking-tight">
        Roots of Wellness
      </h1>
      <p className="text-center text-lg text-gray-500 dark:text-gray-400 mb-12">
        Understanding Traditional Healthcare
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          title="Ayurveda"
          imageUrl="https://picsum.photos/seed/ayurveda/400/250"
        >
          Originating in India over 3,000 years ago, Ayurveda ('The Science of Life') is a holistic healing system. Its core belief is that health depends on a delicate balance between mind, body, and spirit. It identifies three life forces, or doshas—Vata, Pitta, and Kapha. Treatments aim to rebalance these doshas through personalized diet, herbal remedies, massage, yoga, and meditation.
        </Card>
        <Card
          title="Herbal Medicine"
          imageUrl="https://picsum.photos/seed/herbs/400/250"
        >
          One of the oldest forms of medicine, herbalism uses the medicinal properties of plants. Different cultures have developed unique traditions, from Chinese Herbal Medicine to Western Herbalism. It's used to treat illnesses, boost immunity, and maintain health, often with remedies passed down through generations. Examples include using ginger for nausea or turmeric for inflammation.
        </Card>
        <Card
          title="Acupuncture & TCM"
          imageUrl="https://picsum.photos/seed/acupuncture/400/250"
        >
          Traditional Chinese Medicine (TCM) is a complete health system dating back over 2,500 years. It's based on the concept of Qi (vital energy) flowing through pathways called meridians. Imbalances in Qi cause illness. Acupuncture, which involves inserting thin needles into specific points on the meridians, is a key practice to restore this energy flow. TCM also includes herbal medicine, cupping, and tai chi.
        </Card>
        <Card
          title="Naturopathy"
          imageUrl="https://picsum.photos/seed/naturopathy/400/250"
        >
          Naturopathy emphasizes prevention and the self-healing process through natural therapies. It blends centuries-old, non-toxic approaches with current advances in health studies. Practitioners focus on identifying and removing the underlying causes of illness, rather than just suppressing symptoms, using methods like clinical nutrition, botanical medicine, and lifestyle counseling.
        </Card>
      </div>
    </div>
  );
};

export default TraditionalPage;