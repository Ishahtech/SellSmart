import CashierCodeField from "./CashierCodeField";
import LoginButton from "./LoginButton";
import PasswordField from "./PasswordField";
 


const LoginEmployee = () => {
  const code1 = "Cashier code"

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg p-6 max-w-lg w-full space-y-20 shadow-xl">
          <div>
            <h2 className="text-center text-4xl font-bold text-blue-500 mt-6">
              Log in as Employee
            </h2>
          </div>
          <form className=" space-y-12">
            <input type="hidden" name="remember" defaultValue="true" />
            <CashierCodeField />
            <PasswordField />
            <br /><br />
            <LoginButton />

            <div className="flex items-center justify-between"></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginEmployee;
