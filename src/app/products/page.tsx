"use client";

import React, { useState, useEffect } from "react";
import OptimizedImage from "@/components/OptimizedImage";
import Link from "next/link";
import Navigation from "@/components/NavigationWrapper";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import {
  TagIcon,
  CubeIcon,
  SparklesIcon,
  BeakerIcon,
  ShieldCheckIcon,
  CogIcon,
  StarIcon,
  CheckIcon,
  ArrowRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export default function ProductsPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Sticker Labels Products
  const stickerLabelsProducts = [
    {
      id: "product-labels",
      title: "Product Labels",
      description:
        "High-quality product identification labels designed for retail, manufacturing, and commercial applications with superior adhesion and print clarity.",
      image: "/images/products/product-labels.jpg",
      hasImage: false,
      icon: TagIcon,
      features: [
        "Superior adhesion technology",
        "Fade-resistant printing",
        "Multiple size options",
        "Custom design capabilities",
        "Industry compliance standards",
        "Weather-resistant materials",
      ],
      applications: [
        "Retail Products",
        "Manufacturing",
        "Food & Beverage",
        "Electronics",
        "Automotive",
        "Healthcare",
      ],
    },
    {
      id: "barcode-labels",
      title: "Barcode Labels",
      description:
        "Precision barcode labels ensuring accurate scanning and inventory management with high-contrast printing and durable materials.",
      image: "/images/products/barcode-labels.jpg",
      hasImage: false,
      icon: CubeIcon,
      features: [
        "High-contrast printing",
        "Scannable from multiple angles",
        "Smudge-resistant coating",
        "Various barcode formats",
        "Thermal transfer compatible",
        "Long-lasting adhesion",
      ],
      applications: [
        "Inventory Management",
        "Retail POS",
        "Warehouse Operations",
        "Asset Tracking",
        "Library Systems",
      ],
    },
    {
      id: "billing-rolls",
      title: "Billing Rolls",
      description:
        "Premium thermal paper rolls for point-of-sale systems, ensuring clear receipt printing and reliable performance in high-volume environments.",
      image: "/images/products/billing-rolls.jpg",
      hasImage: false,
      icon: SparklesIcon,
      features: [
        "High-quality thermal coating",
        "Jam-free operation",
        "Clear print reproduction",
        "Various width options",
        "Long storage life",
        "BPA-free options available",
      ],
      applications: [
        "Point of Sale",
        "ATM Machines",
        "Credit Card Terminals",
        "Cash Registers",
        "Mobile Printers",
      ],
    },
    {
      id: "hologram-labels",
      title: "Hologram Labels",
      description:
        "Advanced security hologram labels providing tamper-evident protection and brand authentication with cutting-edge holographic technology.",
      image: "/images/products/hologram-labels.jpg",
      hasImage: false,
      icon: ShieldCheckIcon,
      features: [
        "Tamper-evident technology",
        "Custom holographic designs",
        "Brand authentication",
        "Counterfeit protection",
        "Multiple security levels",
        "Regulatory compliance",
      ],
      applications: [
        "Brand Protection",
        "Document Security",
        "Product Authentication",
        "Anti-Counterfeiting",
        "Warranty Labels",
      ],
    },
    {
      id: "rfid-labels",
      title: "RFID Labels",
      description:
        "Smart RFID-enabled labels combining traditional labeling with advanced tracking technology for modern inventory and asset management.",
      image: "/images/products/rfid-labels.jpg",
      hasImage: false,
      icon: CogIcon,
      features: [
        "Integrated RFID technology",
        "Long-range readability",
        "Durable construction",
        "Custom programming",
        "Multiple frequency options",
        "Printable surface",
      ],
      applications: [
        "Asset Tracking",
        "Inventory Management",
        "Supply Chain",
        "Access Control",
        "Smart Packaging",
      ],
    },
    {
      id: "printing-technologies",
      title: "Printing Technologies",
      description:
        "Comprehensive printing solutions including thermal transfer, direct thermal, and digital printing technologies for all labeling needs.",
      image: "/images/products/printing-tech.jpg",
      hasImage: false,
      icon: BeakerIcon,
      features: [
        "Multiple printing methods",
        "High-resolution output",
        "Color printing capabilities",
        "Variable data printing",
        "Industrial-grade durability",
        "Custom solutions available",
      ],
      applications: [
        "Industrial Printing",
        "Commercial Labels",
        "Variable Data",
        "Color Applications",
        "Specialty Materials",
      ],
    },
  ];

  // Section 1: Sticker & Labels
  const stickerItems = [
    {
      id: "product-labels",
      name: "PRODUCT LABELS",
      fullName: "General Product Labels",
      icon: TagIcon,
      image: "/images/products/Products1.jpg",
      hasImage: true,
      description:
        "High-quality product identification labels designed for retail, manufacturing, and commercial applications with superior adhesion and print clarity.",
      article:
        "Premium adhesive labels for versatile product identification and branding applications across industries.",
      href: "/products/sticker-labels#product-labels",
    },
    {
      id: "barcode-labels",
      name: "BARCODE LABELS",
      fullName: "Barcode & Identification Labels",
      icon: CubeIcon,
      image: "/images/products/BarcodeL1.jpeg",
      hasImage: true,
      description:
        "Precision barcode labels ensuring accurate scanning and inventory management with high-contrast printing.",
      article:
        "High-contrast, scannable labels for reliable inventory and POS operations.",
      href: "/products/sticker-labels#barcode-labels",
    },
    {
      id: "billing-rolls",
      name: "BILLING ROLLS",
      fullName: "Thermal Paper Rolls",
      icon: SparklesIcon,
      image: "/images/products/BillingRolls.jpg",
      hasImage: true,
      description:
        "Premium thermal paper rolls for point-of-sale systems ensuring clear receipt printing.",
      article:
        "Thermal paper rolls with consistent print quality and jam-free operation.",
      href: "/products/sticker-labels#billing-rolls",
    },
    {
      id: "hologram-labels",
      name: "HOLOGRAM LABELS",
      fullName: "Security & Authentication Labels",
      icon: ShieldCheckIcon,
      image: "/images/products/Hologram.jpg",
      hasImage: true,
      description:
        "Advanced security hologram labels providing tamper-evident protection and brand authentication.",
      article:
        "Tamper-evident holographic labels for brand protection and authentication.",
      href: "/products/sticker-labels#hologram",
    },
    {
      id: "rfid-labels",
      name: "RFID LABELS",
      fullName: "Radio Frequency Identification Labels",
      icon: CogIcon,
      image: "/images/products/RFID1.jpeg",
      hasImage: true,
      description:
        "Smart RFID-enabled labels combining traditional labeling with advanced tracking technology.",
      article: "RFID-enabled labels for automated tracking and data capture.",
      href: "/products/sticker-labels#rfids",
    },
    {
      id: "printing-technologies",
      name: "PRINTING TECHNOLOGIES",
      fullName: "Printing Methods & Capabilities",
      icon: BeakerIcon,
      image: "/images/products/Products2.jpg",
      hasImage: true,
      description:
        "Comprehensive printing solutions including thermal transfer, direct thermal, and digital printing technologies for all labeling needs.",
      article:
        "Our advanced printing technologies encompass multiple methods designed to deliver optimal quality and performance for diverse labeling applications. We employ cutting-edge equipment and techniques to ensure consistent, high-quality results across all production volumes.",
      href: "/products/sticker-labels#printing-tech",
    },
    {
      id: "flatbed-printing",
      name: "FLATBED PRINTING",
      fullName: "Precision Flatbed Technology",
      icon: BeakerIcon,
      image: "/images/products/Flatbed.jpg",
      hasImage: true,
      description:
        "Advanced flatbed printing technology delivering exceptional precision and quality for large format and specialty label applications.",
      article:
        "Flatbed printing represents the pinnacle of precision in digital printing technology, offering unmatched accuracy and versatility for large format applications. Our state-of-the-art flatbed printers utilize advanced UV-curable ink systems that provide exceptional adhesion to a wide range of substrates including rigid materials, textiles, and specialty surfaces. This technology eliminates the need for traditional printing plates, enabling cost-effective short runs and rapid prototyping while maintaining consistent quality across production volumes. The flatbed design allows for direct printing on thick or irregularly shaped materials that conventional printing methods cannot handle, making it ideal for industrial labels, signage, and specialty applications requiring precise registration and vibrant color reproduction.",
      href: "/products/sticker-labels#flatbed-printing",
    },
    {
      id: "flexo-printing",
      name: "FLEXO PRINTING",
      fullName: "Flexographic Excellence",
      icon: BeakerIcon,
      image: "/images/products/Flexo.jpg",
      hasImage: true,
      description:
        "High-speed flexographic printing delivering consistent quality and cost-effectiveness for high-volume label production requirements.",
      article:
        "Flexographic printing stands as the backbone of high-volume label production, combining speed, efficiency, and quality in a single printing process. Our modern flexographic presses feature computer-controlled registration systems and advanced color management capabilities that ensure consistent, repeatable results across long production runs. The flexible printing plates used in flexography allow for excellent ink transfer to various substrates, from paper and film to specialty materials, while maintaining sharp detail and vibrant colors. This printing method excels at producing solid colors, simple graphics, and text with exceptional clarity, making it the preferred choice for product labels, packaging, and industrial applications requiring durability and cost-effectiveness. Our flexographic capabilities include inline finishing options such as die-cutting, laminating, and slitting, providing complete label solutions in a single pass.",
      href: "/products/sticker-labels#flexo-printing",
    },
  ];

  // Section 2: Materials
  const materialItems = [
    {
      id: "chrome-paper",
      name: "CHROME PAPER",
      fullName: "Coated Paper Material",
      icon: CubeIcon,
      image: "/images/products/Chrome.jpg",
      hasImage: true,
      description:
        "Premium quality chrome paper labels offering excellent printability and professional appearance.",
      article: "Smooth, high-opacity coated paper ideal for crisp printing.",
      href: "/products/materials#chrome-paper",
    },
    {
      id: "polyester-paper",
      name: "POLYESTER PAPER",
      fullName: "Synthetic Durable Material",
      icon: CubeIcon,
      image: "/images/products/Polyster.jpg",
      hasImage: true,
      description:
        "Durable polyester-based label material with exceptional chemical resistance and longevity.",
      article: "Tear-resistant, waterproof synthetic for harsh environments.",
      href: "/products/materials#polyester-paper",
    },
    {
      id: "taffeta-materials",
      name: "TAFFETA",
      fullName: "Premium Fabric Labels",
      icon: StarIcon,
      image: "/images/products/Taffeta.jpg",
      hasImage: true,
      description:
        "Elegant taffeta fabric labels providing premium look and feel for luxury applications.",
      article: "Smooth, lustrous fabric for high-end branding.",
      href: "/products/materials#taffeta",
    },
    {
      id: "satin-materials",
      name: "SATIN",
      fullName: "Luxury Satin Labels",
      icon: StarIcon,
      image: "/images/products/Satin.jpg",
      hasImage: true,
      description:
        "Luxurious satin fabric labels offering superior elegance for exclusive branding.",
      article: "Brilliant luster and exceptional smoothness for luxury labels.",
      href: "/products/materials#satin",
    },
  ];

  // Section 3: Ribbons
  const ribbonItems = [
    {
      id: "wax-ribbons",
      name: "WAX RIBBONS",
      fullName: "General Purpose Printing",
      icon: SparklesIcon,
      image: "/images/products/Ribbons.jpg",
      hasImage: true,
      description:
        "Cost-effective thermal transfer ribbons ideal for paper labels and tags.",
      article:
        "Economical ribbons delivering sharp prints on paper substrates.",
      href: "/products/ribbons#wax-ribbons",
    },
    {
      id: "wax-resin-ribbons",
      name: "WAX-RESIN RIBBONS",
      fullName: "Balanced Performance",
      icon: BeakerIcon,
      image: "/images/products/Ribbons.jpg",
      hasImage: true,
      description:
        "Balanced durability and cost-effectiveness for versatile applications.",
      article: "Hybrid formulation for improved durability and versatility.",
      href: "/products/ribbons#wax-resin-ribbons",
    },
    {
      id: "resin-ribbons",
      name: "RESIN RIBBONS",
      fullName: "Maximum Durability",
      icon: ShieldCheckIcon,
      image: "/images/products/Resin.jpg",
      hasImage: true,
      description:
        "Premium ribbons providing maximum chemical and abrasion resistance.",
      article: "Top-tier durability for harsh environments and synthetics.",
      href: "/products/ribbons#resin-ribbons",
    },
    {
      id: "additional-variations",
      name: "ADDITIONAL VARIATIONS",
      fullName: "Specialty Ribbons",
      icon: CogIcon,
      image: "/images/products/Misc.jpg",
      hasImage: true,
      description:
        "Specialized ribbon formulations including colors, near-edge, washable, and more.",
      article: "Custom and specialty ribbons for unique requirements.",
      href: "/products/ribbons#additional-variations",
    },
  ];

  const productCategories = [
    {
      id: "sticker-labels",
      icon: TagIcon,
      title: "Sticker Labels",
      description:
        "Comprehensive range of high-quality sticker labels for every application and industry. From basic product identification to advanced security features, our sticker labels provide reliable, professional solutions for businesses across all sectors.",
      features: [
        "Product Labels",
        "Barcode Labels",
        "Billing Rolls",
        "Hologram Labels",
        "RFID Labels",
        "Printing Technologies",
      ],
      color: "from-blue-500 to-purple-500",
      image: "/images/products/Products1.jpg",
      href: "#sticker-labels",
    },
    {
      id: "materials",
      icon: CubeIcon,
      title: "Materials",
      description:
        "Premium quality materials for all your labeling needs, from basic applications to luxury branding. Our extensive range includes chrome paper, polyester, taffeta, and satin materials, each engineered for specific performance requirements.",
      features: ["Chrome Paper", "Polyester Paper", "Taffeta", "Satin"],
      image: "/images/products/Products2.jpg",
      href: "#materials",
      color: "from-green-600 to-teal-600",
    },
    {
      id: "ribbons",
      icon: SparklesIcon,
      title: "Ribbons",
      description:
        "Professional thermal transfer ribbons for superior print quality and durability across all applications. Our ribbon solutions ensure optimal performance with various label materials and printing conditions.",
      features: [
        "Wax Ribbons",
        "Wax-Resin Ribbons",
        "Resin Ribbons",
        "Additional Variations",
      ],
      image: "/images/products/Satin.jpg",
      href: "#ribbons",
      color: "from-red-600 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <HeroSection
        title="Our"
        subtitle="Products"
        description="Discover our comprehensive range of labeling solutions designed to meet every industry need with cutting-edge technology and superior quality."
        backgroundImageSrc="/images/products/PH.jpg"
        backgroundImageQuality={45}
        className="-mt-20 sm:-mt-24 lg:-mt-28 pt-48 sm:pt-56 lg:pt-64"
        primaryButton={{
          text: "Start Your Journey",
          href: "#product-categories",
        }}
        secondaryButton={{
          text: "Learn More",
          href: "#product-categories",
          icon: <ArrowRightIcon className="w-5 h-5" />,
        }}
        badge={{
          text: "Premium Quality Solutions",
          icon: <StarIcon className="w-4 h-4 text-blue-600" />,
        }}
      />

      {/* Product Categories Overview */}
      <section id="product-categories" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of labeling solutions, each
              designed to meet specific industry requirements and applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {productCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.id}
                  href={category.href}
                  className="group block"
                  onMouseEnter={() => setHoveredCard(category.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col min-h-[520px]">
                    <div className="aspect-w-16 aspect-h-9 relative">
                      <OptimizedImage
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-80`}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent className="w-16 h-16 text-white" />
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {category.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">
                          Key Products:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {category.features.map((feature, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div
                        className={`mt-auto flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors ${
                          hoveredCard === category.id ? "translate-x-2" : ""
                        } transition-transform duration-200`}
                      >
                        Explore {category.title}
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products by Section: Sticker & Labels, Materials, Ribbons */}
      <section
        id="sticker-labels"
        className="px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 -mt-1"
      >
        <div className="max-w-[1400px] mx-auto pt-8 space-y-16">
          {/* Sticker & Labels */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900">
                Sticker & Labels
              </h3>
              <p className="text-gray-600">
                All core sticker and label offerings
              </p>
            </div>
            {stickerItems.map((product, index) => {
              const IconComponent = product.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={product.id}
                  id={product.id}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-stretch scroll-mt-20`}
                >
                  {/* Image Section */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative h-[500px] overflow-hidden group">
                      {product.hasImage ? (
                        <OptimizedImage
                          src={product.image}
                          alt={product.fullName}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          quality={80}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100" />
                      )}
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      {/* Icon Badge */}
                      <div className="absolute top-6 right-6 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      {/* Product Name Overlay */}
                      <div className="absolute bottom-6 left-6">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                          {product.name}
                        </h3>
                        <p className="text-blue-200 text-sm font-medium">
                          {product.fullName}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Content Section */}
                  <div className="w-full lg:w-1/2">
                    <div className="bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-purple-900/95 backdrop-blur-md p-8 lg:p-10 border border-blue-800/30 hover:border-blue-400/50 transition-all duration-500 h-[500px] flex flex-col">
                      {/* Vertical Line and Title */}
                      <div className="flex items-center mb-6">
                        <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mr-4"></div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-white">
                          {product.name}
                        </h3>
                      </div>
                      {/* Subtitle */}
                      <p className="text-blue-200 text-lg mb-6 font-medium">
                        {product.fullName}
                      </p>
                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                        {product.description}
                      </p>
                      {/* Article */}
                      <div className="flex-grow overflow-hidden">
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {product.article}
                        </p>
                      </div>
                      {/* CTA Button */}
                      <Link
                        href={product.href}
                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 mt-6 flex-shrink-0"
                      >
                        View Details
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Materials */}
          <div id="materials">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900">Materials</h3>
              <p className="text-gray-600">
                Label substrates and fabric options
              </p>
            </div>
            {materialItems.map((product, index) => {
              const IconComponent = product.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={product.id}
                  id={product.id}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-stretch scroll-mt-20`}
                >
                  {/* Image Section */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative h-[500px] overflow-hidden group">
                      {product.hasImage ? (
                        <OptimizedImage
                          src={product.image}
                          alt={product.fullName}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          quality={80}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-green-100 to-teal-100" />
                      )}
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      {/* Icon Badge */}
                      <div className="absolute top-6 right-6 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      {/* Product Name Overlay */}
                      <div className="absolute bottom-6 left-6">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                          {product.name}
                        </h3>
                        <p className="text-blue-200 text-sm font-medium">
                          {product.fullName}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Content Section */}
                  <div className="w-full lg:w-1/2">
                    <div className="bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-purple-900/95 backdrop-blur-md p-8 lg:p-10 border border-blue-800/30 hover:border-blue-400/50 transition-all duration-500 h-[500px] flex flex-col">
                      <div className="flex items-center mb-6">
                        <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mr-4"></div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-white">
                          {product.name}
                        </h3>
                      </div>
                      <p className="text-blue-200 text-lg mb-6 font-medium">
                        {product.fullName}
                      </p>
                      <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                        {product.description}
                      </p>
                      <div className="flex-grow overflow-hidden">
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {product.article}
                        </p>
                      </div>
                      <Link
                        href={product.href}
                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 mt-6 flex-shrink-0"
                      >
                        View Details
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Ribbons */}
          <div id="ribbons">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900">Ribbons</h3>
              <p className="text-gray-600">
                Complete thermal transfer ribbon lineup
              </p>
            </div>
            {ribbonItems.map((product, index) => {
              const IconComponent = product.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={product.id}
                  id={product.id}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-stretch scroll-mt-20`}
                >
                  {/* Image Section */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative h-[500px] overflow-hidden group">
                      {product.hasImage ? (
                        <OptimizedImage
                          src={product.image}
                          alt={product.fullName}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          quality={80}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-red-100 to-pink-100" />
                      )}
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      {/* Icon Badge */}
                      <div className="absolute top-6 right-6 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      {/* Product Name Overlay */}
                      <div className="absolute bottom-6 left-6">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                          {product.name}
                        </h3>
                        <p className="text-blue-200 text-sm font-medium">
                          {product.fullName}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Content Section */}
                  <div className="w-full lg:w-1/2">
                    <div className="bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-purple-900/95 backdrop-blur-md p-8 lg:p-10 border border-blue-800/30 hover:border-blue-400/50 transition-all duration-500 h-[500px] flex flex-col">
                      <div className="flex items-center mb-6">
                        <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mr-4"></div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-white">
                          {product.name}
                        </h3>
                      </div>
                      <p className="text-blue-200 text-lg mb-6 font-medium">
                        {product.fullName}
                      </p>
                      <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                        {product.description}
                      </p>
                      <div className="flex-grow overflow-hidden">
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {product.article}
                        </p>
                      </div>
                      <Link
                        href={product.href}
                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 mt-6 flex-shrink-0"
                      >
                        View Details
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your labeling needs and discover how our
            products can enhance your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-quotation"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Get Custom Quote
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
