import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-10 pb-10 px-4 md:px-8 lg:px-16 relative overflow-hidden">
    {/* Background gradient element */}
    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-gray-900 opacity-60"></div>
    
    <div className="container mx-auto relative z-10">
      
      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center" >
        <div className="mb-4 md:mb-0" >
          <p className="text-gray-500 text-sm" >
            © 2025 Crypto Calculator. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 text-sm" >
          <a href="/" className="text-gray-500 hover:text-gray-400 transition-colors duration-300" >Home</a>
          <a href="/about" className="text-gray-500 hover:text-gray-400 transition-colors duration-300" >About us</a>
          <a href="/contact" className="text-gray-500 hover:text-gray-400 transition-colors duration-300" >Contact us</a>
          <a href="/privacy-policy" className="text-gray-500 hover:text-gray-400 transition-colors duration-300" >Privacy Policy</a>
          <a href="/disclaimer" className="text-gray-500 hover:text-gray-400 transition-colors duration-300" >Disclaimer</a>
        </div>
      </div>
      
      {/* Back to top button */}
      <div className="fixed bottom-6 right-6 z-50" >
        <a href="#hero" className="flex items-center justify-center w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-purple-900/50 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 group" >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400 group-hover:text-teal-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" ></path>
          </svg>
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer