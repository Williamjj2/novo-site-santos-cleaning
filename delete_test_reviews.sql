-- Script para deletar reviews de teste/fake do Supabase
-- Santos Cleaning Solutions

-- Deletar reviews de teste específicos
DELETE FROM google_reviews 
WHERE author_name IN ('Test User', 'Maria Rodriguez', 'John Smith')
   OR text LIKE '%Test review%'
   OR text LIKE '%test%'
   OR text LIKE '%N8n%'
   OR text LIKE '%N8N%';

-- Opcional: Deletar TODOS os reviews e começar do zero
-- CUIDADO: Isso apagará TODOS os reviews!
-- DELETE FROM google_reviews;

-- Verificar quantos reviews restaram
SELECT COUNT(*) as total_reviews FROM google_reviews;

-- Listar os reviews restantes
SELECT author_name, rating, text, relative_time_description 
FROM google_reviews 
ORDER BY review_time DESC; 