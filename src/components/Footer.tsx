'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const quickLinks = [
    { name: 'About Us', href: '/#about-us' },
    { name: 'Our Services', href: '/products' },
    { name: 'Get Quotation', href: '/get-quotation' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Support', href: '/contact#contact-form' }
  ]

  const products = [
    { name: 'Sticker Labels', href: '/products#sticker-labels' },
    { name: 'Barcode Labels', href: '/products#barcode-labels' },
    { name: 'Product Labels', href: '/products#product-labels' },
    { name: 'Billing Rolls', href: '/products#billing-rolls' },
    { name: 'Hologram Labels', href: '/products#hologram-labels' },
    { name: 'RFID Solutions', href: '/products#rfid-labels' },
    { name: 'Chrome Paper', href: '/products#chrome-paper' },
    { name: 'Polyester Paper', href: '/products#polyester-paper' }
  ]

  const services = [
    { name: 'Inventory Management', href: '/softwares#inventory-management' },
    { name: 'Asset Management', href: '/softwares#asset-management' },
    { name: 'Product Management', href: '/softwares#product-management' },
    { name: 'ERP System', href: '/softwares#erp-system' },
    { name: 'Desktop Printers', href: '/hardwares#desktop-printers' },
    { name: 'Industrial Printers', href: '/hardwares#industrial-printers' },
    { name: 'ID Card Printers', href: '/hardwares#id-card-printers' },
    { name: 'POS Systems', href: '/hardwares#pos-systems' }
  ]

  const industries = [
    { name: 'FMCG', href: '/industries#fmcg' },
    { name: 'Automotive', href: '/industries#automotive' },
    { name: 'Footwear', href: '/industries#footwear' },
    { name: 'Pharmaceuticals', href: '/industries#pharmaceuticals' },
    { name: 'Electronics', href: '/industries#electronics' },
    { name: 'Food & Beverages', href: '/industries#food-beverages' },
    { name: 'Logistics', href: '/industries#logistics' },
    { name: 'Toys', href: '/industries#toys' }
  ]

  const socialLinks = [
    { name: 'WhatsApp', href: 'https://wa.me/919654566078', icon: 'whatsapp', color: 'bg-green-600 hover:bg-green-700' },
    { name: 'Email', href: 'mailto:info@sdblabel.com', icon: 'email', color: 'bg-red-600 hover:bg-red-700' },
    { name: 'Phone', href: 'tel:+919654566078', icon: 'phone', color: 'bg-red-600 hover:bg-red-700' }
  ]

  const FooterSection = ({ title, children, sectionKey }: { title: string; children: React.ReactNode; sectionKey: string }) => (
    <div className="space-y-4">
      <motion.button
        className="flex items-center justify-between w-full lg:hidden"
        onClick={() => toggleSection(sectionKey)}
        whileTap={{ scale: 0.98 }}
      >
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <motion.div
          animate={{ rotate: expandedSections[sectionKey] ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDownIcon className="w-5 h-5 text-gray-400" />
        </motion.div>
      </motion.button>
      
      <h3 className="text-base font-semibold text-white hidden lg:block">{title}</h3>
      
      {/* Mobile collapsible content */}
      <motion.div
        initial={false}
        animate={{
          height: expandedSections[sectionKey] ? 'auto' : 0,
          opacity: expandedSections[sectionKey] ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="lg:hidden overflow-hidden"
      >
        {children}
      </motion.div>
      
      {/* Desktop always visible content */}
      <div className="hidden lg:block">
        {children}
      </div>
    </div>
  )

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <motion.div 
            className="sm:col-span-2 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 relative flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/images/icon/logo.png"
                  alt="SDB LABEL Logo"
                  width={48}
                  height={48}
                  className="object-contain max-w-full max-h-full"
                  priority
                  quality={100}
                  sizes="(max-width: 768px) 40px, 48px"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                />
              </motion.div>
              <span className="text-xl sm:text-2xl font-bold text-red-400">SDB LABEL</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Established in 2011, SDB LABEL is your trusted partner for comprehensive business solutions across India. 
              We specialize in premium labels, cutting-edge hardware, innovative software, and expert consultancy 
              services to drive your business success in the Indian market.
            </p>
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <motion.div 
                className="flex items-start space-x-2 sm:space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm">467-483/9 & 10, 2nd Floor Oberoi Compound, Dilshad Garden G.T. Road Industrial Area, Delhi 110095</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 sm:space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm">+91 9654566078</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 sm:space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm">info@sdblabel.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 sm:space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm">Mon-Sat: 9:00 AM - 6:00 PM (IST)</span>
              </motion.div>
            </div>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`w-8 h-8 sm:w-10 sm:h-10 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 touch-manipulation`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon === 'whatsapp' && (
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-sm"></div>
                  )}
                  {social.icon === 'email' && (
                    <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  )}
                  {social.icon === 'phone' && (
                    <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <div>
            <FooterSection title="Quick Links" sectionKey="quickLinks">
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-red-400 transition-colors duration-300 flex items-center group text-xs sm:text-sm touch-manipulation"
                    >
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                      </motion.div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </div>

          {/* Products */}
          <div>
            <FooterSection title="Products" sectionKey="products">
              <ul className="space-y-2 sm:space-y-3">
                {products.map((product, index) => (
                  <li key={product.name}>
                    <Link 
                      href={product.href} 
                      className="text-gray-300 hover:text-red-400 transition-colors duration-300 flex items-center group text-xs sm:text-sm touch-manipulation"
                    >
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                      </motion.div>
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </div>

          {/* Services */}
          <div>
            <FooterSection title="Services" sectionKey="services">
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service, index) => (
                  <li key={service.name}>
                    <Link 
                      href={service.href} 
                      className="text-gray-300 hover:text-red-400 transition-colors duration-300 flex items-center group text-xs sm:text-sm touch-manipulation"
                    >
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                      </motion.div>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </div>

          {/* Industries */}
          <div>
            <FooterSection title="Industries" sectionKey="industries">
              <ul className="space-y-2 sm:space-y-3">
                {industries.map((industry, index) => (
                  <li key={industry.name}>
                    <Link 
                      href={industry.href} 
                      className="text-gray-300 hover:text-red-400 transition-colors duration-300 flex items-center group text-xs sm:text-sm touch-manipulation"
                    >
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                      </motion.div>
                      {industry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-gray-800 bg-slate-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container-custom py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <motion.p 
              className="text-gray-400 text-xs sm:text-sm text-center sm:text-left"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © {currentYear} SDB LABEL. All rights reserved. | Established in 2011
            </motion.p>
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-xs sm:text-sm touch-manipulation"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-xs sm:text-sm touch-manipulation"
              >
                Terms of Service
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer