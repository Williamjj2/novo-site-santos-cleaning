import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'House Cleaning Services in Smyrna, GA | Santos Cleaning',
  description: 'Professional house cleaning in Smyrna, GA. Serving Market Village, West Village, Vinings area. Trusted by families and professionals in 30080, 30082.',
  keywords: 'Smyrna house cleaning, maid service Smyrna GA, cleaning services 30080, Market Village cleaners, West Village cleaning',
}

export default function SmyrnaPage() {
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
      <section className="bg-gradient-to-br from-orange-900 via-blue-900 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              House Cleaning Services in Smyrna
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Reliable cleaning for Smyrna's growing community. From Market Village to established neighborhoods, we serve with excellence.
            </p>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg">
                <strong>🏘️ Community Pride:</strong> Your neighbors trust Santos Cleaning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Smyrna Chooses Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Perfect for Smyrna's Dynamic Community
            </h2>
            <p className="text-xl text-gray-600">
              Serving young professionals, growing families, and established residents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🏘️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Focused</h3>
              <p className="text-gray-600">
                Understanding Smyrna's diverse neighborhoods from new developments to established communities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">👨‍👩‍👧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Family-Friendly</h3>
              <p className="text-gray-600">
                Safe cleaning products and flexible scheduling for Smyrna's many young families and professionals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Great Value</h3>
              <p className="text-gray-600">
                Quality service at fair prices that fit Smyrna's diverse budget needs. No hidden fees.
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
              Smyrna Neighborhoods We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Complete coverage across all of Smyrna
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Downtown Areas</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Market Village</li>
                <li>• West Village</li>
                <li>• Downtown Smyrna</li>
                <li>• Jonquil area</li>
                <li>• Spring Road corridor</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Neighborhoods</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Belmont Hills</li>
                <li>• Vinings North</li>
                <li>• Woodland Brook</li>
                <li>• Oakdale</li>
                <li>• Campbell area</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Communities</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• The Battery area</li>
                <li>• Cumberland vicinity</li>
                <li>• Windy Hill corridor</li>
                <li>• Atlanta Road areas</li>
                <li>• South Cobb Drive</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-orange-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Smyrna at a Glance
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-600">30080</div>
                <div className="text-gray-600">Primary ZIP</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">30082</div>
                <div className="text-gray-600">Secondary ZIP</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">56K+</div>
                <div className="text-gray-600">Population</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">Growing</div>
                <div className="text-gray-600">Community</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smyrna Lifestyle */}
      <section className="bg-gradient-to-br from-gray-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Smyrna Residents Love Our Service
            </h2>
            <p className="text-xl text-gray-600">
              Matching Smyrna's energy and growth with reliable service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Smyrna's Vibrant Community
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3">🏘️</span>
                  <div>
                    <strong>Mixed Housing:</strong> Condos, townhomes, single-family homes
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3">🚶</span>
                  <div>
                    <strong>Walkable:</strong> Market Village and West Village districts
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3">⚾</span>
                  <div>
                    <strong>The Battery:</strong> Entertainment and dining destination
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3">🌳</span>
                  <div>
                    <strong>Green Spaces:</strong> Silver Comet Trail and parks
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Smyrna Service Standards
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>Flexible Scheduling:</strong> Work with your busy lifestyle
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>All Home Types:</strong> Condos to large family homes
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>Eco-Friendly Options:</strong> For health-conscious families
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>Local Team:</strong> We know and love Smyrna
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-orange-100 rounded-full px-6 py-3">
              <span className="text-orange-800 font-semibold">
                🏡 Proudly serving Smyrna's diverse and growing community
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Smyrna Neighbors Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                  T
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Taylor M.</div>
                  <div className="text-sm text-gray-600">Market Village</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Perfect for my busy schedule! They clean my condo while I'm at work. Always reliable and my place looks amazing. Great value too!"
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Rachel K.</div>
                  <div className="text-sm text-gray-600">Belmont Hills</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Santos Cleaning has been wonderful for our family home. They use safe products around our kids and pets. Trustworthy and thorough!"
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Jason P.</div>
                  <div className="text-sm text-gray-600">West Village</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Great local business! They're always on time, do excellent work, and the price is fair. My townhome has never been cleaner!"
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-900 via-red-900 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Your Smyrna Neighbors
          </h2>
          <p className="text-xl mb-8">
            Experience the cleaning service your community trusts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Estimate
            </Link>
            <Link
              href="tel:+18663509407"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-900 transition-colors"
            >
              Call (866) 350-9407
            </Link>
          </div>
          <p className="mt-8 text-orange-100">
            Serving Smyrna, GA 30080 & 30082 • Licensed & Insured • Your Neighbors Trust Us
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
                Your local Smyrna cleaning service. Reliable, affordable, and trusted by your neighbors.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Smyrna Service Area</h4>
              <p className="text-gray-300">Phone: (866) 350-9407</p>
              <p className="text-gray-300">Email: info@santoscsolutions.com</p>
              <p className="text-gray-300">Serving ZIP: 30080, 30082</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Smyrna Areas</h4>
              <div className="space-y-2">
                <div className="text-gray-300">Market Village • West Village</div>
                <div className="text-gray-300">Belmont Hills • Vinings North</div>
                <div className="text-gray-300">Downtown • The Battery area</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Santos Cleaning Solutions LLC. Proudly serving Smyrna, GA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 