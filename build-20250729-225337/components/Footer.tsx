import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Areas We Serve', href: '/areas' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Free Estimate', href: '/contact' }
  ]

  const serviceAreas = [
    { name: 'Marietta', href: '/areas/marietta' },
    { name: 'Buckhead', href: '/areas/buckhead' },
    { name: 'Roswell', href: '/areas/roswell' },
    { name: 'Alpharetta', href: '/areas/alpharetta' },
    { name: 'Sandy Springs', href: '/areas/sandy-springs' },
    { name: 'Dunwoody', href: '/areas/dunwoody' },
    { name: 'Johns Creek', href: '/areas/johns-creek' },
    { name: 'Atlanta', href: '/areas/atlanta' }
  ]

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Santos Cleaning Solutions</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Family-owned professional cleaning services in Marietta, Georgia. 
              Licensed, insured, and committed to exceeding your expectations with every visit.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span className="font-medium">5-Star Rated Service</span>
              </div>
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">Same-Day Response</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav aria-label="Footer quick links navigation">
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Areas We Serve */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Areas We Serve</h4>
            <nav aria-label="Footer service areas navigation">
              <ul className="space-y-2">
                {serviceAreas.map((area) => (
                  <li key={area.name}>
                    <Link 
                      href={area.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <address className="not-italic space-y-3">
              <div>
                <p className="font-medium text-blue-300 mb-1">Phone:</p>
                <Link 
                  href="tel:+18663509407"
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center"
                  aria-label="Call Santos Cleaning Solutions"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (866) 350-9407
                </Link>
              </div>
              <div>
                <p className="font-medium text-blue-300 mb-1">Email:</p>
                <Link 
                  href="mailto:info@santoscsolutions.com"
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@santoscsolutions.com
                </Link>
              </div>
              <div>
                <p className="font-medium text-blue-300 mb-1">Service Area:</p>
                <p className="text-gray-300">Marietta, GA & Metro Atlanta</p>
              </div>
              <div>
                <p className="font-medium text-blue-300 mb-1">Business Hours:</p>
                <div className="text-gray-300 text-sm">
                  <p>Mon-Fri: 8AM-6PM</p>
                  <p>Saturday: 9AM-4PM</p>
                  <p>Sunday: Emergency Only</p>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Copyright */}
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Santos Cleaning Solutions LLC. All rights reserved.
            </p>

            {/* Legal Links */}
            <nav aria-label="Footer legal navigation">
              <ul className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                <li>
                  <Link 
                    href="/legal/privacy-policy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/legal/terms-of-service"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/legal/cancellation-policy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cancellation Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Business Credentials */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-400">
              <span>✅ Georgia Business License: #XXX-XXX-XXX</span>
              <span>🛡️ Fully Insured & Bonded</span>
              <span>⭐ Better Business Bureau Member</span>
              <span>🌿 EPA Certified Cleaning Products</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 