"use client"

import Navigation from '@/components/NavigationWrapper'
import Footer from '@/components/Footer'
import OptimizedImage from '@/components/OptimizedImage'
import { 
  ComputerDesktopIcon, 
  PrinterIcon, 
  QrCodeIcon, 
  CogIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  SparklesIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export default function Hardwares() {
  const hardwareSolutions = [
    {
      name: 'Desktop Printers',
      description: 'High-performance desktop printing solutions for small to medium businesses. Our desktop printers offer exceptional print quality, fast printing speeds, and reliable performance for everyday labeling needs. Perfect for offices, retail stores, and small warehouses.',
      features: [
        'High-resolution printing up to 203 DPI',
        'Fast printing speeds up to 4 inches per second',
        'USB and network connectivity options',
        'Compatible with various label sizes',
        'Easy-to-use design with intuitive controls',
        'Low maintenance requirements'
      ],
      image: '/images/hardwares/Desktopprinters.jpg',
      icon: PrinterIcon,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Industrial Printers',
      description: 'Heavy-duty industrial printing solutions designed for high-volume production environments. These robust printers can handle continuous operation, extreme conditions, and large-scale labeling requirements. Ideal for manufacturing facilities, distribution centers, and large warehouses.',
      features: [
        'High-speed printing up to 12 inches per second',
        'Industrial-grade durability and reliability',
        '24/7 continuous operation capability',
        'Advanced media handling systems',
        'Network integration and remote management',
        'Wide range of label and ribbon compatibility'
      ],
      image: '/images/hardwares/IndustrialPrinter.jpeg',
      icon: PrinterIcon,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'ID Card Printers',
      description: 'Professional ID card printing solutions for security and identification needs. Our ID card printers deliver crisp, high-quality prints with advanced security features. Perfect for corporate offices, educational institutions, government facilities, and security-conscious organizations.',
      features: [
        'High-resolution printing up to 300 DPI',
        'Dual-sided printing capability',
        'Advanced security features and encoding',
        'Multiple card size compatibility',
        'Built-in laminator options',
        'Professional card design software included'
      ],
      image: '/images/hardwares/idcardPrinter.jpeg',
      icon: ComputerDesktopIcon,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: '1D Scanners',
      description: 'Reliable 1D barcode scanning solutions for basic inventory and retail applications. These scanners provide fast, accurate scanning of traditional barcodes with excellent read rates. Ideal for retail stores, small warehouses, and basic inventory management.',
      features: [
        'Fast scanning speeds up to 100 scans per second',
        'Excellent read rates on various barcode types',
        'Ergonomic design for comfortable use',
        'USB and wireless connectivity options',
        'Durable construction for daily use',
        'Easy integration with existing systems'
      ],
      image: '/images/hardwares/scanner.jpg',
      icon: QrCodeIcon,
      color: 'from-pink-500 to-red-500'
    },
    {
      name: '2D Scanners',
      description: 'Advanced 2D scanning technology for comprehensive data capture and modern applications. These scanners can read QR codes, Data Matrix, PDF417, and other 2D barcodes with superior performance. Perfect for advanced inventory systems, mobile applications, and modern retail environments.',
      features: [
        '2D barcode and QR code scanning capability',
        'High-speed scanning up to 200 scans per second',
        'Image capture and OCR functionality',
        'Bluetooth and USB connectivity',
        'Rugged design for industrial use',
        'Advanced decoding algorithms'
      ],
      image: '/images/hardwares/2Dscanner.jpg',
      icon: QrCodeIcon,
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Printer Heads - Original',
      description: 'Genuine original printer heads for optimal performance and longevity. Our original printer heads are manufactured to exact specifications, ensuring perfect compatibility and maximum print quality. Essential for maintaining peak performance of your printing equipment.',
      features: [
        'Genuine manufacturer specifications',
        'Optimal print quality and resolution',
        'Extended lifespan and reliability',
        'Perfect compatibility with printer models',
        'Warranty coverage and support',
        'Professional installation guidance'
      ],
      image: '/images/hardwares/Original.jpg',
      icon: CogIcon,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      name: 'Printer Heads - OEM',
      description: 'High-quality OEM printer heads offering excellent performance at competitive prices. These OEM alternatives provide reliable performance while being cost-effective for businesses looking to optimize their printing costs without compromising quality.',
      features: [
        'High-quality OEM alternatives',
        'Cost-effective pricing',
        'Reliable performance and durability',
        'Compatible with major printer brands',
        'Quality assurance and testing',
        'Technical support and guidance'
      ],
      image: '/images/hardwares/OEM.jpg',
      icon: CogIcon,
      color: 'from-yellow-500 to-green-500'
    },
    {
      name: 'POS Systems',
      description: 'Complete Point of Sale systems for modern retail and hospitality businesses. Our POS solutions combine hardware and software to create seamless transaction processing, inventory management, and customer service experiences. Perfect for retail stores, restaurants, and service businesses.',
      features: [
        'Complete hardware and software integration',
        'Touchscreen displays and receipt printers',
        'Cash drawer and barcode scanner integration',
        'Inventory and sales reporting',
        'Customer management and loyalty programs',
        'Multi-location support and cloud backup'
      ],
      image: '/images/hardwares/POS.jpeg',
      icon: ComputerDesktopIcon,
      color: 'from-green-500 to-teal-500'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 overflow-hidden pt-20 sm:pt-24 lg:pt-28">
        {/* Hero Background - contained within hero only */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/images/hardwares/Hardwares.jpg"
            alt="Hardware Solutions Background"
            fill
            className="w-full h-full object-cover"
            priority
          />
          {/* Overlays for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-red-900/40 to-slate-900/50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/15 to-red-900/20"></div>
        </div>
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-400/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-300/20 rounded-full blur-3xl animate-float-medium"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-red-200/10 rounded-full blur-3xl animate-float-fast"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="pt-20 pb-6">
            {/* Header Section */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                <span className="text-red-800 font-semibold text-sm">Professional Hardware Solutions</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4">
                Advanced{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-red-100">
                  Hardware
                </span>{' '}
                Solutions
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-red-100 leading-relaxed max-w-3xl mx-auto mb-8">
                Discover our comprehensive range of high-quality hardware solutions including printers, scanners, 
                ID card systems, and POS solutions. Built for reliability, performance, and seamless integration.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/get-quotation" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-white to-gray-50 text-red-600 font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <ArrowRightIcon className="w-5 h-5 mr-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="relative z-10">Request Quote</span>
                </a>
                <a 
                  href="/contact" 
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/20"
                >
                  <SparklesIcon className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Solutions Grid Section - light theme to match pages */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <SparklesIcon className="w-4 h-4 text-red-600" />
              Our Solutions
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Hardware Suite
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our hardware solutions are designed to streamline your business operations, 
              improve efficiency, and drive growth across all departments.
            </p>
          </div>

          <div className="space-y-24">
            {/* Printers Section */}
            <div id="printers" className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Printers</h3>
                <p className="text-lg text-gray-600">Professional printing solutions for every business need</p>
              </div>
            </div>
            
            {/* Desktop Printers */}
            <div id="desktop-printers" className="grid lg:grid-cols-2 gap-12 items-center">
              {(() => {
                const solution = hardwareSolutions[0]
                return (
                  <>
                    {/* Image */}
                    <div className="order-1">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                        <div className="relative bg-white rounded-2xl p-4 shadow-xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                          <OptimizedImage
                            src={solution.image}
                            alt={solution.name}
                            width={600}
                            height={400}
                            className="w-full h-96 rounded-xl object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="order-2">
                      <div className="space-y-6">
                        {/* Icon and Title */}
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${solution.color} shadow-lg`}>
                            <solution.icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-3xl font-bold text-gray-900">{solution.name}</h3>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {solution.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-gray-900">Key Features:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {solution.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-3">
                                <CheckCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                          <a 
                            href="/contact" 
                            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                          >
                            Learn More
                            <ArrowRightIcon className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })()}
            </div>

            {/* Industrial Printers */}
            <div id="industrial-printers" className="grid lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
              {(() => {
                const solution = hardwareSolutions[1]
                return (
                  <>
                    {/* Image */}
                    <div className="order-1 lg:order-2">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                        <div className="relative bg-white rounded-2xl p-4 shadow-xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                          <OptimizedImage
                            src={solution.image}
                            alt={solution.name}
                            width={600}
                            height={400}
                            className="w-full h-96 rounded-xl object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="order-2 lg:order-1">
                      <div className="space-y-6">
                        {/* Icon and Title */}
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${solution.color} shadow-lg`}>
                            <solution.icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-3xl font-bold text-gray-900">{solution.name}</h3>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {solution.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-gray-900">Key Features:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {solution.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-3">
                                <CheckCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                          <a 
                            href="/contact" 
                            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                          >
                            Learn More
                            <ArrowRightIcon className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })()}
            </div>

            {/* ID Card Printers */}
            <div id="id-card-printers" className="grid lg:grid-cols-2 gap-12 items-center">
              {(() => {
                const solution = hardwareSolutions[2]
                return (
                  <>
                    {/* Image */}
                    <div className="order-1">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                        <div className="relative bg-white rounded-2xl p-4 shadow-xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                          <OptimizedImage
                            src={solution.image}
                            alt={solution.name}
                            width={600}
                            height={400}
                            className="w-full h-96 rounded-xl object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="order-2">
                      <div className="space-y-6">
                        {/* Icon and Title */}
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${solution.color} shadow-lg`}>
                            <solution.icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-3xl font-bold text-gray-900">{solution.name}</h3>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {solution.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-gray-900">Key Features:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {solution.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-3">
                                <CheckCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                          <a 
                            href="/contact" 
                            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                          >
                            Learn More
                            <ArrowRightIcon className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })()}
            </div>

            {/* Scanners Section */}
            <div id="scanners" className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Scanners</h3>
                <p className="text-lg text-gray-600">Advanced scanning solutions for data capture and inventory management</p>
              </div>
            </div>

            {/* 1D Scanners */}
            <div id="1d-scanners" className="grid lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
              {(() => {
                const solution = hardwareSolutions[3]
                return (
                  <>
                    {/* Image */}
                    <div className="order-1 lg:order-2">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                        <div className="relative bg-white rounded-2xl p-4 shadow-xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                          <OptimizedImage
                            src={solution.image}
                            alt={solution.name}
                            width={600}
                            height={400}
                            className="w-full h-96 rounded-xl object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="order-2 lg:order-1">
                      <div className="space-y-6">
                        {/* Icon and Title */}
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${solution.color} shadow-lg`}>
                            <solution.icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-3xl font-bold text-gray-900">{solution.name}</h3>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {solution.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-gray-900">Key Features:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {solution.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-3">
                                <CheckCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                          <a 
                            href="/contact" 
                            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                          >
                            Learn More
                            <ArrowRightIcon className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })()}
            </div>

            {/* 2D Scanners */}
            <div id="2d-scanners" className="grid lg:grid-cols-2 gap-12 items-center">
              {(() => {
                const solution = hardwareSolutions[4]
                return (
                  <>
                    {/* Image */}
                    <div className="order-1">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                        <div className="relative bg-white rounded-2xl p-4 shadow-xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                          <OptimizedImage
                            src={solution.image}
                            alt={solution.name}
                            width={600}
                            height={400}
                            className="w-full h-96 rounded-xl object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="order-2">
                      <div className="space-y-6">
                        {/* Icon and Title */}
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${solution.color} shadow-lg`}>
                            <solution.icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-3xl font-bold text-gray-900">{solution.name}</h3>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {solution.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-gray-900">Key Features:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {solution.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-3">
                                <CheckCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                          <a 
                            href="/contact" 
                            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                          >
                            Learn More
                            <ArrowRightIcon className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })()}
            </div>

            {/* Accessories Section */}
            <div id="accessories" className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Accessories</h3>
                <p className="text-lg text-gray-600">Essential accessories and replacement parts for optimal performance</p>
              </div>
            </div>

            {/* Printer Heads - Original */}
            <div id="printer-heads-original" className="grid lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
              {(() => {
                const solution = hardwareSolutions[5]
                return (
                  <>
                    {/* Image */}
                    <div className="order-1 lg:order-2">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                        <div className="relative bg-white rounded-2xl p-4 shadow-xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                          <OptimizedImage
                            src={solution.image}
                            alt={solution.name}
                            width={600}
                            height={400}
                            className="w-full h-96 rounded-xl object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="order-2 lg:order-1">
                      <div className="space-y-6">
                        {/* Icon and Title */}
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${solution.color} shadow-lg`}>
                            <solution.icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-3xl font-bold text-gray-900">{solution.name}</h3>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {solution.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-gray-900">Key Features:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {solution.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-3">
                                <CheckCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                          <a 
                            href="/contact" 
                            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                          >
                            Learn More
                            <ArrowRightIcon className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })()}
            </div>

            {/* Printer Heads - OEM */}
            <div id="printer-heads-oem" className="grid lg:grid-cols-2 gap-12 items-center">
              {(() => {
                const solution = hardwareSolutions[6]
                return (
                  <>
                    {/* Image */}
                    <div className="order-1">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                        <div className="relative bg-white rounded-2xl p-4 shadow-xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                          <OptimizedImage
                            src={solution.image}
                            alt={solution.name}
                            width={600}
                            height={400}
                            className="w-full h-96 rounded-xl object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="order-2">
                      <div className="space-y-6">
                        {/* Icon and Title */}
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${solution.color} shadow-lg`}>
                            <solution.icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-3xl font-bold text-gray-900">{solution.name}</h3>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {solution.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-gray-900">Key Features:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {solution.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-3">
                                <CheckCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                          <a 
                            href="/contact" 
                            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                          >
                            Learn More
                            <ArrowRightIcon className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })()}
            </div>

            {/* POS Systems Section */}
            <div id="pos-systems" className="grid lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
              {(() => {
                const solution = hardwareSolutions[7]
                return (
                  <>
                    {/* Image */}
                    <div className="order-1 lg:order-2">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                        <div className="relative bg-white rounded-2xl p-4 shadow-xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                          <OptimizedImage
                            src={solution.image}
                            alt={solution.name}
                            width={600}
                            height={400}
                            className="w-full h-96 rounded-xl object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="order-2 lg:order-1">
                      <div className="space-y-6">
                        {/* Icon and Title */}
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${solution.color} shadow-lg`}>
                            <solution.icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-3xl font-bold text-gray-900">{solution.name}</h3>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {solution.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-gray-900">Key Features:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {solution.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-3">
                                <CheckCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                          <a 
                            href="/contact" 
                            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                          >
                            Learn More
                            <ArrowRightIcon className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })()}
            </div>

            {/* Hardware Brands Carousel */}
            <section className="mt-8 sm:mt-12 lg:mt-16 bg-white relative overflow-hidden">
              <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-8 sm:mb-12">
                  <div className="inline-flex items-center gap-2 bg-red-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                    <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    Our Hardware Partners
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Trusted Brands</h3>
                </div>

                <div className="relative overflow-hidden w-full">
                  <div className="flex animate-slide-left-fast carousel-track" style={{ width: 'fit-content' }}>
                    {[
                      '/images/hardwares/HardwaresLogo/Citizen.jpg',
                      '/images/hardwares/HardwaresLogo/argox.jpg',
                      '/images/hardwares/HardwaresLogo/tvs1.png',
                      '/images/hardwares/HardwaresLogo/godex.webp',
                      '/images/hardwares/HardwaresLogo/zebra.svg',
                      '/images/hardwares/HardwaresLogo/honeywell.png',
                      '/images/hardwares/HardwaresLogo/tsc_logo.jpg',
                    ].map((src, index) => (
                      <div key={`set1-${index}`} className="flex-shrink-0 mx-6 lg:mx-8">
                        <div className="relative w-32 h-16 sm:w-40 sm:h-20 lg:w-48 lg:h-24 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white rounded-lg">
                          <OptimizedImage
                            src={src}
                            alt="Hardware Brand Logo"
                            fill
                            sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                            className="object-contain p-2 sm:p-3 lg:p-4"
                          />
                        </div>
                      </div>
                    ))}
                    {[
                      '/images/hardwares/HardwaresLogo/Citizen.jpg',
                      '/images/hardwares/HardwaresLogo/argox.jpg',
                      '/images/hardwares/HardwaresLogo/tvs1.png',
                      '/images/hardwares/HardwaresLogo/godex.webp',
                      '/images/hardwares/HardwaresLogo/zebra.svg',
                      '/images/hardwares/HardwaresLogo/honeywell.png',
                      '/images/hardwares/HardwaresLogo/tsc_logo.jpg',
                    ].map((src, index) => (
                      <div key={`set2-${index}`} className="flex-shrink-0 mx-6 lg:mx-8">
                        <div className="relative w-32 h-16 sm:w-40 sm:h-20 lg:w-48 lg:h-24 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white rounded-lg">
                          <OptimizedImage
                            src={src}
                            alt="Hardware Brand Logo"
                            fill
                            sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                            className="object-contain p-2 sm:p-3 lg:p-4"
                          />
                        </div>
                      </div>
                    ))}
                    {[
                      '/images/hardwares/HardwaresLogo/Citizen.jpg',
                      '/images/hardwares/HardwaresLogo/argox.jpg',
                      '/images/hardwares/HardwaresLogo/tvs1.png',
                      '/images/hardwares/HardwaresLogo/godex.webp',
                      '/images/hardwares/HardwaresLogo/zebra.svg',
                      '/images/hardwares/HardwaresLogo/honeywell.png',
                      '/images/hardwares/HardwaresLogo/tsc_logo.jpg',
                    ].map((src, index) => (
                      <div key={`set3-${index}`} className="flex-shrink-0 mx-6 lg:mx-8">
                        <div className="relative w-32 h-16 sm:w-40 sm:h-20 lg:w-48 lg:h-24 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white rounded-lg">
                          <OptimizedImage
                            src={src}
                            alt="Hardware Brand Logo"
                            fill
                            sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                            className="object-contain p-2 sm:p-3 lg:p-4"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/8 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-600/80 backdrop-blur-sm border border-red-500/50 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-red-100 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold text-sm">Take Action Today</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-orange-500">
                Transform
              </span>{' '}
              Your Business?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join 500+ businesses that trust our hardware solutions for their operational excellence. 
              Let's build your success story together with our proven technology and expert support.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">Hardware Units</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
              <a 
                href="/get-quotation" 
                className="group relative inline-flex items-center justify-center px-12 py-5 bg-white text-red-600 font-bold text-lg rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-white/40 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CheckCircleIcon className="w-6 h-6 mr-3 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10">Get Free Demo</span>
              </a>
              <a 
                href="/contact" 
                className="group inline-flex items-center justify-center px-12 py-5 bg-transparent border-2 border-white/60 hover:border-white text-white hover:bg-white/10 font-bold text-lg rounded-2xl transition-all duration-500 shadow-2xl backdrop-blur-sm hover:scale-105"
              >
                <ArrowRightIcon className="w-6 h-6 mr-3 group-hover:translate-x-2 transition-transform duration-300" />
                <span>Contact Sales</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-gray-300">
              <div className="flex items-center space-x-2 group cursor-default">
                <div className="relative">
                  <CheckCircleIcon className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-red-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="text-sm font-medium">No Setup Fee</span>
              </div>
              <div className="flex items-center space-x-2 group cursor-default">
                <div className="relative">
                  <ShieldCheckIcon className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-red-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="text-sm font-medium">1-Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2 group cursor-default">
                <div className="relative">
                  <StarIcon className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-red-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="text-sm font-medium">Free Training</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 