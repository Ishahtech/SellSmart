import LoginButton from "./LoginButton";
import PasswordField from "./PasswordField";
import EmailCodeField from "./EmailCodeField";

const Login = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg w-full space-y-20">
          <div>
            <h2 className="text-center text-4xl font-bold text-blue-500">
              Log in as Employee
            </h2>
          </div>
          <form className="mt-8 space-y-12">
            <input type="hidden" name="remember" defaultValue="true" />
            <EmailCodeField />
            <PasswordField />
            <LoginButton />

            {/* <div className="flex items-center justify-between"></div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
