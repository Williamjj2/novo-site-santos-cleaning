import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { apiService } from '../services/api';
import { useTranslations } from '../utils/translations';
import { DEFAULT_SERVICES, VALIDATION_PATTERNS, ERROR_MESSAGES } from '../utils/constants';

const BookingPage = () => {
  const navigate = useNavigate();
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const { t } = useTranslations(currentLanguage);
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    customer_name: '',
    email: '',
    phone: '',
    service_type: '',
    preferred_date: '',
    preferred_time: '',
    address: '',
    special_instructions: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Load services
    const loadServices = async () => {
      try {
        const data = await apiService.getServices();
        setServices(data.services || DEFAULT_SERVICES);
      } catch (error) {
        setServices(DEFAULT_SERVICES);
      }
    };

    loadServices();
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.customer_name.trim()) {
      newErrors.customer_name = ERROR_MESSAGES.required;
    } else if (!VALIDATION_PATTERNS.name.test(formData.customer_name)) {
      newErrors.customer_name = ERROR_MESSAGES.name;
    }

    if (!formData.email.trim()) {
      newErrors.email = ERROR_MESSAGES.required;
    } else if (!VALIDATION_PATTERNS.email.test(formData.email)) {
      newErrors.email = ERROR_MESSAGES.email;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = ERROR_MESSAGES.required;
    } else if (!VALIDATION_PATTERNS.phone.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = ERROR_MESSAGES.phone;
    }

    if (!formData.service_type) {
      newErrors.service_type = ERROR_MESSAGES.required;
    }

    if (!formData.preferred_date) {
      newErrors.preferred_date = ERROR_MESSAGES.required;
    }

    if (!formData.preferred_time) {
      newErrors.preferred_time = ERROR_MESSAGES.required;
    }

    if (!formData.address.trim()) {
      newErrors.address = ERROR_MESSAGES.required;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please correct the errors in the form');
      return;
    }

    setIsLoading(true);

    try {
      const response = await apiService.createBooking(formData);
      
      if (response.success) {
        toast.success('Booking request submitted successfully! We will contact you soon.');
        
        // Show success message with option to go back
        toast.success('Redirecting to home page in 5 seconds... Click here to go back now!', {
          duration: 5000,
          onClick: () => navigate('/')
        });
        
        // Track booking conversion
        if (window.gtag) {
          window.gtag('event', 'booking_request', {
            'service_type': formData.service_type,
            'language': currentLanguage
          });
        }
        
        // Reset form
        setFormData({
          customer_name: '',
          email: '',
          phone: '',
          service_type: '',
          preferred_date: '',
          preferred_time: '',
          address: '',
          special_instructions: ''
        });
        
        // Redirect to home page after 5 seconds
        setTimeout(() => {
          navigate('/');
        }, 5000);
      }
    } catch (error) {
      console.error('Booking error:', error);
      toast.error('Failed to submit booking. Please try again or call us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Format phone number
    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '');
      let formatted = cleaned;
      if (cleaned.length >= 6) {
        formatted = cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
      } else if (cleaned.length >= 3) {
        formatted = cleaned.replace(/(\d{3})(\d{3})/, '($1) $2-');
      }
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const selectedService = services.find(s => s.id === formData.service_type || s.name === formData.service_type);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
      />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Book Your Cleaning Service
              </h1>
              <p className="text-xl text-gray-600">
                Schedule your professional cleaning service today
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Booking Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Service Details
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="form-label">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="customer_name"
                          value={formData.customer_name}
                          onChange={handleInputChange}
                          className={`form-input ${errors.customer_name ? 'border-red-500' : ''}`}
                          placeholder="Enter your full name"
                        />
                        {errors.customer_name && (
                          <p className="text-red-500 text-sm mt-1">{errors.customer_name}</p>
                        )}
                      </div>

                      <div>
                        <label className="form-label">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                          placeholder="(XXX) XXX-XXXX"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="form-label">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="form-label">
                        Service Type *
                      </label>
                      <select
                        name="service_type"
                        value={formData.service_type}
                        onChange={handleInputChange}
                        className={`form-input ${errors.service_type ? 'border-red-500' : ''}`}
                      >
                        <option value="">Select a service</option>
                        {services.map(service => (
                          <option key={service.id || service.name} value={service.id || service.name}>
                            {service.name} - ${service.base_price || service.basePrice}
                          </option>
                        ))}
                      </select>
                      {errors.service_type && (
                        <p className="text-red-500 text-sm mt-1">{errors.service_type}</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="form-label">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          name="preferred_date"
                          value={formData.preferred_date}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          className={`form-input ${errors.preferred_date ? 'border-red-500' : ''}`}
                        />
                        {errors.preferred_date && (
                          <p className="text-red-500 text-sm mt-1">{errors.preferred_date}</p>
                        )}
                      </div>

                      <div>
                        <label className="form-label">
                          Preferred Time *
                        </label>
                        <select
                          name="preferred_time"
                          value={formData.preferred_time}
                          onChange={handleInputChange}
                          className={`form-input ${errors.preferred_time ? 'border-red-500' : ''}`}
                        >
                          <option value="">Select time</option>
                          <option value="8:00 AM">8:00 AM</option>
                          <option value="9:00 AM">9:00 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="1:00 PM">1:00 PM</option>
                          <option value="2:00 PM">2:00 PM</option>
                          <option value="3:00 PM">3:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                        </select>
                        {errors.preferred_time && (
                          <p className="text-red-500 text-sm mt-1">{errors.preferred_time}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="form-label">
                        Service Address *
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows="3"
                        className={`form-input form-textarea ${errors.address ? 'border-red-500' : ''}`}
                        placeholder="Enter your full address including city, state, and zip code"
                      />
                      {errors.address && (
                        <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                      )}
                    </div>

                    <div>
                      <label className="form-label">
                        Special Instructions (Optional)
                      </label>
                      <textarea
                        name="special_instructions"
                        value={formData.special_instructions}
                        onChange={handleInputChange}
                        rows="4"
                        className="form-input form-textarea"
                        placeholder="Any special instructions, areas of focus, or additional information..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <div className="loading-spinner mr-2"></div>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <i className="fas fa-calendar-check mr-2"></i>
                          Book Service
                        </span>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Booking Summary */}
              <div className="space-y-6">
                {selectedService && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-2xl shadow-lg p-6"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Service Summary
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800">{selectedService.name}</h4>
                        <p className="text-gray-600 text-sm">{selectedService.description}</p>
                      </div>
                      
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">Base Price:</span>
                          <span className="font-semibold">${selectedService.base_price || selectedService.basePrice}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-semibold">{selectedService.duration_hours || selectedService.duration} hours</span>
                        </div>
                      </div>
                      
                      {(selectedService.includes || []).length > 0 && (
                        <div className="border-t pt-4">
                          <h5 className="font-semibold text-gray-800 mb-2">Includes:</h5>
                          <ul className="space-y-1">
                            {selectedService.includes.map((item, index) => (
                              <li key={index} className="text-sm text-gray-600 flex items-center">
                                <i className="fas fa-check text-green-500 mr-2"></i>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-blue-800 mb-4">
                    Need Help?
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+18663509407"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <i className="fas fa-phone mr-3"></i>
                      (866) 350-9407
                    </a>
                    <a
                      href="mailto:info@santoscsolutions.com"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <i className="fas fa-envelope mr-3"></i>
                      info@santoscsolutions.com
                    </a>
                  </div>
                  <p className="text-sm text-blue-600 mt-4">
                    Call us for immediate assistance or questions about our services.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer currentLanguage={currentLanguage} />
    </div>
  );
};

export default BookingPage;