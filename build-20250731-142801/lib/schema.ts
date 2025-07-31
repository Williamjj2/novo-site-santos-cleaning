export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://santoscsolutions.com/#organization',
  name: 'Santos Cleaning Solutions',
  alternateName: 'Santos Cleaning Solutions LLC',
  description: 'Professional house cleaning services in Metro Atlanta. Family-owned, licensed & insured cleaning company serving Marietta, Buckhead, Alpharetta, and 15+ communities.',
  url: 'https://santoscsolutions.com',
  telephone: '+18663509407',
  email: 'info@santoscsolutions.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Marietta',
    addressRegion: 'GA',
    addressCountry: 'US',
    postalCode: '30060'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.9526,
    longitude: -84.5499
  },
  image: [
    'https://santoscsolutions.com/images/logo.png',
    'https://santoscsolutions.com/images/team-photo.jpg'
  ],
  logo: 'https://santoscsolutions.com/images/logo.png',
  sameAs: [
    'https://www.facebook.com/santoscleaningsolutions',
    'https://www.instagram.com/santoscleaningsolutions',
    'https://www.linkedin.com/company/santos-cleaning-solutions'
  ],
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '16:00'
    }
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Marietta',
      '@id': 'https://santoscsolutions.com/areas/marietta'
    },
    {
      '@type': 'City',
      name: 'Buckhead',
      '@id': 'https://santoscsolutions.com/areas/buckhead'
    },
    {
      '@type': 'City',
      name: 'Alpharetta',
      '@id': 'https://santoscsolutions.com/areas/alpharetta'
    },
    {
      '@type': 'City',
      name: 'Sandy Springs',
      '@id': 'https://santoscsolutions.com/areas/sandy-springs'
    },
    {
      '@type': 'City',
      name: 'Dunwoody',
      '@id': 'https://santoscsolutions.com/areas/dunwoody'
    },
    {
      '@type': 'City',
      name: 'Roswell',
      '@id': 'https://santoscsolutions.com/areas/roswell'
    },
    {
      '@type': 'City',
      name: 'Johns Creek',
      '@id': 'https://santoscsolutions.com/areas/johns-creek'
    },
    {
      '@type': 'City',
      name: 'Milton',
      '@id': 'https://santoscsolutions.com/areas/milton'
    },
    {
      '@type': 'City',
      name: 'Brookhaven',
      '@id': 'https://santoscsolutions.com/areas/brookhaven'
    },
    {
      '@type': 'City',
      name: 'Smyrna',
      '@id': 'https://santoscsolutions.com/areas/smyrna'
    },
    {
      '@type': 'City',
      name: 'Vinings',
      '@id': 'https://santoscsolutions.com/areas/vinings'
    },
    {
      '@type': 'City',
      name: 'Druid Hills',
      '@id': 'https://santoscsolutions.com/areas/druid-hills'
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '247',
    bestRating: '5',
    worstRating: '1'
  }
}

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'House Cleaning Service',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Santos Cleaning Solutions',
    '@id': 'https://santoscsolutions.com/#organization'
  },
  areaServed: {
    '@type': 'State',
    name: 'Georgia',
    containsPlace: {
      '@type': 'City',
      name: 'Atlanta Metro Area'
    }
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cleaning Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Regular House Cleaning',
          description: 'Weekly, bi-weekly, or monthly house cleaning services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Deep Cleaning',
          description: 'Comprehensive deep cleaning for homes'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Move In/Out Cleaning',
          description: 'Complete cleaning for moving transitions'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Office Cleaning',
          description: 'Professional commercial and office cleaning'
        }
      }
    ]
  }
}

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What areas do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve the entire Metro Atlanta area including Marietta, Buckhead, Alpharetta, Sandy Springs, Dunwoody, Roswell, Johns Creek, Milton, Brookhaven, Smyrna, Vinings, and Druid Hills.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are you licensed and insured?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Santos Cleaning Solutions is fully licensed and insured. We carry general liability insurance and are bonded for your protection.'
      }
    },
    {
      '@type': 'Question',
      name: 'What cleaning products do you use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use eco-friendly, non-toxic cleaning products that are safe for children and pets. We can also accommodate special requests for specific products.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much do your services cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our pricing varies based on the size of your home, frequency of service, and specific cleaning needs. We offer free estimates and competitive pricing for all our services.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do I need to be home during the cleaning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, you don\'t need to be home. Many of our clients provide us with a key or access code. All our staff are background-checked and bonded for your security.'
      }
    }
  ]
} 