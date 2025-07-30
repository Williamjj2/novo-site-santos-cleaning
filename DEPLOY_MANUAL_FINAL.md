# 🚀 DEPLOY MANUAL FINAL - Santos Cleaning Solutions

**PACOTE PRONTO:** `santos-cleaning-nextjs-prod.zip` (13MB) ✅  
**TARGET:** https://santoscsolutions.com (54.67.60.88)  
**STATUS:** PRONTO PARA DEPLOY IMEDIATO  

---

## 📦 **PACOTE OTIMIZADO CRIADO**

### ✅ **Novo Build de Produção:**
- **Arquivo:** `santos-cleaning-nextjs-prod.zip` (13MB)
- **Performance:** 105kb First Load JS
- **Páginas:** 10 páginas estáticas otimizadas
- **Middleware:** 26.6kb
- **Status:** Build bem-sucedido

---

## 🎯 **DEPLOY VIA AWS CONSOLE**

### **PASSO 1: Upload do Arquivo**
1. **Baixar pacote:** `santos-cleaning-nextjs-prod.zip` (13MB)
2. **AWS Console** → **EC2** → **Instances** 
3. **Selecionar:** `santos-cleaning-server` (54.67.60.88)
4. **Connect** → **Session Manager** → **Connect**

### **PASSO 2: Comandos no Servidor**
```bash
# 1. Preparar ambiente
cd /home/ubuntu
sudo systemctl stop nginx

# 2. Backup do site atual
sudo cp -r /var/www/html /var/www/html-backup-$(date +%Y%m%d-%H%M)

# 3. Upload manual do arquivo
# (Fazer upload via AWS Console File Manager ou SCP)

# 4. Extrair pacote
unzip santos-cleaning-nextjs-prod.zip
```

### **PASSO 3: Configurar Next.js**
```bash
# 5. Mover arquivos para local correto
sudo rm -rf /var/www/santos-cleaning
sudo mkdir -p /var/www/santos-cleaning
sudo cp -r .next/standalone/* /var/www/santos-cleaning/
sudo cp -r public /var/www/santos-cleaning/
sudo cp -r .next/static /var/www/santos-cleaning/.next/

# 6. Configurar permissões
sudo chown -R ubuntu:ubuntu /var/www/santos-cleaning
cd /var/www/santos-cleaning

# 7. Configurar variáveis ambiente
cp production.env .env.local

# 8. Instalar PM2 (se não estiver instalado)
sudo npm install -g pm2

# 9. Iniciar aplicação Next.js
pm2 start server.js --name "santos-cleaning-nextjs"
pm2 startup
pm2 save
```

### **PASSO 4: Configurar Nginx**
```bash
# 10. Criar configuração Nginx
sudo nano /etc/nginx/sites-available/santos-cleaning-nextjs
```

**Conteúdo do arquivo:**
```nginx
server {
    listen 80;
    server_name santoscsolutions.com www.santoscsolutions.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name santoscsolutions.com www.santoscsolutions.com;
    
    # SSL Configuration (manter existente)
    ssl_certificate /etc/letsencrypt/live/santoscsolutions.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/santoscsolutions.com/privkey.pem;
    
    # Next.js Proxy
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

### **PASSO 5: Ativar e Testar**
```bash
# 11. Ativar nova configuração
sudo ln -sf /etc/nginx/sites-available/santos-cleaning-nextjs /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# 12. Testar configuração
sudo nginx -t

# 13. Reiniciar serviços
sudo systemctl reload nginx

# 14. Verificar status
pm2 status
pm2 logs santos-cleaning-nextjs

# 15. Testar site
curl -I https://santoscsolutions.com
```

---

## ✅ **VERIFICAÇÃO FINAL**

### **Status Check:**
```bash
# Performance
curl -s -o /dev/null -w "Status: %{http_code} | Time: %{time_total}s" https://santoscsolutions.com

# SSL
curl -I https://santoscsolutions.com | grep -i ssl

# Next.js funcionando
curl -s https://santoscsolutions.com | grep -i next
```

### **Resultado Esperado:**
- ✅ **Status:** 200 OK
- ✅ **SSL:** Certificado válido
- ✅ **Performance:** < 1s response time
- ✅ **Next.js:** App funcionando

---

## 🔧 **TROUBLESHOOTING**

### **PM2 Issues:**
```bash
pm2 logs santos-cleaning-nextjs    # Ver logs
pm2 restart santos-cleaning-nextjs # Reiniciar
pm2 delete santos-cleaning-nextjs  # Remover (se necessário)
```

### **Nginx Issues:**
```bash
sudo nginx -t                     # Testar config
sudo systemctl status nginx       # Status
sudo tail -f /var/log/nginx/error.log  # Logs
```

### **Port Issues:**
```bash
sudo netstat -tlnp | grep :3000   # Verificar porta 3000
sudo ufw status                   # Firewall
```

---

## 📞 **ROLLBACK (Se Necessário)**

```bash
# Parar novo site
pm2 delete santos-cleaning-nextjs

# Restaurar site anterior
sudo systemctl stop nginx
sudo rm -rf /var/www/html
sudo mv /var/www/html-backup-* /var/www/html

# Restaurar config nginx anterior
sudo rm /etc/nginx/sites-enabled/santos-cleaning-nextjs
# (reativar configuração anterior se necessário)

sudo systemctl start nginx
```

---

## 🎊 **DEPLOY STATUS**

| Item | Status | Observação |
|------|--------|------------|
| **✅ Git Updated** | Completo | 45 files, 17k+ insertions |
| **✅ Build Next.js** | Completo | 105kb bundle, 10 páginas |
| **✅ Package Ready** | Completo | 13MB otimizado |
| **🔄 AWS Deploy** | Aguardando | Manual via Console |
| **⏳ Production Test** | Pendente | Após deploy |

---

**🚀 READY FOR MANUAL DEPLOY!**  
**Arquivo:** `santos-cleaning-nextjs-prod.zip` (13MB)  
**Método:** AWS Console + Manual Commands  
**Tempo estimado:** 10-15 minutos  

**Sucesso! 🎯** 