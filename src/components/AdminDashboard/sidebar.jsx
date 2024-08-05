import React from "react";
// import { IoMdMenu } from "react-icons/io";
import { CgMenuRound } from "react-icons/cg";
import { FaUsers, FaSitemap, FaShoppingBasket } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";

const Sidebar = ({ isActive, toggleSidebar }) => {
  return (
    <>
      <aside className="h-screen bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <div className="text-white flex items-center space-x-2 px-4">
          <span className="text-2xl font-extrabold">SellSmart</span>
        </div>
        <nav>
          <ul className="space-y-2">
            <li className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
              <CgMenuRound className=" " />
              <a href="#" className="ml-2">
                Dashboard
              </a>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
              <FaUsers />
              <a href="#" className="ml-2">
                Users
              </a>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
              <FaUsers />
              <a href="#" className="ml-2">
                Inventory
              </a>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
             <FaSitemap /> <a href="#" className="ml-2">
                Products
              </a>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
            <FaShoppingBasket /><a href="#" className="ml-2">
                Orders
              </a>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
            <TbReportSearch /><a href="#" className="ml-2">
                 Reports
              </a>
            </li>
          </ul>
          {/* <button className='absolute top-4 right-4 lg:hidden'>
            <IoMdMenu className='w-7 h-7 text-blue-900'/>

        </button> */}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
