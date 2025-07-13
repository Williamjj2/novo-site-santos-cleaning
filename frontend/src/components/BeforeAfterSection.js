import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from '../utils/translations';
import { BEFORE_AFTER_IMAGES } from '../utils/constants';

const BeforeAfterSection = ({ currentLanguage }) => {
  const { t } = useTranslations(currentLanguage);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [sliderPositions, setSliderPositions] = useState(
    BEFORE_AFTER_IMAGES.reduce((acc, img) => {
      acc[img.id] = 50;
      return acc;
    }, {})
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(BEFORE_AFTER_IMAGES.length / itemsPerPage);

  const handleSliderChange = (type, value) => {
    setSliderPositions(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const getCurrentImages = () => {
    const startIndex = currentSlide * itemsPerPage;
    return BEFORE_AFTER_IMAGES.slice(startIndex, startIndex + itemsPerPage);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages);
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="before-after" 
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop&crop=center')`,
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
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Veja os Resultados – Antes e Depois da Limpeza
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
              Testemunhe a transformação de bagunçado para limpo
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
            
            {/* Drag instruction */}
            <div className="mt-8 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/20">
              <i className="fas fa-hand-pointer animate-pulse"></i>
              <span className="text-sm">Arraste o controle para ver o antes e depois</span>
            </div>
          </motion.div>

          {/* Before/After Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {transformations.map((transformation, index) => (
              <motion.div
                key={transformation.id}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-bold text-white text-center mb-6 flex items-center justify-center space-x-2">
                  <span className="text-2xl">{transformation.emoji}</span>
                  <span>{transformation.title}</span>
                </h3>

                {/* Before/After Comparison */}
                <div className="relative overflow-hidden rounded-xl mb-4 group">
                  <div className="relative h-64 bg-gray-200">
                    {/* Before Image */}
                    <img
                      src={transformation.beforeImage}
                      alt={transformation.beforeAlt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    
                    {/* After Image */}
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ clipPath: `inset(0 ${100 - sliderPositions[transformation.id]}% 0 0)` }}
                    >
                      <img
                        src={transformation.afterImage}
                        alt={transformation.afterAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Slider */}
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
                      style={{ left: `${sliderPositions[transformation.id]}%` }}
                    >
                      {/* Slider Handle */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <i className="fas fa-arrows-alt-h text-gray-600 text-xs"></i>
                      </div>
                    </div>

                    {/* Range Input (Invisible) */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPositions[transformation.id]}
                      onChange={(e) => handleSliderChange(transformation.id, parseInt(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                    />

                    {/* Labels */}
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                      ANTES
                    </div>
                    <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
                      DEPOIS
                    </div>
                  </div>
                </div>

                <p className="text-center text-white/90 text-sm">
                  {transformation.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Results Stats */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80 text-sm">Taxa de Satisfação</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">47+</div>
              <div className="text-white/80 text-sm">Avaliações 5 Estrelas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-white/80 text-sm">Lares Transformados</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">24h</div>
              <div className="text-white/80 text-sm">Tempo de Resposta</div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Pronto para Transformar Sua Casa?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Veja com seus próprios olhos a diferença que a Santos Cleaning Solutions pode fazer. 
                Solicite uma avaliação gratuita hoje mesmo!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <i className="fas fa-calendar-check mr-2"></i>
                  Solicitar Avaliação Gratuita
                </button>
                
                <a
                  href="tel:+18663509407"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Ligar (866) 350-9407
                </a>
              </div>
              
              <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check-circle text-green-400"></i>
                  <span>Orçamento Gratuito</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-shield-alt text-blue-400"></i>
                  <span>Totalmente Segurado</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-clock text-yellow-400"></i>
                  <span>Resposta em 24h</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;