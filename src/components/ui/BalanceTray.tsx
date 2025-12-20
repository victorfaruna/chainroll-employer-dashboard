import React from "react";

interface BalanceData {
  amount: string;
  growth: string;
}

interface BalanceTrayProps {
  // Keeping these optional to avoid breaking parent usage, though we might only use one conceptual "total"
  expenses?: BalanceData;
  income?: BalanceData;
  transactions?: BalanceData;
}

const ActionButton = ({
  label,
  icon,
  filled = false,
}: {
  label: string;
  icon: React.ReactNode;
  filled?: boolean;
}) => (
  <button
    className={`flex items-center gap-2 px-4 py-2 cursor-pointer rounded-full border transition-all ${
      filled
        ? "bg-black text-white border-black hover:bg-gray-800"
        : "bg-white/30 text-secondary/60 border-gray-200 hover:border-gray-200 hover:bg-gray-50"
    }`}
  >
    {icon}
    <span className={`font-semibold ${filled ? "" : "text-secondary/70"}`}>
      {label}
    </span>
  </button>
);

const BalanceTray = ({}: BalanceTrayProps) => {
  return (
    <div className="w-full flex p-6 mb-4 flex-col gap-4">
      <div className="flex flex-col gap-3">
        <p className="text-secondary font-medium">Payroll Treasury Balance</p>
        <div className="flex items-end gap-2">
          <h1 className="text-6xl leading-none font-semibold text-secondary font-chillax">
            <span className="text-4xl opacity-[0.7]">$</span>400
            <span className="opacity-[0.5] text-4xl">.00</span>
          </h1>
          <div className="mb-2 px-2 py-1 bg-emerald-50 rounded-full border border-emerald-100 flex items-center gap-1.5">
            <div className="size-4 rounded-full bg-emerald-500 flex items-center justify-center">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19V5" />
                <path d="M5 12l7-7 7 7" />
              </svg>
            </div>
            <span className="font-bold text-emerald-600">+0.99%</span>
            <span className="font-medium text-emerald-600/70 ml-1">
              Last 7 days
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <ActionButton
          label="Deposit"
          filled
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          }
        />
        <ActionButton
          label="Send"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          }
        />
        {/* <ActionButton
          label="Deposit"
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
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
              <line x1="16" x2="22" y1="5" y2="5" />
              <line x1="19" x2="19" y1="2" y2="8" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          }
        /> */}
        <ActionButton
          label="Withdraw"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default BalanceTray;
