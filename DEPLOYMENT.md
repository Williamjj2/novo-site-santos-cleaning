# 🚀 Santos Cleaning Solutions - Deployment Guide

**Ambiente:** AWS EC2 (Ubuntu)  
**Servidor:** 54.67.60.88  
**Domínio:** https://santoscsolutions.com  
**Stack:** Next.js 14 + Nginx + PM2 + Let's Encrypt SSL  

---

## 📋 Resumo da Infraestrutura

### ✅ **Configuração Atual**
- **Servidor:** AWS EC2 t3.micro (1 vCPU, 1GB RAM)
- **OS:** Ubuntu 20.04 LTS
- **Web Server:** Nginx 1.18.0
- **Runtime:** Node.js + PM2
- **SSL:** Let's Encrypt (auto-renovação)
- **CDN:** CloudFront (AWS)

### 🌐 **URLs Ativas**
- **Principal:** https://santoscsolutions.com
- **WWW:** https://www.santoscsolutions.com (redirect)
- **IP:** http://54.67.60.88 (redirect para HTTPS)

---

## 🚀 Deploy Automatizado

### **1. Deploy Rápido (Recomendado)**
```bash
# No diretório do projeto
./deploy-optimized.sh
```

Este script executa:
- ✅ Build otimizado do Next.js
- ✅ Criação de pacote de deploy
- ✅ Upload via rsync
- ✅ Instalação de dependências
- ✅ Configuração PM2 + Nginx
- ✅ Testes automáticos

### **2. Deploy Manual (Passo a Passo)**

#### **2.1 Build Local**
```bash
npm run build
npm run export  # Se necessário
```

#### **2.2 Upload para Servidor**
```bash
rsync -avz --delete \
    --exclude 'node_modules/' \
    --exclude '.git/' \
    ./ ubuntu@54.67.60.88:/var/www/santos-cleaning/
```

#### **2.3 Configuração no Servidor**
```bash
ssh ubuntu@54.67.60.88
cd /var/www/santos-cleaning

# Instalar dependências
npm ci --production

# Configurar PM2
pm2 start ecosystem.config.js
pm2 save

# Reiniciar Nginx
sudo systemctl reload nginx
```

---

## ⚙️ Configuração de Ambiente

### **1. Variáveis de Ambiente**

#### **Produção (.env.production)**
```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://santoscsolutions.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

#### **Configuração Opcional**
```bash
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/santos

# Email
SENDGRID_API_KEY=SG.xxxxxx
SENDGRID_FROM_EMAIL=noreply@santoscsolutions.com

# Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### **2. PM2 Configuration (ecosystem.config.js)**
```javascript
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
    }
  }]
}
```

---

## 🌐 Configuração Nginx

### **Arquivo:** `/etc/nginx/sites-available/santos-cleaning`

```nginx
# HTTP to HTTPS redirect
server {
    listen 80;
    server_name santoscsolutions.com www.santoscsolutions.com;
    return 301 https://$server_name$request_uri;
}

# HTTPS server
server {
    listen 443 ssl http2;
    server_name santoscsolutions.com www.santoscsolutions.com;
    
    # SSL certificates
    ssl_certificate /etc/letsencrypt/live/santoscsolutions.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/santoscsolutions.com/privkey.pem;
    
    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    # Compression
    gzip on;
    gzip_types text/css application/javascript text/javascript application/json;
    
    # Next.js static files caching
    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Proxy to Next.js
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
    }
}
```

---

## 🔄 Redirects 301 (SEO Migration)

### **Configuração no Nginx**
Incluir no server block:

```nginx
# Redirects do site antigo
include /var/www/santos-cleaning/redirects.conf;
```

### **Exemplos de Redirects Comuns**
```nginx
rewrite ^/index\.html?$ / permanent;
rewrite ^/services\.html?$ /services permanent;
rewrite ^/contact\.html?$ /contact permanent;
rewrite ^/cleaning-services/?$ /services permanent;
rewrite ^/house-cleaning/?$ /services permanent;
rewrite ^/estimates/?$ /contact permanent;
```

---

## 🔒 SSL/TLS Configuration

