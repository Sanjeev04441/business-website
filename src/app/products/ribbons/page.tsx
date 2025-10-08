'use client'

import { useState } from 'react'
import OptimizedImage from '@/components/OptimizedImage'
import Link from 'next/link'
import Navigation from '@/components/NavigationWrapper'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import { 
  SparklesIcon, 
  BeakerIcon, 
  ShieldCheckIcon,
  CogIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  PhotoIcon
} from '@heroicons/react/24/outline'

export default function RibbonsPage() {
  const [activeTab, setActiveTab] = useState('products')
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  const ribbons = [
    {
      id: 'wax-ribbons',
      title: 'Wax Ribbons',
      description: 'Cost-effective thermal transfer ribbons ideal for general purpose printing on paper labels and tags.',
      image: '/images/products/Ribbons.jpg',
      hasImage: true,
      icon: SparklesIcon,
      article: `Wax ribbons represent the most economical solution for thermal transfer printing applications. These ribbons are formulated with a wax-based ink system that provides excellent print quality on paper substrates while maintaining cost-effectiveness for high-volume printing operations.

Composition and Manufacturing:
Wax ribbons are manufactured using a polyester film base coated with a specially formulated wax-based ink system. The wax formulation typically includes paraffin wax, microcrystalline wax, and various additives that enhance print quality, ribbon release, and storage stability. The coating process is carefully controlled to ensure uniform thickness and consistent performance.

Print Quality Characteristics:
Wax ribbons excel at producing sharp, clear text and simple graphics on paper substrates. The wax-based ink transfers completely at relatively low print head temperatures, resulting in excellent edge definition and consistent density. Print speeds can be optimized for high-volume applications without sacrificing quality.

Technical Specifications:
• Operating temperature range: 180°C - 220°C
• Print speeds up to 12 inches per second
• Excellent print density and uniformity
• Low print head wear characteristics
• Storage stability up to 2 years
• Available in widths from 25mm to 220mm

Substrate Compatibility:
Wax ribbons are specifically designed for paper substrates including coated papers, semi-gloss papers, and specialty paper materials. The wax-based ink system provides optimal adhesion to paper fibers while maintaining excellent release properties from the ribbon carrier.

Cost-Effectiveness:
The primary advantage of wax ribbons is their cost-effectiveness for high-volume printing applications. The lower material cost combined with excellent print yields makes wax ribbons the preferred choice for applications where durability requirements are moderate and cost control is important.

Application Limitations:
While excellent for paper substrates, wax ribbons have limited durability when exposed to heat, chemicals, or abrasion. The wax-based print can be scratched or smeared under harsh conditions, making these ribbons unsuitable for demanding environmental applications.

Quality Control:
Every batch of wax ribbons undergoes comprehensive testing including print density measurement, ribbon release testing, and storage stability evaluation. This ensures consistent performance across different printer models and operating conditions.`,
      features: [
        'Cost-effective solution',
        'Excellent on paper substrates',
        'Sharp text reproduction',
        'High-speed printing capability',
        'Low print head wear',
        'Wide temperature latitude'
      ],
      applications: ['Shipping Labels', 'Address Labels', 'General Purpose Tags', 'Inventory Labels', 'Office Applications'],
      href: '/products/ribbons/wax-ribbons'
    },
    {
      id: 'wax-resin-ribbons',
      title: 'Wax-Resin Ribbons',
      description: 'Balanced performance ribbons combining durability of resin with cost-effectiveness of wax for versatile applications.',
      image: '/images/products/Resin.jpg',
      hasImage: true,
      icon: BeakerIcon,
      article: `Wax-resin ribbons represent the perfect balance between performance and cost-effectiveness, combining the economic advantages of wax with the durability characteristics of resin. This hybrid formulation creates a versatile ribbon suitable for a wide range of substrates and applications.

Advanced Formulation Technology:
Wax-resin ribbons are formulated using a carefully balanced blend of wax and resin components. The wax provides cost-effectiveness and good transfer characteristics, while the resin component enhances durability, chemical resistance, and substrate adhesion. This combination creates a ribbon that performs well on both paper and synthetic substrates.

Enhanced Durability:
The resin component in wax-resin ribbons significantly improves print durability compared to pure wax ribbons. Printed images resist scratching, smearing, and moderate chemical exposure. This enhanced durability makes wax-resin ribbons suitable for applications requiring intermediate performance levels.

Substrate Versatility:
• Excellent performance on coated papers and synthetic materials
• Good adhesion to polyester and polypropylene films
• Suitable for textured and semi-rough surfaces
• Compatible with a wide range of label constructions
• Optimal performance on both matte and semi-gloss substrates

Technical Performance:
Wax-resin ribbons operate effectively across a broader temperature range than pure wax ribbons, providing flexibility in printer settings and environmental conditions. The balanced formulation ensures consistent transfer characteristics and excellent print quality across various printing speeds.

Chemical and Environmental Resistance:
The resin component provides moderate resistance to:
• Light oils and solvents
• Mild cleaning chemicals
• Temperature variations
• Humidity fluctuations
• UV exposure (limited)
• Abrasion and handling

Manufacturing Quality:
Our wax-resin ribbons are produced using precision coating equipment that ensures uniform thickness and consistent formulation distribution. Multiple quality checkpoints monitor ink adhesion, release characteristics, and overall ribbon integrity.

Cost-Performance Balance:
Wax-resin ribbons offer an optimal balance between cost and performance, making them ideal for applications where pure wax ribbons lack sufficient durability but full resin ribbons exceed performance requirements and budget constraints.`,
      features: [
        'Balanced wax-resin formulation',
        'Enhanced durability',
        'Versatile substrate compatibility',
        'Chemical resistance',
        'Cost-effective performance',
        'Wide operating temperature'
      ],
      applications: ['Product Labels', 'Compliance Labels', 'Retail Tags', 'Asset Labels', 'Moderate Duty Applications'],
      href: '/products/ribbons/wax-resin-ribbons'
    },
    {
      id: 'resin-ribbons',
      title: 'Resin Ribbons (Fully Resin)',
      description: 'Premium thermal transfer ribbons providing maximum durability and chemical resistance for demanding applications.',
      image: '/images/products/Resin.jpg',
      hasImage: true,
      icon: ShieldCheckIcon,
      article: `Fully resin ribbons represent the pinnacle of thermal transfer ribbon technology, offering maximum durability, chemical resistance, and performance for the most demanding labeling applications. These premium ribbons are formulated with 100% resin-based ink systems that provide unmatched resistance to environmental challenges.

Premium Resin Formulation:
Fully resin ribbons utilize advanced polymer chemistry to create ink systems with exceptional durability characteristics. The resin formulation typically includes high-performance polymers, specialized additives, and carefully selected pigments that work together to provide superior adhesion, chemical resistance, and environmental stability.

Maximum Durability Performance:
Resin ribbons provide the highest level of print durability available in thermal transfer technology. Printed images resist:
• Extreme temperatures (-40°C to +150°C)
• Aggressive chemicals and solvents
• UV radiation and outdoor exposure
• Abrasion and mechanical wear
• Steam sterilization processes
• Autoclave conditions

Chemical Resistance Excellence:
The fully resin formulation provides outstanding resistance to a wide range of chemicals including:
• Industrial solvents and cleaners
• Automotive fluids (oils, gasoline, brake fluid)
• Laboratory chemicals and reagents
• Cleaning and sanitizing solutions
• Salt water and marine environments
• Pharmaceutical processing chemicals

Substrate Optimization:
Resin ribbons are specifically formulated for synthetic substrates including:
• Polyester films and labels
• Polypropylene materials
• Polyimide films for extreme applications
• Vinyl and PVC substrates
• Specialty synthetic materials

Technical Specifications:
• Operating temperature: 200°C - 240°C
• Print speeds up to 10 inches per second
• Exceptional print density and resolution
• Superior edge definition and clarity
• Extended storage life (3+ years)
• Available in multiple widths and lengths

Quality Assurance:
Every batch of resin ribbons undergoes extensive testing including chemical resistance evaluation, temperature cycling, UV exposure testing, and adhesion measurement. This comprehensive testing ensures consistent performance in demanding applications.

Application-Specific Variants:
We offer specialized resin ribbon formulations for specific applications including medical device labeling, automotive component identification, chemical drum labeling, and outdoor equipment marking. Each variant is optimized for its intended use environment.`,
      features: [
        'Maximum durability',
        'Exceptional chemical resistance',
        'Temperature stability',
        'UV resistance',
        'Synthetic substrate optimized',
        'Long-term reliability'
      ],
      applications: ['Chemical Containers', 'Automotive Parts', 'Medical Devices', 'Outdoor Equipment', 'Industrial Components'],
      href: '/products/ribbons/resin-ribbons'
    },
    {
      id: 'additional-variations',
      title: 'Additional Variations',
      description: 'Specialized ribbon formulations for unique applications including colored ribbons, specialty coatings, and custom solutions.',
      image: '/images/products/Ribbons.jpg',
      hasImage: true,
      icon: CogIcon,
      article: `Our additional ribbon variations encompass a comprehensive range of specialized formulations designed to meet unique application requirements that standard ribbons cannot address. These specialty ribbons incorporate advanced technologies and custom formulations to solve specific printing challenges.

Colored Ribbon Systems:
Beyond standard black ribbons, we offer a complete spectrum of colored thermal transfer ribbons:
• Primary colors (Red, Blue, Yellow, Green)
• Metallic finishes (Gold, Silver, Bronze, Copper)
• Specialty colors (White, Orange, Purple, Brown)
• Custom color matching for brand requirements
• Fluorescent and high-visibility formulations

Near-Edge Printing Ribbons:
Specially formulated for near-edge printers, these ribbons provide:
• Optimized release characteristics for near-edge print heads
• Enhanced print quality at high speeds
• Reduced print head wear and maintenance
• Consistent performance across various substrates
• Extended ribbon life and yield

Scratch-Off Ribbons:
Innovative ribbons for security and promotional applications:
• Silver scratch-off coating for lottery tickets and game cards
• Removable coatings for promotional campaigns
• Security applications requiring concealed information
• Food service applications for scratch-off promotions
• Custom scratch-off patterns and designs

Washable Ribbon Formulations:
Specialized ribbons for textile and fabric applications:
• Laundry-safe formulations for care labels
• Industrial wash resistance for uniform identification
• Chemical resistance for healthcare textiles
• Temperature resistance for commercial laundering
• Fade resistance through multiple wash cycles

Food-Safe Ribbon Systems:
FDA-compliant ribbons for direct and indirect food contact:
• Migration-tested formulations for food packaging
• Non-toxic ink systems for food service applications
• Compliance with FDA regulations 21 CFR 175.300
• Suitable for freezer and refrigerated environments
• Resistance to food oils and moisture

Security and Anti-Counterfeiting Ribbons:
Advanced ribbons incorporating security features:
• Void-if-removed formulations
• Color-changing inks activated by heat or chemicals
• Microtext and security patterns
• Tamper-evident characteristics
• Integration with holographic elements

Custom Formulation Services:
Our technical team can develop custom ribbon formulations for unique requirements:
• Specific chemical resistance profiles
• Unusual substrate compatibility
• Extreme environmental conditions
• Specialized color requirements
• Performance optimization for specific applications

Quality and Compliance:
All specialty ribbons undergo rigorous testing and quality control procedures. Compliance testing includes FDA approval processes, chemical resistance evaluation, and performance validation under specified conditions.`,
      features: [
        'Custom color options',
        'Specialty formulations',
        'Security features',
        'Food-safe compliance',
        'Washable formulations',
        'Application-specific optimization'
      ],
      applications: ['Security Labels', 'Food Packaging', 'Textile Marking', 'Promotional Items', 'Custom Applications'],
      href: '/products/ribbons/additional-variations'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection
        title="Thermal Transfer"
        subtitle="Ribbons"
        description="Professional thermal transfer ribbons for superior print quality and durability across all applications, from cost-effective wax to premium resin formulations."
        backgroundImageSrc="/images/products/Ribbons.jpg"
        primaryButton={{
          text: "Explore Ribbons",
          href: "#ribbons-grid"
        }}
        secondaryButton={{
          text: "Get Quote",
          href: "/get-quotation",
          icon: <ArrowRightIcon className="w-5 h-5" />
        }}
        badge={{
          text: "Professional Print Solutions",
          icon: <StarIcon className="w-4 h-4 text-red-600" />
        }}
      />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-900 via-red-800 to-pink-800 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <SparklesIcon className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Thermal Transfer <span className="text-red-300">Ribbons</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Professional thermal transfer ribbons for superior print quality and durability across all applications
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'products', label: 'Products' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id="ribbons-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 scroll-mt-24">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Premium Thermal Transfer Ribbons
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our comprehensive range of thermal transfer ribbons ensures optimal print quality and durability 
                for every application. From cost-effective wax ribbons to premium resin formulations, we provide 
                the perfect solution for your specific printing requirements.
              </p>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <OptimizedImage
                src="/images/products/Satin.jpg"
                alt="Thermal Transfer Ribbons"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Professional Ribbons</h3>
                <p className="text-lg opacity-90">Engineered for superior print performance</p>
              </div>
            </div>
          </div>
        )}

        {/* Ribbons Tab */}
        {activeTab === 'products' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Ribbon Collection
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Complete range of thermal transfer ribbons with detailed specifications and performance characteristics.
              </p>
            </div>

            {/* Ribbons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ribbons.map((ribbon) => {
                const IconComponent = ribbon.icon
                return (
                  <div key={ribbon.id} id={ribbon.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 scroll-mt-24">
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      {ribbon.hasImage ? (
                        <OptimizedImage
                          src={ribbon.image}
                          alt={ribbon.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center">
                          <PhotoIcon className="w-16 h-16 text-gray-400" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      {!ribbon.hasImage && (
                        <div className="absolute bottom-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                          Image Coming Soon
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                        {ribbon.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {ribbon.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <div className="space-y-2">
                          {ribbon.features.slice(0, 4).map((feature, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-600">
                              <CheckCircleIcon className="w-4 h-4 mr-3 text-red-500" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applications */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Applications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {ribbon.applications.map((app, index) => (
                            <span
                              key={index}
                              className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Ribbons?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Superior quality, consistent performance, and comprehensive technical support for all your printing needs.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Need Ribbon Consultation?
          </h3>
          <p className="text-xl text-red-100 mb-8">
            Our ribbon specialists can help you select the optimal thermal transfer ribbon for your specific application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transform transition-all duration-300 hover:scale-105"
            >
              Contact Specialists
            </Link>
            <Link
              href="/get-quotation"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transform transition-all duration-300 hover:scale-105"
            >
              Get Ribbon Quote
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
