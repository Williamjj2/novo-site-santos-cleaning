import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({ currentLanguage, currentSection = 'privacidade' }) => {
  const siteUrl = process.env.REACT_APP_SITE_URL || 'https://santoscleaning.com';
  
  const seoData = {
    en: {
      privacidade: {
        title: 'Privacy Policy | Santos Cleaning Solutions LLC | Professional Cleaning Services',
        description: 'Read our comprehensive privacy policy. Learn how Santos Cleaning Solutions LLC protects your personal information and data privacy in Marietta, Georgia.',
        keywords: 'privacy policy, data protection, Santos Cleaning Solutions, professional cleaning services, Marietta Georgia, cleaning company privacy'
      },
      termos: {
        title: 'Terms of Service | Santos Cleaning Solutions LLC | Cleaning Services Agreement',
        description: 'Terms and conditions for Santos Cleaning Solutions LLC professional cleaning services. Understand our service agreements and policies in Marietta, Georgia.',
        keywords: 'terms of service, cleaning service agreement, Santos Cleaning Solutions, professional cleaning, Marietta Georgia, service terms'
      },
      aviso: {
        title: 'Legal Notice | Santos Cleaning Solutions LLC | Legal Information',
        description: 'Legal notice and disclaimer for Santos Cleaning Solutions LLC. Important legal information about our professional cleaning services in Marietta, Georgia.',
        keywords: 'legal notice, disclaimer, Santos Cleaning Solutions, legal information, professional cleaning, Marietta Georgia'
      },
      acessibilidade: {
        title: 'Accessibility Statement | Santos Cleaning Solutions LLC | Website Accessibility',
        description: 'Our commitment to web accessibility. Santos Cleaning Solutions LLC ensures our website is accessible to all users with disabilities.',
        keywords: 'accessibility statement, web accessibility, Santos Cleaning Solutions, inclusive design, disability access, ADA compliance'
      },
      cookies: {
        title: 'Cookie Policy | Santos Cleaning Solutions LLC | Website Cookies Information',
        description: 'Learn about our cookie policy and how Santos Cleaning Solutions LLC uses cookies to improve your browsing experience on our website.',
        keywords: 'cookie policy, website cookies, Santos Cleaning Solutions, data tracking, web analytics, user experience'
      }
    },
    es: {
      privacidade: {
        title: 'Política de Privacidad | Santos Cleaning Solutions LLC | Servicios de Limpieza Profesional',
        description: 'Lee nuestra política de privacidad integral. Aprende cómo Santos Cleaning Solutions LLC protege tu información personal en Marietta, Georgia.',
        keywords: 'política de privacidad, protección de datos, Santos Cleaning Solutions, servicios de limpieza profesional, Marietta Georgia'
      },
      termos: {
        title: 'Términos de Servicio | Santos Cleaning Solutions LLC | Acuerdo de Servicios de Limpieza',
        description: 'Términos y condiciones para los servicios profesionales de limpieza de Santos Cleaning Solutions LLC en Marietta, Georgia.',
        keywords: 'términos de servicio, acuerdo de limpieza, Santos Cleaning Solutions, limpieza profesional, Marietta Georgia'
      },
      aviso: {
        title: 'Aviso Legal | Santos Cleaning Solutions LLC | Información Legal',
        description: 'Aviso legal y descargo de responsabilidad de Santos Cleaning Solutions LLC. Información legal importante sobre nuestros servicios en Marietta, Georgia.',
        keywords: 'aviso legal, descargo de responsabilidad, Santos Cleaning Solutions, información legal, limpieza profesional'
      },
      acessibilidade: {
        title: 'Declaración de Accesibilidad | Santos Cleaning Solutions LLC | Accesibilidad Web',
        description: 'Nuestro compromiso con la accesibilidad web. Santos Cleaning Solutions LLC garantiza que nuestro sitio web sea accesible para todos los usuarios.',
        keywords: 'declaración de accesibilidad, accesibilidad web, Santos Cleaning Solutions, diseño inclusivo, acceso para discapacitados'
      },
      cookies: {
        title: 'Política de Cookies | Santos Cleaning Solutions LLC | Información de Cookies del Sitio Web',
        description: 'Conoce nuestra política de cookies y cómo Santos Cleaning Solutions LLC utiliza cookies para mejorar tu experiencia de navegación.',
        keywords: 'política de cookies, cookies del sitio web, Santos Cleaning Solutions, seguimiento de datos, analítica web'
      }
    },
    pt: {
      privacidade: {
        title: 'Política de Privacidade | Santos Cleaning Solutions LLC | Serviços de Limpeza Profissional',
        description: 'Leia nossa política de privacidade abrangente. Saiba como a Santos Cleaning Solutions LLC protege suas informações pessoais em Marietta, Georgia.',
        keywords: 'política de privacidade, proteção de dados, Santos Cleaning Solutions, serviços de limpeza profissional, Marietta Georgia'
      },
      termos: {
        title: 'Termos de Serviço | Santos Cleaning Solutions LLC | Acordo de Serviços de Limpeza',
        description: 'Termos e condições para os serviços profissionais de limpeza da Santos Cleaning Solutions LLC em Marietta, Georgia.',
        keywords: 'termos de serviço, acordo de limpeza, Santos Cleaning Solutions, limpeza profissional, Marietta Georgia'
      },
      aviso: {
        title: 'Aviso Legal | Santos Cleaning Solutions LLC | Informações Legais',
        description: 'Aviso legal e isenção de responsabilidade da Santos Cleaning Solutions LLC. Informações legais importantes sobre nossos serviços em Marietta, Georgia.',
        keywords: 'aviso legal, isenção de responsabilidade, Santos Cleaning Solutions, informações legais, limpeza profissional'
      },
      acessibilidade: {
        title: 'Declaração de Acessibilidade | Santos Cleaning Solutions LLC | Acessibilidade Web',
        description: 'Nosso compromisso com a acessibilidade web. A Santos Cleaning Solutions LLC garante que nosso site seja acessível a todos os usuários.',
        keywords: 'declaração de acessibilidade, acessibilidade web, Santos Cleaning Solutions, design inclusivo, acesso para deficientes'
      },
      cookies: {
        title: 'Política de Cookies | Santos Cleaning Solutions LLC | Informações de Cookies do Site',
        description: 'Conheça nossa política de cookies e como a Santos Cleaning Solutions LLC usa cookies para melhorar sua experiência de navegação.',
        keywords: 'política de cookies, cookies do site, Santos Cleaning Solutions, rastreamento de dados, análise web'
      }
    }
  };

  const currentSEO = seoData[currentLanguage]?.[currentSection] || seoData['pt'][currentSection];
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
      
      {/* Canonical URL */}
      <link rel="canonical" href={`${siteUrl}/politicas-legais#${currentSection}`} />
      
      {/* Hreflang for International SEO */}
      <link rel="alternate" hrefLang="en-US" href={`${siteUrl}/legal-policies#${currentSection}`} />
      <link rel="alternate" hrefLang="es-US" href={`${siteUrl}/politicas-legais#${currentSection}`} />
      <link rel="alternate" hrefLang="pt-BR" href={`${siteUrl}/politicas-legais#${currentSection}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/legal-policies#${currentSection}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={currentSEO.title} />
      <meta property="og:description" content={currentSEO.description} />
      <meta property="og:url" content={`${siteUrl}/politicas-legais#${currentSection}`} />
      <meta property="og:site_name" content="Santos Cleaning Solutions LLC" />
      <meta property="og:locale" content={langCode.replace('-', '_')} />
      <meta property="og:image" content={`${siteUrl}/images/logo-og.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Santos Cleaning Solutions LLC Logo" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentSEO.title} />
      <meta name="twitter:description" content={currentSEO.description} />
      <meta name="twitter:image" content={`${siteUrl}/images/logo-twitter.png`} />
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
      
      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "Organization"],
          "name": "Santos Cleaning Solutions LLC",
          "alternateName": "Santos Cleaning",
          "description": currentSEO.description,
          "url": siteUrl,
          "logo": `${siteUrl}/images/logo.png`,
          "image": `${siteUrl}/images/logo.png`,
          "telephone": "+1-470-416-5649",
          "email": "santoscservices@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Marietta",
            "addressRegion": "GA",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 33.9526,
            "longitude": -84.5499
          },
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 33.9526,
              "longitude": -84.5499
            },
            "geoRadius": "50000"
          },
          "serviceType": "Professional Cleaning Services",
          "priceRange": "$$",
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
            "name": "Cleaning Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Deep Cleaning Service",
                  "description": "Comprehensive deep cleaning for homes and offices"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Regular Maintenance Cleaning",
                  "description": "Weekly and bi-weekly cleaning maintenance"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Move-in/Move-out Cleaning",
                  "description": "Specialized cleaning for moving situations"
                }
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
                "ratingValue": "5"
              },
              "reviewBody": "Exceptional cleaning service! Very professional and thorough."
            }
          ],
          "sameAs": [
            "https://www.facebook.com/santoscleaning",
            "https://www.instagram.com/santoscleaning",
            "https://www.linkedin.com/company/santos-cleaning-solutions"
          ],
          "founder": {
            "@type": "Person",
            "name": "Santos Family"
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
            "Laundry Services"
          ],
          "makesOffer": {
            "@type": "Offer",
            "description": "Professional cleaning services in Marietta, Georgia",
            "priceRange": "$$",
            "areaServed": "Marietta, GA"
          }
        })}
      </script>
      
      {/* FAQ Schema for Legal Pages */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What information does Santos Cleaning Solutions collect?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We collect personal information such as name, email, phone number, and service address to provide our professional cleaning services."
              }
            },
            {
              "@type": "Question", 
              "name": "How does Santos Cleaning Solutions protect my privacy?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We implement industry-standard security measures to protect your personal information and never sell your data to third parties."
              }
            },
            {
              "@type": "Question",
              "name": "What are the terms of service for cleaning appointments?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Appointments must be scheduled 24 hours in advance. Cancellations with less than 24 hours notice may incur a fee."
              }
            }
          ]
        })}
      </script>
      
      {/* BreadcrumbList Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": siteUrl
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Legal Policies",
              "item": `${siteUrl}/politicas-legais`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": currentSEO.title.split('|')[0].trim(),
              "item": `${siteUrl}/politicas-legais#${currentSection}`
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;