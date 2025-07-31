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
        {/* Favicon and Touch Icons - Critical for SEO */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* DNS Prefetch and Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
        
        {/* Canonical URL - Critical for SEO */}
        <link rel="canonical" href="https://santoscsolutions.com" />
        
        {/* Enhanced Meta Tags for Local SEO */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=yes" />
        
        {/* Geographic and Local SEO Meta Tags */}
        <meta name="geo.region" content="US-GA" />
        <meta name="geo.placename" content="Marietta" />
        <meta name="geo.position" content="33.9526;-84.5499" />
        <meta name="ICBM" content="33.9526, -84.5499" />
        <meta name="DC.title" content="Santos Cleaning Solutions - Professional House Cleaning Marietta GA" />
        
        {/* Business Information Meta Tags */}
        <meta name="rating" content="5" />
        <meta name="distribution" content="local" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        
        {/* Enhanced Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        
        {/* Critical CSS for Above-the-Fold Content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS - Above the fold content */
            body{margin:0;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif;line-height:1.6;color:#1f2937}
            header{background:#fff;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);position:sticky;top:0;z-index:50}
            .hero-section{background:linear-gradient(135deg,#1d4ed8,#1e40af,#1e3a8a);color:#fff;padding:6rem 1rem}
            .cta-button{background:#fff;color:#2563eb;padding:1rem 2rem;border-radius:9999px;font-weight:700;text-decoration:none;display:inline-flex;align-items:center;transition:all 0.3s ease;box-shadow:0 10px 25px rgba(59,130,246,0.3)}
            .cta-button:hover{transform:translateY(-2px);background:#f3f4f6}
            @media(max-width:768px){.hero-section{padding:4rem 1rem}.cta-button{width:100%;justify-content:center}}
          `
        }} />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/images/hero-cleaning-team.webp" as="image" type="image/webp" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" as="style" />
        
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
