import React from "react";

const KeyFeatures = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-blue-800 mb-4">
          Our Key Features
        </h1>
        <p className="text-gray-500 px-4">
          Our inventory manager is designed to streamline our operations giving
          you the power to manage your stock effortlessly and accurately.
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-7 mt-12">
        <div className="w-1/4 min-w-[200px] h-[200px] bg-white p-4 rounded-lg shadow-xl">
          <h2 className="text-sm font-bold mb-2 text-center">
            Inventory Tracking
          </h2>
          <p className="text-gray-500 text-center">
            You can monitor every item across your supply chain with precision
            and ease
          </p>
        </div>
        <div className="w-1/4 min-w-[200px] h-[200px] bg-white p-4 rounded-lg shadow-xl">
          <h2 className="text-sm font-bold mb-2 text-center">Sales Tracking</h2>
          <p className="text-gray-500 text-center">
            This feature not only records every transaction but also provides
            insight into your sales pattern
          </p>
        </div>
        <div className="w-1/4 min-w-[200px] h-[200px] bg-white p-4 rounded-lg shadow-xl">
          <h2 className="text-sm font-bold mb-2 text-center">Item Details</h2>
          <p className="text-gray-500 text-center">
            It gives you and your team complete infomation at a glance enhancing
            product management and customer service
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-7 mt-4">
        <div className="w-1/4 min-w-[200px] h-[200px] bg-white p-4 rounded-lg shadow-xl">
          <h2 className="text-sm font-bold mb-2 text-center">Reverse Sales</h2>
          <p className="text-gray-500 text-center">
            It simplifies the process of handling return and refunds
          </p>
        </div>
        <div className="w-1/4 min-w-[200px] h-[200px] bg-white p-4 rounded-lg shadow-xl">
          <h2 className="text-sm font-bold mb-2 text-center">Cloud Sync</h2>
          <p className="text-gray-500 text-center">
            Ensures your inventory data is always at your finger tips no matter
            where you are
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
