import LoginButton from "./LoginButton";
import PasswordField from "./PasswordField";
import EmailCodeField from "./EmailCodeField";

const LoginOwner = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-10">
          <div>
            <h2 className="text-center text-4xl font-bold text-blue-500 mt-6">
              Log in as Owner
            </h2>
          </div>
          <EmailCodeField />
          <PasswordField />
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
          <LoginButton />
          <a href="#" className="text-blue-500 flex items-center justify-center">Forgot Password?</a>
        </div>
      </div>
    </>
  );
};

export default LoginOwner;
