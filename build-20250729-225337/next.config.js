const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações de Segurança
  poweredByHeader: false, // Remove X-Powered-By header
  
  // Otimizações de Performance
  swcMinify: true,
  compress: true,
  
  // Code Splitting e Otimizações
  experimental: {
    optimizeCss: true,
    bundlePagesExternals: false,
    serverComponentsExternalPackages: ['sharp'],
    optimizePackageImports: ['@heroicons/react', 'date-fns'],
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize for production
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          }
        },
      }
    }
    
    // Tree shaking optimizations
    config.optimization.usedExports = true
    config.optimization.sideEffects = false
    
    return config
  },
  
  // Configuração de imagens permitidas
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'santoscsolutions.com',
      },
      {
        protocol: 'https',
        hostname: '**.santoscsolutions.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      }
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    contentDispositionType: 'attachment',
    unoptimized: false,
    loader: 'default'
  },

  // Headers de Segurança
  async headers() {
    return [
      {
        // Aplicar headers a todas as rotas
        source: '/(.*)',
        headers: [
          // Strict Transport Security (HSTS)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          // Content Security Policy (CSP)
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com https://www.google-analytics.com",
              "frame-src 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; ')
          },
          // X-Frame-Options (proteção contra clickjacking)
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          // X-Content-Type-Options
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // Referrer Policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          // X-DNS-Prefetch-Control
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'off'
          },
          // Permissions Policy
          {
            key: 'Permissions-Policy',
            value: [
              'camera=()',
              'microphone=()',
              'geolocation=()',
              'browsing-topics=()',
              'interest-cohort=()'
            ].join(', ')
          },
          // Cross-Origin-Embedder-Policy
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp'
          },
          // Cross-Origin-Opener-Policy
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          },
          // Cross-Origin-Resource-Policy
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin'
          },
          // X-XSS-Protection (legado, mas ainda útil)
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
        ],
      },
      {
        // Headers específicos para API routes
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate'
          },
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow'
          },
        ],
      },
      {
        // Cache headers para assets estáticos
        source: '/:path*\\.(ico|png|jpg|jpeg|gif|webp|avif|svg|css|js|woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
      {
        // Cache headers para páginas
        source: '/((?!api).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400'
          }
        ],
      }
    ]
  },

  // Redirects de segurança
  async redirects() {
    return [
      // Redirecionar HTTP para HTTPS em produção
      {
        source: '/(.*)',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://santoscsolutions.com/$1',
        permanent: true,
      },
    ]
  },

  // Configurações experimentais para segurança
  experimental: {
    serverComponentsExternalPackages: ['helmet'],
  },

  // Webpack configurações de segurança
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Prevenir vazamento de informações sensíveis no cliente
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      }
    }
    return config
  },

  // Configurações de compilação
  env: {
    // Apenas variáveis públicas seguras
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://santoscsolutions.com',
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },

  // Configuração de compressão
  compress: true,

  // Configuração de trailing slash
  trailingSlash: false,

  // Configuração de geração estática
  output: 'standalone',
}

module.exports = withBundleAnalyzer(nextConfig) 