import React from "react";

const CashierContent = () => {
  const cashierData = [
    { id: 1, name: "Aishat Salawudeen", timeOnDuty: "9:00 AM - 5:00 PM" },
    { id: 2, name: "Jane Irungu", timeOnDuty: "1:00 PM - 9:00 PM" },
    { id: 3, name: "Ossai Oyenka", timeOnDuty: "5:00 PM - 1:00 AM" },
    // Add more cashier data as needed
  ];

  return (
    <div className="p-4 bg-white shadow-md rounded mt-4">
      <h3 className="text-xl font-bold mb-4">Cashier Overview</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-200 rounded">
          <h4 className="text-lg font-bold">Total Cashiers</h4>
          <p className="text-2xl">{cashierData.length}</p>
        </div>
      </div>
      <h3 className="text-xl font-bold my-4">Cashier List</h3>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-400">
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Time on Duty</th>
          </tr>
        </thead>
        <tbody>
          {cashierData.map((cashier, index) => (
            <tr
              key={cashier.id}
              className={
                index % 2 === 0 ? "bg-gray-300 text-center" : "text-center"
              }
            >
              <td className="py-2 px-4 border-b">{cashier.name}</td>
              <td className="py-2 px-4 border-b">{cashier.timeOnDuty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CashierContent;
