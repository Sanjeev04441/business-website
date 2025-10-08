'use client'

import dynamic from 'next/dynamic'

// Dynamically import Navigation with no SSR
const Navigation = dynamic(() => import('./Navigation'), {
  ssr: false,
  loading: () => (
    <div className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
          {/* Placeholder for logo */}
          <div className="flex items-center ml-2 sm:ml-8 lg:ml-16">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/20 rounded-xl sm:rounded-2xl animate-pulse"></div>
          </div>
          {/* Placeholder for navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="h-4 w-16 bg-white/20 rounded animate-pulse"></div>
            <div className="h-4 w-20 bg-white/20 rounded animate-pulse"></div>
            <div className="h-4 w-24 bg-white/20 rounded animate-pulse"></div>
            <div className="h-4 w-18 bg-white/20 rounded animate-pulse"></div>
          </div>
          {/* Placeholder for Get Quote button */}
          <div className="hidden lg:flex items-center mr-4">
            <div className="h-10 w-24 bg-red-600/50 rounded-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Navigation