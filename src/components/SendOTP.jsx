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
        <div className="flex space-x-1">
          {firstRowButtons.map((button, index) => (
            <button
              key={index}
              className="flex items-center py-2 px-5 border rounded ml-1 hover:bg-blue-400 hover:text-white rounded-xl"
            >
              <FontAwesomeIcon icon={button.icon} className="w-4 h-4 mr-1" />
              {button.text}
            </button>
          ))}
        </div>
         
        {/* Second row */}
        <div className="flex space-x-1">
          {secondRowButtons.map((button, index) => (
            <button
              key={index}
              className="flex items-center py-2 px-5 border rounded ml-1 hover:bg-blue-400 hover:text-white rounded-xl"
            >
              <FontAwesomeIcon icon={button.icon} className="w-4 h-4 mr-1" />
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SendOTP;
