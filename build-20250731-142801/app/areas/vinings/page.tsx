import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'House Cleaning Services in Vinings, GA | Santos Cleaning',
  description: 'Premium house cleaning in Vinings, GA. Serving luxury condos, townhomes, and estates near the Chattahoochee. Trusted by Vinings\' upscale community since day one.',
  keywords: 'Vinings house cleaning, maid service Vinings GA, cleaning services 30339, Paces Ferry cleaning, Vinings luxury cleaning',
}

export default function ViningsPage() {
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
              <Link href="/services" className="text-gray-700 hover:text-blue-600">
                Services
              </Link>
              <Link href="/areas" className="text-blue-600 font-semibold">
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
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Premium Cleaning Services in Vinings
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Exceptional house cleaning for Vinings' riverside luxury homes, upscale condos, and historic estates. Where quality meets convenience.
            </p>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg">
                <strong>🌊 Riverside Excellence:</strong> Serving Vinings' premier communities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vinings Chooses Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tailored for Vinings' Unique Lifestyle
            </h2>
            <p className="text-xl text-gray-600">
              Understanding the needs of riverside luxury living
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Luxury Condo Specialists</h3>
              <p className="text-gray-600">
                Expert cleaning for high-rise condos, penthouses, and luxury apartments with concierge coordination.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Estate & Villa Care</h3>
              <p className="text-gray-600">
                Comprehensive cleaning for Vinings' spacious estates, custom homes, and riverside properties.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Executive Standards</h3>
              <p className="text-gray-600">
                Discreet, professional service meeting the high standards of Vinings' business leaders and professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Served */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Vinings Communities We Serve
            </h2>
            <p className="text-xl text-gray-600">
              From riverside condos to hilltop estates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury Condos</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• The Palisades at West Paces</li>
                <li>• Vinings on the River</li>
                <li>• Park Vinings</li>
                <li>• The Sterling</li>
                <li>• Riverhouse Condominiums</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Neighborhoods</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Paces Ferry</li>
                <li>• Vinings Estates</li>
                <li>• Vinings Historic District</li>
                <li>• Mt. Wilkinson</li>
                <li>• Stillhouse Creek</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nearby Areas</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Cumberland</li>
                <li>• Smyrna (Vinings area)</li>
                <li>• West Paces Ferry</li>
                <li>• Chattahoochee River area</li>
                <li>• Atlanta Country Club vicinity</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-green-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Vinings at a Glance
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600">30339</div>
                <div className="text-gray-600">Primary ZIP</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">I-285</div>
                <div className="text-gray-600">Easy Access</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">River</div>
                <div className="text-gray-600">Chattahoochee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">Historic</div>
                <div className="text-gray-600">Since 1830s</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vinings Lifestyle */}
      <section className="bg-gradient-to-br from-gray-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Serving Vinings' Distinctive Community
            </h2>
            <p className="text-xl text-gray-600">
              Where historic charm meets modern luxury
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What Makes Vinings Special
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <div>
                    <strong>Riverside Location:</strong> Beautiful Chattahoochee River views and trails
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <div>
                    <strong>Historic Charm:</strong> Civil War history with modern amenities
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <div>
                    <strong>Upscale Shopping:</strong> Vinings Jubilee and nearby retail
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <div>
                    <strong>Prime Location:</strong> Minutes from Buckhead and Downtown
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Vinings Service Promise
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>Flexible Scheduling:</strong> Work around your busy professional life
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>Concierge Coordination:</strong> Work with building management seamlessly
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>Premium Products:</strong> Eco-friendly options for riverside living
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>Trusted Teams:</strong> Same cleaners for consistency
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Vinings Residents Love Our Service
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  C
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Catherine P.</div>
                  <div className="text-sm text-gray-600">Paces Ferry</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Santos Cleaning has been wonderful for our riverside condo. They're always on time, thorough, and the communication is excellent. Highly recommend!"
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">James T.</div>
                  <div className="text-sm text-gray-600">Vinings Estates</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Professional service that understands luxury homes. They handle our estate with care and attention to detail. Best cleaning service in Vinings!"
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Stephanie M.</div>
                  <div className="text-sm text-gray-600">Park Vinings</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Love Santos Cleaning! They work great with our building's concierge and always leave our condo spotless. Trustworthy and reliable service."
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-900 via-teal-900 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience Vinings' Premier Cleaning Service
          </h2>
          <p className="text-xl mb-8">
            Join your neighbors who trust Santos Cleaning for their homes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Estimate
            </Link>
            <Link
              href="tel:+18663509407"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-900 transition-colors"
            >
              Call (866) 350-9407
            </Link>
          </div>
          <p className="mt-8 text-green-100">
            Serving Vinings, GA 30339 • Licensed & Insured • Satisfaction Guaranteed
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Santos Cleaning Solutions</h3>
              <p className="text-gray-300">
                Premium cleaning services for Vinings' riverside luxury community. Excellence in every detail.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Vinings Service Area</h4>
              <p className="text-gray-300">Phone: (866) 350-9407</p>
              <p className="text-gray-300">Email: info@santoscsolutions.com</p>
              <p className="text-gray-300">Serving ZIP: 30339</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Vinings Communities</h4>
              <div className="space-y-2">
                <div className="text-gray-300">Paces Ferry • Vinings Estates</div>
                <div className="text-gray-300">Park Vinings • The Palisades</div>
                <div className="text-gray-300">Historic District • Riverside</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Santos Cleaning Solutions LLC. Proudly serving Vinings, GA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 