import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Family-Owned Cleaning Company | Santos Cleaning',
  description: 'Learn about Santos Cleaning Solutions, a family-owned cleaning company in Marietta, GA. Our story, values, and commitment to excellence.',
}

export default function AboutPage() {
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
              <Link href="/areas" className="text-gray-700 hover:text-blue-600">
                Service Areas
              </Link>
              <Link href="/about" className="text-blue-600 font-semibold">
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
          <h1 className="text-5xl font-bold mb-6">About Santos Cleaning Solutions</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            More than a cleaning company, we're a family caring for your family.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Santos Cleaning Solutions LLC is a professional cleaning company based in Marietta, Georgia, 
              driven by faith, purpose, and dedication. We founded our business with a simple yet powerful mission: 
              to provide cleaning services that go beyond the basics—delivering care, excellence, and that 
              professional touch that transforms a house into a home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Family-Owned & Operated</h3>
              <p className="text-gray-600 mb-6">
                As a family-owned business, we understand the importance of trust, reliability, and personal service. 
                When you invite us into your home, you're not just hiring a cleaning service—you're welcoming 
                a team that treats your space with the same care and respect we would our own.
              </p>
              <p className="text-gray-600">
                Our commitment to excellence is reflected in every detail, from our thorough cleaning processes 
                to our friendly, professional staff who arrive on time and ready to exceed your expectations.
              </p>
            </div>
            <div className="bg-blue-100 h-64 rounded-lg flex items-center justify-center">
              <p className="text-blue-600 font-semibold">Family Photo Placeholder</p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-2xl">💙</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trust & Integrity</h3>
              <p className="text-gray-600">
                We build lasting relationships through honest communication, reliable service, and transparent pricing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every job, paying attention to details that make the difference.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-purple-600 text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                We're proud to serve our Marietta community and support local families and businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience the Santos Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the hundreds of satisfied families who trust Santos Cleaning Solutions.
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
                <Link href="/services" className="block text-gray-300 hover:text-white">
                  Services
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