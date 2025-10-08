'use client'

import Navigation from '@/components/NavigationWrapper'
import Footer from '@/components/Footer'
import OptimizedImage from '@/components/OptimizedImage'
import OptimizedVideo from '@/components/OptimizedVideo'
import Logo3D from '@/components/Logo3D'
import LogoPreloader from '@/components/LogoPreloader'
import { useEffect, useRef, useState } from 'react'
import { 
  TagIcon, 
  ComputerDesktopIcon, 
  CpuChipIcon, 
  UserGroupIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  StarIcon,
  SparklesIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [currentTestimonialSet, setCurrentTestimonialSet] = useState(0)

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Heera Prasad",
      role: "Production Manager, Haldiram",
      quote: "SDB Label has transformed our packaging with their premium labeling solutions. The quality is exceptional and the service is outstanding.",
      initial: "A"
    },
    {
      id: 2,
      name: "Arvind Kumar",
      role: "Operations Director, Mankind",
      quote: "Their attention to detail and commitment to quality is unmatched. We've been working with them for over 3 years and couldn't be happier.",
      initial: "P"
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      role: "Procurement Head, First Choice",
      quote: "The team at SDB Label understands our business needs perfectly. Their solutions have helped us improve efficiency and reduce costs significantly.",
      initial: "R"
    },
    {
      id: 4,
      name: "Sunita Sharma",
      role: "Quality Head, Motherson",
      quote: "Excellent partnership with SDB Label. Their labeling solutions have enhanced our product presentation and customer satisfaction.",
      initial: "S"
    },
    {
      id: 5,
      name: "Ranveer",
      role: "Packaging Manager, Patanjali",
      quote: "SDB Label's eco-friendly labeling solutions align perfectly with our values. Their quality and service are truly commendable.",
      initial: "V"
    },
    {
      id: 6,
      name: "Neha Gupta",
      role: "Supply Chain Head, Unominda",
      quote: "Professional service and innovative solutions. SDB Label has been instrumental in improving our product identification and tracking.",
      initial: "N"
    },
    {
      id: 7,
      name: "Arjun Mehta",
      role: "Brand Manager, Varun Beverages",
      quote: "Outstanding labeling solutions for our beverage products. SDB Label's expertise has helped us maintain consistent brand identity across all products.",
      initial: "A"
    },
    {
      id: 8,
      name: "Lakshmi Iyer",
      role: "Procurement Head, Lucas",
      quote: "Reliable partner for all our labeling needs. SDB Label's quick turnaround and quality products have exceeded our expectations consistently.",
      initial: "L"
    }
  ]

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getCurrentTestimonials = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      const index = (currentTestimonialIndex + i) % testimonials.length
      result.push(testimonials[index])
    }
    return result
  }

  useEffect(() => {
    const video = videoRef.current
    const fallbackBg = document.getElementById('fallback-bg')
    
    if (video && fallbackBg) {
      const handleVideoError = () => {
        console.log('Video failed to load, showing fallback background')
        fallbackBg.classList.remove('opacity-0')
        fallbackBg.classList.add('opacity-100')
      }
      
      const handleVideoLoad = () => {
        console.log('Video loaded successfully')
        fallbackBg.classList.add('opacity-0')
        fallbackBg.classList.remove('opacity-100')
      }
      
      video.addEventListener('error', handleVideoError)
      video.addEventListener('loadeddata', handleVideoLoad)
      
      return () => {
        video.removeEventListener('error', handleVideoError)
        video.removeEventListener('loadeddata', handleVideoLoad)
      }
    }
  }, [])

  // Homepage Contact Form State
  const [homepageFormData, setHomepageFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isHomepageSubmitting, setIsHomepageSubmitting] = useState(false)
  const homepageFormRef = useRef<HTMLFormElement>(null)

  const handleHomepageInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setHomepageFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleHomepageSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsHomepageSubmitting(true)

    try {
      const response = await fetch('/api/homepage-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(homepageFormData),
      })

      if (response.ok) {
        alert('Thank you for your message! We\'ll get back to you soon.')
        // Reset form
        if (homepageFormRef.current) {
          homepageFormRef.current.reset()
        }
        setHomepageFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        })
      } else {
        alert('Sorry, there was an error sending your message. Please try again.')
        console.error('Form submission error:', await response.text())
      }
    } catch (error) {
      console.error('Network error:', error)
      alert('Sorry, there was an error sending your message. Please try again.')
    } finally {
      setIsHomepageSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <LogoPreloader />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/HeroV_optimized.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback Background */}
        <div 
          id="fallback-bg"
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-red-900 via-red-800 to-red-900 opacity-0 transition-opacity duration-1000 z-0"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Premium{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-rose-300">
                Labeling Solutions
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with our cutting-edge labeling technology, 
              premium materials, and expert solutions tailored to your industry needs.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/get-quotation" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-600/25"
            >
              <TagIcon className="w-5 h-5 mr-2" />
              Get Quote
            </a>
            <a 
              href="/products" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-red-600 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ArrowRightIcon className="w-5 h-5 mr-2" />
              Explore Products
            </a>
          </div>
        </div>
      </section>



      {/* Showcase Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-red-400/20 to-rose-500/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-rose-400/20 to-red-500/20 rounded-full blur-3xl animate-float-medium"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-red-300/10 to-rose-400/10 rounded-full blur-3xl animate-float-fast"></div>
        </div>

        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <SparklesIcon className="w-4 h-4" />
              Our Work
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Showcasing{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-700 to-red-800">
                Excellence
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Discover our portfolio of premium labeling solutions and innovative projects that have transformed businesses across industries.
            </p>
          </div>

          {/* Three Stacked Marquee Galleries */}
          <div className="space-y-16">
            {/* Marquee 1 - Sticker Labels */}
            <div className="relative min-h-[400px] bg-gray-900 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
              <div className="relative z-10 p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Sticker Labels</h3>
                  <p className="text-gray-300">Premium labeling solutions for all your needs</p>
                </div>
                <div className="marquee-container-simple">
                  <div className="marquee-track-simple">
                    {/* Sticker Labels Images */}
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/HomeG1.jpg"
                          alt="Sticker Labels"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/HomeG2.jpg"
                          alt="Sticker Labels"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/Phero122.jpg"
                          alt="Sticker Labels"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/Chrome.jpg"
                          alt="Sticker Labels"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/Polyster.jpg"
                          alt="Sticker Labels"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/BillingRolls.jpg"
                          alt="Sticker Labels"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/Taffeta.jpg"
                          alt="Sticker Labels"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    {/* Duplicate Set */}
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/HomeG1.jpg"
                          alt="Sticker Labels"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/HomeG2.jpg"
                          alt="Sticker Labels"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/Phero122.jpg"
                          alt="Sticker Labels"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/Chrome.jpg"
                          alt="Sticker Labels"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/Polyster.jpg"
                          alt="Sticker Labels"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/BillingRolls.jpg"
                          alt="Sticker Labels"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/Taffeta.jpg"
                          alt="Sticker Labels"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Marquee 2 - Hardware Solutions */}
            <div className="relative min-h-[400px] bg-gray-900 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
              <div className="relative z-10 p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Hardware Solutions</h3>
                  <p className="text-gray-300">Cutting-edge hardware for all your business needs</p>
                </div>
                <div className="marquee-container-simple">
                  <div className="marquee-track-simple">
                    {/* Hardware Images */}
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/2Dscanner.jpg"
                          alt="Hardware Solutions"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/IndustrialP.jpeg"
                          alt="Hardware Solutions"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/idcardPrinter.jpeg"
                          alt="Hardware Solutions"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/POS.jpeg"
                          alt="Hardware Solutions"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/Original.jpg"
                          alt="Hardware Solutions"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/scanner1.jpg"
                          alt="Hardware Solutions"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/barcodeP.jpg"
                          alt="Hardware Solutions"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    {/* Duplicate Set */}
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/2Dscanner.jpg"
                          alt="Hardware Solutions"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/IndustrialP.jpeg"
                          alt="Hardware Solutions"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/idcardPrinter.jpeg"
                          alt="Hardware Solutions"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/POS.jpeg"
                          alt="Hardware Solutions"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/Original.jpg"
                          alt="Hardware Solutions"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/scanner1.jpg"
                          alt="Hardware Solutions"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/barcodeP.jpg"
                          alt="Hardware Solutions"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Marquee 3 - Accessories */}
            <div className="relative min-h-[400px] bg-gray-900 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
              <div className="relative z-10 p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Accessories</h3>
                  <p className="text-gray-300">Essential accessories to complete your setup</p>
                </div>
                <div className="marquee-container-simple">
                  <div className="marquee-track-simple">
                    {/* Accessories Images */}
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/accessories/Resin.jpg"
                          alt="Accessories"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/accessories/Misc.jpg"
                          alt="Accessories"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/accessories/RFID2.jpeg"
                          alt="Accessories"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/accessories/RFID1.jpeg"
                          alt="Accessories"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/accessories/BillingRolls.jpg"
                          alt="Accessories"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/accessories/HomeG5.jpg"
                          alt="Accessories"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    {/* Duplicate Set */}
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/accessories/Resin.jpg"
                          alt="Accessories"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/accessories/Misc.jpg"
                          alt="Accessories"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/accessories/RFID2.jpeg"
                          alt="Accessories"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/accessories/RFID1.jpeg"
                          alt="Accessories"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/accessories/BillingRolls.jpg"
                          alt="Accessories"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="group relative h-[300px] w-[400px] overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105">
                        <OptimizedImage
                          src="/images/Homepage/accessories/HomeG5.jpg"
                          alt="Accessories"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 lg:mt-16">
            <p className="text-lg text-gray-600 mb-6">Ready to see what we can do for your business?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/products" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-600/25">
                <TagIcon className="w-5 h-5 mr-2" />
                Explore Our Products
              </a>
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                <ArrowRightIcon className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-red-400/20 to-red-600/20 rounded-full blur-2xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-rose-400/20 to-red-500/20 rounded-full blur-3xl animate-float-medium"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-red-300/10 to-rose-400/10 rounded-full blur-3xl animate-float-fast"></div>
        </div>

        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <BuildingOfficeIcon className="w-4 h-4" />
              About Us
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Trusted Since{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-700 to-red-800">
                2011
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Over a decade of excellence in providing comprehensive business solutions across India.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Your Partner in{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                    Business Excellence
                  </span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Established in 2011, SDB LABEL has been at the forefront of providing comprehensive business solutions across India. We specialize in premium labels, cutting-edge hardware, innovative software, and expert consultancy services.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner for businesses of all sizes, from startups to large enterprises.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl font-bold text-red-600 mb-2">13+</div>
                  <div className="text-sm text-gray-600 font-medium">Years of Excellence</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl font-bold text-red-600 mb-2">1000+</div>
                  <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">Support</div>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Choose SDB LABEL?</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircleIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-600">Premium quality materials and cutting-edge technology</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircleIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-600">Custom solutions tailored to your industry needs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircleIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-600">Expert consultation and ongoing support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircleIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-600">Fast turnaround times and reliable delivery</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <OptimizedImage
                  src="/images/Homepage/About.jpg"
                  alt="SDB LABEL Team - About Us"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h4>
                    <p className="text-gray-700">
                      To empower businesses with innovative labeling solutions and comprehensive support that drives growth and success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 lg:mt-16">
            <p className="text-lg text-gray-600 mb-6">Ready to partner with us for your business success?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-600/25">
                <UserGroupIcon className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
              <a href="/consultancy" className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                <ArrowRightIcon className="w-5 h-5 mr-2" />
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <UserGroupIcon className="w-4 h-4" />
              Our Clients
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Trusted by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-700 to-red-800">
                Industry Leaders
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              We're proud to serve some of the most respected companies across various industries with our premium labeling solutions.
            </p>
          </div>

          {/* 3D Logo Display */}
          <Logo3D />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-red-400/20 to-rose-500/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-rose-400/20 to-red-500/20 rounded-full blur-3xl animate-float-medium"></div>
        </div>

        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <StarIcon className="w-4 h-4" />
              Testimonials
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              What Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-700 to-red-800">
                Clients Say
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          {/* Testimonials Carousel with Enhanced Design */}
          <div className="relative max-w-7xl mx-auto">
            {/* Testimonial Cards Container */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 overflow-hidden">
              {getCurrentTestimonials().map((testimonial, index) => (
                <div 
                  key={`${testimonial.id}-${currentTestimonialIndex}`} 
                  className={`group relative bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl border border-gray-100 hover:border-red-200 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                    index === 0 ? 'animate-slideInFromLeft' : index === 1 ? 'animate-slideInFromCenter' : 'animate-slideInFromRight'
                  }`}
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  {/* Decorative Quote Icon */}
                  <div className="absolute top-4 right-4 text-red-100 group-hover:text-red-200 transition-colors duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 fill-current drop-shadow-sm" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500 font-medium">5.0</span>
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6 relative z-10">
                    <span className="text-red-500 text-2xl font-bold leading-none">"</span>
                    {testimonial.quote}
                    <span className="text-red-500 text-2xl font-bold leading-none">"</span>
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center pt-4 border-t border-gray-100 group-hover:border-red-200 transition-colors duration-300">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        {testimonial.initial}
                      </div>
                      {/* Online Status Indicator */}
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="font-bold text-gray-900 text-lg group-hover:text-red-600 transition-colors duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-sm font-medium">
                        {testimonial.role}
                      </div>
                      <div className="flex items-center mt-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-xs text-gray-500">Verified Client</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>

            {/* Enhanced Navigation Arrows */}
            <button 
              className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-red-50 text-gray-600 hover:text-red-600 rounded-full p-3 lg:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10 border border-gray-200 hover:border-red-300"
              onClick={prevTestimonial}
            >
              <ArrowLeftIcon className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
            <button 
              className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-red-50 text-gray-600 hover:text-red-600 rounded-full p-3 lg:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10 border border-gray-200 hover:border-red-300"
              onClick={nextTestimonial}
            >
              <ArrowRightIcon className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonialIndex 
                      ? 'bg-red-500 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentTestimonialIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Get In Touch Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Sophisticated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-600/5 via-transparent to-red-800/5"></div>
        </div>

        {/* Subtle Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-red-600/10 to-red-800/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-red-800/8 to-red-900/8 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-2xl shadow-red-600/25 backdrop-blur-sm border border-red-500/20">
              <SparklesIcon className="w-5 h-5" />
              Get In Touch
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-8">
              Let's{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                Work Together
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Ready to transform your business with premium labeling solutions? 
              <br className="hidden sm:block" />
              Get in touch with our experts today and experience the difference.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Professional Contact Form */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-red-500/20 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">
                    Send us a Message
                  </h3>
                </div>
                
                <form ref={homepageFormRef} onSubmit={handleHomepageSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="firstName" className="block text-sm font-semibold text-white mb-3 group-focus-within:text-red-400 transition-colors">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={homepageFormData.firstName}
                        onChange={handleHomepageInputChange}
                        required
                        className="w-full px-6 py-4 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-gray-700 placeholder-gray-400 hover:bg-gray-50"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="lastName" className="block text-sm font-semibold text-white mb-3 group-focus-within:text-red-400 transition-colors">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={homepageFormData.lastName}
                        onChange={handleHomepageInputChange}
                        required
                        className="w-full px-6 py-4 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-gray-700 placeholder-gray-400 hover:bg-gray-50"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-3 group-focus-within:text-red-400 transition-colors">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={homepageFormData.email}
                      onChange={handleHomepageInputChange}
                      required
                      className="w-full px-6 py-4 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-gray-700 placeholder-gray-400 hover:bg-gray-50"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-semibold text-white mb-3 group-focus-within:text-red-400 transition-colors">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={homepageFormData.phone}
                      onChange={handleHomepageInputChange}
                      required
                      className="w-full px-6 py-4 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-gray-700 placeholder-gray-400 hover:bg-gray-50"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="company" className="block text-sm font-semibold text-white mb-3 group-focus-within:text-red-400 transition-colors">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={homepageFormData.company}
                      onChange={handleHomepageInputChange}
                      className="w-full px-6 py-4 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-gray-700 placeholder-gray-400 hover:bg-gray-50"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-3 group-focus-within:text-red-400 transition-colors">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={homepageFormData.message}
                      onChange={handleHomepageInputChange}
                      required
                      rows={5}
                      className="w-full px-6 py-4 bg-white border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-gray-700 placeholder-gray-400 resize-none hover:bg-gray-50"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isHomepageSubmitting}
                    className="group relative w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl shadow-red-600/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative flex items-center justify-center gap-3">
                      {isHomepageSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                        </>
                      )}
                    </span>
                  </button>
                </form>
              </div>
            </div>

            {/* Stunning Contact Information */}
            <div className="space-y-8">
              {/* Why Choose Us Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-8 border border-red-500/20 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                      <ShieldCheckIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Why Choose Us?</h4>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 group/item">
                      <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <CheckCircleIcon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">Premium quality materials and cutting-edge technology</span>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <CheckCircleIcon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">Custom solutions tailored to your industry needs</span>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <CheckCircleIcon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">Expert consultation and ongoing support</span>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <CheckCircleIcon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">Fast turnaround times and reliable delivery</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-700 to-red-900 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-8 border border-red-500/20 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white">Quick Contact</h4>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group/item">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <span className="text-white text-lg">📧</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 uppercase tracking-wider">Email</p>
                        <a href="mailto:salessdbl@gmail.com" className="font-bold text-white text-lg group-hover/item:text-red-400 transition-colors hover:underline">salessdbl@gmail.com</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group/item">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <span className="text-white text-lg">📞</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 uppercase tracking-wider">Phone</p>
                        <a href="tel:+919625520466" className="font-bold text-white text-lg group-hover/item:text-red-400 transition-colors hover:underline">+91 96255 20466</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group/item">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-700 to-red-800 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <span className="text-white text-lg">📍</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 uppercase tracking-wider">Location</p>
                        <p className="font-bold text-white text-lg group-hover/item:text-red-400 transition-colors">Delhi, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-800 to-red-900 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-8 border border-red-500/20 shadow-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">⚡</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white">Lightning Fast Response</h4>
                  </div>
                  <p className="text-gray-300 text-lg mb-6">
                    Get a response within <span className="text-red-400 font-bold">2 hours</span> during business hours. 
                    We're committed to providing exceptional service.
                  </p>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-600/25"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}