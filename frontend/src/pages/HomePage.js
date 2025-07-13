import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import BeforeAfterSection from '../components/BeforeAfterSection';
import ReviewsSection from '../components/ReviewsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import StickyCTA from '../components/StickyCTA';
import { apiService } from '../services/api';

const HomePage = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Initialize page
    const initializePage = async () => {
      try {
        // Check API health
        await apiService.healthCheck();
        
        // Load services and reviews in parallel
        const [servicesData, reviewsData] = await Promise.all([
          apiService.getServices().catch(() => ({ services: [] })),
          apiService.getReviews().catch(() => ({ reviews: [] }))
        ]);
        
        setServices(servicesData.services || []);
        setReviews(reviewsData.reviews || []);
        
      } catch (error) {
        console.warn('Some data failed to load, using fallback data');
      } finally {
        setIsLoading(false);
      }
    };

    initializePage();
  }, []);

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    
    // Track language change
    if (window.gtag) {
      window.gtag('event', 'language_change', {
        'language': language
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Santos Cleaning Solutions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />
      
      <main>
        <HeroSection currentLanguage={currentLanguage} />
        <AboutSection currentLanguage={currentLanguage} />
        <ServicesSection currentLanguage={currentLanguage} services={services} />
        <BeforeAfterSection currentLanguage={currentLanguage} />
        <ReviewsSection currentLanguage={currentLanguage} reviews={reviews} />
        <ContactSection currentLanguage={currentLanguage} />
      </main>
      
      <Footer currentLanguage={currentLanguage} />
      <StickyCTA currentLanguage={currentLanguage} />
    </div>
  );
};

export default HomePage;