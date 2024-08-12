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
          </Route>
          <Route path="/admin" element={<Layout />}>
            <Route index element={<Admin />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
