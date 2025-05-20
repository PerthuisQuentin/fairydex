import './globals.css';

import type { Metadata } from 'next';

import Header from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'NameToFind',
  description: 'ZZZ tools',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='antialiased min-h-screen bg-zinc-900 text-gray-50'
      >
        <Header />
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
