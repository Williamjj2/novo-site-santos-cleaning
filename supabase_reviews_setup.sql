-- SQL para criar tabela google_reviews no Supabase
-- Execute no SQL Editor do Supabase

-- Verificar se tabela já existe
DO $$ 
BEGIN
    IF EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'google_reviews') THEN
        RAISE NOTICE 'Tabela google_reviews já existe, verificando estrutura...';
    ELSE
        RAISE NOTICE 'Criando nova tabela google_reviews...';
    END IF;
END $$;

CREATE TABLE IF NOT EXISTS public.google_reviews (
    id SERIAL PRIMARY KEY,
    review_id VARCHAR(255) UNIQUE NOT NULL,
    author_name VARCHAR(255) NOT NULL,
    author_url VARCHAR(500),
    language VARCHAR(10) DEFAULT 'en',
    profile_photo_url VARCHAR(500),
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    relative_time_description VARCHAR(100),
    text TEXT,
    review_time TIMESTAMP WITH TIME ZONE,
    review_timestamp BIGINT,
    translated BOOLEAN DEFAULT FALSE,
    original_language VARCHAR(10),
    original_text TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    is_featured BOOLEAN DEFAULT FALSE,
    response_from_owner TEXT,
    response_time TIMESTAMP WITH TIME ZONE,
    helpful_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes para performance OTIMIZADA
DROP INDEX IF EXISTS idx_google_reviews_rating;
DROP INDEX IF EXISTS idx_google_reviews_active;
DROP INDEX IF EXISTS idx_google_reviews_featured;
DROP INDEX IF EXISTS idx_google_reviews_time;
DROP INDEX IF EXISTS idx_google_reviews_review_id;

CREATE INDEX IF NOT EXISTS idx_google_reviews_rating ON public.google_reviews(rating);
CREATE INDEX IF NOT EXISTS idx_google_reviews_active ON public.google_reviews(is_active);
CREATE INDEX IF NOT EXISTS idx_google_reviews_featured ON public.google_reviews(is_featured);
CREATE INDEX IF NOT EXISTS idx_google_reviews_time ON public.google_reviews(review_time DESC);
CREATE INDEX IF NOT EXISTS idx_google_reviews_review_id ON public.google_reviews(review_id);

-- Index composto para queries mais eficientes (NOVO)
CREATE INDEX IF NOT EXISTS idx_google_reviews_active_featured_time 
ON public.google_reviews(is_active, is_featured, review_time DESC);

-- Enable Row Level Security
ALTER TABLE public.google_reviews ENABLE ROW LEVEL SECURITY;

-- Drop policies existentes se houver
DROP POLICY IF EXISTS "Allow public read access" ON public.google_reviews;
DROP POLICY IF EXISTS "Allow service role insert" ON public.google_reviews;
DROP POLICY IF EXISTS "Allow service role update" ON public.google_reviews;

-- Policy para permitir leitura pública
CREATE POLICY "Allow public read access" ON public.google_reviews
    FOR SELECT USING (is_active = true);

-- Policy para inserção via service role (para N8N)
CREATE POLICY "Allow service role insert" ON public.google_reviews
    FOR INSERT WITH CHECK (true);

-- Policy para update via service role
CREATE POLICY "Allow service role update" ON public.google_reviews
    FOR UPDATE USING (true);

-- Trigger para updated_at automático
DROP TRIGGER IF EXISTS update_google_reviews_updated_at ON public.google_reviews;
DROP FUNCTION IF EXISTS update_updated_at_column();

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_google_reviews_updated_at
BEFORE UPDATE ON public.google_reviews
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Inserir dados de exemplo para teste (APENAS SE TABELA ESTIVER VAZIA)
INSERT INTO public.google_reviews (
review_id, author_name, rating, text, relative_time_description,
profile_photo_url, review_time, is_active, is_featured
) 
SELECT 
'demo_maria_santos_001',
'Maria Santos',
5,
'Excelente serviço! A Santos Cleaning Solutions superou todas as minhas expectativas. Karen e William são extremamente profissionais.',
'2 semanas atrás',
'https://ui-avatars.com/api/?name=Maria+Santos&background=4285F4&color=fff&size=128',
NOW() - INTERVAL '14 days',
true,
true
WHERE NOT EXISTS (SELECT 1 FROM public.google_reviews LIMIT 1);

INSERT INTO public.google_reviews (
review_id, author_name, rating, text, relative_time_description,
profile_photo_url, review_time, is_active, is_featured
) 
SELECT 
'demo_carlos_silva_002',
'Carlos Silva',
5,
'Melhor serviço de limpeza de Marietta! Atenção aos detalhes impecável e pontualidade perfeita.',
'1 mês atrás',
'https://ui-avatars.com/api/?name=Carlos+Silva&background=34A853&color=fff&size=128',
NOW() - INTERVAL '30 days',
true,
true
WHERE (SELECT COUNT(*) FROM public.google_reviews) <= 1;

INSERT INTO public.google_reviews (
review_id, author_name, rating, text, relative_time_description,
profile_photo_url, review_time, is_active, is_featured
) 
SELECT 
'demo_ana_oliveira_003',
'Ana Oliveira',
5,
'Fantástico! Casa ficou impecável. Empresa familiar que realmente se importa com o cliente.',
'1 semana atrás',
'https://ui-avatars.com/api/?name=Ana+Oliveira&background=FBBC04&color=fff&size=128',
NOW() - INTERVAL '7 days',
true,
true
WHERE (SELECT COUNT(*) FROM public.google_reviews) <= 2;

-- Criar VIEW para estatísticas (NOVO - para dashboard)
CREATE OR REPLACE VIEW public.review_stats AS
SELECT 
    COUNT(*) as total_reviews,
    AVG(rating) as average_rating,
    COUNT(*) FILTER (WHERE rating = 5) as five_star_count,
    COUNT(*) FILTER (WHERE rating = 4) as four_star_count,
    COUNT(*) FILTER (WHERE rating <= 3) as low_rating_count,
    COUNT(*) FILTER (WHERE is_featured = true) as featured_count,
    MAX(review_time) as latest_review_time,
    COUNT(*) FILTER (WHERE review_time >= NOW() - INTERVAL '30 days') as reviews_last_30_days
FROM public.google_reviews
WHERE is_active = true;

-- Função para limpeza automática de reviews muito antigos (opcional)
CREATE OR REPLACE FUNCTION cleanup_old_reviews()
RETURNS INTEGER AS $$
DECLARE
    deleted_count INTEGER;
BEGIN
    -- Manter apenas os últimos 100 reviews mais recentes
    WITH ranked_reviews AS (
        SELECT id, ROW_NUMBER() OVER (ORDER BY review_time DESC) as rn
        FROM public.google_reviews
        WHERE is_active = true
    )
    UPDATE public.google_reviews 
    SET is_active = false, updated_at = NOW()
    WHERE id IN (
        SELECT id FROM ranked_reviews WHERE rn > 100
    );
    
    GET DIAGNOSTICS deleted_count = ROW_COUNT;
    RETURN deleted_count;
END;
$$ LANGUAGE plpgsql;

-- Verificação final e relatório
DO $$
DECLARE
    table_count INTEGER;
    index_count INTEGER;
    policy_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO table_count FROM public.google_reviews;
    SELECT COUNT(*) INTO index_count FROM pg_indexes WHERE tablename = 'google_reviews';
    SELECT COUNT(*) INTO policy_count FROM pg_policies WHERE tablename = 'google_reviews';
    
    RAISE NOTICE '✅ SETUP COMPLETO:';
    RAISE NOTICE '   📊 Reviews na tabela: %', table_count;
    RAISE NOTICE '   🔍 Indexes criados: %', index_count;
    RAISE NOTICE '   🔒 Políticas RLS: %', policy_count;
    RAISE NOTICE '   ✅ Estrutura pronta para produção!';
END $$;