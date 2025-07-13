import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PriceCalculator = ({ onEstimateReady, currentLanguage }) => {
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
      name: 'Limpeza Regular',
      basePrice: 100,
      description: 'Limpeza de manutenção semanal/quinzenal'
    },
    {
      id: 'deep',
      name: 'Limpeza Profunda',
      basePrice: 250,
      description: 'Limpeza completa de cima a baixo'
    },
    {
      id: 'move',
      name: 'Mudança (Move-in/out)',
      basePrice: 250,
      description: 'Limpeza para mudança'
    }
  ];

  const addOnOptions = [
    { id: 'fridge-oven', name: 'Geladeira & Forno', price: 35 },
    { id: 'laundry', name: 'Serviço de Lavanderia', price: 35 },
    { id: 'cabinets', name: 'Limpeza de Gabinetes', price: 45 },
    { id: 'garage', name: 'Garagem', price: 50 },
    { id: 'basement', name: 'Porão', price: 40 },
    { id: 'windows-exterior', name: 'Janelas Externas', price: 60 }
  ];

  const frequencyMultipliers = {
    'one-time': 1.0,
    'weekly': 0.85,
    'biweekly': 0.90,
    'monthly': 0.95
  };

  const calculateEstimate = () => {
    if (!formData.serviceType || !formData.squareFeet) return null;

    const selectedService = serviceTypes.find(s => s.id === formData.serviceType);
    if (!selectedService) return null;

    let basePrice = selectedService.basePrice;

    // Square footage adjustments
    const sqft = parseInt(formData.squareFeet);
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
      const preFilledMessage = `Olá! Gostaria de um orçamento para:

🏠 Serviço: ${estimate.service}
📏 Metragem: ${estimate.sqft} sq ft
🛏️ Quartos: ${estimate.details.bedrooms} | 🛁 Banheiros: ${estimate.details.bathrooms}
🐕 Pets: ${estimate.details.hasPets ? 'Sim' : 'Não'}
🔄 Frequência: ${estimate.frequency === 'one-time' ? 'Uma vez' : estimate.frequency}
${estimate.details.addOns.length > 0 ? `\n➕ Add-ons: ${estimate.details.addOns.join(', ')}` : ''}

💰 Estimativa Calculada: $${estimate.total}

Por favor, confirme o orçamento e agende uma visita. Obrigado!`;

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
              Calculadora de Preços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Obtenha uma estimativa instantânea personalizada para seu serviço de limpeza
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Configure Seu Serviço</h3>
              
              <div className="space-y-6">
                {/* Service Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Tipo de Serviço *
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
                      Metragem Quadrada (sq ft) *
                    </label>
                    <input
                      type="number"
                      value={formData.squareFeet}
                      onChange={(e) => handleInputChange('squareFeet', e.target.value)}
                      placeholder="Ex: 2500"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Frequência
                    </label>
                    <select
                      value={formData.frequency}
                      onChange={(e) => handleInputChange('frequency', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="one-time">Uma vez</option>
                      <option value="weekly">Semanal (-15%)</option>
                      <option value="biweekly">Quinzenal (-10%)</option>
                      <option value="monthly">Mensal (-5%)</option>
                    </select>
                  </div>
                </div>

                {/* Rooms */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Quartos
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
                      Banheiros
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
                      <span className="font-semibold text-gray-700">Tem animais de estimação?</span>
                      <p className="text-sm text-gray-600">+15% pelo cuidado extra necessário</p>
                    </div>
                    <i className="fas fa-paw text-orange-500"></i>
                  </label>
                </div>

                {/* Add-ons */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Serviços Adicionais (Opcionais)
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
                  Sua Estimativa
                </h3>
                
                {isCalculated && estimate ? (
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">{estimate.service}</h4>
                      <div className="text-sm text-blue-700 space-y-1">
                        <p>🏠 {estimate.sqft} sq ft</p>
                        <p>🛏️ {estimate.details.bedrooms} quartos • 🛁 {estimate.details.bathrooms} banheiros</p>
                        {estimate.details.hasPets && <p>🐕 Com pets</p>}
                        <p>🔄 {estimate.frequency === 'one-time' ? 'Uma vez' : estimate.frequency}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Serviço Base:</span>
                        <span className="font-semibold">${estimate.basePrice}</span>
                      </div>
                      {estimate.addOnsPrice > 0 && (
                        <div className="flex justify-between">
                          <span>Add-ons:</span>
                          <span className="font-semibold">${estimate.addOnsPrice}</span>
                        </div>
                      )}
                      <div className="border-t border-gray-200 pt-2">
                        <div className="flex justify-between text-lg font-bold text-blue-600">
                          <span>Total Estimado:</span>
                          <span>${estimate.total}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleGetQuote}
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      <i className="fas fa-paper-plane mr-2"></i>
                      Solicitar Orçamento
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <i className="fas fa-calculator text-4xl mb-4 text-gray-300"></i>
                    <p>Preencha os dados para ver sua estimativa</p>
                  </div>
                )}
              </div>

              {/* Trust Indicators */}
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h4 className="font-bold text-green-800 mb-3">
                  <i className="fas fa-shield-check mr-2"></i>
                  Garantias Incluídas
                </h4>
                <ul className="space-y-2 text-sm text-green-700">
                  <li className="flex items-center space-x-2">
                    <i className="fas fa-check text-green-600"></i>
                    <span>Orçamento sem compromisso</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="fas fa-check text-green-600"></i>
                    <span>Preços fixos, sem surpresas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="fas fa-check text-green-600"></i>
                    <span>Satisfação 100% garantida</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="fas fa-check text-green-600"></i>
                    <span>Licenciado e segurado</span>
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