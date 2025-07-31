'use client'

import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { faqSchema } from '../lib/enhanced-schema'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'What areas do you serve in Metro Atlanta?',
    answer: 'We provide professional cleaning services throughout Metro Atlanta including Marietta, Buckhead, Alpharetta, Sandy Springs, Dunwoody, Roswell, Johns Creek, Milton, Brookhaven, Smyrna, Vinings, and Druid Hills. We serve both residential and commercial clients in Cobb, Fulton, and Gwinnett counties.'
  },
  {
    question: 'Are you licensed and insured for cleaning services?',
    answer: 'Yes, Santos Cleaning Solutions is fully licensed and insured in Georgia. We carry comprehensive general liability insurance and are bonded for your complete protection. All our staff undergo background checks and are covered under our insurance policy.'
  },
  {
    question: 'What cleaning products do you use?',
    answer: 'We use eco-friendly, non-toxic cleaning products that are EPA-certified and safe for children, pets, and family members with allergies. Our green cleaning solutions are completely biodegradable and effective for deep cleaning without harmful chemicals.'
  },
  {
    question: 'How much do your cleaning services cost?',
    answer: 'Our cleaning service pricing varies based on home size, frequency of service, and specific cleaning needs. Regular cleaning starts at $120, deep cleaning starts at $250, and commercial cleaning has custom pricing. We offer free in-home estimates and competitive rates for all services.'
  },
  {
    question: 'Do I need to be home during the cleaning service?',
    answer: 'No, you don\'t need to be home during our cleaning service. Many clients provide us with a key or access code for convenience. All our staff are background-checked, bonded, and insured for your security and peace of mind.'
  },
  {
    question: 'What is included in your regular cleaning service?',
    answer: 'Our regular cleaning service includes vacuuming all carpets and rugs, mopping hard floors, dusting furniture and surfaces, cleaning bathrooms (toilets, sinks, showers, mirrors), kitchen cleaning (countertops, stovetop, sink, outside of appliances), making beds, and emptying trash. We focus on all main living areas, bedrooms, and bathrooms.'
  },
  {
    question: 'How far in advance should I book my cleaning service?',
    answer: 'We recommend booking at least 1-2 weeks in advance for regular cleaning services, especially during peak seasons. For deep cleaning or move-in/move-out services, we suggest booking 2-3 weeks ahead. However, we often can accommodate same-day or next-day requests depending on availability.'
  },
  {
    question: 'Do you offer satisfaction guarantees?',
    answer: 'Absolutely! We stand behind our work with a 100% satisfaction guarantee. If you\'re not completely happy with any aspect of our cleaning service, we\'ll return within 24 hours to re-clean any areas at no additional charge until you\'re completely satisfied.'
  }
]

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-20 bg-gray-50" id="faq">
      {/* Schema.org structured data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our professional cleaning services in Metro Atlanta
          </p>
        </div>

        <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                aria-expanded={openItems.includes(index)}
              >
                <h3 
                  className="text-lg font-semibold text-gray-900 pr-4"
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                    openItems.includes(index) ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {openItems.includes(index) && (
                <div 
                  className="px-6 pb-5"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div 
                    className="text-gray-600 leading-relaxed"
                    itemProp="text"
                  >
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our friendly team is here to help you with any questions about our cleaning services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18663509407"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us: (866) 350-9407
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection