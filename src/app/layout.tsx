import './globals.css';

import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Belanosima } from 'next/font/google';

import Footer from '@/common/components/footer.component';
import Header from '@/common/components/header.component';

const belanosimaFont = Belanosima({
  subsets: ['latin'],
  weight: '600',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL!),
  title: 'FairyDex',
  description: 'Information and tools for Zenless Zone Zero',
  openGraph: {
    title: 'FairyDex',
    url: '/',
  }
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
        <div className="pt-20 min-h-screen flex flex-col">
          <div className="flex-1">
            {children}
          </div>
          <SpeedInsights />
          <Footer />
        </div>
      </body>
    </html>
  );
}
