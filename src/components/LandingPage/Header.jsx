import posImage from "../../images/posImage.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className="Landing w-screen h-screen bg-cover"
      style={{ backgroundImage: `url(${posImage})` }}
    >
      <header className="header flex justify-between items-center py-4 px-4 sm:px-6 md:px-10 bg-white relative z-30">
        <div className="logo text-lg sm:text-xl md:text-2xl font-bold">
          SellSmart
        </div>
        <nav className="nav hidden md:flex">
          <a href="#home" className="mx-2 md:mx-4 text-black font-medium">
            Home
          </a>
          <a href="#features" className="mx-2 md:mx-4 text-black font-medium">
            Features
          </a>
          <a href="#about" className="mx-2 md:mx-4 text-black font-medium">
            About us
          </a>
          <a href="#help" className="mx-2 md:mx-4 text-black font-medium">
            Help
          </a>
          <a href="#contact" className="mx-2 md:mx-4 text-black font-medium">
            Contact
          </a>
        </nav>
        <div className="auth-buttons hidden md:flex">
          <button
            onClick={() => navigate("/admin")}
            className="login px-4 sm:px-6 md:px-10 py-2 border-2 border-blue-800 text-blue-800 font-medium rounded-lg hover:bg-blue-800 hover:text-white"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/Signup")}
            className="signup px-4 sm:px-6 md:px-10 py-2 border-2 border-blue-800 text-blue-800 font-medium rounded-lg hover:bg-blue-800 hover:text-white"
          >
            Signup
          </button>
        </div>
        <div className="mobile-menu md:hidden">
          <button onClick={toggleSidebar} className="text-black p-4">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-40 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-5 right-5 text-black"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <nav className="flex flex-col p-8 space-y-6">
          <a href="#home" className="text-black font-medium text-lg">
            Home
          </a>
          <a href="#features" className="text-black font-medium text-lg">
            Features
          </a>
          <a href="#about" className="text-black font-medium text-lg">
            About us
          </a>
          <a href="#help" className="text-black font-medium text-lg">
            Help
          </a>
          <a href="#contact" className="text-black font-medium text-lg">
            Contact
          </a>
          <a
            onClick={() => {
              navigate("/admin");
              toggleSidebar(); // Close the sidebar after clicking
            }}
            className="text-black font-medium text-lg cursor-pointer"
          >
            Login
          </a>
          <a
            onClick={() => {
              navigate("/Signup");
              toggleSidebar(); // Close the sidebar after clicking
            }}
            className="text-black font-medium text-lg cursor-pointer"
          >
            Signup
          </a>
        </nav>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}

      <main
        className={`main flex items-center justify-center h-[calc(100vh-80px)] relative text-white transition duration-300 ${
          isSidebarOpen ? "backdrop-blur-md" : ""
        }`}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div
          className="hero-text max-w-none px-4 sm:px-6 md:px-0"
          style={{ top: "3rem" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-5 md:w-[600px] leading-tight">
            Effortlessly streamline and{" "}
            <span className="block sm:inline">enhance your sales and</span>{" "}
            <span className="block mt-2 sm:mt-0 md:inline">
              product management.
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-lg mb-10 w-[90%] md:w-[400px] leading-tight">
            Monitor your goods and sales with our intuitive{" "}
            <span className="block mt-2">inventory manager.</span>
          </p>
          <div className="cta-buttons flex flex-col sm:flex-row md:flex-row justify-center">
            <button
              onClick={() => navigate("/Signup")}
              className="get-started px-6 sm:px-8 md:px-8 py-3 border-2 border-white text-white font-medium rounded-md bg-transparent hover:bg-blue-800 hover:border-blue-800 hover:text-white mb-4 sm:mb-0 md:mb-0 md:mr-4"
            >
              Get Started
            </button>
            <button className="watch-demo px-6 py-3 border-2 border-white text-white font-medium rounded-md flex justify-center items-center bg-transparent hover:bg-blue-800 hover:border-blue-800 hover:text-white">
              <FontAwesomeIcon icon={faPlay} className="video mr-2" />
              Watch Demo
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;
