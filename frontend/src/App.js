import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import AdminDashboard from './pages/AdminDashboard';
import LegalPolicies from './pages/LegalPolicies';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              theme: {
                primary: '#10B981',
                secondary: '#DCFCE7',
              },
            },
            error: {
              duration: 5000,
              theme: {
                primary: '#EF4444',
                secondary: '#FEE2E2',
              },
            },
          }}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/politicas-legais" element={<LegalPolicies />} />
          <Route path="/legal-policies" element={<LegalPolicies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;