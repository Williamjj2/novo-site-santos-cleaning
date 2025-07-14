import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslations } from '../utils/translations';
import { COMPANY_INFO, SERVICE_AREAS } from '../utils/constants';

const Footer = ({ currentLanguage }) => {
  const { t } = useTranslations(currentLanguage);

  const currentYear = new Date().getFullYear();

  const services = [
    t('footer-service-deep'),
    t('footer-service-regular'),
    t('footer-service-move'),
    t('footer-service-appliance'),
    t('footer-service-laundry'),
    t('footer-service-cabinet')
  ];

  const quickLinks = [
    { label: t('footer-link-home'), href: '#home' },
    { label: t('footer-link-about'), href: '#about' },
    { label: t('footer-link-services'), href: '#services' },
    { label: t('footer-link-testimonials'), href: '#testimonials' },
    { label: t('footer-link-contact'), href: '#contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/assets/galeria/logo.png" 
                  alt="Santos Cleaning Logo" 
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    e.target.src = 'https://ui-avatars.com/api/?name=Santos+Cleaning&background=3B82F6&color=fff&size=48';
                  }}
                />
                <div className="font-display">
                  <h3 className="text-xl font-bold">Santos Cleaning</h3>
                  <p className="text-gray-400 text-sm">{t('footer-company-tagline')}</p>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                {t('footer-company-description')}
              </p>

              {/* Contact Info */}
              <div className="space-y-2">
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fas fa-phone text-blue-400"></i>
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fas fa-envelope text-blue-400"></i>
                  <span>{COMPANY_INFO.email}</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-400">
                  <i className="fas fa-map-marker-alt text-blue-400"></i>
                  <span>Marietta, GA • Atlanta Metro</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <i className="fas fa-clock text-blue-400"></i>
                  <span>{COMPANY_INFO.hours}</span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <h4 className="text-lg font-semibold mb-6 text-white">{t('footer-our-services')}</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection('services')}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-left group"
                    >
                      <i className="fas fa-arrow-right text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity mr-2"></i>
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h4 className="text-lg font-semibold mb-6 text-white">{t('footer-quick-links')}</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 group"
                    >
                      <i className="fas fa-chevron-right text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity mr-2"></i>
                      {link.label}
                    </button>
                  </li>
                ))}
                <li>
                  <Link
                    to="/book"
                    className="text-gray-400 hover:text-white transition-colors duration-200 group"
                  >
                    <i className="fas fa-calendar-alt text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity mr-2"></i>
                    {t('footer-schedule-service')}
                  </Link>
                </li>
              </ul>

              {/* Legal Links */}
              <div className="mt-8">
                <h5 className="text-sm font-semibold mb-3 text-gray-300">{t('footer-legal')}</h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/politicas-legais#privacidade" className="text-gray-400 hover:text-white transition-colors">
                      {t('footer-privacy-policy')}
                    </a>
                  </li>
                  <li>
                    <a href="/politicas-legais#termos" className="text-gray-400 hover:text-white transition-colors">
                      {t('footer-terms-service')}
                    </a>
                  </li>
                  <li>
                    <a href="/politicas-legais#aviso" className="text-gray-400 hover:text-white transition-colors">
                      {t('footer-disclaimer')}
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Service Areas & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <h4 className="text-lg font-semibold mb-6 text-white">{t('footer-service-areas')}</h4>
              <div className="grid grid-cols-2 gap-2 text-sm mb-8">
                {SERVICE_AREAS.slice(0, 8).map((area, index) => (
                  <div key={index} className="text-gray-400 flex items-center space-x-1">
                    <i className="fas fa-map-pin text-blue-400 text-xs"></i>
                    <span>{area}</span>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mb-6">
                <h5 className="text-sm font-semibold mb-3 text-gray-300">{t('footer-follow-us')}</h5>
                <div className="flex space-x-4">
                  <a
                    href={COMPANY_INFO.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href={COMPANY_INFO.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href={COMPANY_INFO.socialMedia.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <i className="fab fa-google"></i>
                  </a>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <i className="fas fa-exclamation-triangle text-red-400"></i>
                  <h5 className="text-sm font-semibold text-red-400">{t('footer-emergency-24h')}</h5>
                </div>
                <p className="text-xs text-gray-400 mb-2">
                  {t('footer-urgent-cleaning')}
                </p>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-sm font-semibold text-red-400 hover:text-red-300 transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  {t('footer-copyright')}
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  {t('footer-licensed-insured-georgia')}
                </p>
              </div>

              <div className="flex items-center space-x-6">
                {/* Trust Badges */}
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <div className="flex items-center space-x-1">
                    <i className="fas fa-shield-alt text-green-400"></i>
                    <span>{t('footer-licensed')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <i className="fas fa-certificate text-blue-400"></i>
                    <span>{t('footer-insured')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <i className="fas fa-star text-yellow-400"></i>
                    <span>5.0 ★</span>
                  </div>
                </div>

                {/* Back to Top */}
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
                  aria-label={t('footer-back-to-top')}
                >
                  <i className="fas fa-arrow-up"></i>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;