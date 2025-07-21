#!/bin/bash

echo "🚀 Santos Cleaning - Deploy para AWS EC2"
echo "========================================"
echo "Instância: santos-cleaning-server"
echo "IP: 54.67.60.88"
echo ""

# Configurações
REMOTE_HOST="54.67.60.88"
REMOTE_USER="ubuntu"
REMOTE_DIR="/var/www/santos-cleaning"

# Cores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}📤 Sincronizando código para servidor...${NC}"

# Sync do código (excluindo node_modules e .git)
rsync -avz --delete \
    --exclude 'node_modules/' \
    --exclude '.git/' \
    --exclude '*.log' \
    --exclude '.DS_Store' \
    ./ $REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR/

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Código sincronizado com sucesso!${NC}"
else
    echo -e "${RED}❌ Erro na sincronização${NC}"
    exit 1
fi

echo -e "${YELLOW}📦 Instalando dependências no servidor...${NC}"

# Instalar dependências e reiniciar serviços
ssh $REMOTE_USER@$REMOTE_HOST << 'ENDSSH'
    cd /var/www/santos-cleaning
    
    echo "📦 Instalando dependências do frontend..."
    cd frontend && npm install --production
    
    echo "🐍 Instalando dependências do backend..."
    cd ../backend
    if [ ! -d "venv" ]; then
        python3 -m venv venv
    fi
    source venv/bin/activate
    pip install -r requirements.txt
    
    echo "🌐 Reiniciando Nginx..."
    sudo systemctl restart nginx
    
    echo "⚡ Reiniciando PM2..."
    pm2 restart all 2>/dev/null || echo "PM2 apps não encontrados"
    
    echo "📊 Status dos serviços:"
    sudo systemctl status nginx --no-pager -l | head -5
    pm2 status 2>/dev/null || echo "PM2 não configurado ainda"
ENDSSH

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Dependências instaladas e serviços reiniciados!${NC}"
else
    echo -e "${RED}❌ Erro na instalação das dependências${NC}"
    exit 1
fi

echo -e "${YELLOW}🧪 Testando aplicação...${NC}"
sleep 3

# Testar se o site responde
if curl -s -f --max-time 10 http://$REMOTE_HOST > /dev/null; then
    echo -e "${GREEN}✅ Site respondendo corretamente!${NC}"
else
    echo -e "${YELLOW}⚠️  Site pode estar iniciando... verificando logs${NC}"
    ssh $REMOTE_USER@$REMOTE_HOST "sudo tail -5 /var/log/nginx/error.log"
fi

echo ""
echo -e "${GREEN}🎉 DEPLOY CONCLUÍDO!${NC}"
echo ""
echo -e "🌐 Acesse seu site em:"
echo -e "   http://$REMOTE_HOST"
echo -e "   http://54.67.60.88"
echo ""
echo -e "📊 Para monitorar:"
echo -e "   ssh $REMOTE_USER@$REMOTE_HOST"
echo -e "   pm2 logs santos-cleaning-api"
echo -e "   sudo tail -f /var/log/nginx/access.log"
echo ""
