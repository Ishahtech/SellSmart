import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/LoginScreen/LoginScreen"; // Adjust the path as necessary
import Signup from "./components/Signup.jsx";
import LoginOwner from "./components/LoginOwner";
import LoginEmployee from "./components/LoginEmployee";
import WelcomeScreen from "./components/WelcomeScreen.jsx";
import Wholelanding from "./components/LandingPage/Wholelanding.jsx";
import Manager from "./components/ManagerDashboard/Manager.jsx";
import Admin from "./components/AdminDashboard/Admin.jsx";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Wholelanding />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Employee" element={<LoginEmployee />} />
          <Route path="/Owner" element={<LoginOwner />} />
          <Route path="/Manager" element={<Manager />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
