#!/usr/bin/env python3
"""
Comprehensive Backend API Tests for Santos Cleaning Solutions
Tests all major endpoints: health, contact, reviews, services, bookings
"""

import requests
import json
import sys
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get backend URL from frontend environment
BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL', 'http://localhost:8001')
API_BASE = f"{BACKEND_URL}/api"

print(f"Testing backend at: {API_BASE}")

def test_health_check():
    """Test health check endpoint and MongoDB connection"""
    print("\n=== Testing Health Check ===")
    try:
        response = requests.get(f"{API_BASE}/health", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get('status') == 'healthy' and data.get('database') == 'connected':
                print("✅ Health check passed - MongoDB connected")
                return True
            else:
                print("❌ Health check failed - Invalid response format")
                return False
        else:
            print(f"❌ Health check failed - Status code: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Health check failed - Exception: {str(e)}")
        return False

def test_contact_form():
    """Test contact form submission with valid data"""
    print("\n=== Testing Contact Form ===")
    
    # Test data from review request
    contact_data = {
        "name": "João Silva",
        "phone": "(404) 555-0123",
        "email": "joao.silva@email.com",
        "message": "Preciso de limpeza profunda para minha casa",
        "sms_consent": True,
        "language": "pt"
    }
    
    try:
        response = requests.post(
            f"{API_BASE}/contact",
            json=contact_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get('success') and data.get('id'):
                print("✅ Contact form submission successful")
                return True
            else:
                print("❌ Contact form failed - Invalid response format")
                return False
        else:
            print(f"❌ Contact form failed - Status code: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Contact form failed - Exception: {str(e)}")
        return False

def test_contact_form_validation():
    """Test contact form validation with missing required fields"""
    print("\n=== Testing Contact Form Validation ===")
    
    # Test with missing required fields
    invalid_data = {
        "name": "",  # Empty name
        "email": "invalid-email",  # Invalid email
        "sms_consent": True
    }
    
    try:
        response = requests.post(
            f"{API_BASE}/contact",
            json=invalid_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:  # Validation error expected
            print("✅ Contact form validation working correctly")
            return True
        else:
            print(f"❌ Contact form validation failed - Expected 422, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Contact form validation test failed - Exception: {str(e)}")
        return False

def test_reviews_system():
    """Test reviews system with Supabase integration"""
    print("\n=== Testing Reviews System ===")
    
    try:
        response = requests.get(f"{API_BASE}/reviews", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if 'reviews' in data and isinstance(data['reviews'], list):
                print(f"✅ Reviews system working - Found {len(data['reviews'])} reviews")
                
                # Check if we got fallback reviews or Supabase reviews
                if len(data['reviews']) > 0:
                    review = data['reviews'][0]
                    required_fields = ['author_name', 'rating', 'text']
                    if all(field in review for field in required_fields):
                        print("✅ Review data structure is valid")
                        return True
                    else:
                        print("❌ Review data structure invalid")
                        return False
                else:
                    print("✅ Reviews endpoint working but no reviews found")
                    return True
            else:
                print("❌ Reviews system failed - Invalid response format")
                return False
        else:
            print(f"❌ Reviews system failed - Status code: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Reviews system failed - Exception: {str(e)}")
        return False

def test_services_management():
    """Test services management endpoint"""
    print("\n=== Testing Services Management ===")
    
    try:
        response = requests.get(f"{API_BASE}/services", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if 'services' in data and isinstance(data['services'], list):
                services = data['services']
                print(f"✅ Services endpoint working - Found {len(services)} services")
                
                # Check if default services are loaded
                if len(services) >= 3:  # Should have at least 3 default services
                    service = services[0]
                    required_fields = ['name', 'description', 'base_price', 'duration_hours', 'includes']
                    if all(field in service for field in required_fields):
                        print("✅ Service data structure is valid")
                        return True
                    else:
                        print("❌ Service data structure invalid")
                        return False
                else:
                    print("❌ Services not properly initialized - Expected at least 3 default services")
                    return False
            else:
                print("❌ Services system failed - Invalid response format")
                return False
        else:
            print(f"❌ Services system failed - Status code: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Services system failed - Exception: {str(e)}")
        return False

def test_bookings_system():
    """Test bookings system with complete data"""
    print("\n=== Testing Bookings System ===")
    
    # Test data from review request
    booking_data = {
        "customer_name": "Maria Santos",
        "email": "maria@email.com",
        "phone": "(404) 555-0124",
        "service_type": "Deep Cleaning",
        "preferred_date": "2024-02-15",
        "preferred_time": "10:00 AM",
        "address": "123 Main St, Marietta, GA 30060",
        "special_instructions": "Casa de 3 quartos, foco no banheiro principal"
    }
    
    try:
        response = requests.post(
            f"{API_BASE}/bookings",
            json=booking_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get('success') and data.get('booking_id'):
                print("✅ Booking creation successful")
                return True
            else:
                print("❌ Booking failed - Invalid response format")
                return False
        else:
            print(f"❌ Booking failed - Status code: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Booking failed - Exception: {str(e)}")
        return False

def test_add_review():
    """Test adding a new review"""
    print("\n=== Testing Add Review ===")
    
    review_data = {
        "author_name": "Test Customer",
        "rating": 5,
        "text": "Excellent service! Very professional and thorough cleaning.",
        "service_type": "Deep Cleaning",
        "verified": False
    }
    
    try:
        response = requests.post(
            f"{API_BASE}/reviews",
            json=review_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get('success') and data.get('id'):
                print("✅ Review submission successful")
                return True
            else:
                print("❌ Review submission failed - Invalid response format")
                return False
        else:
            print(f"❌ Review submission failed - Status code: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Review submission failed - Exception: {str(e)}")
        return False

def run_all_tests():
    """Run all backend tests and provide summary"""
    print("🧪 Starting Santos Cleaning Solutions Backend API Tests")
    print("=" * 60)
    
    tests = [
        ("Health Check", test_health_check),
        ("Contact Form", test_contact_form),
        ("Contact Form Validation", test_contact_form_validation),
        ("Reviews System", test_reviews_system),
        ("Services Management", test_services_management),
        ("Bookings System", test_bookings_system),
        ("Add Review", test_add_review)
    ]
    
    results = []
    passed = 0
    total = len(tests)
    
    for test_name, test_func in tests:
        try:
            result = test_func()
            results.append((test_name, result))
            if result:
                passed += 1
        except Exception as e:
            print(f"❌ {test_name} failed with exception: {str(e)}")
            results.append((test_name, False))
    
    # Summary
    print("\n" + "=" * 60)
    print("🏁 TEST SUMMARY")
    print("=" * 60)
    
    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status} - {test_name}")
    
    print(f"\nOverall: {passed}/{total} tests passed ({(passed/total)*100:.1f}%)")
    
    if passed == total:
        print("🎉 All tests passed! Backend is working correctly.")
        return True
    else:
        print("⚠️  Some tests failed. Check the details above.")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)