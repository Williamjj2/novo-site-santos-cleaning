// Image optimization and management for Santos Cleaning Solutions

export interface ImageAsset {
  src: string
  alt: string
  width?: number
  height?: number
  placeholder?: string
  priority?: boolean
}

// Company Logo and Branding
export const LOGO_IMAGES = {
  main: {
    src: '/images/logos/santos-cleaning-logo.svg',
    alt: 'Santos Cleaning Solutions Logo',
    width: 200,
    height: 60,
    priority: true
  },
  icon: {
    src: '/images/logos/santos-cleaning-icon.svg',
    alt: 'Santos Cleaning Icon',
    width: 40,
    height: 40
  },
  favicon: {
    src: '/favicon.svg',
    alt: 'Santos Cleaning Favicon',
    width: 32,
    height: 32
  }
}

// Hero Section Images
export const HERO_IMAGES = {
  background: {
    src: '/images/hero/cleaning-hero-bg.webp',
    alt: 'Professional house cleaning service in Marietta GA',
    width: 1920,
    height: 1080,
    priority: true,
    placeholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
  },
  team: {
    src: '/images/team/santos-cleaning-team.webp',
    alt: 'Santos Cleaning Solutions professional team',
    width: 800,
    height: 600,
    placeholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
  }
}

// Service Images
export const SERVICE_IMAGES = {
  'deep-cleaning': {
    src: '/images/services/deep-cleaning-service.webp',
    alt: 'Professional deep cleaning service in Marietta GA',
    width: 600,
    height: 400
  },
  'regular-maintenance': {
    src: '/images/services/regular-cleaning-service.webp',
    alt: 'Regular house cleaning maintenance service',
    width: 600,
    height: 400
  },
  'move-in-out': {
    src: '/images/services/move-in-out-cleaning.webp',
    alt: 'Move-in move-out cleaning service',
    width: 600,
    height: 400
  },
  'appliance-cleaning': {
    src: '/images/services/appliance-cleaning.webp',
    alt: 'Professional appliance cleaning service',
    width: 600,
    height: 400
  },
  'commercial-cleaning': {
    src: '/images/services/commercial-cleaning.webp',
    alt: 'Commercial office cleaning service',
    width: 600,
    height: 400
  }
}

// Before/After Gallery Images
export const GALLERY_IMAGES = {
  kitchen: [
    {
      before: {
        src: '/images/gallery/kitchen-before-1.webp',
        alt: 'Kitchen before professional cleaning',
        width: 500,
        height: 400
      },
      after: {
        src: '/images/gallery/kitchen-after-1.webp',
        alt: 'Kitchen after professional deep cleaning',
        width: 500,
        height: 400
      }
    }
  ],
  bathroom: [
    {
      before: {
        src: '/images/gallery/bathroom-before-1.webp',
        alt: 'Bathroom before professional cleaning',
        width: 500,
        height: 400
      },
      after: {
        src: '/images/gallery/bathroom-after-1.webp',
        alt: 'Bathroom after professional deep cleaning',
        width: 500,
        height: 400
      }
    }
  ],
  livingroom: [
    {
      before: {
        src: '/images/gallery/living-before-1.webp',
        alt: 'Living room before professional cleaning',
        width: 500,
        height: 400
      },
      after: {
        src: '/images/gallery/living-after-1.webp',
        alt: 'Living room after professional cleaning',
        width: 500,
        height: 400
      }
    }
  ]
}

// Social Media and OG Images
export const OG_IMAGES = {
  default: {
    src: '/images/og-images/santos-cleaning-og-default.jpg',
    alt: 'Santos Cleaning Solutions - Professional Cleaning Services',
    width: 1200,
    height: 630
  },
  homepage: {
    src: '/images/og-images/santos-cleaning-og-home.jpg',
    alt: 'Professional House Cleaning Services in Marietta GA',
    width: 1200,
    height: 630
  },
  services: {
    src: '/images/og-images/santos-cleaning-og-services.jpg',
    alt: 'Professional Cleaning Services - Santos Cleaning Solutions',
    width: 1200,
    height: 630
  },
  contact: {
    src: '/images/og-images/santos-cleaning-og-contact.jpg',
    alt: 'Contact Santos Cleaning Solutions for Free Estimate',
    width: 1200,
    height: 630
  }
}

// Icon mappings for services and features
export const SERVICE_ICONS = {
  'deep-cleaning': '🧽',
  'regular-maintenance': '🏠',
  'move-in-out': '📦',
  'appliance-cleaning': '🔧',
  'laundry-services': '👕',
  'cabinet-cleaning': '🗄️',
  'commercial-cleaning': '🏢'
}

// Image optimization settings
export const IMAGE_SETTINGS = {
  quality: 85,
  formats: ['image/avif', 'image/webp'],
  sizes: {
    mobile: '(max-width: 640px) 100vw',
    tablet: '(max-width: 1024px) 50vw',
    desktop: '33vw'
  },
  placeholderBlur: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6gAAAAABJRU5ErkJggg=='
}

// Utility function to get optimized image props
export function getOptimizedImageProps(image: ImageAsset, sizes?: string) {
  return {
    src: image.src,
    alt: image.alt,
    width: image.width,
    height: image.height,
    placeholder: 'blur' as const,
    blurDataURL: image.placeholder || IMAGE_SETTINGS.placeholderBlur,
    quality: IMAGE_SETTINGS.quality,
    sizes: sizes || IMAGE_SETTINGS.sizes.mobile,
    priority: image.priority || false
  }
}

export default {
  LOGO_IMAGES,
  HERO_IMAGES,
  SERVICE_IMAGES,
  GALLERY_IMAGES,
  OG_IMAGES,
  SERVICE_ICONS,
  IMAGE_SETTINGS,
  getOptimizedImageProps
}
