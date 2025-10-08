'use client';

import { useState, useEffect } from 'react';
import PriceCalculator from './PriceCalculator';

export default function FloatingPriceCalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [eyeGlow, setEyeGlow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setEyeGlow(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Floating Robot Button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* Animated Tooltip */}
        <div className="absolute bottom-24 right-0 bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 text-white text-sm px-4 py-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-2xl border border-indigo-500/50 backdrop-blur-lg">
          <div className="flex items-center gap-2">
            <span className="animate-pulse">💰</span>
            <span className="font-semibold">Calculate Label Prices</span>
          </div>
          <div className="absolute top-full right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-indigo-900"></div>
        </div>
        
        {/* 3D Robot Button */}
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-20 h-20 cursor-pointer transform hover:scale-110 transition-all duration-500 hover:rotate-12"
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          {/* Outer Glow Ring */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow opacity-75 blur-md"></div>
          
          {/* Robot Head Container */}
          <div className="relative w-full h-full bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden border-2 border-indigo-400/50">
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            
            {/* Circuit Pattern Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-cyan-400 rounded-tl-lg"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-cyan-400 rounded-br-lg"></div>
            </div>
            
            {/* Robot Face */}
            <div className="relative z-10">
              {/* Antenna */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gradient-to-t from-cyan-400 to-transparent">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50"></div>
              </div>
              
              {/* Robot Eyes */}
              <div className="flex gap-3 mb-2">
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${eyeGlow ? 'bg-cyan-400 shadow-lg shadow-cyan-400/80' : 'bg-cyan-300 shadow-md shadow-cyan-300/50'}`}></div>
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${eyeGlow ? 'bg-cyan-400 shadow-lg shadow-cyan-400/80' : 'bg-cyan-300 shadow-md shadow-cyan-300/50'}`}></div>
              </div>
              
              {/* Robot Mouth */}
              <div className="flex gap-1 items-center justify-center">
                <div className="w-1.5 h-1.5 bg-cyan-300 rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-cyan-300 rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-cyan-300 rounded-sm"></div>
              </div>
            </div>

            {/* Scanning Line Animation */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 animate-scan"></div>
            </div>
          </div>

          {/* Pulsing Ring Effect */}
          <div className="absolute inset-0 rounded-2xl bg-indigo-400 animate-ping opacity-20"></div>
        </div>
      </div>

      {/* Stunning Robot Calculator Window */}
      {isOpen && (
        <>
          {/* Backdrop Blur */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-fadeIn"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Robot Calculator Panel */}
          <div className="fixed bottom-28 right-6 z-50 w-[95vw] sm:w-[500px] lg:w-[600px] xl:w-[700px] animate-slideUpBounce">
            {/* Holographic Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-3xl opacity-75 blur-lg animate-pulse-slow"></div>
            
            {/* Main Window */}
            <div className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl shadow-2xl border border-cyan-500/50 overflow-hidden">
              {/* Animated Background Grid */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>

              {/* Top Header Bar */}
              <div className="relative bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-indigo-900/80 backdrop-blur-xl border-b border-cyan-500/30 px-6 py-4">
                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-cyan-400/50 rounded-tl-3xl"></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-cyan-400/50 rounded-tr-3xl"></div>
                
                <div className="flex items-center gap-4 relative z-10">
                  {/* Animated Robot Avatar */}
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-float">
                      {/* Robot Face */}
                      <div className="relative">
                        <div className="flex gap-2 mb-1">
                          <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                          <div className="w-2 h-2 rounded-full bg-white animate-pulse delay-100"></div>
                        </div>
                        <div className="flex gap-1 justify-center">
                          <div className="w-1 h-1 bg-white rounded-sm"></div>
                          <div className="w-1 h-1 bg-white rounded-sm"></div>
                          <div className="w-1 h-1 bg-white rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    {/* Pulse Ring */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400 animate-ping opacity-50"></div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      LabelBot AI Assistant
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50"></div>
                      <p className="text-xs text-cyan-300 font-medium">Online & Ready to Help</p>
                    </div>
                  </div>
                  
                  {/* Control Buttons */}
                  <div className="flex items-center gap-2">
                    {/* Minimize */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(false);
                      }}
                      className="w-10 h-10 bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-500/50 rounded-xl flex items-center justify-center text-yellow-400 transition-all duration-200 hover:scale-110 group"
                      title="Minimize"
                    >
                      <span className="text-xl group-hover:animate-bounce">−</span>
                    </button>
                    
                    {/* Help */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        alert('🤖 LabelBot helps you calculate sticker label prices instantly!\n\n✨ Features:\n• Instant price calculation\n• Multiple material options\n• Custom sizes supported\n• Bulk quantity discounts\n\nJust follow the steps!');
                      }}
                      className="w-10 h-10 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 rounded-xl flex items-center justify-center text-cyan-400 transition-all duration-200 hover:scale-110 hover:rotate-12"
                      title="Help"
                    >
                      <span className="text-lg font-bold">?</span>
                    </button>
                    
                    {/* Close */}
                    <button 
                      onClick={() => setIsOpen(false)}
                      className="w-10 h-10 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 rounded-xl flex items-center justify-center text-red-400 transition-all duration-200 hover:scale-110 hover:rotate-90 group"
                      title="Close"
                    >
                      <span className="text-2xl group-hover:animate-spin">×</span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Calculator Content with Holographic Effect */}
              <div className="relative p-6">
                {/* Holographic Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
                
                <div className="relative max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-slate-800">
                  <PriceCalculator />
                </div>
              </div>

              {/* Bottom Decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 animate-shimmer"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
}