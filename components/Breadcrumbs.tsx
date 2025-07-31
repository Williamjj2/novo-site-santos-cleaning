'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid'

interface BreadcrumbItem {
  name: string
  href?: string
  current?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  // Generate structured data for breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.href ? `https://santoscsolutions.com${item.href}` : undefined
    }))
  }

  return (
    <>
      {/* Schema markup for breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Visual breadcrumbs */}
      <nav 
        className={`flex ${className}`} 
        aria-label="Breadcrumb"
        role="navigation"
      >
        <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
          {items.map((item, index) => (
            <li 
              key={item.name} 
              className="flex items-center"
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={(index + 1).toString()} />
              
              {index === 0 && (
                <HomeIcon className="h-4 w-4 mr-1 text-gray-400" aria-hidden="true" />
              )}
              
              {item.current ? (
                <span 
                  className="text-gray-500 font-medium"
                  itemProp="name"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link 
                  href={item.href || '#'}
                  className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                  itemProp="item"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              )}
              
              {index < items.length - 1 && (
                <ChevronRightIcon 
                  className="h-4 w-4 mx-2 text-gray-400" 
                  aria-hidden="true" 
                />
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumbs