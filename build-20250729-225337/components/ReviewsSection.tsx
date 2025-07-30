'use client'

import { useState, useEffect } from 'react'

interface Review {
  id: string
  name: string
  location: string
  service: string
  rating: number
  review: string
  date: string
  verified: boolean
  avatar?: string
}

const SAMPLE_REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'East Marietta, GA',
    service: 'Deep Cleaning',
    rating: 5,
    review: 'Santos Cleaning Solutions exceeded all my expectations! They transformed my home from top to bottom. The team was professional, thorough, and paid attention to every detail. My kitchen and bathrooms have never looked better. I will definitely be using them for regular cleaning.',
    date: '2024-01-15',
    verified: true
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'Kennesaw, GA',
    service: 'Regular Cleaning',
    rating: 5,
    review: 'I have been using Santos Cleaning for 6 months now and they are amazing! Always on time, consistent quality, and they treat my home with such care. The bi-weekly service keeps my house spotless and gives me more time with my family. Highly recommended!',
    date: '2024-01-10',
    verified: true
  },
  {
    id: '3',
    name: 'Jennifer Martinez',
    location: 'Roswell, GA',
    service: 'Move-out Cleaning',
    rating: 5,
    review: 'Outstanding service for our move-out cleaning! Santos Cleaning helped us get our full security deposit back. They cleaned areas we never even thought of and left the place spotless. The pricing was fair and the team was incredibly professional.',
    date: '2024-01-08',
    verified: true
  },
  {
    id: '4',
    name: 'David Wilson',
    location: 'Alpharetta, GA',
    service: 'Deep Cleaning',
    rating: 5,
    review: 'After construction work in our home, Santos Cleaning made it livable again! They removed all the dust, cleaned the windows, and even organized our belongings. The attention to detail was impressive. Worth every penny!',
    date: '2024-01-05',
    verified: true
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    location: 'Sandy Springs, GA',
    service: 'Regular Cleaning',
    rating: 5,
    review: 'Family-owned business that really cares! They remember my preferences and always do an excellent job. The team is trustworthy, reliable, and goes above and beyond. I feel comfortable leaving them in my home while I\'m at work.',
    date: '2024-01-03',
    verified: true
  },
  {
    id: '6',
    name: 'Robert Garcia',
    location: 'Buckhead, GA',
    service: 'Commercial Cleaning',
    rating: 5,
    review: 'Santos Cleaning handles our office cleaning and they are fantastic! Professional, discrete, and thorough. Our workplace always looks and smells fresh. They work around our schedule and never disrupt our business operations.',
    date: '2024-01-01',
    verified: true
  }
]

export default function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance reviews
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentReview(prev => (prev + 1) % SAMPLE_REVIEWS.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentReview(prev => (prev - 1 + SAMPLE_REVIEWS.length) % SAMPLE_REVIEWS.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentReview(prev => (prev + 1) % SAMPLE_REVIEWS.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  const review = SAMPLE_REVIEWS[currentReview]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Real reviews from satisfied customers across Marietta, GA and surrounding areas. 
            See why families trust Santos Cleaning Solutions for their home cleaning needs.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Review Stats */}
        <div className="flex justify-center items-center mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {renderStars(5)}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600 mb-4">Based on 285+ Google reviews</div>
              <div className="flex items-center justify-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                All reviews verified
              </div>
            </div>
          </div>
        </div>

        {/* Main Review Display */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
              aria-label="Previous review"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
              aria-label="Next review"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Review Content */}
            <div className="text-center">
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                &ldquo;{review.review}&rdquo;
              </blockquote>

              {/* Reviewer Info */}
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-600">{review.location}</div>
                  <div className="text-sm text-blue-600">{review.service}</div>
                </div>
                {review.verified && (
                  <div className="ml-4 flex items-center text-green-600 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Review Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {SAMPLE_REVIEWS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentReview(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentReview ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          {/* Google Reviews CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">See All Our Reviews</h3>
              <p className="mb-6 opacity-90">
                Read more authentic reviews from our satisfied customers on Google
              </p>
              <a
                href="https://g.page/r/CZH15hJ3JaKOEAI/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                View Google Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
