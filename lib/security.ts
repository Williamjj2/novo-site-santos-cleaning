import { NextRequest } from 'next/server'
import crypto from 'crypto'

// =============================================================================
// 🔒 UTILITÁRIOS DE SEGURANÇA - SANTOS CLEANING SOLUTIONS
// =============================================================================

/**
 * Valida e sanitiza input do usuário
 */
export class SecurityUtils {
  
  /**
   * Remove caracteres perigosos de strings
   */
  static sanitizeString(input: string): string {
    if (!input) return ''
    
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove scripts
      .replace(/javascript:/gi, '') // Remove javascript:
      .replace(/on\w+\s*=/gi, '') // Remove event handlers
      .replace(/[<>]/g, '') // Remove < e >
      .trim()
  }

  /**
   * Valida email
   */
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email) && email.length <= 254
  }

  /**
   * Valida telefone
   */
  static isValidPhone(phone: string): boolean {
    const phoneRegex = /^[\+]?[\d\s\(\)\-\.]{10,}$/
    return phoneRegex.test(phone.replace(/\s/g, ''))
  }

  /**
   * Valida URL
   */
  static isValidUrl(url: string): boolean {
    try {
      const urlObj = new URL(url)
      return ['http:', 'https:'].includes(urlObj.protocol)
    } catch {
      return false
    }
  }

  /**
   * Gera hash seguro para senhas
   */
  static hashPassword(password: string, salt?: string): string {
    const saltToUse = salt || process.env.PASSWORD_SALT || 'default_salt'
    return crypto.pbkdf2Sync(password, saltToUse, 100000, 64, 'sha512').toString('hex')
  }

  /**
   * Gera token seguro
   */
  static generateSecureToken(length: number = 32): string {
    return crypto.randomBytes(length).toString('hex')
  }

  /**
   * Encripta dados sensíveis
   */
  static encrypt(text: string): string {
    const key = process.env.ENCRYPTION_KEY || 'default_key_not_secure'
    const iv = crypto.randomBytes(16)
    const cipher = crypto.createCipher('aes-256-cbc', key)
    
    let encrypted = cipher.update(text, 'utf8', 'hex')
    encrypted += cipher.final('hex')
    
    return iv.toString('hex') + ':' + encrypted
  }

  /**
   * Decripta dados
   */
  static decrypt(encryptedText: string): string {
    const key = process.env.ENCRYPTION_KEY || 'default_key_not_secure'
    const textParts = encryptedText.split(':')
    const iv = Buffer.from(textParts.shift()!, 'hex')
    const encryptedData = textParts.join(':')
    const decipher = crypto.createDecipher('aes-256-cbc', key)
    
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    
    return decrypted
  }
}

/**
 * Detecta tentativas de ataques comuns
 */
export class ThreatDetection {
  
