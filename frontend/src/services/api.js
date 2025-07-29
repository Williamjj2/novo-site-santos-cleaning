import axios from 'axios';

// Em produção, usar URL relativa (mesmo domínio)
// Em desenvolvimento, usar localhost
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '' // URL relativa em produção
  : (process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001');

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
      // Return empty reviews on error - NO MORE FAKE REVIEWS
      return {
        reviews: []
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
  },

  // Lead management
  async getLeads(status = null, limit = 50, offset = 0) {
    try {
      let url = `/api/leads?limit=${limit}&offset=${offset}`;
      if (status) {
        url += `&status=${status}`;
      }
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching leads:', error);
      throw error;
    }
  },

  async updateLead(leadId, updates) {
    try {
      const response = await api.put(`/api/leads/${leadId}`, updates);
      return response.data;
    } catch (error) {
      console.error('Error updating lead:', error);
      throw error;
    }
  }
};

export default api;