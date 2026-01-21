'use client';

import { PhoneIcon, ChatBubbleLeftRightIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function BlogCTA() {
  return (
    <div className="my-16 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-gray-800 shadow-2xl">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Need barcode labels or printing solutions?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            SDB LABEL serves businesses all over India with premium quality labels, thermal printers, and ribbons. Get a customized quote for your manufacturing unit today.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <Link
               href="/get-quotation"
               className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all hover:scale-105"
            >
              <ClipboardDocumentCheckIcon className="w-5 h-5 mr-2" />
              Get Free Quote
            </Link>
            
            <a
               href="https://wa.me/919999999999" // Use actual number 919999...
               target="_blank"
               rel="noopener noreferrer"
               className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all hover:scale-105"
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>

            <a
               href="tel:+919999999999" // Use actual number
               className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl border border-white/20 transition-all hover:scale-105 backdrop-blur-sm"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>

        {/* Visual Element */}
        <div className="hidden lg:block relative">
           <div className="w-48 h-48 bg-gradient-to-tr from-red-600 to-orange-500 rounded-2xl rotate-6 absolute -inset-2 opacity-50 blur"></div>
           <div className="w-48 h-48 bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700 relative shadow-2xl">
             <div className="text-center">
               <span className="block text-4xl font-bold text-white mb-1">20+</span>
               <span className="text-xs text-gray-400 uppercase tracking-widest">Years of<br/>Trust</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
