import React from "react";
import BalanceSummary from "./BalanceSummary";
import AdmissionSummary from "./AdmissionSummary";
import ContactsList from "./ContactsList";

const ChartTray = () => {
  return (
    <div className="max-w-[1500px] grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-3 w-full">
      <div className="w-full col-span-2">
        <BalanceSummary />
      </div>
      <div className="w-full">
        <ContactsList />
      </div>
      <div className="w-full">
        <AdmissionSummary />
      </div>
    </div>
  );
};

export default ChartTray;
