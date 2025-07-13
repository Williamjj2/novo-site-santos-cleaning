import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from '../utils/translations';

const PriceCalculator = ({ onEstimateReady, currentLanguage }) => {
  const { t } = useTranslations(currentLanguage);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    serviceType: '',
    squareFeet: '',
    bedrooms: 1,
    bathrooms: 1,
    hasPets: false,
    frequency: 'one-time',
    addOns: [],
    extraInfo: ''
  });

  const [estimate, setEstimate] = useState(null);
  const [isCalculated, setIsCalculated] = useState(false);

  const serviceTypes = [
    {
      id: 'regular',
      name: t('service-regular'),
      basePrice: 100,
      description: t('service-regular-desc')
    },
    {
      id: 'deep',
      name: t('service-deep'),
      basePrice: 250,
      description: t('service-deep-desc')
    },
    {
      id: 'move',
      name: t('service-move'),
      basePrice: 250,
      description: t('service-move-desc')
    }
  ];

  const addOnOptions = [
    { id: 'fridge-oven', name: t('addon-fridge-oven'), price: 35 },
    { id: 'laundry', name: t('addon-laundry'), price: 35 },
    { id: 'cabinets', name: t('addon-cabinets'), price: 45 },
    { id: 'garage', name: t('addon-garage'), price: 50 },
    { id: 'basement', name: t('addon-basement'), price: 40 },
    { id: 'windows-exterior', name: t('addon-windows'), price: 60 }
  ];

  const frequencyMultipliers = {
    'one-time': 1.0,
    'weekly': 0.85,
    'biweekly': 0.90,
    'monthly': 0.95
  };

  const getFrequencyLabel = (frequency) => {
    switch(frequency) {
      case 'one-time': return t('frequency-one-time');
      case 'weekly': return t('frequency-weekly');
      case 'biweekly': return t('frequency-biweekly');
      case 'monthly': return t('frequency-monthly');
      default: return t('frequency-one-time');
    }
  };

  const calculateEstimate = () => {
    if (!formData.serviceType || !formData.squareFeet || parseInt(formData.squareFeet) <= 0) return null;

    const selectedService = serviceTypes.find(s => s.id === formData.serviceType);
    if (!selectedService) return null;

    let basePrice = selectedService.basePrice;

    // Square footage adjustments
    const sqft = parseInt(formData.squareFeet);
    if (isNaN(sqft) || sqft <= 0) return null;
    if (sqft <= 1000) {
      // Small home - no adjustment
    } else if (sqft <= 2000) {
      basePrice *= 1.3; // +30%
    } else if (sqft <= 3000) {
      basePrice *= 1.6; // +60%
    } else if (sqft <= 4000) {
      basePrice *= 1.9; // +90%
    } else {
      basePrice *= 2.2; // +120%
    }

    // Bedroom/bathroom adjustments
    const roomMultiplier = Math.max(1, (formData.bedrooms + formData.bathrooms) / 4);
    basePrice *= roomMultiplier;

    // Pet adjustment
    if (formData.hasPets) {
      basePrice *= 1.15; // +15% for pet hair and extra cleaning
    }

    // Frequency discount
    basePrice *= frequencyMultipliers[formData.frequency];

    // Add-ons
    const addOnTotal = formData.addOns.reduce((total, addOnId) => {
      const addOn = addOnOptions.find(a => a.id === addOnId);
      return total + (addOn ? addOn.price : 0);
    }, 0);

    const subtotal = Math.round(basePrice);
    const total = subtotal + addOnTotal;

    return {
      service: selectedService.name,
      basePrice: subtotal,
      addOnsPrice: addOnTotal,
      total: total,
      sqft: sqft,
      frequency: formData.frequency,
      details: {
        bedrooms: formData.bedrooms,
        bathrooms: formData.bathrooms,
        hasPets: formData.hasPets,
        addOns: formData.addOns.map(id => addOnOptions.find(a => a.id === id)?.name).filter(Boolean)
      }
    };
  };

  useEffect(() => {
    const newEstimate = calculateEstimate();
    setEstimate(newEstimate);
    setIsCalculated(!!newEstimate);
  }, [formData]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddOnToggle = (addOnId) => {
    setFormData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(addOnId)
        ? prev.addOns.filter(id => id !== addOnId)
        : [...prev.addOns, addOnId]
    }));
  };

  const handleGetQuote = () => {
    if (estimate && onEstimateReady) {
      const serviceName = serviceTypes.find(s => s.id === formData.serviceType)?.name || '';
      const frequencyLabel = getFrequencyLabel(formData.frequency);
      
      const preFilledMessage = `${t('calc-greeting')}

🏠 ${t('calc-service')}: ${serviceName}
📏 ${t('calc-sqft')}: ${estimate.sqft} sq ft
🛏️ ${t('calc-bedrooms')}: ${estimate.details.bedrooms} | 🛁 ${t('calc-bathrooms')}: ${estimate.details.bathrooms}
🐕 ${t('calc-pets')}: ${estimate.details.hasPets ? t('calc-yes') : t('calc-no')}
🔄 ${t('calc-frequency')}: ${frequencyLabel}
${estimate.details.addOns.length > 0 ? `\n➕ ${t('calc-addons')}: ${estimate.details.addOns.join(', ')}` : ''}

💰 ${t('calc-estimated-total')}: $${estimate.total}

${t('calc-confirm-message')}`;

      onEstimateReady(preFilledMessage, estimate);
    }
  };

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
              {t('calculator-title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('calculator-subtitle')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('calculator-form-title')}</h3>
              
              <div className="space-y-6">
                {/* Service Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t('service-type-required')}
                  </label>
                  <div className="grid md:grid-cols-3 gap-3">
                    {serviceTypes.map(service => (
                      <button
                        key={service.id}
                        onClick={() => handleInputChange('serviceType', service.id)}
                        className={`p-4 rounded-lg border-2 transition-all text-left ${
                          formData.serviceType === service.id
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="font-semibold">{service.name}</div>
                        <div className="text-sm text-gray-600">${service.basePrice}+</div>
                        <div className="text-xs text-gray-500 mt-1">{service.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Square Footage */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('sqft-required')}
                    </label>
                    <input
                      type="number"
                      value={formData.squareFeet}
                      onChange={(e) => handleInputChange('squareFeet', e.target.value)}
                      placeholder={t('sqft-placeholder')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('frequency-label')}
                    </label>
                    <select
                      value={formData.frequency}
                      onChange={(e) => handleInputChange('frequency', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="one-time">{t('frequency-one-time')}</option>
                      <option value="weekly">{t('frequency-weekly')}</option>
                      <option value="biweekly">{t('frequency-biweekly')}</option>
                      <option value="monthly">{t('frequency-monthly')}</option>
                    </select>
                  </div>
                </div>

                {/* Rooms */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('bedrooms-label')}
                    </label>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleInputChange('bedrooms', Math.max(1, formData.bedrooms - 1))}
                        className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <span className="text-xl font-semibold w-8 text-center">{formData.bedrooms}</span>
                      <button
                        onClick={() => handleInputChange('bedrooms', formData.bedrooms + 1)}
                        className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center"
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('bathrooms-label')}
                    </label>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleInputChange('bathrooms', Math.max(1, formData.bathrooms - 1))}
                        className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <span className="text-xl font-semibold w-8 text-center">{formData.bathrooms}</span>
                      <button
                        onClick={() => handleInputChange('bathrooms', formData.bathrooms + 1)}
                        className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center"
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Pets */}
                <div>
                  <label className="flex items-center space-x-3 cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.hasPets}
                      onChange={(e) => handleInputChange('hasPets', e.target.checked)}
                      className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <div className="flex-1">
                      <span className="font-semibold text-gray-700">{t('pets-label')}</span>
                      <p className="text-sm text-gray-600">{t('pets-description')}</p>
                    </div>
                    <i className="fas fa-paw text-orange-500"></i>
                  </label>
                </div>

                {/* Add-ons */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t('addons-label')}
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {addOnOptions.map(addOn => (
                      <label
                        key={addOn.id}
                        className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.addOns.includes(addOn.id)}
                          onChange={() => handleAddOnToggle(addOn.id)}
                          className="w-4 h-4 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <div className="flex-1">
                          <span className="font-medium text-gray-700">{addOn.name}</span>
                          <span className="text-blue-600 font-semibold"> +${addOn.price}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Estimate Display */}
            <div className="space-y-6">
              {/* Live Estimate */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  <i className="fas fa-calculator text-blue-500 mr-2"></i>
                  {t('estimate-title')}
                </h3>
                
                {isCalculated && estimate ? (
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">{estimate.service}</h4>
                      <div className="text-sm text-blue-700 space-y-1">
                        <p>🏠 {estimate.sqft} sq ft</p>
                        <p>🛏️ {estimate.details.bedrooms} {t('bedrooms-label').toLowerCase()} • 🛁 {estimate.details.bathrooms} {t('bathrooms-label').toLowerCase()}</p>
                        {estimate.details.hasPets && <p>🐕 {currentLanguage === 'es' ? 'Con mascotas' : currentLanguage === 'pt' ? 'Com pets' : 'With pets'}</p>}
                        <p>🔄 {getFrequencyLabel(estimate.frequency)}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>{t('estimate-base-service')}</span>
                        <span className="font-semibold">${estimate.basePrice}</span>
                      </div>
                      {estimate.addOnsPrice > 0 && (
                        <div className="flex justify-between">
                          <span>{t('estimate-addons')}</span>
                          <span className="font-semibold">${estimate.addOnsPrice}</span>
                        </div>
                      )}
                      <div className="border-t border-gray-200 pt-2">
                        <div className="flex justify-between text-lg font-bold text-blue-600">
                          <span>{t('estimate-total')}</span>
                          <span>${estimate.total}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleGetQuote}
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      <i className="fas fa-paper-plane mr-2"></i>
                      {t('request-quote')}
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <i className="fas fa-calculator text-4xl mb-4 text-gray-300"></i>
                    <p>{t('estimate-placeholder')}</p>
                  </div>
                )}
              </div>

              {/* Trust Indicators */}
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h4 className="font-bold text-green-800 mb-3">
                  <i className="fas fa-shield-check mr-2"></i>
                  {t('guarantees-title')}
                </h4>
                <ul className="space-y-2 text-sm text-green-700">
                  <li className="flex items-center space-x-2">
                    <i className="fas fa-check text-green-600"></i>
                    <span>{t('guarantee-no-commitment')}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="fas fa-check text-green-600"></i>
                    <span>{t('guarantee-fixed-prices')}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="fas fa-check text-green-600"></i>
                    <span>{t('guarantee-satisfaction')}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="fas fa-check text-green-600"></i>
                    <span>{t('guarantee-licensed')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceCalculator;