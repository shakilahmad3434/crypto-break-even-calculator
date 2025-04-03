import React, { useEffect, useState } from "react";

const Hero = () => {
  const [investment, setInvestment] = useState(1000);
  const [purchasePrice, setPurchasePrice] = useState(30000);
  const [currentPrice, setCurrentPrice] = useState(32500);
  const [breakEvenPrice, setBreakEvenPrice] = useState(null);
  const [percentageIncrease, setPercentageIncrease] = useState(null);

  const calculateBreakEven = () => {
    if (investment && purchasePrice) {
      // Calculate how many coins were purchased
      const coinsQuantity = investment / purchasePrice;

      // True break-even is simply the original purchase price (without fees)
      const breakeven = purchasePrice;

      // If you want to calculate profit targets, you can do it separately
      // For example, 10% profit target would be:
      // const profitTarget = (investment * 1.1) / coinsQuantity;

      // Calculate current profit/loss percentage
      const currentPercentage =
        ((currentPrice - purchasePrice) / purchasePrice) * 100;

      setBreakEvenPrice(breakeven.toFixed(2));
      setPercentageIncrease(currentPercentage.toFixed(2));
    }
  };

  useEffect(() => {
    calculateBreakEven();
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center py-16 px-4 md:px-8 lg:px-16 bg-gray-900 overflow-hidden relative">
      {/* <!-- Animated background gradient --> */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 opacity-50"></div>

      {/* <!-- Animated crypto icons background --> */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="crypto-icon absolute top-1/4 left-1/5 opacity-20 animate-float-slow">
          <svg
            className="w-16 h-16 text-purple-500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"></path>
          </svg>
        </div>
        <div className="crypto-icon absolute top-3/4 left-1/3 opacity-15 animate-float">
          <svg
            className="w-24 h-24 text-teal-400"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12zm-.424 19.136V16.98c-1.513-.138-2.94-.899-3.775-2.194-.638-.981-.885-2.134-.719-3.312l2.646.431c-.06.422.013.836.232 1.215.375.647 1.07 1.051 1.822 1.052V8.761c-1.294-.181-2.382-.509-3.152-1.403-.69-.801-.98-1.8-.772-2.879.221-1.152 1.115-2.099 2.279-2.417.59-.162 1.217-.163 1.645-.162V0h.997v1.898c1.384.137 2.665.949 3.369 2.128.529.887.724 1.926.529 2.908l-2.658-.428c.05-.337-.056-.743-.236-1.045-.337-.567-.911-.889-1.537-.92v4.454c1.088.139 2.202.444 3.059 1.011.706.471 1.305 1.144 1.623 1.938.366.909.384 1.923.066 2.837-.379 1.084-1.27 1.943-2.315 2.351-.738.287-1.522.386-2.299.387v2.147h-.997v-2.146c-1.857-.141-3.448-1.327-4.024-3.081-.282-.858-.276-1.793.012-2.647l2.59.86c-.091.275-.131.57-.08.865.206 1.19 1.098 1.824 2.238 1.899v-4.535c-1.082-.183-2.447-.38-3.26-1.329-.774-.904-.9-2.138-.431-3.218.42-.964 1.311-1.648 2.318-1.903.559-.14 1.146-.14 1.373-.139V4.153c.869.183 1.523.747 1.768 1.583.106.361.103.749.043 1.117l2.447.402c.066-.812-.142-1.635-.55-2.332C15.675 3.38 14.209 2.71 12.573 2.67V4.9c-1.596 0-1.889 1.252-1.747 1.989.1.521.594.925 1.747 1.138v4.879c-1.893-.226-2.19-1.241-2.027-2.043.115-.565.5-.943.874-1.176l-2.204-1.366c-.499.523-.888 1.16-1.144 1.875-.326.905-.38 1.921-.122 2.86.48 1.755 2.01 3.011 3.771 3.227v4.653c.558.039 1.145.01 1.663-.15 1.246-.386 2.135-1.586 2.216-2.878.085-1.366-.721-2.339-2.01-2.636V10.93c2.02.218 2.374 1.625 2.196 2.575-.134.718-.676 1.325-1.35 1.613l2.096 1.338c.488-.434.883-.942 1.148-1.541.363-.826.52-1.775.45-2.697-.152-2.004-1.671-3.608-3.606-4.012V4.96c1.795.347 1.547 1.608 1.313 2.058-.148.285-.474.612-.842.777l1.797 1.327c.669-.506 1.157-1.168 1.44-1.927.304-.813.354-1.696.151-2.54C16.418 2.286 14.719 1.177 12.87.943V1.9h.706v-1z"></path>
          </svg>
        </div>
        <div className="crypto-icon absolute top-1/3 right-1/4 opacity-20 animate-float-slow">
          <svg
            className="w-20 h-20 text-blue-400"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm-.5 4.5H15v3h-3.5V4.5zM9 4.5h2.5v3H9v-3zm-3 3H8v3H6v-3zm0 3h3.5v3H6v-3zm0 3h3.5v3H6v-3zm3.5 3H12v3H9.5v-3zm3 0h3.5v3H12.5v-3zm0-3H15v3h-2.5v-3zm0-3H15v3h-2.5v-3zm0-3H15v3h-2.5v-3z"></path>
          </svg>
        </div>
        <div className="crypto-icon absolute bottom-1/4 right-1/5 opacity-15 animate-float">
          <svg
            className="w-16 h-16 text-yellow-500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm2.625 18.75h-5.25v-1.5h5.25v1.5zm3.75-3.328l-1.688.875-6-11.25-2.625 4.5-1.5-.875 3.75-6.375 6.375 11.813 1.688-.875v2.188z"></path>
          </svg>
        </div>
      </div>

      {/* <!-- Hero content container --> */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* <!-- Left column - Text Content --> */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-teal-300 to-purple-400 animate-fade-in">
              Crypto Break-Even
              <br className="hidden md:block" /> Price Calculator
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-delay-1">
              Calculate your crypto investment break-even price with precision.
              Make informed decisions with our advanced calculator tool powered
              by real-time market data.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-delay-2">
              <a
                href="/calculator"
                className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Try Calculator Now
              </a>
              <a
                href="#how-it-works"
                className="text-teal-400 border border-teal-400 font-bold py-3 px-8 rounded-full hover:bg-teal-400/10 transition-all duration-300"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* <!-- Right column - Preview Card --> */}
          <div className="w-full lg:w-5/12 animate-fade-in-delay-3">
            <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-purple-900/50 shadow-xl relative overflow-hidden group">
              {/* <!-- Glow effect --> */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* <!-- Card header --> */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white">
                  Break-Even Calculator
                </h3>
                <div className="flex space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
              </div>

              <div className="space-y-5">
                {/* <!-- Sample form fields --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">
                      Investment Amount
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                        $
                      </span>
                      <input
                        value={investment}
                        onChange={(e) => setInvestment(e.target.value)}
                        type="text"
                        placeholder="Investment Amount"
                        className="w-full bg-gray-900 border border-gray-700 text-white py-3 pl-8 pr-3 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">
                      Purchase Price
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                        $
                      </span>
                      <input
                        type="text"
                        placeholder="Purchase Price"
                        value={purchasePrice}
                        onChange={(e) => setPurchasePrice(e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 text-white py-3 pl-8 pr-3 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    Current Price (optional)
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                      $
                    </span>
                    <input
                      type="text"
                      placeholder="Current Price (optional)"
                      value={currentPrice}
                      onChange={(e) => setCurrentPrice(e.target.value)}
                      className="w-full bg-gray-900 border border-gray-700 text-white py-3 pl-8 pr-3 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* <!-- Calculate button --> */}
                <button
                  onClick={calculateBreakEven}
                  className="w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/25"
                >
                  Calculate Break-Even Price
                </button>

                {/* <!-- Sample result preview --> */}
                <div className="mt-6 p-4 bg-gray-900/80 rounded-lg border border-gray-700">
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">
                      Your break-even price would be
                    </p>
                    <p className="text-2xl font-bold text-white my-1">
                      ${breakEvenPrice}
                    </p>
                    <p className="text-sm text-green-400">
                      (+{percentageIncrease}% from purchase price)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
