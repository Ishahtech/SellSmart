import React from "react";

const ManagerHeader = ({ toggleSidebar }) => {
  return (
    <>
      <div className="bg-white p-4 shadow-md flex justify-between items-center">
        <button className="lg:hidden" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <h1 className="text-xl font-bold flex-1 text-center lg:text-left lg:flex-none">
          Manager's Dashboard
        </h1>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default ManagerHeader;
