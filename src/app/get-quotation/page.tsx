'use client'

import { useState, useEffect, useRef } from 'react'
import Navigation from '@/components/NavigationWrapper'
import Footer from '@/components/Footer'
import OptimizedImage from '@/components/OptimizedImage'
import OptimizedVideo from '@/components/OptimizedVideo'
import { 
  DocumentTextIcon,
  BuildingOfficeIcon,
  UserIcon,
  MapPinIcon,
  TagIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  UserGroupIcon,
  CheckCircleIcon,
  StarIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  ClockIcon,
  CurrencyDollarIcon,
  TruckIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

export default function GetQuotation() {
  const videoRef = useRef<HTMLVideoElement>(null)

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

  const [formData, setFormData] = useState({
    // Personal Information
    name: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    
    // Project Details
    projectType: '',
    quantity: '',
    urgency: '',
    budget: '',
    industry: '',
    
    // Specific Requirements
    productCategory: '',
    materialType: '',
    size: '',
    color: '',
    specialRequirements: '',
    
    // Additional Information
    timeline: '',
    deliveryLocation: '',
    paymentTerms: '',
    additionalNotes: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Send data to API route
      const response = await fetch('/api/quotation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          companyName: formData.companyName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          city: formData.city,
          state: formData.state,
          projectType: formData.projectType,
          quantity: formData.quantity,
          urgency: formData.urgency,
          budget: formData.budget,
          industry: formData.industry,
          additionalNotes: formData.additionalNotes
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Quotation request submitted successfully! We will get back to you within 24 hours with a detailed quote.')
        
        // Reset form
        setFormData({
          name: '', companyName: '', email: '', phoneNumber: '', address: '', city: '', state: '', zipCode: '', country: '',
          projectType: '', quantity: '', urgency: '', budget: '', industry: '', productCategory: '', materialType: '', size: '', color: '',
          specialRequirements: '', timeline: '', deliveryLocation: '', paymentTerms: '', additionalNotes: ''
        })
      } else {
        throw new Error(result.error || 'Failed to submit quotation request')
      }
    } catch (error) {
      console.error('Quotation submission error:', error)
      setSubmitStatus('error')
      setSubmitMessage('There was an error submitting your quotation request. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const serviceCategories = [
    {
      icon: TagIcon,
      title: 'Sticker Labels',
      description: 'Product labels, barcode labels, billing rolls, holograms, RFIDs',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: ComputerDesktopIcon,
      title: 'Hardware Solutions',
      description: 'Printers, scanners, industrial printers, ID card printers',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: CpuChipIcon,
      title: 'Software Systems',
      description: 'Inventory management, asset tracking, ERP solutions',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Consultancy',
      description: 'Expert guidance and strategic consulting',
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  const benefits = [
    {
      icon: CheckCircleIcon,
      title: 'Free Consultation',
      description: 'Get expert advice at no cost to help you choose the right solution'
    },
    {
      icon: ClockIcon,
      title: '24-Hour Response',
      description: 'Receive your detailed quotation within 24 hours of submission'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Competitive Pricing',
      description: 'Best market rates with transparent, no-hidden-cost pricing'
    },
    {
      icon: TruckIcon,
      title: 'Fast Delivery',
      description: 'Quick turnaround times to meet your project deadlines'
    }
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      company: 'Patanjali',
      rating: 5,
      comment: 'The quotation process was smooth and professional. We got exactly what we needed at a great price.'
    },
    {
      name: 'Rajesh Kumar',
      company: 'Mankind',
      rating: 5,
      comment: 'SDB LABEL provided detailed quotes with multiple options. Their expertise helped us make the right choice.'
    },
    {
      name: 'Anjali Patel',
      company: 'Lucas',
      rating: 5,
      comment: 'Quick response time and competitive pricing. Highly recommended for any labeling needs.'
    }
  ]

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Video Background - Covers entire viewport including navigation */}
      <div className="fixed inset-0 w-full h-full z-0">
        <OptimizedVideo
          src="/videos/getQuote_optimized.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          priority
          style={{
            minHeight: '100vh',
            width: '100vw',
            height: '100vh',
            objectFit: 'cover'
          }}
        />
        {/* Overlay for better form readability - lighter on top for navigation */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-red-900/10"></div>
        {/* Fallback background in case video doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-900 to-rose-900 opacity-0" id="fallback-bg"></div>
      </div>

      {/* Navigation with transparent background over video */}
      <div className="relative z-[9999]">
        <Navigation />
      </div>

      {/* Quotation Form - Transparent over video */}
      <section id="quotation-form" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Get Your Free Quote
              </h2>
              <p className="text-lg text-red-100 max-w-xl mx-auto">
                Get a detailed quote in Indian Rupees within 24 hours
              </p>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-500/20 border border-green-400/30 rounded-lg max-w-2xl mx-auto">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-green-100">{submitMessage}</p>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-6 p-4 bg-red-500/20 border border-red-400/30 rounded-lg max-w-2xl mx-auto">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-red-100">{submitMessage}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-transparent">

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
                      <UserIcon className="w-5 h-5 text-white" />
                    </div>
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-gray-700 placeholder-gray-400 hover:bg-gray-50 transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-semibold text-white mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-gray-700 placeholder-gray-400 hover:bg-gray-50 transition-all duration-200"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-gray-700 placeholder-gray-400 hover:bg-gray-50 transition-all duration-200"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-semibold text-white mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-gray-700 placeholder-gray-400 hover:bg-gray-50 transition-all duration-200"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="city" className="block text-sm font-semibold text-white mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-gray-700 placeholder-gray-400 hover:bg-gray-50 transition-all duration-200"
                        placeholder="Mumbai, Delhi, Bangalore, etc."
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="state" className="block text-sm font-semibold text-white mb-2">
                        State *
                      </label>
                      <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-gray-700 hover:bg-gray-50 transition-all duration-200"
                      >
                        <option value="">Select State</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Assam">Assam</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>



                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
                      <BuildingOfficeIcon className="w-5 h-5 text-white" />
                    </div>
                    Project Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-semibold text-white mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-gray-700 hover:bg-gray-50 transition-all duration-200"
                      >
                        <option value="">Select project type</option>
                        <option value="sticker-labels">Sticker Labels</option>
                        <option value="hardware">Hardware Solutions</option>
                        <option value="software">Software Systems</option>
                        <option value="consultancy">Consultancy</option>
                        <option value="custom">Custom Solution</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-semibold text-white mb-2">
                        Quantity/Scope
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-gray-700 placeholder-gray-400 hover:bg-gray-50 transition-all duration-200"
                        placeholder="e.g., 1000 labels, 5 printers, etc."
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="urgency" className="block text-sm font-semibold text-white mb-2">
                        Urgency
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-gray-700 hover:bg-gray-50 transition-all duration-200"
                      >
                        <option value="">Select urgency</option>
                        <option value="low">Low (1-2 weeks)</option>
                        <option value="medium">Medium (3-5 days)</option>
                        <option value="high">High (1-2 days)</option>
                        <option value="urgent">Urgent (Same day)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-white mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-gray-700 hover:bg-gray-50 transition-all duration-200"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-50000">Under ₹50,000</option>
                        <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                        <option value="100000-250000">₹1,00,000 - ₹2,50,000</option>
                        <option value="250000-500000">₹2,50,000 - ₹5,00,000</option>
                        <option value="500000-1000000">₹5,00,000 - ₹10,00,000</option>
                        <option value="over-1000000">Over ₹10,00,000</option>
                        <option value="custom">Custom budget</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="industry" className="block text-sm font-semibold text-white mb-2">
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-gray-700 hover:bg-gray-50 transition-all duration-200"
                      >
                        <option value="">Select Industry</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="FMCG">FMCG (Fast Moving Consumer Goods)</option>
                        <option value="Pharmaceuticals">Pharmaceuticals</option>
                        <option value="Automotive">Automotive</option>
                        <option value="Textiles">Textiles & Apparel</option>
                        <option value="Food & Beverages">Food & Beverages</option>
                        <option value="Electronics">Electronics & IT</option>
                        <option value="Logistics">Logistics & E-commerce</option>
                        <option value="Retail">Retail</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Education">Education</option>
                        <option value="Banking">Banking & Finance</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>



                {/* Additional Information */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
                      <DocumentTextIcon className="w-5 h-5 text-white" />
                    </div>
                    Additional Information
                  </h3>
                  <div>
                    <label htmlFor="additionalNotes" className="block text-sm font-semibold text-white mb-2">
                      Additional Notes & Requirements
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-gray-700 placeholder-gray-400 hover:bg-gray-50 transition-all duration-200 resize-none"
                      placeholder="Any additional information, timeline, delivery preferences, payment terms, or special requirements..."
                    />
                  </div>
                </div>

                <div className="text-center pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center justify-center px-12 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-red-400 disabled:to-red-500 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Quotation Request
                      </>
                    )}
                  </button>
                  <p className="text-sm text-red-100 mt-4">
                    We'll get back to you within 24 hours with a detailed quote in Indian Rupees
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-20 bg-white">
        <Footer />
      </div>
    </div>
  )
} 