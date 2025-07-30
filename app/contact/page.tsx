import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Get Your Free Cleaning Estimate | Santos',
  description: 'Contact Santos Cleaning for your free cleaning estimate. Call (866) 350-9407 or fill out our form for professional cleaning services in Marietta, GA.',
}

export default function ContactPage() {
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
              <Link href="/areas" className="text-gray-700 hover:text-blue-600">
                Service Areas
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="/contact" className="text-blue-600 font-semibold">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-900 font-semibold">
                (866) 350-9407
              </span>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get Your Free Estimate</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready to experience the Santos Cleaning difference? Contact us today for your free, no-obligation estimate.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Free Estimates
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Same-Day Response
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Licensed & Insured
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Request Your Free Estimate
              </h2>
              
              <form className="space-y-6" id="contact-form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="House Cleaning">House Cleaning</option>
                      <option value="Deep Cleaning">Deep Cleaning</option>
                      <option value="Move-in/Move-out">Move-in/Move-out</option>
                      <option value="Post-Construction">Post-Construction</option>
                      <option value="Commercial Cleaning">Commercial Cleaning</option>
                      <option value="Recurring Cleaning">Recurring Cleaning</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="123 Main Street, Marietta, GA 30060"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us more about your cleaning needs, preferred schedule, or any special requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send My Free Estimate Request
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to receive communications from Santos Cleaning Solutions. 
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Details */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-600 text-xl">📞</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <Link 
                        href="tel:+18663509407" 
                        className="text-blue-600 hover:text-blue-700 text-lg"
                      >
                        (866) 350-9407
                      </Link>
                      <p className="text-sm text-gray-600">Call or text anytime</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-green-600 text-xl">✉️</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <Link 
                        href="mailto:info@santoscsolutions.com" 
                        className="text-blue-600 hover:text-blue-700"
                      >
                        info@santoscsolutions.com
                      </Link>
                      <p className="text-sm text-gray-600">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-purple-600 text-xl">📍</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Service Area</div>
                      <p className="text-gray-600">Marietta, GA & Surrounding Areas</p>
                      <p className="text-sm text-gray-600">Within 25 miles of Marietta</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-yellow-600 text-xl">⏰</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Response Time</div>
                      <p className="text-gray-600">Same-Day Response</p>
                      <p className="text-sm text-gray-600">Most estimates within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-red-900 mb-4">
                  Need Emergency Cleaning?
                </h3>
                <p className="text-red-700 mb-4">
                  For urgent cleaning needs or same-day service requests, call us directly:
                </p>
                <Link
                  href="tel:+18663509407"
                  className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Call (866) 350-9407 Now
                </Link>
              </div>

              {/* Service Areas */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Areas We Serve
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-blue-700">
                  <div>• Marietta</div>
                  <div>• East Cobb</div>
                  <div>• West Cobb</div>
                  <div>• Kennesaw</div>
                  <div>• Acworth</div>
                  <div>• Buckhead</div>
                  <div>• Sandy Springs</div>
                  <div>• Smyrna</div>
                </div>
                <Link 
                  href="/areas" 
                  className="text-blue-600 hover:text-blue-700 text-sm font-semibold mt-4 inline-block"
                >
                  View All Service Areas →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How quickly can you provide an estimate?
              </h3>
              <p className="text-gray-600">
                Most estimates are provided within 24 hours, with many same-day responses. 
                For urgent requests, call us directly at (866) 350-9407.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Are your estimates really free?
              </h3>
              <p className="text-gray-600">
                Yes! All estimates are completely free with no obligation. We believe in 
                transparent pricing and want you to make an informed decision.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Do you offer evening or weekend consultations?
              </h3>
              <p className="text-gray-600">
                Absolutely! We understand busy schedules and offer flexible consultation 
                times including evenings and weekends to accommodate your needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What information do you need for an accurate estimate?
              </h3>
              <p className="text-gray-600">
                We'll need basic information about your property size, type of cleaning needed, 
                preferred frequency, and any special requirements. The more details you provide, 
                the more accurate your estimate will be.
              </p>
            </div>
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
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-300 hover:text-white">
                  Home
                </Link>
                <Link href="/services" className="block text-gray-300 hover:text-white">
                  Services
                </Link>
                <Link href="/about" className="block text-gray-300 hover:text-white">
                  About
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