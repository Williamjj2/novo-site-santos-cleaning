import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from '../utils/translations';
import { DEFAULT_SERVICES, SERVICE_AREAS } from '../utils/constants';

const ServicesSection = ({ currentLanguage, services }) => {
  const { t } = useTranslations(currentLanguage);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const displayServices = services?.length > 0 ? services : DEFAULT_SERVICES;

  // Create mapping from service names to translation keys
  const getServiceTranslationKey = (service) => {
    const serviceNameMap = {
      'Deep Cleaning': 'deep-cleaning',
      'Regular Maintenance': 'regular-maintenance',
      'Move-In / Move-Out Cleaning': 'move-in-out',
      'Fridge & Oven Add-On': 'appliance-cleaning',
      'Laundry Service Add-On': 'laundry-services',
      'Cabinet Deep Clean Add-On': 'cabinet-cleaning',
      'Limpeza Profunda': 'deep-cleaning',
      'Manutenção Regular': 'regular-maintenance',
      'Limpeza de Mudança': 'move-in-out',
      'Limpeza de Geladeira e Forno': 'appliance-cleaning',
      'Serviço de Lavanderia': 'laundry-services',
      'Limpeza Profunda de Armários': 'cabinet-cleaning'
    };
    
    return serviceNameMap[service.name] || service.id;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="services" 
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&h=1080&fit=crop&crop=center')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
              {t('services-title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              {t('services-subtitle')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <i className="fas fa-shield-alt text-blue-500"></i>
                <span>{t('services-trust-licensed')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-award text-green-500"></i>
                <span>{t('services-trust-rated')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-clock text-orange-500"></i>
                <span>{t('services-trust-response')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-money-bill-wave text-purple-500"></i>
                <span>{t('services-trust-estimates')}</span>
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayServices.map((service, index) => (
              <motion.div
                key={service.id || index}
                variants={itemVariants}
                className="service-card bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Service Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color || 'from-blue-500 to-blue-600'} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <i className={`fas ${service.icon || 'fa-broom'} text-white text-2xl`}></i>
                </div>

                {/* Service Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                    {t(`service-${service.id}-name`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {t(`service-${service.id}-desc`)}
                  </p>

                  {/* Price and Duration */}
                  <div className="flex justify-between items-center mb-6 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">
                        ${service.base_price || service.basePrice}
                      </p>
                      <p className="text-xs text-gray-500">{t('services-price-starting')}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-gray-700">
                        {service.duration_hours || service.duration}h
                      </p>
                      <p className="text-xs text-gray-500">{t('services-duration-label')}</p>
                    </div>
                  </div>

                  {/* Includes List */}
                  <div className="text-left mb-6">
                    <p className="font-semibold text-gray-800 mb-2">{t('services-includes-label')}</p>
                    <ul className="space-y-1">
                      {Array.from({length: 4}, (_, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <i className="fas fa-check text-green-500 mr-2 flex-shrink-0"></i>
                          <span className="line-clamp-1">{t(`service-${service.id}-includes-${idx + 1}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <i className="fas fa-calendar-alt mr-2"></i>
                    {t('services-book-service')}
                  </button>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Service Areas - Comprehensive Atlanta Metro */}
          <motion.div variants={itemVariants} className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center space-x-2">
              <i className="fas fa-map-marked-alt text-blue-500"></i>
              <span>{t('services-serving-title')}</span>
            </h3>
            
            {/* Premium Areas Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
              {[
                // Tier 1 - Ultra Premium
                { area: 'Buckhead', tier: 'premium' },
                { area: 'Vinings', tier: 'premium' },
                { area: 'East Cobb', tier: 'premium' },
                { area: 'Alpharetta', tier: 'premium' },
                
                // Tier 2 - Premium
                { area: 'Marietta', tier: 'standard' },
                { area: 'Roswell', tier: 'standard' },
                { area: 'Sandy Springs', tier: 'standard' },
                { area: 'Dunwoody', tier: 'standard' },
                { area: 'Johns Creek', tier: 'standard' },
                { area: 'Milton', tier: 'standard' },
                { area: 'Smyrna', tier: 'standard' },
                { area: 'Kennesaw', tier: 'standard' }
              ].map((location, index) => (
                <div key={index} className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                  location.tier === 'premium' 
                    ? 'bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200' 
                    : 'bg-blue-50 border border-blue-200'
                }`}>
                  <i className={`fas fa-map-marker-alt ${
                    location.tier === 'premium' ? 'text-yellow-600' : 'text-blue-500'
                  }`}></i>
                  <span className={`text-sm font-medium ${
                    location.tier === 'premium' ? 'text-yellow-800' : 'text-gray-700'
                  }`}>
                    {location.area}
                  </span>
                  {location.tier === 'premium' && (
                    <i className="fas fa-crown text-yellow-500 text-xs"></i>
                  )}
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">
                  <i className="fas fa-shield-alt mr-2"></i>
                  {t('services-guarantee-licensed-title')}
                </h4>
                <p className="text-sm text-green-700">{t('services-guarantee-licensed-desc')}</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">
                  <i className="fas fa-clock mr-2"></i>
                  {t('services-guarantee-sameday-title')}
                </h4>
                <p className="text-sm text-blue-700">{t('services-guarantee-sameday-desc')}</p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-2">
                  <i className="fas fa-award mr-2"></i>
                  {t('services-guarantee-satisfaction-title')}
                </h4>
                <p className="text-sm text-purple-700">{t('services-guarantee-satisfaction-desc')}</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              <strong>{t('services-luxury-specialists')}</strong> {t('services-luxury-desc')}
              <span className="text-blue-600 font-medium">{t('services-luxury-consultation')}</span>
            </p>
            
            {/* Service Areas Expansion */}
            <details className="text-left">
              <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 inline-flex items-center space-x-2">
                <span>{t('services-view-communities')}</span>
                <i className="fas fa-chevron-down text-sm"></i>
              </summary>
              <div className="mt-4 grid grid-cols-3 md:grid-cols-5 gap-2 text-sm text-gray-600">
                {SERVICE_AREAS.slice(12).map((area, index) => (
                  <div key={index} className="flex items-center space-x-1">
                    <i className="fas fa-map-pin text-blue-400 text-xs"></i>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </details>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                {t('services-transform-title')}
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                {t('services-transform-desc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={scrollToContact}
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <i className="fas fa-calendar-check mr-2"></i>
                  {t('services-get-estimate')}
                </button>
                <a
                  href="tel:+18663509407"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  <i className="fas fa-phone mr-2"></i>
                  {t('services-call-phone')}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;