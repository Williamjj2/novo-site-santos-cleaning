import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from '../utils/translations';

const StickyCTA = ({ currentLanguage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslations(currentLanguage);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <button
            onClick={scrollToContact}
            className="pulse-cta bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 group"
          >
            <i className="fas fa-calendar-alt group-hover:animate-bounce"></i>
            <span className="hidden sm:inline">{t('free-quote')}</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;