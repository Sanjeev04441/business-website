'use client'
import { useEffect, useRef } from 'react'

export default function Logo3D() {
  const shapeRef = useRef<HTMLDivElement>(null)

  // Preload all client logos immediately
  useEffect(() => {
    const clientLogos = [
      '/images/clients/Firstchoice.png',
      '/images/clients/Haldiram.png',
      '/images/clients/mankind.png',
      '/images/clients/motherson.jpg',
      '/images/clients/patanjali.png',
      '/images/clients/unominda.png',
      '/images/clients/Varun_Beverages.svg.png',
      '/images/clients/lucas.jpg',
      '/images/clients/coca.png',
    ]

    // Preload all images immediately
    clientLogos.forEach((src) => {
      const img = new Image()
      img.src = src
      img.loading = 'eager'
      img.fetchPriority = 'high'
    })
  }, [])

  // Optional: Pause rotation on hover
  useEffect(() => {
    const shape = shapeRef.current
    if (shape) {
      const handleMouseEnter = () => {
        shape.style.animationPlayState = 'paused'
      }
      const handleMouseLeave = () => {
        shape.style.animationPlayState = 'running'
      }
      
      shape.addEventListener('mouseenter', handleMouseEnter)
      shape.addEventListener('mouseleave', handleMouseLeave)
      
      return () => {
        shape.removeEventListener('mouseenter', handleMouseEnter)
        shape.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  const clientLogos = [
    '/images/clients/Firstchoice.png',
    '/images/clients/Haldiram.png',
    '/images/clients/mankind.png',
    '/images/clients/motherson.jpg',
    '/images/clients/patanjali.png',
    '/images/clients/unominda.png',
    '/images/clients/Varun_Beverages.svg.png',
    '/images/clients/lucas.jpg',
    '/images/clients/coca.png',
  ]

  return (
    <div className="relative flex items-center justify-center h-[400px] perspective">
      <div
        ref={shapeRef}
        className="absolute w-[200px] h-[200px] animate-rotate3D transform-style-preserve-3d"
      >
        {clientLogos.map((src, i) => {
          const angle = (360 / clientLogos.length) * i
          return (
            <div
              key={i}
              className="absolute w-[180px] h-[180px] bg-white shadow-lg rounded-xl flex items-center justify-center transform"
              style={{
                transform: `rotateY(${angle}deg) translateZ(300px)`,
              }}
            >
              <img
                src={src}
                alt={`Client Logo ${i + 1}`}
                className="object-contain w-4/5 h-4/5 max-w-full max-h-full"
                loading="eager"
                fetchPriority="high"
                decoding="sync"
                onError={(e) => {
                  console.log('Image failed to load:', src);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}