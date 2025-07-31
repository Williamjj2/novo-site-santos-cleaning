'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { COMPANY_INFO } from '../lib/constants'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero section (800px)
      setIsVisible(window.scrollY > 800)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${isMinimized ? 'translate-y-16' : 'translate-y-0'}`}>
      {/* Main CTA Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left Side - Message */}
            <div className="flex-1">
              <div className="flex items-center">
                <div className="hidden sm:block mr-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Ready for a Spotless Home?</h3>
                  <p className="text-blue-100 text-sm">Get your free estimate today • Licensed & Insured • Same-day response</p>
                </div>
              </div>
            </div>

            {/* Right Side - CTAs */}
            <div className="flex items-center space-x-3 ml-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="hidden sm:inline">Free Estimate</span>
                <span className="sm:hidden">Estimate</span>
              </Link>
              
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hidden sm:inline">Call Now</span>
                <span className="sm:hidden">Call</span>
              </a>

              {/* Minimize Button */}
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                aria-label={isMinimized ? 'Expand CTA' : 'Minimize CTA'}
              >
                <svg 
                  className={`w-5 h-5 transition-transform ${isMinimized ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Minimized Tab */}
      {isMinimized && (
        <div 
          className="bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-colors"
          onClick={() => setIsMinimized(false)}
        >
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex items-center justify-center">
              <span className="font-semibold text-sm">Free Cleaning Estimate</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
