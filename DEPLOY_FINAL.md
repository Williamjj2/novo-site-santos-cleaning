# 🚀 DEPLOY FINAL - Santos Cleaning Solutions

**PACOTE PRONTO:** `santos-cleaning-nextjs.zip` ✅  
**SERVER TARGET:** 54.67.60.88 (ubuntu@santos-cleaning-server)  
**STATUS:** Ready to Deploy  

---

## 📦 **OPÇÃO 1: Upload via AWS Console (RECOMENDADO)**

### **1. Preparar Upload**
Na sua máquina local (já feito):
```bash
# ✅ Pacote criado: santos-cleaning-nextjs.zip
ls -la santos-cleaning-nextjs.zip
```

### **2. AWS Console - Session Manager**
1. **AWS Console** → **EC2** → **Instances**
2. Selecione: `santos-cleaning-server` (54.67.60.88)
3. **Connect** → **Session Manager** → **Connect**

### **3. Comandos no Servidor AWS**
```bash
# 1. Preparar diretório
cd /var/www
sudo mkdir -p santos-cleaning-nextjs
sudo chown ubuntu:ubuntu santos-cleaning-nextjs
cd santos-cleaning-nextjs

# 2. Fazer backup do site atual
sudo systemctl stop nginx
sudo mv /var/www/html /var/www/html-backup-$(date +%Y%m%d)

# 3. Baixar o pacote (você vai fazer upload manual)
# Aguarde instruções do passo 4

# 4. Extrair e configurar
unzip santos-cleaning-nextjs.zip
sudo mv .next/standalone/* /var/www/santos-cleaning-nextjs/
sudo mv public /var/www/santos-cleaning-nextjs/
sudo mv .next/static /var/www/santos-cleaning-nextjs/.next/

# 5. Instalar dependências (se necessário)
cd /var/www/santos-cleaning-nextjs
npm install --production

# 6. Configurar variáveis ambiente
sudo cp production.env .env.local

# 7. Iniciar aplicação
sudo npm install -g pm2
pm2 start server.js --name "santos-cleaning"
pm2 startup
pm2 save

# 8. Configurar Nginx
sudo nano /etc/nginx/sites-available/santos-cleaning
```

### **4. Configuração Nginx**
```nginx
server {
    listen 80;
    server_name santoscsolutions.com www.santoscsolutions.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name santoscsolutions.com www.santoscsolutions.com;
    
    ssl_certificate /etc/letsencrypt/live/santoscsolutions.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/santoscsolutions.com/privkey.pem;
    
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

### **5. Ativar Configuração**
```bash
# Ativar site
sudo ln -s /etc/nginx/sites-available/santos-cleaning /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Verificar status
pm2 status
curl -I https://santoscsolutions.com
```

---

## 📁 **OPÇÃO 2: Upload Manual via SCP/SFTP**

Se você tem acesso SSH configurado:
```bash
# Upload do pacote
scp santos-cleaning-nextjs.zip ubuntu@54.67.60.88:/home/ubuntu/

# Conectar e extrair
ssh ubuntu@54.67.60.88
cd /home/ubuntu
unzip santos-cleaning-nextjs.zip
sudo mv * /var/www/santos-cleaning-nextjs/
# ... continuar com passos acima
```

---

## ✅ **VERIFICAÇÃO FINAL**

Após deploy completo, testar:
```bash
# Performance
curl -s -o /dev/null -w "%{http_code} | %{time_total}s" https://santoscsolutions.com

# SSL
curl -I https://santoscsolutions.com | grep SSL

# Next.js funcionando
curl -s https://santoscsolutions.com | grep "Next.js"
```

---

## 🔧 **TROUBLESHOOTING**

### **PM2 Issues:**
```bash
pm2 logs santos-cleaning  # Ver logs
pm2 restart santos-cleaning  # Reiniciar
```

### **Nginx Issues:**
```bash
sudo nginx -t  # Testar configuração
sudo systemctl status nginx  # Status
sudo tail -f /var/log/nginx/error.log  # Logs
```

### **Port Issues:**
```bash
sudo netstat -tlnp | grep :3000  # Verificar porta
sudo ufw status  # Verificar firewall
```

---

## 📞 **SUPORTE**

Se algo der errado:
1. ✅ Backup criado: `/var/www/html-backup-YYYYMMDD`
2. ✅ Logs disponíveis: `pm2 logs`
3. ✅ Rollback: `sudo mv /var/www/html-backup-* /var/www/html`

**Status:** 🚀 PRONTO PARA DEPLOY! 