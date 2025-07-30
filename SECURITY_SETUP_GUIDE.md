# 🚀 **GUIA RÁPIDO DE SETUP - SEGURANÇA NEXT.JS 14**

**Projeto:** Santos Cleaning Solutions  
**Objetivo:** Configurar segurança enterprise em produção  
**Tempo estimado:** 30 minutos  

---

## ⚡ **SETUP RÁPIDO (5 PASSOS)**

### 🔥 **1. Configurar Redis (Upstash) - OBRIGATÓRIO**

```bash
# 1. Acesse: https://upstash.com
# 2. Criar conta gratuita
# 3. Create Database → Redis
# 4. Copiar credenciais:

UPSTASH_REDIS_REST_URL=https://xxxxxxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=AxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxZ
```

### 🔑 **2. Gerar Chaves de Segurança**

```bash
# Executar no terminal:
echo "JWT_SECRET=$(openssl rand -base64 32)"
echo "ENCRYPTION_KEY=$(openssl rand -hex 32)"
echo "PASSWORD_SALT=$(openssl rand -base64 16)"
```

### 📄 **3. Criar .env.local**

```bash
# Copiar template e adicionar valores reais:
cp env.template .env.local

# Editar .env.local com as chaves geradas acima
# Adicionar credenciais do Upstash Redis
```

### 📨 **4. Configurar Webhook (Opcional mas Recomendado)**

```bash
# Slack Webhook:
# 1. Acesse: https://api.slack.com/messaging/webhooks
# 2. Create New App → Incoming Webhooks
# 3. Copiar Webhook URL

WEBHOOK_URL=https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
```

### 🚀 **5. Deploy**

```bash
# Build e test local:
npm run build
npm run start

# Deploy Vercel:
vercel --prod

# Adicionar variáveis no dashboard Vercel
```

---

## 🔒 **CONFIGURAÇÕES MÍNIMAS OBRIGATÓRIAS**

### ✅ **Para Funcionar:**
```bash
# .env.local MÍNIMO:
NEXT_PUBLIC_SITE_URL=https://seudominio.com
UPSTASH_REDIS_REST_URL=https://xxxxxxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=Axxxxxxxxxxxxxxxxxxxxxxx
JWT_SECRET=sua_chave_jwt_32_caracteres
ENCRYPTION_KEY=sua_chave_encriptacao_64_chars
PASSWORD_SALT=seu_salt_16_chars
```

### ⚠️ **Para Produção Segura:**
```bash
# Adicionar também:
BLOCKED_IPS=ip1,ip2,ip3
WEBHOOK_URL=https://hooks.slack.com/services/...
SENTRY_DSN=https://xxxxxxx@sentry.io/xxxxxxx
```

---

## 🧪 **TESTE RÁPIDO DE SEGURANÇA**

### 🔄 **1. Testar Rate Limiting:**
```bash
# Executar 105 requests:
for i in {1..105}; do curl -s https://seusite.com/ > /dev/null; done

# Deve retornar 429 (Too Many Requests) após 100
```

### 🛡️ **2. Testar SQL Injection:**
```bash
curl -X POST https://seusite.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"test'\'' UNION SELECT * FROM users--","email":"test@test.com","phone":"123456789"}'

# Deve retornar 400 com erro de validação
```

### 🕳️ **3. Testar Honeypot:**
```bash
curl https://seusite.com/admin

# Deve retornar página fake de admin (status 200)
```

### 📊 **4. Verificar Headers:**
```bash
curl -I https://seusite.com/

# Deve mostrar headers de segurança:
# Strict-Transport-Security: max-age=31536000
# X-Frame-Options: DENY
# Content-Security-Policy: ...
```

---

## 🎯 **CHECKLIST DE PRODUÇÃO**

### ✅ **Antes do Deploy:**
- [ ] Redis configurado (Upstash)
- [ ] Chaves geradas (JWT, Encryption, Salt)
- [ ] .env.local criado com valores reais
- [ ] Build funcionando (`npm run build`)
- [ ] Webhook configurado (Slack/Discord)

