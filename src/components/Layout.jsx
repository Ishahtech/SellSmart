import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./AdminDashboard/sidebar";

const Layout = () => {
  return (
    <div className="flex">
      < Sidebar/>
      <main className="flex-grow p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import Sidebar from "./AdminDashboard/sidebar";
// import { FaBars } from "react-icons/fa"; // Import any icon library or create your own hamburger icon

// const Layout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex">
//       {/* Hamburger Icon (only visible on small screens) */}
//       <button 
//         className="p-4 md:hidden" 
//         onClick={toggleSidebar}
//         aria-label="Toggle Sidebar"
//       >
//         <FaBars size={24} />
//       </button>

//       {/* Sidebar (toggle visibility on small screens) */}
//       <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}>
//         <Sidebar />
//       </div>

//       {/* Main content */}
//       <main className="flex-grow p-4 ml-0 md:ml-64">
//         <Outlet />
//       </main>

//       {/* Overlay (for closing the sidebar on mobile when clicking outside) */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 md:hidden"
//           onClick={toggleSidebar}
//         />
//       )}
//     </div>
//   );
// };

// export default Layout;
