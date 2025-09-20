import React from 'react';
import Card from './Card';

const ModernPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-2 tracking-tight">
        Science & Innovation
      </h1>
       <p className="text-center text-lg text-gray-500 dark:text-gray-400 mb-12">
        A Look at Modern Healthcare
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          title="Allopathic Medicine"
          imageUrl="https://picsum.photos/seed/pharma/400/250"
        >
          Also known as conventional or Western medicine, this is a system where medical professionals treat symptoms and diseases using drugs, radiation, or surgery. It is an evidence-based practice, relying on rigorous scientific research and clinical trials to determine the effectiveness and safety of treatments. Its focus is often on combating specific pathogens or correcting physical abnormalities.
        </Card>
        <Card
          title="Diagnostic Technology"
          imageUrl="https://picsum.photos/seed/mri/400/250"
        >
          A cornerstone of modern healthcare, advanced technology allows for precise and early diagnosis. Imaging tools like MRI, CT scans, and X-rays provide detailed views inside the body. Sophisticated lab tests can analyze blood, tissues, and genes to identify diseases at a molecular level, enabling highly targeted and effective treatments.
        </Card>
        <Card
          title="Preventive Medicine"
          imageUrl="https://picsum.photos/seed/vaccine/400/250"
        >
          This branch of medicine focuses on the health of individuals and communities. Its goal is to protect, promote, and maintain health and well-being and to prevent disease, disability, and death. Key practices include vaccinations, health screenings for early detection of cancer or chronic conditions, and public health campaigns promoting healthy lifestyles.
        </Card>
        <Card
          title="Biotechnology & Genetics"
          imageUrl="https://picsum.photos/seed/biotech/400/250"
        >
          The cutting edge of modern medicine involves leveraging biotechnology and our understanding of the human genome. Gene therapy aims to correct genetic disorders, while personalized medicine uses a patient's genetic profile to guide decisions about prevention, diagnosis, and treatment of disease. Innovations like CRISPR gene editing and mRNA vaccines are transforming how we approach healthcare.
        </Card>
      </div>
    </div>
  );
};

export default ModernPage;