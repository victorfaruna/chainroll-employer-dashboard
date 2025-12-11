import React from "react";

const AdmissionSummary = () => {
  const data = [
    { day: "S", height: "40%", active: false, color: "bg-gray-200" },
    { day: "M", height: "70%", active: true, color: "bg-gray-900" },
    { day: "T", height: "50%", active: true, color: "bg-gray-900" },
    { day: "W", height: "45%", active: true, color: "bg-gray-900" },
    { day: "T", height: "85%", active: true, color: "bg-gray-900" },
    { day: "F", height: "60%", active: false, color: "bg-purple-500" },
    { day: "S", height: "35%", active: false, color: "bg-gray-200" },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg shadow-secondary/3 border border-gray-50 flex flex-col h-full">
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          Admission Summary
        </h3>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-semibold font-clash-display text-gray-900">
            $4,563
          </span>
          <span className="bg-green-50 text-green-600 px-2 py-1 rounded-md text-xs font-bold border border-green-100">
            +0.5%
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end">
        <div className="relative h-[180px] w-full flex items-end justify-between px-2">
          {/* Dashed background line */}
          <div className="absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-gray-200 -z-10"></div>

          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 h-full justify-end group cursor-pointer"
            >
              <div
                className={`w-3.5 rounded-full relative transition-all duration-300 ${item.color}`}
                style={{ height: item.height }}
              >
                {/* The "dot" at the bottom for style (mimicking the exclamation mark look in the design) */}
                <div
                  className={`absolute -bottom-5 left-0 w-3.5 h-3.5 rounded-full ${item.color}`}
                ></div>
              </div>
              {/* Spacer for the bottom dot */}
              <div className="h-2"></div>
            </div>
          ))}
        </div>

        <div className="flex justify-between px-2 mt-4 text-xs font-semibold text-gray-400">
          {data.map((item, index) => (
            <span
              key={index}
              className={`w-4 text-center ${
                item.day === "F" ? "text-gray-900" : ""
              }`}
            >
              {item.day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmissionSummary;
