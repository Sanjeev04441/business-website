'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { DocumentTextIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function TermsOfService() {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        {
          subtitle: "",
          text: "By accessing and using the SDB LABEL website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.\n\nThese terms constitute a legally binding agreement between you and SDB LABEL. We reserve the right to modify these terms at any time, and such modifications will be effective immediately upon posting to the website."
        }
      ]
    },
    {
      title: "2. Description of Services",
      content: [
        {
          subtitle: "",
          text: "SDB LABEL provides the following services:\n• Manufacturing and supply of labels (sticker labels, barcode labels, RFID labels, etc.)\n• Supply of hardware (printers, scanners, POS systems, etc.)\n• Software solutions (inventory management, ERP systems, asset management, etc.)\n• Business consultancy services\n• Custom quotations and product specifications\n\nWe reserve the right to modify, suspend, or discontinue any service at any time without prior notice."
        }
      ]
    },
    {
      title: "3. User Obligations",
      content: [
        {
          subtitle: "",
          text: "By using our services, you agree to:\n• Provide accurate, current, and complete information\n• Maintain the confidentiality of your account credentials\n• Use our services only for lawful purposes\n• Not engage in any activity that disrupts or interferes with our services\n• Not attempt to gain unauthorized access to our systems\n• Not use our services to transmit harmful, offensive, or illegal content\n• Comply with all applicable laws and regulations\n• Respect intellectual property rights"
        }
      ]
    },
    {
      title: "4. Orders and Quotations",
      content: [
        {
          subtitle: "Quotations",
          text: "Quotations provided are estimates and may be subject to change based on:\n• Material costs and availability\n• Order quantities and specifications\n• Delivery location and requirements\n• Market conditions\n\nQuotations are valid for 30 days unless otherwise specified."
        },
        {
          subtitle: "Orders",
          text: "When you place an order:\n• You are making an offer to purchase products or services\n• We reserve the right to accept or decline any order\n• Order acceptance is confirmed via email or written communication\n• All orders are subject to product availability\n• Minimum order quantities may apply for certain products"
        },
        {
          subtitle: "Cancellations and Modifications",
          text: "Order cancellations or modifications must be requested in writing. Cancellation policies:\n• Orders not yet in production: Full refund minus administrative charges\n• Orders in production: Cancellation subject to costs incurred\n• Customized orders: Generally non-cancellable once production begins"
        }
      ]
    },
    {
      title: "5. Pricing and Payment",
      content: [
        {
          subtitle: "Pricing",
          text: "• All prices are in Indian Rupees (INR) unless otherwise stated\n• Prices are subject to change without notice\n• Prices exclude applicable taxes (GST) unless specified\n• Shipping and delivery charges are additional\n• Bulk orders may qualify for volume discounts"
        },
        {
          subtitle: "Payment Terms",
          text: "• Payment terms are specified in the quotation or invoice\n• We accept various payment methods: bank transfer, credit/debit cards, UPI, etc.\n• For new customers, advance payment may be required\n• Credit terms are subject to approval and credit limit\n• Late payments may incur interest charges\n• We reserve the right to suspend services for non-payment"
        }
      ]
    },
    {
      title: "6. Delivery and Shipping",
      content: [
        {
          subtitle: "",
          text: "Delivery Terms:\n• Estimated delivery times are approximate and not guaranteed\n• Delivery is subject to product availability and order confirmation\n• Shipping costs are borne by the customer unless otherwise agreed\n• Risk of loss passes to the customer upon delivery\n• We are not liable for delays caused by circumstances beyond our control\n• Customers must inspect deliveries upon receipt and report damages within 48 hours\n\nShipping locations:\n• We ship across India\n• International shipping may be available upon request\n• Remote locations may incur additional charges"
        }
      ]
    },
    {
      title: "7. Returns and Refunds",
      content: [
        {
          subtitle: "Return Policy",
          text: "Returns are accepted under the following conditions:\n• Products must be unused, in original packaging\n• Return request must be made within 7 days of delivery\n• Return authorization must be obtained prior to shipping\n• Custom or personalized products are non-returnable\n• Hardware returns are subject to manufacturer's warranty terms\n• Return shipping costs are borne by the customer unless product is defective"
        },
        {
          subtitle: "Refund Policy",
          text: "• Refunds are processed within 7-14 business days of return approval\n• Refunds are issued to the original payment method\n• Shipping charges are non-refundable\n• Restocking fees may apply (up to 20% for non-defective returns)\n• Defective products: Full refund or replacement at customer's choice"
        }
      ]
    },
    {
      title: "8. Warranties and Guarantees",
      content: [
        {
          subtitle: "Product Warranties",
          text: "• Labels and printed materials: Warranty against manufacturing defects for 90 days\n• Hardware: Covered by manufacturer's warranty (terms vary by product)\n• Software: 30-day money-back guarantee if software does not perform as described\n\nWarranty does not cover:\n• Normal wear and tear\n• Damage from misuse, abuse, or improper storage\n• Modifications or alterations by unauthorized parties\n• Force majeure events"
        },
        {
          subtitle: "Disclaimer",
          text: "EXCEPT AS EXPRESSLY PROVIDED, ALL PRODUCTS AND SERVICES ARE PROVIDED \"AS IS\" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT."
        }
      ]
    },
    {
      title: "9. Intellectual Property Rights",
      content: [
        {
          subtitle: "",
          text: "All content on this website, including text, graphics, logos, images, software, and designs, is the property of SDB LABEL or its licensors and is protected by copyright, trademark, and other intellectual property laws.\n\nYou may not:\n• Copy, reproduce, or distribute our content without permission\n• Use our trademarks, logos, or brand names without authorization\n• Reverse engineer or decompile our software\n• Create derivative works based on our content\n\nCustomer designs and artwork:\n• Customers retain ownership of their original designs\n• By submitting designs, customers grant us a license to use them for order fulfillment\n• We respect customer confidentiality and do not share designs with third parties"
        }
      ]
    },
    {
      title: "10. Limitation of Liability",
      content: [
        {
          subtitle: "",
          text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW:\n\n• SDB LABEL shall not be liable for any indirect, incidental, consequential, or punitive damages\n• Our total liability shall not exceed the amount paid by you for the specific product or service giving rise to the claim\n• We are not liable for business losses, lost profits, lost data, or business interruption\n• We are not liable for delays or failures due to circumstances beyond our control\n\nExceptions:\n• Liability for death or personal injury caused by negligence\n• Liability for fraud or fraudulent misrepresentation\n• Any other liability that cannot be excluded by law"
        }
      ]
    },
    {
      title: "11. Indemnification",
      content: [
        {
          subtitle: "",
          text: "You agree to indemnify, defend, and hold harmless SDB LABEL, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:\n\n• Your violation of these Terms of Service\n• Your use of our products or services\n• Your violation of any third-party rights\n• Any content or information you provide to us\n• Your negligence or willful misconduct"
        }
      ]
    },
    {
      title: "12. Confidentiality",
      content: [
        {
          subtitle: "",
          text: "We respect the confidentiality of customer information:\n\n• Business information, designs, and specifications are kept confidential\n• We do not share customer information with competitors\n• Non-disclosure agreements are available upon request\n• Employees are bound by confidentiality obligations\n\nYou agree to keep confidential any proprietary information disclosed to you by SDB LABEL."
        }
      ]
    },
    {
      title: "13. Force Majeure",
      content: [
        {
          subtitle: "",
          text: "SDB LABEL shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including:\n\n• Natural disasters (floods, earthquakes, storms, etc.)\n• Acts of war, terrorism, or civil unrest\n• Government actions, regulations, or restrictions\n• Pandemics or epidemics\n• Labor strikes or disputes\n• Supplier failures or material shortages\n• Power outages or internet disruptions\n\nDuring force majeure events, our obligations are suspended for the duration of the event."
        }
      ]
    },
    {
      title: "14. Dispute Resolution",
      content: [
        {
          subtitle: "Negotiation",
          text: "In the event of any dispute, the parties agree to first attempt to resolve the matter through good-faith negotiation."
        },
        {
          subtitle: "Arbitration",
          text: "If negotiation fails, disputes shall be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in Delhi, India, and the language shall be English."
        },
        {
          subtitle: "Jurisdiction",
          text: "These terms are governed by the laws of India. Courts in Delhi shall have exclusive jurisdiction for any matters not subject to arbitration."
        }
      ]
    },
    {
      title: "15. Severability",
      content: [
        {
          subtitle: "",
          text: "If any provision of these Terms of Service is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect."
        }
      ]
    },
    {
      title: "16. Entire Agreement",
      content: [
        {
          subtitle: "",
          text: "These Terms of Service, together with our Privacy Policy and any written agreements, constitute the entire agreement between you and SDB LABEL regarding the use of our services."
        }
      ]
    },
    {
      title: "17. Contact Information",
      content: [
        {
          subtitle: "",
          text: "For questions about these Terms of Service, please contact us:\n\nSDB LABEL\n467-483/9 & 10, 2nd Floor Oberoi Compound,\nDilshad Garden G.T. Road Industrial Area,\nDelhi 110095, India\n\nEmail: sdblabel@gmail.com\nPhone: +91 9654566078\nBusiness Hours: Monday-Saturday, 9:00 AM - 6:00 PM (IST)"
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
            <DocumentTextIcon className="w-16 h-16 text-white/90" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4"
          >
            Terms of Service
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-center text-white/90 max-w-3xl mx-auto"
          >
            Please read these terms carefully before using our services
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
              Welcome to SDB LABEL. These Terms of Service (&quot;Terms&quot;) govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please read these Terms carefully. If you do not agree to these Terms, you may not access or use our services.
            </p>
          </motion.div>

          {/* Terms Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.03 }}
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

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Notice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms of Service are effective as of the date stated above. We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For the most current version of our Terms of Service, please visit this page regularly.
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Terms?</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions or concerns about these Terms of Service, please don&apos;t hesitate to reach out.
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
