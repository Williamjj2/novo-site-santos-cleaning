-- LIMPEZA COMPLETA DE REVIEWS FALSOS
-- Execute no Supabase SQL Editor

-- 1. DELETAR TODOS OS REVIEWS FALSOS/DEMO
DELETE FROM public.google_reviews 
WHERE review_id LIKE 'demo_%' 
   OR author_name IN (
      'Maria Santos', 
      'Carlos Silva', 
      'Ana Oliveira',
      'Maria Rodriguez',
      'John Smith',
      'Deploy Test Success'
   );

-- 2. VERIFICAR O QUE SOBROU (deve ser só reviews reais do Google)
SELECT 
    author_name, 
    rating, 
    LEFT(text, 50) as preview_text,
    relative_time_description,
    review_time
FROM public.google_reviews 
ORDER BY review_time DESC;

-- 3. CONTAR REVIEWS RESTANTES
SELECT COUNT(*) as total_real_reviews FROM public.google_reviews;

-- 4. VERIFICAR SE TEM REVIEWS DUPLICADOS
SELECT 
    author_name, 
    COUNT(*) as count
FROM public.google_reviews 
GROUP BY author_name 
HAVING COUNT(*) > 1; 