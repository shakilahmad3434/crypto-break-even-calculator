import React, { useEffect, useRef } from 'react'

const Feature = () => {
  const featureRefs = useRef([]);

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

    featureRefs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      featureRefs.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !featureRefs.current.includes(el)) {
      featureRefs.current.push(el);
    }
  };
  const features = [
    {
      title: "Precise Calculations",
      description: "Our algorithm takes into account investment amount, purchase price, and current market conditions to provide accurate break-even pricing.",
      icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
      color: "teal"
    },
    {
      title: "Real-Time Data",
      description: "Access the latest market prices powered by CoinGecko API to ensure your calculations are based on up-to-date information.",
      icon: "M7 12l3-3m0 0l3 3m-3-3v9m12-3a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "purple"
    },
    {
      title: "Profit Visualizations",
      description: "Visual charts and color-coded indicators make it easy to understand your potential profit or loss at a glance.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      color: "blue"
    },
    {
      title: "Secure & Private",
      description: "Your data never leaves your device. All calculations are done client-side, ensuring your investment information remains private.",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      color: "pink"
    },
    {
      title: "Historical Tracking",
      description: "Save your calculations to track your investment performance over time and compare different scenarios.",
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      color: "green"
    },
    {
      title: "Instant Results",
      description: "Get immediate calculation results with smooth animations and no page refreshes required.",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "yellow"
    }
  ];

  return (
    <section id='features' className="min-h-screen flex items-center py-16 px-4 md:px-8 lg:px-16 bg-gray-900">
  <div className="container mx-auto">
    {/* <!-- Section heading --> */}
    <div className="text-center mb-16 animate-on-scroll fade-up" style={{opacity: '1', transform: "translateY(0px)"}}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-teal-300 to-purple-400">
        Powerful Features
      </h2>
      <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
        Our crypto break-even calculator provides advanced tools to help you make informed investment decisions
      </p>
    </div>

    {/* <!-- Feature cards grid --> */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
    {features.map((feature, index) => (
            <div
              key={index}
              ref={addToRefs}
              className={`feature-card bg-gray-800/60 p-6 rounded-2xl border border-purple-900/50 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:border-purple-500/30 animate-on-scroll fade-up delay-${index * 100}`}
            >
              <div className={`text-${feature.color}-400 mb-5 flex items-center justify-center w-14 h-14 rounded-full bg-${feature.color}-500/10 border border-${feature.color}-500/20`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon}></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>
            </div>
          ))}
    </div>

    {/* <!-- CTA Section --> */}
    <div className="mt-16 text-center animate-on-scroll fade-up" style={{opacity: '1', transform: "translateY(0px)"}}>
      <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
        Experience all these powerful features and more. Start making informed crypto investment decisions today.
      </p>
      <a href="/calculator" className="inline-block bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
        Try Our Calculator
      </a>
    </div>
  </div>
</section>
  )
}

export default Feature