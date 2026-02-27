'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon, TagIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'


interface SubItem {
  name: string
  href: string
}

interface DropdownItem {
  name: string
  href: string
  subItems?: SubItem[]
}

interface MenuItem {
  name: string
  href: string
  dropdown?: DropdownItem[]
}

const NavigationComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  
  // Check if we're on specific pages for styling
  const isHomePage = pathname === '/'
  const isContactPage = pathname === '/contact'
  const isSoftwaresPage = pathname === '/softwares'
  const isHardwaresPage = pathname === '/hardwares'
  const isConsultancyPage = pathname === '/consultancy'
  const isIndustriesPage = pathname === '/industries'
  const isIndustriesDetailPage = pathname.startsWith('/industries/') && pathname !== '/industries'
  const isProductsPage = pathname.startsWith('/products')
  const isGetQuotationPage = pathname === '/get-quotation'

  // Scroll behavior: always track scrolled state; do not hide on scroll
  const lastScrollYRef = useRef(0)
  const [isNavHidden, setIsNavHidden] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  // On homepage before scroll, navbar background is transparent over (likely) light hero.
  // Use this flag to ensure mobile hamburger is visible (dark icon on light bg).
  const onTransparentHero = isHomePage && !isScrolled
  const useLightNav = isIndustriesDetailPage
  const navTextClass = useLightNav ? 'text-gray-900' : 'text-white'
  
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  useEffect(() => {
    if (!isMounted) return
    
    const shouldHideOnScroll = false
    const onScroll = () => {
      const currentY = window.scrollY
      setIsScrolled(currentY > 10)
      if (shouldHideOnScroll) {
        if (currentY > lastScrollYRef.current && currentY > 80) {
          setIsNavHidden(true)
        } else {
          setIsNavHidden(false)
        }
      } else {
        setIsNavHidden(false)
      }
      lastScrollYRef.current = currentY
    }
    // initialize on mount
    setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isContactPage, isConsultancyPage, isMounted])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
    setActiveSubDropdown(null)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const menuItems: MenuItem[] = [
    {
      name: 'HOME',
      href: '/',
    },
    {
      name: 'PRODUCTS',
      href: '/products',
      dropdown: [
        {
          name: 'STICKER LABELS',
          href: '/products#sticker-labels',
          subItems: [
            { name: 'PRODUCT LABELS', href: '/products#product-labels' },
            { name: 'BARCODE LABEL', href: '/products#barcode-labels' },
            { name: 'DT/SHIPPING LABELS', href: '/products#dt-shipping-labels' },
            { name: 'BILLING ROLLS', href: '/products#billing-rolls' },
            { name: 'HOLOGRAM', href: '/products#hologram-labels' },
            { name: 'RFIDS', href: '/products#rfid-labels' },
            { name: 'PRINTING TECHNOLOGIES', href: '/products#printing-technologies' },
          ]
        },
        {
          name: 'MATERIALS',
          href: '/products#materials',
          subItems: [
            { name: 'CHROME PAPER', href: '/products#chrome-paper' },
            { name: 'POLYESTER PAPER', href: '/products#polyester-paper' },
            { name: 'TAFFETA', href: '/products#taffeta-materials' },
            { name: 'SATIN', href: '/products#satin-materials' },
          ]
        },
        {
          name: 'RIBBONS',
          href: '/products#ribbons',
          subItems: [
            { name: 'WAX RIBBONS', href: '/products#wax-ribbons' },
            { name: 'WAX-RESIN RIBBONS', href: '/products#wax-resin-ribbons' },
            { name: 'RESIN RIBBONS (FULLY RESIN)', href: '/products#resin-ribbons' },
            { name: 'ADDITIONAL VARIATIONS', href: '/products#additional-variations' },
          ]
        }
      ]
    },
    {
      name: 'INDUSTRIES',
      href: '/industries',
      dropdown: [
        { name: 'FMCG', href: '/industries#fmcg' },
        { name: 'AUTOMOTIVE', href: '/industries#automotive' },
        { name: 'FOOTWEAR', href: '/industries#footwear' },
        { name: 'PHARMACEUTICALS', href: '/industries#pharmaceuticals' },
        { name: 'ELECTRONICS AND ELECTRICAL', href: '/industries#electronics' },
        { name: 'UTENSILS', href: '/industries#utensils' },
        { name: 'TOYS', href: '/industries#toys' },
        { name: 'FOOD AND BEVERAGES', href: '/industries#food-beverages' },
        { name: 'LOGISTICS AND E-COMMERCE', href: '/industries#logistics' },
      ]
    },
    {
      name: 'HARDWARES',
      href: '/hardwares',
      dropdown: [
        {
          name: 'PRINTERS',
          href: '/hardwares#printers',
          subItems: [
            { name: 'DESKTOP PRINTERS', href: '/hardwares#desktop-printers' },
            { name: 'INDUSTRIAL PRINTERS', href: '/hardwares#industrial-printers' },
            { name: 'ID CARD PRINTERS', href: '/hardwares#id-card-printers' },
          ]
        },
        {
          name: 'SCANNERS',
          href: '/hardwares#scanners',
          subItems: [
            { name: '1D SCANNER', href: '/hardwares#1d-scanners' },
            { name: '2D SCANNER', href: '/hardwares#2d-scanners' },
          ]
        },
        {
          name: 'ACCESSORIES',
          href: '/hardwares#accessories',
          subItems: [
            { name: 'PRINTER HEAD', href: '/hardwares#printer-heads-original' },
            { name: 'ORIGINAL', href: '/hardwares#printer-heads-original' },
            { name: 'OEM', href: '/hardwares#printer-heads-oem' },
          ]
        }
      ]
    },
    {
      name: 'SOFTWARES',
      href: '/softwares',
      dropdown: [
        { name: 'INVENTORY MANAGEMENT', href: '/softwares#inventory-management' },
        { name: 'ASSET MANAGEMENT', href: '/softwares#asset-management' },
        { name: 'PRODUCT MANAGEMENT', href: '/softwares#product-management' },
        { name: 'ERP SYSTEM', href: '/softwares#erp-system' },
      ],
    },
    {
      name: 'BLOGS',
      href: '/blogs',
    },
    {
      name: 'CONTACT US',
      href: '/contact',
    },
  ]

  return (
    <motion.nav 
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isNavHidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        useLightNav
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg'
          : isMounted && isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      } ${
        (isHomePage || isIndustriesPage || isSoftwaresPage || isHardwaresPage || isConsultancyPage || isContactPage || isProductsPage || isGetQuotationPage)
          ? (isMounted && isScrolled ? 'border-gray-800/50' : 'border-white/10')
          : (isGetQuotationPage)
          ? 'border-white/20'
          : (isHomePage ? (isMounted && isScrolled ? 'border-gray-800/50' : 'border-white/10') : isSoftwaresPage ? (isMounted && isScrolled ? 'border-gray-800/50' : 'border-white/10') : isHardwaresPage ? (isMounted && isScrolled ? 'border-gray-800/50' : 'border-white/10') : 'border-red-800/30')
      } will-change-transform`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 sm:h-20 lg:h-24">
          {/* Enhanced Logo Section */}
          <motion.div 
            className="flex items-center ml-2 sm:ml-8 lg:ml-16 relative mt-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-3 sm:space-x-4 group relative">
              {/* Animated Background Glow */}
              <motion.div 
                className={`absolute inset-0 rounded-2xl blur-xl opacity-0 transition-all duration-500 ${
                  useLightNav
                    ? 'bg-red-200/40'
                    : 'bg-gradient-to-r from-red-500/20 via-red-600/30 to-red-700/20'
                } group-hover:opacity-100`}
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.3, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main Logo Container with Enhanced Glassmorphism */}
              <div
                className={`relative flex items-center justify-center rounded-2xl sm:rounded-3xl p-2 sm:p-3 shadow-2xl border transition-all duration-500 w-14 h-14 sm:w-18 sm:h-18 lg:w-22 lg:h-22 overflow-hidden ${
                  useLightNav
                    ? 'bg-white border-gray-200'
                    : 'bg-gradient-to-br from-white/20 via-white/30 to-white/10 backdrop-blur-xl border-white/30 group-hover:border-red-400/50 group-hover:shadow-red-500/25'
                }`}
              >
                {/* Animated Border Ring */}
                <motion.div 
                  className="absolute inset-1 rounded-2xl sm:rounded-3xl border-2 border-transparent bg-gradient-to-r from-red-500 via-red-600 to-red-700 opacity-0 group-hover:opacity-100"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{
                    background: 'conic-gradient(from 0deg, #ef4444, #dc2626, #b91c1c, #ef4444)',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'xor'
                  }}
                />
                
                {/* Logo Image with Enhanced Effects */}
                <div className="relative z-10">
                  <Image
                    src="/images/icon/logo.png"
                    alt="SDB LABEL Logo"
                    width={140}
                    height={140}
                    className="object-contain filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300 transform scale-110 sm:scale-115 lg:scale-125"
                    priority
                    quality={100}
                    sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                  />
                </div>
                
                {/* Floating Particles Effect */}
                <motion.div 
                  className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ 
                    y: [0, -8, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5
                  }}
                />
                <motion.div 
                  className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-red-300 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ 
                    y: [0, -8, 0],
                    scale: [1, 1.3, 1],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 1
                  }}
                />
              </div>
              
              {/* Enhanced Text Section */}
              <div className="flex flex-col relative">
                {/* Company Name with Gradient Text */}
                <motion.span 
                  className={`font-sagittaMont font-extrabold uppercase tracking-[0.2em] transition-all duration-500 drop-shadow-lg text-xl sm:text-2xl lg:text-3xl ${
                    useLightNav
                      ? 'text-red-700'
                      : 'bg-gradient-to-r from-red-300 via-white to-red-300 bg-clip-text text-transparent'
                  }`}
                  whileHover={{ scale: 1.01 }}
                >
                  SDB LABEL
                </motion.span>
                
                {/* Tagline with Enhanced Styling */}
                <motion.span 
                  className={`font-medium tracking-wide uppercase block transition-all duration-500 drop-shadow-md text-[10px] sm:text-xs lg:text-sm ${
                    useLightNav
                      ? 'text-gray-600'
                      : 'bg-gradient-to-r from-red-200 via-red-300 to-red-200 bg-clip-text text-transparent group-hover:from-red-400 group-hover:via-white group-hover:to-red-400'
                  }`}
                  whileHover={{ scale: 1.005 }}
                >
                  Build To Stick
                </motion.span>
                
                {/* Animated Underline */}
                <motion.div 
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Floating Accent Elements */}
              <motion.div 
                className="absolute -top-2 -right-2 w-1 h-1 bg-red-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{ 
                  y: [0, -5, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  delay: 0.2
                }}
              />
            </Link>
          </motion.div>

          {/* Spacer to push navigation to the right */}
          <div className="flex-1"></div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 mr-6 xl:mr-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="group">
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={`hover:text-red-600 transition-colors duration-200 font-medium drop-shadow-lg relative text-sm xl:text-base ${navTextClass}`}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.name}
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></div>
                      </Link>
                    </div>
                    
                    {/* Dropdown Menu */}
                    {isMounted && (
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div 
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-0 mt-3 w-80 bg-black/90 backdrop-blur-xl rounded-2xl shadow-2xl py-3 z-[9999] border border-white/15"
                            onMouseEnter={() => setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                          >
                          {item.dropdown.map((dropdownItem) => (
                            <div key={dropdownItem.name} className="relative">
                              {dropdownItem.subItems ? (
                                <div 
                                  className="group/sub"
                                  onMouseEnter={() => setActiveSubDropdown(dropdownItem.name)}
                                  onMouseLeave={() => setActiveSubDropdown(null)}
                                >
                                  <Link
                                    href={dropdownItem.href}
                                    className="block px-5 py-3 text-white text-sm font-semibold hover:text-red-300 transition-colors duration-150 hover:bg-white/5 rounded-xl mx-3"
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm font-semibold">{dropdownItem.name}</span>
                                      <svg className="w-4 h-4 text-white/60 group-hover/sub:text-red-300 transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                      </svg>
                                    </div>
                                  </Link>
                                  
                                  {/* Sub-dropdown */}
                                  <AnimatePresence>
                                    {activeSubDropdown === dropdownItem.name && (
                                      <motion.div 
                                        initial={{ opacity: 0, x: -10, scale: 0.95 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: -10, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="absolute left-full top-0 w-80 bg-black/90 backdrop-blur-xl rounded-2xl shadow-2xl py-3 z-[9999] border border-white/15"
                                        onMouseEnter={() => setActiveSubDropdown(dropdownItem.name)}
                                        onMouseLeave={() => setActiveSubDropdown(null)}
                                      >
                                        {dropdownItem.subItems.map((subItem) => (
                                          <Link
                                            key={subItem.name}
                                            href={subItem.href}
                                            className="block px-5 py-3 text-white text-sm font-semibold hover:text-red-300 hover:bg-white/5 transition-colors duration-150 rounded-xl mx-3"
                                          >
                                            {subItem.name}
                                          </Link>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ) : (
                                <Link
                                  href={dropdownItem.href}
                                  className="block px-5 py-3 text-white text-sm font-semibold hover:text-red-300 hover:bg-white/5 transition-colors duration-150 rounded-xl mx-3"
                                >
                                  {dropdownItem.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`hover:text-red-600 transition-colors duration-200 font-medium drop-shadow-lg relative text-sm xl:text-base ${navTextClass}`}
                  >
                    {item.name}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 hover:w-full"></div>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Get Quotation Button */}
          <div className="hidden lg:flex items-center mr-6 xl:mr-6">
            <Link
              href="/get-quotation"
              className="inline-flex items-center justify-center px-4 xl:px-6 py-2 xl:py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-600/25 text-sm xl:text-base border-2 border-red-500"
            >
              <TagIcon className="w-4 h-4 mr-2" />
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                useLightNav
                  ? 'text-gray-900 hover:bg-gray-100'
                  : onTransparentHero
                  ? 'text-red-600 hover:bg-red-600/10'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className={`px-2 pt-2 pb-3 space-y-1 backdrop-blur-md border-t max-h-[80vh] overflow-y-auto ${isHomePage || isIndustriesPage || isSoftwaresPage || isHardwaresPage || isConsultancyPage || isContactPage || isProductsPage ? 'bg-black/90 border-white/20' : 'bg-black/90 border-red-800/30'}`}>
                {menuItems.map((item, index) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    {item.dropdown ? (
                      <div>
                        <motion.button
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className={`flex items-center justify-between w-full px-3 py-4 text-left hover:text-red-600 hover:bg-red-100/50 rounded-xl text-sm sm:text-base transition-all duration-200 touch-manipulation ${isHomePage || isIndustriesPage || isSoftwaresPage || isHardwaresPage || isConsultancyPage || isContactPage || isProductsPage ? 'text-white' : 'text-white'}`}
                        >
                          <span className="font-medium">{item.name}</span>
                          <motion.svg 
                            className="w-4 h-4 transition-transform" 
                            animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </motion.button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className={`pl-4 space-y-1 rounded-xl mt-1 ${isHomePage || isIndustriesPage || isProductsPage ? 'bg-black/60' : isContactPage ? 'bg-red-50/80' : 'bg-black/60'}`}
                            >
                              {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                <motion.div 
                                  key={dropdownItem.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: dropdownIndex * 0.05, duration: 0.2 }}
                                >
                                  {dropdownItem.subItems ? (
                                    <div>
                                      <Link
                                        href={dropdownItem.href}
                                        className={`block px-3 py-3 hover:text-red-600 hover:bg-red-100/50 rounded-xl text-sm font-medium transition-all duration-200 touch-manipulation ${isHomePage || isIndustriesPage || isSoftwaresPage || isHardwaresPage || isConsultancyPage || isContactPage || isProductsPage ? 'text-white' : 'text-white'}`}
                                        onClick={() => setIsOpen(false)}
                                      >
                                        {dropdownItem.name}
                                      </Link>
                                      <motion.button
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setActiveSubDropdown(activeSubDropdown === dropdownItem.name ? null : dropdownItem.name)}
                                        className={`flex items-center justify-between w-full px-3 py-2 text-left hover:text-red-600 hover:bg-red-100/50 rounded-xl text-xs transition-all duration-200 touch-manipulation ${isHomePage || isIndustriesPage || isSoftwaresPage || isHardwaresPage || isConsultancyPage || isContactPage || isProductsPage ? 'text-white' : 'text-white'}`}
                                      >
                                        <span>View Subcategories</span>
                                        <motion.svg 
                                          className="w-3 h-3 transition-transform" 
                                          animate={{ rotate: activeSubDropdown === dropdownItem.name ? 180 : 0 }}
                                          transition={{ duration: 0.2 }}
                                          fill="none" 
                                          stroke="currentColor" 
                                          viewBox="0 0 24 24"
                                        >
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </motion.svg>
                                      </motion.button>
                                      <AnimatePresence>
                                        {activeSubDropdown === dropdownItem.name && (
                                          <motion.div 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className={`pl-4 space-y-1 rounded-xl mt-1 ${isHomePage || isIndustriesPage || isSoftwaresPage || isHardwaresPage || isConsultancyPage || isContactPage || isProductsPage ? 'bg-black/40' : 'bg-black/40'}`}
                                          >
                                            {dropdownItem.subItems.map((subItem, subIndex) => (
                                              <motion.div
                                                key={subItem.name}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: subIndex * 0.05, duration: 0.2 }}
                                              >
                                                <Link
                                                  href={subItem.href}
                                                  className={`block px-3 py-2 hover:text-red-600 hover:bg-red-100/50 rounded-xl text-sm font-medium transition-all duration-200 touch-manipulation ${isHomePage || isIndustriesPage || isSoftwaresPage || isHardwaresPage || isConsultancyPage || isContactPage || isProductsPage ? 'text-white' : 'text-white'}`}
                                                  onClick={() => setIsOpen(false)}
                                                >
                                                  {subItem.name}
                                                </Link>
                                              </motion.div>
                                            ))}
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  ) : (
                                    <Link
                                      href={dropdownItem.href}
                                      className={`block px-3 py-3 hover:text-red-600 hover:bg-red-100/50 rounded-xl text-sm transition-all duration-200 touch-manipulation ${isHomePage || isIndustriesPage || isSoftwaresPage || isHardwaresPage || isConsultancyPage || isContactPage || isProductsPage ? 'text-white' : 'text-white'}`}
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {dropdownItem.name}
                                    </Link>
                                  )}
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block px-3 py-4 hover:text-red-600 hover:bg-red-100/50 rounded-xl font-medium text-sm sm:text-base transition-all duration-200 touch-manipulation ${isHomePage || isIndustriesPage || isSoftwaresPage || isHardwaresPage || isConsultancyPage || isContactPage || isProductsPage ? 'text-white' : 'text-white'}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: menuItems.length * 0.1, duration: 0.3 }}
                  className={`pt-4 border-t ${isHomePage || isSoftwaresPage || isHardwaresPage || isConsultancyPage || isContactPage || isProductsPage ? 'border-white/20' : 'border-red-800/30'}`}
                >
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/get-quotation"
                      className="btn-primary w-full text-center text-sm sm:text-base touch-manipulation"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Quotation
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default NavigationComponent
