import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { apiService } from '../services/api';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('contacts');
  const [contacts, setContacts] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This is a placeholder for admin functionality
    // In a real app, you'd need authentication and proper admin routes
    console.log('Admin dashboard - functionality to be implemented');
    setIsLoading(false);
  }, []);

  const tabs = [
    { id: 'contacts', label: 'Contacts', icon: 'fa-envelope' },
    { id: 'bookings', label: 'Bookings', icon: 'fa-calendar' },
    { id: 'reviews', label: 'Reviews', icon: 'fa-star' },
    { id: 'services', label: 'Services', icon: 'fa-cog' }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">
              Santos Cleaning - Admin Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, Admin</span>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <nav className="space-y-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    <i className={`fas ${tab.icon}`}></i>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              {activeTab === 'contacts' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Requests</h2>
                  <div className="text-center py-12">
                    <i className="fas fa-envelope text-6xl text-gray-300 mb-4"></i>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                      Contact Management
                    </h3>
                    <p className="text-gray-500">
                      This section will display and manage contact form submissions.
                      <br />
                      <strong>Features to implement:</strong>
                    </p>
                    <ul className="text-left max-w-md mx-auto mt-4 space-y-2 text-gray-600">
                      <li>• View all contact submissions</li>
                      <li>• Mark as responded/resolved</li>
                      <li>• Export contact data</li>
                      <li>• Send follow-up emails</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'bookings' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Service Bookings</h2>
                  <div className="text-center py-12">
                    <i className="fas fa-calendar text-6xl text-gray-300 mb-4"></i>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                      Booking Management
                    </h3>
                    <p className="text-gray-500">
                      This section will display and manage service bookings.
                      <br />
                      <strong>Features to implement:</strong>
                    </p>
                    <ul className="text-left max-w-md mx-auto mt-4 space-y-2 text-gray-600">
                      <li>• View all booking requests</li>
                      <li>• Confirm/reject bookings</li>
                      <li>• Schedule management</li>
                      <li>• Send confirmation emails/SMS</li>
                      <li>• Track booking status</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Reviews</h2>
                  <div className="text-center py-12">
                    <i className="fas fa-star text-6xl text-gray-300 mb-4"></i>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                      Review Management
                    </h3>
                    <p className="text-gray-500">
                      This section will display and manage customer reviews.
                      <br />
                      <strong>Features to implement:</strong>
                    </p>
                    <ul className="text-left max-w-md mx-auto mt-4 space-y-2 text-gray-600">
                      <li>• View Google Reviews integration</li>
                      <li>• Moderate submitted reviews</li>
                      <li>• Respond to reviews</li>
                      <li>• Analytics and ratings overview</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'services' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Service Management</h2>
                  <div className="text-center py-12">
                    <i className="fas fa-cog text-6xl text-gray-300 mb-4"></i>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                      Service Configuration
                    </h3>
                    <p className="text-gray-500">
                      This section will manage service types and pricing.
                      <br />
                      <strong>Features to implement:</strong>
                    </p>
                    <ul className="text-left max-w-md mx-auto mt-4 space-y-2 text-gray-600">
                      <li>• Add/edit service types</li>
                      <li>• Manage pricing</li>
                      <li>• Service descriptions</li>
                      <li>• Enable/disable services</li>
                      <li>• Service area management</li>
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;