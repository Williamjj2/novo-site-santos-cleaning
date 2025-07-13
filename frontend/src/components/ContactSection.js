import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import toast from 'react-hot-toast';
import { useTranslations } from '../utils/translations';
import { COMPANY_INFO, VALIDATION_PATTERNS, ERROR_MESSAGES } from '../utils/constants';
import { apiService } from '../services/api';

const ContactSection = ({ currentLanguage }) => {
  const { t } = useTranslations(currentLanguage);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    sms_consent: false
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = ERROR_MESSAGES.required;
    } else if (!VALIDATION_PATTERNS.name.test(formData.name)) {
      newErrors.name = ERROR_MESSAGES.name;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = ERROR_MESSAGES.required;
    } else if (!VALIDATION_PATTERNS.phone.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = ERROR_MESSAGES.phone;
    }

    if (!formData.email.trim()) {
      newErrors.email = ERROR_MESSAGES.required;
    } else if (!VALIDATION_PATTERNS.email.test(formData.email)) {
      newErrors.email = ERROR_MESSAGES.email;
    }

    if (!formData.sms_consent) {
      newErrors.sms_consent = 'SMS consent is required to proceed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Por favor, corrija os erros no formulário');
      return;
    }

    setIsLoading(true);

    try {
      const response = await apiService.submitContact({
        ...formData,
        language: currentLanguage,
        source: 'santos_website_lp'
      });

      if (response.success) {
        toast.success(t('form-success'));
        
        // Track conversion
        if (window.gtag) {
          window.gtag('event', 'form_submit', {
            'form_type': 'contact_lead',
            'language': currentLanguage,
            'source': 'landing_page'
          });
        }
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
          sms_consent: false
        });
        setErrors({});
      }
    } catch (error) {
      console.error('Contact submission error:', error);
      toast.error('Erro ao enviar formulário. Tente novamente ou ligue diretamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'phone') {
      // Format phone number
      const cleaned = value.replace(/\D/g, '');
      let formatted = cleaned;
      if (cleaned.length >= 6) {
        formatted = cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
      } else if (cleaned.length >= 3) {
        formatted = cleaned.replace(/(\d{3})(\d{3})/, '($1) $2-');
      }
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else {
      setFormData(prev => ({ 
        ...prev, 
        [name]: type === 'checkbox' ? checked : value 
      }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
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

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&crop=center')`,
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
              {t('contact-title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              {t('contact-subtitle')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
            
            {/* Urgency Indicator */}
            <div className="mt-8 inline-flex items-center space-x-2 bg-green-50 text-green-700 px-6 py-3 rounded-full border border-green-200">
              <i className="fas fa-clock animate-pulse"></i>
              <span className="font-semibold">Response in 24 hours or less • Free estimates</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {t('form-title')}
                  </h3>
                  <div className="flex items-center space-x-2 text-green-600">
                    <i className="fas fa-shield-alt"></i>
                    <span className="text-sm font-medium">100% Secure</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">
                        <i className="fas fa-user mr-2"></i>
                        {t('form-name')} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`form-input ${errors.name ? 'border-red-500 focus:border-red-500' : 'focus:border-blue-500'}`}
                        placeholder="Seu nome completo"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <i className="fas fa-exclamation-circle mr-1"></i>
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="form-label">
                        <i className="fas fa-phone mr-2"></i>
                        {t('form-phone')} *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`form-input ${errors.phone ? 'border-red-500 focus:border-red-500' : 'focus:border-blue-500'}`}
                        placeholder="(XXX) XXX-XXXX"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <i className="fas fa-exclamation-circle mr-1"></i>
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="form-label">
                      <i className="fas fa-envelope mr-2"></i>
                      {t('form-email')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-input ${errors.email ? 'border-red-500 focus:border-red-500' : 'focus:border-blue-500'}`}
                      placeholder="seu@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <i className="fas fa-exclamation-circle mr-1"></i>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="form-label">
                      <i className="fas fa-comment mr-2"></i>
                      {t('form-message')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="form-input form-textarea focus:border-blue-500"
                      placeholder={t('form-placeholder')}
                    />
                  </div>

                  {/* SMS Consent */}
                  <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <i className="fas fa-mobile-alt text-white"></i>
                      </div>
                      <h4 className="text-lg font-bold text-gray-800">
                        {t('sms-consent-title')}
                      </h4>
                    </div>

                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="sms_consent"
                        checked={formData.sms_consent}
                        onChange={handleInputChange}
                        className="mt-1 w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <div className="text-sm text-gray-700">
                        <strong className="text-blue-800">
                          {t('sms-consent-text')}
                        </strong>
                        <span> {t('sms-consent-details')}</span>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
                          <li>{t('sms-item-1')}</li>
                          <li>{t('sms-item-2')}</li>
                          <li>{t('sms-item-3')}</li>
                          <li>{t('sms-item-4')}</li>
                        </ul>
                        <div className="mt-3 text-xs text-gray-600">
                          <p><strong>Frequência:</strong> 2-4 mensagens/mês | <strong>Cancelar:</strong> Responda STOP | <strong>Ajuda:</strong> Responda HELP</p>
                          <p>Tarifas de mensagens podem se aplicar. Suas informações estão protegidas.</p>
                        </div>
                      </div>
                    </label>
                    {errors.sms_consent && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <i className="fas fa-exclamation-circle mr-1"></i>
                        {errors.sms_consent}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <div className="loading-spinner mr-2"></div>
                        Processando...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <i className="fas fa-paper-plane mr-2"></i>
                        {t('form-submit')}
                      </span>
                    )}
                  </button>
                </form>

                <p className="text-xs text-gray-600 mt-4 text-center">
                  Ao enviar este formulário, você concorda com nossa Política de Privacidade e Termos de Serviço.
                </p>
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <i className="fas fa-info-circle text-blue-500 mr-2"></i>
                  Informações de Contato
                </h3>

                <div className="space-y-4">
                  <a
                    href="tel:+18663509407"
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <i className="fas fa-phone text-white"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Telefone</p>
                      <p className="font-bold text-gray-800 text-lg">(866) 350-9407</p>
                      <p className="text-xs text-green-600">Ligue agora!</p>
                    </div>
                  </a>

                  <div className="flex items-center space-x-4 p-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-white"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Localização</p>
                      <p className="font-bold text-gray-800">Marietta, GA</p>
                      <p className="text-xs text-blue-600">Atendemos Atlanta Metro</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <i className="fas fa-clock text-white"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Horário</p>
                      <p className="font-bold text-gray-800">Seg-Sáb 8h-18h</p>
                      <p className="text-xs text-purple-600">Emergências 24h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Call CTA */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white text-center">
                <i className="fas fa-phone-alt text-3xl mb-4 animate-pulse"></i>
                <h3 className="text-xl font-bold mb-2">Precisa Falar Agora?</h3>
                <p className="text-green-100 mb-4 text-sm">
                  Orçamento gratuito por telefone em 5 minutos!
                </p>
                <a
                  href="tel:+18663509407"
                  className="bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 shadow-lg"
                >
                  <i className="fas fa-phone"></i>
                  <span>(866) 350-9407</span>
                </a>
              </div>

              {/* Service Areas */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-4">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  Áreas Premium Atendidas
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                  {[
                    'Buckhead', 'Marietta', 'Roswell', 'Alpharetta',
                    'Sandy Springs', 'Vinings', 'East Cobb', 'Dunwoody'
                  ].map((area, index) => (
                    <div key={index} className="text-blue-700 flex items-center space-x-1">
                      <i className="fas fa-map-pin text-blue-500 text-xs"></i>
                      <span className="font-medium">{area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-blue-600">
                  + 40 outras comunidades premium em Atlanta Metro
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;