'use client'

import { useState } from 'react'
import { COMPANY_INFO, SERVICES } from '../lib/constants'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
  address: string
  squareFeet: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    address: '',
    squareFeet: ''
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage('')

    // Client-side validation
    if (!formData.name.trim() || formData.name.length < 2) {
      setErrorMessage('Please enter a valid name (minimum 2 characters)')
      setIsLoading(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address')
      setIsLoading(false)
      return
    }

    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      setErrorMessage('Please enter a valid phone number')
      setIsLoading(false)
      return
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      setErrorMessage('Please enter a message (minimum 10 characters)')
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setShowSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          address: '',
          squareFeet: ''
        })
        
        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000)
      } else {
        const errorData = await response.json()
        setErrorMessage(errorData.message || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
          Request Your Free Estimate
        </h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Get a personalized quote for your cleaning needs. We&apos;ll respond within 24 hours with a detailed estimate.
        </p>
      </div>

      {showSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-green-800 font-medium">Thank you! Your message has been sent successfully. We&apos;ll contact you soon!</span>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span className="text-red-800">{errorMessage}</span>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
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
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
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
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-input"
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
              value={formData.service}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Select a service...</option>
              {SERVICES.map((service) => (
                <option key={service.id} value={service.name}>
                  {service.name}
                </option>
              ))}
              <option value="Other">Other / Not Sure</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
              Service Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="form-input"
              placeholder="City, State (e.g., Marietta, GA)"
            />
          </div>
          
          <div>
            <label htmlFor="squareFeet" className="block text-sm font-medium text-gray-700 mb-2">
              Home Size (sq ft)
            </label>
            <select
              id="squareFeet"
              name="squareFeet"
              value={formData.squareFeet}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Select size...</option>
              <option value="under-1000">Under 1,000 sq ft</option>
              <option value="1000-1500">1,000 - 1,500 sq ft</option>
              <option value="1500-2000">1,500 - 2,000 sq ft</option>
              <option value="2000-2500">2,000 - 2,500 sq ft</option>
              <option value="2500-3000">2,500 - 3,000 sq ft</option>
              <option value="3000-4000">3,000 - 4,000 sq ft</option>
              <option value="over-4000">Over 4,000 sq ft</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="form-input form-textarea"
            placeholder="Tell us about your cleaning needs, preferred schedule, or any special requests..."
          />
        </div>
        
        <div className="text-center">
          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary w-full md:w-auto px-8 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="loading-spinner w-5 h-5 mr-3"></div>
                Sending...
              </>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </>
            )}
          </button>
        </div>

        <div className="text-center text-sm text-gray-600 mt-6">
          <p>
            <strong>Quick Response:</strong> We typically respond within 2-4 hours during business hours.
          </p>
          <p className="mt-2">
            For immediate assistance, call us at{' '}
            <a href={`tel:${COMPANY_INFO.phone}`} className="text-blue-600 hover:text-blue-700 font-semibold">
              {COMPANY_INFO.phoneDisplay}
            </a>
          </p>
        </div>
      </form>
    </div>
  )
}
