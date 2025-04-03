import { useEffect, useRef } from 'react';
import { Bitcoin, Calculator, ChartBar, DollarSign, Users } from 'lucide-react';
import Navbar from '../components/Features/Navbar';
import Footer from '../components/Features/Footer';
import { Helmet } from 'react-helmet-async';

const About = () => {
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
    <>
    <Helmet>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/fevicon.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta name="bingbot" content="index, follow" />
            <meta name="google-adsense-account" content="ca-pub-6449858296576484" />
            <meta
              name="title"
              property="og:title"
              content="About Us - Crypto Break Even Calculator"
            />
            <meta
              name="description"
              content="Learn more about Crypto Break Even Calculator, your go-to tool for calculating cryptocurrency profits and break-even points. Our mission is to help traders and investors make smarter financial decisions in the crypto space."
            />
            <meta
              name="keywords"
              content="about crypto break even calculator, crypto investment tool, about us cryptocurrency, crypto trading profit calculator, bitcoin profit analysis, Ethereum break-even tool, crypto financial calculator"
            />
            <link rel="canonical" href="https://crypto-news.wiki/about/" />
            <title>
            About Us - Crypto Break Even Calculator
            </title>
          </Helmet>
    
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 relative overflow-hidden bg-gray-900">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 40%, rgba(155, 135, 245, 0.4) 0%, transparent 55%)',
            filter: 'blur(80px)'
          }}
        />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">
            <span className="text-gradient">About</span> <span className="text-white">Us</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            The story behind the most trusted cryptocurrency break-even calculator in the market, 
            created by traders and engineers who understand your investment challenges.
          </p>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-8 rounded-2xl" ref={addToRefs}>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-gradient">Our</span> <span className="text-white">Mission</span>
              </h2>
              <p className="text-gray-300 mb-6">
                We empower cryptocurrency investors with precision tools that help them make informed decisions 
                in a volatile market. Our mission is to demystify crypto investments by providing accurate 
                break-even calculations and market insights.
              </p>
              <p className="text-gray-300">
                Founded in 2021 by a team of crypto enthusiasts, data scientists, and financial experts, 
                CryptoCalculator has quickly become the go-to platform for investors seeking clarity in 
                their investment journey.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-crypto-purple/20 to-transparent opacity-70 rounded-full blur-3xl"></div>
              <div className="relative glass-card overflow-hidden rounded-2xl h-72 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Bitcoin size={280} className="text-crypto-purple/20 animate-pulse-gentle" />
                </div>
                <div className="relative z-10 text-center p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Precision & Transparency
                  </h3>
                  <p className="text-gray-300">
                    We believe in providing accurate data without hidden fees or misleading information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-teal-300 to-purple-400">
              <span className="text-gradient">Our</span> <span className="text-white">Team</span>
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Meet the experts behind CryptoCalculator who are passionate about cryptocurrency 
              and committed to helping you succeed in your investments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Williams",
                role: "Founder & CEO",
                bio: "Former hedge fund manager with 10+ years of experience in crypto markets. Alex leads our vision and strategy.",
                delay: "0s",
                color: "teal",
                icon : "https://avatar.iran.liara.run/public/45"
              },
              {
                name: "Sarah Chen",
                role: "Lead Data Scientist",
                bio: "PhD in Financial Mathematics with expertise in predictive modeling. Sarah develops our calculation algorithms.",
                delay: "0.1s",
                color: "blue",
                icon : "https://avatar.iran.liara.run/public/45"
              },
              {
                name: "Michael Torres",
                role: "CTO",
                bio: "Blockchain developer and systems architect who ensures our platform is secure, fast, and reliable.",
                delay: "0.2s",
                color: "purple",
                icon : "https://avatar.iran.liara.run/public/45"
              }
            ].map((member, index) => (
              <div
              key={index}
              ref={addToRefs}
              className={`feature-card bg-gray-800/60 p-6 rounded-2xl flex flex-col items-center border border-purple-900/50 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:border-purple-500/30 animate-on-scroll fade-up delay-${member.delay * 100}`}
            >
              <div className={`text-${member.color}-400 mb-3 flex items-center justify-center w-14 h-14 rounded-full bg-${member.color}-500/10 border border-${member.color}-500/20`}>
              <img src={`${member.icon}`} alt="User Avatar" />
              </div>
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-gray-400 mb-4">{member.role}</p>
              <p className="text-gray-400 mb-4 text-center">{member.bio}</p>
            </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-teal-300 to-purple-400">
              <span className="text-white">Why Choose</span> <span className="text-gradient">Us</span>
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Our calculator isn't just another tool – it's a comprehensive solution designed with 
              the needs of cryptocurrency investors in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Calculator size={36} className="text-crypto-purple" />,
                title: "Precision Calculations",
                color: "teal",
                description: "Our algorithms account for fees, spreads, and market conditions to give you the most accurate break-even prices."
              },
              {
                icon: <ChartBar size={36} className="text-crypto-teal" />,
                title: "Real-Time Data",
                color: "purple",
                description: "We pull data from multiple exchanges and sources to ensure you have the latest market information."
              },
              {
                icon: <DollarSign size={36} className="text-crypto-purple" />,
                title: "Investment Insights",
                color: "blue",
                description: "Beyond calculations, we provide context and insights to help you understand your investment position."
              },
              {
                icon: <Bitcoin size={36} className="text-crypto-teal" />,
                title: "Multi-Crypto Support",
                color: "green",
                description: "Whether you're investing in Bitcoin, Ethereum, or altcoins, our calculator handles them all with equal precision."
              }
            ].map((feature, index) => (
              <div
              key={index}
              ref={addToRefs}
              className={`feature-card bg-gray-800/60 p-6 rounded-2xl border border-purple-900/50 shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:border-purple-500/30 animate-on-scroll fade-up delay-${index * 100}`}
            >
              <div className={`text-${feature.color}-400 mb-5 flex items-center justify-center w-14 h-14 rounded-full bg-${feature.color}-500/10 border border-${feature.color}-500/20`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>
            </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-teal-300 to-purple-400">
              <span className="text-white">What Our</span> <span className="text-gradient">Users Say</span>
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it – here's what cryptocurrency investors like you have to say 
              about CryptoCalculator.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "This calculator has saved me from making costly mistakes. I now know exactly what price I need to break even on my investments.",
                author: "Jordan K.",
                title: "Bitcoin Investor",
                img : "https://avatar.iran.liara.run/public/45",
                color : "purple"
              },
              {
                quote: "The real-time data integration is a game-changer. I can make decisions based on current market conditions rather than outdated information.",
                author: "Mia L.",
                title: "Crypto Trader",
                img : "https://avatar.iran.liara.run/public/45",
                color : "teal"
              },
              {
                quote: "I appreciate the transparency and accuracy of the calculations. This tool has become essential for my investment strategy.",
                author: "Thomas R.",
                title: "Blockchain Entrepreneur",
                img : "https://avatar.iran.liara.run/public/45",
                color : "green"
              }
            ].map((testimonial, index) => (
              <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-purple-900/50 shadow-xl transform transition-all duration-500 hover:shadow-purple-500/20 hover:-translate-y-1 group animate-on-scroll fade-up" ref={addToRefs} key={index}>
          <div className="flex items-center mb-6">
            <div className="mr-4">
              <img src={`${testimonial.img}`} alt="User Avatar" className={`w-12 h-12 rounded-full border-2 border-${testimonial.color}-500/30 group-hover:border-${testimonial.color}-500/50 transition-all duration-300`} />
            </div>
            <div>
              <h4 className="text-white font-bold">{testimonial.author}</h4>
              <p className="text-sm text-gray-400">{testimonial.title}</p>
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
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto relative bg-gradient-to-r from-purple-900/20 to-teal-600/20 p-6 rounded-2xl border border-purple-900/50 shadow-lg transition-all duration-500 transform hover:border-purple-500/30 animate-on-scroll fade-up" ref={addToRefs}>
          <div 
            className="absolute inset-0 opacity-10"
            style={{ 
              background: 'linear-gradient(135deg, rgba(155, 135, 245, 0.4) 0%, rgba(76, 211, 201, 0.4) 100%)',
              filter: 'blur(50px)'
            }}
          />
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to calculate your crypto break-even price?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of investors who use our calculator daily to make smarter investment decisions.
            </p>
            <a href="/calculator" className="inline-block bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
          Try the Calculator Now
        </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
    </>
  );
};

export default About;