import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Areas - Marietta, Buckhead, Atlanta | Santos',
  description: 'Professional cleaning services throughout Metro Atlanta. Serving Marietta, Buckhead, Atlanta and surrounding areas with licensed cleaning teams.',
}

const serviceAreas = [
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
      'Powder Springs',
      'Downtown Marietta',
      'Kennesaw',
      'Acworth'
    ],
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
      'Brookhaven',
      'Sandy Springs',
      'Lenox',
      'Phipps Plaza area'
    ],
    image: '/images/buckhead-area.jpg'
  },
  {
    id: 'atlanta',
    name: 'Atlanta Metro',
    description: 'Comprehensive cleaning throughout greater Atlanta',
    highlights: [
      'Wide service coverage',
      'Commercial and residential',
      'Competitive pricing',
      'Professional teams'
    ],
    neighborhoods: [
      'Midtown',
      'Virginia Highland',
      'Inman Park',
      'Little Five Points',
      'Grant Park',
      'Decatur'
    ],
    image: '/images/atlanta-area.jpg'
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
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Service Areas</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Proudly serving Metro Atlanta communities with professional cleaning services
          </p>
          <div className="bg-blue-800 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg">
              <strong>Primary Service Area:</strong> Within 25 miles of Marietta, GA
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {serviceAreas.map((area) => (
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

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Neighborhoods Served:</h4>
                    <div className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                      {area.neighborhoods.map((neighborhood, index) => (
                        <div key={index}>{neighborhood}</div>
                      ))}
                    </div>
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

      {/* Coverage Map Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Metro Atlanta Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve a wide area throughout Metro Atlanta, with specialized local knowledge in each community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Primary Service Areas</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Marietta & Cobb County</div>
                    <div className="text-sm text-gray-600">Our home base - fastest response times</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <div className="w-4 h-4 bg-green-600 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Buckhead & North Atlanta</div>
                    <div className="text-sm text-gray-600">Premium services for luxury homes</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                  <div className="w-4 h-4 bg-purple-600 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Atlanta Metro</div>
                    <div className="text-sm text-gray-600">Comprehensive coverage throughout the metro</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Interactive Service Area Map</p>
              <span className="text-gray-400 ml-2">(Coming Soon)</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Not Sure If We Serve Your Area?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Give us a call! We're always expanding our service areas and may be able to accommodate special requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Check Availability
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
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <div className="space-y-2">
                <Link href="/areas/marietta" className="block text-gray-300 hover:text-white">
                  Marietta
                </Link>
                <Link href="/areas/buckhead" className="block text-gray-300 hover:text-white">
                  Buckhead
                </Link>
                <Link href="/areas/atlanta" className="block text-gray-300 hover:text-white">
                  Atlanta Metro
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