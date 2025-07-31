import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luxury House Cleaning Services in Druid Hills, GA | Santos Cleaning',
  description: 'Elite house cleaning services in Druid Hills, Atlanta\'s most prestigious neighborhood. Serving historic estates, luxury homes in ZIP 30307, 30333. White-glove service.',
  keywords: 'Druid Hills house cleaning, luxury maid service Atlanta, estate cleaning 30307, Emory area cleaners, historic home cleaning Atlanta',
}

export default function DruidHillsPage() {
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
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Luxury House Cleaning in Druid Hills
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              White-glove cleaning services for Atlanta's most prestigious neighborhood. Expertise in historic estates and luxury residences.
            </p>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg">
                <strong>🏛️ Historic Excellence:</strong> Serving Druid Hills since our founding
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Service Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tailored for Druid Hills' Exceptional Homes
            </h2>
            <p className="text-xl text-gray-600">
              Understanding the unique requirements of Atlanta's most distinguished properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-6" style={{backgroundColor: '#FEF3C7'}}>
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Historic Estate Expertise</h3>
              <p className="text-gray-600">
                Specialized care for period architecture, antique fixtures, and delicate surfaces found in Druid Hills' historic homes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Luxury Material Care</h3>
              <p className="text-gray-600">
                Expert handling of marble, granite, hardwood, crystal chandeliers, and fine art pieces common in Druid Hills estates.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Discreet & Professional</h3>
              <p className="text-gray-600">
                Vetted staff who understand privacy expectations. Trusted by executives, professors, and Atlanta's elite families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods & Architecture */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Druid Hills Areas We Serve
            </h2>
            <p className="text-xl text-gray-600">
              From Olmsted-designed estates to modern luxury homes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Historic Core</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Ponce de Leon Avenue estates</li>
                <li>• Lullwater Road mansions</li>
                <li>• Springdale Road homes</li>
                <li>• Oakdale Road residences</li>
                <li>• Original Olmsted properties</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emory Area</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Emory University vicinity</li>
                <li>• CDC area residences</li>
                <li>• Clifton Road estates</li>
                <li>• Faculty housing areas</li>
                <li>• Briarcliff Road homes</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury Enclaves</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• The By Way estates</li>
                <li>• Fairview Road mansions</li>
                <li>• Chelsea Heights</li>
                <li>• Druid Hills Golf Club area</li>
                <li>• Private gated properties</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-purple-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Architectural Expertise
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-lg font-semibold text-purple-800">Tudor Revival</div>
                <div className="text-gray-600 text-sm">1920s estates</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-purple-800">Italian Renaissance</div>
                <div className="text-gray-600 text-sm">Historic villas</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-purple-800">Georgian Revival</div>
                <div className="text-gray-600 text-sm">Classic mansions</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-purple-800">Modern Luxury</div>
                <div className="text-gray-600 text-sm">Contemporary estates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Druid Hills Excellence */}
      <section className="bg-gradient-to-br from-gray-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Druid Hills Difference
            </h2>
            <p className="text-xl text-gray-600">
              Why Atlanta's most successful residents choose Santos Cleaning
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$238K+</div>
              <div className="text-gray-600">Median Income</div>
              <div className="text-sm text-gray-500 mt-1">Highest in Atlanta</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">$650K+</div>
              <div className="text-gray-600">Average Home Value</div>
              <div className="text-sm text-gray-500 mt-1">Premium properties</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1910s</div>
              <div className="text-gray-600">Historic District</div>
              <div className="text-sm text-gray-500 mt-1">Olmsted design</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">14K+</div>
              <div className="text-gray-600">Elite Residents</div>
              <div className="text-sm text-gray-500 mt-1">Executives & professionals</div>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Our Druid Hills Service Standards
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Estate-Level Service</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ White-glove cleaning protocols</li>
                  <li>✓ Fine art and antique care training</li>
                  <li>✓ Discretion agreements for all staff</li>
                  <li>✓ Flexible scheduling for events</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Premium Features</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Same-team consistency</li>
                  <li>✓ Luxury product options</li>
                  <li>✓ Priority emergency service</li>
                  <li>✓ Concierge-level communication</li>
                </ul>
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
              Trusted by Druid Hills' Elite
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  E
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Elizabeth H.</div>
                  <div className="text-sm text-gray-600">Lullwater Estate</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Santos Cleaning understands the care required for our 1920s estate. They handle our antiques and artwork with exceptional attention. Truly white-glove service."
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  D
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Dr. Marcus T.</div>
                  <div className="text-sm text-gray-600">Emory Area</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Professional, discreet, and thorough. They've maintained our home impeccably for 3 years. The team is trustworthy and understands luxury home care."
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  V
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Victoria S.</div>
                  <div className="text-sm text-gray-600">Ponce de Leon</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The best cleaning service in Atlanta. They respect our privacy, work around our schedule, and maintain our historic home beautifully. Highly recommended."
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience Estate-Level Cleaning Excellence
          </h2>
          <p className="text-xl mb-8">
            Join Druid Hills' most distinguished families who trust Santos Cleaning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="tel:+18663509407"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
            >
              Call (866) 350-9407
            </Link>
          </div>
          <p className="mt-8 text-purple-100">
            Serving Historic Druid Hills • Licensed & Insured • Estate Cleaning Specialists
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
                Estate-level cleaning services for Druid Hills' most distinguished homes. Excellence in every detail.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Druid Hills Service</h4>
              <p className="text-gray-300">Phone: (866) 350-9407</p>
              <p className="text-gray-300">Email: info@santoscsolutions.com</p>
              <p className="text-gray-300">Serving ZIP: 30307, 30333</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Historic Districts</h4>
              <div className="space-y-2">
                <div className="text-gray-300">Ponce de Leon • Lullwater</div>
                <div className="text-gray-300">Springdale • Oakdale</div>
                <div className="text-gray-300">Emory • Fairview</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Santos Cleaning Solutions LLC. Proudly serving historic Druid Hills.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 