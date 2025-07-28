# 🚀 Deploy Automação de Reviews Google

## ✅ **O QUE FOI IMPLEMENTADO**

### **Nova Funcionalidade:**
- ✅ Webhook `/api/webhook/reviews-update` no backend
- ✅ Integração automática n8n → Backend → Supabase
- ✅ Sistema de prevenção de duplicatas
- ✅ Logs detalhados para monitoramento
- ✅ **100% compatível** com sistema existente

### **Melhorias:**
- ✅ Query Supabase otimizada com novos indexes
- ✅ Estrutura de dados completa
- ✅ Sistema de fallback robusto
- ✅ Script de teste automatizado

---

## 📋 **CHECKLIST DE DEPLOY**

### **FASE 1: Preparação (5 min)**

```bash
# 1. ✅ Backup do sistema atual
git add .
git commit -m "feat: add Google Reviews automation webhook"
git push origin main

# 2. ✅ Verificar mudanças implementadas:
# - backend/server.py (novo webhook)
# - production.env.example (nova variável)
# - supabase_reviews_setup.sql (estrutura otimizada)
# - test_webhook_reviews.py (teste automatizado)
```

### **FASE 2: Supabase Setup (3 min)**

```sql
-- Execute esta query no Supabase SQL Editor:
-- (Cole o conteúdo completo de supabase_reviews_setup.sql)

-- A query vai:
-- ✅ Verificar estrutura existente
-- ✅ Criar/otimizar indexes
-- ✅ Configurar políticas RLS
-- ✅ Inserir dados de exemplo (se vazio)
-- ✅ Mostrar relatório final
```

### **FASE 3: Configurar Variáveis (2 min)**

```bash
# No seu ambiente de produção, adicione:
SUPABASE_SERVICE_ROLE_KEY=sua_service_role_key_aqui

# 🔑 Como obter a Service Role Key:
# 1. Supabase Dashboard → Settings → API
# 2. Copie a "service_role" secret key
# 3. NÃO use a "anon" key para este webhook
```

### **FASE 4: Deploy Backend (5 min)**

```bash
# Seu método de deploy atual:
# - Upload via FTP/SSH
# - Docker rebuild
# - PM2 restart
# - Etc.

# Reiniciar backend após mudanças
# O webhook estará disponível em:
# https://santoscsolutions.com/api/webhook/reviews-update
```

### **FASE 5: Teste Automatizado (2 min)**

```bash
# Execute o script de teste:
python test_webhook_reviews.py

# Resultado esperado:
# ✅ API existente: OK
# ✅ Novo webhook: OK
# 🎉 TODOS OS TESTES PASSARAM!
```

### **FASE 6: Configurar n8n (1 min)**

```bash
# No seu workflow n8n existente:
# Apenas certifique-se que o endpoint está correto:
# https://santoscsolutions.com/api/webhook/reviews-update

# O workflow atual já está configurado corretamente!
```

---

## 🎯 **RESULTADO ESPERADO**

### **Fluxo Completo:**
```
n8n (a cada 6h) → Google Places API → Webhook → Backend → Supabase → Frontend
```

### **Logs de Sucesso:**
```bash
🔔 Webhook recebido: 5 reviews de Santos Cleaning Solutions
⭐ Rating médio: 4.8
✅ Review salvo: Maria Rodriguez - 5⭐
✅ Review salvo: John Smith - 5⭐
⏭️ Review já existe: gp_carlos_silva_1705741200_5
📊 RESULTADO: 2 salvos, 1 duplicatas, 0 erros
```

---

## ⚠️ **TROUBLESHOOTING**

### **Se webhook retorna 500:**
```bash
# Verificar logs do backend
# Possíveis causas:
# - SUPABASE_SERVICE_ROLE_KEY não configurada
# - Supabase inacessível
# - Formato de dados incorreto
```

### **Se reviews não aparecem no site:**
```bash
# Verificar:
curl "https://santoscsolutions.com/api/reviews"

# Deve retornar JSON com reviews do Supabase
# Se retornar fallback, verificar configuração Supabase
```

### **Se n8n não consegue chamar webhook:**
```bash
# Testar manualmente:
curl -X POST "https://santoscsolutions.com/api/webhook/reviews-update" \
-H "Content-Type: application/json" \
-d '{"action":"test","timestamp":"2024-01-20T10:00:00Z","business_name":"Test","total_reviews":1,"average_rating":5.0,"user_ratings_total":1,"reviews":[{"author_name":"Test","rating":5,"text":"Test"}]}'
```

---

## 📊 **MONITORAMENTO**

### **Verificar Sistema Funcionando:**

```sql
-- No Supabase, execute para ver reviews recentes:
SELECT 
    author_name, rating, 
    relative_time_description, 
    created_at 
FROM google_reviews 
WHERE created_at >= NOW() - INTERVAL '24 hours'
ORDER BY created_at DESC;

-- Estatísticas gerais:
SELECT * FROM review_stats;
```

### **Métricas Importantes:**
- ✅ **Frequência**: Reviews atualizados a cada 6h
- ✅ **Duplicatas**: Sistema previne automaticamente
- ✅ **Performance**: Queries otimizadas com indexes
- ✅ **Fallback**: Site funciona mesmo se Supabase falhar

---

## 🔧 **COMANDOS ÚTEIS**

### **Teste Local (antes do deploy):**
```bash
# Mudar BASE_URL no test_webhook_reviews.py para:
BASE_URL = "http://localhost:8001"

# Rodar backend local:
cd backend && python server.py

# Testar:
python test_webhook_reviews.py
```

### **Limpar Cache/Restart:**
```bash
# PM2 (se usando):
pm2 restart santos-backend

# Docker (se usando):
docker-compose restart backend

# Nginx (cache):
sudo nginx -s reload
```

### **Ver Logs em Tempo Real:**
```bash
# Backend logs
tail -f /var/log/santos-backend.log

# Nginx logs
tail -f /var/log/nginx/access.log
```

---

## ✅ **CONFIRMAÇÃO FINAL**

Após deploy, confirme que:

- [ ] ✅ Site funciona normalmente
- [ ] ✅ Reviews são exibidos (mesmo que ainda sejam fallback)
- [ ] ✅ Webhook responde 200 OK
- [ ] ✅ n8n consegue executar workflow
- [ ] ✅ Supabase recebe novos reviews
- [ ] ✅ Frontend mostra reviews do Supabase

**🎉 Sistema 100% funcional e automático!**

---

## 📱 **Suporte**

Em caso de problemas:
1. Execute `python test_webhook_reviews.py`
2. Verifique logs do backend
3. Confirme configuração Supabase
4. Teste workflow n8n manualmente

**O sistema foi projetado para ser robusto e não quebrar nada existente!** 