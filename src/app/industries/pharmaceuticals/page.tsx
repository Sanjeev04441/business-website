'use client'

import Link from 'next/link'
import Navigation from '@/components/NavigationWrapper'
import Footer from '@/components/Footer'
import { BeakerIcon, ShieldCheckIcon, ExclamationTriangleIcon, QrCodeIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

const PharmaceuticalsPage = () => {
  const solutions = [
    {
      icon: ShieldCheckIcon,
      title: 'PRESCRIPTION LABELS',
      description: 'Accurate and compliant prescription labels with clear dosage information and safety warnings.',
      features: [
        'Clear dosage instructions',
        'Drug interaction warnings',
        'FDA compliance standards',
        'High-contrast readability'
      ]
    },
    {
      icon: QrCodeIcon,
      title: 'CLINICAL TRIAL LABELS',
      description: 'Specialized labels for clinical trials with unique identifiers and tracking capabilities.',
      features: [
        'Unique trial identifiers',
        'Blind study support',
        'Temperature monitoring',
        'Regulatory compliance'
      ]
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'TEMPERATURE-SENSITIVE LABELS',
      description: 'Cold chain labels that monitor and indicate temperature exposure for sensitive medications.',
      features: [
        'Temperature monitoring indicators',
        'Time-temperature tracking',
        'Visual alert systems',
        'Cold chain compliance'
      ]
    },
    {
      icon: GlobeAltIcon,
      title: 'MULTILINGUAL LABELS',
      description: 'Patient information labels with multilingual support for global markets.',
      features: [
        'Multiple language support',
        'Cultural adaptation',
        'Clear patient instructions',
        'International compliance'
      ]
    }
  ]

  const benefits = [
    'Enhanced patient safety and medication adherence',
    'Improved regulatory compliance and audit readiness',
    'Reduced medication errors and adverse events',
    'Enhanced clinical trial efficiency and accuracy',
    'Better cold chain management and monitoring',
    'Global market accessibility and compliance'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-rose-900">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl mb-6 mx-auto">
              <BeakerIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              PHARMACEUTICAL SOLUTIONS
            </h1>
            <p className="text-xl sm:text-2xl text-red-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Compliant labeling solutions for pharmaceutical and healthcare products, 
              ensuring patient safety and regulatory compliance.
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
                  The pharmaceutical industry operates under the most stringent regulatory requirements globally. 
                  With patient safety as the paramount concern, pharmaceutical labeling must meet exacting standards 
                  for accuracy, compliance, and readability.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our pharmaceutical labeling solutions are designed to meet FDA and international regulatory requirements, 
                  ensuring medication safety, regulatory compliance, and patient care while maintaining production efficiency.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-red-200 font-semibold">Strict regulatory compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-red-200 font-semibold">Patient safety requirements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-red-200 font-semibold">Cold chain management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-red-200 font-semibold">Global market access</span>
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
            READY TO ENHANCE PHARMACEUTICAL SAFETY?
          </h2>
          <p className="text-xl text-red-200 mb-8">
            Let's discuss how our pharmaceutical labeling solutions can improve patient safety, 
            ensure regulatory compliance, and optimize your operations.
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

export default PharmaceuticalsPage 