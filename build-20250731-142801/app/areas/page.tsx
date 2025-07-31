import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Areas - Atlanta Metro | Santos Cleaning Solutions',
  description: 'Professional cleaning services throughout Metro Atlanta. Serving Marietta, Buckhead, Dunwoody, Alpharetta, Sandy Springs, and 15+ communities with licensed cleaning teams.',
  keywords: 'Atlanta cleaning service areas, Metro Atlanta house cleaning, Georgia maid service locations',
}

const primaryAreas = [
  {
    id: 'marietta',
    name: 'Marietta',
    description: 'Our home base and primary service area',
    highlights: [
      'Established customer base',
      'Same-day response available',
      'Local family-owned business',
      'Deep community connections'
    ],
    neighborhoods: [
      'East Cobb',
      'West Cobb',
      'Downtown Marietta',
      'Kennesaw area'
    ],
    zipCodes: '30060, 30062, 30064, 30066, 30067',
    image: '/images/marietta-area.jpg'
  },
  {
    id: 'buckhead',
    name: 'Buckhead',
    description: 'Premium cleaning services for Atlanta\'s premier district',
    highlights: [
      'Luxury home specialists',
      'High-end condo services',
      'Corporate office cleaning',
      'Flexible scheduling'
    ],
    neighborhoods: [
      'Tuxedo Park',
      'Garden Hills',
      'Lenox area',
      'Phipps Plaza area'
    ],
    zipCodes: '30305, 30309, 30324, 30326, 30327',
    image: '/images/buckhead-area.jpg'
  },
  {
    id: 'alpharetta',
    name: 'Alpharetta',
    description: 'Tech corridor professionals and family communities',
    highlights: [
      'Tech professional friendly',
      'Family-focused service',
      'Modern home expertise',
      'Flexible scheduling'
    ],
    neighborhoods: [
      'Windward',
      'Downtown Alpharetta',
      'Avalon area',
      'Milton border'
    ],
    zipCodes: '30004, 30005, 30009, 30022',
    image: '/images/alpharetta-area.jpg'
  }
]

const premiumAreas = [
  {
    id: 'dunwoody',
    name: 'Dunwoody',
    description: 'Serving Dunwoody\'s affluent families',
    income: '$122K+',
    zipCodes: '30338, 30346, 30360'
  },
  {
    id: 'druid-hills',
    name: 'Druid Hills',
    description: 'Atlanta\'s most prestigious neighborhood',
    income: '$238K+',
    zipCodes: '30307, 30333'
  },
  {
    id: 'sandy-springs',
    name: 'Sandy Springs',
    description: 'Premium service for diverse communities',
    income: '$78K+',
    zipCodes: '30328, 30342, 30350'
  },
  {
    id: 'vinings',
    name: 'Vinings',
    description: 'Riverside luxury living',
    income: '$95K+',
    zipCodes: '30339'
  },
  {
    id: 'johns-creek',
    name: 'Johns Creek',
    description: 'Tech hub family communities',
    income: '$109K+',
    zipCodes: '30097, 30005'
  },
  {
    id: 'milton',
    name: 'Milton',
    description: 'Equestrian estates and luxury homes',
    income: '$130K+',
    zipCodes: '30004'
  }
]

const growingAreas = [
  {
    id: 'roswell',
    name: 'Roswell',
    description: 'Historic charm meets modern living',
    population: '90K+',
    zipCodes: '30075, 30076'
  },
  {
    id: 'smyrna',
    name: 'Smyrna',
    description: 'Vibrant growing community',
    population: '56K+',
    zipCodes: '30080, 30082'
  },
  {
    id: 'brookhaven',
    name: 'Brookhaven',
    description: 'Urban convenience and diversity',
    population: '55K+',
    zipCodes: '30319, 30324'
  }
]

export default function ServiceAreasPage() {
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
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Service Areas</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Proudly serving 15+ Metro Atlanta communities with professional cleaning services
          </p>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg">
              <strong>Coverage:</strong> From Marietta to Milton, Buckhead to Brookhaven
            </p>
          </div>
        </div>
      </section>

      {/* Primary Service Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Primary Service Areas</h2>
            <p className="text-lg text-gray-600">Our core service regions with fastest response times</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {primaryAreas.map((area) => (
              <div key={area.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">{area.name}</h3>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 mb-6">{area.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Why Choose Us Here:</h4>
                    <ul className="space-y-2">
                      {area.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Areas Covered:</h4>
                    <p className="text-sm text-gray-600 mb-2">{area.neighborhoods.join(' • ')}</p>
                    <p className="text-xs text-gray-500">ZIP: {area.zipCodes}</p>
                  </div>

                  <Link
                    href={`/areas/${area.id}`}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                  >
                    Learn More About {area.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Communities */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Communities</h2>
            <p className="text-lg text-gray-600">Specialized service for Atlanta's most distinguished neighborhoods</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumAreas.map((area) => (
              <Link
                key={area.id}
                href={`/areas/${area.id}`}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-all group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {area.name}
                </h3>
                <p className="text-gray-600 mb-3">{area.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-purple-600 font-semibold">Median: {area.income}</span>
                  <span className="text-gray-500">ZIP: {area.zipCodes}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Growing Communities */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Growing Communities</h2>
            <p className="text-lg text-gray-600">Serving Atlanta's dynamic and diverse neighborhoods</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {growingAreas.map((area) => (
              <Link
                key={area.id}
                href={`/areas/${area.id}`}
                className="bg-white p-6 rounded-xl hover:shadow-lg transition-all group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {area.name}
                </h3>
                <p className="text-gray-600 mb-3">{area.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-green-600 font-semibold">Pop: {area.population}</span>
                  <span className="text-gray-500">ZIP: {area.zipCodes}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Stats */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Metro Atlanta Coverage by the Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-xl">Communities Served</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">25</div>
              <div className="text-xl">Mile Service Radius</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1M+</div>
              <div className="text-xl">Population Coverage</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">30+</div>
              <div className="text-xl">ZIP Codes</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Find Your Local Service Page
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Click on your community above or call us to confirm service availability in your specific area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Check Your Area
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
                Family-owned professional cleaning services throughout Metro Atlanta.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/areas/marietta" className="block text-gray-300 hover:text-white">
                  Marietta
                </Link>
                <Link href="/areas/buckhead" className="block text-gray-300 hover:text-white">
                  Buckhead
                </Link>
                <Link href="/areas/alpharetta" className="block text-gray-300 hover:text-white">
                  Alpharetta
                </Link>
                <Link href="/areas/dunwoody" className="block text-gray-300 hover:text-white">
                  Dunwoody
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-300">Phone: (866) 350-9407</p>
              <p className="text-gray-300">Email: info@santoscsolutions.com</p>
              <p className="text-gray-300">Serving Metro Atlanta</p>
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