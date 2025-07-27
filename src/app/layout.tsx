import './globals.css';

import { Analytics } from '@vercel/analytics/next';
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
  description: 'Informations and tools for Zenless Zone Zero',
  openGraph: {
    title: 'FairyDex',
    url: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/web-app-manifest-192x192.png',
  },
  manifest: '/manifest.webmanifest',
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
          <Analytics />
          <Footer />
        </div>
      </body>
    </html>
  );
}