  /**
   * Detecta tentativas de XSS
   */
  static containsXSS(input: string): boolean {
    const xssPatterns = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe/gi,
      /<object/gi,
      /<embed/gi,
      /eval\s*\(/gi,
      /expression\s*\(/gi,
    ]
    
    return xssPatterns.some(pattern => pattern.test(input))
  }

  /**
   * Detecta tentativas de SQL Injection
   */
  static containsSQLInjection(input: string): boolean {
    const sqlPatterns = [
      /(\bunion\b.*\bselect\b)/i,
      /(\bselect\b.*\bfrom\b)/i,
      /(\binsert\b.*\binto\b)/i,
      /(\bdelete\b.*\bfrom\b)/i,
      /(\bdrop\b.*\btable\b)/i,
      /(\bor\b.*1.*=.*1)/i,
      /(\band\b.*1.*=.*1)/i,
      /(--|\/\*|\*\/)/i,
      /('|"|`|;)/,
    ]
    
    return sqlPatterns.some(pattern => pattern.test(input))
  }

  /**
   * Detecta tentativas de Path Traversal
   */
  static containsPathTraversal(input: string): boolean {
    const pathPatterns = [
      /\.\.\//g,
      /\.\.\\/g,
      /%2e%2e%2f/gi,
      /%2e%2e%5c/gi,
      /\.\.%2f/gi,
      /\.\.%5c/gi,
    ]
    
    return pathPatterns.some(pattern => pattern.test(input))
  }

  /**
   * Verifica se é um User Agent suspeito
   */
  static isSuspiciousUserAgent(userAgent: string): boolean {
    if (!userAgent) return true
    
    const suspiciousPatterns = [
      /bot/i,
      /crawler/i,
      /spider/i,
      /scraper/i,
      /wget/i,
      /curl/i,
      /python/i,
      /java/i,
      /go-http/i,
      /postman/i,
      /^$/,
    ]
    
    return suspiciousPatterns.some(pattern => pattern.test(userAgent))
  }
}

/**
 * Validador de formulários
 */
export class FormValidator {
  
  /**
   * Valida dados do formulário de contato
   */
  static validateContactForm(data: any): { isValid: boolean; errors: string[] } {
    const errors: string[] = []
    
    // Nome obrigatório
    if (!data.name || data.name.trim().length < 2) {
      errors.push('Nome deve ter pelo menos 2 caracteres')
    }
    
    if (data.name && data.name.length > 100) {
      errors.push('Nome muito longo (máximo 100 caracteres)')
    }
    
    // Email obrigatório e válido
    if (!data.email) {
      errors.push('Email é obrigatório')
    } else if (!SecurityUtils.isValidEmail(data.email)) {
      errors.push('Email inválido')
    }
    
    // Telefone obrigatório e válido
    if (!data.phone) {
      errors.push('Telefone é obrigatório')
    } else if (!SecurityUtils.isValidPhone(data.phone)) {
      errors.push('Telefone inválido')
    }
    
    // Verificar tentativas de ataques
    const fieldsToCheck = [data.name, data.email, data.message, data.address]
    
    for (const field of fieldsToCheck) {
      if (field) {
        if (ThreatDetection.containsXSS(field)) {
          errors.push('Conteúdo suspeito detectado')
          break
        }
        if (ThreatDetection.containsSQLInjection(field)) {
          errors.push('Conteúdo inválido detectado')
          break
        }
      }
    }
    
    return {
      isValid: errors.length === 0,
      errors
    }
  }
  
  /**
   * Sanitiza dados do formulário
   */
  static sanitizeContactForm(data: any) {
    return {
      name: SecurityUtils.sanitizeString(data.name || ''),
      email: SecurityUtils.sanitizeString(data.email || '').toLowerCase(),
      phone: SecurityUtils.sanitizeString(data.phone || ''),
      service: SecurityUtils.sanitizeString(data.service || ''),
      message: SecurityUtils.sanitizeString(data.message || ''),
      address: SecurityUtils.sanitizeString(data.address || ''),
    }
  }
}

/**
 * Utilitários para logs de segurança
 */
export class SecurityLogger {
  
  /**
   * Log de tentativa de ataque
   */
  static logSecurityEvent(
    type: 'BLOCKED_IP' | 'SQL_INJECTION' | 'XSS_ATTEMPT' | 'RATE_LIMIT' | 'HONEYPOT' | 'SUSPICIOUS_UA',
    request: NextRequest,
    details?: string
  ) {
    const clientIP = this.getClientIP(request)
    const userAgent = request.headers.get('user-agent') || 'Unknown'
    const timestamp = new Date().toISOString()
    
    const logEntry = {
      timestamp,
      type,
      ip: clientIP,
      userAgent: userAgent.substring(0, 200),
      path: request.nextUrl.pathname,
      details: details || '',
      referer: request.headers.get('referer') || '',
    }
    
    // Em produção, envie para serviço de logging (Sentry, LogRocket, etc.)
    console.warn(`[SECURITY_${type}]`, JSON.stringify(logEntry))
    
    // Aqui você pode enviar para webhook, Slack, etc.
    if (process.env.WEBHOOK_URL && type !== 'RATE_LIMIT') {
      this.sendSecurityAlert(logEntry).catch(console.error)
    }
  }
  
  /**
   * Obtém IP real do cliente
   */
  private static getClientIP(request: NextRequest): string {
    const forwarded = request.headers.get('x-forwarded-for')
    const realIP = request.headers.get('x-real-ip')
    const cfIP = request.headers.get('cf-connecting-ip')
    
    if (cfIP) return cfIP
    if (realIP) return realIP
    if (forwarded) return forwarded.split(',')[0].trim()
    
    return request.ip || '127.0.0.1'
  }
  
  /**
   * Envia alerta de segurança
   */
  private static async sendSecurityAlert(logEntry: any) {
    try {
      if (process.env.WEBHOOK_URL) {
        await fetch(process.env.WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: `🚨 Security Alert: ${logEntry.type}`,
            attachments: [{
              color: 'danger',
              fields: [
                { title: 'IP', value: logEntry.ip, short: true },
                { title: 'Path', value: logEntry.path, short: true },
                { title: 'User Agent', value: logEntry.userAgent, short: false },
                { title: 'Details', value: logEntry.details, short: false },
              ]
            }]
          })
        })
      }
    } catch (error) {
      console.error('Erro ao enviar alerta de segurança:', error)
    }
  }
}

/**
 * Configurações de segurança centralizadas
 */
export const SECURITY_CONFIG = {
  // Rate limiting
  RATE_LIMIT_REQUESTS: parseInt(process.env.RATE_LIMIT_REQUESTS || '100'),
  RATE_LIMIT_WINDOW: parseInt(process.env.RATE_LIMIT_WINDOW || '60000'),
  
  // IPs bloqueados
  BLOCKED_IPS: new Set(
    (process.env.BLOCKED_IPS || '').split(',').filter(ip => ip.trim())
  ),
  
  // Configurações de desenvolvimento
  DEBUG_MODE: process.env.DEBUG_MODE === 'true',
  SECURITY_BYPASS: process.env.SECURITY_BYPASS === 'true' && process.env.NODE_ENV !== 'production',
  
  // URLs de honeypot
  HONEYPOT_PATHS: [
    '/admin',
    '/wp-admin',
    '/wp-login',
    '/administrator',
    '/login.php',
    '/phpmyadmin',
    '/xmlrpc.php',
    '/.env',
    '/config.php',
    '/backup',
    '/.git',
    '/database',
  ]
} as const

export default {
  SecurityUtils,
  ThreatDetection,
  FormValidator,
  SecurityLogger,
  SECURITY_CONFIG
} 