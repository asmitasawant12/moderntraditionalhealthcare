import React from 'react';

export const ScaleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="m16 16 3-8 3 8c-2 1-4 1-6 0"/>
    <path d="m2 16 3-8 3 8c-2 1-4 1-6 0"/>
    <path d="M12 3v18"/>
    <path d="M3 7h18"/>
    <path d="M12 12l7-10"/>
    <path d="M12 12 5 2"/>
  </svg>
);