### **Certificado Let's Encrypt**
```bash
# Instalar certbot
sudo apt install certbot python3-certbot-nginx

# Obter certificado
sudo certbot --nginx -d santoscsolutions.com -d www.santoscsolutions.com

# Auto-renovação (já configurada)
sudo systemctl status certbot.timer
```

### **Verificação SSL**
```bash
# Testar configuração
curl -I https://santoscsolutions.com

# Verificar certificado
openssl x509 -in /etc/letsencrypt/live/santoscsolutions.com/cert.pem -text -noout
```

---

## 📊 Monitoramento

### **Comandos Essenciais**

#### **Status dos Serviços**
```bash
# PM2 status
pm2 status
pm2 monit

# Nginx status
sudo systemctl status nginx

# Logs em tempo real
pm2 logs santos-cleaning-nextjs
sudo tail -f /var/log/nginx/access.log
```

#### **Performance Monitoring**
```bash
# CPU e Memória
htop
free -h

# Espaço em disco
df -h

# Conexões ativas
netstat -tulpn | grep :443
```

### **Health Checks**
```bash
# Teste básico
curl -I https://santoscsolutions.com

# Teste de performance
curl -w "@curl-format.txt" -o /dev/null -s https://santoscsolutions.com

# Teste de redirects
curl -I http://santoscsolutions.com
```

---

## 🛠️ Comandos de Manutenção

### **Reiniciar Serviços**
```bash
# Restart Next.js app
pm2 restart santos-cleaning-nextjs

# Reload sem downtime
pm2 reload santos-cleaning-nextjs

# Restart Nginx
sudo systemctl restart nginx
```

### **Updates e Patches**
```bash
# Update do código
cd /var/www/santos-cleaning
git pull origin main
npm ci --production
pm2 restart santos-cleaning-nextjs

# Update do sistema
sudo apt update && sudo apt upgrade -y
sudo systemctl restart nginx
```

### **Backup**
```bash
# Backup do código
tar -czf backup-$(date +%Y%m%d).tar.gz /var/www/santos-cleaning/

# Backup da configuração Nginx
sudo cp /etc/nginx/sites-available/santos-cleaning \
    /var/www/santos-cleaning/nginx-backup-$(date +%Y%m%d).conf
```

---

## 🚨 Troubleshooting

### **Problemas Comuns**

#### **Site não carrega**
```bash
# Verificar Nginx
sudo nginx -t
sudo systemctl status nginx

# Verificar PM2
pm2 status
pm2 logs santos-cleaning-nextjs --lines 50
```

#### **SSL não funciona**
```bash
# Verificar certificado
sudo certbot certificates

# Renovar se necessário
sudo certbot renew --dry-run
```

#### **Performance baixa**
```bash
# Verificar recursos
htop
iotop
pm2 monit

# Verificar logs de erro
sudo tail -f /var/log/nginx/error.log
```

### **Logs Importantes**
- **Nginx Access:** `/var/log/nginx/access.log`
- **Nginx Error:** `/var/log/nginx/error.log`
- **PM2 Logs:** `pm2 logs`
- **Sistema:** `journalctl -u nginx`

---

## ✅ Checklist de Deploy

### **Pré-Deploy**
- [ ] Build local sem erros (`npm run build`)
- [ ] Testes passando (`npm test`)
- [ ] Variáveis de ambiente configuradas
- [ ] SSL válido no servidor

### **Durante Deploy**
- [ ] Upload do código via rsync
- [ ] Instalação de dependências (`npm ci`)
- [ ] Restart dos serviços (PM2 + Nginx)
- [ ] Verificação de status

### **Pós-Deploy**
- [ ] Site carregando em HTTPS
- [ ] Redirects funcionando
- [ ] Formulário de contato operacional
- [ ] Performance adequada (Lighthouse >80)
- [ ] Monitoramento ativo

---

## 📞 Suporte

### **Contatos de Emergência**
- **Dev Team:** desenvolvimento@santoscsolutions.com
- **Server Issues:** infraestrutura@santoscsolutions.com
- **Business:** (866) 350-9407

### **Documentação Adicional**
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **PM2 Documentation:** https://pm2.keymetrics.io/docs/
- **Nginx Configuration:** https://nginx.org/en/docs/

---

**Status:** ✅ Em Produção  
**Última Atualização:** 30/07/2025  
**Próxima Revisão:** 30/08/2025 