import React, { useState } from "react";

import ManagerHeader from "./ManagerHeader";
import DashboardContent from "./DashboardContent";

const Manager = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex">
      
      <div className="flex-1 flex flex-col">
        <ManagerHeader toggleSidebar={toggleSidebar} />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Manager;
