#!/bin/bash

echo "🏗️ Building Santos Cleaning Solutions for AWS Production..."
echo "=========================================================="

# Navigate to project directory
cd /var/www/santos-cleaning

# Build Frontend
echo "🔨 Building React Frontend..."
cd frontend
npm ci --production
npm run build
echo "✅ Frontend build completed!"

# Setup Backend
echo "🔨 Setting up Python Backend..."
cd ../backend
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
echo "✅ Backend setup completed!"

# Set permissions
echo "🔐 Setting proper permissions..."
sudo chown -R ubuntu:ubuntu /var/www/santos-cleaning
sudo chmod -R 755 /var/www/santos-cleaning

echo "✅ Build process completed successfully!"
echo "📁 Frontend built files: /var/www/santos-cleaning/frontend/build/"
echo "📁 Backend ready: /var/www/santos-cleaning/backend/"