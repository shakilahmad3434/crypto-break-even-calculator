import React, { useEffect, useRef } from 'react'

const Reviews = () => {

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

  const Testimonial = [
    {
      img : "https://avatar.iran.liara.run/public/45",
      name : "Alex Thompson",
      subName : "Alex Thompson",
      color : "purple",
      quote : "This calculator has been a game-changer for my crypto investments. I can quickly determine my break-even points across different assets and make more informed decisions on when to buy or sell.",
      review : 5.0
    },
    {
      img : "https://avatar.iran.liara.run/public/32",
      name : "Samantha Chen",
      subName : "Long-term Investor",
      color : "teal",
      quote : "I love how this calculator not only shows my break-even price but also visualizes my current position relative to it. The real-time market data integration is extremely helpful for planning my DCA strategy.",
      review : 5.0
    },
    {
      img : "https://avatar.iran.liara.run/public/28",
      name : "Marcus Johnson",
      subName : "Crypto Analyst",
      color : "blue",
      quote : "As someone who analyzes crypto markets professionally, I appreciate the accuracy and clean interface of this tool. The ability to factor in exchange fees is a thoughtful addition that many other calculators miss.",
      review : 4.9
    },
    {
      img : "https://avatar.iran.liara.run/public/25",
      name : "Rachael Torres",
      subName : "Crypto Enthusiast",
      color : "pink",
      quote : "I'm fairly new to crypto investing, and this calculator has been an educational tool as much as a practical one. The visual indicators make it easy to understand my position and the tooltips explain everything clearly.",
      review : 4.8
    },
    {
      img : "https://avatar.iran.liara.run/public/42",
      name : "David Kim",
      subName : "Portfolio Manager",
      color : "green",
      quote : "I manage multiple crypto portfolios and this calculator has become an essential part of my workflow. Being able to quickly assess break-even points across different assets and time periods saves me hours each week.",
      review : 4.7
    },
    {
      img : "https://avatar.iran.liara.run/public/36",
      name : "Olivia Williams",
      subName : "Blockchain Developer",
      color : "yellow",
      quote : "From a technical standpoint, this calculator is impressively accurate. I appreciate the clean UI and the responsive design that works well on any device. The loading animations are a nice touch too!",
      review : 4.6
    }
  ]

  return (
    <section className="min-h-screen flex items-center py-16 px-4 md:px-8 lg:px-16 bg-gray-900 relative overflow-hidden">
    {/* Background elements */}
    <div className="absolute inset-0 bg-gradient-to-tl from-gray-900 via-purple-900/10 to-gray-900 opacity-60"></div>
    <div className="absolute top-20 right-10 text-teal-500/5 text-9xl">"</div>
    <div className="absolute bottom-20 left-10 text-purple-500/5 text-9xl">"</div>
    
    <div className="container mx-auto relative z-10">
      {/* Section heading */}
      <div className="text-center mb-16 animate-on-scroll fade-up" ref={addToRefs}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-teal-300 to-purple-400">
          What Users Say
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
          Learn how our crypto break-even calculator is helping investors make smarter decisions
        </p>
      </div>

      {/* Testimonials grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {
          Testimonial.map((testimonial, index) => (
            <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-purple-900/50 shadow-xl transform transition-all duration-500 hover:shadow-purple-500/20 hover:-translate-y-1 group animate-on-scroll fade-up" ref={addToRefs} key={index}>
          <div className="flex items-center mb-6">
            <div className="mr-4">
              <img src={`${testimonial.img}`} alt="User Avatar" className={`w-12 h-12 rounded-full border-2 border-${testimonial.color}-500/30 group-hover:border-${testimonial.color}-500/50 transition-all duration-300`} />
            </div>
            <div>
              <h4 className="text-white font-bold">{testimonial.name}</h4>
              <p className="text-sm text-gray-400">{testimonial.subName}</p>
            </div>
            <div className={`ml-auto text-${testimonial.color}-400 opacity-80`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
              </svg>
            </div>
          </div>
          <p className="text-gray-300 mb-4">{testimonial.quote}</p>
          <div className="flex items-center">
            <div className="flex mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <span className="text-gray-400 text-sm">{testimonial.review}</span>
          </div>
        </div>
          ))
        }
        

      </div>
      
      {/* Stats section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-on-scroll fade-up delay-300" ref={addToRefs}>
        <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-purple-900/50 shadow-xl text-center">
          <div className="text-3xl md:text-4xl font-bold text-white mb-2">5,000+</div>
          <p className="text-gray-400">Active users</p>
        </div>
        <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-purple-900/50 shadow-xl text-center">
          <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 mb-2">25,000+</div>
          <p className="text-gray-400">Calculations performed</p>
        </div>
        <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-purple-900/50 shadow-xl text-center">
          <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.9</div>
          <p className="text-gray-400">Average rating</p>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="text-center animate-on-scroll fade-up delay-400" ref={addToRefs}>
        <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
          Join thousands of crypto investors who are making smarter decisions with our calculator
        </p>
        <a href="/calculator" className="inline-block bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
          Try the Calculator Now
        </a>
      </div>
    </div>
  </section>
  )
}

export default Reviews