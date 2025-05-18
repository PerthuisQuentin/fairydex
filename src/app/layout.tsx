import './globals.css';

import type { Metadata } from 'next';

import Header from '@/components/header';

export const metadata: Metadata = {
  title: 'NameToFound',
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
        className='antialiased min-h-screen'
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
