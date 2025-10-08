'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ShieldCheckIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information that you provide directly to us, including:\n• Name and contact information (email, phone number, address)\n• Business details and company information\n• Payment and billing information\n• Communication preferences\n• Information provided through forms, quotations, and consultancy requests"
        },
        {
          subtitle: "Automatically Collected Information",
          text: "When you visit our website, we automatically collect:\n• IP address and browser type\n• Device information and operating system\n• Pages visited and time spent on our website\n• Referral sources and navigation patterns\n• Cookies and similar tracking technologies"
        }
      ]
    },
    {
      title: "2. How We Use Your Information",
      content: [
        {
          subtitle: "",
          text: "We use the collected information for the following purposes:\n• Processing and fulfilling your orders for labels, hardware, and software\n• Providing consultancy services and customer support\n• Sending quotations and responding to inquiries\n• Improving our products, services, and website functionality\n• Sending promotional materials and updates (with your consent)\n• Complying with legal obligations and preventing fraud\n• Analyzing website usage and performance\n• Maintaining security and preventing unauthorized access"
        }
      ]
    },
    {
      title: "3. Information Sharing and Disclosure",
      content: [
        {
          subtitle: "",
          text: "We do not sell your personal information. We may share your information with:\n• Service providers who assist in our operations (payment processors, shipping companies)\n• Business partners for order fulfillment and delivery\n• Legal authorities when required by law or to protect our rights\n• Third parties with your explicit consent\n\nAll third parties are contractually obligated to maintain the confidentiality and security of your information."
        }
      ]
    },
    {
      title: "4. Data Security",
      content: [
        {
          subtitle: "",
          text: "We implement industry-standard security measures to protect your personal information:\n• Secure Socket Layer (SSL) encryption for data transmission\n• Secure servers and database encryption\n• Regular security audits and updates\n• Access controls and authentication measures\n• Employee training on data protection\n\nWhile we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security."
        }
      ]
    },
    {
      title: "5. Cookies and Tracking Technologies",
      content: [
        {
          subtitle: "",
          text: "We use cookies and similar technologies to:\n• Remember your preferences and settings\n• Analyze website traffic and user behavior\n• Provide personalized content and advertisements\n• Improve website performance and functionality\n\nYou can control cookies through your browser settings. However, disabling cookies may limit some website features."
        }
      ]
    },
    {
      title: "6. Your Rights and Choices",
      content: [
        {
          subtitle: "",
          text: "Under applicable data protection laws, you have the right to:\n• Access the personal information we hold about you\n• Request correction of inaccurate or incomplete information\n• Request deletion of your personal information\n• Object to or restrict certain processing activities\n• Withdraw consent for marketing communications\n• Data portability (receiving your data in a structured format)\n• Lodge a complaint with supervisory authorities\n\nTo exercise these rights, please contact us at sdblabel@gmail.com"
        }
      ]
    },
    {
      title: "7. Data Retention",
      content: [
        {
          subtitle: "",
          text: "We retain your personal information for as long as necessary to:\n• Fulfill the purposes outlined in this Privacy Policy\n• Comply with legal, accounting, or reporting requirements\n• Resolve disputes and enforce our agreements\n• Maintain business records\n\nWhen information is no longer needed, we will securely delete or anonymize it."
        }
      ]
    },
    {
      title: "8. Children's Privacy",
      content: [
        {
          subtitle: "",
          text: "Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately."
        }
      ]
    },
    {
      title: "9. International Data Transfers",
      content: [
        {
          subtitle: "",
          text: "Your information may be transferred to and processed in countries other than India. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable laws."
        }
      ]
    },
    {
      title: "10. Third-Party Links",
      content: [
        {
          subtitle: "",
          text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites. We encourage you to review their privacy policies before providing any information."
        }
      ]
    },
    {
      title: "11. Updates to This Privacy Policy",
      content: [
        {
          subtitle: "",
          text: "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The updated policy will be posted on this page with the revision date. We encourage you to review this policy regularly."
        }
      ]
    },
    {
      title: "12. Contact Information",
      content: [
        {
          subtitle: "",
          text: "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:\n\nSDB LABEL\n467-483/9 & 10, 2nd Floor Oberoi Compound,\nDilshad Garden G.T. Road Industrial Area,\nDelhi 110095, India\n\nEmail: sdblabel@gmail.com\nPhone: +91 9654566078\nBusiness Hours: Monday-Saturday, 9:00 AM - 6:00 PM (IST)"
        }
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            href="/"
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors group"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6"
          >
            <ShieldCheckIcon className="w-16 h-16 text-white/90" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4"
          >
            Privacy Policy
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-center text-white/90 max-w-3xl mx-auto"
          >
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-center text-white/80 mt-4"
          >
            Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-600"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              SDB LABEL (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using our website and services, you agree to the terms outlined in this Privacy Policy. If you do not agree with our practices, please do not use our website or services.
            </p>
          </motion.div>

          {/* Policy Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="mb-8 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm mr-3">
                  {index + 1}
                </span>
                {section.title.replace(/^\d+\.\s/, '')}
              </h2>
              
              {section.content.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-4 last:mb-0">
                  {item.subtitle && (
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {item.subtitle}
                    </h3>
                  )}
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              ))}
            </motion.div>
          ))}

          {/* Compliance Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance and Governance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              SDB LABEL is committed to complying with applicable data protection laws and regulations in India, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Information Technology Act, 2000</li>
              <li>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
              <li>Other applicable Indian privacy and data protection regulations</li>
            </ul>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions or Concerns?</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy or our data practices, we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
