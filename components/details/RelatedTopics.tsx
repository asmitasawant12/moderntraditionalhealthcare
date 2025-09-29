import React from 'react';
import { Page } from '../../types';

interface Topic {
  title: string;
  page: Page;
}

interface RelatedTopicsProps {
  topics: Topic[];
  setCurrentPage: (page: Page) => void;
}

const RelatedTopics: React.FC<RelatedTopicsProps> = ({ topics, setCurrentPage }) => {
  if (topics.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Related Topics</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic) => (
          <button
            key={topic.page}
            onClick={() => setCurrentPage(topic.page)}
            className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg text-left hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
          >
            <p className="font-semibold text-indigo-700 dark:text-indigo-400">{topic.title} &rarr;</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RelatedTopics;
