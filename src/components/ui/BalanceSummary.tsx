import React from "react";

const BalanceSummary = () => {
  return (
    <div className="bg-white/30 p-6 rounded-xl border border-gray-200 flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <h3 className="font-medium text-gray-800">Your Payroll Spend</h3>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 transition-colors">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          Last Month
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
        <div>
          <p className="text-sm text-gray-500 font-medium">Spent</p>
          <p className="text-xl font-clash-display font-semibold text-gray-900">
            $525,252.000
          </p>
        </div>
      </div>

      <div className="flex-1 w-full min-h-[200px] relative">
        {/* Placeholder Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-8 w-10 flex flex-col justify-between text-xs text-gray-400 font-medium">
          <span>1000</span>
          <span>800</span>
          <span>600</span>
          <span>400</span>
          <span>200</span>
        </div>

        {/* Chart Area */}
        <div className="absolute left-10 right-0 top-2 bottom-8">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 150"
            preserveAspectRatio="none"
            className="overflow-visible"
          >
            <path
              d="M0,80 C20,70 40,85 60,60 C80,35 100,45 120,40 C140,35 160,65 180,75 C200,85 220,70 240,65 C260,60 280,110 300,120 L310,100 C320,90 340,70 360,60 C380,50 400,65 400,60"
              fill="none"
              stroke="#2563eb"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-sm"
            />
            <path
              d="M0,80 C20,70 40,85 60,60 C80,35 100,45 120,40 C140,35 160,65 180,75 C200,85 220,70 240,65 C260,60 280,110 300,120 L310,100 C320,90 340,70 360,60 C380,50 400,65 400,60 V150 H0 Z"
              fill="url(#gradient)"
              opacity="0.1"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* X-axis labels */}
        <div className="absolute left-10 right-0 bottom-0 flex justify-between text-xs text-gray-400 uppercase font-medium">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>
      </div>
    </div>
  );
};

export default BalanceSummary;
