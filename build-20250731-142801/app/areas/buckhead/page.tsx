import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cleaning Services in Buckhead, Atlanta | Santos Cleaning',
  description: 'Luxury house cleaning services in Buckhead, Atlanta. Serving upscale homes, penthouses, and executive residences with premium care.',
}

export default function BuckheadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Luxury Cleaning Services in Buckhead, Atlanta
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Premier cleaning services for Buckhead's most prestigious homes and high-rise residences
            </p>
            <div className="bg-blue-800 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg">
                <strong>🏙️ Buckhead Specialists:</strong> Luxury homes, penthouses, and executive residences
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Buckhead Residents Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              White-glove service for Atlanta's most prestigious neighborhood
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">High-Rise Expertise</h3>
              <p className="text-gray-600">
                Specialized in luxury condos, penthouses, and high-rise living spaces 
                with attention to premium finishes and materials.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Valet Parking Available</h3>
              <p className="text-gray-600">
                Coordinated service with building management and valet services 
                for seamless, discrete cleaning appointments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">👔</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Executive Service</h3>
              <p className="text-gray-600">
                Professional, discrete service tailored for busy executives 
                and high-profile residents requiring privacy and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Buckhead Areas We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Premium cleaning throughout Buckhead's luxury districts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury High-Rises</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• The Ritz-Carlton Residences</li>
                <li>• Park Place</li>
                <li>• The Sovereign</li>
                <li>• Mandarin Oriental</li>
                <li>• The St. Regis</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Historic Buckhead</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Buckhead Village</li>
                <li>• Peachtree Road</li>
                <li>• West Paces Ferry</li>
                <li>• Tuxedo Park</li>
                <li>• Garden Hills</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Executive Communities</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Cherokee Town Club</li>
                <li>• Capital City Club</li>
                <li>• Piedmont Driving Club area</li>
                <li>• Atlanta Country Club</li>
                <li>• Peachtree Heights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience Buckhead's Premier Cleaning Service
          </h2>
          <p className="text-xl mb-8">
            Join Atlanta's elite who trust Santos Cleaning Solutions for their luxury homes
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