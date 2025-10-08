"use client";

import { useState } from "react";
import Navigation from "@/components/NavigationWrapper";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OptimizedImage from "@/components/OptimizedImage";
import {
  UserGroupIcon,
  LightBulbIcon,
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  SparklesIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Consultancy() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    consultancyType: "",
    projectScope: "",
    timeline: "",
    budget: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/consultancy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Consultancy request submitted successfully! We\'ll get back to you within 24 hours.');
        
        // Reset form
        setFormData({
          name: "",
          companyName: "",
          email: "",
          phoneNumber: "",
          consultancyType: "",
          projectScope: "",
          timeline: "",
          budget: "",
          description: "",
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || 'Failed to submit consultancy request. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const consultancyServices = [
    {
      icon: ChartBarIcon,
      title: "Strategic Business Planning",
      description:
        "Comprehensive business analysis and strategic planning to optimize your operations and drive sustainable growth.",
      features: [
        "Market Analysis & Research",
        "Competitive Intelligence",
        "Growth Strategy Development",
        "Performance Optimization",
      ],
    },
    {
      icon: CogIcon,
      title: "Process Optimization",
      description:
        "Streamline your business processes to improve efficiency, reduce operational costs, and enhance overall productivity.",
      features: [
        "Workflow Analysis & Design",
        "Automation Solutions",
        "Quality Management Systems",
        "Performance Metrics & KPIs",
      ],
    },
    {
      icon: LightBulbIcon,
      title: "Technology Consulting",
      description:
        "Expert guidance on technology implementation, digital transformation, and system integration for modern businesses.",
      features: [
        "Technology Assessment & Roadmap",
        "Digital Transformation Strategy",
        "System Integration Planning",
        "IT Infrastructure Optimization",
      ],
    },
    {
      icon: DocumentTextIcon,
      title: "Compliance & Standards",
      description:
        "Ensure your business meets industry standards and regulatory requirements with our comprehensive compliance guidance.",
      features: [
        "Regulatory Compliance Audits",
        "Quality Standards Implementation",
        "Audit Preparation & Support",
        "Risk Management Frameworks",
      ],
    },
  ];

  const expertiseAreas = [
    {
      icon: AcademicCapIcon,
      title: "Industry Expertise",
      description:
        "Deep knowledge across manufacturing, retail, logistics, and technology sectors",
    },
    {
      icon: BriefcaseIcon,
      title: "Business Strategy",
      description:
        "Proven methodologies for business growth and operational excellence",
    },
    {
      icon: GlobeAltIcon,
      title: "Global Perspective",
      description:
        "International business insights and cross-cultural market understanding",
    },
    {
      icon: ShieldCheckIcon,
      title: "Quality Assurance",
      description:
        "Rigorous quality standards and continuous improvement methodologies",
    },
  ];

  const benefits = [
    "Expert industry knowledge and strategic insights",
    "Customized solutions tailored to your business needs",
    "Proven methodologies and best practices implementation",
    "Ongoing support and implementation guidance",
    "Measurable results and ROI tracking",
    "Flexible engagement models and scalable solutions",
  ];

  const testimonials = [
    {
      name: "Rajesh Gupta",
      position: "CEO",
      company: "Patanjali Ayurved",
      rating: 5,
      initial: "R",
      comment:
        "SDB LABEL's consultancy services helped us optimize our production processes, resulting in a 35% increase in efficiency and significant cost savings. Their expertise in supply chain management was outstanding.",
    },
    {
      name: "Priya Sharma",
      position: "Operations Director",
      company: "Haldiram's",
      rating: 5,
      initial: "P",
      comment:
        "Their strategic guidance transformed our business model and helped us expand into new markets across India successfully. The ROI exceeded our expectations, and their team was incredibly professional.",
    },
    {
      name: "Vikram Mehta",
      position: "CTO",
      company: "Mankind Pharma",
      rating: 5,
      initial: "V",
      comment:
        "The technology consulting expertise provided by SDB LABEL was invaluable in our digital transformation journey. They helped us implement cutting-edge solutions that improved our operational efficiency by 40%.",
    },
    {
      name: "Anjali Reddy",
      position: "Supply Chain Head",
      company: "Motherson Sumi",
      rating: 5,
      initial: "A",
      comment:
        "Working with SDB LABEL has been a game-changer for our logistics operations. Their process optimization strategies have helped us reduce costs by 25% while improving delivery times significantly.",
    },
    {
      name: "Arjun Singh",
      position: "Managing Director",
      company: "Lucas TVS",
      rating: 5,
      initial: "A",
      comment:
        "The consultancy services provided were top-notch. Their team understood our industry challenges and delivered customized solutions that made a real impact on our bottom line.",
    },
    {
      name: "Neha Kapoor",
      position: "Quality Manager",
      company: "Unominda",
      rating: 5,
      initial: "N",
      comment:
        "SDB LABEL helped us implement ISO standards and quality management systems seamlessly. Their expertise and hands-on approach made the entire process smooth and highly effective.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <HeroSection
        title="Transform Your"
        subtitle="Business"
        description="Expert consultancy services designed to drive sustainable growth, optimize operations, and unlock your business potential through strategic guidance and proven methodologies."
        backgroundImageSrc="/images/icon/consultancy.jpg"
        primaryButton={{
          text: "Start Your Journey",
          href: "#consultation-form",
        }}
        secondaryButton={{
          text: "Learn More",
          href: "#strategic-solutions",
          icon: <ArrowRightIcon className="w-5 h-5" />,
        }}
        badge={{
          text: "Strategic Business Consulting",
        }}
      />

      {/* Services Section */}
      <section id="strategic-solutions" className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <SparklesIcon className="w-4 h-4 text-red-600" />
              Consulting Services
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Strategic Business Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer strategic consultancy services designed to transform your
              business operations, drive growth, and ensure long-term success in
              today's competitive market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {consultancyServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircleIcon className="w-4 h-4 text-red-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <StarIcon className="w-4 h-4 text-red-600" />
              Our Expertise
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Core Competencies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring years of industry expertise and proven methodologies to
              help your business achieve sustainable growth and operational
              excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CheckCircleIcon className="w-4 h-4 text-red-600" />
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose SDB LABEL Consultancy?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We bring years of industry expertise and proven methodologies to
                help your business achieve sustainable growth and operational
                excellence.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3 border border-gray-200"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Consultation Form */}
            <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Get Started Today
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Request a Free Consultation
                </h3>
                <p className="text-gray-600 text-sm">
                  Tell us about your business needs and we'll provide you with a
                  customized consultation plan
                </p>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-green-800 text-sm">{submitMessage}</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-red-800 text-sm">{submitMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 text-sm"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 text-sm"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 text-sm"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 text-sm"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label
                      htmlFor="consultancyType"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Consultancy Type *
                    </label>
                    <select
                      id="consultancyType"
                      name="consultancyType"
                      value={formData.consultancyType}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 text-gray-900 text-sm"
                    >
                      <option value="">Select consultancy type</option>
                      <option value="business-strategy">Business Strategy</option>
                      <option value="process-optimization">Process Optimization</option>
                      <option value="digital-transformation">Digital Transformation</option>
                      <option value="supply-chain">Supply Chain Management</option>
                      <option value="quality-management">Quality Management</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="projectScope"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Project Scope *
                    </label>
                    <select
                      id="projectScope"
                      name="projectScope"
                      value={formData.projectScope}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 text-gray-900 text-sm"
                    >
                      <option value="">Select project scope</option>
                      <option value="small">Small (1-3 months)</option>
                      <option value="medium">Medium (3-6 months)</option>
                      <option value="large">Large (6+ months)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Preferred Timeline *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 text-gray-900 text-sm"
                    >
                      <option value="">Select timeline</option>
                      <option value="ASAP">ASAP</option>
                      <option value="Next month">Next month</option>
                      <option value="Next quarter">Next quarter</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Budget Range *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 text-gray-900 text-sm"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under ₹10,000</option>
                      <option value="10k-50k">₹10,000 - ₹50,000</option>
                      <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                      <option value="100k-500k">₹1,00,000 - ₹5,00,000</option>
                      <option value="500k-plus">₹5,00,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 text-sm resize-none"
                    placeholder="Describe your business challenges and what you hope to achieve..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-3"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Consultancy Request
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-600 mt-2 text-center">
                    We'll get back to you within 24 hours with a detailed consultation plan
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section - Our Client Stories */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-red-400/20 to-rose-500/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-rose-400/20 to-red-500/20 rounded-full blur-3xl animate-float-medium"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-red-300/10 to-rose-400/10 rounded-full blur-3xl animate-float-fast"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-2xl shadow-red-600/25">
              <StarIcon className="w-5 h-5" />
              Our Client Stories
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Success Stories from{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-700 to-red-800">
                Leading Indian Companies
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Don't just take our word for it - hear from industry leaders who have transformed their businesses with our consultancy services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white via-white to-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-red-300 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              >
                {/* Decorative Quote Icon */}
                <div className="absolute top-6 right-6 text-red-100 group-hover:text-red-200 transition-colors duration-300">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* Star Rating */}
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="w-5 h-5 fill-current drop-shadow-sm"
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500 font-medium">5.0</span>
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-gray-700 text-base leading-relaxed mb-8 relative z-10">
                  <span className="text-red-500 text-2xl font-bold leading-none">"</span>
                  {testimonial.comment}
                  <span className="text-red-500 text-2xl font-bold leading-none">"</span>
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center pt-6 border-t border-gray-200 group-hover:border-red-200 transition-colors duration-300">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      {testimonial.initial}
                    </div>
                    {/* Verified Badge */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                      <CheckCircleIcon className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="font-bold text-gray-900 text-lg group-hover:text-red-600 transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">
                      {testimonial.position}
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-red-600 font-semibold text-sm">{testimonial.company}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-200">
              <CheckCircleIcon className="w-6 h-6 text-green-500" />
              <span className="text-gray-700 font-semibold">Trusted by 200+ Leading Indian Companies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Transform Your Business CTA Section - Dark Theme */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Sophisticated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-600/10 via-transparent to-red-800/10"></div>
        </div>

        {/* Animated Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-red-600/15 to-red-800/15 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-red-800/12 to-red-900/12 rounded-full blur-3xl animate-float-medium"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-red-700/10 to-red-900/10 rounded-full blur-3xl animate-float-fast"></div>
        </div>

        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Glowing Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 backdrop-blur-sm border border-red-500/30 rounded-full px-8 py-4 mb-10 shadow-2xl shadow-red-600/25">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-lg shadow-white/50"></div>
              <span className="text-white font-bold text-base tracking-wide">Transform Your Business Today</span>
            </div>

            {/* Stunning Headline */}
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Ready to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 drop-shadow-2xl">
                Transform
              </span>
              <br className="hidden sm:block" />
              Your Business?
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Join <span className="text-red-400 font-bold">200+ Indian businesses</span> that trust our consultancy services for strategic transformation. 
              Let's build your success story together with proven methodologies and expert guidance.
            </p>

            {/* Enhanced Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              <div className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-black bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-3">200+</div>
                  <div className="text-gray-300 font-semibold text-sm tracking-wide">Projects Completed</div>
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-black bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-3">99.9%</div>
                  <div className="text-gray-300 font-semibold text-sm tracking-wide">Client Satisfaction</div>
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-black bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-3">24/7</div>
                  <div className="text-gray-300 font-semibold text-sm tracking-wide">Expert Support</div>
                </div>
              </div>
            </div>

            {/* Stunning CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a 
                href="#consultation-form" 
                className="group relative inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white font-bold text-lg rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-red-600/40 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 tracking-wide">Get Free Consultation</span>
              </a>
              <a 
                href="/contact" 
                className="group inline-flex items-center justify-center px-12 py-5 bg-transparent border-3 border-white/50 hover:border-white text-white hover:bg-white hover:text-gray-900 font-bold text-lg rounded-2xl transition-all duration-500 shadow-2xl backdrop-blur-sm hover:scale-105"
              >
                <ArrowRightIcon className="w-6 h-6 mr-3 group-hover:translate-x-2 transition-transform duration-300" />
                <span className="tracking-wide">Contact Our Team</span>
              </a>
            </div>

            {/* Trust Indicators with Icons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300">
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
                <CheckCircleIcon className="w-6 h-6 text-red-400" />
                <span className="font-semibold">Expert Guidance</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
                <CheckCircleIcon className="w-6 h-6 text-red-400" />
                <span className="font-semibold">Strategic Planning</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
                <CheckCircleIcon className="w-6 h-6 text-red-400" />
                <span className="font-semibold">Proven Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
