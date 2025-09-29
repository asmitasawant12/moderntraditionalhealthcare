import React from 'react';
import { Page } from '../../types';
import DetailPageLayout from './DetailPageLayout';
import RelatedTopics from './RelatedTopics';

interface AllopathicPageProps {
  setCurrentPage: (page: Page) => void;
}

const AllopathicPage: React.FC<AllopathicPageProps> = ({ setCurrentPage }) => {
  const relatedTopics = [
    { title: 'Pharmaceuticals', page: Page.PHARMACEUTICALS },
    { title: 'Surgical Interventions', page: Page.SURGERY },
    { title: 'Diagnostic Technology', page: Page.DIAGNOSTIC },
  ];

  return (
    <DetailPageLayout
      title="Allopathic Medicine"
      subtitle="The dominant system of Western medicine that treats diseases using drugs, surgery, or radiation to counteract symptoms and pathogens."
      returnPage={Page.MODERN}
      returnPageText="Modern Healthcare"
      setCurrentPage={setCurrentPage}
    >
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p>Allopathic medicine, often referred to as conventional, Western, or mainstream medicine, is the system of healthcare most prevalent in the developed world. The term "allopathy" means "opposite of suffering," reflecting its core principle of using active interventions to treat or suppress symptoms and the underlying causes of disease.</p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">The Biomedical Model</h3>
        <p>Allopathy is based on the biomedical model, which views the body as a complex machine and disease as a breakdown of its parts. It focuses on identifying specific, measurable causes of illness, such as bacteria, viruses, genetic defects, or biochemical imbalances. This reductionist approach has been incredibly successful in understanding and treating a vast range of diseases.</p>
        
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Key Characteristics</h3>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Evidence-Based Practice:</strong> Treatments are validated through rigorous scientific methods, including randomized controlled trials. A therapy is only accepted after it has been proven to be safe and effective.</li>
          <li><strong>Focus on Disease:</strong> The primary goal is to diagnose and treat specific diseases. Healthcare is often organized around medical specialties like cardiology, oncology, and neurology.</li>
          <li><strong>Pharmacological and Surgical Interventions:</strong> The main tools of allopathic medicine are pharmaceuticals (drugs) designed to target specific biological pathways and surgical procedures to repair or remove damaged tissues.</li>
          <li><strong>Advanced Technology:</strong> It relies heavily on technology for diagnosis (e.g., MRI, CT scans) and treatment (e.g., radiation therapy, robotic surgery).</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Strengths and Impact</h3>
        <p>Allopathic medicine has been responsible for some of the most significant advancements in human health. Its strengths are particularly evident in:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Emergency and Acute Care:</strong> It is highly effective in life-threatening situations like heart attacks, trauma, and severe infections.</li>
          <li><strong>Infectious Disease Control:</strong> The development of antibiotics and vaccines has dramatically reduced mortality from infectious diseases.</li>
          <li><strong>Surgical Advances:</strong> Complex surgical procedures, from organ transplants to minimally invasive surgery, have become routine, saving and improving countless lives.</li>
          <li><strong>Management of Chronic Disease:</strong> While not always curative, allopathic medicine provides effective tools for managing chronic conditions like diabetes, hypertension, and HIV.</li>
        </ul>
        <p>Despite its successes, allopathic medicine is sometimes criticized for being overly focused on symptoms rather than root causes, its high cost, and potential side effects from treatments. This has led to a growing interest in integrative approaches that combine the strengths of conventional medicine with complementary therapies.</p>
      </div>

      <RelatedTopics topics={relatedTopics} setCurrentPage={setCurrentPage} />
    </DetailPageLayout>
  );
};

export default AllopathicPage;
