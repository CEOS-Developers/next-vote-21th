'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const current = pathname.split('/')[3];

  const activeIndex = (() => {
    switch (current) {
      case 'list':
        return 0;
      case 'front':
      case 'back':
      case 'team':
      case 'aggregate':
      case 'loading':
        return 1;
      case 'result':
        return 2;
      default:
        return -1;
    }
  })();

  if (activeIndex === -1) return null;

  const totalSteps = 3;
  const sepLen = 5;

  return (
    <div className="mt-6 flex items-center justify-between">
      {Array.from({ length: totalSteps }).map((_, stepIdx) => (
        <React.Fragment key={`step-${stepIdx}`}>
          <div
            className={`flex h-6 w-6 items-center justify-center rounded-full ${
              activeIndex === stepIdx ? 'bg-grayscale-00-black' : 'bg-grayscale-04'
            }`}
          >
            <p
              className={`text-caption-03 ${activeIndex === stepIdx ? 'text-grayscale-04' : 'text-grayscale-00-black'}`}
            >
              {stepIdx + 1}
            </p>
          </div>
          {stepIdx < totalSteps - 1 &&
            Array.from({ length: sepLen }).map((_, i) => (
              <div key={`sep-${stepIdx}-${i}`} className="bg-grayscale-04 h-3 w-3 rounded-full"></div>
            ))}
        </React.Fragment>
      ))}
    </div>
  );
}