### ✅ **Após o Deploy:**
- [ ] Rate limiting funcionando (teste 105 requests)
- [ ] SQL injection bloqueada
- [ ] Honeypot capturando bots
- [ ] Headers de segurança presentes
- [ ] Logs sendo gerados no console
- [ ] Alertas chegando no Slack

### ✅ **Monitoramento:**
- [ ] Configurar Sentry para errors
- [ ] Configurar Google Analytics
- [ ] Configurar alertas de uptime
- [ ] Documentar credenciais de forma segura

---

## 🚨 **COMANDOS DE EMERGÊNCIA**

### 🔴 **Bloquear IP Malicioso:**
```bash
# Adicionar IP à variável de ambiente:
BLOCKED_IPS=ip_atual,IP_MALICIOSO_NOVO

# Redeploy imediato
```

### 📊 **Ver Logs de Segurança:**
```bash
# No Vercel:
vercel logs --follow

# No console procurar por:
# [SECURITY_BLOCKED_IP]
# [SECURITY_SQL_INJECTION]
# [SECURITY_HONEYPOT]
```

### 🔧 **Disable Segurança (EMERGÊNCIA):**
```bash
# APENAS EM EMERGÊNCIA:
SECURITY_BYPASS=true

# LEMBRAR DE REVERTER DEPOIS!
```

---

## 📈 **MÉTRICAS IMPORTANTES**

### 🎯 **O que Monitorar:**
- **Rate Limit Hits:** Quantos bloqueios por hour/day
- **Attack Attempts:** SQL Injection, XSS por day
- **Honeypot Triggers:** Bots capturados por day
- **Response Time:** < 1000ms sempre
- **Error Rate:** < 0.1% de requests

### 📊 **Ferramentas Recomendadas:**
- **Security Headers:** https://securityheaders.com
- **SSL Test:** https://www.ssllabs.com/ssltest/
- **Performance:** https://pagespeed.web.dev/
- **Uptime:** https://uptimerobot.com/

---

## 💡 **DICAS PRO**

### 🔥 **Performance:**
- Rate limiting usa Redis - super rápido
- Headers de segurança não afetam performance
- Middleware otimizado para < 1ms overhead

### 🛡️ **Segurança:**
- Honeypots confundem bots maliciosos
- IPs bloqueados são salvos em memória (rápido)
- Logs estruturados facilitam análise

### 🚀 **Escalabilidade:**
- Redis Upstash escala automaticamente
- Middleware funciona em edge (Vercel)
- Headers aplicados via CDN

---

## 📞 **SUPORTE**

### 🆘 **Em Caso de Problemas:**
1. **Verificar .env.local** - todas as variáveis presentes?
2. **Verificar Redis** - Upstash funcionando?
3. **Verificar logs** - errors no console?
4. **Verificar build** - `npm run build` funcionando?

### 📧 **Contatos:**
- **Email:** security@santoscsolutions.com
- **Telefone:** (866) 350-9407
- **Documentação:** SECURITY_DOCUMENTATION.md

---

## ⚡ **TLDR - SETUP EM 5 MINUTOS**

```bash
# 1. Configurar Upstash Redis (https://upstash.com)
# 2. Gerar chaves:
echo "JWT_SECRET=$(openssl rand -base64 32)" >> .env.local
echo "ENCRYPTION_KEY=$(openssl rand -hex 32)" >> .env.local
echo "PASSWORD_SALT=$(openssl rand -base64 16)" >> .env.local

# 3. Adicionar Redis:
echo "UPSTASH_REDIS_REST_URL=SUA_URL_AQUI" >> .env.local
echo "UPSTASH_REDIS_REST_TOKEN=SEU_TOKEN_AQUI" >> .env.local

# 4. Build e deploy:
npm run build
vercel --prod

# 5. Testar:
curl -I https://seusite.com/
```

**🔒 SEGURANÇA ENTERPRISE EM 5 MINUTOS!**

---

**✅ Status:** Pronto para produção  
**🛡️ Nível:** Enterprise Security  
**⚡ Performance:** Otimizado  
**📊 Monitoring:** Completo 