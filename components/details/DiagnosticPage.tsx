import React from 'react';
import { Page } from '../../types';
import DetailPageLayout from './DetailPageLayout';
import RelatedTopics from './RelatedTopics';

interface DiagnosticPageProps {
  setCurrentPage: (page: Page) => void;
}

const DiagnosticPage: React.FC<DiagnosticPageProps> = ({ setCurrentPage }) => {
  const relatedTopics = [
    { title: 'Allopathic Medicine', page: Page.ALLOPATHIC },
    { title: 'Surgical Interventions', page: Page.SURGERY },
    { title: 'Preventive Medicine', page: Page.PREVENTIVE },
  ];

  return (
    <DetailPageLayout
      title="Diagnostic Technology"
      subtitle="The tools and techniques used to identify diseases and medical conditions, enabling accurate and timely treatment."
      returnPage={Page.MODERN}
      returnPageText="Modern Healthcare"
      setCurrentPage={setCurrentPage}
    >
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p>Accurate diagnosis is the critical first step in effective medical care. Modern diagnostic technology allows healthcare providers to see inside the human body, analyze biological samples, and detect diseases at their earliest stages, often before symptoms even appear. These technologies have revolutionized medicine by replacing guesswork with precise, data-driven insights.</p>
        
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Medical Imaging</h3>
        <p>Medical imaging techniques provide detailed pictures of the body's internal structures. Key modalities include:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>X-rays:</strong> Use electromagnetic radiation to create images of dense structures like bones. They are fundamental for diagnosing fractures and pneumonia.</li>
          <li><strong>Computed Tomography (CT) Scans:</strong> Combine a series of X-ray images taken from different angles to create cross-sectional, 3D images of bones, blood vessels, and soft tissues.</li>
          <li><strong>Magnetic Resonance Imaging (MRI):</strong> Uses powerful magnets and radio waves to generate highly detailed images of organs and soft tissues, particularly the brain, spine, and joints.</li>
          <li><strong>Ultrasound:</strong> Employs high-frequency sound waves to create real-time images of organs and blood flow. It is widely used in obstetrics and cardiology and is notable for being radiation-free.</li>
          <li><strong>Positron Emission Tomography (PET) Scans:</strong> A type of nuclear medicine imaging that shows metabolic activity, helping to detect cancer, heart disease, and brain disorders.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Laboratory Medicine</h3>
        <p>Laboratory tests analyze samples of blood, urine, or tissue to measure levels of different substances and identify markers of disease. This field, known as pathology, includes:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Blood Tests:</strong> Can reveal information about organ function, infections, genetic disorders, and the presence of biomarkers for cancer (e.g., PSA for prostate cancer).</li>
          <li><strong>Microbiology:</strong> Involves culturing samples to identify bacteria, viruses, or fungi causing infections.</li>
          <li><strong>Histopathology:</strong> The microscopic examination of tissue biopsies to diagnose cancer and other diseases.</li>
          <li><strong>Genetic Testing:</strong> Analyzes DNA to identify inherited disorders, assess disease risk, and guide personalized treatment.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">The Role of AI and Future Trends</h3>
        <p>Artificial intelligence (AI) is beginning to play a transformative role in diagnostics. AI algorithms can analyze medical images and lab results with incredible speed and accuracy, helping radiologists and pathologists detect subtle signs of disease that might be missed by the human eye. The future of diagnostics points towards more portable, less invasive, and faster testing, bringing powerful diagnostic capabilities directly to the point of care.</p>
      </div>

      <RelatedTopics topics={relatedTopics} setCurrentPage={setCurrentPage} />
    </DetailPageLayout>
  );
};

export default DiagnosticPage;
