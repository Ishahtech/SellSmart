// import React from "react";
// import { Link } from "react-router-dom";
// import { CgMenuRound } from "react-icons/cg";
// import { FaUsers, FaSitemap } from "react-icons/fa";
// import { BsCart3, BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsPeopleFill } from "react-icons/bs";

// const Sidebar = () => {
//   return (
//     <aside className="h-screen bg-gray-800 text-white w-64 space-y-6 py-7 px-2">
//       <div className="text-white flex items-center space-x-2 px-4">
//         <span className="text-2xl font-extrabold">SellSmart</span>
//       </div>
//       <nav>
//         <ul className="space-y-2">
//           <li className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
//             <CgMenuRound />
//             <Link to="/admin" className="ml-2">
//               Dashboard
//             </Link>
//           </li>
//           <li className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
//             <FaUsers />
//             <Link to="/admin" className="ml-2">
//               Admin
//             </Link>
//           </li>

//           <li className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
//             <FaUsers />
//             <Link to="/manager" className="ml-2">
//               Manager
//             </Link>
//           </li>

//           <li className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
//             <FaUsers />
//             <Link to="/cashier" className="ml-2">
//               Cashier
//             </Link>
//           </li>

//           <li className="flex items-center px-4 py-2 text-bold text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
//             <BsListCheck  />
//             <Link to="/inventory" className="ml-2">
//               Inventory
//             </Link>
//             </li>

//           <li className="flex items-center px-4 py-2 text-bold text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
//             <FaSitemap  />
//             <Link to="/inventory" className="ml-2">
//               Products
//             </Link>
//           </li>

//           <li className="flex items-center px-4 py-2 text-bold text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
//             <BsPeopleFill  />
//             <Link to="/inventory" className="ml-2">
//             Customers
//             </Link>
//           </li>

//           <li className="flex items-center px-4 py-2 text-bold text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
//             <BsMenuButtonWideFill  />
//             <Link to="/inventory" className="ml-2">
//             Reports
//             </Link>
//           </li>

//           <li className="flex items-center px-4 py-2 text-bold text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
//             <BsFillGearFill  />
//             <Link to="/inventory" className="ml-2">
//             Settings
//             </Link>
//           </li>

//           <li className="flex items-center px-4 py-8 text-bold text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
//             <BsCart3  />
//             <Link to="/login" className="ml-2">
//             Log Out
//             </Link>
//           </li>

//           {/* Add more links as necessary */}
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";
import { CgMenuRound } from "react-icons/cg";
import { FaUsers, FaSitemap } from "react-icons/fa";
import {
  BsCart3,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsPeopleFill,
} from "react-icons/bs";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Sidebar */}
      <aside
        // className={`fixed top-0 left-0 h-screen bg-gray-800 text-white w-64 space-y-6 py-7 px-2 transform ${
        //   isOpen ? "translate-x-0" : "-translate-x-64"
        // } transition-transform lg:static lg:translate-x-0`}
        className={`fixed top-0 left-0 h-screen bg-gray-800 text-white w-64 space-y-6 py-7 px-2 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:static lg:translate-x-0`}
      >
        <div className="text-white flex items-center space-x-2 px-4">
          <span className="text-2xl font-extrabold">SellSmart</span>
        </div>
        <nav>
          <ul className="space-y-2">
            {/* Navigation Items */}
            <li className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
              <CgMenuRound />
              <Link to="/admin" className="ml-2">
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
              <Link to="/manager" className="ml-2">
                Manager
              </Link>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
              <FaUsers />
              <Link to="/cashier" className="ml-2">
                Cashier
              </Link>
            </li>
            <li className="flex items-center px-4 py-2 text-bold text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
              <BsListCheck />
              <Link to="/inventory" className="ml-2">
                Inventory
              </Link>
            </li>
            <li className="flex items-center px-4 py-2 text-bold text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
              <FaSitemap />
              <Link to="/inventory" className="ml-2">
                Products
              </Link>
            </li>
            <li className="flex items-center px-4 py-2 text-bold text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
              <BsPeopleFill />
              <Link to="/inventory" className="ml-2">
                Customers
              </Link>
            </li>
            <li className="flex items-center px-4 py-2 text-bold text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
              <BsMenuButtonWideFill />
              <Link to="/inventory" className="ml-2">
                Reports
              </Link>
            </li>
            <li className="flex items-center px-4 py-2 text-bold text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
              <BsFillGearFill />
              <Link to="/inventory" className="ml-2">
                Settings
              </Link>
            </li>
            <li className="flex items-center px-4 py-8 text-bold text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
              <BsCart3 />
              <Link to="/login" className="ml-2">
                Log Out
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Hamburger Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={toggleSidebar}
      >
        <CgMenuRound className="w-8 h-8 text-white" />
      </button>
    </>
  );
};

export default Sidebar;


// import React from "react";
// import { Link } from "react-router-dom";
// import { CgMenuRound } from "react-icons/cg";
// import { FaUsers, FaSitemap } from "react-icons/fa";
// import {
//   BsCart3,
//   BsListCheck,
//   BsMenuButtonWideFill,
//   BsFillGearFill,
//   BsPeopleFill,
// } from "react-icons/bs";

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   return (
//     <>
//       {/* Sidebar */}
//       <aside
//         className={`fixed top-0 left-0 h-screen bg-gray-800 text-white w-64 space-y-6 py-7 px-2 transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out lg:static lg:translate-x-0`}
//       >
//         <div className="text-white flex items-center space-x-2 px-4">
//           <span className="text-2xl font-extrabold">SellSmart</span>
//         </div>
//         <nav>
//           <ul className="space-y-2">
//             {/* Navigation Items */}
//             <li className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md">
//               <CgMenuRound />
//               <Link to="/admin" className="ml-2" onClick={toggleSidebar}>
//                 Dashboard
//               </Link>
//             </li>
//             {/* Other nav items */}
//           </ul>
//         </nav>
//       </aside>

//       {/* Hamburger Menu Button */}
//       {/* <button
//         className="fixed top-4 left-4 z-50 lg:hidden"
//         onClick={toggleSidebar}
//       >
//         <CgMenuRound className="w-8 h-8 text-white" />
//       </button> */}
//     </>
//   );
// };

// export default Sidebar;

// original without changes
