import React, { useState } from "react";
import SalesContent from "./SalesContent";
import InventoryContent from "./InventoryContent";
import ReportsContent from "./ReportsContent";
import CashierContent from "./CashierContent";

const DashboardContent = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderContent = () => {
    switch (activeTab) {
      case "Sales":
        return <SalesContent />;
      case "Inventory":
        return <InventoryContent />;
      case "Reports":
        return <ReportsContent />;
      case "Cashiers":
        return <CashierContent />;
      default:
        return (
          <div className="p-4 bg-white shadow-md rounded mt-4">
            Overview Content
          </div>
        );
    }
  };
  return (
    <>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">{activeTab}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            className={`p-4 bg-white shadow-md rounded cursor-pointer ${
              activeTab === "Sales" ? "bg-blue-400" : ""
            }`}
            onClick={() => setActiveTab("Sales")}
          >
            Sales
          </div>
          <div
            className={`p-4 bg-white shadow-md rounded cursor-pointer ${
              activeTab === "Inventory" ? "bg-blue-400" : ""
            }`}
            onClick={() => setActiveTab("Inventory")}
          >
            Inventory
          </div>
          <div
            className={`p-4 bg-white shadow-md rounded cursor-pointer ${
              activeTab === "Reports" ? "bg-blue-400" : ""
            }`}
            onClick={() => setActiveTab("Reports")}
          >
            Reports
          </div>
          <div
            className={`p-4 bg-white shadow-md rounded cursor-pointer ${
              activeTab === "Cashiers" ? "bg-blue-400" : ""
            }`}
            onClick={() => setActiveTab("Cashiers")}
          >
            Cashiers
          </div>
        </div>
      </div>
      {renderContent()}
    </>
  );
};

export default DashboardContent;
