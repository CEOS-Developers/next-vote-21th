import React from 'react';
import Indicator from '@components/common/indicator';
import Header from '@components/features/vote/header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex h-full flex-col px-5">
        <Header />
        <hr className="bg-grayscale-00-black absolute inset-x-5 top-1/4 h-1" />
        {children}
      </div>
      <Indicator />
    </>
  );
}
