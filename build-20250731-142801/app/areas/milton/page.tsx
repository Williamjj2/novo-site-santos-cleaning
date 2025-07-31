import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'House Cleaning Services in Milton, GA | Santos Cleaning',
  description: 'Premium house cleaning in Milton, GA. Serving equestrian estates, luxury homes in 30004. Professional service for Milton\'s distinguished community.',
  keywords: 'Milton house cleaning, maid service Milton GA, cleaning services 30004, estate cleaning Milton, equestrian property cleaning',
}

export default function MiltonPage() {
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
      <section className="bg-gradient-to-br from-emerald-900 via-blue-900 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Estate Cleaning Services in Milton
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Exceptional cleaning for Milton's equestrian estates and luxury homes. Where rural elegance meets professional excellence.
            </p>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg">
                <strong>🐴 Estate Excellence:</strong> Specialized in large properties and horse farms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Milton Chooses Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tailored for Milton's Unique Properties
            </h2>
            <p className="text-xl text-gray-600">
              Understanding the needs of estate living and equestrian properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🏰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Estate Specialists</h3>
              <p className="text-gray-600">
                Expert cleaning for large estates, guest houses, and multi-building properties common in Milton.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🐴</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Equestrian Properties</h3>
              <p className="text-gray-600">
                Understanding the unique needs of horse farms, including mudroom care and specialized cleaning requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Luxury Standards</h3>
              <p className="text-gray-600">
                White-glove service matching Milton's exceptional lifestyle and high-end home features.
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
              Milton Communities We Serve
            </h2>
            <p className="text-xl text-gray-600">
              From equestrian estates to luxury subdivisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Equestrian Communities</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• White Columns</li>
                <li>• Crooked Creek</li>
                <li>• Triple Crown</li>
                <li>• The Manor</li>
                <li>• Birmingham area</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury Subdivisions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Crabapple</li>
                <li>• Cambridge High area</li>
                <li>• Champions Club</li>
                <li>• Seven Norcross</li>
                <li>• Bethany Bend</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rural Estates</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Freemanville Road</li>
                <li>• Birmingham Highway</li>
                <li>• Hopewell Road</li>
                <li>• Wood Road estates</li>
                <li>• Providence Road area</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-emerald-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Milton at a Glance
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600">30004</div>
                <div className="text-gray-600">ZIP Code</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">2006</div>
                <div className="text-gray-600">Incorporated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">$130K+</div>
                <div className="text-gray-600">Median Income</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">Rural</div>
                <div className="text-gray-600">Character</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milton Excellence */}
      <section className="bg-gradient-to-br from-gray-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Milton Difference
            </h2>
            <p className="text-xl text-gray-600">
              Why estate owners trust Santos Cleaning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Milton's Unique Character
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3">🐴</span>
                  <div>
                    <strong>Horse Country:</strong> Extensive equestrian facilities and farms
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3">🌳</span>
                  <div>
                    <strong>Rural Beauty:</strong> Large lots with natural preservation
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3">🏰</span>
                  <div>
                    <strong>Estate Living:</strong> Multi-acre properties with guest houses
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3">🎓</span>
                  <div>
                    <strong>Top Schools:</strong> Cambridge High School district
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Estate Service Features
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>Large Property Experience:</strong> Efficient for 5,000+ sq ft homes
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>Multiple Buildings:</strong> Main house, guest house, pool house
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>Mudroom Expertise:</strong> Special care for equestrian entrances
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>Privacy Assured:</strong> Discreet service for estate owners
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Estate Cleaning Expertise
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-3">🏰</div>
                <div className="font-semibold text-gray-900">Multi-Level Estates</div>
                <div className="text-gray-600 text-sm mt-1">Efficient team coordination</div>
              </div>
              <div>
                <div className="text-4xl mb-3">🌿</div>
                <div className="font-semibold text-gray-900">Natural Materials</div>
                <div className="text-gray-600 text-sm mt-1">Stone, wood, specialty surfaces</div>
              </div>
              <div>
                <div className="text-4xl mb-3">🔒</div>
                <div className="font-semibold text-gray-900">Security Conscious</div>
                <div className="text-gray-600 text-sm mt-1">Trusted by gated communities</div>
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
              Milton Estate Owners Trust Santos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Susan R.</div>
                  <div className="text-sm text-gray-600">White Columns</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Santos handles our 7,000 sq ft home beautifully. They understand estate cleaning - from our wine cellar to the horse barn entrance. Exceptional!"
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Richard M.</div>
                  <div className="text-sm text-gray-600">Crooked Creek</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Professional, discreet, and thorough. They manage our main house and guest house perfectly. The team is trustworthy and efficient."
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  L
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Linda K.</div>
                  <div className="text-sm text-gray-600">Triple Crown</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "As equestrian property owners, we appreciate their attention to our specific needs. Mudrooms are always spotless. Highly recommend!"
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-900 via-green-900 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience Estate-Level Cleaning
          </h2>
          <p className="text-xl mb-8">
            Join Milton's distinguished property owners who trust Santos Cleaning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-emerald-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Estate Consultation
            </Link>
            <Link
              href="tel:+18663509407"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-900 transition-colors"
            >
              Call (866) 350-9407
            </Link>
          </div>
          <p className="mt-8 text-emerald-100">
            Serving Milton, GA 30004 • Licensed & Insured • Estate Specialists
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
                Estate cleaning specialists for Milton's equestrian properties and luxury homes. Excellence in every detail.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Milton Service Area</h4>
              <p className="text-gray-300">Phone: (866) 350-9407</p>
              <p className="text-gray-300">Email: info@santoscsolutions.com</p>
              <p className="text-gray-300">Serving ZIP: 30004</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Milton Communities</h4>
              <div className="space-y-2">
                <div className="text-gray-300">White Columns • Crooked Creek</div>
                <div className="text-gray-300">Triple Crown • The Manor</div>
                <div className="text-gray-300">Crabapple • Birmingham</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Santos Cleaning Solutions LLC. Proudly serving Milton's estates.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 