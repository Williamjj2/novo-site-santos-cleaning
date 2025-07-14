import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from '../utils/translations';
import { COMPANY_INFO } from '../utils/constants';

const HeroSection = ({ currentLanguage }) => {
  const { t } = useTranslations(currentLanguage);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <section 
      id="home" 
      ref={ref}
      className="hero relative overflow-hidden min-h-screen flex items-center justify-center"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop&crop=center')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-blue-600/20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-400/20 rounded-full blur-md animate-bounce"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
          >
            {t('hero-title')}
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto"
          >
            {t('hero-subtitle')}
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToContact}
              className="cta-button bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl glass border border-white/20 pulse-cta"
            >
              <i className="fas fa-calendar-alt mr-2"></i>
              {t('hero-cta')}
            </button>
            
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center space-x-2 text-white hover:text-blue-200 transition-colors duration-200 group"
            >
              <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                <i className="fas fa-phone"></i>
              </div>
              <span className="font-semibold text-lg">{t('hero-phone')}</span>
            </a>
          </motion.div>
          
          {/* Additional CTA Info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm opacity-90"
          >
            <div className="flex items-center space-x-2">
              <i className="fas fa-check-circle text-green-400"></i>
              <span>{t('hero-guarantee-estimates')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-shield-alt text-blue-400"></i>
              <span>{t('hero-guarantee-insured')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-star text-yellow-400"></i>
              <span>{t('hero-guarantee-rated')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-users text-purple-400"></i>
              <span>{t('hero-family-owned')}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;