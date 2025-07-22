import React, { useState, useEffect, useCallback, useMemo } from 'react';
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
    addOns: []
  });

  const [estimate, setEstimate] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  // Configurações com preços mais competitivos
  const serviceTypes = useMemo(() => [
    {
      id: 'regular',
      name: t('service-regular'),
      basePrice: 80, // Reduzido de 100
      minPrice: 60, // Preço mínimo
      description: t('service-regular-desc')
    },
    {
      id: 'deep',
      name: t('service-deep'),
      basePrice: 150, // Reduzido de 250
      minPrice: 120,
      description: t('service-deep-desc')
    },
    {
      id: 'move',
      name: t('service-move'),
      basePrice: 180, // Reduzido de 250
      minPrice: 150,
      description: t('service-move-desc')
    }
  ], [t]);

  // Adicionais com preços mais acessíveis
  const addOnOptions = useMemo(() => [
    { id: 'fridge-oven', name: t('addon-fridge-oven'), price: 25 }, // Reduzido de 35
    { id: 'laundry', name: t('addon-laundry'), price: 25 },
    { id: 'cabinets', name: t('addon-cabinets'), price: 30 }, // Reduzido de 45
    { id: 'garage', name: t('addon-garage'), price: 35 }, // Reduzido de 50
    { id: 'basement', name: t('addon-basement'), price: 30 }, // Reduzido de 40
    { id: 'windows-exterior', name: t('addon-windows'), price: 45 } // Reduzido de 60
  ], [t]);

  // Multiplicadores mais suaves - usando useMemo para evitar recriação
  const frequencyMultipliers = useMemo(() => ({
    'one-time': 1.0,
    'weekly': 0.80, // Mais desconto: 20%
    'biweekly': 0.85, // Mais desconto: 15%
    'monthly': 0.90  // Mais desconto: 10%
  }), []);

  // Limites e validações - usando useMemo para evitar recriação
  const LIMITS = useMemo(() => ({
    minSqft: 500,
    maxSqft: 10000,
    minBedrooms: 0,
    maxBedrooms: 10,
    minBathrooms: 1,
    maxBathrooms: 8
  }), []);

  const getFrequencyLabel = useCallback((frequency) => {
    const labels = {
      'one-time': t('frequency-one-time'),
      'weekly': t('frequency-weekly'),
      'biweekly': t('frequency-biweekly'),
      'monthly': t('frequency-monthly')
    };
    return labels[frequency] || labels['one-time'];
  }, [t]);

  const validateForm = useCallback(() => {
    const newErrors = {};
    
    if (!formData.serviceType) {
      newErrors.serviceType = currentLanguage === 'es' ? 'Seleccione un tipo de servicio' : 
                              currentLanguage === 'pt' ? 'Selecione um tipo de serviço' : 
                              'Please select a service type';
    }
    
    const sqft = parseInt(formData.squareFeet);
    if (!formData.squareFeet || isNaN(sqft)) {
      newErrors.squareFeet = currentLanguage === 'es' ? 'Ingrese los pies cuadrados' :
                             currentLanguage === 'pt' ? 'Digite a metragem' :
                             'Please enter square footage';
    } else if (sqft < LIMITS.minSqft || sqft > LIMITS.maxSqft) {
      newErrors.squareFeet = currentLanguage === 'es' ? `Entre ${LIMITS.minSqft} y ${LIMITS.maxSqft} sq ft` :
                             currentLanguage === 'pt' ? `Entre ${LIMITS.minSqft} e ${LIMITS.maxSqft} sq ft` :
                             `Between ${LIMITS.minSqft} and ${LIMITS.maxSqft} sq ft`;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData.serviceType, formData.squareFeet, currentLanguage, LIMITS]);

  const calculateEstimate = useCallback(() => {
    if (!validateForm()) {
      return null;
    }

    setIsCalculating(true);
    
    // Simular cálculo com pequeno delay para feedback visual
    setTimeout(() => {
      const selectedService = serviceTypes.find(s => s.id === formData.serviceType);
      if (!selectedService) {
        setIsCalculating(false);
        return null;
      }

      let basePrice = selectedService.basePrice;

      // Ajustes mais suaves por metragem
      const sqft = parseInt(formData.squareFeet);
      if (sqft <= 1000) {
        // Casas pequenas - sem ajuste
      } else if (sqft <= 2000) {
        basePrice *= 1.20; // +20% (reduzido de 30%)
      } else if (sqft <= 3000) {
        basePrice *= 1.35; // +35% (reduzido de 60%)
      } else if (sqft <= 4000) {
        basePrice *= 1.50; // +50% (reduzido de 90%)
      } else {
        basePrice *= 1.70; // +70% (reduzido de 120%)
      }

      // Ajuste mais suave por cômodos
      const roomMultiplier = Math.max(1, (formData.bedrooms + formData.bathrooms) / 6); // Mudado de /4 para /6
      basePrice *= roomMultiplier;

      // Ajuste por pets mais razoável
      if (formData.hasPets) {
        basePrice *= 1.10; // +10% (reduzido de 15%)
      }

      // Aplicar desconto de frequência
      basePrice *= frequencyMultipliers[formData.frequency];

      // Calcular adicionais
      const addOnTotal = formData.addOns.reduce((total, addOnId) => {
        const addOn = addOnOptions.find(a => a.id === addOnId);
        return total + (addOn ? addOn.price : 0);
      }, 0);

      // Garantir preço mínimo
      const subtotal = Math.max(Math.round(basePrice), selectedService.minPrice);
      const total = subtotal + addOnTotal;

      const result = {
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
      
      setEstimate(result);
      setIsCalculating(false);
    }, 300);
  }, [formData, serviceTypes, addOnOptions, frequencyMultipliers, validateForm]);

  // Debounce para performance
  useEffect(() => {
    const timer = setTimeout(() => {
      if (formData.serviceType && formData.squareFeet) {
        calculateEstimate();
      } else {
        setEstimate(null);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [formData, calculateEstimate]);

  const handleInputChange = useCallback((field, value) => {
    // Validações específicas por campo
    if (field === 'bedrooms' || field === 'bathrooms') {
      const limits = field === 'bedrooms' ? 
        { min: LIMITS.minBedrooms, max: LIMITS.maxBedrooms } :
        { min: LIMITS.minBathrooms, max: LIMITS.maxBathrooms };
      
      value = Math.max(limits.min, Math.min(limits.max, value));
    }

    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Limpar erro do campo quando usuário começa a digitar
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  }, [errors, LIMITS]);

  const handleAddOnToggle = useCallback((addOnId) => {
    setFormData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(addOnId)
        ? prev.addOns.filter(id => id !== addOnId)
        : [...prev.addOns, addOnId]
    }));
  }, []);

  const handleGetQuote = useCallback(() => {
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

💰 ${t('calc-estimated-total')}: $${estimate.total}*

${t('calc-confirm-message')}`;

      onEstimateReady(preFilledMessage, estimate);
    }
  }, [estimate, onEstimateReady, formData.serviceType, formData.frequency, serviceTypes, getFrequencyLabel, t]);

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
            {/* Disclaimer importante */}
            <p className="text-sm text-gray-500 mt-3 italic">
              {currentLanguage === 'es' ? '* Precios estimados a partir de. Sujetos a confirmación en la primera visita.' :
               currentLanguage === 'pt' ? '* Preços estimados a partir de. Sujeitos a confirmação na primeira visita.' :
               '* Estimated starting prices. Subject to confirmation on first visit.'}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('calculator-form-title')}</h3>
              
              <div className="space-y-6">
                {/* Service Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t('service-type-required')}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {serviceTypes.map(service => (
                      <button
                        key={service.id}
                        onClick={() => handleInputChange('serviceType', service.id)}
                        className={`p-4 rounded-lg border-2 transition-all text-left ${
                          formData.serviceType === service.id
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                        aria-label={`${service.name} - ${currentLanguage === 'es' ? 'desde' : currentLanguage === 'pt' ? 'a partir de' : 'from'} $${service.minPrice}`}
                      >
                        <div className="font-semibold">{service.name}</div>
                        <div className="text-sm text-gray-600">
                          {currentLanguage === 'es' ? 'desde' : currentLanguage === 'pt' ? 'a partir de' : 'from'} ${service.minPrice}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{service.description}</div>
                      </button>
                    ))}
                  </div>
                  {errors.serviceType && (
                    <p className="text-red-500 text-sm mt-2" role="alert">{errors.serviceType}</p>
                  )}
                </div>

                {/* Square Footage */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="squareFeet">
                      {t('sqft-required')}
                    </label>
                    <input
                      id="squareFeet"
                      type="number"
                      min={LIMITS.minSqft}
                      max={LIMITS.maxSqft}
                      value={formData.squareFeet}
                      onChange={(e) => handleInputChange('squareFeet', e.target.value)}
                      placeholder={t('sqft-placeholder')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.squareFeet ? 'border-red-500' : 'border-gray-300'
                      }`}
                      aria-invalid={!!errors.squareFeet}
                      aria-describedby={errors.squareFeet ? 'sqft-error' : undefined}
                    />
                    {errors.squareFeet && (
                      <p id="sqft-error" className="text-red-500 text-sm mt-1" role="alert">{errors.squareFeet}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="frequency">
                      {t('frequency-label')}
                    </label>
                    <select
                      id="frequency"
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

                {/* Rooms - Melhorado para mobile */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('bedrooms-label')}
                    </label>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleInputChange('bedrooms', formData.bedrooms - 1)}
                        disabled={formData.bedrooms <= LIMITS.minBedrooms}
                        className="w-12 h-12 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors"
                        aria-label={currentLanguage === 'es' ? 'Disminuir habitaciones' : currentLanguage === 'pt' ? 'Diminuir quartos' : 'Decrease bedrooms'}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <span className="text-xl font-semibold w-12 text-center" aria-live="polite">
                        {formData.bedrooms}
                      </span>
                      <button
                        onClick={() => handleInputChange('bedrooms', formData.bedrooms + 1)}
                        disabled={formData.bedrooms >= LIMITS.maxBedrooms}
                        className="w-12 h-12 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors"
                        aria-label={currentLanguage === 'es' ? 'Aumentar habitaciones' : currentLanguage === 'pt' ? 'Aumentar quartos' : 'Increase bedrooms'}
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
                        onClick={() => handleInputChange('bathrooms', formData.bathrooms - 1)}
                        disabled={formData.bathrooms <= LIMITS.minBathrooms}
                        className="w-12 h-12 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors"
                        aria-label={currentLanguage === 'es' ? 'Disminuir baños' : currentLanguage === 'pt' ? 'Diminuir banheiros' : 'Decrease bathrooms'}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <span className="text-xl font-semibold w-12 text-center" aria-live="polite">
                        {formData.bathrooms}
                      </span>
                      <button
                        onClick={() => handleInputChange('bathrooms', formData.bathrooms + 1)}
                        disabled={formData.bathrooms >= LIMITS.maxBathrooms}
                        className="w-12 h-12 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors"
                        aria-label={currentLanguage === 'es' ? 'Aumentar baños' : currentLanguage === 'pt' ? 'Aumentar banheiros' : 'Increase bathrooms'}
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
                      aria-describedby="pets-description"
                    />
                    <div className="flex-1">
                      <span className="font-semibold text-gray-700">{t('pets-label')}</span>
                      <p id="pets-description" className="text-sm text-gray-600">{t('pets-description')}</p>
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
                          aria-label={`${addOn.name} - ${currentLanguage === 'es' ? 'adicional' : currentLanguage === 'pt' ? 'adicional' : 'add'} $${addOn.price}`}
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
                
                {isCalculating ? (
                  <div className="text-center py-8">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    <p className="text-gray-600 mt-2">
                      {currentLanguage === 'es' ? 'Calculando...' : currentLanguage === 'pt' ? 'Calculando...' : 'Calculating...'}
                    </p>
                  </div>
                ) : estimate ? (
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">{estimate.service}</h4>
                      <div className="text-sm text-blue-700 space-y-1">
                        <p>🏠 {estimate.sqft} sq ft</p>
                        <p>🛏️ {estimate.details.bedrooms} {t('bedrooms-label').toLowerCase()} • 🛁 {estimate.details.bathrooms} {t('bathrooms-label').toLowerCase()}</p>
                        {estimate.details.hasPets && (
                          <p>🐕 {currentLanguage === 'es' ? 'Con mascotas' : currentLanguage === 'pt' ? 'Com pets' : 'With pets'}</p>
                        )}
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
                          <span>
                            {currentLanguage === 'es' ? 'desde ' : currentLanguage === 'pt' ? 'a partir de ' : 'from '}
                            ${estimate.total}*
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Disclaimer na estimativa */}
                    <p className="text-xs text-gray-500 italic">
                      {currentLanguage === 'es' ? '* Precio final confirmado en visita' :
                       currentLanguage === 'pt' ? '* Preço final confirmado na visita' :
                       '* Final price confirmed on visit'}
                    </p>

                    <button
                      onClick={handleGetQuote}
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                      aria-label={t('request-quote')}
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
                    <span>
                      {currentLanguage === 'es' ? 'Precios desde $60 - confirmados en visita' :
                       currentLanguage === 'pt' ? 'Preços a partir de $60 - confirmados na visita' :
                       'Prices from $60 - confirmed on visit'}
                    </span>
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