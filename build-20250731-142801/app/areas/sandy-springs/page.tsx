import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Executive Cleaning Services in Sandy Springs, GA | Santos Cleaning',
  description: 'Premium house cleaning services in Sandy Springs, Georgia. Serving executive homes, luxury condos, and upscale communities with professional excellence.',
  keywords: 'house cleaning Sandy Springs GA, executive cleaning services, luxury home cleaning Sandy Springs, professional cleaning services Georgia',
}

export default function SandySpringsPage() {
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
                href="tel:+18663509407"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Executive Cleaning Services in Sandy Springs, GA
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Premium cleaning services for Sandy Springs' executive homes, luxury condos, and upscale communities
            </p>
            <div className="bg-blue-800 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg">
                <strong>💼 Executive Focus:</strong> Professional service for discerning homeowners and busy executives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Sandy Springs Executives Choose Santos Cleaning
            </h2>
            <p className="text-xl text-gray-600">
              Professional excellence meeting the high standards of Sandy Springs residents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Executive Scheduling</h3>
              <p className="text-gray-600">
                Flexible timing to accommodate demanding professional schedules, including early morning 
                and evening appointments that work around your executive lifestyle.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Luxury Home Expertise</h3>
              <p className="text-gray-600">
                Specialized in high-end finishes, luxury appliances, premium materials, and designer 
                features that require expert care and attention to detail.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Concierge-Level Service</h3>
              <p className="text-gray-600">
                White-glove treatment with attention to detail, discretion, and the highest standards 
                of professionalism expected in Sandy Springs' premier communities.
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
              Sandy Springs Communities We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Premium cleaning throughout Sandy Springs' most desirable neighborhoods
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Executive Districts</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• City Springs area</li>
                <li>• Perimeter Center</li>
                <li>• Hammond Drive corridor</li>
                <li>• Roswell Road executive homes</li>
                <li>• Johnson Ferry luxury properties</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury High-Rises</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Glenridge Point</li>
                <li>• The Residences at City Springs</li>
                <li>• Perimeter luxury condos</li>
                <li>• Abernathy Square towers</li>
                <li>• Premium Dunwoody border</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Prestigious Communities</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Riverwood Plantation</li>
                <li>• Huntcliff neighborhood</li>
                <li>• North River estates</li>
                <li>• Spalding Drive luxury homes</li>
                <li>• Heards Ferry executive area</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Sandy Springs Premium Services
            </h2>
            <p className="text-xl text-gray-600">
              Tailored cleaning solutions for executive lifestyles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Executive Home Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive cleaning for luxury homes with premium finishes, high-end appliances, 
                and sophisticated interior design requiring expert attention.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• ✓ Luxury appliance care (Sub-Zero, Wolf, etc.)</li>
                <li>• ✓ Premium surface protection</li>
                <li>• ✓ Designer furniture cleaning</li>
                <li>• ✓ Art and collectible dusting</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">High-Rise Condo Service</h3>
              <p className="text-gray-600 mb-4">
                Specialized cleaning for luxury condominiums and high-rise living spaces, 
                coordinated with building management and concierge services.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• ✓ Concierge coordination</li>
                <li>• ✓ Floor-to-ceiling window cleaning</li>
                <li>• ✓ Balcony and terrace care</li>
                <li>• ✓ Building policy compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Testimonials */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Sandy Springs Executives Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Robert C.</div>
                  <div className="text-sm text-gray-600">Technology Executive, Perimeter</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Santos Cleaning works perfectly with my demanding schedule. They're in and out efficiently 
                while maintaining the highest standards. My home office always looks pristine for video calls."
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Amanda T.</div>
                  <div className="text-sm text-gray-600">Investment Banker, City Springs</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The attention to detail is exceptional. They understand luxury finishes and treat our 
                high-end appliances with the care they deserve. Truly professional service."
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Guarantees */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Professional Commitments
            </h2>
            <p className="text-xl text-gray-600">
              The standards you expect, guaranteed
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Bonded & Insured</h3>
              <p className="text-sm text-gray-600">Complete protection for your valuable property</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Background Checked</h3>
              <p className="text-sm text-gray-600">Thoroughly vetted professional team</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-sm text-gray-600">We return until you're 100% satisfied</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Punctual Service</h3>
              <p className="text-sm text-gray-600">Reliable timing you can count on</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience Executive-Level Cleaning in Sandy Springs
          </h2>
          <p className="text-xl mb-8">
            Join Sandy Springs' most successful executives who trust Santos Cleaning Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Executive Estimate
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Santos Cleaning Solutions</h3>
              <p className="text-gray-300">
                Your executive cleaning service in Sandy Springs. Professional excellence for discerning homeowners.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Sandy Springs Office</h4>
              <p className="text-gray-300">Phone: (866) 350-9407</p>
              <p className="text-gray-300">Email: info@santoscsolutions.com</p>
              <p className="text-gray-300">Serving Executive Sandy Springs</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Premium Areas</h4>
              <div className="space-y-2">
                <div className="text-gray-300">City Springs • Perimeter Center</div>
                <div className="text-gray-300">Riverwood • Huntcliff</div>
                <div className="text-gray-300">Executive High-Rises</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Santos Cleaning Solutions LLC. Proudly serving Sandy Springs executives.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 