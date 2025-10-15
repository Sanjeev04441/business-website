'use client'

import { useState, useRef, useEffect } from 'react'

interface OptimizedVideoProps {
  src: string
  webmSrc?: string
  poster?: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  playsInline?: boolean
  controls?: boolean
  onLoad?: () => void
  onError?: () => void
  priority?: boolean
  style?: React.CSSProperties
}

export default function OptimizedVideo({
  src,
  webmSrc,
  poster,
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  playsInline = true,
  controls = false,
  onLoad,
  onError,
  priority = false,
  style,
  ...props
}: OptimizedVideoProps) {
  const [isLoaded, setIsLoaded] = useState(priority) // Start as loaded for priority videos
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) {
      setIsInView(true)
      setIsLoaded(true) // Mark as loaded immediately for priority videos
      return
    }

    if (isInView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '100px',
        threshold: 0.1,
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [priority, isInView])

  // Ensure video loads immediately for priority videos
  useEffect(() => {
    if (priority && videoRef.current) {
      const video = videoRef.current
      video.load()
      // Force play for priority videos
      video.play().catch(() => {
        // Ignore autoplay errors
      })
    }
  }, [priority])

  // Fallback timeout for priority videos
  useEffect(() => {
    if (priority && !isInView) {
      const timeout = setTimeout(() => {
        setIsInView(true)
        setIsLoaded(true)
      }, 50) // Even shorter delay

      return () => clearTimeout(timeout)
    }
  }, [priority, isInView])

  // Smoothly autoplay when video becomes visible
  useEffect(() => {
    if (!priority && isInView && autoPlay && videoRef.current) {
      const video = videoRef.current
      const playPromise = video.play()
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.catch(() => {
          // Some browsers block autoplay; ignore
        })
      }
    }
  }, [priority, isInView, autoPlay])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    onError?.()
  }

  if (hasError) {
    return (
      <div 
        ref={containerRef}
        className={`bg-gray-200 flex items-center justify-center ${className}`}
      >
        <div className="text-gray-400 text-sm">Video failed to load</div>
      </div>
    )
  }

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Poster/placeholder - only for non-priority videos */}
      {!isLoaded && !priority && poster && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${poster})`,
            filter: 'blur(2px)',
          }}
        />
      )}
      
      {/* Loading placeholder - only for non-priority videos */}
      {!isLoaded && !priority && !poster && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400">Loading video...</div>
        </div>
      )}
      
      {/* Actual video */}
      {(isInView || priority) && (
        <video
          ref={videoRef}
          className={priority ? 'opacity-100' : `transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          controls={controls}
          poster={poster}
          onLoadedData={handleLoad}
          onError={handleError}
          style={style}
          // Hero videos (priority) use preload="auto" for immediate start; others keep network idle until visible
          preload={priority ? 'auto' : 'metadata'}
          {...props}
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}