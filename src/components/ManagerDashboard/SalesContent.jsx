import React from "react";

const SalesContent = () => {
  const salesData = [
    { id: 1, date: "2024-07-31", amount: "$200", customer: "John Doe" },
    { id: 2, date: "2024-07-30", amount: "$150", customer: "Jane Smith" },
    { id: 3, date: "2024-07-29", amount: "$300", customer: "Bob Johnson" },
    // Add more sales data as needed
  ];

  return (
    <div className="p-4 bg-white shadow-md rounded mt-4">
      <h3 className="text-xl font-bold mb-4">Sales Overview</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-green-300 rounded">
          <h4 className="text-lg font-bold">Total Sales</h4>
          <p className="text-2xl">$650</p>
        </div>
        <div className="p-4 bg-purple-200 rounded">
          <h4 className="text-lg font-bold">Total Transactions</h4>
          <p className="text-2xl">3</p>
        </div>
        <div className="p-4 bg-blue-300 rounded">
          <h4 className="text-lg font-bold">Average Sale</h4>
          <p className="text-2xl">$217</p>
        </div>
      </div>
      <h3 className="text-xl font-bold my-4">Recent Transactions</h3>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-grey-500">
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Customer</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale, index) => (
            <tr
              key={sale.id}
              className={
                index % 2 === 0 ? "bg-blue-400 text-center" : "text-center"
              }
            >
              <td className="py-2 px-4 border-b">{sale.date}</td>
              <td className="py-2 px-4 border-b">{sale.amount}</td>
              <td className="py-2 px-4 border-b">{sale.customer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesContent;
