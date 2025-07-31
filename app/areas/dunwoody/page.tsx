import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'House Cleaning Services in Dunwoody, GA | Santos Cleaning',
  description: 'Premium house cleaning services in Dunwoody, Georgia. Serving Perimeter, Georgetown, Dunwoody Village, and all 30338, 30346, 30360 zip codes. Trusted by affluent families.',
  keywords: 'Dunwoody house cleaning, maid service Dunwoody GA, cleaning services 30338, Perimeter cleaning, Georgetown Dunwoody cleaners',
}

export default function DunwoodyPage() {
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
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Premium House Cleaning in Dunwoody, GA
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Trusted by Dunwoody's most discerning families. Professional cleaning services for upscale homes in Perimeter, Georgetown, and beyond.
            </p>
            <div className="bg-blue-800/50 backdrop-blur rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg">
                <strong>📍 Serving All Dunwoody:</strong> ZIP codes 30338, 30346, 30360
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Dunwoody Chooses Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Dunwoody's Elite Families Choose Santos
            </h2>
            <p className="text-xl text-gray-600">
              Premium service standards that match Dunwoody's exceptional lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Luxury Home Expertise</h3>
              <p className="text-gray-600">
                Experienced with high-end finishes, delicate surfaces, and the unique needs of Dunwoody's upscale properties.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted & Insured</h3>
              <p className="text-gray-600">
                Fully bonded and insured. Background-checked staff you can trust in your home while you're at the office or country club.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">White-Glove Service</h3>
              <p className="text-gray-600">
                Attention to detail that meets the highest standards. We understand the expectations of Dunwoody residents.
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
              Dunwoody Neighborhoods We Serve
            </h2>
            <p className="text-xl text-gray-600">
              From Perimeter Center to quiet residential streets, we're your local cleaning experts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Central Dunwoody</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Dunwoody Village</li>
                <li>• Georgetown</li>
                <li>• Redfield</li>
                <li>• Wynterhall</li>
                <li>• Dunwoody Club Forest</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Perimeter Area</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Perimeter Center</li>
                <li>• Ravinia</li>
                <li>• Sterling on the Lake</li>
                <li>• Glenridge Highlands</li>
                <li>• Crown Towers</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">North Dunwoody</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Branches</li>
                <li>• Dunwoody North</li>
                <li>• Vermack</li>
                <li>• Vanderlyn</li>
                <li>• Chesnut Elementary area</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Serving All Dunwoody ZIP Codes
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">30338</div>
                <div className="text-gray-600">North Dunwoody</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">30346</div>
                <div className="text-gray-600">Central Dunwoody</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">30360</div>
                <div className="text-gray-600">Dunwoody/Doraville</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Statistics */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Dunwoody by the Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Why we're proud to serve this exceptional community
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$122K+</div>
              <div className="text-gray-600">Median Household Income</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">79%</div>
              <div className="text-gray-600">College Educated</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$701K</div>
              <div className="text-gray-600">Average Home Value</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">50K+</div>
              <div className="text-gray-600">Residents Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Dunwoody Residents Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Jennifer K.</div>
                  <div className="text-sm text-gray-600">Georgetown Resident</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Santos Cleaning has been exceptional. They handle our home with care and attention to detail that's hard to find. Highly recommend for Dunwoody families!"
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Robert M.</div>
                  <div className="text-sm text-gray-600">Perimeter Area</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Professional, punctual, and thorough. They've been cleaning our executive home for 2 years. The team is trustworthy and does excellent work."
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Amanda S.</div>
                  <div className="text-sm text-gray-600">Dunwoody Village</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Best cleaning service in Dunwoody! They're flexible with scheduling and always do an amazing job. My home has never looked better."
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience Premium Cleaning in Dunwoody
          </h2>
          <p className="text-xl mb-8">
            Join hundreds of satisfied Dunwoody families who trust Santos Cleaning
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
          <p className="mt-8 text-blue-100">
            Serving all of Dunwoody, GA • Licensed & Insured • Satisfaction Guaranteed
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
                Premium house cleaning services for Dunwoody's finest homes. Family-owned, locally trusted.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Dunwoody Service Area</h4>
              <p className="text-gray-300">Phone: (866) 350-9407</p>
              <p className="text-gray-300">Email: info@santoscsolutions.com</p>
              <p className="text-gray-300">Serving ZIP: 30338, 30346, 30360</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Dunwoody Neighborhoods</h4>
              <div className="space-y-2">
                <div className="text-gray-300">Georgetown • Dunwoody Village</div>
                <div className="text-gray-300">Perimeter • Redfield</div>
                <div className="text-gray-300">Branches • Vermack</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Santos Cleaning Solutions LLC. Proudly serving Dunwoody, GA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 