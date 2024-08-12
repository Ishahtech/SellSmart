import React from 'react';
import { FaRegBell, FaSearch  } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="relative text-gray-600">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-200 h-10 px-5 pr-10 rounded text-sm focus:outline-none"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaRegBell className="h-7 w-7 text-gray-700" />
        <CgProfile className="h-7 w-7 text-gray-700" />
      </div>
    </nav>
  );
};

export default Navbar;
