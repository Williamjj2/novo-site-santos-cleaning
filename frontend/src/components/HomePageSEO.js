import React from 'react';
import { Helmet } from 'react-helmet';

const HomePageSEO = ({ currentLanguage = 'pt' }) => {
  const siteUrl = process.env.REACT_APP_SITE_URL || 'https://santoscleaning.com';
  
  const seoData = {
    en: {
      title: 'Professional Cleaning Services in Marietta, GA | Santos Cleaning Solutions LLC',
      description: 'Premium house cleaning services in Marietta, Georgia. Deep cleaning, regular maintenance, move-in/out cleaning. Licensed, insured, and family-owned. Book your free estimate today!',
      keywords: 'professional cleaning services, house cleaning Marietta GA, deep cleaning, regular cleaning, move-in cleaning, move-out cleaning, residential cleaning, commercial cleaning, Atlanta metro cleaning, licensed cleaning company, insured cleaning service'
    },
    es: {
      title: 'Servicios de Limpieza Profesional en Marietta, GA | Santos Cleaning Solutions LLC',
      description: 'Servicios premium de limpieza del hogar en Marietta, Georgia. Limpieza profunda, mantenimiento regular, limpieza de mudanza. Con licencia, asegurado y de propiedad familiar. ¡Reserve su estimación gratuita hoy!',
      keywords: 'servicios de limpieza profesional, limpieza de casa Marietta GA, limpieza profunda, limpieza regular, limpieza de mudanza, limpieza residencial, limpieza comercial, limpieza metro Atlanta, empresa de limpieza con licencia'
    },
    pt: {
      title: 'Serviços de Limpeza Profissional em Marietta, GA | Santos Cleaning Solutions LLC',
      description: 'Serviços premium de limpeza residencial em Marietta, Georgia. Limpeza profunda, manutenção regular, limpeza de mudança. Licenciado, segurado e empresa familiar. Agende sua avaliação gratuita hoje!',
      keywords: 'serviços de limpeza profissional, limpeza residencial Marietta GA, limpeza profunda, limpeza regular, limpeza de mudança, limpeza residencial, limpeza comercial, limpeza metro Atlanta, empresa de limpeza licenciada'
    }
  };

  const currentSEO = seoData[currentLanguage];
  const langCode = currentLanguage === 'pt' ? 'pt-BR' : currentLanguage === 'es' ? 'es-US' : 'en-US';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={langCode} />
      <title>{currentSEO.title}</title>
      <meta name="description" content={currentSEO.description} />
      <meta name="keywords" content={currentSEO.keywords} />
      <meta name="author" content="Santos Cleaning Solutions LLC" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />
      
      {/* Hreflang for International SEO */}
      <link rel="alternate" hrefLang="en-US" href={siteUrl} />
      <link rel="alternate" hrefLang="es-US" href={siteUrl} />
      <link rel="alternate" hrefLang="pt-BR" href={siteUrl} />
      <link rel="alternate" hrefLang="x-default" href={siteUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={currentSEO.title} />
      <meta property="og:description" content={currentSEO.description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content="Santos Cleaning Solutions LLC" />
      <meta property="og:locale" content={langCode.replace('-', '_')} />
      <meta property="og:image" content={`${siteUrl}/images/og-image.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Santos Cleaning Solutions - Professional Cleaning Services in Marietta, GA" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentSEO.title} />
      <meta name="twitter:description" content={currentSEO.description} />
      <meta name="twitter:image" content={`${siteUrl}/images/twitter-card.jpg`} />
      <meta name="twitter:image:alt" content="Santos Cleaning Solutions LLC" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="US-GA" />
      <meta name="geo.placename" content="Marietta, Georgia" />
      <meta name="geo.position" content="33.9526;-84.5499" />
      <meta name="ICBM" content="33.9526, -84.5499" />
      
      {/* Business Information */}
      <meta name="company" content="Santos Cleaning Solutions LLC" />
      <meta name="industry" content="Professional Cleaning Services" />
      <meta name="service-area" content="Marietta, Georgia, Atlanta Metro Area" />
      <meta name="phone" content="+1-470-416-5649" />
      <meta name="email" content="santoscservices@gmail.com" />
      
      {/* Schema.org Structured Data - Main Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "HouseCleaning", "Organization"],
          "name": "Santos Cleaning Solutions LLC",
          "alternateName": ["Santos Cleaning", "Santos Cleaning Solutions"],
          "description": currentSEO.description,
          "url": siteUrl,
          "logo": `${siteUrl}/images/logo.png`,
          "image": [
            `${siteUrl}/images/logo.png`,
            `${siteUrl}/images/before-after-1.jpg`,
            `${siteUrl}/images/before-after-2.jpg`
          ],
          "telephone": "+1-470-416-5649",
          "email": "santoscservices@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Marietta",
            "addressRegion": "GA",
            "addressCountry": "US",
            "postalCode": "30060"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 33.9526,
            "longitude": -84.5499
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Marietta, Georgia"
            },
            {
              "@type": "City", 
              "name": "Atlanta, Georgia"
            },
            {
              "@type": "City",
              "name": "Roswell, Georgia"
            },
            {
              "@type": "City",
              "name": "Alpharetta, Georgia"
            },
            {
              "@type": "City",
              "name": "Sandy Springs, Georgia"
            }
          ],
          "serviceType": [
            "House Cleaning",
            "Deep Cleaning",
            "Regular Cleaning",
            "Move-in Cleaning",
            "Move-out Cleaning",
            "Appliance Cleaning",
            "Cabinet Cleaning",
            "Laundry Services"
          ],
          "priceRange": "$$",
          "currenciesAccepted": "USD",
          "paymentAccepted": ["Cash", "Credit Card", "Check", "Bank Transfer"],
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "08:00",
              "closes": "18:00"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Professional Cleaning Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Deep Cleaning Service",
                  "description": "Comprehensive deep cleaning for homes and offices in Marietta, GA",
                  "provider": {
                    "@type": "LocalBusiness",
                    "name": "Santos Cleaning Solutions LLC"
                  }
                },
                "priceRange": "$$",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Regular Maintenance Cleaning",
                  "description": "Weekly and bi-weekly cleaning maintenance services",
                  "provider": {
                    "@type": "LocalBusiness",
                    "name": "Santos Cleaning Solutions LLC"
                  }
                },
                "priceRange": "$$",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Move-in/Move-out Cleaning",
                  "description": "Specialized cleaning services for moving situations",
                  "provider": {
                    "@type": "LocalBusiness",
                    "name": "Santos Cleaning Solutions LLC"
                  }
                },
                "priceRange": "$$",
                "availability": "https://schema.org/InStock"
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "47",
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": [
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Maria Rodriguez"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Exceptional cleaning service! Very professional and thorough. Highly recommend Santos Cleaning Solutions.",
              "datePublished": "2024-12-15"
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "John Smith"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Outstanding service! They transformed our home. Professional, reliable, and trustworthy team.",
              "datePublished": "2024-12-10"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/santoscleaning",
            "https://www.instagram.com/santoscleaning",
            "https://www.linkedin.com/company/santos-cleaning-solutions",
            "https://www.google.com/maps/place/Santos+Cleaning+Solutions"
          ],
          "founder": {
            "@type": "Person",
            "name": "Santos Family",
            "jobTitle": "Founder"
          },
          "foundingDate": "2024",
          "knowsAbout": [
            "House Cleaning",
            "Office Cleaning", 
            "Deep Cleaning",
            "Residential Cleaning",
            "Commercial Cleaning",
            "Move-in Cleaning",
            "Move-out Cleaning",
            "Appliance Cleaning",
            "Cabinet Cleaning",
            "Laundry Services",
            "Professional Cleaning",
            "Eco-friendly Cleaning",
            "Licensed Cleaning Services",
            "Insured Cleaning Company"
          ],
          "makesOffer": {
            "@type": "Offer",
            "description": "Professional cleaning services in Marietta, Georgia and Atlanta Metro Area",
            "priceRange": "$$",
            "areaServed": "Marietta, GA",
            "availability": "https://schema.org/InStock",
            "businessFunction": "https://schema.org/Sell"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-470-416-5649",
            "contactType": "customer service",
            "email": "santoscservices@gmail.com",
            "availableLanguage": ["English", "Spanish", "Portuguese"]
          }
        })}
      </script>
      
      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What cleaning services does Santos Cleaning Solutions offer in Marietta, GA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer comprehensive cleaning services including deep cleaning, regular maintenance cleaning, move-in/move-out cleaning, appliance cleaning, cabinet cleaning, and laundry services for homes and businesses in Marietta and Atlanta Metro area."
              }
            },
            {
              "@type": "Question", 
              "name": "Is Santos Cleaning Solutions licensed and insured?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Santos Cleaning Solutions LLC is fully licensed and insured in Georgia. We are a family-owned business committed to providing professional and reliable cleaning services."
              }
            },
            {
              "@type": "Question",
              "name": "How much do cleaning services cost in Marietta, GA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our pricing varies based on home size, service type, and frequency. We offer free estimates and competitive rates. Contact us at (470) 416-5649 for a personalized quote."
              }
            },
            {
              "@type": "Question",
              "name": "What areas does Santos Cleaning Solutions serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We serve Marietta, Georgia and the greater Atlanta Metro area including Roswell, Alpharetta, Sandy Springs, Vinings, East Cobb, Dunwoody, and over 40 premium communities."
              }
            },
            {
              "@type": "Question",
              "name": "How far in advance should I schedule cleaning services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We recommend scheduling at least 24 hours in advance. For urgent cleaning needs, we offer emergency services with potential same-day availability."
              }
            }
          ]
        })}
      </script>
      
      {/* WebSite Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Santos Cleaning Solutions LLC",
          "url": siteUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${siteUrl}/?s={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
};

export default HomePageSEO;