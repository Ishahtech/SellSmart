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
