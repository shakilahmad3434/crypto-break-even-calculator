import React from 'react';
import Navbar from '../components/Features/Navbar';
import Footer from '../components/Features/Footer';
import { Helmet } from 'react-helmet-async';

const Disclaimer = () => {
  // Function to generate section dividers
  const Divider = () => (
    <div className="w-full h-px bg-gradient-to-r from-purple-500/30 via-teal-400/30 to-purple-500/30 my-10"></div>
  );

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
              content="Disclaimer - Crypto Break Even Calculator"
            />
            <meta
              name="description"
              content="The information provided on the Crypto Break Even Calculator is for educational purposes only and should not be considered financial advice. Always conduct your own research before making investment decisions in cryptocurrency."
            />
            <meta
              name="keywords"
              content="crypto disclaimer, cryptocurrency risk warning, Bitcoin investment disclaimer, Ethereum financial disclaimer, crypto break even calculator terms, crypto financial risk notice, crypto profit calculation disclaimer"
            />
            <link rel="canonical" href="https://crypto-news.wiki/disclaimer/" />
            <title>
            Disclaimer Page - Crypto Break Even Calculator
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
              Disclaimer
            </span>
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            At Crypto Calculator, we value your disclaimer and are committed to protecting your personal information.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Last Updated: March 9, 2025
          </p>
        </div>
        
        {/* Content Container */}
        <div className="bg-white/5 rounded-xl p-8 md:p-12">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                1. General Information
              </span>
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
            The information provided by the Crypto Break Even Calculator is for informational and educational purposes only. It is not intended to be financial, investment, or legal advice. Users should conduct their own research before making any financial decisions.
            </p>
          </section>
          
          <Divider />
          
          {/* Financial Advice */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                2. No Financial Advice
              </span>
            </h2>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
            The calculations and results provided by the Crypto Break Even Calculator are based on user inputs and general market conditions. These results should not be interpreted as financial recommendations. We strongly advise consulting a professional financial advisor before making any investment decisions.
            </p>

          </section>
          
          <Divider />
          
          {/* Accuracy of Information */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                3. Accuracy of Information
              </span>
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
            While we strive to ensure the accuracy of the calculations, we do not guarantee that all data provided is free from errors. Cryptocurrency prices, fees, and other financial factors fluctuate rapidly, and our calculator may not always reflect real-time market conditions.
            </p>
          </section>
          
          <Divider />
          
          {/* No Liability */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                4. No Liability
              </span>
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
            We are not responsible for any losses, damages, or financial decisions made based on the use of this calculator. Users agree to use the tool at their own risk.
            </p>
            
          </section>
          
          <Divider />
          
          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                5. Third-Party Links
              </span>
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
            Our website may contain links to third-party sites for additional resources. We do not endorse or take responsibility for the accuracy or content of these external websites.
            </p>
          </section>
          
          <Divider />
          
          {/* Changes to Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                6. Changes to Disclaimer
              </span>
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
            We reserve the right to modify this disclaimer at any time without prior notice. Users are encouraged to review this page periodically to stay updated.
            </p>
            <p className="text-gray-300 leading-relaxed">
            By using the Crypto Break Even Calculator, you acknowledge that you have read and understood this disclaimer and agree to its terms.
            </p>
          </section>
          
          <Divider />
        </div>
        
        {/* Call-to-Action */}
        <div className="text-center py-12 mt-16">
          <p className="text-lg text-gray-300 mb-8">
            Have specific privacy concerns or questions?
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Contact Our Disclaimer Team
          </a>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Disclaimer;