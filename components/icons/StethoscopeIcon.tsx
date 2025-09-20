import React from 'react';

export const StethoscopeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M4.5 10.5c-3.3 1.2-5 4.5-5 8.5h20c0-4-1.7-7.3-5-8.5" />
    <path d="M12 18.5V2" />
    <circle cx="12" cy="2" r="2" />
    <path d="M19.5 9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    <path d="M4.5 9.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0z" />
  </svg>
);