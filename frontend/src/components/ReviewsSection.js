import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from '../utils/translations';

const ReviewsSection = ({ currentLanguage, reviews }) => {
  const { t } = useTranslations(currentLanguage);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hasValidReviews, setHasValidReviews] = useState(false);

  // NO MORE FAKE REVIEWS - Use only real reviews from backend or empty
  const displayReviews = reviews?.length > 0 ? reviews : [];

  // Check if we have valid reviews and set state
  useEffect(() => {
    setHasValidReviews(displayReviews && displayReviews.length > 0);
  }, [displayReviews]);

  // If no reviews available, don't show the section
  if (!hasValidReviews) {
    return null;
  }

  const reviewsPerPage = 3;
  const totalPages = Math.ceil(displayReviews.length / reviewsPerPage);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && displayReviews.length > reviewsPerPage) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % totalPages);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, totalPages, displayReviews.length, reviewsPerPage]);

  const goToPage = (pageIndex) => {
    setCurrentIndex(pageIndex);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const nextReview = () => {
    setCurrentIndex(prev => (prev + 1) % totalPages);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevReview = () => {
    setCurrentIndex(prev => (prev - 1 + totalPages) % totalPages);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getCurrentReviews = () => {
    const startIndex = currentIndex * reviewsPerPage;
    return displayReviews.slice(startIndex, startIndex + reviewsPerPage);
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
      id="testimonials" 
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1448630360428-65456885c650?w=1920&h=1080&fit=crop&crop=center')`,
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
              {t('reviews-title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              {t('reviews-subtitle')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Overall Rating - Simplificado */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-block bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex justify-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400 text-2xl"></i>
                ))}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">5.0</div>
              <div className="text-gray-600 mb-3">{t('reviews-rating')}</div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>{t('reviews-verified-google')}</span>
              </div>
            </div>
          </motion.div>

          {/* Reviews Carousel */}
          <motion.div variants={itemVariants} className="relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {Array.from({ length: totalPages }).map((_, pageIndex) => (
                  <div key={pageIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                      {displayReviews
                        .slice(pageIndex * reviewsPerPage, (pageIndex + 1) * reviewsPerPage)
                        .map((review, index) => (
                        <div key={`${pageIndex}-${index}`} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group">
                          {/* Header - Google Style */}
                          <div className="flex items-start space-x-4 mb-4">
                            <div className="relative flex-shrink-0">
                              <img 
                                src={review.profile_photo_url} 
                                alt={review.author_name}
                                className="w-14 h-14 rounded-full object-cover border-2 border-gray-100 group-hover:border-blue-200 transition-colors"
                                onError={(e) => {
                                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.author_name)}&background=4285F4&color=fff&size=128`;
                                }}
                              />
                              {/* Google Badge */}
                              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
                                <svg className="w-4 h-4" viewBox="0 0 24 24">
                                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                              </div>
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-gray-900 text-lg">{review.author_name}</h4>
                                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                                  {review.relative_time_description}
                                </span>
                              </div>
                              
                              {/* Rating Stars - Google Style */}
                              <div className="flex items-center space-x-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                  </svg>
                                ))}
                                <span className="text-sm text-gray-600 ml-2 font-medium">{review.rating}.0</span>
                              </div>
                            </div>
                          </div>

                          {/* Review Text */}
                          <div className="mb-4">
                            <p className="text-gray-700 leading-relaxed text-sm">
                              "{review.text}"
                            </p>
                          </div>

                          {/* Footer - Google Style */}
                          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-gray-500">{t('reviews-posted-on')}</span>
                              <div className="flex items-center space-x-1">
                                <svg className="w-4 h-4" viewBox="0 0 24 24">
                                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                                <span className="text-xs font-medium text-gray-600">Google</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-1 text-xs text-green-600">
                              <i className="fas fa-shield-check"></i>
                              <span className="font-medium">{t('reviews-verified')}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4 mt-8">
                <button
                  onClick={prevReview}
                  className="w-12 h-12 bg-white hover:bg-blue-50 border border-gray-200 rounded-full flex items-center justify-center text-blue-600 hover:text-blue-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>

                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToPage(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextReview}
                  className="w-12 h-12 bg-white hover:bg-blue-50 border border-gray-200 rounded-full flex items-center justify-center text-blue-600 hover:text-blue-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            )}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href="https://www.google.com/search?sca_esv=188198e14d20be9a&rlz=1C5MACD_enUS1125US1125&sxsrf=AE3TifO_almgHG2RAQ0l8EhhBpe7oEMWgw:1752376606025&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E2o7P-t79ke_7OmDsmljsXScq4gRnQIgyaPDyJDb665A9VqLN9zeIkV_H7DY8vyx_zo0Z0uyxNbq8EjPmRT8rNPK1wTujjIALjuS87fOBGjqCzm8Hg%3D%3D&q=Santos+Cleaning+Solutions+Coment%C3%A1rios&sa=X&ved=2ahUKEwjBpPXI77iOAxUIWDABHU9XOYgQ0bkNegQIORAE&biw=1920&bih=958&dpr=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-200"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>{t('reviews-google-cta')}</span>
              <i className="fas fa-external-link-alt text-sm"></i>
            </a>
            
            <p className="text-gray-600 text-sm mt-3">
              {t('reviews-rate-us')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;