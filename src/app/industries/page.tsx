'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import OptimizedImage from '@/components/OptimizedImage'
import OptimizedVideo from '@/components/OptimizedVideo'
import Navigation from '@/components/NavigationWrapper'
import Footer from '@/components/Footer'
import { 
  ShoppingBagIcon, 
  TruckIcon, 
  CubeIcon, 
  BeakerIcon, 
  BoltIcon, 
  HomeIcon, 
  PuzzlePieceIcon, 
  CakeIcon, 
  GlobeAltIcon 
} from '@heroicons/react/24/outline'

const IndustriesPage = () => {
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const industries = [
    {
      id: 'fmcg',
      name: 'FMCG',
      fullName: 'Fast Moving Consumer Goods',
      icon: ShoppingBagIcon,
      image: '/images/Industries/optimized/FMCG.jpg',
      description: 'Revolutionizing retail with innovative labeling solutions for consumer products.',
      article: `The FMCG sector demands precision, speed, and reliability in labeling solutions. Our comprehensive range of products caters to the unique needs of consumer goods manufacturers, ensuring brand consistency and regulatory compliance. We provide high-speed labeling systems, variable data printing, tamper-evident labels, and barcode integration for inventory management.`,
      href: '#fmcg'
    },
    {
      id: 'automotive',
      name: 'AUTOMOTIVE',
      fullName: 'Automotive Industry',
      icon: TruckIcon,
      image: '/images/Industries/optimized/Automotive.jpeg',
      description: 'Advanced labeling and tracking solutions for automotive manufacturing.',
      article: `The automotive industry requires robust, durable labeling solutions that can withstand harsh environments and provide critical information for safety and compliance. We provide heat-resistant labels for engine components, VIN tracking labels, safety warning labels, parts identification labels, and warranty labels with tamper protection.`,
      href: '#automotive'
    },
    {
      id: 'footwear',
      name: 'FOOTWEAR',
      fullName: 'Footwear Manufacturing',
      icon: CubeIcon,
      image: '/images/Industries/optimized/Footwear.jpg',
      description: 'Specialized labeling for footwear industry with style and durability.',
      article: `Footwear manufacturers need labels that combine aesthetic appeal with functional durability. Our solutions address the unique challenges of shoe labeling and packaging. We provide size and style labels, care instruction labels, brand labels with premium finishes, RFID tags for inventory tracking, and hang tags with tear-resistant properties.`,
      href: '#footwear'
    },
    {
      id: 'pharmaceuticals',
      name: 'PHARMACEUTICALS',
      fullName: 'Pharmaceutical Industry',
      icon: BeakerIcon,
      image: '/images/Industries/optimized/Pharmaceuticals.jpg',
      description: 'Compliant labeling solutions for pharmaceutical and healthcare products.',
      article: `Pharmaceutical labeling requires the highest standards of accuracy, compliance, and patient safety. Our solutions meet FDA and international regulatory requirements. We provide prescription labels, clinical trial labels, temperature-sensitive labels, anti-counterfeiting labels with security features, and patient information labels with multilingual support.`,
      href: '#pharmaceuticals'
    },
    {
      id: 'electronics',
      name: 'ELECTRONICS AND ELECTRICAL',
      fullName: 'Electronics & Electrical Manufacturing',
      icon: BoltIcon,
      image: '/images/Industries/optimized/Electricals.jpg',
      description: 'Precision labeling for electronic components and electrical equipment.',
      article: `Electronics and electrical manufacturing demands precise, durable labels that can withstand various environmental conditions while providing essential technical information. We provide component identification labels, safety certification labels, circuit board labels with heat resistance, cable and wire identification labels, and warranty labels.`,
      href: '#electronics'
    },
    {
      id: 'utensils',
      name: 'UTENSILS',
      fullName: 'Kitchenware & Utensils',
      icon: HomeIcon,
      image: '/images/Industries/optimized/Utensils.jpg',
      description: 'Durable labeling solutions for kitchenware and household utensils.',
      article: `Kitchenware and utensils require labels that can withstand frequent washing, heat exposure, and daily wear while maintaining product information and brand identity. We provide dishwasher-safe labels, heat-resistant labels for cookware, care instruction labels, brand labels with premium finishes, and safety warning labels for hot surfaces.`,
      href: '#utensils'
    },
    {
      id: 'toys',
      name: 'TOYS',
      fullName: 'Toy Manufacturing',
      icon: PuzzlePieceIcon,
      image: '/images/Industries/optimized/Toys.jpg',
      description: 'Safe and engaging labeling for children\'s toys and games.',
      article: `Toy manufacturing requires labels that are safe for children, durable for play, and compliant with international safety standards while being visually appealing. We provide age-appropriate warning labels, CE marking labels for European compliance, care instruction labels for parents, brand labels with child-friendly designs, and educational content labels for learning toys.`,
      href: '#toys'
    },
    {
      id: 'food-beverages',
      name: 'FOOD AND BEVERAGES',
      fullName: 'Food & Beverage Industry',
      icon: CakeIcon,
      image: '/images/Industries/optimized/Food&Beverages.jpg',
      description: 'Food-safe labeling solutions for consumable products.',
      article: `The food and beverage industry requires labels that meet strict food safety standards while providing essential nutritional and regulatory information to consumers. We provide food-safe adhesive labels with FDA approval, nutritional information labels, expiry date labels, allergen warning labels with high contrast, and batch tracking labels for quality control.`,
      href: '#food-beverages'
    },
    {
      id: 'logistics',
      name: 'LOGISTICS AND E-COMMERCE',
      fullName: 'Logistics & E-commerce',
      icon: GlobeAltIcon,
      image: '/images/Industries/optimized/Logistic&E-commerce.jpg',
      description: 'Efficient labeling solutions for modern logistics and e-commerce operations.',
      article: `Modern logistics and e-commerce operations demand efficient, scannable labels that enable seamless tracking, sorting, and delivery while providing essential information to customers. We provide shipping labels with high-quality barcodes, return address labels, tracking number labels with QR code integration, fragile and handling instruction labels, and customer information labels with delivery details.`,
      href: '#logistics'
    }
  ]

  // Handle anchor navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        const element = document.getElementById(hash)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
            setActiveSection(hash)
          }, 100)
        }
      }
    }

    // Handle initial load with hash
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    
    // Listen for popstate (back/forward navigation)
    window.addEventListener('popstate', handleHashChange)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('popstate', handleHashChange)
    }
  }, [])

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
      setActiveSection(sectionId)
      // Update URL without page reload
      window.history.pushState(null, '', `#${sectionId}`)
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-20 sm:-mt-24 lg:-mt-28" style={{minHeight: '100vh'}}>
        {/* Video Background */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <OptimizedVideo
            src="/videos/Industries_optimized.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover min-h-full"
            style={{
              minHeight: '100vh',
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
            priority
          />
          {/* Dark overlay for text visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-red-900/60 to-rose-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-transparent to-red-900/30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/20 to-red-900/30"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-400/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-300/20 rounded-full blur-3xl animate-float-medium"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-red-200/10 rounded-full blur-3xl animate-float-fast"></div>
        </div>

        {/* Floating Industry Text Overlays */}
        <div className="absolute inset-0 z-15">
          {/* FMCG */}
          <button 
            onClick={() => scrollToSection('fmcg')}
            className="absolute top-[30%] left-[8%] animate-float-slow opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-110"
          >
            <div className="bg-gradient-to-r from-red-600/80 to-rose-600/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-red-400/30 shadow-lg hover:shadow-red-500/50 hover:border-red-300/50">
              <span className="text-white font-bold text-sm sm:text-base">FMCG</span>
            </div>
          </button>

          {/* PHARMACEUTICALS */}
          <button 
            onClick={() => scrollToSection('pharmaceuticals')}
            className="absolute top-[25%] right-[12%] animate-float-medium opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-110" 
            style={{animationDelay: '0.5s'}}
          >
            <div className="bg-gradient-to-r from-red-600/80 to-rose-600/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-red-400/30 shadow-lg hover:shadow-red-500/50 hover:border-red-300/50">
              <span className="text-white font-bold text-sm sm:text-base">PHARMA</span>
            </div>
          </button>

          {/* FOOTWEAR */}
          <button 
            onClick={() => scrollToSection('footwear')}
            className="absolute top-[40%] left-[15%] animate-float-fast opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-110" 
            style={{animationDelay: '1s'}}
          >
            <div className="bg-gradient-to-r from-red-600/80 to-rose-600/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-red-400/30 shadow-lg hover:shadow-red-500/50 hover:border-red-300/50">
              <span className="text-white font-bold text-sm sm:text-base">FOOTWEAR</span>
            </div>
          </button>

          {/* AUTOMOTIVE */}
          <button 
            onClick={() => scrollToSection('automotive')}
            className="absolute top-[35%] right-[8%] animate-float-slow opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-110" 
            style={{animationDelay: '1.5s'}}
          >
            <div className="bg-gradient-to-r from-red-600/80 to-rose-600/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-red-400/30 shadow-lg hover:shadow-red-500/50 hover:border-red-300/50">
              <span className="text-white font-bold text-sm sm:text-base">AUTOMOTIVE</span>
            </div>
          </button>

          {/* ELECTRONICS */}
          <button 
            onClick={() => scrollToSection('electronics')}
            className="absolute bottom-[35%] left-[10%] animate-float-medium opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-110" 
            style={{animationDelay: '2s'}}
          >
            <div className="bg-gradient-to-r from-red-600/80 to-rose-600/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-red-400/30 shadow-lg hover:shadow-red-500/50 hover:border-red-300/50">
              <span className="text-white font-bold text-sm sm:text-base">ELECTRONICS</span>
            </div>
          </button>

          {/* FOOD & BEVERAGES */}
          <button 
            onClick={() => scrollToSection('food-beverages')}
            className="absolute bottom-[25%] right-[15%] animate-float-fast opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-110" 
            style={{animationDelay: '2.5s'}}
          >
            <div className="bg-gradient-to-r from-red-600/80 to-rose-600/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-red-400/30 shadow-lg hover:shadow-red-500/50 hover:border-red-300/50">
              <span className="text-white font-bold text-sm sm:text-base">FOOD & BEVERAGES</span>
            </div>
          </button>

          {/* TOYS */}
          <button 
            onClick={() => scrollToSection('toys')}
            className="absolute bottom-[40%] left-[20%] animate-float-slow opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-110" 
            style={{animationDelay: '3s'}}
          >
            <div className="bg-gradient-to-r from-red-600/80 to-rose-600/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-red-400/30 shadow-lg hover:shadow-red-500/50 hover:border-red-300/50">
              <span className="text-white font-bold text-sm sm:text-base">TOYS</span>
            </div>
          </button>

          {/* LOGISTICS */}
          <button 
            onClick={() => scrollToSection('logistics')}
            className="absolute bottom-[15%] right-[10%] animate-float-medium opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-110" 
            style={{animationDelay: '3.5s'}}
          >
            <div className="bg-gradient-to-r from-red-600/80 to-rose-600/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-red-400/30 shadow-lg hover:shadow-red-500/50 hover:border-red-300/50">
              <span className="text-white font-bold text-sm sm:text-base">LOGISTICS</span>
            </div>
          </button>

          {/* UTENSILS */}
          <button 
            onClick={() => scrollToSection('utensils')}
            className="absolute top-[50%] left-[5%] animate-float-fast opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-110" 
            style={{animationDelay: '4s'}}
          >
            <div className="bg-gradient-to-r from-red-600/80 to-rose-600/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-red-400/30 shadow-lg hover:shadow-red-500/50 hover:border-red-300/50">
              <span className="text-white font-bold text-sm sm:text-base">UTENSILS</span>
            </div>
          </button>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <span className="text-red-800 font-semibold text-sm">Industry Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            INDUSTRIES{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-red-100">
              WE SERVE
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive labeling solutions tailored for diverse industries, 
            ensuring quality, compliance, and efficiency across all sectors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-600/25">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact Us
            </a>
            <a href="/get-quotation" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Get Quotation
            </a>
          </div>
          
          <div className="w-24 h-1 bg-red-400 mx-auto rounded-full"></div>
        </div>
      </section>


      {/* Industries Alternating Layout */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 -mt-1">
        <div className="max-w-[1400px] mx-auto pt-8">
          
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
            const isEven = index % 2 === 0
            
            return (
              <div
                key={industry.id}
                id={industry.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch scroll-mt-20 ${
                  activeSection === industry.id ? 'ring-2 ring-red-400 ring-opacity-50' : ''
                }`}
                onMouseEnter={() => setHoveredIndustry(industry.id)}
                onMouseLeave={() => setHoveredIndustry(null)}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="relative h-[500px] overflow-hidden group">
                    <OptimizedImage
                      src={industry.image}
                      alt={industry.fullName}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Icon Badge */}
                    <div className="absolute top-6 right-6 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Industry Name Overlay */}
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                        {industry.name}
                      </h3>
                      <p className="text-red-200 text-sm font-medium">
                        {industry.fullName}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-gradient-to-br from-slate-900/95 via-red-900/90 to-rose-900/95 backdrop-blur-md p-8 lg:p-10 border border-red-800/30 hover:border-red-400/50 transition-all duration-500 h-[500px] flex flex-col">
                    {/* Vertical Line and Title */}
                    <div className="flex items-center mb-6">
                      <div className="w-1 h-12 bg-gradient-to-b from-red-400 to-rose-500 rounded-full mr-4"></div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white">
                        {industry.name}
                      </h3>
                    </div>
                    
                    {/* Subtitle */}
                    <p className="text-red-200 text-lg mb-6 font-medium">
                      {industry.fullName}
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                      {industry.description}
                    </p>

                    {/* Article */}
                    <div className="flex-grow overflow-hidden">
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {industry.article}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-lg hover:from-red-500 hover:to-rose-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 mt-6 flex-shrink-0"
                    >
                      Contact Us
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>


      {/* CTA Section - Simple & Stunning */}
      <section className="py-16 lg:py-20 bg-[#AF3E3E] text-white">
        <div className="container-custom">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-5 py-2 mb-5">
              <span className="text-sm font-semibold tracking-wide">Take action today</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold">Accelerate growth in your industry</h2>
            <p className="mt-3 text-white/90 max-w-2xl mx-auto">
              Talk to our experts or request a quote. Simple process, real results.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-quotation"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-[#AF3E3E] shadow-sm hover:shadow-md"
              >
                Get Free Quotation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-[#AF3E3E]"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default IndustriesPage 