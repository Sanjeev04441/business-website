'use client'

import Navigation from '@/components/NavigationWrapper'
import Footer from '@/components/Footer'
import OptimizedImage from '@/components/OptimizedImage'
import { 
  CpuChipIcon, 
  ChartBarIcon, 
  CubeIcon, 
  BuildingOfficeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  SparklesIcon,
  ShieldCheckIcon,
  CogIcon,
  DocumentTextIcon,
  UserGroupIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export default function Softwares() {
  const softwareSolutions = [
    {
      icon: ChartBarIcon,
      title: 'Inventory Management',
      description: 'Streamline your inventory operations with our comprehensive management system. Track stock levels in real-time, automate reorder processes, and gain valuable insights through advanced analytics. Our solution integrates seamlessly with barcode scanning technology, provides automated alerts for low stock, and offers detailed reporting dashboards to optimize your inventory control.',
      features: ['Real-time stock tracking', 'Automated reorder points', 'Barcode integration', 'Advanced analytics dashboard', 'Multi-location support', 'Supplier management'],
      color: 'from-red-500 to-orange-500',
      image: '/images/softwares/Inventory.jpg'
    },
    {
      icon: CubeIcon,
      title: 'Asset Management',
      description: 'Take complete control of your business assets with our comprehensive management platform. Monitor asset lifecycles from acquisition to disposal, schedule preventive maintenance, calculate depreciation automatically, and track asset locations across multiple sites. Our system helps you maximize asset utilization while minimizing costs and ensuring compliance.',
      features: ['Complete lifecycle tracking', 'Preventive maintenance scheduling', 'Automatic depreciation calculation', 'Multi-location asset tracking', 'Maintenance history logs', 'Compliance reporting'],
      color: 'from-orange-500 to-red-600',
      image: '/images/softwares/Asset.jpg'
    },
    {
      icon: DocumentTextIcon,
      title: 'Product Management',
      description: 'Manage your entire product portfolio from concept to market with our comprehensive product lifecycle management system. Create detailed product catalogs, maintain version control, conduct market analysis, and track performance metrics. Our platform enables efficient product development, streamlined workflows, and data-driven decision making.',
      features: ['Comprehensive product catalog', 'Version control system', 'Market analysis tools', 'Performance tracking metrics', 'Product development workflows', 'Customer feedback integration'],
      color: 'from-red-600 to-pink-500',
      image: '/images/softwares/Product.jpg'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'ERP System',
      description: 'Transform your business operations with our integrated Enterprise Resource Planning solution. Connect all your business processes seamlessly, from financial management and human resources to supply chain operations and customer relationship management. Our ERP system provides real-time visibility, improves efficiency, and enables data-driven strategic decisions.',
      features: ['Integrated business processes', 'Financial management suite', 'HR management system', 'Supply chain optimization', 'Customer relationship management', 'Real-time reporting'],
      color: 'from-pink-500 to-red-700',
      image: '/images/softwares/ERP.jpg'
    }
  ]

  const features = [
    'Cloud-based Solutions',
    'Real-time Analytics',
    'Mobile Accessibility',
    'Custom Integrations',
    '24/7 Support',
    'Data Security',
    'Scalable Architecture',
    'User-friendly Interface'
  ]

  const testimonials = [
    {
      name: 'David Chen',
      company: 'TechFlow Solutions',
      rating: 5,
      comment: 'The inventory management software has revolutionized our operations. We can now track everything in real-time and make data-driven decisions.'
    },
    {
      name: 'Maria Rodriguez',
      company: 'Global Manufacturing Inc',
      rating: 5,
      comment: 'Our asset management system has saved us thousands in maintenance costs and improved our equipment utilization significantly.'
    },
    {
      name: 'James Wilson',
      company: 'Retail Dynamics',
      rating: 5,
      comment: 'The ERP system has streamlined all our business processes. The integration capabilities are exceptional.'
    }
  ]

  const benefits = [
    {
      icon: CogIcon,
      title: 'Automated Workflows',
      description: 'Reduce manual tasks and increase efficiency with automated business processes.'
    },
    {
      icon: ChartBarIcon,
      title: 'Advanced Analytics',
      description: 'Get deep insights into your business performance with comprehensive reporting tools.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee for your critical business data.'
    },
    {
      icon: UserGroupIcon,
      title: 'Team Collaboration',
      description: 'Enable seamless collaboration across departments with integrated communication tools.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Page Top Navigation (transparent over hero) */}
      <Navigation />
      
      {/* Hero Section with contained background (not fixed) */}
      <section className="relative py-12 lg:py-16 overflow-hidden pt-20 sm:pt-24 lg:pt-28">
        {/* Hero Background - contained within hero only */}
        <div className="absolute inset-0 z-0">
                        <OptimizedImage
            src="/images/softwares/heroSoft.jpg"
            alt="Software Solutions Background"
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
                <span className="text-red-800 font-semibold text-sm">Enterprise Software Solutions</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4">
                Powerful{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-red-100">
                  Software
                </span>{' '}
                Solutions
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-red-100 leading-relaxed max-w-3xl mx-auto mb-8">
                Transform your business with our comprehensive software suite. From inventory management
                to enterprise resource planning, we have the solutions you need to succeed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/get-quotation" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-white to-gray-50 text-red-600 font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <ArrowRightIcon className="w-5 h-5 mr-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="relative z-10">Get Demo</span>
                </a>
                <a 
                  href="/contact" 
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/20"
                >
                  <SparklesIcon className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Contact Sales</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Solutions Grid Section - light theme to match pages */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <SparklesIcon className="w-4 h-4 text-red-600" />
              Our Solutions
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Software Suite
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our software solutions are designed to streamline your business operations, 
              improve efficiency, and drive growth across all departments.
            </p>
          </div>

          {/* Software Solutions with Images and Descriptions */}
          <div className="space-y-40">
            {softwareSolutions.map((solution, index) => (
              <div key={index} id={solution.title.toLowerCase().replace(/\s+/g, '-')} className={`grid lg:grid-cols-2 gap-16 items-start scroll-mt-32 pb-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image Section */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    {/* Animated gradient border */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl opacity-75 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500"></div>
                    
                    {/* Card content */}
                    <div className="relative bg-white rounded-2xl p-2 shadow-xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
                      <div className="relative overflow-hidden rounded-xl">
                        <OptimizedImage
                          src={solution.image}
                          alt={solution.title}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-6">
                    {/* Icon and Title */}
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-base text-gray-600 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircleIcon className="w-5 h-5 text-red-600 flex-shrink-0" />
                          <span className="text-gray-700 font-medium text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <a 
                        href="/get-quotation" 
                        className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Learn More
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-white via-red-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircleIcon className="w-4 h-4" />
              Why Choose Our Software
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Benefits That Drive Results
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our software solutions deliver measurable benefits that help your business 
              operate more efficiently and achieve better outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-slate-50 to-red-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-6 py-3 rounded-full text-sm font-medium mb-6">
                <CheckCircleIcon className="w-4 h-4" />
                Key Features
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Built for Modern Businesses
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Our software is designed with the latest technology to provide you with 
                the tools you need to succeed in today's competitive market.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/50 rounded-xl p-3">
                    <CheckCircleIcon className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-3xl p-8 border border-red-300 shadow-lg">
              <div className="text-center">
                <div className="text-6xl font-bold text-red-700 mb-4">1000+</div>
                <div className="text-xl text-slate-800 mb-2">Active Users</div>
                <div className="text-slate-700">Trusted by businesses worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-white via-red-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <StarIcon className="w-4 h-4" />
              Client Success Stories
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-red-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-red-200 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-red-500 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">"{testimonial.comment}"</p>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-red-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Simple & Stunning */}
      <section className="py-16 lg:py-20 bg-[#D97D55] text-white">
        <div className="container-custom">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-5 py-2 mb-5">
              <span className="text-sm font-semibold tracking-wide">Take action today</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold">Move faster with software that works</h2>
            <p className="mt-3 text-white/90 max-w-2xl mx-auto">
              Get a quick demo or talk to our team. Simple process, real results.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/get-quotation"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-[#D97D55] shadow-sm hover:shadow-md"
              >
                <CheckCircleIcon className="w-5 h-5 mr-2" /> Get Free Demo
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-[#D97D55]"
              >
                <ArrowRightIcon className="w-5 h-5 mr-2" /> Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 