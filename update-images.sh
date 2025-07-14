#!/bin/bash

echo "🖼️ Santos Cleaning - Update Before/After Images"
echo "==============================================="

# Este script ajuda você a atualizar as imagens rapidamente

echo "📝 PASSO 1: Substitua as URLs no arquivo constants.js"
echo ""
echo "Edite o arquivo: /var/www/santos-cleaning/frontend/src/utils/constants.js"
echo ""
echo "Procure por 'https://sua-hospedagem.com/' e substitua por suas URLs reais:"
echo ""
echo "Exemplo de substituição:"
echo "❌ beforeImage: 'https://sua-hospedagem.com/bathroom-before.jpg',"
echo "✅ beforeImage: 'https://res.cloudinary.com/seu-cloud/image/upload/bathroom-before.jpg',"
echo ""

read -p "✅ Já atualizou as URLs? (y/n): " urls_updated

if [ "$urls_updated" != "y" ]; then
    echo "⏸️  Primeiro atualize as URLs e depois execute este script novamente."
    exit 1
fi

echo ""
echo "🔄 PASSO 2: Rebuild da aplicação..."

# Navigate to project directory
cd /var/www/santos-cleaning

# Rebuild frontend
echo "📦 Rebuilding frontend..."
cd frontend
npm run build

# Restart PM2 backend
echo "🔄 Restarting backend..."
pm2 restart santos-cleaning-api

# Restart Nginx
echo "🔄 Restarting Nginx..."
sudo systemctl restart nginx

echo ""
echo "✅ Atualização concluída!"
echo ""
echo "🌐 Teste suas novas imagens em:"
echo "   https://seudominio.com"
echo ""
echo "🔍 Se as imagens não aparecerem:"
echo "   1. Verifique se as URLs estão corretas"
echo "   2. Teste as URLs diretamente no navegador"
echo "   3. Limpe o cache do navegador (Ctrl+F5)"
echo ""
echo "📊 Verificar logs se houver problemas:"
echo "   pm2 logs santos-cleaning-api"
echo "   sudo tail -f /var/log/nginx/error.log"