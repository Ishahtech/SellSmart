// import CashierCodeField from "./CashierCodeField";
// import LoginButton from "./LoginButton";
// import PasswordField from "./PasswordField";

// const LoginEmployee = () => {
//   const code1 = "Cashier code"

//   return (
//     <>
//       <div className="min-h-screen flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="bg-white rounded-lg p-6 max-w-lg w-full space-y-20 shadow-xl">
//           <div>
//             <h2 className="text-center text-4xl font-bold text-blue-500 mt-6">
//               Log in as Employee
//             </h2>
//           </div>
//           <form className=" space-y-12">
//             <input type="hidden" name="remember" defaultValue="true" />
//             <CashierCodeField />
//             <PasswordField />
//             <br /><br />
//             <LoginButton />

//             <div className="flex items-center justify-between"></div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginEmployee;

// import { useState } from "react";
// import CashierCodeField from "./CashierCodeField";
// import PasswordField from "./PasswordField";
// import LoginButton from "./LoginButton";

// const LoginEmployee = ({ storedCashierCode, storedPassword }) => {
//   const [cashierCode, setCashierCode] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (cashierCode === storedCashierCode && password === storedPassword) {
//       // Redirect to employee dashboard or perform login actions
//       alert("Login successful");
//     } else {
//       setError("Invalid cashier code or password.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="bg-white rounded-lg p-6 max-w-lg w-full space-y-20 shadow-xl">
//         <h2 className="text-center text-4xl font-bold text-blue-500 mt-6">
//           Log in as Employee
//         </h2>
//         <form onSubmit={handleLogin} className="space-y-12">
//           <CashierCodeField
//             value={cashierCode}
//             onChange={(e) => setCashierCode(e.target.value)}
//           />
//           <PasswordField
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {error && <p style={{ color: "red" }}>{error}</p>}
//           <LoginButton />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginEmployee;

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CashierCodeField from "./CashierCodeField";
import PasswordField from "./PasswordField";
import LoginButton from "./LoginButton";

const LoginEmployee = ({ storedCashierCode, storedPassword }) => {
  const [cashierCode, setCashierCode] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = (e) => {
    e.preventDefault();
    if (cashierCode === storedCashierCode && password === storedPassword) {
      // Redirect to cashier's dashboard
      navigate("/cashier"); // Update with the actual path to the cashier's page
    } else {
      setError("Invalid cashier code or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full space-y-20 shadow-xl">
        <h2 className="text-center text-4xl font-bold text-blue-500 mt-6">
          Log in as Employee
        </h2>
        <form onSubmit={handleLogin} className="space-y-12">
          <CashierCodeField
            value={cashierCode}
            onChange={(e) => setCashierCode(e.target.value)}
          />
          <PasswordField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <LoginButton />
        </form>
      </div>
    </div>
  );
};

export default LoginEmployee;
