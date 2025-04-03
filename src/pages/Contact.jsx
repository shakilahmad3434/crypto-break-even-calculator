import { useEffect, useRef, useState } from 'react';
import { Bitcoin, Calculator, ChartBar, DollarSign, Users } from 'lucide-react';
import Navbar from '../components/Features/Navbar';
import Footer from '../components/Features/Footer';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message
    alert('Thank you for your message. We will get back to you soon!');
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
              content="Contact Us - Get in Touch with Crypto Break Even Calculator Team"
            />
            <meta
              name="description"
              content="Have questions or need support? Contact the Crypto Break Even Calculator team for assistance with crypto profit calculations, break-even analysis, and investment insights. We're here to help!"
            />
            <meta
              name="keywords"
              content="contact crypto calculator team, crypto break even support, cryptocurrency help, Bitcoin profit calculator support, Ethereum break-even assistance, crypto trading queries, crypto investment support"
            />
            <link rel="canonical" href="https://crypto-news.wiki/contact/" />
            <title>
            Contact Us - Get in Touch with Crypto Break Even Calculator Team
            </title>
          </Helmet>
    
    <div className="bg-[#0e1126] text-white">
      <Navbar />
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Hero Section */}
        <div className="text-center py-16 px-4 mb-16 bg-gradient-to-r from-purple-900/10 to-teal-600/10 rounded-2xl">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Have questions or feedback about our Crypto Break-Even Calculator? We're here to help.
            Our team is ready to assist you with any inquiries.
          </p>
        </div>
        
        {/* Contact Form and Info Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          {/* Contact Form */}
          <div className="bg-white/5 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                Send Us a Message
              </span>
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0e1126] border border-gray-700 rounded-lg p-3 text-white focus:border-teal-400 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0e1126] border border-gray-700 rounded-lg p-3 text-white focus:border-teal-400 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0e1126] border border-gray-700 rounded-lg p-3 text-white focus:border-teal-400 focus:outline-none"
                  placeholder="How can we help?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-[#0e1126] border border-gray-700 rounded-lg p-3 text-white focus:border-teal-400 focus:outline-none resize-none"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full inline-block bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h2>
            
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Email Contact */}
              <div className="bg-white/5 rounded-xl p-6 flex items-start">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center text-xl mr-4 flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-300 mb-1">General Inquiries:</p>
                  <p className="text-teal-400 font-medium">support@cryptocalculator.com</p>
                  <p className="text-gray-300 mb-1 mt-3">Partnership Opportunities:</p>
                  <p className="text-teal-400 font-medium">partners@cryptocalculator.com</p>
                </div>
              </div>
              
              {/* Support Hours */}
              <div className="bg-white/5 rounded-xl p-6 flex items-start">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center text-xl mr-4 flex-shrink-0">
                  🕒
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Support Hours</h3>
                  <p className="text-gray-300 mb-1">Monday - Friday:</p>
                  <p className="text-teal-400 font-medium">9:00 AM - 6:00 PM UTC</p>
                  <p className="text-gray-300 mb-1 mt-3">Weekend:</p>
                  <p className="text-teal-400 font-medium">10:00 AM - 2:00 PM UTC</p>
                </div>
              </div>
              
              {/* Follow Us */}
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center text-xl hover:opacity-90 transition-opacity">
                    𝕏
                  </a>
                  <a href="#" className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center text-xl hover:opacity-90 transition-opacity">
                    📘
                  </a>
                  <a href="#" className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center text-xl hover:opacity-90 transition-opacity">
                    📸
                  </a>
                  <a href="#" className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center text-xl hover:opacity-90 transition-opacity">
                    🔗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* FAQ Item 1 */}
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">How accurate is the break-even calculator?</h3>
              <p className="text-gray-300 leading-relaxed">
                Our calculator uses real-time market data and advanced algorithms to provide highly accurate break-even price predictions. However, cryptocurrency markets are volatile, and results should be used as guidance rather than guarantees.
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">What cryptocurrencies do you support?</h3>
              <p className="text-gray-300 leading-relaxed">
                We currently support all major cryptocurrencies including Bitcoin, Ethereum, Solana, and many others. We're constantly adding support for additional tokens based on user requests.
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Is there a mobile app available?</h3>
              <p className="text-gray-300 leading-relaxed">
                Yes! Our mobile app is available for both iOS and Android devices. You can download it from the respective app stores to calculate break-even prices on the go.
              </p>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Do you offer premium features?</h3>
              <p className="text-gray-300 leading-relaxed">
                We offer a premium subscription that includes advanced analytics, portfolio tracking, price alerts, and export capabilities. Visit our Pricing page to learn more about our subscription plans.
              </p>
            </div>
          </div>
        </div>
        
        {/* Call-to-Action */}
        <div className="text-center py-16 px-4 bg-gradient-to-r from-purple-900/20 to-teal-600/20 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">
            Ready to make informed crypto investment decisions?
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-300">
            Try our Crypto Break-Even Calculator today and take the guesswork out of your investment strategy.
          </p>
          <a href="/calculator" className="inline-block bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
          Try the Calculator Now
        </a>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Contact;