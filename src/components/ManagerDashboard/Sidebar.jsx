import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-black text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:static lg:translate-x-0`}
      >
        <div className="p-4 text-lg font-bold">SellSmart</div>
        <ul>
          <li className="p-4 hover:bg-blue-800">
            <a href="#">Overview</a>
          </li>
          <li className="p-4 hover:bg-blue-800">
            <a href="#">Sales</a>
          </li>
          <li className="p-4 hover:bg-blue-800">
            <a href="#">Inventory</a>
          </li>
          <li className="p-4 hover:bg-blue-800">
            <a href="#">Reports</a>
          </li>
          <li className="p-4 hover:bg-blue-800">
            <a href="#">Cashiers</a>
          </li>
        </ul>
        <button
          className="absolute top-4 right-4 lg:hidden"
          onClick={toggleSidebar}
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
