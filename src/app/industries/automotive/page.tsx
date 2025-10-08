'use client'

import Link from 'next/link'
import Navigation from '@/components/NavigationWrapper'
import Footer from '@/components/Footer'
import { TruckIcon, ShieldCheckIcon, WrenchScrewdriverIcon, ExclamationTriangleIcon, QrCodeIcon } from '@heroicons/react/24/outline'

const AutomotivePage = () => {
  const solutions = [
    {
      icon: WrenchScrewdriverIcon,
      title: 'HEAT-RESISTANT LABELS',
      description: 'Durable labels designed to withstand extreme temperatures in engine compartments and under-hood environments.',
      features: [
        'Temperature resistance up to 300°C',
        'Chemical and oil resistance',
        'UV and weather protection',
        'Permanent adhesive technology'
      ]
    },
    {
      icon: QrCodeIcon,
      title: 'VIN TRACKING LABELS',
      description: 'Advanced vehicle identification labels with integrated tracking and compliance features.',
      features: [
        'Unique vehicle identification numbers',
        'Barcode and QR code integration',
        'Tamper-evident security features',
        'Regulatory compliance standards'
      ]
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'SAFETY WARNING LABELS',
      description: 'High-visibility safety labels that meet automotive safety standards and regulations.',
      features: [
        'High contrast visibility',
        'Reflective materials for low light',
        'International safety symbols',
        'Durable outdoor performance'
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: 'PARTS IDENTIFICATION LABELS',
      description: 'Comprehensive parts tracking and identification solutions for automotive components.',
      features: [
        'Component serialization',
        'Manufacturing date tracking',
        'Supplier identification',
        'Quality control integration'
      ]
    }
  ]

  const benefits = [
    'Enhanced component traceability throughout supply chain',
    'Improved safety compliance and risk management',
    'Reduced warranty claims through better tracking',
    'Streamlined inventory management and logistics',
    'Enhanced brand protection and anti-counterfeiting',
    'Compliance with international automotive standards'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-rose-900">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl mb-6 mx-auto">
              <TruckIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              AUTOMOTIVE SOLUTIONS
            </h1>
            <p className="text-xl sm:text-2xl text-red-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Advanced labeling and tracking solutions for automotive manufacturing, 
              ensuring safety, compliance, and operational efficiency.
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
                  The automotive industry operates under some of the most stringent quality and safety standards globally. 
                  With complex supply chains, strict regulatory requirements, and the need for long-term durability, 
                  automotive labeling solutions must meet exceptional performance criteria.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our automotive labeling solutions are engineered to withstand harsh environments, 
                  provide critical safety information, and ensure complete traceability throughout 
                  the vehicle lifecycle.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-red-200 font-semibold">Extreme temperature environments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-red-200 font-semibold">Safety and compliance requirements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-red-200 font-semibold">Long-term durability needs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-red-200 font-semibold">Complex supply chain tracking</span>
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
            READY TO ENHANCE YOUR AUTOMOTIVE OPERATIONS?
          </h2>
          <p className="text-xl text-red-200 mb-8">
            Let's discuss how our automotive labeling solutions can improve your safety compliance, 
            enhance traceability, and optimize your manufacturing processes.
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

export default AutomotivePage 