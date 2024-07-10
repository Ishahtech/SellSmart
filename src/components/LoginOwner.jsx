import LoginButton from "./LoginButton";
import PasswordField from "./PasswordField";
import EmailCodeField from "./EmailField";
import SendOTP from "./SendOTP";

const LoginOwner = () => {

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-10">
          <div>
            <h2 className="text-center text-4xl font-bold text-blue-500 mt-4">
              Log in as Owner
            </h2>
          </div>
          <EmailCodeField />
          <PasswordField />
          <SendOTP />
          <LoginButton />
          <a
            href="#"
            className="text-blue-500 flex items-center justify-center"
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </>
  );
};

export default LoginOwner;
