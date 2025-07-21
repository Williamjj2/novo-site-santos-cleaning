#!/bin/bash

echo "🚀 Deploy HTTP - Santos Cleaning Solutions"
echo "========================================"

# Criar build de produção
echo "📦 Criando build..."
cd frontend
npm run build
cd ..

# Comprimir arquivos
echo "📦 Comprimindo arquivos..."
tar -czf build-$(date +%Y%m%d-%H%M%S).tar.gz frontend/build

echo "✅ Build criado e comprimido!"
echo ""
echo "📋 Próximos passos MANUAIS:"
echo "1. Acesse AWS Console: https://console.aws.amazon.com/ec2/"
echo "2. Conecte via Session Manager à instância santos-cleaning-server"
echo "3. Execute no servidor:"
echo ""
echo "   # Fazer backup"
echo "   sudo cp -r /var/www/santos-cleaning /tmp/backup-\$(date +%Y%m%d)"
echo ""
echo "   # Atualizar código"
echo "   cd /var/www/santos-cleaning"
echo "   git pull origin main"
echo ""
echo "   # Instalar dependências"
echo "   cd frontend && npm install --omit=dev"
echo ""
echo "   # Reiniciar serviços"
echo "   sudo systemctl restart nginx"
echo "   pm2 restart all"
echo ""
echo "4. Teste: curl -I http://54.67.60.88"
echo ""
echo "🌐 Arquivo build criado localmente para upload manual se necessário"
ls -la *.tar.gz 2>/dev/null || echo "Nenhum arquivo .tar.gz encontrado"
