import React, { useEffect, useRef, useState } from "react";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function to handle opening/closing an FAQ item
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle or close
  };

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

  const FaqsQuestions = [
    {
      q: "What is a crypto break-even price?",
      a: `<p className="text-gray-300">
                A break-even price is the price at which your cryptocurrency investment returns exactly what you put in—no profit, no loss. It accounts for your initial investment amount, the purchase price, and any associated fees. Understanding your break-even point is crucial for making informed decisions about when to sell or hold your crypto assets.
              </p>`,
    },
    {
      q: "How does the calculator work?",
      a: `<p className="text-gray-300 mb-3">
                Our calculator determines your break-even price using several key inputs:
              </p>
              <ol className="list-decimal list-inside text-gray-300 space-y-2 pl-2">
                <li>Your initial investment amount (how much money you put in)</li>
                <li>The price at which you purchased the cryptocurrency</li>
                <li>Any exchange or transaction fees you incurred</li>
                <li>Optionally, the quantity of coins purchased</li>
              </ol>
              <p className="text-gray-300 mt-3">
                We then apply a formula that accounts for these variables to calculate the exact price at which you would recover your investment. The calculator also provides visual indicators and percentage calculations to show how close you are to your break-even point.
              </p>`,
    },
    {
      q: "Where does the price data come from?",
      a: `<p className="text-gray-300">
                Our calculator integrates with the CoinGecko API, which provides real-time and historical price data for thousands of cryptocurrencies. When you use the "Fetch Current Price" feature, we pull the latest market data directly from CoinGecko to ensure you're working with up-to-date information. This integration allows you to make calculations based on current market conditions without having to manually look up prices elsewhere.
              </p>`,
    },
    {
      q: "Is my data secure when using the calculator?",
      a: `<p className="text-gray-300">
                Yes, your data is completely secure. Our calculator processes all information client-side, meaning your investment details never leave your device or browser. We don't store any of your financial information on our servers. The only external data we access is the cryptocurrency pricing information from the CoinGecko API. Your privacy and security are our top priorities.
              </p>`,
    },
    {
      q: "Can I save my calculation results?",
      a: `<p className="text-gray-300">
                Yes, our calculator allows you to save your results for future reference. You can either export the data as a CSV file for record-keeping or use the "Save Results" button to store the calculation in your browser's local storage. This feature is particularly useful if you want to track multiple investments or compare different scenarios over time. Your saved calculations will be available until you clear your browser data.
              </p>`,
    },
    {
      q: "Does the calculator account for taxes?",
      a: `<p className="text-gray-300">
                Currently, our basic calculator does not account for tax implications, as tax regulations for cryptocurrency vary widely by country and jurisdiction. The break-even price calculated is based purely on your investment amount, purchase price, and fees. For tax-adjusted break-even analyses, we recommend consulting with a tax professional who specializes in cryptocurrency investments. We're considering adding a tax estimation feature in future updates.
              </p>`,
    },
    {
      q: "Can I calculate break-even for multiple purchases?",
      a: `<p className="text-gray-300">
                Yes, our calculator can handle average cost calculations for multiple purchases of the same cryptocurrency. If you've made several investments at different prices (dollar-cost averaging), you can either:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mt-3 pl-2">
                <li>Enter the total amount invested and use the weighted average purchase price</li>
                <li>Calculate each investment separately and compare the results</li>
              </ul>
              <p className="text-gray-300 mt-3">
                We're working on adding a dedicated DCA calculator feature in a future update that will allow you to enter multiple purchase points and automatically calculate the aggregate break-even price.
              </p>`,
    },
  ];

  return (
    <section id="faq" className="min-h-screen flex items-center py-16 px-4 md:px-8 lg:px-16 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 opacity-60"></div>
      <div className="absolute top-20 left-10 text-purple-500/5 text-9xl">
        ?
      </div>
      <div className="absolute bottom-20 right-10 text-teal-500/5 text-9xl">
        ?
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section heading */}
        <div
          className="text-center mb-16 animate-on-scroll fade-up"
          ref={addToRefs}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-teal-300 to-purple-400">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Find answers to common questions about our crypto break-even
            calculator
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {FaqsQuestions.map((faq, index) => (
            <div
              className="mb-5 animate-on-scroll fade-up"
              ref={addToRefs}
              key={index}
            >
              <div className="bg-gray-800/60 backdrop-blur-sm border border-purple-900/50 rounded-xl shadow-lg overflow-hidden">
                {/* FAQ Header */}
                <button
                  className="flex items-center justify-between w-full p-5 text-left transition-colors bg-gray-800/80"
                  onClick={() => toggleAnswer(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className="text-white font-medium text-lg"
                  >
                    {faq.q}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 text-purple-400 transition-transform duration-300 ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {/* FAQ Content */}
                {openIndex === index && (
                  <div
                    className="p-5 border-t border-gray-700 bg-gray-800/30 text-white"
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  >
                    {/* here is a content  */}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div
          className="max-w-4xl mx-auto mt-12 animate-on-scroll fade-up delay-600"
          ref={addToRefs}
        >
          <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-purple-900/50 shadow-xl text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              If you couldn't find the answer you were looking for, feel free to
              reach out to our support team. We're here to help!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
