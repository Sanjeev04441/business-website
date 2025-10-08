'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface CalculatorParams {
  material?: string;
  width?: number;
  height?: number;
  unit?: string;
  colours?: number;
  quantity?: number;
  location?: string;
}

interface Message {
  text: string;
  type: 'bot' | 'user';
}

export default function PriceCalculator() {
  const [messages, setMessages] = useState<Message[]>([
    { text: '🤖 Want to calculate price for your labels?', type: 'bot' }
  ]);
  const [params, setParams] = useState<CalculatorParams>({});
  const [currentStep, setCurrentStep] = useState<'start' | 'material' | 'size' | 'colours' | 'quantity' | 'location' | 'submit' | 'result'>('start');
  const [isProcessing, setIsProcessing] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (text: string, type: 'bot' | 'user' = 'bot') => {
    setMessages(prev => [...prev, { text, type }]);
  };

  const startCalculation = () => {
    setParams({});
    setCurrentStep('material');
    setIsProcessing(false);
    addMessage('Please select material:');
  };

  const goBack = () => {
    // Remove last 2 messages (bot question and user answer)
    setMessages(prev => prev.slice(0, -2));
    
    // Go back to previous step and clear relevant params
    switch (currentStep) {
      case 'material':
        setCurrentStep('start');
        setParams({});
        break;
      case 'size':
        setCurrentStep('material');
        setParams(prev => ({ ...prev, width: undefined, height: undefined, unit: undefined }));
        addMessage('Going back... Please select material again:');
        break;
      case 'colours':
        setCurrentStep('size');
        setParams(prev => ({ ...prev, colours: undefined }));
        addMessage('Going back... Enter width and height, then choose unit:');
        break;
      case 'quantity':
        setCurrentStep('colours');
        setParams(prev => ({ ...prev, quantity: undefined }));
        addMessage('Going back... Select number of colours (0 = plain):');
        break;
      case 'location':
        setCurrentStep('quantity');
        setParams(prev => ({ ...prev, location: undefined }));
        addMessage('Going back... Enter quantity:');
        break;
      case 'submit':
        setCurrentStep('location');
        setParams(prev => ({ ...prev, location: undefined }));
        addMessage('Going back... Select location:');
        break;
      default:
        break;
    }
    setIsProcessing(false);
  };

  const setMaterial = (material: string) => {
    // Prevent duplicate calls by checking if we're already past material step
    if (isProcessing || currentStep !== 'material') {
      return;
    }
    setIsProcessing(true);
    setParams(prev => ({ ...prev, material }));
    addMessage(`Material: ${material}`, 'user');
    addMessage('Enter width and height, then choose unit:');
    setCurrentStep('size');
    setTimeout(() => setIsProcessing(false), 100);
  };

  const setSize = (width: number, height: number, unit: string) => {
    if (!width || !height || width <= 0 || height <= 0) {
      alert('Enter valid width and height');
      return;
    }
    // Prevent duplicate calls by checking if we're already past size step
    if (isProcessing || currentStep !== 'size') {
      return;
    }
    setIsProcessing(true);
    setParams(prev => ({ ...prev, width, height, unit }));
    addMessage(`Size: ${width} x ${height} ${unit}`, 'user');
    addMessage('Select number of colours (0 = plain):');
    setCurrentStep('colours');
    setTimeout(() => setIsProcessing(false), 100);
  };

  const setColours = (colours: number) => {
    // Prevent duplicate calls by checking if we're already past colours step
    if (isProcessing || currentStep !== 'colours') {
      return;
    }
    setIsProcessing(true);
    setParams(prev => ({ ...prev, colours }));
    addMessage(`Colours: ${colours}`, 'user');
    addMessage('Enter quantity:');
    setCurrentStep('quantity');
    setTimeout(() => setIsProcessing(false), 100);
  };

  const setQuantity = (quantity: number) => {
    if (!quantity || quantity <= 0) {
      alert('Enter a valid quantity');
      return;
    }
    // Prevent duplicate calls
    if (isProcessing || currentStep !== 'quantity') {
      return;
    }
    setIsProcessing(true);
    setParams(prev => ({ ...prev, quantity }));
    addMessage(`Quantity: ${quantity}`, 'user');
    addMessage('Select location:');
    setCurrentStep('location');
    // Reset processing flag after a short delay
    setTimeout(() => setIsProcessing(false), 100);
  };

  const setLocation = (location: string) => {
    // Prevent duplicate calls by checking if we're already past location step
    if (isProcessing || currentStep !== 'location') {
      return;
    }
    console.log('Setting location:', location, 'Current step:', currentStep);
    setIsProcessing(true);
    
    // Update params and messages first
    setParams(prev => ({ ...prev, location }));
    addMessage(`Location: ${location}`, 'user');
    addMessage('Ready to calculate? Click Submit to get your price!');
    
    // Force immediate state update by using a callback
    setCurrentStep(prevStep => {
      console.log('Previous step:', prevStep, 'Setting to submit');
      return 'submit';
    });
    
    // Reset processing flag
    setIsProcessing(false);
  };

  const calculateAndShow = () => {
    if (!params.width || !params.height || !params.unit || !params.material || 
        params.colours === undefined || !params.quantity || !params.location) {
      return;
    }

    const wIn = params.unit === 'mm' ? params.width / 25.4 : (params.unit === 'cm' ? params.width / 2.54 : params.width);
    const hIn = params.unit === 'mm' ? params.height / 25.4 : (params.unit === 'cm' ? params.height / 2.54 : params.height);
    const area = wIn * hIn;

    const basePaise = params.material === 'Chrome' ? 3.5 : 5.0;
    const colourIncrease = 0.10 * Math.min(params.colours, 6);
    const adjustedBasePaise = basePaise * (1 + colourIncrease);
    const adjustedBaseRupeePerSqIn = adjustedBasePaise / 100;

    const perLabelBeforeDiscount = area * adjustedBaseRupeePerSqIn;
    const totalBeforeDiscount = perLabelBeforeDiscount * params.quantity;
    const minMov = params.location === 'Delhi-ncr' ? 10000 : 20000;

    if (totalBeforeDiscount < minMov) {
      addMessage(`❌ Not eligible. Minimum order is ₹${minMov} for ${params.location}.`);
      setCurrentStep('result');
      return;
    }

    const discRules = params.material === 'Chrome' ? { firstPct: 0.08, repeatPct: 0.05 } : { firstPct: 0.10, repeatPct: 0.06 };
    let discountMultiplier = 1.0;
    let threshold = minMov * 2;
    let stepCount = 0;
    while (totalBeforeDiscount >= threshold) {
      discountMultiplier *= (stepCount === 0 ? 1 - discRules.firstPct : 1 - discRules.repeatPct);
      stepCount++;
      threshold *= 2;
    }

    const effectiveRupeePerSqIn = adjustedBaseRupeePerSqIn * discountMultiplier;
    const finalPerLabel = area * effectiveRupeePerSqIn;
    const finalTotal = finalPerLabel * params.quantity;

    addMessage(`✅ You are eligible for online order.\n💰 Total Amount: ₹${finalTotal.toFixed(2)}`);
    setCurrentStep('result');
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Chat Area */}
      <div 
        ref={chatBodyRef}
        className="h-80 bg-gradient-to-br from-indigo-50 to-blue-50 p-4 overflow-y-auto"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 p-4 rounded-2xl max-w-[85%] flex items-start gap-3 ${
              message.type === 'bot' 
                ? 'bg-white shadow-md border border-indigo-100 self-start' 
                : 'bg-indigo-600 text-white self-end'
            }`}
          >
            {message.type === 'bot' && (
              <div className="w-8 h-8 bg-indigo-600 rounded-full relative flex-shrink-0 mt-1">
                <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            )}
            <span className="whitespace-pre-line text-sm leading-relaxed">{message.text}</span>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="border-t border-gray-200 p-4 bg-gray-50">
        {currentStep === 'start' && (
          <div className="flex gap-3">
            <button
              onClick={startCalculation}
              className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              ✅ Yes, Calculate Price
            </button>
            <button
              onClick={() => addMessage('❌ No problem!')}
              className="flex-1 px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              ❌ No Thanks
            </button>
          </div>
        )}

        {currentStep === 'material' && (
          <div className="space-y-4">
            <div className="flex gap-3">
              <button
                onClick={goBack}
                className="px-4 py-3 bg-gray-400 hover:bg-gray-500 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                title="Go Back"
              >
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMaterial('Chrome')}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                ✨ Chrome
              </button>
              <button
                onClick={() => setMaterial('Polyster')}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                🎨 Polyster
              </button>
            </div>
          </div>
        )}

        {currentStep === 'size' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Width</label>
                <input
                  id="width"
                  type="number"
                  placeholder="Enter width"
                  className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      const width = parseFloat((document.getElementById('width') as HTMLInputElement)?.value || '0');
                      const height = parseFloat((document.getElementById('height') as HTMLInputElement)?.value || '0');
                      const unit = (document.getElementById('unit') as HTMLSelectElement)?.value || 'mm';
                      setSize(width, height, unit);
                    }
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Height</label>
                <input
                  id="height"
                  type="number"
                  placeholder="Enter height"
                  className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={goBack}
                className="px-4 py-3 bg-gray-400 hover:bg-gray-500 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                title="Go Back"
              >
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
              <select
                id="unit"
                className="flex-1 p-3 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 font-semibold"
              >
                <option value="mm">📏 mm</option>
                <option value="cm">📐 cm</option>
                <option value="in">📏 inch</option>
              </select>
              <button
                onClick={() => {
                  const width = parseFloat((document.getElementById('width') as HTMLInputElement)?.value || '0');
                  const height = parseFloat((document.getElementById('height') as HTMLInputElement)?.value || '0');
                  const unit = (document.getElementById('unit') as HTMLSelectElement)?.value || 'mm';
                  setSize(width, height, unit);
                }}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                ➡️ Next Step
              </button>
            </div>
          </div>
        )}

        {currentStep === 'colours' && (
          <div className="space-y-4">
            <button
              onClick={goBack}
              className="px-4 py-3 bg-gray-400 hover:bg-gray-500 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 mb-3"
              title="Go Back"
            >
              <ArrowLeftIcon className="w-5 h-5 inline mr-2" />
              Back
            </button>
            <div className="grid grid-cols-4 gap-2">
              {[0, 1, 2, 3, 4, 5, 6].map((color) => (
                <button
                  key={color}
                  onClick={() => setColours(color)}
                  className={`p-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                    color === 0 
                      ? 'bg-gray-500 text-white hover:bg-gray-600' 
                      : `bg-gradient-to-r from-${['gray', 'red', 'blue', 'green', 'yellow', 'purple', 'pink'][color]}-400 to-${['gray', 'red', 'blue', 'green', 'yellow', 'purple', 'pink'][color]}-500 text-white hover:from-${['gray', 'red', 'blue', 'green', 'yellow', 'purple', 'pink'][color]}-500 hover:to-${['gray', 'red', 'blue', 'green', 'yellow', 'purple', 'pink'][color]}-600`
                  }`}
                >
                  {color === 0 ? '⚪ Plain' : `🎨 ${color}`}
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 'quantity' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">📦 Quantity</label>
              <div className="flex gap-3">
                <button
                  onClick={goBack}
                  className="px-4 py-3 bg-gray-400 hover:bg-gray-500 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  title="Go Back"
                >
                  <ArrowLeftIcon className="w-5 h-5" />
                </button>
                <input
                  id="quantity"
                  type="number"
                  placeholder="Enter quantity (e.g., 1000)"
                  className="flex-1 p-3 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      const quantity = parseInt((e.target as HTMLInputElement)?.value || '0');
                      setQuantity(quantity);
                    }
                  }}
                />
                <button
                  onClick={() => {
                    const quantity = parseInt((document.getElementById('quantity') as HTMLInputElement)?.value || '0');
                    setQuantity(quantity);
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  ➡️ Next Step
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">💡 Enter the number of labels you need</p>
            </div>
          </div>
        )}

        {currentStep === 'location' && (
          <div className="space-y-4">
            <div className="flex gap-3">
              <button
                onClick={goBack}
                className="px-4 py-3 bg-gray-400 hover:bg-gray-500 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                title="Go Back"
              >
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => setLocation('Delhi-ncr')}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                🏙️ Delhi-NCR
              </button>
              <button
                onClick={() => setLocation('Outside')}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                🌍 Outside Delhi-NCR
              </button>
            </div>
          </div>
        )}

        {currentStep === 'submit' && (
          <div className="space-y-4">
            <div className="flex gap-3">
              <button
                onClick={goBack}
                className="px-4 py-4 bg-gray-400 hover:bg-gray-500 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                title="Go Back"
              >
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => calculateAndShow()}
                className="flex-1 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
              >
                🚀 Submit & Calculate Price
              </button>
            </div>
          </div>
        )}

        {currentStep === 'result' && (
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                setMessages([{ text: '🤖 Want to calculate price for your labels?', type: 'bot' }]);
                setCurrentStep('start');
                setParams({});
                setIsProcessing(false);
              }}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🔄 New Calculation
            </button>
            <a
              href="/contact"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-xl hover:from-red-700 hover:to-rose-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
            >
              📞 Contact Now
            </a>
          </div>
        )}
      </div>
    </div>
  );
}