import React, { useEffect, useRef } from 'react'

const Works = () => {

  const animationRefs = useRef([]);
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
              }
            });
          },
          { threshold: 0.1 }
        );
    
        animationRefs.current.forEach((element) => {
          if (element) observer.observe(element);
        });
    
        return () => {
          animationRefs.current.forEach((element) => {
            if (element) observer.unobserve(element);
          });
        };
      }, []);
    
      const addToRefs = (el) => {
        if (el && !animationRefs.current.includes(el)) {
          animationRefs.current.push(el);
        }
      };

  return (
    <section id='how-it-works' className="min-h-screen flex items-center py-16 px-4 md:px-8 lg:px-16 bg-gray-900 relative overflow-hidden">
    {/* Background elements */}
    <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-purple-900/10 to-gray-900 opacity-60" ></div>
    <div className="absolute top-20 left-10 text-purple-500/5 text-7xl font-bold" >[]</div>
    <div className="absolute bottom-20 right-10 text-teal-500/5 text-7xl font-bold" >{}</div>
    
    <div className="container mx-auto relative z-10" >
      {/* Section heading */}
      <div className="text-center mb-16 animate-on-scroll fade-up" ref={addToRefs}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-teal-300 to-purple-400" >
          How It Works
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto" >
          Our cryptocurrency break-even calculator helps you make data-driven investment decisions with just a few simple steps
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-5xl mx-auto" >
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center mb-16 md:mb-24 relative animate-on-scroll fade-up" ref={addToRefs}>
          {/* Step Number */}
          <div className="absolute -left-4 md:-left-8 top-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 items-center justify-center text-white text-2xl font-bold z-10 hidden md:flex" >
            1
          </div>
          
          {/* Connection line */}
          <div className="hidden md:block absolute left-0 top-16 bottom-0 w-0.5 h-[calc(100%+4rem)] bg-gradient-to-b from-purple-600 to-teal-500 opacity-30 -z-10" ></div>
          
          {/* Step content for mobile */}
          <div className="md:hidden flex items-center mb-6" >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white text-xl font-bold mr-4" >
              1
            </div>
            <h3 className="text-xl font-bold text-white" >Enter Investment Details</h3>
          </div>
          
          {/* Content box */}
          <div className="w-full md:w-2/5 mb-8 md:mb-0 md:pr-8" >
            <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-purple-900/50 shadow-xl h-full transform transition-all duration-500 hover:shadow-purple-600/10 hover:border-purple-700/30 group" >
              <h3 className="text-xl font-bold text-white mb-4 hidden md:block" >Enter Investment Details</h3>
              <p className="text-gray-400 mb-5" >Begin by entering your investment amount and the purchase price of the cryptocurrency. You can also specify the quantity of coins and any applicable exchange fees.</p>
              <div className="bg-gray-900/70 p-4 rounded-xl border border-gray-700" >
                <div className="flex items-center mb-3" >
                  <div className="w-9 h-9 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mr-3" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" ></path>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" ></path>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300" >Investment amount and purchase price</span>
                </div>
                <div className="flex items-center" >
                  <div className="w-9 h-9 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 mr-3" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" >
                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" ></path>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300" >Optional: exchange fees and quantity</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Illustration */}
          <div className="w-full md:w-3/5" >
            <div className="bg-gray-800/60 backdrop-blur-sm p-2 md:p-4 rounded-2xl border border-purple-900/50 shadow-xl overflow-hidden" >
              <div className="bg-gray-900 rounded-xl p-4 md:p-6" >
                <div className="space-y-3" >
                  <div >
                    <label className="block text-gray-400 text-sm mb-1" >Investment Amount</label>
                    <div className="relative" >
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-teal-400" >$</span>
                      <div className="w-full bg-gray-800 border border-gray-700 text-white py-2 pl-8 pr-3 rounded-lg" >1,000.00</div>
                    </div>
                  </div>
                  <div >
                    <label className="block text-gray-400 text-sm mb-1" >Purchase Price</label>
                    <div className="relative" >
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-teal-400" >$</span>
                      <div className="w-full bg-gray-800 border border-gray-700 text-white py-2 pl-8 pr-3 rounded-lg" >30,000.00</div>
                    </div>
                  </div>
                  <div className="animate-pulse-subtle" >
                    <label className="block text-gray-400 text-sm mb-1" >Exchange Fee</label>
                    <div className="relative" >
                      <div className="w-full bg-gray-800 border border-gray-700 text-white py-2 px-3 rounded-lg" >1.5%</div>
                      <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-teal-400" >%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-16 md:mb-24 relative animate-on-scroll fade-up delay-100" ref={addToRefs}>
          {/* Step Number */}
          <div className="absolute -right-4 md:-right-8 top-0 w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 items-center justify-center text-white text-2xl font-bold z-10 hidden md:flex" >
            2
          </div>
          
          {/* Step content for mobile */}
          <div className="md:hidden flex items-center mb-6" >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white text-xl font-bold mr-4" >
              2
            </div>
            <h3 className="text-xl font-bold text-white" >Calculate Break-Even</h3>
          </div>
          
          {/* Content box */}
          <div className="w-full md:w-2/5 mb-8 md:mb-0 md:pl-8" >
            <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-purple-900/50 shadow-xl h-full transform transition-all duration-500 hover:shadow-teal-600/10 hover:border-teal-700/30 group" >
              <h3 className="text-xl font-bold text-white mb-4 hidden md:block" >Calculate Break-Even</h3>
              <p className="text-gray-400 mb-5" >With a single click, our algorithm calculates your break-even price, taking into account your investment amount, purchase price, and any additional fees you may have incurred.</p>
              <div className="bg-gray-900/70 p-4 rounded-xl border border-gray-700" >
                <div className="flex items-center mb-3" >
                  <div className="w-9 h-9 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 mr-3" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" ></path>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300" >Incorporates exchange fees</span>
                </div>
                <div className="flex items-center" >
                  <div className="w-9 h-9 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mr-3" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" >
                      <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" ></path>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300" >One-click calculation</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Illustration */}
          <div className="w-full md:w-3/5" >
            <div className="bg-gray-800/60 backdrop-blur-sm p-2 md:p-4 rounded-2xl border border-purple-900/50 shadow-xl overflow-hidden" >
              <div className="bg-gray-900 rounded-xl p-4 md:p-6 relative" >
                <div className="flex justify-center mb-6" >
                  <button className="bg-gradient-to-r from-purple-600 to-teal-500 text-white font-bold py-3 px-6 rounded-lg transform transition hover:scale-105 hover:shadow-glow" >
                    <span className="flex items-center" >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" >
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" ></path>
                      </svg>
                      Calculate Break-Even
                    </span>
                  </button>
                </div>
                
                {/* Loading Animation */}
                <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center rounded-xl animate-pulse-fast" >
                  <div className="flex flex-col items-center" >
                    <div className="mb-4" >
                      <div className="w-12 h-12 border-t-4 border-b-4 border-teal-500 rounded-full animate-spin" ></div>
                    </div>
                    <p className="text-teal-400 text-sm font-medium" >Calculating...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center relative animate-on-scroll fade-up delay-200" ref={addToRefs}>
          {/* Step Number */}
          <div className="absolute -left-4 md:-left-8 top-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center text-white text-2xl font-bold z-10 hidden md:flex" >
            3
          </div>
          
          {/* Step content for mobile */}
          <div className="md:hidden flex items-center mb-6" >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold mr-4" >
              3
            </div>
            <h3 className="text-xl font-bold text-white" >Analyze Results</h3>
          </div>
          
          {/* Content box */}
          <div className="w-full md:w-2/5 mb-8 md:mb-0 md:pr-8" >
            <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-purple-900/50 shadow-xl h-full transform transition-all duration-500 hover:shadow-blue-600/10 hover:border-blue-700/30 group" >
              <h3 className="text-xl font-bold text-white mb-4 hidden md:block" >Analyze Results</h3>
              <p className="text-gray-400 mb-5" >Review your break-even price along with useful metrics such as current profitability status and distance to break-even. Our visual indicators make it easy to understand your position at a glance.</p>
              <div className="bg-gray-900/70 p-4 rounded-xl border border-gray-700" >
                <div className="flex items-center mb-3" >
                  <div className="w-9 h-9 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mr-3" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" >
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" ></path>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300" >Visual profit/loss indicators</span>
                </div>
                <div className="flex items-center" >
                  <div className="w-9 h-9 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 mr-3" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" >
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" ></path>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300" >Detailed investment summary</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Illustration */}
          <div className="w-full md:w-3/5" >
            <div className="bg-gray-800/60 backdrop-blur-sm p-2 md:p-4 rounded-2xl border border-purple-900/50 shadow-xl overflow-hidden" >
              <div className="bg-gray-900 rounded-xl p-4 md:p-6" >
                {/* Results Summary */}
                <div className="space-y-4" >
                  {/* Break-Even Price */}
                  <div className="bg-gray-800/60 p-4 rounded-xl border border-gray-700" >
                    <p className="text-gray-400 text-xs mb-1" >Break-Even Price</p>
                    <div className="flex items-end justify-between" >
                      <p className="text-xl font-bold text-white" >$33,250.00</p>
                      <p className="text-teal-400 text-xs" >+8.33% from purchase</p>
                    </div>
                  </div>
                  
                  {/* Current Status */}
                  <div className="bg-gray-800/60 p-4 rounded-xl border border-gray-700" >
                    <div className="flex justify-between items-center" >
                      <div >
                        <p className="text-gray-400 text-xs mb-1" >Current Status</p>
                        <p className="text-lg font-bold text-yellow-400" >Close to Break-Even</p>
                      </div>
                      <div className="w-16 h-16 rounded-full border-4 border-gray-700 flex items-center justify-center" >
                        <span className="text-lg font-bold text-yellow-400" >92%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Final CTA */}
      <div className="text-center mt-20 animate-on-scroll fade-up delay-300" ref={addToRefs}>
        <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto" >
          Ready to calculate your crypto break-even price and track your investment profitability?
        </p>
        <a href="/calculator" className="inline-block bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25" >
          Try the Calculator Now
        </a>
      </div>
    </div>
  </section>
  )
}

export default Works