import React from 'react';


export function SummaryPanel({ summary, currentPrice }) {
  const formatUSD = (value) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

  const isProfitable = currentPrice ? currentPrice > summary.breakEvenPrice : false;

  return (
    <div className="bg-gray-800 rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-bold text-white mb-4">Calculation Summary</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-400">Total Investment</p>
          <p className="text-xl font-semibold text-white">{formatUSD(summary.totalInvestment)}</p>
        </div>
        
        <div>
          <p className="text-gray-400">Total Quantity</p>
          <p className="text-xl font-semibold text-white">{summary.totalQuantity.toFixed(8)}</p>
        </div>

        <div>
          <p className="text-gray-400">Total Buy Fees</p>
          <p className="text-xl font-semibold text-white">{formatUSD(summary.totalBuyFees)}</p>
        </div>

        <div>
          <p className="text-gray-400">Total Sell Fees</p>
          <p className="text-xl font-semibold text-white">{formatUSD(summary.totalSellFees)}</p>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-700">
        <div className="flex justify-between items-baseline">
          <div>
            <p className="text-gray-400">Break-even Price</p>
            <p className="text-2xl font-bold text-white">{formatUSD(summary.breakEvenPrice)}</p>
          </div>
          
          {currentPrice && (
            <div className="text-right">
              <p className="text-gray-400">Current Price</p>
              <p className={`text-2xl font-bold ${isProfitable ? 'text-green-400' : 'text-red-400'}`}>
                {formatUSD(currentPrice)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}