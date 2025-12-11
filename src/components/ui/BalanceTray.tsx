import React from "react";

interface BalanceCardProps {
  title: string;
  icon: React.ReactNode;
  amount: string;
  growth: string;
  chart: React.ReactNode;
}

const BalanceCard = ({
  title,
  icon,
  amount,
  growth,
  chart,
}: BalanceCardProps) => {
  return (
    <div className="max-2xl:flex-1 bg-white p-4 rounded-xl flex flex-col justify-between h-[180px] 2xl:min-w-[400px] shadow-lg shadow-secondary/4">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-gray-50 flex items-center justify-center text-secondary">
            {icon}
          </div>
          <span className="text-secondary/60 font-medium">{title}</span>
        </div>
        <div className="px-3 py-1.5 bg-gray-50 rounded-md">
          <span className="text-xs font-medium text-secondary/40">
            Last Month
          </span>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <h3 className="text-[22px] font-semibold text-secondary font-clash-display">
              {amount}
            </h3>
            <div className="px-2 py-1 bg-emerald-50 rounded-full border border-emerald-100">
              <span className="text-xs font-bold text-emerald-500">
                {growth}
              </span>
            </div>
          </div>
        </div>
        <div className="h-10 w-24 flex items-end justify-end">{chart}</div>
      </div>
    </div>
  );
};

interface BalanceData {
  amount: string;
  growth: string;
}

interface BalanceTrayProps {
  expenses?: BalanceData;
  income?: BalanceData;
  transactions?: BalanceData;
}

const BalanceTray = ({
  expenses = { amount: "$15,585", growth: "+0.5%" },
  income = { amount: "$54,253", growth: "+0.5%" },
  transactions = { amount: "$15,585", growth: "+0.5%" },
}: BalanceTrayProps) => {
  return (
    <div className="flex gap-3 w-full overflow-x-auto">
      {/* Expense Card */}
      <BalanceCard
        title="Expense"
        amount={expenses.amount}
        growth={expenses.growth}
        icon={
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
            <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
          </svg>
        }
        chart={
          <div className="flex items-end gap-[3px] h-full w-full justify-end opacity-20 hover:opacity-100 transition-opacity">
            {[0.4, 0.6, 0.5, 0.8, 0.6, 1, 0.8, 0.6, 0.5, 0.4].map((h, i) => (
              <div
                key={i}
                className={`w-1.5 bg-secondary rounded-full ${
                  i === 5 ? "bg-secondary! opacity-100!" : ""
                }`}
                style={{ height: `${h * 100}%` }}
              ></div>
            ))}
          </div>
        }
      />

      {/* Income Card */}
      <BalanceCard
        title="Income"
        amount={income.amount}
        growth={income.growth}
        icon={
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
            <path d="M20 7h-7" />
            <path d="M14 17H3" />
            <circle cx="17" cy="17" r="3" />
            <path d="m14 14 3 3 3-3" />
            <path d="M3 7v10a2 2 0 0 0 2 2h2" />
            <path d="M3 7h10a2 2 0 0 1 2 2v2" />
          </svg>
        }
        chart={
          <div className="flex items-end gap-[2px] h-full w-full justify-end">
            {[40, 60, 45, 70, 50, 40, 30, 45, 60, 55, 70, 80, 75, 50].map(
              (h, i) => (
                <div
                  key={i}
                  className="w-1 bg-secondary rounded-full"
                  style={{ height: `${h}%` }}
                ></div>
              )
            )}
          </div>
        }
      />

      {/* Transactions Card */}
      <BalanceCard
        title="Transactions"
        amount={transactions.amount}
        growth={transactions.growth}
        icon={
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
            <path d="M8 3 4 7l4 4" />
            <path d="M4 7h16" />
            <path d="m16 21 4-4-4-4" />
            <path d="M20 17H4" />
          </svg>
        }
        chart={
          <svg
            viewBox="0 0 100 40"
            fill="none"
            className="w-full h-full text-secondary"
            preserveAspectRatio="none"
          >
            <path
              d="M0 30 C 10 30, 15 20, 25 20 S 35 30, 45 30 S 55 10, 65 10 S 75 30, 85 30 S 95 20, 100 20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        }
      />
    </div>
  );
};

export default BalanceTray;
