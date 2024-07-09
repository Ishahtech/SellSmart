import React from "react";

const LoginOwner = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-5">Log in as Owner</h2>
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="w-full p-3 border rounded mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded mb-4"
          />
          <div className="mb-4">
            <span className="block mb-2">Send OTP:</span>
            <div className="flex justify-between">
              <button className="flex-1 py-2 px-3 border rounded mr-1">
                Email
              </button>
              <button className="flex-1 py-2 px-3 border rounded mx-1">
                WhatsApp
              </button>
              <button className="flex-1 py-2 px-3 border rounded mx-1">
                SMS
              </button>
              <button className="flex-1 py-2 px-3 border rounded ml-1">
                Missed Call
              </button>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded mb-4">
            Login
          </button>
          <a href="#" className="text-blue-600">
            Forgot Password?
          </a>
        </div>
      </div>
    </>
  );
};

export default LoginOwner;
