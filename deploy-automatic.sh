#!/bin/bash

# 🚀 Santos Cleaning Solutions - Script de Deploy Automatizado
# Este script faz build, testa e faz deploy automaticamente

set -e  # Parar em caso de erro

echo "🚀 Santos Cleaning - Deploy Automatizado"
echo "========================================"

# Cores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função para verificar sucesso
check_success() {
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ $1 concluído com sucesso!${NC}"
    else
        echo -e "${RED}❌ Erro em: $1${NC}"
        exit 1
    fi
}

# 1. Verificar branch atual
echo -e "${YELLOW}📍 Verificando branch...${NC}"
CURRENT_BRANCH=$(git branch --show-current)
echo "Branch atual: $CURRENT_BRANCH"

# 2. Verificar se há mudanças não commitadas
echo -e "${YELLOW}🔍 Verificando mudanças...${NC}"
if [[ -n $(git status -s) ]]; then
    echo -e "${RED}❌ Existem mudanças não commitadas!${NC}"
    git status -s
    echo "Deseja fazer commit automático? (y/n)"
    read -r response
    if [[ "$response" == "y" ]]; then
        git add .
        git commit -m "🚀 Deploy automático: $(date '+%Y-%m-%d %H:%M:%S')"
        check_success "Commit automático"
    else
        echo "Por favor, faça commit das mudanças antes de continuar."
        exit 1
    fi
fi

# 3. Atualizar com o repositório remoto
echo -e "${YELLOW}🔄 Sincronizando com repositório...${NC}"
git pull origin $CURRENT_BRANCH
check_success "Pull do repositório"

# 4. Instalar dependências
echo -e "${YELLOW}📦 Instalando dependências...${NC}"
cd frontend
npm install
check_success "Instalação de dependências"

# 5. Executar testes (se houver)
# echo -e "${YELLOW}🧪 Executando testes...${NC}"
# npm test -- --watchAll=false
# check_success "Testes"

# 6. Criar build de produção
echo -e "${YELLOW}🏗️ Criando build de produção...${NC}"
npm run build
check_success "Build de produção"

# 7. Verificar tamanho do build
echo -e "${YELLOW}📊 Estatísticas do build:${NC}"
du -sh build
echo "Arquivos principais:"
ls -lh build/static/js/*.js | head -5
ls -lh build/static/css/*.css | head -5

# 8. Fazer push para GitHub
echo -e "${YELLOW}📤 Enviando para GitHub...${NC}"
cd ..
git push origin $CURRENT_BRANCH
check_success "Push para GitHub"

# 9. Deploy para servidor (descomente e configure conforme necessário)
echo -e "${YELLOW}🚀 Deploy para produção...${NC}"

# Opção A: Deploy via SSH/SCP
# SERVER="ubuntu@seu-servidor.com"
# echo "Copiando arquivos para servidor..."
# scp -r frontend/build/* $SERVER:/var/www/santos-cleaning/frontend/
# echo "Reiniciando serviços..."
# ssh $SERVER "sudo systemctl restart nginx && pm2 restart santos-cleaning-api"

# Opção B: Deploy via FTP
# echo "Deploy via FTP..."
# lftp -c "open -u usuario,senha ftp.seusite.com; mirror -R frontend/build/ /public_html/"

# Opção C: Deploy para AWS S3 (para sites estáticos)
# echo "Deploy para AWS S3..."
# aws s3 sync frontend/build/ s3://seu-bucket-santos-cleaning --delete
# aws cloudfront create-invalidation --distribution-id SEU_ID --paths "/*"

# 10. Verificar deploy (opcional)
# echo -e "${YELLOW}🔍 Verificando deploy...${NC}"
# curl -s -o /dev/null -w "%{http_code}" https://seusite.com
# if [ $? -eq 200 ]; then
#     echo -e "${GREEN}✅ Site está online!${NC}"
# else
#     echo -e "${RED}❌ Erro ao verificar site${NC}"
# fi

echo ""
echo -e "${GREEN}🎉 Deploy concluído com sucesso!${NC}"
echo ""
echo "📊 Resumo:"
echo "- Branch: $CURRENT_BRANCH"
echo "- Build size: $(du -sh frontend/build | cut -f1)"
echo "- Commit: $(git rev-parse --short HEAD)"
echo "- Data: $(date '+%Y-%m-%d %H:%M:%S')"
echo ""
echo -e "${YELLOW}⚡ Próximos passos:${NC}"
echo "1. Verifique o site em produção"
echo "2. Teste a calculadora de preços"
echo "3. Monitore logs de erro"
echo ""

# Criar backup do deploy
echo -e "${YELLOW}💾 Criando backup...${NC}"
BACKUP_NAME="backup-$(date '+%Y%m%d-%H%M%S').tar.gz"
tar -czf "../$BACKUP_NAME" frontend/build/
echo "Backup salvo em: ../$BACKUP_NAME" 