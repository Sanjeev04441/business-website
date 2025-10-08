'use client'

import { useState } from 'react'
import OptimizedImage from '@/components/OptimizedImage'
import Link from 'next/link'
import Navigation from '@/components/NavigationWrapper'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import { 
  TagIcon, 
  QrCodeIcon, 
  DocumentTextIcon, 
  ShieldCheckIcon, 
  CpuChipIcon,
  PrinterIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  PhotoIcon
} from '@heroicons/react/24/outline'

export default function StickerLabelsPage() {
  const [activeTab, setActiveTab] = useState('products')
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  const products = [
    {
      id: 'product-labels',
      title: 'Product Labels',
      description: 'High-quality adhesive labels perfect for product identification, branding, and information display across all industries.',
      image: '/images/products/Products1.jpg',
      hasImage: true,
      icon: TagIcon,
      article: `Product labels are the cornerstone of modern packaging and branding strategies. These versatile adhesive labels serve multiple purposes, from basic product identification to sophisticated marketing tools that enhance brand recognition and consumer engagement.

Our product labels are manufactured using premium materials that ensure durability, clarity, and professional appearance. Whether you need labels for food packaging, cosmetics, electronics, or industrial products, our comprehensive range meets the highest quality standards while offering exceptional value.

Key Features:
• Waterproof and chemical-resistant materials for harsh environments
• Custom shapes, sizes, and die-cutting options for unique applications
• Vibrant, fade-resistant color printing using advanced digital and flexographic technologies
• Strong, permanent adhesive backing that bonds securely to various surfaces
• FDA-approved materials available for food and pharmaceutical applications
• Temperature-resistant formulations for extreme conditions (-40°C to +150°C)

Applications:
Product labels find extensive use across numerous industries. In the FMCG sector, they provide essential product information, nutritional facts, and branding elements. Cosmetic companies rely on our labels for elegant packaging that reflects their brand identity. Electronics manufacturers use our durable labels for model numbers, specifications, and safety warnings. The pharmaceutical industry depends on our precision labels for dosage information, expiry dates, and regulatory compliance.

Our advanced printing capabilities allow for variable data printing, enabling unique serial numbers, batch codes, and personalized information on each label. This makes our product labels ideal for inventory management, traceability, and anti-counterfeiting measures.`,
      features: [
        'Waterproof and durable materials',
        'Custom shapes and sizes',
        'Vibrant color printing',
        'Strong adhesive backing',
        'FDA approved materials available',
        'Temperature resistant options'
      ],
      applications: ['FMCG Products', 'Cosmetics', 'Food & Beverages', 'Electronics', 'Pharmaceuticals'],
      href: '/products/sticker-labels/product-labels'
    },
    {
      id: 'barcode-labels',
      title: 'Barcode Labels',
      description: 'Precision-printed barcode labels ensuring accurate scanning and inventory management for seamless business operations.',
      image: '/images/products/BarcodeL1.jpeg',
      hasImage: true,
      icon: QrCodeIcon,
      article: `Barcode labels are essential components of modern inventory management and point-of-sale systems. These precision-engineered labels contain encoded information that can be quickly and accurately read by barcode scanners, enabling efficient tracking, pricing, and inventory control across various industries.

Our barcode labels are produced using state-of-the-art printing technology that ensures crisp, clear lines and optimal contrast for reliable scanning. We support all major barcode formats including UPC, EAN, Code 128, Code 39, QR codes, and Data Matrix codes, making our labels compatible with virtually any scanning system.

Technical Excellence:
• High-resolution printing (up to 600 DPI) for precise barcode reproduction
• Multiple barcode formats supported (1D and 2D codes)
• Scratch and abrasion-resistant protective coatings
• Variable data printing capabilities for unique product codes
• Thermal transfer and direct thermal printing compatibility
• Quick and reliable scanning from multiple angles

Quality Assurance:
Every barcode label undergoes rigorous quality testing to ensure 100% scanability. Our verification systems check for proper bar width ratios, quiet zones, and overall print quality. This attention to detail guarantees that your barcode labels will perform flawlessly in high-volume scanning environments.

Industry Applications:
Retail environments benefit from our barcode labels for product pricing and inventory tracking. Warehouses and distribution centers use them for efficient logistics management. Manufacturing facilities rely on our labels for work-in-progress tracking and quality control. Healthcare institutions use our barcode labels for patient identification and medication management, where accuracy is literally a matter of life and death.`,
      features: [
        'High-resolution printing',
        'Multiple barcode formats',
        'Scratch-resistant coating',
        'Variable data printing',
        'Thermal transfer compatible',
        'Quick scanning capability'
      ],
      applications: ['Retail', 'Warehousing', 'Manufacturing', 'Healthcare', 'Logistics'],
      href: '/products/sticker-labels/barcode-label'
    },
    {
      id: 'billing-rolls',
      title: 'Billing Rolls',
      description: 'Premium thermal paper rolls for POS systems, ensuring clear, long-lasting receipts for all your billing needs.',
      image: '/images/products/BillingRolls.jpg',
      hasImage: true,
      icon: DocumentTextIcon,
      article: `Billing rolls, also known as thermal paper rolls, are specialized paper products designed for point-of-sale (POS) systems, cash registers, and receipt printers. These rolls utilize thermal printing technology to produce clear, professional receipts without the need for ink or ribbons.

Our premium billing rolls are manufactured using high-quality thermal paper that ensures consistent print quality and longevity. The thermal coating reacts to heat from the printer head, creating sharp, legible text and graphics that resist fading under normal storage conditions.

Superior Quality Features:
• Premium thermal-sensitive coating for consistent print quality
• Fade-resistant formulation for long-term receipt storage
• Smooth surface finish prevents printer head wear
• Eco-friendly options available with BPA-free coatings
• Multiple width sizes to fit all standard POS systems
• High-speed printing support for busy retail environments

Technical Specifications:
Our billing rolls are available in various widths (57mm, 80mm, 112mm) and lengths to suit different printer models and usage requirements. The paper weight and caliper are optimized for smooth feeding and jam-free operation. Special formulations are available for applications requiring extended archival life or resistance to environmental factors.

Business Benefits:
Using our premium billing rolls ensures professional-looking receipts that enhance your business image. The consistent print quality reduces customer complaints and improves transaction efficiency. Our rolls are designed to minimize printer maintenance requirements, reducing downtime and operating costs.

Environmental Responsibility:
We offer eco-friendly billing rolls made from sustainably sourced paper with recyclable cores. Our BPA-free thermal coatings provide the same excellent print quality while being safer for both users and the environment.`,
      features: [
        'Thermal sensitive coating',
        'Fade-resistant printing',
        'Standard POS compatibility',
        'Eco-friendly options',
        'Multiple width sizes',
        'High-speed printing support'
      ],
      applications: ['Retail Stores', 'Restaurants', 'Gas Stations', 'Supermarkets', 'Banking'],
      href: '/products/sticker-labels/billing-rolls'
    },
    {
      id: 'hologram',
      title: 'Hologram Labels',
      description: 'Advanced security hologram labels providing authentication and anti-counterfeiting protection for valuable products.',
      image: '/images/products/Hologram.jpg',
      hasImage: true,
      icon: ShieldCheckIcon,
      article: `Hologram labels represent the pinnacle of security labeling technology, offering sophisticated anti-counterfeiting protection through advanced optical security features. These labels combine aesthetic appeal with robust security elements, making them ideal for protecting high-value products and documents from forgery and tampering.

Our hologram labels are produced using cutting-edge holographic technology that creates unique optical effects impossible to reproduce with conventional printing methods. Each label incorporates multiple security layers, making counterfeiting extremely difficult and expensive for potential fraudsters.

Advanced Security Features:
• Multi-dimensional holographic images with depth and movement effects
• Tamper-evident adhesive that shows clear evidence of removal attempts
• Custom holographic patterns unique to your brand or application
• Sequential numbering and variable data for individual authentication
• Void-if-removed technology that leaves permanent evidence of tampering
• UV-reactive and color-changing elements for additional verification

Manufacturing Excellence:
Our hologram labels are produced in secure facilities using proprietary techniques developed over years of research and development. The holographic foils are created using precision-engineered master holograms that capture intricate optical effects. These masters are then used to emboss the holographic patterns onto specialized substrates using high-pressure and temperature processes.

Authentication Methods:
Each hologram label can incorporate multiple authentication methods, from simple visual verification to sophisticated machine-readable features. Overt features are easily visible to consumers and enforcement personnel, while covert features require special equipment for verification. This multi-level approach provides comprehensive protection against various types of counterfeiting attempts.

Industry Applications:
Luxury goods manufacturers use our hologram labels to protect their brand integrity and prevent counterfeiting. Pharmaceutical companies rely on them for drug authentication and patient safety. Electronics manufacturers use hologram labels to verify genuine components and accessories. Government agencies and institutions use them for document security and identification purposes.`,
      features: [
        'Tamper-evident design',
        'Multi-layer security',
        'Custom holographic patterns',
        'Unique serial numbering',
        'Void-if-removed options',
        'UV-reactive elements'
      ],
      applications: ['Luxury Goods', 'Pharmaceuticals', 'Electronics', 'Automotive Parts', 'Certificates'],
      href: '/products/sticker-labels/hologram'
    },
    {
      id: 'rfids',
      title: 'RFID Labels',
      description: 'Smart RFID-enabled labels for advanced tracking, inventory management, and automated data collection systems.',
      image: '/images/products/RFID1.jpeg',
      hasImage: true,
      icon: CpuChipIcon,
      article: `RFID (Radio Frequency Identification) labels represent the future of automatic identification and data capture technology. These intelligent labels combine traditional labeling with embedded RFID chips and antennas, enabling wireless communication and data exchange without direct line-of-sight scanning.

Our RFID labels integrate seamlessly into existing workflows while providing enhanced functionality for tracking, inventory management, and process automation. Each label contains a microchip that stores unique identification data and an antenna that enables wireless communication with RFID readers.

Technology Advantages:
• Long-range readability (up to 10 meters depending on frequency)
• Simultaneous reading of multiple tags for bulk processing
• Programmable memory for storing additional product information
• Durable encapsulation protecting electronics from environmental factors
• Anti-collision technology preventing interference between multiple tags
• Integration-ready design compatible with existing RFID systems

Frequency Options:
We offer RFID labels in various frequency ranges to suit different applications. Low Frequency (LF) labels are ideal for animal tracking and access control. High Frequency (HF/NFC) labels work well for payment systems and smart packaging. Ultra High Frequency (UHF) labels provide the longest read range and are perfect for supply chain and inventory management applications.

Smart Features:
Our RFID labels can be programmed with various types of data including product codes, manufacturing dates, batch numbers, and custom information. Advanced labels feature encryption capabilities for secure data transmission and tamper detection for security-sensitive applications.

Implementation Benefits:
RFID labels dramatically improve operational efficiency by enabling automated data collection and real-time inventory tracking. They reduce human error, speed up processes, and provide valuable data analytics for business optimization. The technology enables new applications like smart shelving, automated checkout, and enhanced customer experiences.

Future-Ready Technology:
As IoT (Internet of Things) adoption grows, our RFID labels serve as the foundation for connected product ecosystems. They enable smart packaging that can communicate product information, track environmental conditions, and even interact with consumers through mobile applications.`,
      features: [
        'Long-range readability',
        'Programmable memory',
        'Multiple frequency options',
        'Durable encapsulation',
        'Anti-collision technology',
        'Integration-ready design'
      ],
      applications: ['Supply Chain', 'Asset Tracking', 'Access Control', 'Inventory Management', 'Healthcare'],
      href: '/products/sticker-labels/rfids'
    },
    {
      id: 'printing-tech',
      title: 'Printing Technologies',
      description: 'Cutting-edge printing solutions offering superior quality, durability, and precision for all labeling requirements.',
      image: '/images/products/Products2.jpg',
      hasImage: true,
      icon: PrinterIcon,
      article: `Our printing technologies represent the culmination of decades of innovation in label manufacturing, combining traditional craftsmanship with cutting-edge digital capabilities. We employ multiple printing methods to ensure optimal results for every application, from short-run custom labels to high-volume production runs.

Digital Printing Excellence:
Our state-of-the-art digital printing systems deliver exceptional quality with remarkable flexibility. Using advanced inkjet technology, we can produce full-color labels with photographic quality, variable data capabilities, and quick turnaround times. This technology is perfect for short runs, prototypes, and personalized labeling applications.

Flexographic Printing Mastery:
For high-volume production, our flexographic printing presses provide consistent quality and cost-effective solutions. This traditional printing method excels at solid colors, simple graphics, and large quantity runs. Our modern flexographic equipment incorporates computer-controlled registration and color management systems for precise, repeatable results.

Screen Printing Precision:
When applications demand exceptional durability and opacity, our screen printing capabilities deliver superior results. This method is ideal for labels requiring thick ink deposits, special effects, or printing on challenging substrates. Screen printing excels at producing vibrant colors that maintain their intensity under harsh conditions.

Advanced Ink Systems:
• UV-curable inks for instant curing and exceptional durability
• Water-based inks for eco-friendly applications
• Solvent-based inks for extreme adhesion and chemical resistance
• Specialty inks including metallic, fluorescent, and thermochromic options
• Food-safe inks for direct food contact applications

Color Management Excellence:
Our comprehensive color management system ensures consistent, accurate colors across all printing methods. We use spectrophotometric color measurement and ICC color profiles to maintain brand color integrity. Our prepress department works closely with clients to optimize artwork for the selected printing method.

Quality Control Systems:
Every printed label undergoes rigorous quality inspection using automated vision systems and manual verification. We monitor print density, registration, color accuracy, and overall appearance to ensure every label meets our exacting standards.`,
      features: [
        'Digital printing excellence',
        'Flexographic printing',
        'Screen printing options',
        'UV-curable inks',
        'Variable data capabilities',
        'Color management systems'
      ],
      applications: ['Custom Labels', 'Short Runs', 'Variable Data', 'Specialty Materials', 'Prototyping'],
      href: '/products/sticker-labels/printing-technologies'
    }
  ]

  const benefits = [
    {
      title: 'Superior Quality',
      description: 'Premium materials and advanced printing ensure long-lasting, professional labels',
      icon: StarIcon
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored designs and specifications to meet your unique requirements',
      icon: TagIcon
    },
    {
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality',
      icon: ArrowRightIcon
    },
    {
      title: 'Industry Compliance',
      description: 'All products meet industry standards and regulatory requirements',
      icon: CheckCircleIcon
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection
        title="Sticker"
        subtitle="Labels"
        description="Comprehensive range of high-quality sticker labels for every application and industry, from basic product identification to advanced security features."
        backgroundImageSrc="/images/products/Products1.jpg"
        primaryButton={{
          text: "Explore Labels",
          href: "#labels-grid"
        }}
        secondaryButton={{
          text: "Get Quote",
          href: "/get-quotation",
          icon: <ArrowRightIcon className="w-5 h-5" />
        }}
        badge={{
          text: "Professional Label Solutions",
          icon: <StarIcon className="w-4 h-4 text-red-600" />
        }}
      />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-purple-800 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <TagIcon className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Sticker <span className="text-blue-300">Labels</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive range of high-quality sticker labels for every application and industry
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
      <div id="labels-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 scroll-mt-24">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Sticker Label Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                From basic product identification to advanced security features, our sticker labels 
                provide reliable, professional solutions for businesses across all industries. 
                Each label is crafted with precision using premium materials and cutting-edge technology.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '10+', label: 'Years Experience' },
                { number: '500+', label: 'Happy Clients' },
                { number: '50+', label: 'Label Types' },
                { number: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Featured Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <OptimizedImage
                src="/images/products/Products1.jpg"
                alt="Sticker Labels Collection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Premium Quality Labels</h3>
                <p className="text-lg opacity-90">Designed for durability and performance</p>
              </div>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Sticker Label Products
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive range of high-quality sticker labels with detailed specifications and applications.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => {
                const IconComponent = product.icon
                return (
                  <div key={product.id} id={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 scroll-mt-24"
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      {product.hasImage ? (
                        <OptimizedImage
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                          <PhotoIcon className="w-16 h-16 text-gray-400" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      {!product.hasImage && (
                        <div className="absolute bottom-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                          Image Coming Soon
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <div className="space-y-1">
                          {product.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center text-xs text-gray-600">
                              <CheckCircleIcon className="w-3 h-3 mr-2 text-green-500" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applications */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Applications:</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.applications.slice(0, 3).map((app, index) => (
                            <span
                              key={index}
                              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
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
                Why Choose Our Sticker Labels?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our commitment to quality, innovation, and customer satisfaction sets us apart in the labeling industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 rounded-lg p-3">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Process Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                Our Quality Process
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: '01', title: 'Design', description: 'Custom design consultation and approval' },
                  { step: '02', title: 'Material', description: 'Premium material selection and testing' },
                  { step: '03', title: 'Production', description: 'State-of-the-art printing and finishing' },
                  { step: '04', title: 'Quality', description: 'Rigorous quality control and delivery' }
                ].map((process, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {process.step}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{process.title}</h4>
                    <p className="text-gray-600 text-sm">{process.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Contact our experts today to discuss your sticker label requirements and get a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transform transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              href="/get-quotation"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transform transition-all duration-300 hover:scale-105"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
