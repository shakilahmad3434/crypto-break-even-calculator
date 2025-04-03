import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <div>
    <nav className="bg-gray-900 border-b border-purple-900 py-4 px-6 md:px-12">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-white font-bold text-xl flex items-center">
            <span className="text-purple-500 mr-1">Crypto</span>
            <span className="text-teal-400">Calculator</span>
          </a>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li><a href="/" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Home</a></li>
            <li><a href="/#calculator" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Calculator</a></li>
            <li><a href="/#features" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Features</a></li>
            <li><a href="/#faq" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">FAQ</a></li>
            <li><a href="/about" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">About Us</a></li>
          </ul>
          <a href="/calculator" className="bg-gradient-to-r from-purple-600 to-teal-500 text-white px-6 py-2 rounded-full font-medium hover:from-purple-700 hover:to-teal-600 transition-all duration-300">Try Now</a>
        </div>

        <div className="lg:hidden">
          <button  type="button" className="text-gray-300 hover:text-white focus:outline-none cursor-pointer" aria-label="Toggle menu" onClick={()=> setIsOpen(prev => !prev)}>
            <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{display: "none"}}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
      {
        isOpen &&
      <div className={'lg:hidden'} x-transition:enter="transition ease-out duration-100 transform" x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100" x-transition:leave="transition ease-in duration-75 transform" x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95">
        <ul className="flex flex-col space-y-4 pb-4">
        <li><a href="/" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Home</a></li>
        <li><a href="/#calculator" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Calculator</a></li>
        <li><a href="/#features" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Features</a></li>
        <li><a href="/#faq" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">FAQ</a></li>
        <li><a href="/about" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">About Us</a></li>
          <li className="pt-2">
            <a href="/calculator" className="block w-full text-center bg-gradient-to-r from-purple-600 to-teal-500 text-white px-6 py-2 rounded-full font-medium hover:from-purple-700 hover:to-teal-600 transition-all duration-300">Try Now</a>
          </li>
        </ul>
      </div>
      }
    </nav>
  </div>
  )
}

export default Navbar