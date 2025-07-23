import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for debugging (only in development)
if (process.env.NODE_ENV === 'development') {
  api.interceptors.request.use(
    (config) => {
      console.log('API Request:', config.method?.toUpperCase(), config.url);
      return config;
    },
    (error) => {
      console.error('API Request Error:', error);
      return Promise.reject(error);
    }
  );
}

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('API Response:', response.status, response.config.url);
    }
    return response;
  },
  (error) => {
    console.error('API Response Error:', error.response?.status, error.config?.url, error.message);
    
    // Handle common errors
    if (error.response?.status === 404) {
      console.error('API endpoint not found');
    } else if (error.response?.status >= 500) {
      console.error('Server error');
    } else if (error.code === 'ECONNABORTED') {
      console.error('Request timeout');
    }
    
    return Promise.reject(error);
  }
);

// API functions
export const apiService = {
  // Health check
  async healthCheck() {
    try {
      const response = await api.get('/api/health');
      return response.data;
    } catch (error) {
      console.error('Health check failed:', error);
      throw error;
    }
  },

  // Contact form submission
  async submitContact(contactData) {
    try {
      const response = await api.post('/api/contact', contactData);
      return response.data;
    } catch (error) {
      console.error('Contact submission failed:', error);
      throw error;
    }
  },

  // Get reviews
  async getReviews() {
    try {
      const response = await api.get('/api/reviews');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
      // Return fallback data on error
      return {
        reviews: [
          {
            author_name: "Maria Rodriguez",
            rating: 5,
            text: "Santos Cleaning Solutions exceeded all my expectations! Karen and William are incredibly professional and detail-oriented.",
            relative_time_description: "2 weeks ago",
            profile_photo_url: "https://ui-avatars.com/api/?name=Maria+Rodriguez&background=4285F4&color=fff&size=128&font-size=0.6&bold=true"
          },
          {
            author_name: "John Smith",
            rating: 5,
            text: "Best cleaning service in Marietta! They pay attention to every detail and are incredibly reliable.",
            relative_time_description: "1 month ago",
            profile_photo_url: "https://ui-avatars.com/api/?name=John+Smith&background=34A853&color=fff&size=128&font-size=0.6&bold=true"
          }
        ]
      };
    }
  },

  // Get services
  async getServices() {
    try {
      const response = await api.get('/api/services');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch services:', error);
      throw error;
    }
  },

  // Create booking
  async createBooking(bookingData) {
    try {
      const response = await api.post('/api/bookings', bookingData);
      return response.data;
    } catch (error) {
      console.error('Booking creation failed:', error);
      throw error;
    }
  },

  // Add review
  async addReview(reviewData) {
    try {
      const response = await api.post('/api/reviews', reviewData);
      return response.data;
    } catch (error) {
      console.error('Review submission failed:', error);
      throw error;
    }
  }
};

export default api;