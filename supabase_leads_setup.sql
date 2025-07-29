-- Criar tabela de leads para acompanhamento de formulários
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT,
    sms_consent BOOLEAN DEFAULT false,
    language VARCHAR(10) DEFAULT 'en',
    source VARCHAR(100) DEFAULT 'website',
    status VARCHAR(50) DEFAULT 'new',
    
    -- Dados de tracking
    user_agent TEXT,
    ip_address INET,
    utm_source VARCHAR(100),
    utm_medium VARCHAR(100),
    utm_campaign VARCHAR(100),
    
    -- Acompanhamento
    contacted_at TIMESTAMP WITH TIME ZONE,
    converted_at TIMESTAMP WITH TIME ZONE,
    notes TEXT,
    assigned_to VARCHAR(255),
    
    -- Metadados
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_source ON public.leads(source);

-- RLS (Row Level Security)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Política: Permitir INSERT/SELECT/UPDATE para usuários autenticados
CREATE POLICY "Enable read/write for service role" ON public.leads
    FOR ALL USING (true);

-- Trigger para atualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_leads_updated_at 
    BEFORE UPDATE ON public.leads 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Dados de exemplo (opcional)
INSERT INTO public.leads (name, phone, email, message, status, source) VALUES
    ('João Silva', '(11) 99999-1234', 'joao@email.com', 'Preciso de limpeza residencial', 'new', 'website'),
    ('Maria Santos', '(11) 88888-5678', 'maria@email.com', 'Orçamento para limpeza pós-obra', 'contacted', 'google_ads'),
    ('Carlos Oliveira', '(11) 77777-9012', 'carlos@email.com', 'Limpeza semanal', 'converted', 'facebook')
ON CONFLICT (id) DO NOTHING; 