import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile } from 'fs/promises'
import { join } from 'path'

// Interface para os dados de review do N8n
interface ReviewData {
  business_name: string
  total_reviews: number
  average_rating: number
  user_ratings_total: number
  timestamp: string
  reviews: Array<{
    author_name: string
    rating: number
    text: string
    review_time: string
    profile_photo_url?: string
  }>
}

export async function POST(request: NextRequest) {
  try {
    const body: ReviewData = await request.json()
    
    console.log('📥 Webhook N8n - Reviews update received:', {
      business_name: body.business_name,
      total_reviews: body.total_reviews,
      average_rating: body.average_rating,
      timestamp: body.timestamp
    })

    // Validar dados obrigatórios
    if (!body.business_name || !body.total_reviews || !body.average_rating) {
      return NextResponse.json(
        { 
          error: 'Missing required fields',
          required: ['business_name', 'total_reviews', 'average_rating']
        },
        { status: 400 }
      )
    }

    // Preparar dados formatados para salvar
    const reviewsData = {
      business_name: body.business_name,
      total_reviews: body.total_reviews,
      average_rating: body.average_rating,
      user_ratings_total: body.user_ratings_total || body.total_reviews,
      last_updated: new Date().toISOString(),
      timestamp: body.timestamp,
      reviews: body.reviews || []
    }

    // Salvar no arquivo JSON (em produção, seria no banco de dados)
    const filePath = join(process.cwd(), 'public', 'data', 'reviews.json')
    
    try {
      await writeFile(filePath, JSON.stringify(reviewsData, null, 2), 'utf8')
      console.log('✅ Reviews data saved successfully')
    } catch (fileError) {
      console.error('⚠️ Error saving reviews file:', fileError)
      // Continue mesmo se não conseguir salvar no arquivo
    }

    // Log da atualização
    console.log('🔄 Google Reviews updated:', {
      total_reviews: reviewsData.total_reviews,
      average_rating: reviewsData.average_rating,
      reviews_count: reviewsData.reviews.length
    })

    return NextResponse.json({
      success: true,
      message: 'Reviews updated successfully',
      data: {
        business_name: reviewsData.business_name,
        total_reviews: reviewsData.total_reviews,
        average_rating: reviewsData.average_rating,
        reviews_processed: reviewsData.reviews.length,
        last_updated: reviewsData.last_updated
      }
    })

  } catch (error) {
    console.error('❌ Error processing reviews webhook:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Retornar dados atuais dos reviews
    const filePath = join(process.cwd(), 'public', 'data', 'reviews.json')
    
    try {
      const data = await readFile(filePath, 'utf8')
      const reviewsData = JSON.parse(data)
      
      return NextResponse.json({
        status: 'active',
        webhook_url: '/api/webhook/reviews-update',
        method: 'POST',
        last_update: reviewsData.last_updated || null,
        current_data: {
          business_name: reviewsData.business_name || 'Santos Cleaning Solutions',
          total_reviews: reviewsData.total_reviews || 0,
          average_rating: reviewsData.average_rating || 0,
          reviews_count: reviewsData.reviews?.length || 0
        }
      })
    } catch {
      return NextResponse.json({
        status: 'active',
        webhook_url: '/api/webhook/reviews-update',
        method: 'POST',
        message: 'Webhook ready - no data yet',
        current_data: null
      })
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Error reading webhook status' },
      { status: 500 }
    )
  }
} 