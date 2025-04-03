import React, { useEffect, useRef } from 'react'

const Newslatter = () => {

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

    const News = [
      {
        color: "purple",
        des: "Weekly market summaries"
      },
      {
        color: "teal",
        des: "Tool updates and new features"
      },
      {
        color: "blue",
        des: "Educational crypto content"
      },
      {
        color: "pink",
        des: "Exclusive investment strategies"
      }
    ]

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900 relative overflow-hidden">
    {/* Background elements */}
    <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-purple-900/10 to-gray-900 opacity-60"></div>
    <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/5 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-600/5 rounded-full filter blur-3xl"></div>
    
    <div className="container mx-auto max-w-5xl relative z-10">
      <div className="bg-gray-800/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-purple-900/50 shadow-xl animate-on-scroll fade-up" ref={addToRefs}>
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column: Content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-10">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-500/20 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Stay Updated</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter to receive market insights, calculator updates, and crypto investment tips directly to your inbox.
            </p>
            <div className="space-y-4">
              {
                News.map((item, index) => (
                  <div className="flex items-center" key={index}>
                <div className={`flex-shrink-0 w-8 h-8 bg-${item.color}-500/20 rounded-full flex items-center justify-center mr-3`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-${item.color}-400`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="text-gray-300 text-sm">{item.des}</p>
              </div>
                ))
              }
          
            </div>
          </div>
          
          {/* Right Column: Form */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-inner">
              <h3 className="text-lg font-bold text-white mb-4">Subscribe to Our Newsletter</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="full-name" className="block text-gray-400 text-sm mb-1">Full Name</label>
                  <input type="text" id="full-name" placeholder="John Doe" className="w-full bg-gray-800 border border-gray-700 text-white py-3 px-4 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-400 text-sm mb-1">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" className="w-full bg-gray-800 border border-gray-700 text-white py-3 px-4 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300" />
                </div>
                
                <div>
                  <label className="flex items-center text-gray-400 text-sm">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-teal-500 rounded bg-gray-800 border-gray-700 focus:ring-0" />
                    <span className="ml-2">I agree to receive marketing emails</span>
                  </label>
                </div>
                
                <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/25 flex items-center justify-center">
                  <span>Subscribe Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
                
                <p className="text-gray-500 text-xs text-center mt-4">
                  We respect your privacy. You can unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonial Quote */}
      <div className="mt-16 text-center animate-on-scroll fade-up delay-100" ref={addToRefs}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-400/40 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
        </svg>
        <p className="text-gray-300 text-lg md:text-xl italic max-w-3xl mx-auto mb-4">
          "The weekly market insights helped me time my crypto investments better. This newsletter is a must for anyone serious about cryptocurrency investing."
        </p>
        <div className="flex items-center justify-center">
          <img src="https://avatar.iran.liara.run/public/28" alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-purple-500/30 mr-3" />
          <div className="text-left">
            <p className="text-white font-medium">Michael Rodriguez</p>
            <p className="text-gray-400 text-sm">Investment Analyst</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Newslatter