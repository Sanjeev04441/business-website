'use client'

import { useState } from 'react'
import Navigation from '@/components/NavigationWrapper'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  BuildingOfficeIcon,
  BuildingOffice2Icon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Send data to API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company_name: formData.companyName,
          email: formData.email,
          phone: formData.phoneNumber,
          message: formData.message
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Message sent successfully! We will get back to you soon.')
        
        // Reset form
        setFormData({ name: '', companyName: '', email: '', phoneNumber: '', message: '' })
        
        // Optionally open WhatsApp as well
        openWhatsApp()
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
      setSubmitMessage('There was an error sending your message. Please try again or contact us directly via WhatsApp.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const openWhatsApp = () => {
    // Create WhatsApp message
    const whatsappMessage = `*New Contact Form Submission*

*Name:* ${formData.name}
*Company:* ${formData.companyName}
*Email:* ${formData.email}
*Phone:* ${formData.phoneNumber}

*Message:*
${formData.message}

---
Sent from SDB LABEL Website Contact Form`

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/919625520466?text=${encodedMessage}`
    
    // Check if user is on mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    
    if (isMobile) {
      // On mobile, try to open WhatsApp app directly
      window.location.href = whatsappURL
    } else {
      // On desktop, open WhatsApp Web
      window.open(whatsappURL, '_blank')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: BuildingOfficeIcon,
      title: 'Corporate Office',
      address: '467-483/9 & 10, 2nd Floor Oberoi Compound Near Rajendra Honda Showroom, Dilshad Garden G.T. Road Industrial Area, Pincode: 110095',
      phone: '+91 9654566078',
      email: 'sdblabel@gmail.com'
    },
    {
      icon: BuildingOffice2Icon,
      title: 'Factory Office',
      address: '467-483/9 & 10, 2nd Floor Oberoi Compound Near Rajendra Honda Showroom, Dilshad Garden G.T. Road Industrial Area, Pincode: 110095',
      phone: '+91 9811423374',
      email: 'sdblabel@gmail.com'
    }
  ]

  const teamContacts = [
    {
      designation: 'Relationship Manager',
      name: 'Ambika Prasad',
      phone: '+919654566078'
    },
    {
      designation: 'Production Head',
      name: 'Sanny Prasad',
      phone: '+919811423374'
    },
    {
      designation: 'Marketing Manager',
      name: 'Sanjeev Kumar',
      phone: '+919625520466'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection
        title="Let's"
        subtitle="Connect"
        description="Get in touch with our expert team. We're here to help you find the perfect solutions with lightning-fast response times and personalized support."
        backgroundImageSrc="/images/icon/contact.jpg"
        primaryButton={{
          text: "Send Message",
          href: "#contact-form",
          icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />
        }}
        secondaryButton={{
          text: "Call Now",
          href: "tel:+919654566078",
          icon: <PhoneIcon className="w-5 h-5" />
        }}
        badge={{
          text: "24/7 Support Available"
        }}
      />

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <PaperAirplaneIcon className="w-4 h-4 text-blue-600" />
              Contact Form
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Send us a Message
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible. Your information will be securely stored in our database.
            </p>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg max-w-2xl mx-auto">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <PaperAirplaneIcon className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-green-800">{submitMessage}</p>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg max-w-2xl mx-auto">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <PaperAirplaneIcon className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-red-800">{submitMessage}</p>
                </div>
              </div>
            )}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                    placeholder="+91 9654566078"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-gray-900 placeholder-gray-500"
                    placeholder="Please tell us about your requirements, questions, or any specific information you'd like to share..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
                
                {/* WhatsApp Alternative */}
                <div className="mt-4">
                  <div className="relative flex items-center">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink mx-4 text-gray-600 text-sm">or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                  </div>
                  
                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 mt-4"
                  >
                    <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                    Contact via WhatsApp
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Office Locations
                </h2>
                <p className="text-gray-600 mb-6">
                  We're here to help you with all your business needs. Reach out to us 
                  through any of the following channels for local support and expertise.
                </p>
              </div>

              {/* Office Locations */}
              <div className="space-y-4">
                {contactInfo.map((office, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <office.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {office.title}
                        </h3>
                        <div className="space-y-1 text-gray-600 text-sm">
                          <div className="flex items-start space-x-2">
                            <MapPinIcon className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                            <span>{office.address}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <PhoneIcon className="w-4 h-4 text-gray-500" />
                            <a href={`tel:${office.phone}`} className="hover:text-blue-600">{office.phone}</a>
                          </div>
                          <div className="flex items-center space-x-2">
                            <EnvelopeIcon className="w-4 h-4 text-gray-500" />
                            <a href={`mailto:${office.email}`} className="hover:text-blue-600">{office.email}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Team Contacts inside Office Locations */}
              <div className="pt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Team Contacts</h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  {teamContacts.map((member, idx) => (
                    <div
                      key={idx}
                      className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <span className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500" aria-hidden />

                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold ring-2 ring-gray-100">
                          {member.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')
                            .slice(0, 2)
                            .toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-semibold text-gray-900 truncate">{member.name}</h4>
                          <p className="text-[13px] text-gray-600">{member.designation}</p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-gray-700 text-sm">
                          <PhoneIcon className="w-4 h-4 text-gray-500" />
                          <a href={`tel:${member.phone}`} className="hover:text-blue-600">{member.phone}</a>
                        </div>
                        <a
                          href={`tel:${member.phone}`}
                          className="inline-flex items-center gap-2 rounded-lg border border-blue-600 px-3 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-50"
                          aria-label={`Call ${member.name}`}
                        >
                          <PhoneIcon className="h-4 w-4" />
                          Call now
                        </a>
                      </div>

                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Office Location
            </h2>
            <p className="text-lg text-gray-600">
              Visit us at our corporate office in Delhi
            </p>
          </div>
          
          <div className="w-full h-96 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.1234567890123!2d77.31234567890123!3d28.67890123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1b6b5a5a5a%3A0x1234567890abcdef!2sOberoi%20Compound%2C%20Dilshad%20Garden%2C%20Delhi%2C%20Delhi%20110095!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and get a customized solution 
            for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-quotation" className="bg-gray-900 text-white hover:bg-gray-800 font-semibold py-3 px-6 rounded-lg transition-all duration-300">
              Get Free Quotation
            </a>
            <a href="tel:+919654566078" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}