#!/bin/bash

echo "🚀 Building Santos Cleaning Solutions for Production..."

# 1. Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd /app/frontend
yarn install

# 2. Build frontend for production
echo "🏗️ Building frontend..."
yarn build

# 3. Install backend dependencies  
echo "📦 Installing backend dependencies..."
cd /app/backend
pip install -r requirements.txt

echo "✅ Build completed successfully!"
echo "📁 Frontend build files are in: /app/frontend/build/"
echo "📁 Backend files are ready in: /app/backend/"