"use client";

import { useState, useEffect, useCallback } from "react";
import { Metadata } from "next";

// Format number to Indian style (lakhs, crores)
function formatIndian(num: number | null): string {
  if (num === null || num === undefined || isNaN(num)) return "—";
  if (num >= 10000000) {
    return "₹" + (num / 10000000).toFixed(2) + " Cr";
  } else if (num >= 100000) {
    return "₹" + (num / 100000).toFixed(2) + " L";
  } else if (num >= 1000) {
    return "₹" + (num / 1000).toFixed(1) + "K";
  }
  return "₹" + num.toLocaleString("en-IN");
}

function formatPercent(num: number | null): string {
  if (num === null || num === undefined || isNaN(num)) return "—";
  return num.toFixed(1) + "%";
}

function formatYears(num: number | null): string {
  if (num === null || num === undefined || isNaN(num)) return "—";
  if (num > 99) return "99+ yrs";
  return num.toFixed(1) + " yrs";
}

function formatMultiple(num: number | null): string {
  if (num === null || num === undefined || isNaN(num)) return "—";
  return num.toFixed(2) + "x";
}

function calculateEMI(principal: number, annualRate: number, years: number): number {
  const monthlyRate = annualRate / 100 / 12;
  const months = years * 12;
  if (monthlyRate === 0) return principal / months;
  return (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
}

interface Reason {
  text: string;
  type: "pro" | "con" | "neutral";
}

interface Verdict {
  emoji: string;
  title: string;
  reasons: Reason[];
}

function generateVerdict(
  revMult: number | null,
  profMult: number | null,
  roi: number | null,
  payback: number | null,
  cocROI: number | null,
  cashFlow: number,
  financing: boolean
): Verdict {
  const reasons: Reason[] = [];
  let score = 0;
  let maxScore = 0;

  if (revMult !== null) {
    maxScore += 2;
    if (revMult < 1) {
      reasons.push({ text: `Revenue multiple of ${revMult.toFixed(2)}x is excellent (under 1x)`, type: "pro" });
      score += 2;
    } else if (revMult <= 1.5) {
      reasons.push({ text: `Revenue multiple of ${revMult.toFixed(2)}x is good`, type: "pro" });
      score += 1.5;
    } else if (revMult <= 2) {
      reasons.push({ text: `Revenue multiple of ${revMult.toFixed(2)}x is fair`, type: "neutral" });
      score += 1;
    } else {
      reasons.push({ text: `Revenue multiple of ${revMult.toFixed(2)}x is high (over 2x)`, type: "con" });
    }
  }

  if (profMult !== null) {
    maxScore += 2;
    if (profMult < 2.5) {
      reasons.push({ text: `SDE multiple of ${profMult.toFixed(2)}x is excellent (under 2.5x)`, type: "pro" });
      score += 2;
    } else if (profMult <= 3.5) {
      reasons.push({ text: `SDE multiple of ${profMult.toFixed(2)}x is reasonable`, type: "pro" });
      score += 1.5;
    } else if (profMult <= 4.5) {
      reasons.push({ text: `SDE multiple of ${profMult.toFixed(2)}x is on the higher side`, type: "neutral" });
      score += 0.5;
    } else {
      reasons.push({ text: `SDE multiple of ${profMult.toFixed(2)}x is expensive`, type: "con" });
    }
  }

  if (roi !== null) {
    maxScore += 2;
    if (roi >= 40) {
      reasons.push({ text: `${roi.toFixed(1)}% ROI beats most investments significantly`, type: "pro" });
      score += 2;
    } else if (roi >= 25) {
      reasons.push({ text: `${roi.toFixed(1)}% ROI is solid`, type: "pro" });
      score += 1.5;
    } else if (roi >= 15) {
      reasons.push({ text: `${roi.toFixed(1)}% ROI is modest but okay`, type: "neutral" });
      score += 1;
    } else {
      reasons.push({ text: `${roi.toFixed(1)}% ROI is low for the risk involved`, type: "con" });
    }
  }

  if (payback !== null) {
    maxScore += 2;
    if (payback <= 2.5) {
      reasons.push({ text: `${payback.toFixed(1)}-year payback is fast`, type: "pro" });
      score += 2;
    } else if (payback <= 4) {
      reasons.push({ text: `${payback.toFixed(1)}-year payback is reasonable`, type: "pro" });
      score += 1.5;
    } else if (payback <= 6) {
      reasons.push({ text: `${payback.toFixed(1)}-year payback is slow`, type: "neutral" });
      score += 0.5;
    } else {
      reasons.push({ text: `${payback.toFixed(1)}+ years to recover your money is risky`, type: "con" });
    }
  }

  if (financing && cocROI !== null) {
    maxScore += 1;
    if (cashFlow > 0 && cocROI >= 30) {
      reasons.push({ text: `Financing boosts cash-on-cash return to ${cocROI.toFixed(1)}%`, type: "pro" });
      score += 1;
    } else if (cashFlow > 0) {
      reasons.push({ text: `Positive cash flow of ${formatIndian(cashFlow)}/year after debt`, type: "neutral" });
      score += 0.5;
    } else {
      reasons.push({ text: `Negative cash flow — profits won't cover debt payments`, type: "con" });
    }
  }

  const scorePercent = maxScore > 0 ? (score / maxScore) * 100 : 0;
  let emoji: string, title: string;

  if (maxScore === 0) {
    return {
      emoji: "🤔",
      title: "Enter deal details above",
      reasons: [{ text: "Fill in the numbers to see if this is a good deal", type: "neutral" }],
    };
  } else if (scorePercent >= 75) {
    emoji = "🚀";
    title = "Great Deal — Worth Pursuing!";
  } else if (scorePercent >= 50) {
    emoji = "👍";
    title = "Decent Deal — Negotiate if Possible";
  } else if (scorePercent >= 30) {
    emoji = "⚠️";
    title = "Mediocre Deal — Proceed with Caution";
  } else {
    emoji = "🚫";
    title = "Bad Deal — Walk Away";
  }

  return { emoji, title, reasons };
}

const presets = {
  small: { revenue: 3000000, profit: 800000, asking: 2000000 },
  medium: { revenue: 12000000, profit: 3000000, asking: 7500000 },
  large: { revenue: 50000000, profit: 8000000, asking: 20000000 },
};

export default function CalculatorPage() {
  const [revenue, setRevenue] = useState<string>("");
  const [profit, setProfit] = useState<string>("");
  const [askingPrice, setAskingPrice] = useState<string>("");
  const [useFinancing, setUseFinancing] = useState(false);
  const [downPaymentPercent, setDownPaymentPercent] = useState<string>("20");
  const [interestRate, setInterestRate] = useState<string>("8");
  const [loanTerm, setLoanTerm] = useState<string>("3");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Parse values
  const revenueNum = parseFloat(revenue) || 0;
  const profitNum = parseFloat(profit) || 0;
  const askingNum = parseFloat(askingPrice) || 0;
  const downPaymentPct = parseFloat(downPaymentPercent) || 20;
  const interestRateNum = parseFloat(interestRate) || 8;
  const loanTermNum = parseFloat(loanTerm) || 3;

  // Calculations
  const revenueMultiple = askingNum > 0 && revenueNum > 0 ? askingNum / revenueNum : null;
  const profitMultiple = askingNum > 0 && profitNum > 0 ? askingNum / profitNum : null;
  const simpleROI = askingNum > 0 && profitNum > 0 ? (profitNum / askingNum) * 100 : null;
  const paybackPeriod = profitNum > 0 && askingNum > 0 ? askingNum / profitNum : null;

  // Financing calculations
  const downPaymentAmount = askingNum * (downPaymentPct / 100);
  const loanAmount = askingNum - downPaymentAmount;
  const monthlyEmi = calculateEMI(loanAmount, interestRateNum, loanTermNum);
  const annualDebtService = monthlyEmi * 12;
  const annualCashFlow = profitNum - annualDebtService;
  const cashOnCashROI = downPaymentAmount > 0 ? (annualCashFlow / downPaymentAmount) * 100 : null;

  // Break-even
  const breakevenYears = useFinancing
    ? downPaymentAmount / (annualCashFlow > 0 ? annualCashFlow : profitNum)
    : paybackPeriod;
  const progressPercent = Math.min(((breakevenYears || 10) / 10) * 100, 100);

  // Verdict
  const verdict = generateVerdict(revenueMultiple, profitMultiple, simpleROI, paybackPeriod, cashOnCashROI, annualCashFlow, useFinancing);

  // Color helpers
  const getMultipleColor = (val: number | null, thresholds: [number, number]) => {
    if (val === null) return { bg: "", text: "" };
    if (val < thresholds[0]) return { bg: "bg-green-500/10 border-green-500", text: "text-green-500" };
    if (val <= thresholds[1]) return { bg: "bg-yellow-500/10 border-yellow-500", text: "text-yellow-500" };
    return { bg: "bg-red-500/10 border-red-500", text: "text-red-500" };
  };

  const getROIColor = (val: number | null) => {
    if (val === null) return { bg: "", text: "" };
    if (val >= 33) return { bg: "bg-green-500/10 border-green-500", text: "text-green-500" };
    if (val >= 20) return { bg: "bg-yellow-500/10 border-yellow-500", text: "text-yellow-500" };
    return { bg: "bg-red-500/10 border-red-500", text: "text-red-500" };
  };

  const getPaybackColor = (val: number | null) => {
    if (val === null) return { bg: "", text: "" };
    if (val <= 3) return { bg: "bg-green-500/10 border-green-500", text: "text-green-500" };
    if (val <= 5) return { bg: "bg-yellow-500/10 border-yellow-500", text: "text-yellow-500" };
    return { bg: "bg-red-500/10 border-red-500", text: "text-red-500" };
  };

  const getProgressColor = () => {
    if (!breakevenYears) return "bg-green-500";
    if (breakevenYears <= 3) return "bg-green-500";
    if (breakevenYears <= 5) return "bg-yellow-500";
    return "bg-red-500";
  };

  const revMultColors = getMultipleColor(revenueMultiple, [1, 2]);
  const profMultColors = getMultipleColor(profitMultiple, [2.5, 4]);
  const roiColors = getROIColor(simpleROI);
  const paybackColors = getPaybackColor(paybackPeriod);

  // URL sync
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.has("r")) setRevenue(params.get("r") || "");
      if (params.has("p")) setProfit(params.get("p") || "");
      if (params.has("a")) setAskingPrice(params.get("a") || "");
      if (params.has("f")) {
        setUseFinancing(true);
        if (params.has("dp")) setDownPaymentPercent(params.get("dp") || "20");
        if (params.has("ir")) setInterestRate(params.get("ir") || "8");
        if (params.has("lt")) setLoanTerm(params.get("lt") || "3");
      }
    }
  }, []);

  const updateURL = useCallback(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams();
    if (revenue) params.set("r", revenue);
    if (profit) params.set("p", profit);
    if (askingPrice) params.set("a", askingPrice);
    if (useFinancing) {
      params.set("f", "1");
      params.set("dp", downPaymentPercent);
      params.set("ir", interestRate);
      params.set("lt", loanTerm);
    }
    const newURL = params.toString() ? `?${params.toString()}` : window.location.pathname;
    history.replaceState({}, "", newURL);
  }, [revenue, profit, askingPrice, useFinancing, downPaymentPercent, interestRate, loanTerm]);

  useEffect(() => {
    updateURL();
  }, [updateURL]);

  const loadPreset = (type: "small" | "medium" | "large") => {
    const p = presets[type];
    setRevenue(p.revenue.toString());
    setProfit(p.profit.toString());
    setAskingPrice(p.asking.toString());
  };

  const resetCalculator = () => {
    setRevenue("");
    setProfit("");
    setAskingPrice("");
    setDownPaymentPercent("20");
    setInterestRate("8");
    setLoanTerm("3");
    setUseFinancing(false);
    if (typeof window !== "undefined") {
      history.pushState({}, "", window.location.pathname);
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  const copyResults = () => {
    const text = `📊 Business Deal Analysis

Revenue: ${formatIndian(revenueNum)}
Profit/SDE: ${formatIndian(profitNum)}
Asking Price: ${formatIndian(askingNum)}

📈 Results:
• Revenue Multiple: ${formatMultiple(revenueMultiple)}
• Profit Multiple: ${formatMultiple(profitMultiple)}
• ROI: ${formatPercent(simpleROI)}
• Payback: ${formatYears(paybackPeriod)}

${verdict.emoji} Verdict: ${verdict.title}

Calculated at: buyabusiness-india.com/resources/calculator`;

    navigator.clipboard.writeText(text).then(() => showToast("Results copied!"));
  };

  const shareResults = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title: "Business Deal Analysis",
        text: "Check out this deal analysis",
        url: url,
      });
    } else {
      navigator.clipboard.writeText(url).then(() => showToast("Link copied!"));
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            🧮 Business Deal Calculator
          </h1>
          <p className="text-gray-400">Analyze business acquisitions instantly. Know if it&apos;s a good deal.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="bg-[#242424] rounded-xl p-6 border border-[#3d3d3d]">
            <h2 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <span>📊</span> Deal Details
            </h2>

            {/* Presets */}
            <div className="flex gap-2 mb-4 flex-wrap">
              <button
                onClick={() => loadPreset("small")}
                className="px-3 py-1.5 text-xs bg-[#2d2d2d] border border-[#3d3d3d] rounded-md text-gray-400 hover:bg-[#3d3d3d] hover:text-white transition-colors"
              >
                Small Biz (₹20L)
              </button>
              <button
                onClick={() => loadPreset("medium")}
                className="px-3 py-1.5 text-xs bg-[#2d2d2d] border border-[#3d3d3d] rounded-md text-gray-400 hover:bg-[#3d3d3d] hover:text-white transition-colors"
              >
                Mid-size (₹75L)
              </button>
              <button
                onClick={() => loadPreset("large")}
                className="px-3 py-1.5 text-xs bg-[#2d2d2d] border border-[#3d3d3d] rounded-md text-gray-400 hover:bg-[#3d3d3d] hover:text-white transition-colors"
              >
                Large (₹2Cr)
              </button>
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Annual Revenue</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                  <input
                    type="number"
                    value={revenue}
                    onChange={(e) => setRevenue(e.target.value)}
                    placeholder="e.g., 5000000"
                    className="w-full pl-8 pr-4 py-3 bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Annual Profit / SDE (Seller&apos;s Discretionary Earnings)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                  <input
                    type="number"
                    value={profit}
                    onChange={(e) => setProfit(e.target.value)}
                    placeholder="e.g., 1200000"
                    className="w-full pl-8 pr-4 py-3 bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Asking Price</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                  <input
                    type="number"
                    value={askingPrice}
                    onChange={(e) => setAskingPrice(e.target.value)}
                    placeholder="e.g., 3600000"
                    className="w-full pl-8 pr-4 py-3 bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
              </div>

              {/* Financing Toggle */}
              <div className="pt-4 border-t border-[#3d3d3d]">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={useFinancing}
                    onChange={(e) => setUseFinancing(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-[#2d2d2d] rounded-full peer-checked:bg-indigo-500 relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-gray-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5 peer-checked:after:bg-white"></div>
                  <span className="text-sm">Include Seller Financing</span>
                </label>

                {useFinancing && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Down Payment</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={downPaymentPercent}
                          onChange={(e) => setDownPaymentPercent(e.target.value)}
                          className="w-full pl-4 pr-8 py-3 bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Interest Rate</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={interestRate}
                          onChange={(e) => setInterestRate(e.target.value)}
                          step="0.5"
                          className="w-full pl-4 pr-8 py-3 bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Loan Term</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={loanTerm}
                          onChange={(e) => setLoanTerm(e.target.value)}
                          className="w-full pl-4 pr-12 py-3 bg-[#2d2d2d] border border-[#3d3d3d] rounded-lg text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">years</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#242424] rounded-xl p-6 border border-[#3d3d3d]">
            <h2 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <span>📈</span> Analysis
            </h2>

            <div className="grid grid-cols-2 gap-3">
              <div className={`bg-[#1a1a1a] p-4 rounded-lg border ${revMultColors.bg || "border-[#3d3d3d]"}`}>
                <div className="text-xs text-gray-400 mb-1">Revenue Multiple</div>
                <div className={`text-2xl font-bold tabular-nums ${revMultColors.text}`}>
                  {formatMultiple(revenueMultiple)}
                </div>
                <div className="text-xs text-gray-500 mt-1">Asking Price ÷ Revenue</div>
              </div>

              <div className={`bg-[#1a1a1a] p-4 rounded-lg border ${profMultColors.bg || "border-[#3d3d3d]"}`}>
                <div className="text-xs text-gray-400 mb-1">Profit Multiple</div>
                <div className={`text-2xl font-bold tabular-nums ${profMultColors.text}`}>
                  {formatMultiple(profitMultiple)}
                </div>
                <div className="text-xs text-gray-500 mt-1">Asking Price ÷ SDE</div>
              </div>

              <div className={`bg-[#1a1a1a] p-4 rounded-lg border ${roiColors.bg || "border-[#3d3d3d]"}`}>
                <div className="text-xs text-gray-400 mb-1">Simple ROI</div>
                <div className={`text-2xl font-bold tabular-nums ${roiColors.text}`}>
                  {formatPercent(simpleROI)}
                </div>
                <div className="text-xs text-gray-500 mt-1">Annual return on investment</div>
              </div>

              <div className={`bg-[#1a1a1a] p-4 rounded-lg border ${paybackColors.bg || "border-[#3d3d3d]"}`}>
                <div className="text-xs text-gray-400 mb-1">Payback Period</div>
                <div className={`text-2xl font-bold tabular-nums ${paybackColors.text}`}>
                  {formatYears(paybackPeriod)}
                </div>
                <div className="text-xs text-gray-500 mt-1">Years to recover investment</div>
              </div>
            </div>

            {/* Financing Results */}
            {useFinancing && (
              <div className="mt-6 pt-6 border-t border-[#3d3d3d]">
                <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
                  <span>💳</span> With Financing
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#3d3d3d]">
                    <div className="text-xs text-gray-400 mb-1">Down Payment</div>
                    <div className="text-xl font-bold tabular-nums">{formatIndian(downPaymentAmount)}</div>
                  </div>

                  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#3d3d3d]">
                    <div className="text-xs text-gray-400 mb-1">Monthly EMI</div>
                    <div className="text-xl font-bold tabular-nums">{formatIndian(monthlyEmi)}</div>
                  </div>

                  <div className={`bg-[#1a1a1a] p-4 rounded-lg border ${cashOnCashROI !== null && cashOnCashROI >= 50 ? "bg-green-500/10 border-green-500" : cashOnCashROI !== null && cashOnCashROI >= 25 ? "bg-yellow-500/10 border-yellow-500" : cashOnCashROI !== null ? "bg-red-500/10 border-red-500" : "border-[#3d3d3d]"}`}>
                    <div className="text-xs text-gray-400 mb-1">Cash-on-Cash ROI</div>
                    <div className={`text-xl font-bold tabular-nums ${cashOnCashROI !== null && cashOnCashROI >= 50 ? "text-green-500" : cashOnCashROI !== null && cashOnCashROI >= 25 ? "text-yellow-500" : cashOnCashROI !== null ? "text-red-500" : ""}`}>
                      {formatPercent(cashOnCashROI)}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Return on your cash invested</div>
                  </div>

                  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#3d3d3d]">
                    <div className="text-xs text-gray-400 mb-1">Annual Cash Flow</div>
                    <div className={`text-xl font-bold tabular-nums ${annualCashFlow >= 0 ? "text-green-500" : "text-red-500"}`}>
                      {formatIndian(annualCashFlow)}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Profit after debt service</div>
                  </div>
                </div>
              </div>
            )}

            {/* Break-even */}
            <div className="mt-6">
              <div className="text-xs text-gray-400 mb-2">Break-even Progress</div>
              <div className="h-2 bg-[#2d2d2d] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${getProgressColor()}`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>0 yrs</span>
                <span>{formatYears(breakevenYears)} to break even</span>
                <span>10 yrs</span>
              </div>
            </div>
          </div>

          {/* Verdict Section */}
          <div className="md:col-span-2 bg-[#242424] rounded-xl p-6 border border-[#3d3d3d]">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{verdict.emoji}</span>
              <h2 className="text-2xl font-bold">{verdict.title}</h2>
            </div>

            <ul className="space-y-2">
              {verdict.reasons.map((reason, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-400">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      reason.type === "pro" ? "bg-green-500" : reason.type === "con" ? "bg-red-500" : "bg-yellow-500"
                    }`}
                  />
                  {reason.text}
                </li>
              ))}
            </ul>

            <div className="flex gap-3 mt-6 flex-wrap">
              <button
                onClick={copyResults}
                className="flex items-center gap-2 px-4 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
                Copy Results
              </button>
              <button
                onClick={shareResults}
                className="flex items-center gap-2 px-4 py-2.5 bg-[#2d2d2d] hover:bg-[#3d3d3d] border border-[#3d3d3d] text-white rounded-lg font-medium transition-colors"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
                </svg>
                Share Link
              </button>
              <button
                onClick={resetCalculator}
                className="flex items-center gap-2 px-4 py-2.5 bg-[#2d2d2d] hover:bg-[#3d3d3d] border border-[#3d3d3d] text-white rounded-lg font-medium transition-colors"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 pt-8 border-t border-[#3d3d3d] text-gray-500 text-sm">
          <p>Built for smart business buyers in India 🇮🇳</p>
          <p className="mt-2">
            <a href="https://buyabusiness-india.com" className="text-indigo-400 hover:underline">
              BuyABusiness India
            </a>{" "}
            — Find profitable businesses for sale
          </p>
        </footer>
      </div>

      {/* Toast */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
          toastVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
        }`}
      >
        ✓ {toastMessage}
      </div>
    </div>
  );
}
