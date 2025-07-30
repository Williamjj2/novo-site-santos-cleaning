import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Cleaning Services - House Cleaning, Deep Cleaning & More',
  description: 'Professional cleaning services in Marietta, GA. House cleaning, deep cleaning, move-in/out, post-construction, and commercial cleaning. Free estimates.',
}

const services = [
  {
    id: 'house-cleaning',
    title: 'House Cleaning',
    description: 'Regular house cleaning services to keep your home spotless and comfortable.',
    features: [
      'Kitchen cleaning and sanitizing',
      'Bathroom deep cleaning',
      'Dusting all surfaces',
      'Vacuuming and mopping',
      'Trash removal',
      'General organization'
    ],
    startingPrice: '$80',
    duration: '2-4 hours'
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning',
    description: 'Comprehensive deep cleaning for a thorough, top-to-bottom clean.',
    features: [
      'Detailed kitchen appliance cleaning',
      'Bathroom tile and grout scrubbing',
      'Baseboards and window sills',
      'Inside cabinets and drawers',
      'Light fixtures and ceiling fans',
      'Behind furniture cleaning'
    ],
    startingPrice: '$150',
    duration: '4-6 hours'
  },
  {
    id: 'move-in-out',
    title: 'Move-In/Move-Out Cleaning',
    description: 'Complete cleaning for moving transitions.',
    features: [
      'Empty house cleaning',
      'Cabinet cleaning inside/out',
      'Appliance deep cleaning',
      'Floor deep cleaning',
      'Wall washing',
      'Window cleaning'
    ],
    startingPrice: '$200',
    duration: '5-7 hours'
  },
  {
    id: 'post-construction',
    title: 'Post-Construction Cleaning',
    description: 'Specialized cleaning after construction or renovation work.',
    features: [
      'Dust and debris removal',
      'Paint splatter removal',
      'Window and glass cleaning',
      'Floor polishing',
      'Fixture cleaning',
      'Final walkthrough'
    ],
    startingPrice: '$250',
    duration: '6-8 hours'
  },
  {
    id: 'commercial-cleaning',
    title: 'Commercial Cleaning',
    description: 'Professional office and commercial space cleaning services.',
    features: [
      'Office space cleaning',
      'Restroom sanitization',
      'Break room cleaning',
      'Trash removal',
      'Floor maintenance',
      'Custom schedules available'
    ],
    startingPrice: 'Quote',
    duration: 'Varies'
  },
  {
    id: 'recurring-cleaning',
    title: 'Recurring Cleaning',
    description: 'Regular cleaning services on your schedule.',
    features: [
      'Weekly cleaning',
      'Bi-weekly cleaning',
      'Monthly cleaning',
      'Consistent quality',
      'Same team each visit',
      'Flexible scheduling'
    ],
    startingPrice: '$70',
    duration: '2-3 hours'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="text-2xl font-bold text-blue-900">
              Santos Cleaning Solutions
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/services" className="text-blue-600 font-semibold">
                Services
              </Link>
              <Link href="/areas" className="text-gray-700 hover:text-blue-600">
                Service Areas
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-900 font-semibold">
                (866) 350-9407
              </span>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Cleaning Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Professional cleaning solutions tailored to your needs in Marietta, Georgia
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Free Estimates
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              5-Star Rated
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Same-Day Response
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-semibold text-gray-500">STARTING FROM</span>
                    <span className="text-sm font-semibold text-gray-500">DURATION</span>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-bold text-blue-600">{service.startingPrice}</span>
                    <span className="text-gray-700">{service.duration}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-blue-600 font-semibold">
                        +{service.features.length - 4} more included
                      </li>
                    )}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  Book This Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get your free, no-obligation estimate today and see why families in Marietta choose Santos Cleaning Solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Free Estimate
            </Link>
            <Link
              href="tel:+18663509407"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Call (866) 350-9407
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Santos Cleaning Solutions</h3>
              <p className="text-gray-300">
                Family-owned professional cleaning services in Marietta, Georgia.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <p className="text-gray-300">Phone: (866) 350-9407</p>
              <p className="text-gray-300">Email: info@santoscsolutions.com</p>
              <p className="text-gray-300">Marietta, GA</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-300 hover:text-white">
                  Home
                </Link>
                <Link href="/about" className="block text-gray-300 hover:text-white">
                  About
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Santos Cleaning Solutions LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 