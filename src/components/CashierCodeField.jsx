import React from "react";

const CashierCodeField = () => {
  return (
    <>
      <div>
        <div>
          <h3 className="mt-8 mb-3 text-md font-light text-gray-700">
            Cashier code
          </h3>
        </div>
        <div className="mb-10 rounded-xl">
          <label htmlFor="code-input" className="sr-only">
            Enter Code
          </label>
          
          <input
            id="code-input"
            name="code"
            type="text"
            autoComplete="off"
            required
            className="appearance-none rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
            placeholder="Enter Code"
          />
        </div>
      </div>
    </>
  );
};

export default CashierCodeField;
