'use client'

import { motion } from 'framer-motion'

interface SkeletonLoaderProps {
  className?: string
  variant?: 'text' | 'rectangular' | 'circular' | 'card'
  lines?: number
  width?: string | number
  height?: string | number
}

export default function SkeletonLoader({
  className = '',
  variant = 'rectangular',
  lines = 1,
  width = '100%',
  height = '1rem'
}: SkeletonLoaderProps) {
  const shimmer = {
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite'
  }

  if (variant === 'text') {
    return (
      <div className={className}>
        {Array.from({ length: lines }).map((_, index) => (
          <motion.div
            key={index}
            className="h-4 bg-gray-200 rounded mb-2"
            style={{
              ...shimmer,
              width: index === lines - 1 ? '75%' : width,
              height
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>
    )
  }

  if (variant === 'circular') {
    return (
      <motion.div
        className={`bg-gray-200 rounded-full ${className}`}
        style={{
          ...shimmer,
          width,
          height: height || width
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    )
  }

  if (variant === 'card') {
    return (
      <motion.div
        className={`bg-white rounded-2xl shadow-lg p-6 ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center space-x-4 mb-4">
          <div
            className="w-12 h-12 bg-gray-200 rounded-full"
            style={shimmer}
          />
          <div className="flex-1">
            <div
              className="h-4 bg-gray-200 rounded mb-2"
              style={{ ...shimmer, width: '60%' }}
            />
            <div
              className="h-3 bg-gray-200 rounded"
              style={{ ...shimmer, width: '40%' }}
            />
          </div>
        </div>
        <div
          className="h-4 bg-gray-200 rounded mb-2"
          style={{ ...shimmer, width: '100%' }}
        />
        <div
          className="h-4 bg-gray-200 rounded mb-2"
          style={{ ...shimmer, width: '80%' }}
        />
        <div
          className="h-4 bg-gray-200 rounded"
          style={{ ...shimmer, width: '60%' }}
        />
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`bg-gray-200 rounded ${className}`}
      style={{
        ...shimmer,
        width,
        height
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />
  )
}

// Predefined skeleton components for common use cases
export const ImageSkeleton = ({ className = '' }: { className?: string }) => (
  <SkeletonLoader
    variant="rectangular"
    className={`aspect-video ${className}`}
    height="200px"
  />
)

export const TextSkeleton = ({ lines = 3, className = '' }: { lines?: number; className?: string }) => (
  <SkeletonLoader
    variant="text"
    lines={lines}
    className={className}
  />
)

export const CardSkeleton = ({ className = '' }: { className?: string }) => (
  <SkeletonLoader
    variant="card"
    className={className}
  />
)

export const AvatarSkeleton = ({ size = 40, className = '' }: { size?: number; className?: string }) => (
  <SkeletonLoader
    variant="circular"
    width={size}
    height={size}
    className={className}
  />
)