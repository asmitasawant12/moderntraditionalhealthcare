import React from 'react';
import { Page } from '../../types';
import DetailPageLayout from './DetailPageLayout';
import RelatedTopics from './RelatedTopics';

interface SurgeryPageProps {
  setCurrentPage: (page: Page) => void;
}

const SurgeryPage: React.FC<SurgeryPageProps> = ({ setCurrentPage }) => {
  const relatedTopics = [
    { title: 'Allopathic Medicine', page: Page.ALLOPATHIC },
    { title: 'Diagnostic Technology', page: Page.DIAGNOSTIC },
    { title: 'Biotechnology & Genetics', page: Page.BIOTECH },
  ];

  return (
    <DetailPageLayout
      title="Surgical Interventions"
      subtitle="A medical specialty that uses operative manual and instrumental techniques to investigate or treat a pathological condition."
      returnPage={Page.MODERN}
      returnPageText="Modern Healthcare"
      setCurrentPage={setCurrentPage}
    >
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p>Surgery is a foundational pillar of modern healthcare, providing definitive treatment for a vast array of conditions, from traumatic injuries and cancers to congenital abnormalities and degenerative diseases. It involves physically altering body tissues and organs to restore function, repair damage, or remove disease.</p>
        
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Evolution of Surgery</h3>
        <p>Modern surgery is built upon three transformative 19th-century discoveries: anesthesia (to control pain), antisepsis (to prevent infection), and hemostasis (to control bleeding). These advancements turned surgery from a last-resort, often fatal procedure into a safe and routine medical practice. Today, surgical techniques continue to evolve at a rapid pace.</p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">Types of Surgical Procedures</h3>
        <p>Surgery can be categorized in many ways, including by purpose, urgency, and technique:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Open Surgery:</strong> The traditional approach, which involves making a large incision to provide the surgeon with direct access to the operative site.</li>
          <li><strong>Minimally Invasive Surgery (MIS):</strong> Techniques that use small incisions, cameras, and specialized instruments to perform procedures. This includes laparoscopy and endoscopy. Benefits include less pain, shorter hospital stays, and faster recovery.</li>
          <li><strong>Robotic Surgery:</strong> A type of MIS where a surgeon controls a console to manipulate robotic arms with surgical instruments, providing enhanced precision, flexibility, and control.</li>
          <li><strong>Microsurgery:</strong> Performed under magnification, allowing surgeons to operate on tiny structures like small blood vessels and nerves.</li>
          <li><strong>Organ Transplantation:</strong> A complex procedure to replace a failing organ with a healthy one from a donor.</li>
        </ul>
        
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">The Surgical Team and Environment</h3>
        <p>Surgery is a team effort performed in a sterile operating room. The team typically includes the surgeon, an anesthesiologist, surgical nurses, and technicians. Every step, from preoperative preparation to postoperative care, is meticulously planned and executed to ensure patient safety and the best possible outcome.</p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white pt-4">The Future of Surgery</h3>
        <p>The field of surgery is constantly advancing. Future innovations include the integration of artificial intelligence for surgical planning, the use of augmented reality to overlay diagnostic images onto the surgical field, and the development of regenerative medicine techniques that may one day allow surgeons to repair organs with a patient's own cells, reducing the need for traditional surgery altogether.</p>
      </div>

      <RelatedTopics topics={relatedTopics} setCurrentPage={setCurrentPage} />
    </DetailPageLayout>
  );
};

export default SurgeryPage;
