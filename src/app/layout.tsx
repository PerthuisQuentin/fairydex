import './globals.css';

import type { Metadata } from 'next';
import { Belanosima } from 'next/font/google';

import { AgentId } from '@/agent/data/agent.type';
import { getAgentIconUrl } from '@/agent/data/agents.data';
import Header from '@/common/components/header.component';

const belanosimaFont = Belanosima({
  subsets: ['latin'],
  weight: '600',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL!),
  title: 'Zenless Lab',
  description: 'Information and tools for Zenless Zone Zero',
  openGraph: {
    title: 'Zenless Lab',
    url: '/',
    images: [
      {
        url: getAgentIconUrl(AgentId.AnbyDemara),
        width: 128,
        height: 128,
      },
    ],
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
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
