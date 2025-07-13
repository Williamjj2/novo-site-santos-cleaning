# Configuração para Produção - Santos Cleaning Solutions

## Backend (FastAPI)
- Porta: 8000
- Comando: uvicorn server:app --host 0.0.0.0 --port 8000

## Frontend (React Build)
- Arquivos estáticos em: build/
- Servidor: Nginx ou Apache
- Porta: 80/443

## Banco de Dados
- MongoDB: Configurar string de conexão em produção
- Variável: MONGO_URL

## Variáveis de Ambiente para Produção:
MONGO_URL=sua_string_mongodb_producao
SUPABASE_URL=sua_url_supabase
SUPABASE_ANON_KEY=sua_chave_supabase
REACT_APP_BACKEND_URL=https://seudominio.com