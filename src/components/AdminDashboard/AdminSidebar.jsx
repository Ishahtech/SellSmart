import React from "react";
import { CgMenuRound } from "react-icons/cg";
import { FaUsers, FaSitemap } from "react-icons/fa";
import { BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsPeopleFill } from "react-icons/bs";

const AdminSidebar = ({ isAdminOpen, toggleAdmin, setActivePage }) => {
  return (
    <aside
      className={`h-screen bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
        isAdminOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
    >
      <div className="text-white flex items-center justify-between px-4">
        <span className="text-2xl font-extrabold">SellSmart</span>
        <button className="md:hidden" onClick={toggleAdmin}>
          <CgMenuRound className="text-3xl" />
        </button>
      </div>
      <nav>
        <ul className="space-y-2">
          <li onClick={() => setActivePage("Content")}>
            <div className="flex items-center px-4 py-2 rounded-md cursor-pointer text-gray-400 hover:bg-gray-700 hover:text-white">
              <CgMenuRound />
              <span className="ml-2">Dashboard</span>
            </div>
          </li>
          <li onClick={() => setActivePage("Users")}>
            <div className="flex items-center px-4 py-2 rounded-md cursor-pointer text-gray-400 hover:bg-gray-700 hover:text-white">
              <FaUsers />
              <span className="ml-2">Users</span>
            </div>
          </li>
          <li onClick={() => setActivePage("Inventory")}>
            <div className="flex items-center px-4 py-2 rounded-md cursor-pointer text-gray-400 hover:bg-gray-700 hover:text-white">
              <BsListCheck />
              <span className="ml-2">Inventory</span>
            </div>
          </li>
          <li onClick={() => setActivePage("Products")}>
            <div className="flex items-center px-4 py-2 rounded-md cursor-pointer text-gray-400 hover:bg-gray-700 hover:text-white">
              <FaSitemap />
              <span className="ml-2">Products</span>
            </div>
          </li>
          <li onClick={() => setActivePage("Customers")}>
            <div className="flex items-center px-4 py-2 rounded-md cursor-pointer text-gray-400 hover:bg-gray-700 hover:text-white">
              <BsPeopleFill />
              <span className="ml-2">Customers</span>
            </div>
          </li>
          <li onClick={() => setActivePage("Reports")}>
            <div className="flex items-center px-4 py-2 rounded-md cursor-pointer text-gray-400 hover:bg-gray-700 hover:text-white">
              <BsMenuButtonWideFill />
              <span className="ml-2">Reports</span>
            </div>
          </li>
          <li onClick={() => setActivePage("Settings")}>
            <div className="flex items-center px-4 py-2 rounded-md cursor-pointer text-gray-400 hover:bg-gray-700 hover:text-white">
              <BsFillGearFill />
              <span className="ml-2">Settings</span>
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
