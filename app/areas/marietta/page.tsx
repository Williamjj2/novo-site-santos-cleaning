import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cleaning Services in Marietta, GA | Santos Cleaning',
  description: 'Professional house cleaning services in Marietta, Georgia. Local family-owned business serving East Cobb, West Cobb, Kennesaw, and surrounding areas.',
}

export default function MariettaPage() {
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
              Cleaning Services in Marietta, GA
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Your local family-owned cleaning company, proudly serving Marietta and Cobb County since day one
            </p>
            <div className="bg-blue-800 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg">
                <strong>🏠 Local Business:</strong> Based right here in Marietta, GA
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
              Why Marietta Families Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              Local knowledge, personal service, and deep community connections
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local Family Business</h3>
              <p className="text-gray-600">
                We live and work in this community. Your neighbors are our neighbors, 
                and your satisfaction is our reputation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Same-Day Response</h3>
              <p className="text-gray-600">
                Being local means we can respond quickly. Most estimates scheduled 
                within 24 hours, often same-day.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local Area Knowledge</h3>
              <p className="text-gray-600">
                We know the unique cleaning needs of homes in East Cobb, West Cobb, 
                and throughout Marietta.
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
              Neighborhoods We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Professional cleaning services throughout Marietta and surrounding areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">East Cobb</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Lassiter High School area</li>
                <li>• Pope High School area</li>
                <li>• Wheeler High School area</li>
                <li>• Paper Mill & Johnson Ferry</li>
                <li>• Sewell Mill & Shallowford</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">West Cobb</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Powder Springs</li>
                <li>• Hiram</li>
                <li>• Dallas Highway corridor</li>
                <li>• Macland Road area</li>
                <li>• Lost Mountain area</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Greater Marietta</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Downtown Marietta</li>
                <li>• Kennesaw</li>
                <li>• Acworth</li>
                <li>• Smyrna (parts)</li>
                <li>• Roswell (parts)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Marietta Residents Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Sarah M.</div>
                  <div className="text-sm text-gray-600">East Cobb Resident</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Santos Cleaning has been cleaning our home for over a year. They're reliable, 
                thorough, and treat our home like it's their own. Highly recommend!"
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Mike R.</div>
                  <div className="text-sm text-gray-600">West Cobb Resident</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Local business that actually cares! They've been cleaning our office 
                and home for months. Professional, punctual, and reasonably priced."
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Local Excellence?
          </h2>
          <p className="text-xl mb-8">
            Join hundreds of satisfied Marietta families who trust Santos Cleaning Solutions
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Santos Cleaning Solutions</h3>
              <p className="text-gray-300">
                Your local Marietta cleaning company. Family-owned and community-focused.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Marietta Office</h4>
              <p className="text-gray-300">Phone: (866) 350-9407</p>
              <p className="text-gray-300">Email: info@santoscsolutions.com</p>
              <p className="text-gray-300">Serving Marietta & Cobb County</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <div className="space-y-2">
                <div className="text-gray-300">East Cobb • West Cobb</div>
                <div className="text-gray-300">Kennesaw • Acworth</div>
                <div className="text-gray-300">Powder Springs • Smyrna</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Santos Cleaning Solutions LLC. Proudly serving Marietta, GA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 