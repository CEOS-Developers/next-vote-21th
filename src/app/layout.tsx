import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@styles/globals.css';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  style: 'normal',
  weight: '100 900',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Next Vote',
  description: 'Vote system with backend part - team promesa.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className} flex min-h-screen items-center justify-center`}>
        <div className="mobile-frame bg-neutral-01 relative">{children}</div>
      </body>
    </html>
  );
}
