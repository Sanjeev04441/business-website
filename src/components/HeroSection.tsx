'use client'

import OptimizedImage from './OptimizedImage'
import { ReactNode, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface HeroSectionProps {
  title: string
  subtitle?: string
  description: string
  backgroundImageSrc?: string
  primaryButton?: {
    text: string
    href: string
    icon?: ReactNode
  }
  secondaryButton?: {
    text: string
    href: string
    icon?: ReactNode
  }
  badge?: {
    text: string
    icon?: ReactNode
  }
  className?: string
}

export default function HeroSection({
  title,
  subtitle,
  description,
  backgroundImageSrc = "/images/products/PHero.jpg",
  primaryButton,
  secondaryButton,
  badge,
  className = ""
}: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className={`relative py-12 lg:py-16 overflow-hidden pt-20 sm:pt-24 lg:pt-28 ${className}`}>
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <OptimizedImage
          src={backgroundImageSrc}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        {/* Enhanced Overlay with Gradient Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/70 via-red-800/60 to-red-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 via-transparent to-red-900/40"></div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(220, 38, 38, 0.1), rgba(0, 0, 0, 0.1))',
              'linear-gradient(225deg, rgba(220, 38, 38, 0.1), rgba(0, 0, 0, 0.1))',
              'linear-gradient(45deg, rgba(220, 38, 38, 0.1), rgba(0, 0, 0, 0.1))'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      
      {/* Enhanced Floating Elements with Mouse Interaction */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-red-400/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-red-300/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01,
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-red-200/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.005,
            y: mousePosition.y * 0.005,
            rotate: [0, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        {/* Additional floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-400/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container-custom relative z-10"
        style={{ opacity }}
      >
        <div className="pt-12 pb-6">
          {/* Header Section with Enhanced Animations */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {badge && (
              <motion.div 
                className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-2 h-2 bg-red-600 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                {badge.icon && <span className="text-red-800">{badge.icon}</span>}
                <span className="text-red-800 font-semibold text-sm">{badge.text}</span>
              </motion.div>
            )}
            
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              {subtitle ? (
                <>
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {title}{' '}
                  </motion.span>
                  <motion.span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-red-100"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {subtitle}
                  </motion.span>
                </>
              ) : (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {title}
                </motion.span>
              )}
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-red-100 leading-relaxed max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              {description}
            </motion.p>
            
            {(primaryButton || secondaryButton) && (
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                {primaryButton && (
                  <motion.a 
                    href={primaryButton.href} 
                    className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-600/25 touch-manipulation"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    {primaryButton.icon && <span className="mr-2">{primaryButton.icon}</span>}
                    {primaryButton.text}
                  </motion.a>
                )}
                {secondaryButton && (
                  <motion.a 
                    href={secondaryButton.href} 
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-semibold text-lg rounded-xl transition-all duration-300 shadow-lg touch-manipulation"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    {secondaryButton.text}
                    {secondaryButton.icon && <span className="ml-2">{secondaryButton.icon}</span>}
                  </motion.a>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}