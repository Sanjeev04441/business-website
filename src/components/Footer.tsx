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
    { name: 'Instagram', href: 'https://www.instagram.com/sdb_label/', icon: 'instagram', color: 'bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 hover:opacity-90' },
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61585864571954', icon: 'facebook', color: 'bg-blue-600 hover:bg-blue-700' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sanjeev0441/', icon: 'linkedin', color: 'bg-sky-600 hover:bg-sky-700' },
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
                  {social.icon === 'instagram' && (
                    <svg
                      viewBox="0 0 16 16"
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                      />
                    </svg>
                  )}
                  {social.icon === 'facebook' && (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z"
                      />
                    </svg>
                  )}
                  {social.icon === 'linkedin' && (
                    <svg
                      viewBox="0 0 16 16"
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                      />
                    </svg>
                  )}
                  {social.icon === 'whatsapp' && (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M18.497 4.409a10 10 0 0 1 -10.36 16.828l-.223 -.098l-4.759 .849l-.11 .011a1 1 0 0 1 -.11 0l-.102 -.013l-.108 -.024l-.105 -.037l-.099 -.047l-.093 -.058l-.014 -.011l-.012 -.007l-.086 -.073l-.077 -.08l-.067 -.088l-.056 -.094l-.034 -.07l-.04 -.108l-.028 -.128l-.012 -.102a1 1 0 0 1 0 -.125l.012 -.1l.024 -.11l.045 -.122l1.433 -3.304l-.009 -.014a10 10 0 0 1 1.549 -12.454l.215 -.203a10 10 0 0 1 13.226 -.217m-8.997 3.09a1.5 1.5 0 0 0 -1.5 1.5v1a6 6 0 0 0 6 6h1a1.5 1.5 0 0 0 0 -3h-1l-.144 .007a1.5 1.5 0 0 0 -1.128 .697l-.042 .074l-.022 -.007a4.01 4.01 0 0 1 -2.435 -2.435l-.008 -.023l.075 -.041a1.5 1.5 0 0 0 .704 -1.272v-1a1.5 1.5 0 0 0 -1.5 -1.5"
                      />
                    </svg>
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
