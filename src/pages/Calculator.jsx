import React, { useState, useEffect } from "react";
import { PlusCircle, Save, Download } from "lucide-react";
import { TransactionRow } from "../components/TransactionRow";
import { SummaryPanel } from "../components/SummaryPanel";
import Footer from "../components/Features/Footer";
import Navbar from "../components/Features/Navbar";
import { Helmet } from "react-helmet-async";

function Calculator() {
  const [transactions, setTransactions] = useState([
    {
      id: "1",
      quantity: 0,
      price: 0,
      feeType: "percentage",
      feeAmount: 0,
    },
  ]);

  const [sellFee, setSellFee] = useState({ type: "percentage", amount: 0 });
  const [summary, setSummary] = useState({
    totalInvestment: 0,
    totalQuantity: 0,
    totalBuyFees: 0,
    totalSellFees: 0,
    breakEvenPrice: 0,
  });

  const calculateSummary = () => {
    const totalQuantity = transactions.reduce(
      (sum, t) => sum + (t.quantity || 0),
      0
    );
    const totalInvestment = transactions.reduce(
      (sum, t) => sum + (t.price || 0) * (t.quantity || 0),
      0
    );

    const totalBuyFees = transactions.reduce((sum, t) => {
      if (t.feeType === "percentage") {
        return sum + (t.price * t.quantity * t.feeAmount) / 100;
      }
      return sum + (t.feeAmount || 0);
    }, 0);

    const totalSellFees =
      sellFee.type === "percentage"
        ? (totalInvestment * sellFee.amount) / 100
        : sellFee.amount;

    const breakEvenPrice =
      totalQuantity > 0
        ? (totalInvestment + totalBuyFees + totalSellFees) / totalQuantity
        : 0;

    setSummary({
      totalInvestment,
      totalQuantity,
      totalBuyFees,
      totalSellFees,
      breakEvenPrice,
    });
  };

  useEffect(() => {
    calculateSummary();
  }, [transactions, sellFee]);

  const addTransaction = () => {
    if (transactions.length >= 20) return;

    setTransactions([
      ...transactions,
      {
        id: Date.now().toString(),
        quantity: 0,
        price: 0,
        feeType: "percentage",
        feeAmount: 0,
      },
    ]);
  };

  const updateTransaction = (id, field, value) => {
    setTransactions(
      transactions.map((t) => (t.id === id ? { ...t, [field]: value } : t))
    );
  };

  const deleteTransaction = (id) => {
    if (transactions.length === 1) return;
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const saveCalculation = () => {
    const savedCalcs = JSON.parse(
      localStorage.getItem("savedCalculations") || "[]"
    );
    const newCalc = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      transactions,
      summary,
    };
    localStorage.setItem(
      "savedCalculations",
      JSON.stringify([...savedCalcs, newCalc])
    );
  };

  const exportToCSV = () => {
    const headers = ["Quantity", "Price (USD)", "Fee Type", "Fee Amount"];
    const rows = transactions.map((t) => [
      t.quantity,
      t.price,
      t.feeType,
      t.feeAmount,
    ]);
    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
      "",
      "Summary",
      `Total Investment,${summary.totalInvestment}`,
      `Total Quantity,${summary.totalQuantity}`,
      `Break-even Price,${summary.breakEvenPrice}`,
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `crypto-calculator-${Date.now()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
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
              content="Crypto Break Even Calculator - Find Your Profit & Loss Instantly"
            />
            <meta
              name="description"
              content="Use our Crypto Break Even Calculator to determine your break-even point and profit/loss on Bitcoin, Ethereum, and other cryptocurrencies. Simply enter your buy price, sell price, and fees to get accurate results in seconds."
            />
            <meta
              name="keywords"
              content="crypto break even calculator, cryptocurrency profit calculator, bitcoin break even price, Ethereum breakeven tool, crypto ROI calculator, crypto trading calculator, digital currency investment tool"
            />
            <link rel="canonical" href="https://crypto-news.wiki/calculator/" />
            <title>
            Crypto Break Even Calculator - Find Your Profit & Loss Instantly
            </title>
          </Helmet>
      <Navbar />
      <div className="min-h-screen flex items-center py-16 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div
            className="text-center mb-16 animate-on-scroll fade-up"
            style={{ opacity: "1", transform: "translateY(0px)" }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-teal-300 to-purple-400">
              Break-Even Calculator
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Calculate your break-even price including all fees
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <TransactionRow
                    key={transaction.id}
                    transaction={transaction}
                    onUpdate={updateTransaction}
                    onDelete={deleteTransaction}
                  />
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-5 justify-between items-center mt-4">
                <button
                  onClick={addTransaction}
                  disabled={transactions.length >= 20}
                  className="w-full sm:w-fit flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  <PlusCircle size={20} />
                  Add Transaction
                </button>

                <div className="flex gap-4">
                  <button
                    onClick={saveCalculation}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Save size={20} />
                    Save
                  </button>
                  <button
                    onClick={exportToCSV}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <Download size={20} />
                    Export CSV
                  </button>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-800 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Sell-side Fee</h3>
                <div className="flex gap-4">
                  <select
                    value={sellFee.type}
                    onChange={(e) =>
                      setSellFee({ ...sellFee, type: e.target.value })
                    }
                    className="bg-gray-700 rounded px-3 py-2 border border-gray-600"
                  >
                    <option value="percentage">Percentage</option>
                    <option value="fixed">Fixed USD</option>
                  </select>
                  <input
                    type="number"
                    min="0"
                    step={sellFee.type === "percentage" ? "0.01" : "0.0001"}
                    max={sellFee.type === "percentage" ? "100" : undefined}
                    value={sellFee.amount}
                    onChange={(e) =>
                      setSellFee({
                        ...sellFee,
                        amount: parseFloat(e.target.value),
                      })
                    }
                    className="flex-1 bg-gray-700 rounded px-3 py-2 border border-gray-600"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <SummaryPanel summary={summary} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Calculator;
