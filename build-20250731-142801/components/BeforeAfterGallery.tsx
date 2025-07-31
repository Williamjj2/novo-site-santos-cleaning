'use client'

import { useState } from 'react'
import Image from 'next/image'
import { GALLERY_IMAGES, getOptimizedImageProps } from '../lib/images'

export default function BeforeAfterGallery() {
  const [activeTab, setActiveTab] = useState<'kitchen' | 'bathroom' | 'livingroom'>('kitchen')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const tabs = [
    { id: 'kitchen' as const, label: 'Kitchen', icon: '🍽️' },
    { id: 'bathroom' as const, label: 'Bathroom', icon: '��' },
    { id: 'livingroom' as const, label: 'Living Room', icon: '🛋️' }
  ]

  const currentGallery = GALLERY_IMAGES[activeTab]
  const currentImage = currentGallery[currentImageIndex]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
            See the Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Our professional cleaning transforms your space. See real before and after photos from our satisfied customers in Marietta, GA.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  setCurrentImageIndex(0)
                }}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Before Image */}
            <div className="relative">
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                Before
              </div>
              <div className="bg-gray-200 rounded-xl overflow-hidden aspect-[4/3] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-medium">Before Photo</p>
                    <p className="text-sm">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} cleaning needed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* After Image */}
            <div className="relative">
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                After
              </div>
              <div className="bg-gray-200 rounded-xl overflow-hidden aspect-[4/3] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p className="font-medium">After Photo</p>
                    <p className="text-sm">Professionally cleaned and sanitized</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Navigation */}
          {currentGallery.length > 1 && (
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
                disabled={currentImageIndex === 0}
                className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {currentGallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setCurrentImageIndex(Math.min(currentGallery.length - 1, currentImageIndex + 1))}
                disabled={currentImageIndex === currentGallery.length - 1}
                className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}

          {/* Description */}
          <div className="text-center mt-8 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Deep Cleaning Results
            </h3>
            <p className="text-gray-600">
              {activeTab === 'kitchen' && 'Professional kitchen deep cleaning including appliances, cabinets, countertops, and floors. All surfaces sanitized and grease removed.'}
              {activeTab === 'bathroom' && 'Complete bathroom sanitization with tile and grout cleaning, fixture polishing, and mold/mildew removal.'}
              {activeTab === 'livingroom' && 'Thorough living room cleaning including furniture, baseboards, light fixtures, and carpet deep cleaning.'}
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the same amazing results in your home. Our professional cleaning team is ready to make your space shine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Get Free Estimate
            </a>
            <a
              href="tel:+18663509407"
              className="btn-secondary inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (866) 350-9407
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
