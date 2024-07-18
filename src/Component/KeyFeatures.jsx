import React from "react";

const KeyFeatures = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-blue-800 mb-4">
          Our Key Features
        </h1>
        <p className="text-gray-500 px-4 text-ms">
          Our inventory manager is designed to streamline our operations giving
          you the power to manage your stock effortlessly and accurately.
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-7 mt-12">
        <div className="w-1/4 min-w-[300px] h-[300px] bg-white p-4 rounded-lg shadow-xl flex flex-col hover:bg-blue-500 hover:text-white transition-colors duration-300">
          <svg
            class="w-64 h-64 text-blue-800 hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
            />
          </svg>

          <h2 className="text-xl font-bold mb-2 text-center">
            Inventory Management
          </h2>
          <p className="text-gray-500 text-center hover:text-white transition-colors duration-300">
            This monitor inventory levels in real-time, Set thresholds for
            automatic stock reordering, Receive notifications when stock levels
            are low or items are out of stock and also Manage different sizes,
            colors, and styles of products.
          </p>
        </div>
        <div className="w-1/4 min-w-[300px] h-[300px] bg-white p-4 rounded-lg shadow-xl flex flex-col hover:bg-blue-500 hover:text-white transition-colors duration-300">
          <svg
            class="w-64 h-64 text-blue-800 hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 6c0 1.657-3.134 3-7 3S5 7.657 5 6m14 0c0-1.657-3.134-3-7-3S5 4.343 5 6m14 0v6M5 6v6m0 0c0 1.657 3.134 3 7 3s7-1.343 7-3M5 12v6c0 1.657 3.134 3 7 3s7-1.343 7-3v-6"
            />
          </svg>

          <h2 className="text-xl font-bold mb-2 text-center">
            Reporting and Analytics
          </h2>
          <p className="text-gray-500 text-center  hover:text-white transition-colors duration-300">
            This feature generate detailed sales reports and insights, Track
            inventory performance and turnover rates, Monitor employee sales and
            performance metrics, Analyze customer buying patterns and
            preferences.
          </p>
        </div>
        <div className="w-1/4 min-w-[300px] h-[300px] bg-white p-4 rounded-lg shadow-xl flex flex-col hover:bg-blue-500 hover:text-white transition-colors duration-300">
          <svg
            class="w-64 h-64 text-blue-800 hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="square"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
            />
          </svg>

          <h2 className="text-xl font-bold mb-2 text-center">
            Sales Processing
          </h2>
          <p className="text-gray-500 text-center  hover:text-white transition-colors duration-300">
            Efficient processing of sales transactions, including cash,
            credit/debit cards, and digital payments. Integration with barcode
            scanners to stramline the checkout processs and also able to print
            reciepts to customers.
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-7 mt-4">
        <div className="w-1/4 min-w-[300px] h-[300px] bg-white p-4 rounded-lg shadow-xl flex flex-col hover:bg-blue-500 hover:text-white transition-colors duration-300">
          <svg
            class="w-64 h-64 text-blue-800 hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 20a16.405 16.405 0 0 1-5.092-5.804A16.694 16.694 0 0 1 5 6.666L12 4l7 2.667a16.695 16.695 0 0 1-1.908 7.529A16.406 16.406 0 0 1 12 20Z"
            />
          </svg>

          <h2 className="text-xl font-bold mb-2 text-center">Security</h2>
          <p className="text-gray-500 text-center hover:text-white transition-colors duration-300">
            Secure sensitive data with encryption, Implement robust user
            authentication methods and also, tools for detecting and preventing
            fraudulent transactions.
          </p>
        </div>
        <div className="w-1/4 min-w-[300px] h-[300px] bg-white p-4 rounded-lg shadow-xl flex flex-col hover:bg-blue-500 hover:text-white transition-colors duration-300">
          <svg
            class="w-64 h-64 text-blue-800 hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="square"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>

          <h2 className="text-xl font-bold mb-2 text-center">
            Employee Management
          </h2>
          <p className="text-gray-500 text-center hover:text-white transition-colors duration-300">
            Set different access levels for employees based on their roles,
            Manage employee shifts and track working hours. monitors individual
            employee sales and performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
