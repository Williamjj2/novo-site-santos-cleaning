import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from '../utils/translations';

const AboutSection = ({ currentLanguage }) => {
  const { t } = useTranslations(currentLanguage);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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

  const features = [
    {
      icon: 'fa-heart',
      color: 'text-red-400',
      title: 'Family-style Service',
      description: 'Friendly, caring approach'
    },
    {
      icon: 'fa-star',
      color: 'text-yellow-400',
      title: 'Superior Quality',
      description: 'Attention to every detail'
    },
    {
      icon: 'fa-clock',
      color: 'text-blue-400',
      title: 'Reliable & Punctual',
      description: 'On time, every time'
    },
    {
      icon: 'fa-thumbs-up',
      color: 'text-green-400',
      title: 'Customer Satisfaction',
      description: 'Your happiness guaranteed'
    }
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop&crop=center')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {/* Section Header */}
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  {t('about-title')}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <motion.div variants={itemVariants} className="text-center lg:text-left">
                  <div className="relative inline-block mb-8">
                    <img
                      src="/assets/galeria/prof.png"
                      alt="Santos Family"
                      className="w-64 h-64 object-cover rounded-full shadow-2xl border-4 border-white/20"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=256&h=256&fit=crop&crop=faces';
                      }}
                    />
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div variants={itemVariants} className="space-y-6">
                  <div className="text-white">
                    <p className="text-lg leading-relaxed mb-4">
                      {t('about-description')}
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                      {t('about-subtitle')}
                    </p>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-4 mt-8">
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="glass rounded-lg p-4 hover:bg-white/10 transition-colors duration-300"
                        >
                          <i className={`fas ${feature.icon} ${feature.color} text-2xl mb-2`}></i>
                          <h4 className="font-semibold mb-1">{feature.title}</h4>
                          <p className="text-sm opacity-90">{feature.description}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Call to Action */}
                    <motion.div variants={itemVariants} className="mt-8 pt-6 border-t border-white/20">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                        >
                          <i className="fas fa-phone mr-2"></i>
                          Get Free Quote
                        </button>
                        <a
                          href="tel:+18663509407"
                          className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
                        >
                          <i className="fas fa-calendar mr-2"></i>
                          Call Now
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;