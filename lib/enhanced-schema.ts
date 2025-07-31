// Enhanced Schema.org markup for better SEO

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://santoscsolutions.com/#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What areas do you serve in Metro Atlanta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide professional cleaning services throughout Metro Atlanta including Marietta, Buckhead, Alpharetta, Sandy Springs, Dunwoody, Roswell, Johns Creek, Milton, Brookhaven, Smyrna, Vinings, and Druid Hills. We serve both residential and commercial clients in Cobb, Fulton, and Gwinnett counties.'
      }
    },
    {
      '@type': 'Question', 
      name: 'Are you licensed and insured for cleaning services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Santos Cleaning Solutions is fully licensed and insured in Georgia. We carry comprehensive general liability insurance and are bonded for your complete protection. All our staff undergo background checks and are covered under our insurance policy.'
      }
    },
    {
      '@type': 'Question',
      name: 'What cleaning products do you use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use eco-friendly, non-toxic cleaning products that are EPA-certified and safe for children, pets, and family members with allergies. Our green cleaning solutions are completely biodegradable and effective for deep cleaning without harmful chemicals.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much do your cleaning services cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our cleaning service pricing varies based on home size, frequency of service, and specific cleaning needs. Regular cleaning starts at $120, deep cleaning starts at $250, and commercial cleaning has custom pricing. We offer free in-home estimates and competitive rates for all services.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do I need to be home during the cleaning service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, you don\'t need to be home during our cleaning service. Many clients provide us with a key or access code for convenience. All our staff are background-checked, bonded, and insured for your security and peace of mind.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is included in your regular cleaning service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our regular cleaning service includes vacuuming all carpets and rugs, mopping hard floors, dusting furniture and surfaces, cleaning bathrooms (toilets, sinks, showers, mirrors), kitchen cleaning (countertops, stovetop, sink, outside of appliances), making beds, and emptying trash. We focus on all main living areas, bedrooms, and bathrooms.'
      }
    }
  ]
}

export const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  '@id': 'https://santoscsolutions.com/#reviews',
  itemReviewed: {
    '@type': 'LocalBusiness',
    name: 'Santos Cleaning Solutions',
    '@id': 'https://santoscsolutions.com/#organization'
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1'
  },
  author: {
    '@type': 'Person',
    name: 'Satisfied Customers'
  },
  reviewBody: 'Santos Cleaning Solutions provides exceptional professional cleaning services in Marietta and Metro Atlanta. Their attention to detail, eco-friendly products, and reliable service has earned them 5-star ratings from hundreds of satisfied customers.'
}

export const serviceAreaSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://santoscsolutions.com/#service-areas',
  serviceType: 'House Cleaning Service',
  areaServed: [
    {
      '@type': 'City',
      name: 'Marietta',
      '@id': 'https://santoscsolutions.com/areas/marietta',
      containedInPlace: {
        '@type': 'State',
        name: 'Georgia',
        addressCountry: 'US'
      }
    },
    {
      '@type': 'City', 
      name: 'Buckhead',
      '@id': 'https://santoscsolutions.com/areas/buckhead',
      containedInPlace: {
        '@type': 'State',
        name: 'Georgia',
        addressCountry: 'US'
      }
    },
    {
      '@type': 'City',
      name: 'Alpharetta', 
      '@id': 'https://santoscsolutions.com/areas/alpharetta',
      containedInPlace: {
        '@type': 'State',
        name: 'Georgia',
        addressCountry: 'US'
      }
    },
    {
      '@type': 'City',
      name: 'Sandy Springs',
      '@id': 'https://santoscsolutions.com/areas/sandy-springs', 
      containedInPlace: {
        '@type': 'State',
        name: 'Georgia',
        addressCountry: 'US'
      }
    }
  ],
  provider: {
    '@type': 'LocalBusiness',
    name: 'Santos Cleaning Solutions',
    '@id': 'https://santoscsolutions.com/#organization'
  }
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://santoscsolutions.com/#website',
  url: 'https://santoscsolutions.com',
  name: 'Santos Cleaning Solutions',
  description: 'Professional house cleaning services in Marietta, GA and Metro Atlanta',
  publisher: {
    '@type': 'Organization',
    name: 'Santos Cleaning Solutions',
    '@id': 'https://santoscsolutions.com/#organization'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://santoscsolutions.com/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
}