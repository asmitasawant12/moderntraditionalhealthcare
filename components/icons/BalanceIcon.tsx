import React from 'react';

export const BalanceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
    <path d="M12 2v20" />
    <path d="M2 12h20" />
    <path d="M5.64 5.64l12.72 12.72" />
    <path d="M18.36 5.64L5.64 18.36" />
  </svg>
);