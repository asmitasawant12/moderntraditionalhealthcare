import React from 'react';

interface CardProps {
  title: string;
  imageUrl: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, children }) => {
  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
};

export default Card;