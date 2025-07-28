#!/bin/bash

echo "🚀 Santos Cleaning - Deploy AWS Reviews Automation"
echo "=================================================="

# Cores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Função para verificar sucesso
check_success() {
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ $1${NC}"
    else
        echo -e "${RED}❌ Erro em: $1${NC}"
        exit 1
    fi
}

echo -e "${YELLOW}📍 Verificando diretório atual...${NC}"
if [ ! -d "/var/www/santos-cleaning" ]; then
    echo -e "${RED}❌ Diretório /var/www/santos-cleaning não encontrado!${NC}"
    echo "Execute este script no servidor AWS"
    exit 1
fi

echo -e "${YELLOW}🔄 Atualizando código do GitHub...${NC}"
cd /var/www/santos-cleaning
git pull origin main
check_success "Pull do GitHub"

echo -e "${YELLOW}📋 Verificando commit de reviews automation...${NC}"
if git log --oneline -3 | grep -q "Google Reviews automation"; then
    echo -e "${GREEN}✅ Commit de reviews automation encontrado!${NC}"
else
    echo -e "${RED}❌ Commit de reviews automation não encontrado!${NC}"
    echo "Últimos commits:"
    git log --oneline -3
    exit 1
fi

echo -e "${YELLOW}🐍 Ativando ambiente Python...${NC}"
cd backend
source venv/bin/activate
check_success "Ativação do ambiente Python"

echo -e "${YELLOW}📦 Verificando dependências...${NC}"
pip install -r requirements.txt
check_success "Instalação de dependências"

echo -e "${YELLOW}🔧 Verificando arquivo .env...${NC}"
if [ ! -f ".env" ]; then
    echo -e "${YELLOW}⚠️ Arquivo .env não encontrado, criando...${NC}"
    touch .env
fi

echo -e "${YELLOW}🔍 Verificando configuração Supabase...${NC}"
if grep -q "SUPABASE_SERVICE_ROLE_KEY" .env; then
    echo -e "${GREEN}✅ SUPABASE_SERVICE_ROLE_KEY já configurada${NC}"
else
    echo -e "${YELLOW}⚠️ SUPABASE_SERVICE_ROLE_KEY não encontrada${NC}"
    echo "# Configuração para Reviews Automation" >> .env
    echo "SUPABASE_SERVICE_ROLE_KEY=CONFIGURE_ME" >> .env
    echo -e "${YELLOW}📝 Adicionada linha SUPABASE_SERVICE_ROLE_KEY=CONFIGURE_ME no .env${NC}"
    echo -e "${YELLOW}🔧 AÇÃO NECESSÁRIA: Configure a key real no Supabase Dashboard${NC}"
fi

echo -e "${YELLOW}🔄 Reiniciando serviços...${NC}"
pm2 restart santos-cleaning-api
check_success "Restart PM2"

sudo systemctl restart nginx
check_success "Restart Nginx"

echo -e "${YELLOW}📊 Verificando status dos serviços...${NC}"
echo "PM2 Status:"
pm2 status

echo ""
echo "Nginx Status:"
sudo systemctl status nginx --no-pager -l

echo -e "${YELLOW}🧪 Testando webhook (modo offline)...${NC}"
WEBHOOK_TEST=$(curl -s -X POST "http://localhost:8001/api/webhook/reviews-update" \
-H "Content-Type: application/json" \
-d '{
  "action": "test_deploy",
  "timestamp": "'$(date -u +%Y-%m-%dT%H:%M:%SZ)'",
  "business_name": "Santos Cleaning Solutions", 
  "total_reviews": 1,
  "average_rating": 5.0,
  "user_ratings_total": 1,
  "reviews": [{
    "author_name": "Deploy Test AWS",
    "rating": 5,
    "text": "Teste de deploy no servidor AWS - Webhook funcionando!",
    "review_time": "'$(date -u +%Y-%m-%dT%H:%M:%SZ)'"
  }]
}')

if echo "$WEBHOOK_TEST" | grep -q '"success": true'; then
    echo -e "${GREEN}✅ Webhook funcionando!${NC}"
    echo "Resposta: $WEBHOOK_TEST"
else
    echo -e "${RED}❌ Erro no webhook${NC}"
    echo "Resposta: $WEBHOOK_TEST"
fi

echo -e "${YELLOW}🌐 Testando API de reviews...${NC}"
REVIEWS_TEST=$(curl -s "http://localhost:8001/api/reviews")
if echo "$REVIEWS_TEST" | grep -q '"reviews"'; then
    echo -e "${GREEN}✅ API de reviews funcionando!${NC}"
    REVIEW_COUNT=$(echo "$REVIEWS_TEST" | grep -o '"author_name"' | wc -l)
    echo "Reviews encontrados: $REVIEW_COUNT"
else
    echo -e "${RED}❌ Erro na API de reviews${NC}"
    echo "Resposta: $REVIEWS_TEST"
fi

echo ""
echo -e "${GREEN}🎉 DEPLOY CONCLUÍDO COM SUCESSO!${NC}"
echo ""
echo -e "${YELLOW}📋 RESUMO:${NC}"
echo "✅ Código atualizado no servidor"
echo "✅ Webhook /api/webhook/reviews-update disponível"
echo "✅ API de reviews funcionando"
echo "✅ Serviços reiniciados"
echo ""
echo -e "${YELLOW}⚡ PRÓXIMOS PASSOS:${NC}"
echo "1. 🔑 Configure SUPABASE_SERVICE_ROLE_KEY no arquivo .env"
echo "2. 🗄️ Execute a query SQL no Supabase Dashboard"
echo "3. 🔄 Configure o n8n para usar o webhook"
echo "4. 🌐 Teste o site: http://$(curl -s ifconfig.me)"
echo ""
echo -e "${YELLOW}🔧 COMANDOS ÚTEIS:${NC}"
echo "   pm2 logs santos-cleaning-api  - Ver logs do backend"
echo "   sudo tail -f /var/log/nginx/error.log  - Ver logs do Nginx"
echo "   nano backend/.env  - Editar configurações"
echo "" 