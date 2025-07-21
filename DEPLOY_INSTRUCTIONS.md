# 🚀 Guia de Deploy para AWS EC2

## 📋 Instruções para Deploy Manual

### 1️⃣ **Conectar ao Servidor AWS**
```bash
# Via AWS Console ou SSH (se chave configurada)
ssh -i "sua-chave.pem" ubuntu@54.67.60.88

# OU via AWS Systems Manager Session Manager no console
```

### 2️⃣ **Atualizar Código no Servidor**
```bash
# No servidor AWS:
cd /var/www/santos-cleaning

# Fazer pull das mudanças
git pull origin main

# Verificar se as mudanças chegaram
git log --oneline -5
```

### 3️⃣ **Instalar Dependências**
```bash
# Frontend
cd frontend
npm install --production

# Backend  
cd ../backend
source venv/bin/activate
pip install -r requirements.txt
```

### 4️⃣ **Reiniciar Serviços**
```bash
# Nginx
sudo systemctl restart nginx
sudo systemctl status nginx

# PM2 (se configurado)
pm2 restart all
pm2 status

# Ou reiniciar manualmente se necessário
```

### 5️⃣ **Verificar Deploy**
```bash
# Testar internamente
curl -I http://localhost

# Ver logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### 6️⃣ **Acessar Site**
- http://54.67.60.88
- Testar a calculadora de preços
- Verificar responsividade mobile

## ✅ **O que foi Implementado**

### **Calculadora Refatorada:**
- ✅ Preços 30-40% mais baratos
- ✅ Validações robustas
- ✅ Traduções corrigidas (PT/ES/EN)
- ✅ Disclaimers "a partir de"
- ✅ Melhor UX/UI mobile
- ✅ Acessibilidade melhorada

### **Build de Produção:**
- ✅ 158.99 kB JS (comprimido)
- ✅ 7.29 kB CSS (comprimido)
- ✅ Otimizado para produção

## 🔧 **Configuração Automática Futura**

Para próximos deploys, você pode:

1. **Configurar Chave SSH**: Para usar o script automático
2. **CI/CD**: GitHub Actions para deploy automático
3. **Domínio**: Configurar domínio personalizado
4. **SSL**: Certificado HTTPS

## 📊 **Monitoramento**

```bash
# Verificar recursos
htop
df -h

# Logs em tempo real
tail -f /var/log/nginx/access.log
pm2 logs santos-cleaning-api
```

---

**Status**: ✅ Código pronto para deploy
**Commit**: 4e95474d
**Branch**: main
