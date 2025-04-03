import React from 'react';
import Navbar from '../components/Features/Navbar';
import Footer from '../components/Features/Footer';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
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
                  content="Privacy Policy - Crypto Break Even Calculator"
                />
                <meta
                  name="description"
                  content="Your privacy is important to us. Read our Privacy Policy to understand how we collect, use, and protect your data when using the Crypto Break Even Calculator. We do not share your personal information with third parties."
                />
                <meta
                  name="keywords"
                  content="crypto privacy policy, cryptocurrency data protection, crypto break even calculator privacy, Bitcoin calculator privacy, Ethereum data security, crypto website terms, user data policy"
                />
                <link rel="canonical" href="https://crypto-news.wiki/privacy-policy/" />
                <title>
                Privacy Policy - Crypto Break Even Calculator
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
              Privacy Policy
            </span>
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            At Crypto Calculator, we value your privacy and are committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, and safeguard your data.
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
                1. Introduction
              </span>
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Welcome to the Crypto Break-Even Calculator ("we," "our," or "us"). We respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you use our calculator and associated services.
            </p>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the terms outlined in this policy, please do not use our services.
            </p>
          </section>
          
          <Divider />
          
          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                2. Information We Collect
              </span>
            </h2>
            
            <h3 className="text-xl font-semibold mb-3 text-teal-400">2.1 Information You Provide</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We may collect personal information that you voluntarily provide when using our services, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
              <li>Contact information (such as name and email address) when you register for an account or contact our support team</li>
              <li>Financial information related to your cryptocurrency investments for calculation purposes</li>
              <li>Account credentials, including your username and password</li>
              <li>Any other information you choose to provide in communications with us</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3 text-teal-400">2.2 Information Collected Automatically</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              When you use our services, we may automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
              <li>Device information (such as IP address, browser type, operating system)</li>
              <li>Usage data (such as pages visited, time spent on site, referring URLs)</li>
              <li>Cookies and similar tracking technologies (as detailed in our Cookie Policy)</li>
            </ul>
          </section>
          
          <Divider />
          
          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                3. How We Use Your Information
              </span>
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
              <li>Providing and maintaining our services, including processing your calculations</li>
              <li>Personalizing your experience and improving our calculator functionality</li>
              <li>Communicating with you about updates, security alerts, and support messages</li>
              <li>Analyzing usage patterns to improve our services</li>
              <li>Detecting, preventing, and addressing technical issues</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>
          
          <Divider />
          
          {/* Data Sharing and Disclosure */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                4. Data Sharing and Disclosure
              </span>
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              We may share your information with third parties in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
              <li>With service providers who help us operate our business and deliver services</li>
              <li>To comply with legal obligations, such as responding to lawful requests from public authorities</li>
              <li>To protect our rights, privacy, safety, or property, as well as that of our users or others</li>
              <li>In connection with a business transaction, such as a merger, acquisition, or sale of assets</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              We do not sell your personal information to third parties.
            </p>
          </section>
          
          <Divider />
          
          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                5. Data Security
              </span>
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure hosting, and regular security assessments.
            </p>
            <p className="text-gray-300 leading-relaxed">
              While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or method of electronic storage is 100% secure. We cannot guarantee absolute security of your data.
            </p>
          </section>
          
          <Divider />
          
          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                6. Your Rights
              </span>
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction of inaccurate data</li>
              <li>The right to request deletion of your data</li>
              <li>The right to restrict or object to processing of your data</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>
          </section>
          
          <Divider />
          
          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                7. Children's Privacy
              </span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without verification of parental consent, we will take steps to remove that information from our servers.
            </p>
          </section>
          
          <Divider />
          
          {/* Changes to this Privacy Policy */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                8. Changes to this Privacy Policy
              </span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>
          
          <Divider />
          
          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                9. Contact Us
              </span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-gradient-to-r from-purple-900/20 to-teal-600/20 p-6 rounded-xl">
              <p className="text-gray-300 mb-2">Email: <span className="text-teal-400">privacy@cryptocalculator.com</span></p>
              <p className="text-gray-300 mb-2">Address: 123 Blockchain Avenue, Suite 456, San Francisco, CA 94105</p>
              <p className="text-gray-300">Phone: <span className="text-teal-400">+1 (555) 123-4567</span></p>
            </div>
          </section>
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
            Contact Our Privacy Team
          </a>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default PrivacyPolicy;