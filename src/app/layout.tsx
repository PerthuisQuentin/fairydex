import './globals.css';

import type { Metadata } from 'next';
import { Belanosima } from 'next/font/google';

import Header from '@/common/components/header.component';

const belanosimaFont = Belanosima({
  subsets: ['latin'],
  weight: '600',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL!),
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
        className={`text-gray-300 antialiased ${belanosimaFont.className}`}
      >
        <Header />
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
