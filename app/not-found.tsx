import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '../components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Página Não Encontrada | Santos Cleaning Solutions',
  description: 'A página que você procura não foi encontrada. Retorne à nossa página inicial para encontrar nossos serviços de limpeza profissional em Marietta, GA.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Página Não Encontrada', current: true }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* 404 Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-6">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.455.901-6.017 2.376C4.893 18.292 4 19.265 4 20.5c0 .552.448 1 1 1h14c.552 0 1-.448 1-1 0-1.235-.893-2.208-1.983-3.124z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Oops! Página Não Encontrada
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A página que você está procurando não existe ou foi movida. 
              Não se preocupe, podemos ajudá-lo a encontrar o que precisa!
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link 
              href="/"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Página Inicial</h3>
              <p className="text-gray-600 text-sm">Conheça nossos serviços de limpeza profissional</p>
            </Link>

            <Link 
              href="/services"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nossos Serviços</h3>
              <p className="text-gray-600 text-sm">Limpeza residencial, comercial e muito mais</p>
            </Link>

            <Link 
              href="/contact"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Entre em Contato</h3>
              <p className="text-gray-600 text-sm">Solicite seu orçamento gratuito</p>
            </Link>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Precisa de Ajuda? Estamos Aqui!
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Nossa equipe está pronta para ajudá-lo com qualquer dúvida sobre nossos serviços de limpeza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+18663509407"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Ligar Agora: (866) 350-9407
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>

          {/* SEO Text */}
          <div className="mt-12 text-left max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Santos Cleaning Solutions - Limpeza Profissional em Marietta, GA
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Oferecemos serviços profissionais de limpeza residencial e comercial em Marietta, Buckhead, 
              Alpharetta, Sandy Springs e toda a região metropolitana de Atlanta. Nossa empresa familiar 
              está licenciada, segurada e comprometida em fornecer serviços de limpeza excepcionais com 
              produtos ecológicos e atenção aos detalhes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}