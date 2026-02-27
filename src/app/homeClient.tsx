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
  BuildingOfficeIcon,
  CheckBadgeIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  SquaresPlusIcon,
  BuildingStorefrontIcon,
  ChatBubbleLeftRightIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [currentTestimonialSet, setCurrentTestimonialSet] = useState(0)
  const fullHeroTitle = 'SDB LABEL Barcode & Thermal Label Manufacturer in India'
  const [typedHeroTitle, setTypedHeroTitle] = useState('')

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

  useEffect(() => {
    if (typeof window === 'undefined') return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setTypedHeroTitle(fullHeroTitle)
      return
    }

    let index = 0
    let intervalId: number | null = null
    let restartTimeoutId: number | null = null

    const startTyping = () => {
      index = 0
      setTypedHeroTitle('')
      intervalId = window.setInterval(() => {
        index += 1
        setTypedHeroTitle(fullHeroTitle.slice(0, index))
        if (index >= fullHeroTitle.length && intervalId) {
          window.clearInterval(intervalId)
          intervalId = null
          restartTimeoutId = window.setTimeout(startTyping, 8000)
        }
      }, 40)
    }

    startTyping()

    return () => {
      if (intervalId) window.clearInterval(intervalId)
      if (restartTimeoutId) window.clearTimeout(restartTimeoutId)
    }
  }, [fullHeroTitle])

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
    <div className="min-h-screen bg-white overflow-x-hidden">
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
            <h1
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold font-saira mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-rose-200 drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)] tracking-[0.01em]"
              aria-label={fullHeroTitle}
            >
              <span className="sr-only">{fullHeroTitle}</span>
              <span aria-hidden="true">
                {typedHeroTitle}
                <span className="typing-cursor text-white"></span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)]">
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

      {/* Brand Authority Section */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#f8fafc] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="work-showcase-bg"></div>
          <div className="work-grid-overlay"></div>
          <div className="absolute -top-32 left-[-8%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-red-200/35 via-rose-200/25 to-transparent blur-3xl"></div>
          <div className="absolute -bottom-32 right-[-6%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-orange-200/25 via-red-200/20 to-transparent blur-3xl"></div>
        </div>
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 shadow-md">
              Brand Authority
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Trusted Label Manufacturing at Scale
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Built for consistency, compliance, and nationwide delivery.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="group rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 to-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center text-sm font-bold mb-4">01</div>
              <h3 className="text-lg font-semibold text-gray-900">Trusted since 2011</h3>
              <p className="mt-2 text-sm text-gray-600">
                Over a decade of dependable label manufacturing for Indian businesses.
              </p>
            </article>
            <article className="group rounded-2xl border border-red-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center text-sm font-bold mb-4">02</div>
              <h3 className="text-lg font-semibold text-gray-900">Industries Served</h3>
              <p className="mt-2 text-sm text-gray-600">
                Automotive, FMCG, Food, and Logistics.
              </p>
            </article>
            <article className="group rounded-2xl border border-red-100 bg-gradient-to-br from-white to-red-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center text-sm font-bold mb-4">03</div>
              <h3 className="text-lg font-semibold text-gray-900">High-Volume Manufacturing</h3>
              <p className="mt-2 text-sm text-gray-600">
                Scalable production capacity to meet large and recurring orders.
              </p>
            </article>
            <article className="group rounded-2xl border border-red-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center text-sm font-bold mb-4">04</div>
              <h3 className="text-lg font-semibold text-gray-900">Quality Testing & Durability</h3>
              <p className="mt-2 text-sm text-gray-600">
                Rigorous testing for adhesion, print clarity, and long-term performance.
              </p>
            </article>
            <article className="group rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 to-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center text-sm font-bold mb-4">05</div>
              <h3 className="text-lg font-semibold text-gray-900">Fast Delivery Across India</h3>
              <p className="mt-2 text-sm text-gray-600">
                Reliable dispatches to keep your supply chain moving.
              </p>
            </article>
            <article className="group rounded-2xl border border-red-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center text-sm font-bold mb-4">06</div>
              <h3 className="text-lg font-semibold text-gray-900">Process-Ready Compliance</h3>
              <p className="mt-2 text-sm text-gray-600">
                Documentation and consistency built for regulated industries.
              </p>
            </article>
          </div>
        </div>
      </section>



      {/* Showcase Section */}
      <section className="py-16 lg:py-28 bg-[#f8fafc] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="work-showcase-bg"></div>
          <div className="work-grid-overlay"></div>
          <div className="absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-red-200/40 via-rose-200/30 to-transparent blur-3xl"></div>
          <div className="absolute -bottom-40 right-[-5%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-orange-200/30 via-red-200/20 to-transparent blur-3xl"></div>
          <div className="absolute top-1/3 right-[10%] h-[260px] w-[260px] rounded-full bg-gradient-to-br from-sky-200/40 via-blue-200/20 to-transparent blur-3xl"></div>
        </div>

        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-6 py-3 text-sm font-semibold text-red-700 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
              <SparklesIcon className="w-4 h-4 text-red-600" />
              Our Work
            </div>
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
              Portfolio That Feels{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-orange-500">
                Premium
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Signature labeling, hardware, and accessory programs crafted to elevate brands with clarity, precision, and striking shelf impact.
            </p>
          </div>

          {/* Three Stacked Marquee Galleries */}
          <div className="space-y-16">
            {/* Marquee 1 - Sticker Labels */}
            <div className="work-marquee-shell">
              <div className="work-marquee-inner min-h-[420px]">
                <div className="relative z-10 p-8 lg:p-10">
                <div className="text-center mb-8">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">Category 01</p>
                <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                  <a
                    href="/products/sticker-labels"
                    className="hover:text-red-600 transition-colors"
                  >
                    Sticker Labels
                  </a>
                </h3>
                <p className="text-gray-600">
                  Premium labeling solutions for all your needs. Explore{' '}
                  <a
                    href="/products/sticker-labels"
                    className="text-red-600 hover:text-red-700 underline underline-offset-4"
                  >
                    Sticker Labels
                  </a>{' '}
                  and barcode labels.
                </p>
                </div>
                <div className="marquee-container-simple">
                  <div className="marquee-track-simple">
                    {/* Sticker Labels Images */}
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/HomeG1.jpg"
                          alt="Custom barcode label rolls for product packaging"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/HomeG2.jpg"
                          alt="Thermal transfer barcode labels on rolls"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/Phero122.jpg"
                          alt="Hologram security labels for brand protection"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/Chrome.jpg"
                          alt="Chrome paper product labels with glossy finish"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/Polyster.jpg"
                          alt="Polyester labels for durable applications"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/BillingRolls.jpg"
                          alt="Direct thermal billing rolls for POS systems"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/Taffeta.jpg"
                          alt="Taffeta labels for garment care and branding"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    {/* Duplicate Set */}
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/HomeG1.jpg"
                          alt="Custom barcode label rolls for product packaging"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/HomeG2.jpg"
                          alt="Thermal transfer barcode labels on rolls"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/Phero122.jpg"
                          alt="Hologram security labels for brand protection"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/Chrome.jpg"
                          alt="Chrome paper product labels with glossy finish"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/Polyster.jpg"
                          alt="Polyester labels for durable applications"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/BillingRolls.jpg"
                          alt="Direct thermal billing rolls for POS systems"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Sticker_L/Taffeta.jpg"
                          alt="Taffeta labels for garment care and branding"
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

            {/* Marquee 2 - Hardware Solutions */}
            <div className="work-marquee-shell">
              <div className="work-marquee-inner min-h-[420px]">
                <div className="relative z-10 p-8 lg:p-10">
                <div className="text-center mb-8">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">Category 02</p>
                <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                  <a
                    href="/hardwares"
                    className="hover:text-red-600 transition-colors"
                  >
                    Hardware Solutions
                  </a>
                </h3>
                <p className="text-gray-600">
                  Cutting-edge hardware for all your business needs. See our{' '}
                  <a
                    href="/hardwares"
                    className="text-red-600 hover:text-red-700 underline underline-offset-4"
                  >
                    Hardwares
                  </a>
                  .
                </p>
                </div>
                <div className="marquee-container-simple">
                  <div className="marquee-track-simple">
                    {/* Hardware Images */}
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/2Dscanner.jpg"
                          alt="2D barcode scanner for inventory and retail"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/IndustrialP.jpeg"
                          alt="Industrial barcode printer for high-volume labeling"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/idcardPrinter.jpeg"
                          alt="ID card printer for access control and IDs"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/POS.jpeg"
                          alt="POS system for retail billing and labeling"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/Original.jpg"
                          alt="Desktop barcode printer for office labeling"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/scanner1.jpg"
                          alt="Handheld barcode scanner for logistics"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/barcodeP.jpg"
                          alt="Barcode printer for shipping and warehouse labels"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    {/* Duplicate Set */}
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/2Dscanner.jpg"
                          alt="2D barcode scanner for inventory and retail"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/IndustrialP.jpeg"
                          alt="Industrial barcode printer for high-volume labeling"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/idcardPrinter.jpeg"
                          alt="ID card printer for access control and IDs"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/POS.jpeg"
                          alt="POS system for retail billing and labeling"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/Original.jpg"
                          alt="Desktop barcode printer for office labeling"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/scanner1.jpg"
                          alt="Handheld barcode scanner for logistics"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/Hardwares/barcodeP.jpg"
                          alt="Barcode printer for shipping and warehouse labels"
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

            {/* Marquee 3 - Accessories */}
            <div className="work-marquee-shell">
              <div className="work-marquee-inner min-h-[420px]">
                <div className="relative z-10 p-8 lg:p-10">
                <div className="text-center mb-8">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">Category 03</p>
                <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                  <a
                    href="/products/ribbons"
                    className="hover:text-red-600 transition-colors"
                  >
                    Accessories
                  </a>
                </h3>
                <p className="text-gray-600">
                  Essential accessories to complete your setup. Browse{' '}
                  <a
                    href="/products/ribbons"
                    className="text-red-600 hover:text-red-700 underline underline-offset-4"
                  >
                    Accessories
                  </a>
                  .
                </p>
                </div>
                <div className="marquee-container-simple">
                  <div className="marquee-track-simple">
                    {/* Accessories Images */}
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/accessories/Resin.jpg"
                          alt="Resin ribbon for durable thermal transfer labels"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/accessories/Misc.jpg"
                          alt="Labeling accessories and printer supplies"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/accessories/RFID2.jpeg"
                          alt="RFID labels for asset tracking"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/accessories/RFID1.jpeg"
                          alt="RFID tags for inventory management"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/accessories/BillingRolls.jpg"
                          alt="Thermal paper rolls for billing and receipts"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/accessories/HomeG5.jpg"
                          alt="Label materials for product and barcode labels"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    {/* Duplicate Set */}
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/accessories/Resin.jpg"
                          alt="Resin ribbon for durable thermal transfer labels"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/accessories/Misc.jpg"
                          alt="Labeling accessories and printer supplies"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/accessories/RFID2.jpeg"
                          alt="RFID labels for asset tracking"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/accessories/RFID1.jpeg"
                          alt="RFID tags for inventory management"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/accessories/BillingRolls.jpg"
                          alt="Thermal paper rolls for billing and receipts"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="400px"
                          quality={80}
                        />
                      </div>
                    </div>
                    <div className="marquee-slide-simple">
                      <div className="work-image-card group relative h-[300px] w-[400px] overflow-hidden">
                        <OptimizedImage
                          src="/images/Homepage/accessories/HomeG5.jpg"
                          alt="Label materials for product and barcode labels"
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
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 lg:mt-16">
            <p className="text-lg text-gray-700 mb-6">Ready to see what we can do for your business?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/products" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-[0_18px_40px_rgba(239,68,68,0.3)]">
                <TagIcon className="w-5 h-5 mr-2" />
                Explore Our Products
              </a>
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-200 text-gray-700 hover:border-red-200 hover:text-red-700 font-semibold rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
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
                  Established in 2011, SDB LABEL has been at the forefront of providing comprehensive business solutions across India. We specialize in{' '}
                  <a href="/products" className="text-red-600 font-semibold hover:text-red-700 underline underline-offset-4">
                    premium label manufacturing
                  </a>
                  ,{' '}
                  <a href="/hardwares" className="text-red-600 font-semibold hover:text-red-700 underline underline-offset-4">
                    barcode printing hardware
                  </a>
                  ,{' '}
                  <a href="/softwares" className="text-red-600 font-semibold hover:text-red-700 underline underline-offset-4">
                    labeling software
                  </a>
                  , and{' '}
                  <a href="/consultancy" className="text-red-600 font-semibold hover:text-red-700 underline underline-offset-4">
                    consultancy services
                  </a>
                  .
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
                  alt="SDB Label manufacturing team and quality control facility"
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

      {/* Features Grid (replaces previous SEO copy block) */}
      <section
        id="sdb-labeling-solutions"
        className="py-16 lg:py-24 bg-white border-t border-gray-100"
        aria-labelledby="features-section-heading"
      >
        <div className="relative container-custom px-4 sm:px-6 lg:px-8">
          {/* Decorative background for section header */}
          <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 w-[720px] h-[220px] bg-gradient-to-r from-rose-200/40 via-red-200/40 to-rose-200/40 blur-3xl rounded-full"></div>

          <header className="relative z-10 mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white text-xs sm:text-sm font-semibold shadow-md">
              <SparklesIcon className="w-4 h-4" />
              Why Choose Us
            </div>
            <h2
              id="features-section-heading"
              className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-red-700 to-gray-900 drop-shadow-sm">Why Choose Our</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-700">Labeling Solutions</span>
            </h2>
            <div className="mx-auto mt-4 h-1.5 w-24 sm:w-32 bg-gradient-to-r from-red-600 via-rose-500 to-red-600 rounded-full shadow-sm"></div>
            <p className="mt-5 text-[15px] sm:text-base lg:text-lg text-gray-700 max-w-3xl mx-auto">
              Six reasons customers trust us for premium stickers, barcodes and complete labeling systems.
            </p>
          </header>

          <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
            {/* 1. Premium Quality, Industry-Grade Labels */}
            <article className="h-full text-left flex flex-col items-start">
              <div className="mb-4 w-24 h-24 rounded-full bg-red-50 ring-2 ring-red-100 flex items-center justify-center text-red-600">
                <CheckBadgeIcon className="w-16 h-16" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold tracking-wide text-red-600 uppercase">Premium Quality, Industry-Grade Labels</h3>
              <p className="mt-2 font-semibold text-gray-900 max-w-[36ch] text-[17px]">Crisp print, strong adhesion, made to perform.</p>
              <p className="mt-2 text-gray-700 leading-relaxed max-w-[58ch] text-[15px] sm:text-base">Durable materials and calibrated print deliver crisp barcodes and vibrant branding that withstand heat, moisture and constant handling, in demanding environments.</p>
            </article>

            {/* 2. Fast Turnaround & On-Time Delivery */}
            <article className="h-full text-left flex flex-col items-start">
              <div className="mb-4 w-24 h-24 rounded-full bg-red-50 ring-2 ring-red-100 flex items-center justify-center text-red-600">
                <RocketLaunchIcon className="w-16 h-16" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold tracking-wide text-red-600 uppercase">Fast Turnaround & On-Time Delivery</h3>
              <p className="mt-2 font-semibold text-gray-900 max-w-[36ch] text-[17px]">Tight deadlines, reliably met.</p>
              <p className="mt-2 text-gray-700 leading-relaxed max-w-[58ch] text-[15px] sm:text-base">Streamlined prepress and production with reliable logistics to meet urgent launches and recurring schedules—without compromising quality, even during peak seasons.</p>
            </article>

            {/* 3. Complete Customization for Every Product */}
            <article className="h-full text-left flex flex-col items-start">
              <div className="mb-4 w-24 h-24 rounded-full bg-red-50 ring-2 ring-red-100 flex items-center justify-center text-red-600">
                <WrenchScrewdriverIcon className="w-16 h-16" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold tracking-wide text-red-600 uppercase">Complete Customization for Every Product</h3>
              <p className="mt-2 font-semibold text-gray-900 max-w-[36ch] text-[17px]">Built to your exact spec.</p>
              <p className="mt-2 text-gray-700 leading-relaxed max-w-[58ch] text-[15px] sm:text-base">Shapes, sizes, adhesives, finishes and security features tailored to your application—retail, industrial, pharma, automotive and more, without design compromises.</p>
            </article>

            {/* 4. Wide Range of Materials & Printing Options */}
            <article className="h-full text-left flex flex-col items-start">
              <div className="mb-4 w-24 h-24 rounded-full bg-red-50 ring-2 ring-red-100 flex items-center justify-center text-red-600">
                <SquaresPlusIcon className="w-16 h-16" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold tracking-wide text-red-600 uppercase">Wide Range of Materials & Printing Options</h3>
              <p className="mt-2 font-semibold text-gray-900 max-w-[36ch] text-[17px]">The right stock for every job.</p>
              <p className="mt-2 text-gray-700 leading-relaxed max-w-[58ch] text-[15px] sm:text-base">Paper, BOPP, polyester, satin/taffeta and specialty stocks with resin/wax ribbons, foil, matte, gloss and holographic effects, matched to your application.</p>
            </article>

            {/* 5. One-Stop Solution: Labels, Printers & Scanners */}
            <article className="h-full text-left flex flex-col items-start">
              <div className="mb-4 w-24 h-24 rounded-full bg-red-50 ring-2 ring-red-100 flex items-center justify-center text-red-600">
                <BuildingStorefrontIcon className="w-16 h-16" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold tracking-wide text-red-600 uppercase">One-Stop Solution: Labels, Printers & Scanners</h3>
              <p className="mt-2 font-semibold text-gray-900 max-w-[36ch] text-[17px]">Products, hardware and support together.</p>
              <p className="mt-2 text-gray-700 leading-relaxed max-w-[58ch] text-[15px] sm:text-base">Source everything you need from a single partner—consumables, barcode/RFID printers, handheld scanners, POS and accessories, with simplified procurement.</p>
            </article>

            {/* 6. Dedicated Support & After‑Sales Service */}
            <article className="h-full text-left flex flex-col items-start">
              <div className="mb-4 w-24 h-24 rounded-full bg-red-50 ring-2 ring-red-100 flex items-center justify-center text-red-600">
                <ChatBubbleLeftRightIcon className="w-16 h-16" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold tracking-wide text-red-600 uppercase">Dedicated Support & After‑Sales Service</h3>
              <p className="mt-2 font-semibold text-gray-900 max-w-[36ch] text-[17px]">Help when and where you need it.</p>
              <p className="mt-2 text-gray-700 leading-relaxed max-w-[58ch] text-[15px] sm:text-base">Pre‑sale consultation, on‑site setup and responsive service keep your printing and scanning operations running smoothly, backed by trained engineers.</p>
            </article>
          </div>

          {/* Small CTA under grid */}
          <div className="text-center mt-10">
            <a href="/get-quotation" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold shadow hover:shadow-md hover:from-red-700 hover:to-red-800 transition-all">
              <TagIcon className="w-5 h-5 mr-2" />
              Get a Quick Quote
            </a>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-white via-red-50/30 to-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 shadow-md">
              Industries We Serve
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Industry-Specific Barcode, Thermal &amp; Hologram Labels
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Trusted label manufacturing for high-compliance and high-volume sectors across India.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="/industries/automotive"
              className="group rounded-2xl border border-red-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-700 transition-colors">
                Barcode labels for automotive manufacturing
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Durable labels for parts traceability and supply-chain compliance.
              </p>
            </a>
            <a
              href="/industries/fmcg"
              className="group rounded-2xl border border-red-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-700 transition-colors">
                FMCG product labels and packaging solutions
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                High-clarity print for fast-moving consumer goods.
              </p>
            </a>
            <a
              href="/industries#food-beverages"
              className="group rounded-2xl border border-red-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-700 transition-colors">
                Food &amp; beverage labels with safety compliance
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Thermal and barcode labels built for cold-chain and packaging.
              </p>
            </a>
            <a
              href="/industries#logistics"
              className="group rounded-2xl border border-red-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-700 transition-colors">
                Logistics labels for tracking and distribution
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Scan-ready labels for warehouses, shipping, and delivery.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Action CTAs */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-rose-50 via-white to-red-100">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md">
              Fast Action
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Get Expert Help for Barcode &amp; Labeling Challenges
            </h2>
            <p className="mt-3 text-gray-600 text-base sm:text-lg">
              Quick, practical support from the SDB Label team — across India.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-red-100">
              <h3 className="text-xl font-bold text-gray-900">Request a Free Label Audit</h3>
              <p className="mt-2 text-sm text-gray-600">
                Identify print, material, and adhesion issues before they impact production.
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="/contact?utm_source=homepage&utm_medium=cta&utm_campaign=free-label-audit"
                  className="inline-flex items-center justify-center px-4 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  Request Audit
                </a>
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/919654566078?text=I%20want%20a%20free%20label%20audit.%20utm_source%3Dhomepage%26utm_medium%3Dcta%26utm_campaign%3Dfree-label-audit"
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-red-200 text-red-700 font-semibold rounded-lg hover:bg-red-50 transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="tel:+919654566078"
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-red-200 text-red-700 font-semibold rounded-lg hover:bg-red-50 transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-red-100">
              <h3 className="text-xl font-bold text-gray-900">Fix Barcode Scan Failures</h3>
              <p className="mt-2 text-sm text-gray-600">
                Improve scan rates with the right material, print quality, and barcode specs.
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="/contact?utm_source=homepage&utm_medium=cta&utm_campaign=barcode-scan-fix"
                  className="inline-flex items-center justify-center px-4 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  Get Scan Fix
                </a>
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/919654566078?text=We%20have%20barcode%20scan%20failures.%20utm_source%3Dhomepage%26utm_medium%3Dcta%26utm_campaign%3Dbarcode-scan-fix"
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-red-200 text-red-700 font-semibold rounded-lg hover:bg-red-50 transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="tel:+919654566078"
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-red-200 text-red-700 font-semibold rounded-lg hover:bg-red-50 transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-red-100">
              <h3 className="text-xl font-bold text-gray-900">Get a Quote in 30 Minutes</h3>
              <p className="mt-2 text-sm text-gray-600">
                Fast pricing for barcode labels, thermal rolls, and hologram security labels.
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="/get-quotation?utm_source=homepage&utm_medium=cta&utm_campaign=quote-30-min"
                  className="inline-flex items-center justify-center px-4 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  Get 30‑Min Quote
                </a>
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/919654566078?text=Please%20share%20a%2030%20minute%20quote.%20utm_source%3Dhomepage%26utm_medium%3Dcta%26utm_campaign%3Dquote-30-min"
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-red-200 text-red-700 font-semibold rounded-lg hover:bg-red-50 transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="tel:+919654566078"
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-red-200 text-red-700 font-semibold rounded-lg hover:bg-red-50 transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>
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
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-white via-red-50/40 to-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-10 w-72 h-72 bg-gradient-to-br from-red-200/40 to-rose-200/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-10 w-80 h-80 bg-gradient-to-br from-rose-200/30 to-red-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Intro + Contact Methods */}
            <div>
              <div className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md mb-6">
                Get In Touch
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Talk to a Labeling Specialist
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Tell us your application, environment, and volume needs. We’ll recommend the right material, print method, and finishing.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-widest text-gray-400">Email</p>
                  <a href="mailto:info@sdblabel.com" className="mt-2 block text-base font-semibold text-gray-900 hover:text-red-700">
                    info@sdblabel.com
                  </a>
                </div>
                <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-widest text-gray-400">Phone</p>
                  <a href="tel:+919625520466" className="mt-2 block text-base font-semibold text-gray-900 hover:text-red-700">
                    +91 96255 20466
                  </a>
                </div>
                <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-widest text-gray-400">WhatsApp</p>
                  <a href="https://wa.me/919654566078" className="mt-2 block text-base font-semibold text-gray-900 hover:text-red-700">
                    Chat on WhatsApp
                  </a>
                </div>
                <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-widest text-gray-400">Location</p>
                  <p className="mt-2 text-base font-semibold text-gray-900">Delhi, India</p>
                </div>
              </div>

              <div className="mt-10 rounded-2xl border border-red-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Why companies choose SDB LABEL</h3>
                <ul className="mt-4 space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-500"></span>
                    Premium materials, tested for durability and scan accuracy.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-500"></span>
                    Fast production with consistent quality control.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-500"></span>
                    Support for barcode, thermal, RFID, and hologram labels.
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-red-100 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Send a Quick Request
                </h3>
              </div>

              <form ref={homepageFormRef} onSubmit={handleHomepageSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={homepageFormData.firstName}
                      onChange={handleHomepageInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-gray-800 placeholder-gray-400"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={homepageFormData.lastName}
                      onChange={handleHomepageInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-gray-800 placeholder-gray-400"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={homepageFormData.email}
                    onChange={handleHomepageInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-gray-800 placeholder-gray-400"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={homepageFormData.phone}
                    onChange={handleHomepageInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-gray-800 placeholder-gray-400"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={homepageFormData.company}
                    onChange={handleHomepageInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-gray-800 placeholder-gray-400"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={homepageFormData.message}
                    onChange={handleHomepageInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-gray-800 placeholder-gray-400 resize-none"
                    placeholder="Tell us about your label requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isHomepageSubmitting}
                  className="group relative w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <span className="relative flex items-center justify-center gap-3">
                    {isHomepageSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>Send Message</>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
