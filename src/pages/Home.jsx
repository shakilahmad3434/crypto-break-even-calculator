import React from "react";
import Hero from "../components/Features/Hero";
import Navbar from "../components/Features/Navbar";
import Feature from "../components/Features/Feature";
import CalculatorCard from "../components/Features/CalculatorCard";
import Works from "../components/Features/Works";
import Reviews from "../components/Features/Reviews";
import Faqs from "../components/Features/Faqs";
import Newslatter from "../components/Features/Newslatter";
import Footer from "../components/Features/Footer";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
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
          content="🚀 Crypto Break Even Calculator – Calculate Your Profit & Loss Easily"
        />
        <meta
          name="description"
          content="Use our Crypto Break Even Calculator to quickly determine when your investment becomes profitable. Enter your buy price, fees, and selling price to calculate break-even points for Bitcoin, Ethereum, and other cryptocurrencies."
        />
        <meta
          name="keywords"
          content="crypto break even calculator, cryptocurrency profit calculator, crypto ROI calculator, bitcoin breakeven, Ethereum break-even calculator, crypto investment tool, crypto trading calculator, digital currency profit calculator"
        />
        <link rel="canonical" href="https://crypto-news.wiki/" />
        <title>
          🚀 Crypto Break Even Calculator – Calculate Your Profit & Loss Easily
        </title>
      </Helmet>
      <Navbar />
      <Hero />
      <Feature />
      <CalculatorCard />
      <Works />
      <Reviews />
      <Faqs />
      <Newslatter />
      <Footer />
    </div>
  );
};

export default Home;
