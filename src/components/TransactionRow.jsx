import React from 'react';
import { Trash2 } from 'lucide-react';

export function TransactionRow({ transaction, onUpdate, onDelete, showError }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center p-4 bg-gray-800 rounded-lg">
      {/* Mobile Header */}
      <div className="md:hidden w-full flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Transaction</h3>
        <button
          onClick={() => onDelete(transaction.id)}
          className="p-2 text-gray-400 hover:text-red-400 transition-colors"
        >
          <Trash2 size={20} />
        </button>
      </div>

      {/* Input Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
        {/* Quantity */}
        <div className="col-span-full md:col-span-1">
          <label className="block text-sm text-gray-400 mb-2 md:mb-1">
            Quantity
          </label>
          <input
            type="number"
            min="0"
            step="any"
            value={transaction.quantity || ''}
            onChange={(e) => onUpdate(transaction.id, 'quantity', parseFloat(e.target.value))}
            className={`w-full bg-gray-700 rounded px-3 py-3 md:py-2 text-white ${
              showError ? 'border-red-500' : 'border-gray-600'
            } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        {/* Price */}
        <div className="col-span-full md:col-span-1">
          <label className="block text-sm text-gray-400 mb-2 md:mb-1">
            Price (USD)
          </label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={transaction.price || ''}
            onChange={(e) => onUpdate(transaction.id, 'price', parseFloat(e.target.value))}
            className={`w-full bg-gray-700 rounded px-3 py-3 md:py-2 text-white ${
              showError ? 'border-red-500' : 'border-gray-600'
            } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        {/* Fee Type */}
        <div className="col-span-full md:col-span-1">
          <label className="block text-sm text-gray-400 mb-2 md:mb-1">
            Fee Type
          </label>
          <select
            value={transaction.feeType}
            onChange={(e) => onUpdate(transaction.id, 'feeType', e.target.value)}
            className="w-full bg-gray-700 rounded px-3 py-3 md:py-2 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="percentage">Percentage</option>
            <option value="fixed">Fixed USD</option>
          </select>
        </div>

        {/* Fee Amount */}
        <div className="col-span-full md:col-span-1">
          <label className="block text-sm text-gray-400 mb-2 md:mb-1">
            Fee Amount
          </label>
          <input
            type="number"
            min="0"
            step={transaction.feeType === 'percentage' ? '0.01' : '0.0001'}
            max={transaction.feeType === 'percentage' ? '100' : undefined}
            value={transaction.feeAmount || ''}
            onChange={(e) => onUpdate(transaction.id, 'feeAmount', parseFloat(e.target.value))}
            className="w-full bg-gray-700 rounded px-3 py-3 md:py-2 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Desktop Delete Button */}
      <div className="hidden md:block">
        <button
          onClick={() => onDelete(transaction.id)}
          className="p-2 text-gray-400 hover:text-red-400 transition-colors"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}