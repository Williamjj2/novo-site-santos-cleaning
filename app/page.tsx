import { Metadata } from 'next'
import Link from 'next/link'
import AboutSection from '../components/AboutSection'
import PriceCalculator from '../components/PriceCalculator'
import BeforeAfterGallery from '../components/BeforeAfterGallery'
import ReviewsSection from '../components/ReviewsSection'
import ContactForm from '../components/ContactForm'
import Breadcrumbs from '../components/Breadcrumbs'
import { HeroImage, ServiceImage } from '../components/SEOImages'

export const metadata: Metadata = {
  title: 'House Cleaning Marietta GA | Buckhead Atlanta | Santos Cleaning',
  description: 'Premium house cleaning in Marietta & Buckhead. Licensed & insured. Deep cleaning, move-in/out, regular maintenance. Get free estimate!',
  keywords: [
    'house cleaning Marietta GA',
    'cleaning services Buckhead',
    'deep cleaning Sandy Springs',
    'move in out cleaning',
    'residential cleaning Atlanta metro',
    'professional cleaning services Georgia',
    'licensed cleaning company',
    'insured house cleaning',
    'family owned cleaning business',
    'eco friendly cleaning products'
  ].join(', '),
  authors: [{ name: 'Santos Cleaning Solutions LLC', url: 'https://santoscsolutions.com' }],
  creator: 'Santos Cleaning Solutions LLC',
  publisher: 'Santos Cleaning Solutions LLC',
  category: 'Home Services',
  classification: 'House Cleaning Services',
  openGraph: {
    title: 'House Cleaning Marietta GA | Buckhead Atlanta | Santos Cleaning',
    description: 'Premium house cleaning in Marietta & Buckhead. Licensed & insured. Deep cleaning, move-in/out, regular maintenance. Get free estimate!',
    url: 'https://santoscsolutions.com',
    siteName: 'Santos Cleaning Solutions',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Santos Cleaning Solutions - Professional House Cleaning in Marietta, GA',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SantosCleaning',
    creator: '@SantosCleaning',
    title: 'House Cleaning Marietta GA | Buckhead Atlanta | Santos Cleaning',
    description: 'Premium house cleaning in Marietta & Buckhead. Licensed & insured. Deep cleaning, move-in/out, regular maintenance. Get free estimate!',
    images: [
      {
        url: '/images/twitter-card-home.jpg',
        alt: 'Santos Cleaning Solutions - Professional House Cleaning Services',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'facebook-domain-verification': 'your-facebook-domain-verification',
    },
  },
  alternates: {
    canonical: 'https://santoscsolutions.com',
    languages: {
      'en-US': 'https://santoscsolutions.com',
    },
  },
  other: {
    'geo.region': 'US-GA',
    'geo.placename': 'Marietta',
    'geo.position': '33.9526;-84.5499',
    'ICBM': '33.9526, -84.5499',
    'theme-color': '#2563eb',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
  },
}

export default function HomePage() {
  const breadcrumbItems = [
    { name: 'Home', href: '/', current: true }
  ]

  return (
    <div className="min-h-screen">
      
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-24 lg:py-32 relative overflow-hidden hero-section">
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-16 w-24 h-24 bg-blue-400/20 rounded-full blur-md animate-float"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-400/20 rounded-full blur-md animate-bounce"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Professional House Cleaning Services in Marietta, GA
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90 max-w-3xl mx-auto">
              Family-owned cleaning company serving Metro Atlanta with eco-friendly products. Licensed, insured, and 5-star rated. 
              We deliver exceptional cleaning services with the professional touch that transforms your house into a spotless home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link 
                href="/contact" 
                className="cta-button bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center pulse-cta"
                aria-label="Book a Free In-Home Cleaning Evaluation in Marietta, GA"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Free Evaluation
              </Link>
              <Link 
                href="tel:+18663509407" 
                className="inline-flex items-center space-x-2 text-white hover:text-blue-200 transition-colors duration-200 group"
                aria-label="Call Santos Cleaning Solutions at (866) 350-9407"
              >
                <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-semibold text-lg">(866) 350-9407</span>
              </Link>
            </div>
            
            {/* Trust Indicators with Enhanced SEO */}
            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
              <div className="trust-indicator text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No-Cost Estimates</span>
              </div>
              <div className="trust-indicator text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Georgia Licensed & Insured</span>
              </div>
              <div className="trust-indicator text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>5-Star Customer Reviews</span>
              </div>
              <div className="trust-indicator text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span>Family-Owned Business</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine maintenance to deep cleaning projects, we offer comprehensive cleaning solutions 
              designed to keep your space spotless, healthy, and welcoming. Every service includes our 
              satisfaction guarantee and eco-friendly cleaning products.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Regular Cleaning */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2V7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Regular Cleaning</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Keep your home consistently clean with our weekly, bi-weekly, or monthly cleaning services. 
                We focus on all essential areas including kitchens, bathrooms, living spaces, and bedrooms. 
                Our systematic approach ensures nothing is missed, from dusting furniture to sanitizing surfaces.
              </p>
              <div className="text-center">
                <p className="text-blue-600 font-bold text-lg mb-2">Starting at $120</p>
                <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Deep Cleaning */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Deep Cleaning</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Perfect for spring cleaning, move-ins, or when your home needs extra attention. 
                Our comprehensive deep clean includes baseboards, light fixtures, ceiling fans, inside cabinets, 
                and detailed bathroom and kitchen cleaning for a truly fresh start.
              </p>
              <div className="text-center">
                <p className="text-blue-600 font-bold text-lg mb-2">Starting at $250</p>
                <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Office Cleaning */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Office Cleaning</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Maintain a professional, healthy workspace with our commercial cleaning services for offices, 
                retail spaces, and small businesses. We offer flexible scheduling including after-hours service 
                to ensure minimal disruption to your operations.
              </p>
              <div className="text-center">
                <p className="text-blue-600 font-bold text-lg mb-2">Custom Pricing</p>
                <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas We Proudly Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve homeowners and businesses throughout Marietta and the greater Atlanta metropolitan area. 
              Our local knowledge and commitment to excellence has made us the trusted choice for families 
              across North Georgia communities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Marietta', href: '/areas/marietta', description: 'Our home base' },
              { name: 'Buckhead', href: '/areas/buckhead', description: 'Luxury homes' },
              { name: 'Roswell', href: '/areas/roswell', description: 'Historic charm' },
              { name: 'Alpharetta', href: '/areas/alpharetta', description: 'Modern communities' },
              { name: 'Sandy Springs', href: '/areas/sandy-springs', description: 'Executive homes' },
              { name: 'Dunwoody', href: '/areas/dunwoody', description: 'Family neighborhoods' },
              { name: 'Johns Creek', href: '/areas/johns-creek', description: 'Upscale area' },
              { name: 'Atlanta', href: '/areas/atlanta', description: 'Metro coverage' }
            ].map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 group"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {area.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{area.description}</p>
                <p className="text-blue-600 text-sm font-medium group-hover:text-blue-700">
                  View Details →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Santos Cleaning Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just a cleaning service - we're your trusted partner in maintaining a clean, 
              healthy, and comfortable environment. Our commitment to excellence, attention to detail, 
              and personalized service sets us apart from other cleaning companies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Licensed & Insured */}
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Licensed & Fully Insured</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your peace of mind is our top priority. We carry comprehensive liability insurance and maintain 
                  all necessary business licenses to operate professionally throughout Georgia. Our bonded and 
                  background-checked team ensures your property is completely protected while we work.
                </p>
              </div>
            </div>

            {/* Family Owned */}
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Family-Owned & Operated</h3>
                <p className="text-gray-600 leading-relaxed">
                  As a local family business rooted in the Marietta community, we understand the importance of 
                  trust, reliability, and personal service. We treat every home and business like our own, 
                  building lasting relationships with our clients based on consistent quality and genuine care.
                </p>
              </div>
            </div>

            {/* Eco-Friendly */}
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Safe, Eco-Friendly Products</h3>
                <p className="text-gray-600 leading-relaxed">
                  We prioritize your family's health and the environment by exclusively using EPA-certified, 
                  non-toxic cleaning products. Our green cleaning solutions are completely safe for children, 
                  pets, and family members with allergies or chemical sensitivities, without compromising effectiveness.
                </p>
              </div>
            </div>

            {/* Satisfaction Guarantee */}
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Satisfaction Guarantee</h3>
                <p className="text-gray-600 leading-relaxed">
                  We stand firmly behind our work with a complete satisfaction guarantee. If you're not entirely 
                  happy with any aspect of our cleaning service, we'll return within 24 hours to re-clean any 
                  areas at no additional charge until you're completely satisfied. Your happiness is our success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Price Calculator */}
      <PriceCalculator />

      {/* Before/After Gallery */}
      <BeforeAfterGallery />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Contact Form Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for a Spotless Home or Office?
            </h2>
            <p className="text-xl leading-relaxed">
              Get your free, no-obligation estimate today and discover why hundreds of families and businesses 
              across Marietta and North Atlanta trust Santos Cleaning Solutions for their cleaning needs. 
              We respond to all inquiries within 2 hours during business hours.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="(770) 123-4567"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="regular">Regular House Cleaning</option>
                    <option value="deep">Deep Cleaning Service</option>
                    <option value="office">Commercial Office Cleaning</option>
                    <option value="move">Move-in/Move-out Cleaning</option>
                    <option value="post-construction">Post-Construction Cleanup</option>
                    <option value="other">Other (specify in message)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                  Property Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="123 Main Street, Marietta, GA 30060"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Details & Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Please tell us about your cleaning needs, home/office size, preferred frequency, any pets, special requirements, or questions you may have..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors inline-flex items-center shadow-lg transform hover:scale-105"
                >
                  Get My Free Estimate Today
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                  * We respect your privacy and will never share your information. We'll contact you within 2 hours 
                  during business hours (Monday-Friday 8AM-6PM, Saturday 9AM-4PM) to schedule your free estimate.
                </p>
              </div>
            </form>
          </div>

          {/* Trust Indicators */}
          <div className="text-center text-white mt-12">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-90">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Licensed & Insured
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                5-Star Rated
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Family-Owned
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Satisfaction Guaranteed
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
} 