'use client'

import { useState } from 'react'
import OptimizedImage from '@/components/OptimizedImage'
import Link from 'next/link'
import Navigation from '@/components/NavigationWrapper'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import { 
  CubeIcon, 
  SparklesIcon, 
  SwatchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  PhotoIcon
} from '@heroicons/react/24/outline'

export default function MaterialsPage() {
  const [activeTab, setActiveTab] = useState('products')
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  const materials = [
    {
      id: 'chrome-paper',
      title: 'Chrome Paper',
      description: 'Premium quality chrome paper labels offering excellent printability and professional appearance for various applications.',
      image: '/images/products/Chrome.jpg',
      hasImage: true,
      icon: SwatchIcon,
      article: `Chrome paper represents one of the most versatile and widely-used label materials in the printing industry. This high-quality substrate combines excellent printability with professional appearance, making it the preferred choice for applications requiring crisp text, vibrant colors, and reliable performance.

Manufacturing Process:
Chrome paper is produced through a specialized coating process where a smooth, white coating is applied to a base paper substrate. This coating creates an exceptionally smooth surface that provides optimal ink reception and color reproduction.

Superior Print Quality:
The smooth, uniform surface of chrome paper ensures exceptional print quality across all printing methods. Whether using digital, flexographic, or offset printing, chrome paper delivers sharp text, fine line reproduction, and excellent color saturation.

Key Characteristics:
• Smooth, uniform surface for exceptional print quality
• High opacity preventing show-through from adhesive or liner
• Excellent dimensional stability preventing curl and distortion
• Superior ink absorption for vibrant color reproduction
• Consistent caliper and formation for reliable converting
• Available in various weights and finishes to suit specific applications

Application Versatility:
Chrome paper excels in applications requiring professional appearance and excellent printability. It's widely used for product labels, shipping labels, address labels, and general-purpose identification labels.`,
      features: [
        'Smooth uniform surface',
        'High opacity coating',
        'Excellent printability',
        'Dimensional stability',
        'Multiple weight options',
        'Eco-friendly formulations'
      ],
      applications: ['Product Labels', 'Shipping Labels', 'Address Labels', 'General Purpose', 'Office Applications'],
      href: '/products/materials/chrome-paper'
    },
    {
      id: 'polyester-paper',
      title: 'Polyester Paper',
      description: 'Durable polyester-based label material providing exceptional strength, chemical resistance, and longevity for demanding applications.',
      image: '/images/products/Polyster.jpg',
      hasImage: true,
      icon: CubeIcon,
      article: `Polyester paper, also known as synthetic paper, represents the pinnacle of label durability and performance. This advanced material combines the printability of paper with the strength and chemical resistance of plastic films.

Advanced Material Technology:
Polyester paper is manufactured using biaxially oriented polyester film as the base substrate, which is then treated with specialized coatings to enhance printability and adhesive anchorage.

Exceptional Durability:
Unlike traditional paper materials, polyester paper maintains its integrity under extreme conditions. It resists tearing, puncturing, and deformation, making it ideal for applications where labels must withstand rough handling.

Chemical and Environmental Resistance:
• Outstanding resistance to oils, solvents, and cleaning chemicals
• Waterproof and moisture-resistant properties
• UV resistance preventing fading and degradation
• Excellent chemical inertness for food contact applications
• Resistance to abrasion and scuffing
• Maintains properties under temperature cycling

Applications in Harsh Environments:
Polyester paper excels in industrial applications where traditional paper labels would fail. Chemical drums, automotive components, outdoor equipment, and marine applications all benefit from the exceptional durability.`,
      features: [
        'Exceptional tear strength',
        'Chemical resistance',
        'Temperature stability',
        'Waterproof properties',
        'UV resistance',
        'Food contact approved'
      ],
      applications: ['Industrial Labels', 'Chemical Containers', 'Outdoor Equipment', 'Automotive', 'Marine Applications'],
      href: '/products/materials/polyester-paper'
    },
    {
      id: 'taffeta',
      title: 'Taffeta',
      description: 'Elegant taffeta fabric labels providing a premium look and feel for high-end fashion and luxury product applications.',
      image: '/images/products/Taffeta.jpg',
      hasImage: true,
      icon: SparklesIcon,
      article: `Taffeta represents the epitome of luxury in label materials, offering an elegant solution for high-end fashion, luxury goods, and premium product applications. This sophisticated fabric material combines aesthetic appeal with functional performance.

Fabric Construction Excellence:
Taffeta is woven from high-quality polyester or silk fibers using a plain weave construction that creates a smooth, lustrous surface with subtle texture. The tight weave provides dimensional stability while maintaining the elegant drape.

Aesthetic Properties:
The inherent beauty of taffeta lies in its subtle sheen and smooth texture that conveys quality and sophistication. The material accepts printing beautifully, allowing for crisp text, fine graphics, and rich color reproduction.

Premium Brand Enhancement:
• Luxurious feel and appearance that elevates product perception
• Subtle sheen that catches light beautifully
• Smooth texture that feels premium to the touch
• Excellent color reproduction for brand-critical applications
• Dimensional stability that maintains appearance over time
• Compatibility with various printing and finishing techniques

Application Versatility:
While primarily used in fashion and luxury goods, taffeta labels find applications in cosmetics, jewelry, high-end electronics, and premium food products.`,
      features: [
        'Luxurious appearance',
        'Smooth lustrous surface',
        'Excellent printability',
        'Dimensional stability',
        'Premium brand enhancement',
        'Multiple finishing options'
      ],
      applications: ['Fashion Labels', 'Luxury Goods', 'Cosmetics', 'Jewelry', 'Premium Products'],
      href: '/products/materials/taffeta'
    },
    {
      id: 'satin',
      title: 'Satin',
      description: 'Luxurious satin fabric labels offering superior elegance and premium feel for exclusive fashion and high-end product branding.',
      image: '/images/products/Satin.jpg',
      hasImage: true,
      icon: StarIcon,
      article: `Satin labels represent the ultimate in luxury labeling materials, offering unparalleled elegance and sophistication for the most exclusive fashion brands and high-end products.

Distinctive Weave Construction:
Satin is characterized by its unique weave structure where the warp threads float over multiple weft threads, creating a smooth surface with exceptional luster.

Unmatched Aesthetic Appeal:
The hallmark of satin is its brilliant luster and smooth, almost mirror-like surface that reflects light beautifully. This creates a dynamic visual effect that changes with viewing angle and lighting conditions.

Premium Material Properties:
• Brilliant lustrous finish that catches and reflects light
• Exceptionally smooth surface texture
• Rich, deep color reproduction capabilities
• Excellent drape and flexibility
• Superior dimensional stability
• Resistance to snagging and pulling

Luxury Brand Applications:
Satin labels are the preferred choice for luxury fashion houses, high-end cosmetics, premium jewelry, and exclusive accessories. The material's inherent elegance aligns perfectly with luxury brand positioning.

Brand Enhancement Value:
The psychological impact of satin labels extends beyond mere identification – they become part of the product experience. The tactile sensation and visual appeal contribute to customer satisfaction and brand loyalty.`,
      features: [
        'Brilliant lustrous finish',
        'Exceptional smoothness',
        'Rich color reproduction',
        'Premium brand positioning',
        'Excellent flexibility',
        'Luxury market appeal'
      ],
      applications: ['Luxury Fashion', 'High-End Cosmetics', 'Premium Jewelry', 'Exclusive Accessories', 'Designer Products'],
      href: '/products/materials/satin'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection
        title="Premium"
        subtitle="Materials"
        description="Discover our extensive range of high-quality label materials, from versatile chrome paper to luxurious fabric options, designed to meet every application need."
        backgroundImageSrc="/images/products/Polyster.jpg"
        primaryButton={{
          text: "Explore Materials",
          href: "#materials-grid"
        }}
        secondaryButton={{
          text: "Get Quote",
          href: "/get-quotation",
          icon: <ArrowRightIcon className="w-5 h-5" />
        }}
        badge={{
          text: "Premium Quality Materials",
          icon: <StarIcon className="w-4 h-4 text-red-600" />
        }}
      />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 via-green-800 to-teal-800 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <CubeIcon className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Label <span className="text-green-300">Materials</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Premium quality materials for all your labeling needs, from basic applications to luxury branding
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
      <div id="materials-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 scroll-mt-24">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Premium Label Materials
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our comprehensive range of label materials covers every application from basic identification 
                to luxury branding. Each material is carefully selected and tested to ensure optimal performance.
              </p>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <OptimizedImage
                src="/images/products/Products2.jpg"
                alt="Label Materials Collection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Quality Materials</h3>
                <p className="text-lg opacity-90">Engineered for performance and reliability</p>
              </div>
            </div>
          </div>
        )}

        {/* Materials Tab */}
        {activeTab === 'products' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Material Collection
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive range of premium label materials with detailed specifications and applications.
              </p>
            </div>

            {/* Materials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {materials.map((material) => {
                const IconComponent = material.icon
                return (
                  <div key={material.id} id={material.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 scroll-mt-24">
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      {material.hasImage ? (
                        <OptimizedImage
                          src={material.image}
                          alt={material.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center">
                          <PhotoIcon className="w-16 h-16 text-gray-400" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      {!material.hasImage && (
                        <div className="absolute bottom-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                          Image Coming Soon
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                        {material.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {material.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <div className="space-y-2">
                          {material.features.slice(0, 4).map((feature, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-600">
                              <CheckCircleIcon className="w-4 h-4 mr-3 text-green-500" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applications */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Applications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {material.applications.map((app, index) => (
                            <span
                              key={index}
                              className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full"
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
                Why Choose Our Materials?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our commitment to quality and innovation ensures you get the best materials for your specific needs.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Need Material Consultation?
          </h3>
          <p className="text-xl text-green-100 mb-8">
            Our material experts can help you select the perfect substrate for your specific application requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transform transition-all duration-300 hover:scale-105"
            >
              Contact Experts
            </Link>
            <Link
              href="/get-quotation"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transform transition-all duration-300 hover:scale-105"
            >
              Get Material Quote
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

