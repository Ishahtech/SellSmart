/* eslint-disable react/no-unescaped-entities */

import { useNavigate } from "react-router-dom";
import "./LoginScreen.css";
import booksell from "../../images/booksell.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

const LoginScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
      <div className="w-11/12 sm:w-4/5 md:w-1/2 lg:w-1/3 bg-white p-8 rounded-lg shadow-lg">
        {/* Back button and title */}
        <div className="flex items-center mb-6">
          <FontAwesomeIcon
            icon={faLessThan}
            className="h-8 w-8 bg-blue-500 text-white p-2 rounded-full cursor-pointer"
            onClick={() => navigate("/")}
          />
          <h2 className="text-3xl sm:text-4xl text-blue-500 mx-auto">Log in</h2>
        </div>

        {/* Welcome message */}
        <h3 className="text-lg sm:text-xl mb-2">Welcome to SellSmart!</h3>
        <p className="text-base text-gray-600 mb-6">
          Select login as the owner or employee to continue.
        </p>

        {/* Image */}
        <img
          src={booksell}
          alt="booksell"
          className="w-28 h-auto mx-auto mb-8"
        />

        {/* Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => navigate("/Owner")}
            className="flex items-center justify-center w-full h-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faUser} className="h-5 w-5 mr-2" />
            Log in as Owner
          </button>

          <div className="text-gray-600 text-center">Or</div>

          <button
            onClick={() => navigate("/Employee")}
            className="flex items-center justify-center w-full h-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faUsers} className="h-5 w-5 mr-2" />
            Log in as Employee
          </button>
        </div>

        {/* Sign-up link */}
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
