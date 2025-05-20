import './globals.css';

import type { Metadata } from 'next';

import Header from '@/components/layout/header';

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
        className='antialiased min-h-screen bg-cover'
        style={{
          backgroundImage: 'url(\'/background.png\')',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <Header />
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
