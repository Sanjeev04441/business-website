'use client'

import Link from 'next/link'
import Navigation from '@/components/NavigationWrapper'
import Footer from '@/components/Footer'
import { CubeIcon, TagIcon, ShieldCheckIcon, QrCodeIcon, SparklesIcon } from '@heroicons/react/24/outline'

const FootwearPage = () => {
  const solutions = [
    {
      icon: TagIcon,
      title: 'SIZE AND STYLE LABELS',
      description: 'Clear, durable labels that provide essential product information with premium finishes.',
      features: [
        'Crystal clear typography',
        'Wash-resistant materials',
        'Premium finish options',
        'Custom branding integration'
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: 'CARE INSTRUCTION LABELS',
      description: 'Durable care labels that withstand washing and provide clear maintenance guidelines.',
      features: [
        'Wash-resistant adhesive',
        'International care symbols',
        'Clear instruction text',
        'Long-lasting durability'
      ]
    },
    {
      icon: SparklesIcon,
      title: 'BRAND LABELS',
      description: 'Premium brand labels that enhance product presentation and brand recognition.',
      features: [
        'High-quality finishes',
        'Custom design options',
        'Premium materials',
        'Brand consistency'
      ]
    },
    {
      icon: QrCodeIcon,
      title: 'RFID TRACKING TAGS',
      description: 'Advanced inventory tracking solutions for footwear manufacturing and retail.',
      features: [
        'Real-time inventory tracking',
        'Anti-theft protection',
        'Supply chain visibility',
        'Retail analytics integration'
      ]
    }
  ]

  const benefits = [
    'Enhanced brand presentation and recognition',
    'Improved inventory management and tracking',
    'Reduced product returns and exchanges',
    'Streamlined retail operations',
    'Enhanced customer experience',
    'Compliance with international standards'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-rose-900">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl mb-6 mx-auto">
              <CubeIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              FOOTWEAR SOLUTIONS
            </h1>
            <p className="text-xl sm:text-2xl text-red-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Specialized labeling for footwear industry with style and durability, 
              enhancing brand presentation and operational efficiency.
            </p>
            <div className="w-24 h-1 bg-red-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-red-800/30">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              INDUSTRY OVERVIEW
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The footwear industry combines fashion, functionality, and durability in a highly competitive market. 
                  With diverse materials, styles, and consumer preferences, footwear manufacturers need labeling solutions 
                  that can withstand daily wear while maintaining aesthetic appeal.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our footwear labeling solutions address the unique challenges of shoe manufacturing, 
                  providing both functional durability and brand enhancement capabilities.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-red-200 font-semibold">Diverse material compatibility</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-red-200 font-semibold">Wash and wear resistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-red-200 font-semibold">Brand presentation needs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-red-200 font-semibold">Inventory tracking requirements</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            OUR SOLUTIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon
              return (
                <div
                  key={index}
                  className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-red-800/30 hover:border-red-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-red-800/30">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              KEY BENEFITS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            READY TO ENHANCE YOUR FOOTWEAR BRAND?
          </h2>
          <p className="text-xl text-red-200 mb-8">
            Let's discuss how our footwear labeling solutions can improve your brand presentation, 
            enhance customer experience, and optimize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-lg hover:from-red-500 hover:to-rose-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
            >
              Contact Us
            </Link>
            <Link
              href="/get-quotation"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-red-400 text-red-400 font-semibold rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get Quotation
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default FootwearPage 