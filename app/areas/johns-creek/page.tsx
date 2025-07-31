import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'House Cleaning Services in Johns Creek, GA | Santos Cleaning',
  description: 'Professional house cleaning in Johns Creek, GA. Serving Technology Park, Ocee, Medlock Bridge areas. Trusted by busy professionals and families in 30097, 30005.',
  keywords: 'Johns Creek house cleaning, maid service Johns Creek GA, cleaning services 30097, Technology Park cleaners, Ocee cleaning service',
}

export default function JohnsCreekPage() {
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
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Professional Cleaning in Johns Creek
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Reliable house cleaning for Johns Creek's busy professionals and growing families. Excellence meets convenience in North Fulton's premier community.
            </p>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg">
                <strong>🏘️ Community Focused:</strong> Serving Johns Creek since inception
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Johns Creek Chooses Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Perfect for Johns Creek's Lifestyle
            </h2>
            <p className="text-xl text-gray-600">
              Designed for busy tech professionals and active families
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tech Professional Ready</h3>
              <p className="text-gray-600">
                Flexible scheduling for busy tech workers. Early morning, evening, and weekend availability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Family-Friendly Service</h3>
              <p className="text-gray-600">
                Safe, eco-friendly products. Background-checked staff you can trust with your children and pets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Modern Home Experts</h3>
              <p className="text-gray-600">
                Experience with Johns Creek's newer construction, smart homes, and modern finishes.
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
              Johns Creek Communities We Serve
            </h2>
            <p className="text-xl text-gray-600">
              From Technology Park to the Chattahoochee River
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">North Johns Creek</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Ocee area</li>
                <li>• Autrey Mill</li>
                <li>• Northview High area</li>
                <li>• State Bridge Road</li>
                <li>• McGinnis Ferry</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Central Districts</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Technology Park</li>
                <li>• Medlock Bridge</li>
                <li>• Johns Creek Town Center</li>
                <li>• Abbotts Bridge</li>
                <li>• Bell Road corridor</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Communities</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Country Club of the South</li>
                <li>• Rivermont</li>
                <li>• St. Ives</li>
                <li>• Thornhill</li>
                <li>• The Manor</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-indigo-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Johns Creek Quick Facts
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-indigo-600">30097</div>
                <div className="text-gray-600">Primary ZIP</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">30005</div>
                <div className="text-gray-600">Secondary ZIP</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">2006</div>
                <div className="text-gray-600">City Founded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">85K+</div>
                <div className="text-gray-600">Population</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Johns Creek Excellence */}
      <section className="bg-gradient-to-br from-gray-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Johns Creek Families Trust Santos
            </h2>
            <p className="text-xl text-gray-600">
              Meeting the high standards of North Fulton's newest city
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Johns Creek Demographics
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">📊</span>
                  <div>
                    <strong>Median Income:</strong> $109,576 (Top 10% nationally)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">🎓</span>
                  <div>
                    <strong>Education:</strong> 65% bachelor's degree or higher
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">💼</span>
                  <div>
                    <strong>Tech Hub:</strong> Major tech corridor with Fortune 500 presence
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">🏫</span>
                  <div>
                    <strong>Top Schools:</strong> Highest-rated schools in Georgia
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Johns Creek Advantage
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>Tech-Savvy:</strong> Online booking, app updates, digital payments
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>Busy Schedule Friendly:</strong> Early/late appointments available
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>Large Home Experience:</strong> Efficient cleaning for 3,000+ sq ft homes
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <div>
                    <strong>Pet-Friendly:</strong> Safe for your furry family members
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-3">
              <span className="text-blue-800 font-semibold">
                🏆 Serving Johns Creek families with pride and professionalism
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
              Johns Creek Families Love Our Service
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Priya S.</div>
                  <div className="text-sm text-gray-600">Technology Park</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "As a tech professional, I appreciate their online booking and communication. They're reliable, thorough, and work around my schedule perfectly."
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Michael L.</div>
                  <div className="text-sm text-gray-600">Country Club of the South</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Santos Cleaning handles our large home beautifully. They're efficient, professional, and the quality is consistently excellent. Highly recommend!"
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  K
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Karen W.</div>
                  <div className="text-sm text-gray-600">Ocee Area</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "With three kids and two dogs, we need reliable cleaning help. Santos is amazing - trustworthy, flexible, and they use safe products. Love them!"
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Your Johns Creek Neighbors
          </h2>
          <p className="text-xl mb-8">
            Experience the cleaning service trusted by North Fulton's busiest families
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Estimate
            </Link>
            <Link
              href="tel:+18663509407"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-900 transition-colors"
            >
              Call (866) 350-9407
            </Link>
          </div>
          <p className="mt-8 text-indigo-100">
            Serving Johns Creek, GA 30097 & 30005 • Licensed & Insured • Same-Day Quotes
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
                Professional cleaning services for Johns Creek's busy professionals and families. Quality you can trust.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Johns Creek Service</h4>
              <p className="text-gray-300">Phone: (866) 350-9407</p>
              <p className="text-gray-300">Email: info@santoscsolutions.com</p>
              <p className="text-gray-300">Serving ZIP: 30097, 30005</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Johns Creek Areas</h4>
              <div className="space-y-2">
                <div className="text-gray-300">Technology Park • Ocee</div>
                <div className="text-gray-300">Medlock Bridge • Town Center</div>
                <div className="text-gray-300">Country Club • St. Ives</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Santos Cleaning Solutions LLC. Proudly serving Johns Creek, GA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 