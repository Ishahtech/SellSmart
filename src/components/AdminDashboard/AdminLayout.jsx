import Navbar from "./Navbar";
import Sidebar from "./sidebar";
import Content from "./Content";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar className="w-64 h-full bg-gray-800 text-white" />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 bg-white">
        {/* Navbar */}
        <Navbar className="bg-gray-900 text-white p-4" />

        {/* Content Area */}
        <div className="flex-1 p-4 overflow-auto">
          <Content />
          {/* <div>{<Outlet />}</div> */}
        </div>
        
      </div>
    </div>
  );
}

export default AdminLayout;
