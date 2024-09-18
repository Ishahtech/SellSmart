import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Assuming you have a function to verify login credentials
    const isLoginSuccessful = true; // Replace this with actual logic
    if (isLoginSuccessful) {
      // Redirect to admin page upon successful login
      navigate("/admin");
    } else {
      alert("Login failed. Please try again.");
    }
  };

  return (
    <>
      <button
        onClick={handleLogin}
        type="submit"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-xl text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Log in
      </button>
    </>
  );
};

export default LoginButton;
