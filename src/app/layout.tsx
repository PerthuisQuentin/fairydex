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
  alternates: {
    canonical: './',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="96x96" href="/web-app-manifest-96x96.png" />
        <meta name="apple-mobile-web-app-title" content="FairyDex"></meta>
      </head>
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
