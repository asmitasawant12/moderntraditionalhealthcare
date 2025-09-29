import { Page } from './types';

export interface SearchableContent {
  page: Page;
  title: string;
  keywords: string[];
  description: string;
}

export const searchData: SearchableContent[] = [
  // Main pages
  { page: Page.TRADITIONAL, title: 'Traditional Healthcare', keywords: ['roots', 'wellness', 'holistic', 'ancient'], description: 'Explore ancient healing systems.' },
  { page: Page.MODERN, title: 'Modern Healthcare', keywords: ['science', 'innovation', 'technology', 'western'], description: 'Discover evidence-based medicine.' },
  { page: Page.COMPARISON, title: 'Comparison', keywords: ['compare', 'differences', 'integration', 'side-by-side'], description: 'See a side-by-side analysis.' },
  { page: Page.ABOUT_US, title: 'About Us', keywords: ['mission', 'vision', 'about', 'story', 'team'], description: 'Learn about our mission and vision.' },
  { page: Page.SUPPORT, title: 'Support & FAQ', keywords: ['help', 'contact', 'questions', 'form'], description: 'Get answers and contact us.' },

  // Traditional detail pages
  { page: Page.AYURVEDA, title: 'Ayurveda', keywords: ['doshas', 'india', 'holistic', 'vata', 'pitta', 'kapha'], description: 'Ancient Indian system of medicine.' },
  { page: Page.HERBAL_MEDICINE, title: 'Herbal Medicine', keywords: ['plants', 'botanical', 'phytomedicine', 'herbs'], description: 'Using the healing power of plants.' },
  { page: Page.TCM, title: 'Acupuncture & TCM', keywords: ['china', 'qi', 'yin yang', 'meridians', 'needles'], description: 'Traditional Chinese Medicine.' },
  { page: Page.NATUROPATHY, title: 'Naturopathy', keywords: ['natural', 'self-healing', 'prevention', 'holistic'], description: 'Healing through natural therapies.' },
  { page: Page.UNANI, title: 'Unani Medicine', keywords: ['greek', 'humors', 'hikmat', 'persian'], description: 'System based on balancing four humors.' },
  { page: Page.FOLK_INDIGENOUS, title: 'Folk & Indigenous', keywords: ['native', 'shaman', 'rituals', 'tribal'], description: 'Healing practices from native cultures.' },

  // Modern detail pages
  { page: Page.ALLOPATHIC, title: 'Allopathic Medicine', keywords: ['western', 'conventional', 'doctors', 'md'], description: 'The dominant system of Western medicine.' },
  { page: Page.PHARMACEUTICALS, title: 'Pharmaceuticals', keywords: ['drugs', 'pills', 'medicine', 'fda', 'trials'], description: 'The science of developing drugs.' },
  { page: Page.SURGERY, title: 'Surgical Interventions', keywords: ['operation', 'scalpel', 'robotic', 'laparoscopy'], description: 'Treating conditions through operations.' },
  { page: Page.DIAGNOSTIC, title: 'Diagnostic Technology', keywords: ['mri', 'x-ray', 'ct scan', 'imaging', 'testing'], description: 'Tools for identifying diseases.' },
  { page: Page.PREVENTIVE, title: 'Preventive Medicine', keywords: ['vaccines', 'screenings', 'prevention', 'check-ups'], description: 'A proactive approach to healthcare.' },
  { page: Page.BIOTECH, title: 'Biotechnology & Genetics', keywords: ['dna', 'genes', 'stem cells', 'personalized'], description: 'The cutting edge of medicine.' },

  // Case Studies
  { page: Page.CASE_STUDY_INDIA, title: 'Case Study: India', keywords: ['ayush', 'pluralistic', 'integration'], description: 'Healthcare integration in India.' },
  { page: Page.CASE_STUDY_CHINA, title: 'Case Study: China', keywords: ['tcm', 'integration', 'parallel'], description: 'Healthcare integration in China.' },
  { page: Page.CASE_STUDY_AFRICA, title: 'Case Study: Africa', keywords: ['who', 'healers', 'herbal'], description: 'Healthcare integration in Africa.' },
  { page: Page.CASE_STUDY_BRAZIL, title: 'Case Study: Brazil', keywords: ['sus', 'pnpic', 'integrative', 'homeopathy'], description: 'Healthcare integration in Brazil.' },
  { page: Page.CASE_STUDY_JAPAN, title: 'Case Study: Japan', keywords: ['kampo', 'insurance', 'tcm', 'herbal'], description: 'Healthcare integration in Japan.' },
];