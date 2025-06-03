import './globals.css';

import type { Metadata } from 'next';
import { Belanosima } from 'next/font/google';

import Header from '@/components/layout/header';

const belanosimaFont = Belanosima({
  subsets: ['latin'],
  weight: '600',
});

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
        className={`bg-zinc-900 text-gray-300 antialiased ${belanosimaFont.className}`}
      >
        <Header />
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
