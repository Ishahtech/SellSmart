import { useState } from "react";

const GenerateCashierCredentials = () => {
  const [cashierCode, setCashierCode] = useState("");
  const [cashierPassword, setCashierPassword] = useState("");

  const generateCredentials = () => {
    const newCode = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code
    const newPassword = Math.random().toString(36).slice(-8); // 8-character password
    setCashierCode(newCode);
    setCashierPassword(newPassword);
    // Here you can save to the database if needed
  };

  return (
    <div>
      <h2>Generate Cashier Credentials</h2>
      <button onClick={generateCredentials}>Generate Credentials</button>
      <div>
        <p>Cashier Code: {cashierCode}</p>
        <p>Cashier Password: {cashierPassword}</p>
      </div>
    </div>
  );
};

export default GenerateCashierCredentials;
