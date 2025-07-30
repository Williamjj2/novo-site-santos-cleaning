'use client'

import { useState, useEffect } from 'react'
import { SERVICES, PRICING_FACTORS } from '../lib/constants'

interface CalculatorState {
  service: string
  squareFeet: number
  frequency: string
  addons: string[]
  estimatedPrice: number
  discount: number
}

export default function PriceCalculator() {
  const [calculator, setCalculator] = useState<CalculatorState>({
    service: '',
    squareFeet: 1500,
    frequency: 'one-time',
    addons: [],
    estimatedPrice: 0,
    discount: 0
  })

  const [showResults, setShowResults] = useState(false)

  // Calculate price whenever inputs change
  useEffect(() => {
    calculatePrice()
  }, [calculator.service, calculator.squareFeet, calculator.frequency, calculator.addons])

  const calculatePrice = () => {
    if (!calculator.service) {
      setCalculator(prev => ({ ...prev, estimatedPrice: 0, discount: 0 }))
      setShowResults(false)
      return
    }

    const service = SERVICES.find(s => s.id === calculator.service)
    if (!service) return

    // Base price calculation
    let basePrice = 0
    const serviceKey = calculator.service as keyof typeof PRICING_FACTORS.baseRates
    const rate = PRICING_FACTORS.baseRates[serviceKey]
    const minPrice = PRICING_FACTORS.minimumPrices[serviceKey]

    if (rate && minPrice) {
      basePrice = Math.max(calculator.squareFeet * rate, minPrice)
    }

    // Add addons
    let addonTotal = 0
    calculator.addons.forEach(addon => {
      const addonPrice = PRICING_FACTORS.addons[addon as keyof typeof PRICING_FACTORS.addons]
      if (addonPrice) {
        addonTotal += addonPrice
      }
    })

    // Calculate frequency discount
    let discount = 0
    let discountAmount = 0
    if (calculator.frequency !== 'one-time') {
      const discountRate = PRICING_FACTORS.discounts[calculator.frequency as keyof typeof PRICING_FACTORS.discounts]
      if (typeof discountRate === 'number') {
        discount = discountRate
        discountAmount = basePrice * discount
      }
    }

    const finalPrice = Math.round(basePrice + addonTotal - discountAmount)

    setCalculator(prev => ({
      ...prev,
      estimatedPrice: finalPrice,
      discount: Math.round(discountAmount)
    }))
    setShowResults(true)
  }

  const handleServiceChange = (serviceId: string) => {
    setCalculator(prev => ({ ...prev, service: serviceId }))
  }

  const handleSquareFeetChange = (sqft: number) => {
    setCalculator(prev => ({ ...prev, squareFeet: sqft }))
  }

  const handleFrequencyChange = (frequency: string) => {
    setCalculator(prev => ({ ...prev, frequency }))
  }

  const handleAddonToggle = (addon: string) => {
    setCalculator(prev => ({
      ...prev,
      addons: prev.addons.includes(addon)
        ? prev.addons.filter(a => a !== addon)
        : [...prev.addons, addon]
    }))
  }

  const getFrequencyLabel = (freq: string) => {
    const labels: { [key: string]: string } = {
      'one-time': 'One-time cleaning',
      'weekly': 'Weekly (15% off)',
      'biweekly': 'Bi-weekly (10% off)',
      'monthly': 'Monthly (5% off)'
    }
    return labels[freq] || freq
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
            Get Your Instant Estimate
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our smart calculator to get an accurate estimate for your cleaning needs. 
            All prices include supplies, equipment, and our satisfaction guarantee.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your Price</h3>
              
              {/* Service Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Service Type *
                </label>
                <div className="grid gap-3">
                  {SERVICES.filter(s => !s.addon).map((service) => (
                    <label
                      key={service.id}
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        calculator.service === service.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={service.id}
                        checked={calculator.service === service.id}
                        onChange={(e) => handleServiceChange(e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-900">{service.name}</span>
                          <span className="text-blue-600 font-bold">Starting ${service.startingPrice}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{service.shortDescription}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Square Footage */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Home Size: {calculator.squareFeet.toLocaleString()} sq ft
                </label>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  value={calculator.squareFeet}
                  onChange={(e) => handleSquareFeetChange(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>500 sq ft</span>
                  <span>5,000 sq ft</span>
                </div>
              </div>

              {/* Frequency */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Cleaning Frequency
                </label>
                <select
                  value={calculator.frequency}
                  onChange={(e) => handleFrequencyChange(e.target.value)}
                  className="w-full form-input"
                >
                  <option value="one-time">One-time cleaning</option>
                  <option value="weekly">Weekly (Save 15%)</option>
                  <option value="biweekly">Bi-weekly (Save 10%)</option>
                  <option value="monthly">Monthly (Save 5%)</option>
                </select>
              </div>

              {/* Add-ons */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Optional Add-ons
                </label>
                <div className="space-y-2">
                  {Object.entries(PRICING_FACTORS.addons).map(([addon, price]) => (
                    <label
                      key={addon}
                      className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={calculator.addons.includes(addon)}
                          onChange={() => handleAddonToggle(addon)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="ml-3 text-gray-700">
                          {addon.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </span>
                      </div>
                      <span className="text-blue-600 font-semibold">+${price}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:pl-8">
              <div className="bg-gray-50 rounded-xl p-6 h-fit sticky top-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Estimate</h3>
                
                {showResults ? (
                  <div>
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Service:</span>
                        <span className="font-semibold">
                          {SERVICES.find(s => s.id === calculator.service)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Home Size:</span>
                        <span className="font-semibold">{calculator.squareFeet.toLocaleString()} sq ft</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Frequency:</span>
                        <span className="font-semibold">{getFrequencyLabel(calculator.frequency)}</span>
                      </div>
                      {calculator.addons.length > 0 && (
                        <div className="flex justify-between items-start">
                          <span className="text-gray-600">Add-ons:</span>
                          <div className="text-right">
                            {calculator.addons.map(addon => (
                              <div key={addon} className="text-sm">
                                {addon.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {calculator.discount > 0 && (
                        <div className="flex justify-between items-center text-green-600">
                          <span>Frequency Discount:</span>
                          <span className="font-semibold">-${calculator.discount}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center text-2xl font-bold text-blue-600">
                        <span>Estimated Total:</span>
                        <span>${calculator.estimatedPrice}</span>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <a
                        href="/contact"
                        className="btn-primary w-full justify-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Book This Cleaning
                      </a>
                      <a
                        href="tel:+18663509407"
                        className="btn-secondary w-full justify-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call (866) 350-9407
                      </a>
                    </div>

                    <div className="mt-4 text-sm text-gray-600 text-center">
                      <p>💰 Price includes all supplies & equipment</p>
                      <p>🛡️ 100% satisfaction guarantee</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-lg font-medium">Select a service to see your estimate</p>
                    <p className="text-sm">Choose your cleaning type to get started</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            <strong>Note:</strong> This is an estimated price based on average conditions. 
            Final pricing may vary based on specific requirements, accessibility, and current home condition. 
            All estimates include a free in-home consultation.
          </p>
        </div>
      </div>
    </section>
  )
}
