#!/bin/bash

echo "🚀 Santos Cleaning Solutions - AWS Deployment Script"
echo "===================================================="

# Variáveis (EDITE ESTES VALORES)
DOMAIN="your-domain.com"
EMAIL="your-email@gmail.com"

# Verificar se está rodando como root
if [[ $EUID -eq 0 ]]; then
   echo "❌ Este script não deve ser executado como root. Use o usuário ubuntu." 
   exit 1
fi

echo "🔧 Step 1: Configuring Nginx..."

# Copiar configuração do Nginx
sudo cp /var/www/santos-cleaning/nginx-config.conf /etc/nginx/sites-available/santos-cleaning

# Substituir placeholder do domínio
sudo sed -i "s/REPLACE_WITH_YOUR_DOMAIN/$DOMAIN/g" /etc/nginx/sites-available/santos-cleaning

# Ativar site
sudo ln -sf /etc/nginx/sites-available/santos-cleaning /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Testar configuração do Nginx
sudo nginx -t
if [ $? -eq 0 ]; then
    echo "✅ Nginx configuration is valid"
    sudo systemctl reload nginx
else
    echo "❌ Nginx configuration error"
    exit 1
fi

echo "🔧 Step 2: Setting up PM2..."

# Criar diretório de logs
sudo mkdir -p /var/log/santos-cleaning
sudo chown ubuntu:ubuntu /var/log/santos-cleaning

# Copiar configuração PM2
cp /var/www/santos-cleaning/pm2.config.json /var/www/santos-cleaning/

# Ativar backend com PM2
cd /var/www/santos-cleaning/backend
source venv/bin/activate
pm2 delete santos-cleaning-api 2>/dev/null || true
pm2 start /var/www/santos-cleaning/pm2.config.json

# Configurar PM2 para iniciar no boot
pm2 startup
pm2 save

echo "🔧 Step 3: Installing SSL Certificate..."

# Instalar Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obter certificado SSL
sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --email $EMAIL --agree-tos --non-interactive

# Configurar renovação automática
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer

echo "🔧 Step 4: Final Configuration..."

# Reiniciar serviços
sudo systemctl restart nginx
pm2 restart all

# Verificar status
echo "📊 Service Status:"
sudo systemctl status nginx --no-pager -l
pm2 status

echo ""
echo "✅ Deployment completed successfully!"
echo ""
echo "🌐 Your website should be available at:"
echo "   https://$DOMAIN"
echo "   https://www.$DOMAIN"
echo ""
echo "📊 Monitoring commands:"
echo "   pm2 status                 - Check backend status"
echo "   pm2 logs santos-cleaning-api - View backend logs"  
echo "   sudo systemctl status nginx - Check Nginx status"
echo "   sudo tail -f /var/log/nginx/error.log - Nginx error logs"
echo ""
echo "🔄 Restart commands:"
echo "   pm2 restart santos-cleaning-api - Restart backend"
echo "   sudo systemctl restart nginx   - Restart Nginx"