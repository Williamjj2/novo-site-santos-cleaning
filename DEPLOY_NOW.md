# 🚀 Deploy Imediato - Santos Cleaning Solutions

**Status:** ✅ Build concluído com sucesso  
**Target:** https://santoscsolutions.com (AWS EC2)  
**Method:** AWS Console + Manual commands  

---

## 📦 **PASSO 1: Preparar Build Local**

✅ **Build já concluído!** (executado com sucesso)

```bash
# Build info:
- Next.js 14.2.30 ✅
- Tamanho otimizado: 105kb First Load JS
- 10 páginas estáticas geradas
- Middleware configurado (26.6kb)
```

---

## 🌐 **PASSO 2: Conectar ao Servidor AWS**

### **Opção A: AWS Console (Recomendado)**
1. Acesse [AWS Console](https://console.aws.amazon.com)
2. Vá para **EC2 > Instances**
3. Selecione a instância: `santos-cleaning-server`
4. Clique em **Connect > Session Manager**
5. Clique **Connect**

### **Opção B: SSH (se chave configurada)**
```bash
ssh -i "sua-chave.pem" ubuntu@54.67.60.88
```

---

## ⬆️ **PASSO 3: Upload do Código**

### **3.1 Criar Pacote Local**
```bash
# No seu computador:
npm run build  # ✅ Já feito

# Criar arquivo ZIP do projeto
zip -r santos-cleaning-nextjs.zip \
  .next/ \
  public/ \
  app/ \
  components/ \
  lib/ \
  package.json \
  package-lock.json \
  next.config.js \
  middleware.ts \
  tsconfig.json \
  tailwind.config.js \
  postcss.config.js \
  production.env
```

### **3.2 Upload via AWS Console**
1. **Upload para S3** (temporário):
   - AWS Console > S3
   - Upload `santos-cleaning-nextjs.zip`
   - Copiar URL do arquivo

2. **Download no servidor**:
```bash
# No servidor AWS (via Session Manager):
cd /var/www/santos-cleaning
sudo mkdir -p backup-$(date +%Y%m%d)
sudo mv * backup-$(date +%Y%m%d)/ 2>/dev/null || true

# Download do S3 (substitua URL)
wget "https://s3-url-do-seu-arquivo/santos-cleaning-nextjs.zip"
unzip santos-cleaning-nextjs.zip
rm santos-cleaning-nextjs.zip
```

---

## 🔧 **PASSO 4: Configurar no Servidor**

Execute no servidor AWS:

```bash
cd /var/www/santos-cleaning

# 1. Instalar dependências
npm ci --production

# 2. Configurar variáveis de ambiente
cat > .env.production << 'EOF'
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://santoscsolutions.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
EOF

# 3. Criar configuração PM2
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

# 4. Parar processos antigos
pm2 delete all 2>/dev/null || true

# 5. Iniciar Next.js
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# 6. Verificar status
pm2 status
pm2 logs santos-cleaning-nextjs --lines 10
```

---

## 🌐 **PASSO 5: Configurar Nginx**

```bash
# Configuração otimizada para Next.js
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
    
    # Gzip
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/css application/javascript text/javascript application/json;
    
    # Next.js static caching
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
        proxy_read_timeout 86400;
    }
}
EOF

# Testar e recarregar Nginx
sudo nginx -t
sudo systemctl reload nginx
```

---

## ✅ **PASSO 6: Verificar Deploy**

```bash
# 1. Status dos serviços
pm2 status
sudo systemctl status nginx --no-pager

# 2. Teste local
curl -I http://localhost:3000
curl -I https://localhost

# 3. Logs em tempo real
pm2 logs santos-cleaning-nextjs
```

---

## 🧪 **PASSO 7: Teste Externo**

No seu computador, teste:

```bash
# 1. Verificar redirect HTTP→HTTPS
curl -I http://santoscsolutions.com

# 2. Verificar HTTPS funcionando
curl -I https://santoscsolutions.com

# 3. Verificar conteúdo Next.js
curl -s https://santoscsolutions.com | grep -i "next\|_next"

# 4. Teste de performance
curl -w "HTTP: %{http_code}, Time: %{time_total}s" \
     -o /dev/null -s https://santoscsolutions.com
```

---

## 🎯 **Resultados Esperados**

### **✅ Sucesso - Você deve ver:**
- ✅ PM2 status: `santos-cleaning-nextjs` online
- ✅ Nginx status: active (running)
- ✅ HTTP 301 redirect para HTTPS
- ✅ HTTPS 200 OK
- ✅ Conteúdo com `_next` (Next.js assets)
- ✅ Tempo de resposta < 1s

### **❌ Problemas Comuns:**
- **PM2 error**: Verificar logs com `pm2 logs`
- **Nginx error**: Verificar com `sudo nginx -t`
- **Port 3000 busy**: Matar processos com `sudo pkill -f "node"`
- **SSL error**: Verificar certificado Let's Encrypt

---

## 🚨 **Rollback (se necessário)**

Se algo der errado:

```bash
# Parar Next.js
pm2 delete santos-cleaning-nextjs

# Restaurar backup
cd /var/www/santos-cleaning
sudo rm -rf * 2>/dev/null
sudo mv backup-YYYYMMDD/* . 2>/dev/null

# Reiniciar serviços antigos
sudo systemctl restart nginx
```

---

## 📞 **Próximos Passos**

Após deploy bem-sucedido:

1. **Monitorar logs** primeiras 24h
2. **Configurar Google Analytics** real
3. **Testar formulário de contato**
4. **Executar Lighthouse** novamente
5. **Configurar monitoramento** uptime

---

**Status:** 🟡 Pronto para deploy  
**Estimated Time:** 15-30 minutos  
**Risk Level:** 🟢 Baixo (backup automático) 