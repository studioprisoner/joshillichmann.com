import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"
import { OpenPanelComponent } from "@openpanel/nextjs"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Josh Illichmann | Product Designer',
  description: 'Product Designer from Melbourne, Australia',
  openGraph: {
    title: 'Josh Illichmann | Product Designer',
    description: 'Product Designer from Melbourne, Australia',
    url: 'https://joshillichmann.com',
    siteName: 'Josh Illichmann',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Josh Illichmann | Product Designer',
    description: 'Product Designer from Melbourne, Australia',
    creator: '@joshillichmann',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://joshillichmann.com'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" itemScope itemType="http://schema.org/Person">
      <body className={inter.className}>
        <Analytics />
        <OpenPanelComponent 
          clientId="eeb952be-b511-48b4-8537-5ff759b98280"
        />
        {children}
      </body>
    </html>
  );
}
