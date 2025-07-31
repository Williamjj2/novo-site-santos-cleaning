import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cleaning Services in Alpharetta, GA | Santos Cleaning',
  description: 'Professional house cleaning services in Alpharetta, Georgia. Serving North Fulton, Milton, Johns Creek, and surrounding luxury communities.',
}

export default function AlpharettaPage() {
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
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Cleaning Services in Alpharetta, GA
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Premium cleaning services for luxury homes and modern communities in Alpharetta and North Fulton
            </p>
            <div className="bg-blue-800 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg">
                <strong>🏆 Luxury Focus:</strong> Specialized in high-end homes and executive communities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Alpharetta Families Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              Premium service standards for discerning homeowners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Luxury Home Specialists</h3>
              <p className="text-gray-600">
                We understand the unique needs of luxury homes, from custom finishes 
                to premium materials requiring specialized care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🕒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Early morning or evening appointments available to accommodate 
                busy executive schedules and family routines.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security Conscious</h3>
              <p className="text-gray-600">
                Background-checked team members, bonded and insured service, 
                with discretion and privacy as top priorities.
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
              Alpharetta Communities We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Professional cleaning services throughout Alpharetta's premier neighborhoods
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Downtown Alpharetta</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Avalon area</li>
                <li>• City Center</li>
                <li>• Main Street corridor</li>
                <li>• Alpharetta Commons</li>
                <li>• Academy Street</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury Communities</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Country Club of the South</li>
                <li>• St. Ives Country Club</li>
                <li>• Windward</li>
                <li>• The Manor Golf & Country Club</li>
                <li>• Atlanta Athletic Club</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">North Alpharetta</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Crabapple area</li>
                <li>• Milton border</li>
                <li>• Birmingham Highway</li>
                <li>• Haynes Bridge Road</li>
                <li>• Webb Bridge area</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience Premium Cleaning in Alpharetta
          </h2>
          <p className="text-xl mb-8">
            Join Alpharetta's most discerning homeowners who trust Santos Cleaning Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Estimate
            </Link>
            <Link
              href="tel:+18663509407"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Call (866) 350-9407
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 