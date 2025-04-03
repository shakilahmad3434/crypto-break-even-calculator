import React, { useEffect, useRef, useState } from "react";

const CalculatorCard = () => {

  // State variables
  const [cryptocurrency, setCryptocurrency] = useState('Bitcoin (BTC)');
  const [investmentAmount, setInvestmentAmount] = useState(1000);
  const [purchasePrice, setPurchasePrice] = useState(30000);
  const [quantity, setQuantity] = useState(0.033333);
  const [currentPrice, setCurrentPrice] = useState(32500);
  const [exchangeFee, setExchangeFee] = useState(1.5);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isQuantityManual, setIsQuantityManual] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  const [initialState, setInitialState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Cryptocurrencies dropdown options
  const cryptocurrencies = [
    'Bitcoin (BTC)',
    'Ethereum (ETH)',
    'Solana (SOL)',
    'Cardano (ADA)',
    'Dogecoin (DOGE)',
    'Ripple (XRP)',
    'Polkadot (DOT)'
  ];

  // Update quantity when investment amount or purchase price change
  useEffect(() => {
    if (!isQuantityManual && investmentAmount && purchasePrice && purchasePrice > 0) {
      const calculatedQuantity = investmentAmount / purchasePrice;
      setQuantity(parseFloat(calculatedQuantity.toFixed(6)));
    }
  }, [investmentAmount, purchasePrice, isQuantityManual]);


  useEffect(() => {
    if (isQuantityManual && quantity && purchasePrice) {
      setInvestmentAmount(parseFloat((quantity * purchasePrice).toFixed(2)));
    }
  }, [quantity, purchasePrice, isQuantityManual]);

  // Handle input changes
  const handleInvestmentChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setInvestmentAmount(value);
  };

  const handlePurchasePriceChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setPurchasePrice(value);
  };

  const handleQuantityChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setQuantity(value);
    setIsQuantityManual(true)
    
    // Update investment amount based on new quantity and purchase price
    if (value && purchasePrice) {
      setInvestmentAmount(value * purchasePrice);
    }
  };

  const handleCurrentPriceChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setCurrentPrice(value);
  };

  const handleExchangeFeeChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setExchangeFee(value);
  };

  // Fetch current price (simulated)
  const fetchCurrentPrice = async () => {
    try {
      // In a real application, you would fetch from a crypto API
      // For now, we'll simulate with a slight modification to the current price
      const randomDelta = (Math.random() * 500) - 250;
      const newPrice = Math.max(currentPrice + randomDelta, 1);
      setCurrentPrice(parseFloat(newPrice.toFixed(2)));
    } catch (err) {
      setError('Failed to fetch current price. Please try again.');
    }
  };

  // Calculate break-even price
  const calculateBreakEven = () => {
    setIsCalculating(true);
    setInitialState(true);
    setIsLoading(true);
    setError('');
    
    setTimeout(() => {
      try {
        if (!investmentAmount || !purchasePrice || !quantity || quantity <= 0) {
          setError('Please provide valid input values.');
          setIsCalculating(false);
          return;
        }

        // Calculate purchase fee
        const purchaseFee = (investmentAmount * exchangeFee) / 100;
        
        // Calculate effective investment (including purchase fee)
        const effectiveInvestment = investmentAmount + purchaseFee;
        
        // Calculate break-even price
        const breakEvenPrice = effectiveInvestment / quantity;
        
        // Calculate percentage difference from purchase price
        const percentageDifference = ((breakEvenPrice - purchasePrice) / purchasePrice) * 100;
        
        // Calculate current value and profit/loss
        const currentValue = quantity * currentPrice;
        const absoluteProfit = currentValue - effectiveInvestment;
        const percentageProfit = (absoluteProfit / effectiveInvestment) * 100;

        // Calculate how far away from breaking even
        const distanceToBreakEven = Math.abs(((currentPrice - breakEvenPrice) / breakEvenPrice) * 100);

        // Determine current status
        let status = "Far from Break-Even";
        if (currentPrice >= breakEvenPrice) {
          status = "Above Break-Even";
        } else if (distanceToBreakEven <= 5) {
          status = "Close to Break-Even";
        }
        
        // Create results object
        const calculationResults = {
          breakEvenPrice: breakEvenPrice.toFixed(2),
          percentageDifference: percentageDifference.toFixed(2),
          currentValue: currentValue.toFixed(2),
          absoluteProfit: absoluteProfit.toFixed(2),
          percentageProfit: percentageProfit.toFixed(2),
          effectiveInvestment: effectiveInvestment.toFixed(2),
          purchaseFee: purchaseFee.toFixed(2),
          quantity: quantity,
          status: status,
          distanceToBreakEven: distanceToBreakEven.toFixed(1)
        };
        
        setResults(calculationResults);
        setIsCalculating(false);
        setIsLoading(false);
      } catch (err) {
        setError('An error occurred during calculation.');
        setIsCalculating(false);
      }
    }, 1000); // Simulate calculation time
  };

  // Reset calculator
  const resetCalculator = () => {
    setInvestmentAmount(1000);
    setPurchasePrice(30000);
    setCurrentPrice(32500);
    setExchangeFee(1.5);
    setResults(null);
    setError('');
    setIsQuantityManual(false);
    setInitialState(false);
    setIsLoading(false);
  };

  // Save results (mock function)
  const saveResults = () => {
    // In a real application, you would implement saving functionality
    // For now, we'll just show an alert
    alert('Results saved successfully!');
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

  return (
    <section
      id="calculator"
      className="min-h-screen flex items-center py-16 px-4 md:px-8 lg:px-16 bg-gray-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 opacity-60"
        
      ></div>
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"
        
      ></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600/10 rounded-full filter blur-3xl"
        
      ></div>

      {/* Crypto symbols floating in background */}
      <div
        className="absolute top-20 left-10 text-purple-500/10 text-6xl font-bold"
        
      >
        ₿
      </div>
      <div
        className="absolute bottom-20 right-10 text-teal-500/10 text-6xl font-bold"
        
      >
        Ξ
      </div>
      <div
        className="absolute top-1/3 right-1/4 text-blue-500/10 text-5xl font-bold"
        
      >
        Ł
      </div>
      <div
        className="absolute bottom-1/3 left-1/4 text-pink-500/10 text-5xl font-bold"
        
      >
        Đ
      </div>

      <div className="container mx-auto relative z-10" >
        {/* Section heading */}
        <div
          className="text-center mb-12 animate-on-scroll fade-up"
          
          ref={addToRefs}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-teal-300 to-purple-400"
            
          >
            Crypto Break-Even Calculator
          </h2>
          <p
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
            
          >
            Calculate exactly when your investment turns profitable with our
            easy-to-use tool
          </p>
        </div>

        <div
          className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8"
          
        >
          {/* Calculator Form - 3 columns */}
          <div
            className="lg:col-span-3 bg-gray-800/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-purple-900/50 shadow-xl animate-on-scroll fade-up"
            ref={addToRefs}
          >
            <h3 className="text-xl font-bold text-white mb-6" >
              Enter Your Investment Details
            </h3>

            <div className="space-y-6" >
              {/* Cryptocurrency selection */}
              <div >
                <label
                  className="block text-gray-400 text-sm mb-2"
                >
                  Select Cryptocurrency
                </label>
                
                <div className="relative" >
                  <select
                    className="block w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 pr-8 rounded-lg appearance-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    value={cryptocurrency} 
                    onChange={(e) => setCryptocurrency(e.target.value)}
                  >
                    {cryptocurrencies.map((crypto) => (
                <option key={crypto} value={crypto}>{crypto}</option>
              ))}
                  </select>
                  <div
                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400"
                    
                  >
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        
                      ></path>
                    </svg>
                  </div>
                  
                  <div
                    className="absolute top-0 right-10 h-full flex items-center pointer-events-none"
                  >
                    <div
                      className="bg-gray-900 group relative"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 cursor-help"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                          
                        ></path>
                      </svg>
                      
                      <div
                        className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 absolute bottom-full right-0 mb-2 w-64 p-4 bg-gray-800 rounded-lg shadow-lg text-sm text-gray-300 border border-gray-700 z-50"
                        
                      >
                        Select the cryptocurrency you've invested in or plan to
                        invest in.
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* Investment amount */}
              <div>
                <label
                  className="block text-gray-400 text-sm mb-2"
                >
                  Investment Amount (USD)
                </label>
                <div className="relative">
                  <span
                    className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"
                  >
                    $
                  </span>
                  <input
                    value={investmentAmount}
                    onChange={handleInvestmentChange}
                    min="0"
                    type="number"
                    placeholder="1000.00"
                    className="w-full bg-gray-900 border border-gray-700 text-white py-3 pl-8 pr-12 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  />
                  <div
                    className="absolute top-0 right-0 h-full flex items-center pr-3 pointer-events-none"
                    
                  >
                    <div
                      className="bg-gray-900 group relative"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 cursor-help"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                          
                        ></path>
                      </svg>
                        
                      <div
                        className="tooltip opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 absolute bottom-full right-0 mb-2 w-64 p-4 bg-gray-800 rounded-lg shadow-lg text-sm text-gray-300 border border-gray-700 z-50"
                        
                      >
                        Enter the total amount of money you've invested or plan
                        to invest in USD.
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>

              {/* Purchase price */}
              <div>
                <label
                  className="block text-gray-400 text-sm mb-2"
                  
                >
                  Purchase Price (USD)
                </label>
                <div className="relative" >
                  <span
                    className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"
                    
                  >
                    $
                  </span>
                  <input
                    value={purchasePrice}
                    onChange={handlePurchasePriceChange}
                    min="0"
                    type="number"
                    placeholder="30000.00"
                    className="w-full bg-gray-900 border border-gray-700 text-white py-3 pl-8 pr-12 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  />
                  <div
                    className="absolute top-0 right-0 h-full flex items-center pr-3 pointer-events-none"
                    
                  >
                    <div
                      className="bg-gray-900 group relative"
                      
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 cursor-help"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                          
                        ></path>
                      </svg>
                      <div
                        className="tooltip opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 absolute bottom-full right-0 mb-2 w-64 p-4 bg-gray-800 rounded-lg shadow-lg text-sm text-gray-300 border border-gray-700 z-50"
                        
                      >
                        Enter the price per coin at which you purchased or plan
                        to purchase.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quantity of coins */}
              <div >
                <label
                  className="block text-gray-400 text-sm mb-2"
                  
                >
                  Quantity of Coins (optional)
                </label>
                <div className="relative" >
                  <input
                    type="number"
                    placeholder="0.033"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="0"
                    step="0.000001"
                    className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 pr-12 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  />
                  <div
                    className="absolute top-0 right-0 h-full flex items-center pr-3 pointer-events-none"
                    
                  >
                    <div
                      className="bg-gray-900 group relative"
                      
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 cursor-help"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                          
                        ></path>
                      </svg>
                      <div
                        className="tooltip opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 absolute bottom-full right-0 mb-2 w-64 p-4 bg-gray-800 rounded-lg shadow-lg text-sm text-gray-300 border border-gray-700 z-50"
                        
                      >
                        Optional: Enter the specific amount of coins purchased.
                        If left empty, we'll calculate this based on your
                        investment amount and purchase price.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current price */}
              <div >
                <label
                  className="block text-gray-400 text-sm mb-2"
                  
                >
                  Current Price (USD){" "}
                  <span className="text-teal-500 text-xs">
                    (Live data available)
                  </span>
                </label>
                <div className="relative" >
                  <span
                    className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"
                    
                  >
                    $
                  </span>
                  <input
                    type="number"
                    placeholder="32500.00"
                    value={currentPrice}
                    onChange={handleCurrentPriceChange}
                    min="0"
                    step="0.01"
                    className="w-full bg-gray-900 border border-gray-700 text-white py-3 pl-8 pr-12 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  />
                  <div
                    className="absolute top-0 right-0 h-full flex items-center pr-3 pointer-events-none"
                    
                  >
                    <div
                      className="bg-gray-900 group relative"
                      
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 cursor-help"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                          
                        ></path>
                      </svg>
                      <div
                        className="tooltip opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 absolute bottom-full right-0 mb-2 w-64 p-4 bg-gray-800 rounded-lg shadow-lg text-sm text-gray-300 border border-gray-700 z-50"
                        
                      >
                        Enter the current market price. You can use our "Fetch
                        Current Price" button to automatically fill this with
                        live market data.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fee percentage */}
              <div >
                <label
                  className="block text-gray-400 text-sm mb-2"
                  
                >
                  Exchange Fee % (optional)
                </label>
                <div className="relative" >
                  <input
                    
                    type="number"
                    placeholder="1.5"
                    value={exchangeFee}
                    onChange={handleExchangeFeeChange}
                    min="0"
                    step="0.1"
                    className="w-full bg-gray-900 border border-gray-700 text-white py-3 px-4 pr-12 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  />
                  <span
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                    
                  >
                    %
                  </span>
                  <div
                    className="absolute top-0 right-8 h-full flex items-center pointer-events-none"
                    
                  >
                    <div
                      className="bg-gray-900 group relative"
                      
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 cursor-help"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                          
                        ></path>
                      </svg>
                      <div
                        className="tooltip opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 absolute bottom-full right-0 mb-2 w-64 p-4 bg-gray-800 rounded-lg shadow-lg text-sm text-gray-300 border border-gray-700 z-50"
                        
                      >
                        Optional: Include any exchange or transaction fees to
                        get a more accurate break-even calculation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div
                className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-2"
                
              >
                <button
                  onClick={fetchCurrentPrice}
                  className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      
                    ></path>
                  </svg>
                  Fetch Current Price
                </button>
                <button
                  onClick={calculateBreakEven}
                  disabled={isCalculating}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/25 flex items-center justify-center"
                >
                  <span >Calculate Break-Even</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      
                    ></path>
                  </svg>
                </button>
              </div>
              {error && <div className="error-message">{error}</div>}
            </div>
          </div>

          {/* Results Section - 2 columns */}
          <div className="lg:col-span-2">
            <div
              className="bg-gray-800/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-purple-900/50 shadow-xl h-full animate-on-scroll fade-up delay-100"
              ref={addToRefs}
            >
              <h3
                className="text-xl font-bold text-white mb-6"
                
              >
                Results
              </h3>

              {/* Initial state */}
              {
                !initialState &&
                <div
                className="flex flex-col items-center justify-center h-[400px] text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-gray-600 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    
                  ></path>
                </svg>
                <p className="text-gray-400 mb-2" >
                  Enter your investment details and press calculate
                </p>
                <p className="text-gray-500 text-sm" >
                  Results will appear here
                </p>
              </div>
              }
              

              {/* Loading state (initially hidden) hidden */}
              {
                isLoading &&
                <div
                
                className="flex-col items-center justify-center h-[400px] text-center"
              >
                <div className="loader mb-4" >
                  <div
                    className="w-16 h-16 border-t-4 border-teal-500 border-solid rounded-full animate-spin"
                    
                  ></div>
                </div>
                <p className="text-gray-300" >
                  Calculating your break-even price...
                </p>
              </div>
              }
              

              {/* Results state (initially hidden) */}
              {
                initialState
                ?
                
              <div
                
                className=" space-y-6 overflow-y-auto"
              >
                {/* Break-Even Price */}
                <div
                  className="bg-gray-900/60 p-4 rounded-xl border border-gray-700"
                >
                  <p className="text-gray-400 text-sm mb-1" >
                    Break-Even Price
                  </p>
                  <div
                    className="flex items-end justify-between"
                    
                  >
                    <p
                      className="text-2xl font-bold text-white"
                      
                    >
                      ${results?.breakEvenPrice}
                    </p>
                    <p className="text-teal-400 text-sm" >
                    {parseFloat(results?.percentageDifference) >= 0 ? '+' : ''}{results?.percentageDifference}% from purchase
                    </p>
                  </div>
                </div>

                {/* Current Status */}
                <div
                  className="bg-gray-900/60 p-4 rounded-xl border border-gray-700"
                  
                >
                  <p className="text-gray-400 text-sm mb-1" >
                    {/* Current Status */}
                    {results?.status}
                  </p>
                  <div
                    className="flex items-center justify-between"
                    
                  >
                    <p
                      className="text-xl font-bold text-yellow-400"
                      
                    >
                      {/* Close to Break-Even */}
                      {results?.status}
                    </p>
                    <div
                      className="w-20 h-6 bg-gray-700 rounded-full overflow-hidden"
                      
                    >
                      <div
                        className="h-full w-[70%] bg-gradient-to-r from-red-500 to-yellow-400 rounded-full"
                        
                      ></div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-2" >
                    You are {results?.distanceToBreakEven}% away from breaking even
                  </p>
                </div>

                {/* Investment Summary */}
                <div
                  className="bg-gray-900/60 p-4 rounded-xl border border-gray-700"
                  
                >
                  <p className="text-gray-400 text-sm mb-3" >
                    Investment Summary
                  </p>
                  <div className="space-y-2" >
                    <div className="flex justify-between" >
                      <p className="text-gray-400" >
                        Investment Amount:
                      </p>
                      <p className="text-white font-medium" >
                        ${investmentAmount.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex justify-between" >
                      <p className="text-gray-400" >
                        Purchase Price:
                      </p>
                      <p className="text-white font-medium" >
                        ${purchasePrice.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex justify-between" >
                      <p className="text-gray-400" >
                        Coins Purchased:
                      </p>
                      <p className="text-white font-medium" >
                        {/* 0.033333 BTC */}
                        {quantity.toFixed(6)} {cryptocurrency.split(' ')[1].replace('(', '').replace(')', '')}
                      </p>
                    </div>
                    <div className="flex justify-between" >
                      <p className="text-gray-400" >
                        Current Value:
                      </p>
                      <p className="text-white font-medium" >
                        ${results?.currentValue}
                      </p>
                    </div>
                    <div
                      className="flex justify-between pt-1 border-t border-gray-700 mt-1"
                      
                    >
                      <p className="text-gray-400" >
                        Profit/Loss:
                      </p>
                      <p className="text-red-400 font-medium" >
                      {parseFloat(results?.absoluteProfit) >= 0 ? '+' : ''}{results?.absoluteProfit} ({parseFloat(results?.percentageProfit) >= 0 ? '+' : ''}{results?.percentageProfit}%)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mini Chart */}
                <div
                  className="bg-gray-900/60 p-4 rounded-xl border border-gray-700"
                  
                >
                  <p className="text-gray-400 text-sm mb-3" >
                    Price to Break-Even
                  </p>
                  <div className="relative h-28" >
                    <div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-700"
                      
                    ></div>
                    {/* Break-even marker */}
                    <div
                      className="absolute top-1/4 w-full h-0.5 bg-teal-700 opacity-25 z-0"
                    ></div>
                    <div
                      className="absolute top-1/4 right-0 flex items-center"
                    >
                      <div
                        className="mr-2 w-20 h-px bg-teal-500"
                        
                      ></div>
                      <p className="text-teal-400 text-xs" >
                        Break-even: ${results?.breakEvenPrice}
                      </p>
                    </div>

                    {/* Purchase price marker */}
                    <div
                      className="absolute top-1/2 w-full h-0.5 bg-blue-700 opacity-25 z-0"
                      
                    ></div>
                    <div
                      className="absolute top-1/2 right-0 flex items-center"
                      
                    >
                      <div
                        className="mr-2 w-20 h-px bg-blue-500"
                        
                      ></div>
                      <p className="text-blue-400 text-xs" >
                        Purchase: ${purchasePrice}
                      </p>
                    </div>

                    {/* Current price marker */}
                    <div
                      className="absolute top-[45%] w-full h-0.5 bg-yellow-700 opacity-25 z-0"
                      
                    ></div>
                    <div
                      className="absolute top-[45%] right-0 flex items-center"
                      
                    >
                      <div
                        className="mr-2 w-20 h-px bg-yellow-500"
                        
                      ></div>
                      <p className="text-yellow-400 text-xs" >
                        Current: ${currentPrice}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3" >
                  <button
                    className="flex-1 border border-gray-700 hover:bg-gray-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300"
                    onClick={resetCalculator}
                  >
                    <span >Reset</span>
                  </button>
                  <button
                    className="flex-1 bg-teal-700 hover:bg-teal-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300"
                    onClick={saveResults}
                  >
                    <span>Save Results</span>
                  </button>
                </div>
              </div>
              :
              ""
            }
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div
          className="mt-8 text-center animate-on-scroll fade-up delay-200"
          ref={addToRefs}
        >
          <p
            className="text-gray-500 text-sm max-w-3xl mx-auto"
            
          >
            Disclaimer: This calculator provides estimates based on the
            information you provide. Cryptocurrency investments are subject to
            market risks. Past performance is not indicative of future results.
            Always do your own research before investing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalculatorCard;
