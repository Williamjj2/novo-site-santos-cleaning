'use client'

import React from 'react'
import Image from 'next/image'

interface SEOImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  loading?: 'lazy' | 'eager'
  quality?: number
}

const SEOImage: React.FC<SEOImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  loading = 'lazy',
  quality = 75
}) => {
  return (
    <picture className={className}>
      {/* WebP format for modern browsers */}
      <source
        srcSet={`${src.replace(/\.(jpg|jpeg|png)$/, '.webp')}`}
        type="image/webp"
      />
      
      {/* AVIF format for even better compression */}
      <source
        srcSet={`${src.replace(/\.(jpg|jpeg|png)$/, '.avif')}`}
        type="image/avif"
      />
      
      {/* Fallback to original format */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        loading={loading}
        quality={quality}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknysoedwFWOkOLEOXw9YspU1LBGP2ZB2kW6K3VqrOSPW7+6OhvNXuwc1DUXQPLA0A/9k="
      />
    </picture>
  )
}

// Specific optimized images for different sections
export const HeroImage: React.FC<Omit<SEOImageProps, 'alt'>> = (props) => (
  <SEOImage
    {...props}
    alt="Santos Cleaning Solutions professional house cleaning team in Marietta, GA providing eco-friendly cleaning services"
    priority={true}
    loading="eager"
    quality={85}
  />
)

export const ServiceImage: React.FC<Omit<SEOImageProps, 'alt'> & { service: string }> = ({ service, ...props }) => {
  const getAltText = (service: string) => {
    switch (service) {
      case 'regular':
        return 'Professional house cleaner using eco-friendly products for regular weekly cleaning service in Metro Atlanta home'
      case 'deep':
        return 'Deep cleaning service showing before and after results of comprehensive house cleaning in Marietta, GA'
      case 'office':
        return 'Commercial office cleaning service with professional cleaner sanitizing workspace in Atlanta business'
      case 'move':
        return 'Move-in/move-out cleaning service showing spotless empty home ready for new residents in Georgia'
      default:
        return 'Santos Cleaning Solutions professional cleaning service in Metro Atlanta'
    }
  }

  return (
    <SEOImage
      {...props}
      alt={getAltText(service)}
      quality={80}
    />
  )
}

export const AreaImage: React.FC<Omit<SEOImageProps, 'alt'> & { area: string }> = ({ area, ...props }) => {
  const getAltText = (area: string) => {
    const areaNames = {
      'marietta': 'Professional house cleaning services in Marietta, GA residential neighborhood',
      'buckhead': 'Luxury home cleaning services in Buckhead Atlanta with premium attention to detail',
      'alpharetta': 'Family home cleaning service in Alpharetta, GA suburban community',
      'sandy-springs': 'Executive home cleaning in Sandy Springs with eco-friendly products'
    }
    
    return areaNames[area as keyof typeof areaNames] || `Professional cleaning services in ${area}, Georgia Metro Atlanta area`
  }

  return (
    <SEOImage
      {...props}
      alt={getAltText(area)}
      quality={75}
    />
  )
}

export default SEOImage