import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslations } from '../utils/translations';
// import { COMPANY_INFO } from '../utils/constants';

const Header = ({ currentLanguage, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslations(currentLanguage);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const languageOptions = [
    { code: 'en', flag: '🇺🇸', label: 'EN' },
    { code: 'es', flag: '🇪🇸', label: 'ES' },
    { code: 'pt', flag: '🇧🇷', label: 'PT' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img 
              src="/images/logo.svg" 
              alt="Santos Cleaning Solutions Logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                e.target.src = 'https://ui-avatars.com/api/?name=Santos+Cleaning&background=3B82F6&color=fff&size=64';
              }}
            />
            <motion.div className="font-display">
              <h1 className="text-lg md:text-2xl font-bold text-gray-800 leading-tight">
                Santos <span className="font-semibold text-blue-600">Cleaning</span>
              </h1>
              <p className="text-xs text-gray-600 hidden md:block">Professional Solutions</p>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden lg:flex space-x-8"
          >
            <button
              onClick={() => scrollToSection('home')}
              className="nav-link font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {t('nav-home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="nav-link font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {t('nav-about')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="nav-link font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {t('nav-services')}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="nav-link font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {t('nav-testimonials')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="nav-link font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {t('nav-contact')}
            </button>
            <Link
              to="/book"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              {t('nav-book')}
            </Link>
          </motion.nav>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex space-x-2"
            >
              {languageOptions.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onLanguageChange(lang.code)}
                  className={`px-3 py-1 text-sm font-medium rounded-full border-2 transition-all duration-200 ${
                    currentLanguage === lang.code
                      ? 'border-blue-500 text-blue-600 bg-blue-50'
                      : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {lang.flag} {lang.label}
                </button>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md glass"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-gray-700`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 glass rounded-lg p-4"
          >
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="nav-link font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                {t('nav-home')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="nav-link font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                {t('nav-about')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="nav-link font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                {t('nav-services')}
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="nav-link font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                {t('nav-testimonials')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="nav-link font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                {t('nav-contact')}
              </button>
              <Link
                to="/book"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav-book')}
              </Link>
            </nav>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;