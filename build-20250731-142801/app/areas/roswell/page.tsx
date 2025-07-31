import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'House Cleaning Services in Roswell, GA | Santos Cleaning',
  description: 'Premium house cleaning in historic Roswell, GA. Serving Canton Street, East Roswell, Horseshoe Bend areas. Professional service for 30075, 30076 residents.',
  keywords: 'Roswell house cleaning, maid service Roswell GA, cleaning services 30075, Canton Street cleaners, East Roswell cleaning',
}

export default function RoswellPage() {
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
      <section className="bg-gradient-to-br from-red-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              House Cleaning Services in Historic Roswell
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Professional cleaning for Roswell's historic homes, modern estates, and vibrant neighborhoods. Where tradition meets excellence.
            </p>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg">
                <strong>🏛️ Historic Charm:</strong> Serving Roswell's unique character since day one
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Roswell Chooses Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tailored for Roswell's Diverse Homes
            </h2>
            <p className="text-xl text-gray-600">
              From historic mansions to modern family homes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Historic Home Specialists</h3>
              <p className="text-gray-600">
                Expert care for Roswell's historic properties, antebellum homes, and heritage estates with delicate features.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Modern Family Homes</h3>
              <p className="text-gray-600">
                Efficient cleaning for busy Roswell families in newer subdivisions and contemporary neighborhoods.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🌳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Riverside Properties</h3>
              <p className="text-gray-600">
                Specialized service for homes along the Chattahoochee, dealing with Georgia humidity and riverside conditions.
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
              Roswell Neighborhoods We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Complete coverage across historic and modern Roswell
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Historic District</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Canton Street area</li>
                <li>• Historic Roswell Square</li>
                <li>• Bulloch Hall vicinity</li>
                <li>• Barrington Hall area</li>
                <li>• Roswell Mill district</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">East Roswell</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Horseshoe Bend</li>
                <li>• River Club</li>
                <li>• Willow Springs</li>
                <li>• Martin's Landing</li>
                <li>• East Roswell Park area</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">West Roswell</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Mountain Park</li>
                <li>• Roswell Country Club</li>
                <li>• Wexford</li>
                <li>• Coleman Road area</li>
                <li>• Riverside neighborhoods</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-red-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Roswell Service Coverage
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600">30075</div>
                <div className="text-gray-600">Central Roswell</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">30076</div>
                <div className="text-gray-600">East Roswell</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">Historic</div>
                <div className="text-gray-600">Since 1830s</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">90K+</div>
                <div className="text-gray-600">Residents</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roswell Excellence */}
      <section className="bg-gradient-to-br from-gray-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Roswell Advantage
            </h2>
            <p className="text-xl text-gray-600">
              Understanding what makes Roswell special
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Roswell's Unique Character
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3">🏛️</span>
                  <div>
                    <strong>Historic Preservation:</strong> Antebellum homes and Civil War sites
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3">🎨</span>
                  <div>
                    <strong>Arts & Culture:</strong> Vibrant Canton Street and cultural scene
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3">🌳</span>
                  <div>
                    <strong>Natural Beauty:</strong> Chattahoochee River and extensive parks
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3">👨‍👩‍👧‍👦</span>
                  <div>
                    <strong>Family-Friendly:</strong> Top schools and safe neighborhoods
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Roswell Expertise
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>Historic Care:</strong> Gentle methods for antique features
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>Modern Efficiency:</strong> Quick service for busy professionals
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>Local Knowledge:</strong> Understanding Roswell's diverse homes
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>Community Trust:</strong> Neighbors recommend us
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Roswell by the Numbers
            </h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">$95K+</div>
                <div className="text-gray-600">Median Income</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">1839</div>
                <div className="text-gray-600">City Founded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">Top 20</div>
                <div className="text-gray-600">Places to Live in GA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">A+</div>
                <div className="text-gray-600">School Rating</div>
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
              Roswell Residents Trust Santos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  L
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Laura B.</div>
                  <div className="text-sm text-gray-600">Historic District</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "They understand how to care for our 1920s home. Gentle with antique fixtures but thorough in their cleaning. Absolutely wonderful service!"
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  D
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">David K.</div>
                  <div className="text-sm text-gray-600">East Roswell</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Santos Cleaning has been fantastic for our busy family. They're flexible, reliable, and our home always looks amazing. Great local business!"
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Ashley T.</div>
                  <div className="text-sm text-gray-600">Horseshoe Bend</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Professional, punctual, and thorough. They handle our riverside home beautifully, even dealing with the extra dust and pollen. Highly recommend!"
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience Roswell's Trusted Cleaning Service
          </h2>
          <p className="text-xl mb-8">
            Join your Roswell neighbors who rely on Santos Cleaning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Estimate
            </Link>
            <Link
              href="tel:+18663509407"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-900 transition-colors"
            >
              Call (866) 350-9407
            </Link>
          </div>
          <p className="mt-8 text-red-100">
            Serving Historic Roswell • Licensed & Insured • Family-Owned
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
                Professional cleaning for historic Roswell. From antebellum estates to modern homes, we serve with excellence.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Roswell Service Area</h4>
              <p className="text-gray-300">Phone: (866) 350-9407</p>
              <p className="text-gray-300">Email: info@santoscsolutions.com</p>
              <p className="text-gray-300">Serving ZIP: 30075, 30076</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Roswell Communities</h4>
              <div className="space-y-2">
                <div className="text-gray-300">Historic District • Canton Street</div>
                <div className="text-gray-300">East Roswell • Horseshoe Bend</div>
                <div className="text-gray-300">Mountain Park • River Club</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Santos Cleaning Solutions LLC. Proudly serving historic Roswell, GA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 