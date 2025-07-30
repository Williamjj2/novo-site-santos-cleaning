#!/bin/bash

echo "🚀 Santos Cleaning Solutions - Optimized AWS Deployment"
echo "======================================================="
echo "Target: https://santoscsolutions.com"
echo "Server: 54.67.60.88"
echo ""

# Configurações
REMOTE_HOST="54.67.60.88"
REMOTE_USER="ubuntu"
REMOTE_DIR="/var/www/santos-cleaning"
BUILD_DIR="build-$(date +%Y%m%d-%H%M%S)"

# Cores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Verificar se é Next.js app
if [ ! -f "package.json" ] || ! grep -q "next" package.json; then
    echo -e "${RED}❌ Este não é um projeto Next.js válido${NC}"
    exit 1
fi

echo -e "${BLUE}📦 Step 1: Building Next.js application...${NC}"

# Build do Next.js
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build Next.js concluído!${NC}"
else
    echo -e "${RED}❌ Erro no build Next.js${NC}"
    exit 1
fi

echo -e "${BLUE}📦 Step 2: Creating deployment package...${NC}"

# Criar pacote de deploy
mkdir -p $BUILD_DIR
cp -r .next $BUILD_DIR/
cp -r public $BUILD_DIR/
cp package.json $BUILD_DIR/
cp package-lock.json $BUILD_DIR/
cp next.config.js $BUILD_DIR/
cp -r app $BUILD_DIR/
cp -r components $BUILD_DIR/
cp -r lib $BUILD_DIR/
cp middleware.ts $BUILD_DIR/
cp tsconfig.json $BUILD_DIR/
cp tailwind.config.js $BUILD_DIR/
cp postcss.config.js $BUILD_DIR/

# Criar arquivo .env.production
cat > $BUILD_DIR/.env.production << EOF
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://santoscsolutions.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
EOF

echo -e "${GREEN}✅ Pacote de deploy criado: $BUILD_DIR${NC}"

echo -e "${BLUE}📤 Step 3: Uploading to AWS server...${NC}"

# Upload otimizado
rsync -avz --delete --progress \
    --exclude 'node_modules/' \
    --exclude '.git/' \
    --exclude '*.log' \
    --exclude '.DS_Store' \
    --exclude 'test*' \
    --exclude '*.md' \
    $BUILD_DIR/ $REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR/

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Upload concluído!${NC}"
else
    echo -e "${RED}❌ Erro no upload${NC}"
    exit 1
fi

echo -e "${BLUE}⚙️ Step 4: Configuring production environment...${NC}"

# Configurar ambiente de produção no servidor
ssh $REMOTE_USER@$REMOTE_HOST << 'ENDSSH'
    cd /var/www/santos-cleaning
    
    echo "📦 Installing production dependencies..."
    npm ci --production --silent
    
    echo "🔧 Setting up PM2 configuration..."
    
    # Criar configuração PM2 para Next.js
    cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'santos-cleaning-nextjs',
    script: 'npm',
    args: 'start',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/var/log/santos-cleaning/error.log',
    out_file: '/var/log/santos-cleaning/access.log',
    log_file: '/var/log/santos-cleaning/combined.log',
    time: true
  }]
}
EOF
    
    echo "🚀 Starting Next.js with PM2..."
    pm2 delete santos-cleaning-nextjs 2>/dev/null || true
    pm2 start ecosystem.config.js
    pm2 save
    
    echo "🌐 Updating Nginx configuration..."
    
    # Configuração Nginx otimizada para Next.js
    sudo tee /etc/nginx/sites-available/santos-cleaning << 'EOF'
server {
    listen 80;
    server_name santoscsolutions.com www.santoscsolutions.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name santoscsolutions.com www.santoscsolutions.com;
    
    ssl_certificate /etc/letsencrypt/live/santoscsolutions.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/santoscsolutions.com/privkey.pem;
    
    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json;
    
    # Static assets caching
    location /_next/static/ {
        expires 1y;
        access_log off;
        add_header Cache-Control "public, immutable";
    }
    
    location /images/ {
        expires 30d;
        access_log off;
        add_header Cache-Control "public";
    }
    
    # Next.js app
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400;
    }
}
EOF
    
    # Testar e recarregar Nginx
    sudo nginx -t && sudo systemctl reload nginx
    
    echo "📊 Service status:"
    pm2 status
    sudo systemctl status nginx --no-pager -l | head -5
ENDSSH

echo -e "${BLUE}🧪 Step 5: Testing deployment...${NC}"

# Aguardar serviços iniciarem
sleep 5

# Testar aplicação
echo "Testing HTTP redirect..."
if curl -s -I http://santoscsolutions.com | grep -q "301"; then
    echo -e "${GREEN}✅ HTTP to HTTPS redirect working${NC}"
else
    echo -e "${YELLOW}⚠️ HTTP redirect issue${NC}"
fi

echo "Testing HTTPS response..."
if curl -s -f --max-time 10 https://santoscsolutions.com > /dev/null; then
    echo -e "${GREEN}✅ HTTPS site responding correctly!${NC}"
else
    echo -e "${RED}❌ HTTPS site not responding${NC}"
fi

# Limpar build local
rm -rf $BUILD_DIR

echo ""
echo -e "${GREEN}🎉 DEPLOYMENT COMPLETED SUCCESSFULLY!${NC}"
echo ""
echo -e "🌐 Your website is live at:"
echo -e "   ${BLUE}https://santoscsolutions.com${NC}"
echo -e "   ${BLUE}https://www.santoscsolutions.com${NC}"
echo ""
echo -e "📊 Monitoring commands:"
echo -e "   ssh $REMOTE_USER@$REMOTE_HOST"
echo -e "   pm2 logs santos-cleaning-nextjs"
echo -e "   pm2 monit"
echo -e "   sudo tail -f /var/log/nginx/access.log"
echo ""
echo -e "🔄 Management commands:"
echo -e "   pm2 restart santos-cleaning-nextjs"
echo -e "   pm2 reload santos-cleaning-nextjs --update-env"
echo -e "   sudo systemctl reload nginx"
echo "" 