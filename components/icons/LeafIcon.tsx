import React from 'react';

export const LeafIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M17 21c-1.4-2-2.8-5-3-7-1.3-1-2.4-2.8-3-4-1.2-2.3-1.2-4.2-.2-5.2s2.9-1 5.2.2c1.2.6 3 1.7 4 3 .2 1.3 2 2.6 7 3" />
    <path d="M7 21c3.5-2 5-6 5-9" />
  </svg>
);