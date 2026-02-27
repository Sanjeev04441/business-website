'use client'

import Link from 'next/link'
import Navigation from '@/components/NavigationWrapper'
import Footer from '@/components/Footer'
import { ShoppingBagIcon, TruckIcon, ShieldCheckIcon, SparklesIcon, QrCodeIcon } from '@heroicons/react/24/outline'

const FMCGPage = () => {
  const solutions = [
    {
      icon: TruckIcon,
      title: 'HIGH-SPEED LABELING SYSTEMS',
      description: 'Automated labeling solutions for high-volume production lines with precision and reliability.',
      features: [
        'Up to 1000 labels per minute',
        'Variable data printing',
        'Real-time quality control',
        'Easy integration with existing systems'
      ]
    },
    {
      icon: QrCodeIcon,
      title: 'BARCODE & QR CODE INTEGRATION',
      description: 'Advanced tracking and inventory management through integrated barcode and QR code solutions.',
      features: [
        'GS1 compliant barcodes',
        'QR codes for mobile scanning',
        'Batch and lot tracking',
        'Real-time inventory updates'
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: 'TAMPER-EVIDENT LABELS',
      description: 'Security labels that provide clear evidence of tampering to protect product integrity.',
      features: [
        'Destructive adhesive technology',
        'Holographic security features',
        'Serial number tracking',
        'Anti-counterfeiting measures'
      ]
    },
    {
      icon: SparklesIcon,
      title: 'ECO-FRIENDLY MATERIALS',
      description: 'Sustainable labeling solutions that meet environmental standards and consumer preferences.',
      features: [
        'Recyclable materials',
        'Biodegradable adhesives',
        'Reduced carbon footprint',
        'FSC certified papers'
      ]
    }
  ]

  const benefits = [
    'Increased production efficiency by 40%',
    'Reduced labeling errors by 95%',
    'Enhanced brand protection and security',
    'Improved inventory management and tracking',
    'Compliance with international standards',
    'Sustainable packaging solutions'
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-white to-red-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl mb-6 mx-auto">
              <ShoppingBagIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              FMCG SOLUTIONS
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionizing retail with innovative labeling solutions for consumer products, 
              ensuring brand consistency and regulatory compliance.
            </p>
            <div className="w-24 h-1 bg-red-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-red-100 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              INDUSTRY OVERVIEW
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The Fast Moving Consumer Goods (FMCG) sector is one of the most dynamic and competitive industries globally. 
                  With products that have short shelf lives and high turnover rates, FMCG companies face unique challenges 
                  in labeling, packaging, and supply chain management.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our comprehensive labeling solutions are specifically designed to address these challenges, 
                  providing speed, accuracy, and reliability while maintaining the highest standards of quality 
                  and compliance.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-red-600 font-semibold">High-volume production requirements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-red-600 font-semibold">Regulatory compliance needs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-red-600 font-semibold">Brand protection and security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-red-600 font-semibold">Supply chain traceability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            OUR SOLUTIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-red-100 hover:border-red-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
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
          <div className="bg-white rounded-2xl p-8 border border-red-100 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
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
                  <span className="text-gray-700 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-600 to-rose-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            READY TO OPTIMIZE YOUR FMCG OPERATIONS?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Let's discuss how our FMCG labeling solutions can enhance your production efficiency, 
            improve compliance, and drive growth in your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-700 font-semibold rounded-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/get-quotation"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-700 transition-all duration-300 transform hover:scale-105"
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

export default FMCGPage 
