import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import buttonIcons from "../buttonIcons";

const SendOTP = () => {
  // Filter buttons into two separate arrays for display

  // Email and WhatsApp
  const firstRowButtons = buttonIcons.slice(0, 2);

  // SMS and Missed Call
  const secondRowButtons = buttonIcons.slice(2);

  return (
    <div className="mb-4">
      <span className="block mb-2 text-gray-900">Send OTP:</span>
      <div className="space-y-2">
        
        {/* First row */}
        <div className="flex justify-between">
          {firstRowButtons.map((button, index) => (
            <button
              key={index}
              className="flex items-center flex-1 py-2 px-3 border rounded ml-1 hover:bg-blue-400 hover:text-white rounded-xl"
            >
              <FontAwesomeIcon icon={button.icon} className="w-5 h-5 mr-2" />
              {button.text}
            </button>
          ))}
        </div>

        {/* Second row */}
        <div className="flex justify-between">
          {secondRowButtons.map((button, index) => (
            <button
              key={index}
              className="flex items-center flex-1 py-2 px-3 border rounded ml-1 hover:bg-blue-400 hover:text-white rounded-xl"
            >
              <FontAwesomeIcon icon={button.icon} className="w-5 h-5 mr-2" />
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SendOTP;
