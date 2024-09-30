import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/LoginScreen/LoginScreen"; // Adjust the path as necessary
import Signup from "./components/Signup.jsx";
import LoginOwner from "./components/LoginOwner";
import LoginEmployee from "./components/LoginEmployee";
import WelcomeScreen from "./components/WelcomeScreen.jsx";
import Wholelanding from "./components/LandingPage/Wholelanding.jsx";
import Manager from "./components/ManagerDashboard/Manager.jsx";
import Admin from "./components/AdminDashboard/Admin.jsx";
import Layout from "./components/Layout.jsx";
import InventoryContent from "./components/ManagerDashboard/InventoryContent.jsx";
import Dashboard from "./components/CashierDashboard/Dashboard.jsx";
import Inventory from "./components/Inventory/Inventory.jsx";
import InventoryList from "./components/Inventory/InventoryList.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Routes without the Sidebar */}
          <Route path="/" element={<Wholelanding />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/employee" element={<LoginEmployee />} />
          <Route path="/owner" element={<LoginOwner />} />

          {/* Routes with the Sidebar */}
          <Route path="/manager" element={<Layout />}>
            <Route index element={<Manager />} />
            <Route path="inventory/*" element={<Inventory />} />
          </Route>

          <Route path="/login-owner" element={<LoginOwner />} />
          <Route path="/admin" element={<Admin />} />

          <Route path="/admin" element={<Layout />}>
            <Route index element={<Admin />} />
          </Route>

          <Route path="/inventory" element={<Layout />}>
            <Route index element={<InventoryContent />} />
          </Route>

          <Route path="/cashier" element={<Layout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
