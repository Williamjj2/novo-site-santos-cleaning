import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from '../utils/translations';
import { DEFAULT_SERVICES } from '../utils/constants';

const ServicesSection = ({ currentLanguage, services }) => {
  const { t } = useTranslations(currentLanguage);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const displayServices = services?.length > 0 ? services : DEFAULT_SERVICES;

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
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-award text-green-500"></i>
                <span>5-Star Rated Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-clock text-orange-500"></i>
                <span>Same-Day Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-money-bill-wave text-purple-500"></i>
                <span>Free Estimates</span>
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
                    {service.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Price and Duration */}
                  <div className="flex justify-between items-center mb-6 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">
                        ${service.base_price || service.basePrice}
                      </p>
                      <p className="text-xs text-gray-500">Starting from</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-gray-700">
                        {service.duration_hours || service.duration}h
                      </p>
                      <p className="text-xs text-gray-500">Duration</p>
                    </div>
                  </div>

                  {/* Includes List */}
                  {service.includes && service.includes.length > 0 && (
                    <div className="text-left mb-6">
                      <p className="font-semibold text-gray-800 mb-2">Includes:</p>
                      <ul className="space-y-1">
                        {service.includes.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <i className="fas fa-check text-green-500 mr-2 flex-shrink-0"></i>
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                        {service.includes.length > 3 && (
                          <li className="text-sm text-blue-600 font-medium">
                            +{service.includes.length - 3} more included
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  <button
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <i className="fas fa-calendar-alt mr-2"></i>
                    Book This Service
                  </button>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Service Areas */}
          <motion.div variants={itemVariants} className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Serving Premium Areas in Atlanta Metro
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                'Marietta', 'Roswell', 'Alpharetta', 'Sandy Springs', 'Smyrna',
                'Kennesaw', 'Acworth', 'Woodstock', 'Buckhead', 'Cobb County'
              ].map((area, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-600">
                  <i className="fas fa-map-marker-alt text-blue-500"></i>
                  <span className="text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mb-6">
              Professional cleaning services for upscale neighborhoods and luxury homes
            </p>
            
            {/* Emergency Service Badge */}
            <div className="inline-flex items-center space-x-2 bg-red-50 text-red-600 px-4 py-2 rounded-full border border-red-200">
              <i className="fas fa-bolt"></i>
              <span className="font-semibold">Emergency & Same-Day Service Available</span>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Home?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join hundreds of satisfied customers in Atlanta's premium neighborhoods. 
                Get your free, no-obligation estimate today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={scrollToContact}
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <i className="fas fa-calendar-check mr-2"></i>
                  Get Free Estimate
                </button>
                <a
                  href="tel:+18663509407"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Call (866) 350-9407
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