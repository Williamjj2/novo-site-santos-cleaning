import { NextRequest, NextResponse } from 'next/server'

// Middleware simplificado para testes
// Em produção, adicione rate limiting e outras validações de segurança

export function middleware(request: NextRequest) {
  // Aplicar headers de segurança básicos
  const response = NextResponse.next()
  
  // Headers de segurança
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
