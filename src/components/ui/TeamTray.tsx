import React from "react";

const TeamTray = () => {
  const transactions = [
    {
      id: 1,
      name: "Floyd Miles",
      date: "8 Nov 4:25 PM",
      amount: "+$4.744",
      card: "MasterCard 404",
      status: "In Process",
      img: "https://i.pravatar.cc/150?u=12",
    },
    {
      id: 2,
      name: "Jane Cooper",
      date: "10 Nov 7:41 PM",
      amount: "+$7.147",
      card: "MasterCard 404",
      status: "Completed",
      img: "https://i.pravatar.cc/150?u=8",
    },
    {
      id: 3,
      name: "Ralph Edwards",
      date: "11 Nov 5:25 PM",
      amount: "+$4.448",
      card: "MasterCard 404",
      status: "In Process",
      img: "https://i.pravatar.cc/150?u=3",
    },
    {
      id: 4,
      name: "Jacob Jones",
      date: "14 Nov 8:32 PM",
      amount: "+$4.474",
      card: "MasterCard 404",
      status: "Completed",
      img: "https://i.pravatar.cc/150?u=18",
    },
  ];

  const invoices = [
    {
      name: "Kathryn Murphy",
      role: "Head Manager",
      amount: "$511",
      img: "https://i.pravatar.cc/150?u=2",
      bg: "bg-green-100",
    },
    {
      name: "Eleanor Pena",
      role: "Programmer",
      amount: "$525",
      img: "https://i.pravatar.cc/150?u=32",
      bg: "bg-blue-100",
    },
    {
      name: "Kristin Watson",
      role: "Graphic Designers",
      amount: "$741",
      img: "https://i.pravatar.cc/150?u=4",
      bg: "bg-orange-100",
    },
    {
      name: "Floyd Miles",
      role: "Head Manager",
      amount: "$524",
      img: "https://i.pravatar.cc/150?u=12",
      bg: "bg-pink-100",
    },
    {
      name: "Guy Hawkins",
      role: "Software Engineer",
      amount: "$785",
      img: "https://i.pravatar.cc/150?u=6",
      bg: "bg-purple-100",
    },
  ];

  const getStatusColor = (status: string) => {
    if (status === "Completed") return "text-emerald-500 bg-emerald-50";
    if (status === "In Process") return "text-orange-500 bg-orange-50";
    return "text-gray-500 bg-gray-50";
  };

  const getStatusDot = (status: string) => {
    if (status === "Completed") return "bg-emerald-500";
    if (status === "In Process") return "bg-orange-500";
    return "bg-gray-500";
  };

  const SearchIcon = () => (
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
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );

  const FilterIcon = () => (
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
      <line x1="4" y1="21" x2="4" y2="14"></line>
      <line x1="4" y1="10" x2="4" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12" y2="3"></line>
      <line x1="20" y1="21" x2="20" y2="16"></line>
      <line x1="20" y1="12" x2="20" y2="3"></line>
      <line x1="1" y1="14" x2="7" y2="14"></line>
      <line x1="9" y1="8" x2="15" y2="8"></line>
      <line x1="17" y1="16" x2="23" y2="16"></line>
    </svg>
  );

  const MoreVerticalIcon = () => (
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
      <circle cx="12" cy="12" r="1"></circle>
      <circle cx="12" cy="5" r="1"></circle>
      <circle cx="12" cy="19" r="1"></circle>
    </svg>
  );

  return (
    <div className="flex max-w-[1600px] flex-col xl:flex-row gap-3 h-full min-h-[400px]">
      {/* Latest Transaction Section */}
      <div className="flex-1 bg-white/30 p-6 rounded-xl border border-gray-200 flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              Latest Transaction
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Your Most Recent Activity
            </p>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50/80 text-gray-600 hover:bg-gray-100 transition-colors border border-gray-100">
              <SearchIcon />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50/80 text-gray-600 hover:bg-gray-100 transition-colors border border-gray-100">
              <FilterIcon />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <tbody className="divide-y divide-gray-50">
              {transactions.map((tx) => (
                <tr
                  key={tx.id}
                  className="group hover:bg-gray-50/50 transition-colors"
                >
                  <td className="py-4 pl-1">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-gray-100 shadow-sm">
                        <img
                          src={tx.img}
                          alt={tx.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-semibold text-sm text-gray-900">
                        {tx.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-gray-500 font-medium">
                    {tx.date}
                  </td>
                  <td className="py-4 text-sm font-semibold font-clash-display text-gray-900">
                    {tx.amount}
                  </td>
                  <td className="py-4 text-sm text-gray-500 font-medium">
                    {tx.card}
                  </td>
                  <td className="py-4">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold ${getStatusColor(
                        tx.status
                      )}`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${getStatusDot(
                          tx.status
                        )}`}
                      ></span>
                      {tx.status}
                    </span>
                  </td>
                  <td className="py-4 text-right pr-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                      <MoreVerticalIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Invoices Sent Section */}
      <div className="w-full xl:w-[350px] bg-white p-6 rounded-xl shadow-lg shadow-secondary/3 border border-gray-50 flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              Invoices Sent
            </h3>
            <p className="text-sm text-gray-500 mt-1">You have 245 clients</p>
          </div>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50/80 text-gray-600 hover:bg-gray-100 transition-colors border border-gray-100">
            <MoreVerticalIcon />
          </button>
        </div>

        <div className="flex flex-col gap-5 overflow-y-auto max-h-[400px] pr-1">
          {invoices.map((invoice, index) => (
            <div
              key={index}
              className="flex items-center justify-between group cursor-pointer hover:bg-gray-50/50 p-2 rounded-xl -mx-2 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-2xl overflow-hidden shadow-sm ${invoice.bg}`}
                >
                  <img
                    src={invoice.img}
                    alt={invoice.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {invoice.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">
                    {invoice.role}
                  </p>
                </div>
              </div>

              <span className="font-bold text-gray-900 text-sm">
                {invoice.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamTray;
