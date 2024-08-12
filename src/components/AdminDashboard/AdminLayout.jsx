import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Inventory from "./Inventory";
import Users from "./Users";
// Import other components for respective pages
// import Products from "./Products";
// import Customers from "./Customers";
// import Reports from "./Reports";
// import Settings from "./Settings";

function AdminLayout() {
  // State to manage the current page
  const [activePage, setActivePage] = useState("Content");

  // Function to render the active component
  const renderContent = () => {
    switch (activePage) {
      case "Users":
        return <Users />;
      case "Inventory":
        return <Inventory />;
      case "Products":
        return <Products />;
      case "Customers":
        return <Customers />;
      case "Reports":
        return <Reports />;
      case "Settings":
        return <Settings />;
      default:
        return <Content />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar className="w-64 h-full bg-gray-800 text-white" setActivePage={setActivePage} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 bg-gray-200">
        {/* Navbar */}
        <Navbar className="bg-gray-900 text-white p-4" />

        {/* Content Area */}
        <div className="flex-1 p-4 overflow-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
