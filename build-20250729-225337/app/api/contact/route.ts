import { NextRequest, NextResponse } from 'next/server'
import { FormValidator, SecurityLogger } from '../../../lib/security'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validar e sanitizar dados
    const validation = FormValidator.validateContactForm(body)
    
    if (!validation.isValid) {
      // Log tentativa com dados inválidos
      SecurityLogger.logSecurityEvent('XSS_ATTEMPT', request, validation.errors.join(', '))
      
      return NextResponse.json(
        { 
          error: 'Dados inválidos',
          details: validation.errors 
        },
        { status: 400 }
      )
    }
    
    // Sanitizar dados
    const sanitizedData = FormValidator.sanitizeContactForm(body)
    const { name, email, phone, service, message, address } = sanitizedData

    // Criar objeto do lead
    const leadData = {
      name,
      email,
      phone,
      service: service || 'General Inquiry',
      message: message || '',
      address: address || '',
      estimated_total: body.estimatedTotal || null,
      square_feet: body.squareFeet || null,
      status: 'new',
      source: 'Next.js Website',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    console.log('Novo lead recebido:', leadData)

    // Aqui você pode integrar com seu banco de dados
    // Por exemplo: Supabase, PostgreSQL, etc.
    // await supabase.from('leads').insert([leadData])

    // Simular salvamento no banco
    // Em produção, substituir por integração real
    
    // Resposta de sucesso
    return NextResponse.json({
      success: true,
      message: 'Obrigado! Entraremos em contato em breve.',
      leadId: Math.random().toString(36).substring(7) // ID temporário
    })

  } catch (error) {
    console.error('Erro no processamento do lead:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Contact API endpoint - Use POST to submit contact form',
    status: 'active'
  })
} 