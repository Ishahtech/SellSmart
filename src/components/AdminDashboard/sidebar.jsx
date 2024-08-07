import React from "react";
import { Link } from "react-router-dom";
import { CgMenuRound } from "react-icons/cg";
import { FaUsers, FaSitemap } from "react-icons/fa";
import { BsCart3, BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsPeopleFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <aside className="h-screen bg-gray-800 text-white w-64 space-y-6 py-7 px-2">
      <div className="text-white flex items-center space-x-2 px-4">
        <span className="text-2xl font-extrabold">SellSmart</span>
      </div>
      <nav>
        <ul className="space-y-2">
          <li className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
            <CgMenuRound />
            <Link to="/manager" className="ml-2">
              Dashboard
            </Link>
          </li>
          <li className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
            <FaUsers />
            <Link to="/admin" className="ml-2">
              Admin
            </Link>
          </li>

          <li className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
            <FaUsers />
            <Link to="/admin" className="ml-2">
              Manager
            </Link>
          </li>

          <li className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
            <FaUsers />
            <Link to="/admin" className="ml-2">
              Cashier
            </Link>
          </li>

          <li className="flex items-center px-4 py-2 text-bold text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
            <BsListCheck  />
            <Link to="/inventory" className="ml-2">
              Inventory
            </Link>
            </li>

          <li className="flex items-center px-4 py-2 text-bold text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
            <FaSitemap  />
            <Link to="/inventory" className="ml-2">
              Products
            </Link>
          </li>

          <li className="flex items-center px-4 py-2 text-bold text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
            <BsPeopleFill  />
            <Link to="/inventory" className="ml-2">
            Customers
            </Link>
          </li>

          <li className="flex items-center px-4 py-2 text-bold text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
            <BsMenuButtonWideFill  />
            <Link to="/inventory" className="ml-2">
            Reports
            </Link>
          </li>
          
          <li className="flex items-center px-4 py-2 text-bold text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
            <BsFillGearFill  />
            <Link to="/inventory" className="ml-2">
            Settings
            </Link>
          </li>



          {/* Add more links as necessary */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
