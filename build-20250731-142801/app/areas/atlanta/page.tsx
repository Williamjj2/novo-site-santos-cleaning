import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cleaning Services in Atlanta, GA | Santos Cleaning',
  description: 'Professional house cleaning services throughout Atlanta, Georgia. Serving Metro Atlanta homes and businesses with reliable, quality service.',
}

export default function AtlantaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Cleaning Services in Atlanta, GA
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Comprehensive cleaning services throughout Metro Atlanta and surrounding communities
            </p>
            <div className="bg-blue-800 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg">
                <strong>🌆 Metro Coverage:</strong> Serving Greater Atlanta with reliable, professional service
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Atlanta Chooses Santos Cleaning
            </h2>
            <p className="text-xl text-gray-600">
              Trusted throughout Metro Atlanta for consistent, quality cleaning services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🗺️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Metro-Wide Coverage</h3>
              <p className="text-gray-600">
                Comprehensive service throughout Atlanta metro area, from downtown 
                to suburban communities and everything in between.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🚌</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Traffic-Smart Scheduling</h3>
              <p className="text-gray-600">
                We understand Atlanta traffic patterns and schedule our services 
                to ensure reliable, on-time arrival at your location.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Residential & Commercial</h3>
              <p className="text-gray-600">
                Full-service cleaning for homes, apartments, condos, offices, 
                and commercial spaces throughout the Atlanta area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Atlanta Areas We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Professional cleaning services throughout Greater Atlanta
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">North Atlanta</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Buckhead</li>
                <li>• Sandy Springs</li>
                <li>• Dunwoody</li>
                <li>• Alpharetta</li>
                <li>• Roswell</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Central Atlanta</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Midtown</li>
                <li>• Downtown</li>
                <li>• Virginia-Highland</li>
                <li>• Little Five Points</li>
                <li>• Inman Park</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Metro Atlanta</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Marietta</li>
                <li>• Smyrna</li>
                <li>• Decatur</li>
                <li>• Brookhaven</li>
                <li>• Chamblee</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Atlanta's Best Cleaning Service?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied Atlanta area customers who trust Santos Cleaning Solutions
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