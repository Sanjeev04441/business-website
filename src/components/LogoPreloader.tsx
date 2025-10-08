'use client'

import { useEffect } from 'react'

const LogoPreloader = () => {
  useEffect(() => {
    // Preload the logo image
    const logoImage = new Image()
    logoImage.src = '/images/icon/logo.png'
    
    // Preload with high priority
    logoImage.loading = 'eager'
    logoImage.fetchPriority = 'high'
    
    // Also preload using link preload
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = '/images/icon/logo.png'
    link.type = 'image/png'
    document.head.appendChild(link)
    
    return () => {
      // Cleanup
      if (document.head.contains(link)) {
        document.head.removeChild(link)
      }
    }
  }, [])

  return null
}

export default LogoPreloader