import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'House Cleaning Services in Brookhaven, GA | Santos Cleaning',
  description: 'Professional house cleaning in Brookhaven, GA. Serving Town Brookhaven, Lynwood Park, Historic Brookhaven. Trusted service for 30319, 30324 residents.',
  keywords: 'Brookhaven house cleaning, maid service Brookhaven GA, cleaning services 30319, Town Brookhaven cleaners, Lynwood Park cleaning',
}

export default function BrookhavenPage() {
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
      <section className="bg-gradient-to-br from-teal-900 via-blue-900 to-cyan-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              House Cleaning Services in Brookhaven
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Professional cleaning for Brookhaven's diverse neighborhoods. From historic homes to modern condos, we serve with excellence.
            </p>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg">
                <strong>🏙️ Urban Excellence:</strong> Your Brookhaven cleaning experts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Brookhaven Chooses Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Perfect for Brookhaven's Urban Lifestyle
            </h2>
            <p className="text-xl text-gray-600">
              Serving professionals, families, and everyone in between
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🏙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Urban Living Experts</h3>
              <p className="text-gray-600">
                From Town Brookhaven condos to historic bungalows, we understand diverse urban homes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Early morning, evening, and weekend slots for busy Brookhaven professionals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Eco-Conscious</h3>
              <p className="text-gray-600">
                Green cleaning options for health-conscious Brookhaven residents and pet owners.
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
              Brookhaven Neighborhoods We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Complete coverage across all Brookhaven districts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Central Areas</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Town Brookhaven</li>
                <li>• Dresden Drive corridor</li>
                <li>• Brookhaven Village</li>
                <li>• Peachtree Road area</li>
                <li>• MARTA station vicinity</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Historic Districts</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Historic Brookhaven</li>
                <li>• Capital City Club area</li>
                <li>• Brookhaven Heights</li>
                <li>• Lynwood Park</li>
                <li>• Ashford Park</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Communities</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Brittany/Normandy</li>
                <li>• Brookhaven Fields</li>
                <li>• Drew Valley</li>
                <li>• Pine Hills</li>
                <li>• Buford Highway area</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-teal-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Brookhaven Overview
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-600">30319</div>
                <div className="text-gray-600">Primary ZIP</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">30324</div>
                <div className="text-gray-600">Secondary ZIP</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-600">2012</div>
                <div className="text-gray-600">City Founded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">55K+</div>
                <div className="text-gray-600">Residents</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brookhaven Lifestyle */}
      <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Brookhaven Loves Santos Cleaning
            </h2>
            <p className="text-xl text-gray-600">
              Matching Brookhaven's diverse and dynamic community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Brookhaven's Vibrant Character
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3">🏙️</span>
                  <div>
                    <strong>Urban Convenience:</strong> Walkable neighborhoods and MARTA access
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3">🏛️</span>
                  <div>
                    <strong>Historic Charm:</strong> 1950s homes mixed with modern development
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3">🌳</span>
                  <div>
                    <strong>Green Spaces:</strong> Murphey Candler Park and tree-lined streets
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3">🍽️</span>
                  <div>
                    <strong>Diverse Dining:</strong> Buford Highway international corridor
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Brookhaven Promise
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>All Home Types:</strong> Historic bungalows to modern townhomes
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>Professional Service:</strong> Trusted by busy urban professionals
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>Community Minded:</strong> Supporting local Brookhaven businesses
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>Reliable Teams:</strong> Consistent, trustworthy service
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Brookhaven by the Numbers
            </h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">$90K+</div>
                <div className="text-gray-600">Median Income</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">75%</div>
                <div className="text-gray-600">College Educated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-600 mb-2">Top 10</div>
                <div className="text-gray-600">Atlanta Suburb</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">Diverse</div>
                <div className="text-gray-600">Community</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Brookhaven Neighbors Recommend Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Maria L.</div>
                  <div className="text-sm text-gray-600">Town Brookhaven</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Perfect for my busy schedule! They clean my condo while I'm at work. Always professional and my place sparkles. Love supporting local business!"
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">John D.</div>
                  <div className="text-sm text-gray-600">Historic Brookhaven</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "They understand how to care for our 1950s home. Gentle with original features but thorough cleaning. Highly recommend for historic homes!"
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Amy C.</div>
                  <div className="text-sm text-gray-600">Lynwood Park</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Santos Cleaning has been amazing for our family. They use eco-friendly products, work around our schedule, and the team is always friendly!"
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-900 via-cyan-900 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Your Brookhaven Neighbors
          </h2>
          <p className="text-xl mb-8">
            Experience the cleaning service Brookhaven trusts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-teal-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Estimate
            </Link>
            <Link
              href="tel:+18663509407"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-900 transition-colors"
            >
              Call (866) 350-9407
            </Link>
          </div>
          <p className="mt-8 text-teal-100">
            Serving Brookhaven, GA 30319 & 30324 • Licensed & Insured • Local & Trusted
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
                Your Brookhaven cleaning experts. From historic homes to modern condos, we serve with excellence.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Brookhaven Service</h4>
              <p className="text-gray-300">Phone: (866) 350-9407</p>
              <p className="text-gray-300">Email: info@santoscsolutions.com</p>
              <p className="text-gray-300">Serving ZIP: 30319, 30324</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Brookhaven Areas</h4>
              <div className="space-y-2">
                <div className="text-gray-300">Town Brookhaven • Dresden</div>
                <div className="text-gray-300">Historic District • Lynwood Park</div>
                <div className="text-gray-300">Ashford Park • Drew Valley</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Santos Cleaning Solutions LLC. Proudly serving Brookhaven, GA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 