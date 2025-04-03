import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Features/Navbar";
import Footer from "../components/Features/Footer";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
    <Helmet>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/fevicon.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="robots" content="noindex, follow" />
            <meta name="googlebot" content="noindex, follow" />
            <meta name="bingbot" content="noindex, follow" />
            <meta name="google-adsense-account" content="ca-pub-6449858296576484" />
            <meta
              name="title"
              property="og:title"
              content="404 Not Found - Crypto Break Even Calculator"
            />
            <meta
              name="description"
              content="Oops! The page you’re looking for doesn’t exist. Return to the Crypto Break Even Calculator homepage or explore other tools to calculate your crypto profits and break-even points."
            />
            <meta
              name="keywords"
              content="404 page not found, crypto calculator error, missing crypto page, Bitcoin calculator not found, Ethereum page missing, crypto break even tool 404, broken crypto link"
            />
            <link rel="canonical" href="https://crypto-news.wiki/" />
            <title>
            404 Not Found - Crypto Break Even Calculator
            </title>
          </Helmet>
    <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
        404
      </h1>
      <p className="text-xl mt-4 text-gray-300">Oops! The page you're looking for doesn't exist.</p>
      <div className="mt-6">
        <Link to="/" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-md hover:opacity-90 transition">
          Go Home
        </Link>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default NotFound;
