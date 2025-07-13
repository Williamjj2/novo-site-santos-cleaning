#!/bin/bash

echo "🚀 Santos Cleaning Solutions - AWS Deployment Setup"
echo "=================================================="

# Update system
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
echo "📦 Installing Node.js 18..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Python 3.11 and pip
echo "📦 Installing Python..."
sudo apt install -y python3.11 python3.11-venv python3-pip

# Install Nginx
echo "📦 Installing Nginx..."
sudo apt install -y nginx

# Install PM2 globally
echo "📦 Installing PM2..."
sudo npm install -g pm2

# Install Git
echo "📦 Installing Git..."
sudo apt install -y git

# Create application directory
echo "📁 Creating application directory..."
sudo mkdir -p /var/www/santos-cleaning
sudo chown -R ubuntu:ubuntu /var/www/santos-cleaning

echo "✅ Server setup completed!"
echo "Next: Upload your application code to /var/www/santos-cleaning"