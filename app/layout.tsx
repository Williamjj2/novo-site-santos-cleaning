import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StickyCTA from '../components/StickyCTA'
import { organizationSchema, serviceSchema } from '../lib/schema'
import { faqSchema, websiteSchema } from '../lib/enhanced-schema'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://santoscsolutions.com'),
  title: {
    template: '%s | Santos Cleaning Solutions',
    default: 'Professional House Cleaning Services in Marietta, GA | Santos Cleaning Solutions',
  },
  description: 'Professional house cleaning services in Marietta, GA. Family-owned, licensed & insured. Regular cleaning, deep cleaning, office cleaning. Free estimates.',
  keywords: 'house cleaning Marietta GA, cleaning services, professional cleaning, deep cleaning, regular cleaning, office cleaning, residential cleaning, commercial cleaning, licensed cleaning, insured cleaning, family owned cleaning',
  authors: [{ name: 'Santos Cleaning Solutions LLC' }],
  openGraph: {
    title: 'Professional House Cleaning Services in Marietta, GA',
    description: 'Professional house cleaning services in Marietta, GA. Family-owned, licensed & insured. Regular cleaning, deep cleaning, office cleaning. Free estimates.',
    url: 'https://santoscsolutions.com',
    siteName: 'Santos Cleaning Solutions',
    images: [
      {
        url: '/images/og-image-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Santos Cleaning Solutions - Professional House Cleaning in Marietta, GA',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional House Cleaning Services in Marietta, GA',
    description: 'Professional house cleaning services in Marietta, GA. Family-owned, licensed & insured. Regular cleaning, deep cleaning, office cleaning. Free estimates.',
    images: ['/images/twitter-card-home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'facebook-domain-verification': 'your-facebook-domain-verification',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="canonical" href="https://santoscsolutions.com" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="geo.region" content="US-GA" />
        <meta name="geo.placename" content="Marietta" />
        <meta name="geo.position" content="33.9526;-84.5499" />
        <meta name="ICBM" content="33.9526, -84.5499" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        {/* SearchAtlas Dynamic Optimization Script - TEMPORARY TEST */}
        <script
          {...{
            'nowprocket': '',
            'nitro-exclude': ''
          } as any}
          type="text/javascript"
          id="sa-dynamic-optimization"
          data-uuid="e818b258-c07f-43f5-b850-c649e9b0d162"
          dangerouslySetInnerHTML={{
            __html: `
              var script = document.createElement("script");
              script.setAttribute("nowprocket", "");
              script.setAttribute("nitro-exclude", "");
              script.src = "https://dashboard.searchatlas.com/scripts/dynamic_optimization.js";
              script.dataset.uuid = "e818b258-c07f-43f5-b850-c649e9b0d162";
              script.id = "sa-dynamic-optimization-loader";
              document.head.appendChild(script);
            `
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        
        <Header />
        
        <main id="main-content">
          {children}
        </main>
        
        <Footer />
        <StickyCTA />
        
        <Analytics />
      </body>
    </html>
  )
}
