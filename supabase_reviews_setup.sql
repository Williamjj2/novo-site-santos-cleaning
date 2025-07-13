-- SQL para criar tabela google_reviews no Supabase
-- Execute no SQL Editor do Supabase

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

-- Indexes para performance
CREATE INDEX IF NOT EXISTS idx_google_reviews_rating ON public.google_reviews(rating);
CREATE INDEX IF NOT EXISTS idx_google_reviews_active ON public.google_reviews(is_active);
CREATE INDEX IF NOT EXISTS idx_google_reviews_featured ON public.google_reviews(is_featured);
CREATE INDEX IF NOT EXISTS idx_google_reviews_time ON public.google_reviews(review_time DESC);
CREATE INDEX IF NOT EXISTS idx_google_reviews_review_id ON public.google_reviews(review_id);

-- Enable Row Level Security
ALTER TABLE public.google_reviews ENABLE ROW LEVEL SECURITY;

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

-- Inserir dados de exemplo (opcional para testar)
INSERT INTO public.google_reviews (
    review_id, author_name, rating, text, relative_time_description, 
    profile_photo_url, review_time, is_active, is_featured
) VALUES 
(
    'sample_1', 
    'Maria Rodriguez', 
    5, 
    'Santos Cleaning Solutions exceeded all my expectations! Karen and William are incredibly professional and detail-oriented. They transformed our home completely - every corner sparkles now.',
    '2 weeks ago',
    'https://ui-avatars.com/api/?name=Maria+Rodriguez&background=4285F4&color=fff&size=128&font-size=0.6&bold=true',
    NOW() - INTERVAL '14 days',
    true,
    true
),
(
    'sample_2',
    'John Smith', 
    5,
    'Best cleaning service in Marietta! William and Karen are amazing - they pay attention to every single detail and are incredibly reliable.',
    '1 month ago',
    'https://ui-avatars.com/api/?name=John+Smith&background=34A853&color=fff&size=128&font-size=0.6&bold=true',
    NOW() - INTERVAL '30 days',
    true,
    false
),
(
    'sample_3',
    'Sarah Johnson',
    5,
    'Santos Cleaning Solutions is absolutely fantastic! This family-owned business really cares about their customers. They did a deep cleaning of our entire house and it looks brand new.',
    '3 weeks ago', 
    'https://ui-avatars.com/api/?name=Sarah+Johnson&background=FBBC04&color=fff&size=128&font-size=0.6&bold=true',
    NOW() - INTERVAL '21 days',
    true,
    true
);

-- View para estatísticas (opcional)
CREATE OR REPLACE VIEW public.review_stats AS
SELECT 
    COUNT(*) as total_reviews,
    AVG(rating)::DECIMAL(3,2) as average_rating,
    COUNT(*) FILTER (WHERE rating = 5) as five_star_count,
    COUNT(*) FILTER (WHERE rating = 4) as four_star_count,
    COUNT(*) FILTER (WHERE rating = 3) as three_star_count,
    COUNT(*) FILTER (WHERE rating = 2) as two_star_count,
    COUNT(*) FILTER (WHERE rating = 1) as one_star_count,
    COUNT(*) FILTER (WHERE is_featured = true) as featured_count
FROM public.google_reviews 
WHERE is_active = true;